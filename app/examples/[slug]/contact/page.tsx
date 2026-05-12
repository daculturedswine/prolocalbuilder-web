import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { demos, getDemo } from "@/lib/demos";
import { DemoSubChrome } from "@/components/demos/_shared/DemoSubChrome";
import {
  PageEyebrow,
  PageHeading,
  PageLede,
  ContactPanel,
  themeForSlug,
} from "@/components/demos/_shared/SubPageBlocks";

export function generateStaticParams() {
  return demos.map((d) => ({ slug: d.slug }));
}
export const dynamicParams = false;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) return {};
  const url = `/examples/${slug}/contact`;
  return {
    title: `Contact ${demo.businessName} (concept)`,
    description: `Get in touch with ${demo.businessName}. Phone, email, and a quick message form.`,
    alternates: { canonical: url },
    robots: { index: true, follow: true },
  };
}

export default async function ContactPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);
  if (!demo) notFound();
  const theme = themeForSlug(slug);
  const isPremium = demo.tier === "premium";

  return (
    <DemoSubChrome demo={demo} currentPath="contact">
      <PageEyebrow theme={theme}>
        {isPremium ? "Book an appointment" : demo.tier === "professional" ? "Schedule a visit" : "Get in touch"}
      </PageEyebrow>
      <PageHeading theme={theme}>
        {isPremium
          ? "Two minutes. Online. Done."
          : demo.tier === "professional"
          ? "Tell us what's wrong. We'll quote it."
          : "Two minutes. No obligation."}
      </PageHeading>
      <PageLede theme={theme}>
        {isPremium
          ? "Pick a date and time. We'll confirm by text within the hour and email you the new-patient forms ahead of time."
          : demo.tier === "professional"
          ? "Fill in your address and what's happening. We'll text back with an arrival window and a flat-rate quote."
          : `Tell us where you live and what you need. ${demo.founder.firstName} will call you back and quote it on the spot.`}
      </PageLede>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        <div className="md:col-span-2">
          <form
            className="rounded-lg border bg-white p-8 shadow-sm"
            style={{ borderColor: theme.accent + "25" }}
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Your name" placeholder="Jane Smith" />
              <Field label="Phone" placeholder="(555) 555-0100" />
              <Field label="Email" placeholder="jane@example.com" full />
              {isPremium ? (
                <>
                  <Field label="Preferred date" placeholder="Tue, Jun 4" />
                  <Field label="Preferred time" placeholder="10:00 am" />
                  <Select
                    label="Reason for visit"
                    options={["New patient cleaning", "Cosmetic consultation", "Specific tooth pain", "Emergency", "Other"]}
                    full
                  />
                </>
              ) : demo.tier === "professional" ? (
                <>
                  <Field label="Service address" placeholder="123 Main St, San Jose" full />
                  <Select
                    label="What's happening?"
                    options={demo.services.map((s) => s.title)}
                    full
                  />
                </>
              ) : (
                <>
                  <Field label="Service address" placeholder={`123 Maple St, ${demo.city}`} full />
                  <Select
                    label="What do you need?"
                    options={demo.services.map((s) => s.title)}
                    full
                  />
                </>
              )}
              <TextArea
                label="Anything we should know?"
                placeholder="Optional — gate code, dog in yard, urgent timing, anything."
                full
              />
            </div>
            <button
              type="button"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md px-7 py-4 text-[15px] font-semibold text-white"
              style={{ background: theme.accent }}
            >
              {isPremium ? "Request appointment" : demo.tier === "professional" ? "Send service request" : "Send my quote request"}
              <span aria-hidden="true">→</span>
            </button>
            <p className="mt-3 text-center text-[12px]" style={{ color: theme.inkSoft }}>
              {isPremium
                ? "We'll confirm by text within the hour during business days."
                : demo.tier === "professional"
                ? "We respond in under 30 minutes during business hours."
                : "We respect your time. No telemarketing. Ever."}
            </p>
          </form>
        </div>

        <ContactPanel
          phone={demo.fakePhone}
          email={demo.fakeEmail}
          address={demo.fakeAddress}
          theme={theme}
        />
      </div>
    </DemoSubChrome>
  );
}

function Field({ label, placeholder, full }: { label: string; placeholder: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-[12px] uppercase font-semibold" style={{ letterSpacing: "0.14em" }}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full rounded-md border bg-white px-4 py-3 text-[15px] focus:outline-none focus-visible:ring-2"
        style={{ borderColor: "rgba(0,0,0,0.15)" }}
      />
    </div>
  );
}

function Select({ label, options, full }: { label: string; options: string[]; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-[12px] uppercase font-semibold" style={{ letterSpacing: "0.14em" }}>
        {label}
      </label>
      <select
        className="w-full rounded-md border bg-white px-4 py-3 text-[15px] focus:outline-none focus-visible:ring-2"
        style={{ borderColor: "rgba(0,0,0,0.15)" }}
      >
        <option value="">Pick one…</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function TextArea({ label, placeholder, full }: { label: string; placeholder: string; full?: boolean }) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-[12px] uppercase font-semibold" style={{ letterSpacing: "0.14em" }}>
        {label}
      </label>
      <textarea
        rows={3}
        placeholder={placeholder}
        className="w-full rounded-md border bg-white px-4 py-3 text-[15px] focus:outline-none focus-visible:ring-2"
        style={{ borderColor: "rgba(0,0,0,0.15)" }}
      />
    </div>
  );
}
