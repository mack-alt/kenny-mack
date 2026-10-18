"use client";

import { useState, useSyncExternalStore } from "react";
import {
  DEMO_PHONE_DISPLAY,
  DEMO_PHONE_TEL,
  STARTER_MONTHLY,
  STARTER_SETUP,
  WEEKS_PER_MONTH,
} from "@/lib/lid";

type Period = "week" | "month";

type QueryState = {
  calls: string;
  value: string;
  period: Period;
  booked: number;
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const moneyExact = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

const jobsFormat = new Intl.NumberFormat("en-US", {
  maximumFractionDigits: 1,
});

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("popstate", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("popstate", listener);
  };
}

function getSearchSnapshot() {
  return window.location.search;
}

function getServerSearchSnapshot() {
  return "";
}

function notifySearchListeners() {
  listeners.forEach((listener) => listener());
}

function readNumber(raw: string): number | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;
  const value = Number(trimmed);
  if (!Number.isFinite(value) || value < 0) return null;
  return value;
}

function parseQuery(search: string): QueryState {
  const params = new URLSearchParams(search);
  const callsRaw = params.get("calls") ?? "";
  const valueRaw = params.get("value") ?? "";
  const bookedRaw = params.get("booked");
  let booked = 0;
  if (bookedRaw !== null && readNumber(bookedRaw) !== null) {
    booked = Math.min(100, Math.max(0, Math.round(Number(bookedRaw))));
  }
  return {
    calls: readNumber(callsRaw) === null ? "" : callsRaw.trim(),
    value: readNumber(valueRaw) === null ? "" : valueRaw.trim(),
    period: params.get("period") === "month" ? "month" : "week",
    booked,
  };
}

function writeQuery(next: QueryState) {
  const params = new URLSearchParams(window.location.search);
  params.delete("period");
  params.delete("calls");
  params.delete("value");
  params.delete("booked");
  const callsSet = readNumber(next.calls) !== null;
  const valueSet = readNumber(next.value) !== null;
  if (callsSet || valueSet || next.booked !== 0 || next.period === "month") {
    params.set("period", next.period);
    if (callsSet) params.set("calls", next.calls.trim());
    if (valueSet) params.set("value", next.value.trim());
    params.set("booked", String(next.booked));
  }
  const qs = params.toString();
  const current = window.location.search.replace(/^\?/, "");
  if (qs === current) return;
  const path = `${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`;
  window.history.replaceState(window.history.state, "", path);
  notifySearchListeners();
}

export function MissedCallCalculator() {
  const search = useSyncExternalStore(subscribe, getSearchSnapshot, getServerSearchSnapshot);
  const parsed = parseQuery(search);
  const [copied, setCopied] = useState(false);

  function update(partial: Partial<QueryState>) {
    setCopied(false);
    writeQuery({ ...parsed, ...partial });
  }

  async function copyResultLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const calls = readNumber(parsed.calls);
  const jobValue = readNumber(parsed.value);
  const booked = parsed.booked / 100;
  const jobsPerMonth =
    calls === null ? null : parsed.period === "week" ? calls * WEEKS_PER_MONTH * booked : calls * booked;
  const revenuePerMonth = jobsPerMonth === null || jobValue === null ? null : jobsPerMonth * jobValue;
  const revenuePerYear = revenuePerMonth === null ? null : revenuePerMonth * 12;
  const jobsToCover = jobValue !== null && jobValue > 0 ? Math.ceil(STARTER_MONTHLY / jobValue) : null;
  const periodWord = parsed.period === "week" ? "week" : "month";

  return (
    <form className="lid-calc" onSubmit={(event) => event.preventDefault()}>
      <div className="lid-calc-layout">
        <div className="lid-calc-fields">
          <fieldset className="lid-calc-period">
            <legend>Count missed calls per</legend>
            <div className="lid-calc-period-options">
              <label>
                <input
                  type="radio"
                  name="missed-call-period"
                  value="week"
                  checked={parsed.period === "week"}
                  onChange={() => update({ period: "week" })}
                />
                Week
              </label>
              <label>
                <input
                  type="radio"
                  name="missed-call-period"
                  value="month"
                  checked={parsed.period === "month"}
                  onChange={() => update({ period: "month" })}
                />
                Month
              </label>
            </div>
          </fieldset>
          <div className="lid-calc-field">
            <label htmlFor="lid-missed-calls">Missed calls per {periodWord}</label>
            <input
              id="lid-missed-calls"
              name="missed-calls"
              type="number"
              inputMode="decimal"
              min={0}
              step="any"
              placeholder="Your count"
              value={parsed.calls}
              onChange={(event) => update({ calls: event.target.value })}
            />
          </div>
          <div className="lid-calc-field">
            <label htmlFor="lid-job-value">Average job value ($)</label>
            <input
              id="lid-job-value"
              name="average-job-value"
              type="number"
              inputMode="decimal"
              min={0}
              step="any"
              placeholder="Your amount"
              value={parsed.value}
              onChange={(event) => update({ value: event.target.value })}
            />
          </div>
          <div className="lid-calc-field">
            <label htmlFor="lid-booked-percent">Percent of those callers who would have booked</label>
            <input
              id="lid-booked-percent"
              name="booking-percent"
              type="range"
              min={0}
              max={100}
              step={1}
              value={parsed.booked}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={parsed.booked}
              aria-valuetext={`${parsed.booked} percent`}
              aria-describedby="lid-booked-hint"
              onChange={(event) => update({ booked: Number(event.target.value) })}
            />
            <p className="lid-calc-hint" id="lid-booked-hint">
              {parsed.booked} percent. Move the slider to your own percent.
            </p>
          </div>
        </div>

        <div className="lid-calc-result-col">
          <article className="lid-calc-card">
            <div aria-live="polite">
              <p className="lid-calc-estimate">Estimate based on your numbers</p>
              <p className="lid-calc-figure">{revenuePerMonth === null ? "—" : money.format(revenuePerMonth)}</p>
              <p className="lid-calc-figure-label">Revenue lost per month</p>
              <p className="lid-calc-figure">{revenuePerYear === null ? "—" : money.format(revenuePerYear)}</p>
              <p className="lid-calc-figure-label">Revenue lost per year</p>
              <p className="lid-calc-jobs">
                {jobsPerMonth === null ? "—" : jobsFormat.format(jobsPerMonth)} jobs lost per month
              </p>
              <p className="lid-calc-compare">
                Locked In Front Desk Starter is ${STARTER_MONTHLY}/mo.
                {jobsToCover === null
                  ? " Enter a job value above $0 to see how many jobs would cover that monthly fee."
                  : ` ${jobsToCover} recovered ${jobsToCover === 1 ? "job" : "jobs"} per month would cover it.`}{" "}
                The setup fee is {money.format(STARTER_SETUP)}.
              </p>
            </div>
            <ul className="lid-calc-entered">
              <li>
                {calls === null ? `Missed calls per ${periodWord}: —` : `${parsed.calls.trim()} missed calls per ${periodWord}`}
              </li>
              <li>{jobValue === null ? "Average job value: —" : `${moneyExact.format(jobValue)} average job`}</li>
              <li>{parsed.booked}% would have booked</li>
            </ul>
            <footer className="lid-calc-brand">
              <p>Locked In Dispatch</p>
              <p>
                <a href={`tel:${DEMO_PHONE_TEL}`}>{DEMO_PHONE_DISPLAY}</a>
              </p>
            </footer>
          </article>
          <a className="lid-calc-call" href={`tel:${DEMO_PHONE_TEL}`}>
            Call the demo line
          </a>
          <p className="lid-calc-hint">
            {parsed.period === "week"
              ? `Monthly jobs use your weekly count times ${WEEKS_PER_MONTH} weeks, times the percent you set.`
              : "Monthly jobs use your monthly count times the percent you set."}{" "}
            The page link keeps your numbers, so you can share this result.
          </p>
          <button className="lid-calc-copy" type="button" onClick={copyResultLink}>
            {copied ? "Link copied" : "Copy result link"}
          </button>
        </div>
      </div>
    </form>
  );
}
