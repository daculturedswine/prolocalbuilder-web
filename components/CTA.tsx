"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Free-quote section. Real form (name/business/city/phone/details) that
 * submits via a `mailto:` link with all fields URL-encoded as the email
 * body. Works without any backend; can be upgraded later to Formspree/
 * Resend by replacing the submit handler.
 */
export function CTA() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: hidden field that humans never fill but bots do.
    // If non-empty, silently fail to look like a normal submit to the bot.
    if (data.get("company_url")) {
      setSubmitting(true);
      setTimeout(() => setSubmitting(false), 1500);
      return;
    }

    setSubmitting(true);
    // Strip CRLF from each field; mailto: encodes them but defense in depth
    // protects future upgrades to Formspree/Resend that may not.
    const clean = (v: FormDataEntryValue | null) =>
      String(v || "").replace(/[\r\n]+/g, " ").slice(0, 2000);

    const lines = [
      `Name: ${clean(data.get("name"))}`,
      `Business: ${clean(data.get("business"))}`,
      `City: ${clean(data.get("city"))}`,
      `Phone: ${clean(data.get("phone"))}`,
      ``,
      `${String(data.get("details") || "").slice(0, 4000)}`,
    ];
    const subject = `Quote request from ${clean(data.get("name")) || "a local business"}`;
    const body = lines.join("\n");
    const url = `mailto:${site.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setTimeout(() => setSubmitting(false), 1500);
  }

  return (
    <section
      id="quote"
      className="bg-white py-16 sm:pt-12 sm:pb-20 md:pt-16 md:pb-24"
    >
      <div className="container-narrow">
        <div className="rounded-lg border border-ink-200 bg-white p-8 shadow-card-hover sm:p-10 md:p-12">
          <span className="label">Free quote</span>
          <h2 className="text-h2-sm md:text-h2 text-ink-900">
            Tell us about your business.
          </h2>
          <p className="mt-3 text-body-lg text-ink-700">
            Send us the basics and we'll come back the same day with a quote
            and a few questions. Prefer phone?{" "}
            <a
              href={site.contact.phoneHref}
              aria-label={`Call ${site.contact.phone}`}
              className="font-semibold text-orange-500 underline-offset-2 hover:underline"
            >
              Call {site.contact.phone}
            </a>
            .
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 grid gap-5 text-left sm:grid-cols-2"
          >
            {/* Honeypot: bots fill every field, humans never see this. */}
            <div
              aria-hidden="true"
              className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
              style={{ position: "absolute" }}
            >
              <label htmlFor="company_url">
                Don&apos;t fill this in if you&apos;re human
              </label>
              <input
                id="company_url"
                name="company_url"
                type="text"
                tabIndex={-1}
                autoComplete="off"
              />
            </div>
            <Field
              id="quote-name"
              name="name"
              label="Your name"
              required
              autoComplete="name"
            />
            <Field
              id="quote-business"
              name="business"
              label="Business name"
              required
              autoComplete="organization"
            />
            <Field
              id="quote-city"
              name="city"
              label="City"
              required
              autoComplete="address-level2"
              placeholder="e.g. Appleton, WI"
            />
            <Field
              id="quote-phone"
              name="phone"
              label="Phone"
              type="tel"
              autoComplete="tel"
              placeholder="optional"
            />
            <div className="sm:col-span-2">
              <label
                htmlFor="quote-details"
                className="mb-1.5 block text-body-sm font-semibold text-ink-900"
              >
                What kind of site do you need?
              </label>
              <textarea
                id="quote-details"
                name="details"
                rows={4}
                placeholder="A few sentences. Industry, what you do, anything specific."
                className="w-full rounded-md border border-ink-200 bg-white px-4 py-3 text-body text-ink-900 placeholder:text-ink-400 transition-colors duration-200 focus-visible:border-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary btn-lg btn-block disabled:opacity-60"
              >
                {submitting ? "Opening email…" : "Send my quote request"}
              </button>
              <p
                id="quote-help"
                className="mt-3 text-body-sm text-ink-700"
              >
                This opens your email app with the message pre-filled. Most
                quotes go out the same day. Slowest reply has been the next
                morning.
              </p>
              <p className="mt-2 text-body-sm text-ink-700">
                No email app set up?{" "}
                <a
                  href={site.contact.phoneHref}
                  aria-label={`Call ${site.contact.phone}`}
                  className="font-semibold text-orange-500 underline-offset-2 hover:underline"
                >
                  Call {site.contact.phone}
                </a>{" "}
                or write to{" "}
                <a
                  href={site.contact.emailHref}
                  aria-label={`Email ${site.contact.email}`}
                  className="font-semibold text-orange-500 underline-offset-2 hover:underline"
                >
                  {site.contact.email}
                </a>{" "}
                directly.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
};

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  autoComplete,
  placeholder,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-body-sm font-semibold text-ink-900"
      >
        {label}
        {required && (
          <span aria-hidden="true" className="ml-1 text-orange-500">
            *
          </span>
        )}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-required={required || undefined}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="w-full rounded-md border border-ink-200 bg-white px-4 py-3 text-body text-ink-900 placeholder:text-ink-400 transition-colors duration-200 focus-visible:border-orange-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
      />
    </div>
  );
}
