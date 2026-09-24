"use client";

import { useEffect, useSyncExternalStore } from "react";
import { copy, STORAGE_KEY, type Lang } from "@/lib/content";

const LANG_EVENT = "kenny-mack-lang-change";

function isLang(value: string | null): value is Lang {
  return value === "en" || value === "vi" || value === "es";
}

function subscribeLang(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANG_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANG_EVENT, onStoreChange);
  };
}

function readLang(): Lang {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return isLang(stored) ? stored : "en";
}

export function chooseLang(next: Lang) {
  window.localStorage.setItem(STORAGE_KEY, next);
  window.dispatchEvent(new Event(LANG_EVENT));
}

export function useLang() {
  const lang = useSyncExternalStore(subscribeLang, readLang, () => "en" as Lang);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return { lang, t: copy[lang] };
}
