"use client";

import { useState } from "react";
import { DEMO_PHONE_DISPLAY } from "@/lib/lid";

export function ContactForm() {
  const [status, setStatus] = useState("");

  return (
    <form
      className="lid-form"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus(
          `Nothing was sent. This form is a placeholder. Call the demo line at ${DEMO_PHONE_DISPLAY}.`,
        );
      }}
    >
      <p className="lid-form-note">Placeholder only. Nothing you type is saved or sent.</p>
      <div className="lid-field">
        <label htmlFor="lid-name">Your name</label>
        <input id="lid-name" name="name" autoComplete="name" required />
      </div>
      <div className="lid-field">
        <label htmlFor="lid-shop">Shop name</label>
        <input id="lid-shop" name="shop" autoComplete="organization" required />
      </div>
      <div className="lid-field">
        <label htmlFor="lid-phone">Phone</label>
        <input id="lid-phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className="lid-field">
        <label htmlFor="lid-email">Email</label>
        <input id="lid-email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="lid-field">
        <label htmlFor="lid-message">What do you want to talk about?</label>
        <textarea id="lid-message" name="message" rows={5} required />
      </div>
      <button className="lid-btn" type="submit">
        Try the form
      </button>
      <p className="lid-form-status" role="status">
        {status}
      </p>
    </form>
  );
}
