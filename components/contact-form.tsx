"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-lg border border-slate-200 bg-white p-8">
      <h2 className="font-serif text-2xl font-bold text-slate-900">Send a Message</h2>
      <form className="mt-5 space-y-4" onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700"
          />
        </div>
        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700"
          />
        </div>
        <button
          type="submit"
          className="inline-flex rounded-md bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-700 focus-visible:ring-offset-2"
        >
          Submit
        </button>
        {submitted && (
          <p className="text-sm text-slate-700" role="status" aria-live="polite">
            Thank you. Your message has been recorded in this demo form.
          </p>
        )}
      </form>
    </div>
  );
}