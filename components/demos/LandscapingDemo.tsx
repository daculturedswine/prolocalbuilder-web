import Image from "next/image";
import Link from "next/link";
import type { DemoSite } from "@/lib/demos";

/**
 * Forest Edge Landscaping — Tier 3 ($750) demo.
 *
 * Visual direction: honest blue-collar Wisconsin trade. Earthy forest
 * green + warm cream + weathered orange. Magazine-band layout with
 * full-width photo strips between sections. No gradients. Typography is
 * Inter throughout but leans heavy/condensed for "established" feel.
 */

// Image slots (saved in /public/demos/landscaping/). Indexed by position
// in the demo.services array so each service tile gets the right photo.
const SERVICE_IMAGES = [
  { src: "/demos/landscaping/service-mowing.png", alt: "Toro commercial mower cutting a Wisconsin lawn" },
  { src: "/demos/landscaping/service-spring.png", alt: "Spring cleanup of a Wisconsin front yard" },
  { src: "/demos/landscaping/service-mulch.png", alt: "Hands spreading dark hardwood mulch around hostas" },
  { src: "/demos/landscaping/service-snow.png", alt: "Snowplow truck clearing a residential driveway" },
];

export function LandscapingDemo({ demo }: { demo: DemoSite }) {
  // Forest Edge palette: deep forest green primary, cool earthy beige
  // background (deliberately desaturated — not the warm cream that reads
  // as a ProLocalBuilder cousin). High contrast, outdoorsy, masculine trade.
  const accent = "#1f4530"; // deeper forest green
  const bg = "#eeece1"; // cool earthy beige
  const ink = "#10221a"; // deep black-green

  return (
    <div
      className="min-h-screen"
      style={{ background: bg, color: ink }}
    >
      <style>{`
        .fe-serif { font-family: ui-serif, Georgia, serif; font-feature-settings: "ss01"; }
        .fe-grain {
          background-image:
            radial-gradient(circle at 1px 1px, rgba(45,74,43,0.06) 1px, transparent 0),
            radial-gradient(circle at 14px 7px, rgba(45,74,43,0.04) 1px, transparent 0);
          background-size: 18px 18px, 22px 22px;
        }
        .fe-rule { background: linear-gradient(to right, transparent 0, ${accent} 8%, ${accent} 92%, transparent 100%); }
        .fe-photo-1 {
          background:
            linear-gradient(135deg, rgba(0,0,0,0.0) 30%, rgba(0,0,0,0.35) 100%),
            radial-gradient(at 30% 30%, #4f6b3e 0%, #2d4a2b 60%, #1c3119 100%);
        }
        .fe-photo-2 {
          background:
            radial-gradient(at 70% 50%, #6c4d2a 0%, #3d2a17 100%);
        }
        .fe-photo-3 {
          background:
            linear-gradient(to bottom, #b6c8a1 0%, #4f6b3e 100%);
        }
        .fe-photo-4 {
          background:
            linear-gradient(to bottom right, #d8e2c8 0%, #8aa178 100%);
        }
      `}</style>

      {/* Mock business header */}
      <header className="border-b border-ink-200 bg-white/60 backdrop-blur-sm">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-6 sm:px-10">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-md text-white"
              style={{ background: accent }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 L4 12 L9 12 L7 18 L17 18 L15 12 L20 12 Z" /></svg>
            </span>
            <div className="leading-tight">
              <div className="fe-serif text-[18px] font-semibold tracking-tight" style={{ color: ink }}>
                Forest Edge
              </div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-700">
                Landscaping · Appleton, WI
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-[14px] font-medium text-ink-700 md:flex">
            <Link href={`/examples/${demo.slug}/services`} className="hover:text-ink-900">Services</Link>
            <Link href={`/examples/${demo.slug}/about`} className="hover:text-ink-900">About</Link>
            <Link href={`/examples/${demo.slug}/reviews`} className="hover:text-ink-900">Reviews</Link>
            <Link href={`/examples/${demo.slug}/contact`} className="hover:text-ink-900">Contact</Link>
          </nav>

          <a
            href={`tel:${demo.fakePhone}`}
            aria-label={`Call ${demo.fakePhone}`}
            className="flex items-center gap-2 rounded-md px-4 py-2 text-[14px] font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ background: accent, ["--tw-ring-color" as string]: accent }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.93a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" /></svg>
            <span className="hidden sm:inline">{demo.fakePhone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* Hero — magazine spread */}
      <section className="fe-grain">
        <div className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28 md:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:items-end md:gap-16">
            <div className="md:col-span-7">
              <div className="mb-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.22em]" style={{ color: accent }}>
                <span className="h-px w-10" style={{ background: accent }} />
                Family-owned · Fully insured · Est. 2018
              </div>
              <h1 className="fe-serif text-[44px] font-semibold leading-[1.02] tracking-[-0.02em] sm:text-[68px] md:text-[84px]" style={{ color: ink }}>
                Lawn care
                <br />
                that respects
                <br />
                <span className="italic" style={{ color: accent }}>your time.</span>
              </h1>
              <p className="mt-8 max-w-[480px] text-[18px] leading-[1.65] text-ink-700">
                {demo.hero.subhead} Same crew every visit. We answer the phone on the first ring.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-md px-7 py-4 text-[15px] font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ background: accent, ["--tw-ring-color" as string]: accent }}
                >
                  {demo.hero.primaryCta}
                  <span aria-hidden="true">→</span>
                </a>
                <a href="#services" className="rounded text-[15px] font-semibold underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4" style={{ color: ink, ["--tw-ring-color" as string]: ink }}>
                  Or see what we do
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative h-[420px] overflow-hidden rounded-md md:h-[560px]">
                <Image
                  src="/demos/landscaping/hero.png"
                  alt="Forest Edge Landscaping crew working on a Wisconsin lawn"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-6 bottom-6 rounded-md bg-white/95 p-5 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <span aria-hidden="true" className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-white" style={{ background: accent }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    </span>
                    <div>
                      <div className="text-[14px] font-semibold" style={{ color: ink }}>Now booking spring cleanups</div>
                      <div className="text-[12px] text-ink-700">Spots filling for April. Reserve yours.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — magazine band, asymmetric */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="mb-14 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: accent }}>What we do</div>
              <h2 className="fe-serif mt-3 text-[40px] font-semibold leading-[1.05] tracking-[-0.015em] sm:text-[52px]" style={{ color: ink }}>
                Four seasons.<br />One crew.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-[17px] leading-[1.65] text-ink-700">
                Most landscaping outfits ghost in November and reappear in March. Forest Edge runs the same crew year-round so your property looks taken care of every month of the year.
              </p>
            </div>
          </div>

          <div className="grid gap-x-10 gap-y-14 md:grid-cols-2">
            {demo.services.map((service, i) => {
              const img = SERVICE_IMAGES[i] || SERVICE_IMAGES[0];
              return (
              <article key={service.title} className="group">
                <div className="relative h-[260px] overflow-hidden rounded-md">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute right-5 top-5 rounded-sm bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: accent }}>
                    {["spring", "summer", "fall", "winter"][i] || "year-round"}
                  </div>
                </div>
                <div className="mt-5 flex items-baseline gap-3">
                  <span className="fe-serif text-[14px] font-semibold tabular-nums" style={{ color: accent }}>
                    0{i + 1}
                  </span>
                  <h3 className="fe-serif text-[24px] font-semibold tracking-tight" style={{ color: ink }}>
                    {service.title}
                  </h3>
                </div>
                <p className="mt-2 max-w-[440px] text-[16px] leading-[1.6] text-ink-700">
                  {service.body}
                </p>
              </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mike's story — about */}
      <section id="about" className="bg-white">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-6 py-24 sm:px-10 sm:py-32 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="relative h-[480px] overflow-hidden rounded-md md:h-[600px]">
              <Image
                src="/demos/landscaping/mike-about.png"
                alt={`Portrait of ${demo.founder.firstName} ${demo.founder.lastName}, ${demo.founder.title} at Forest Edge Landscaping`}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: accent }}>About {demo.founder.firstName.toLowerCase()}</div>
            <h2 className="fe-serif mt-3 text-[40px] font-semibold leading-[1.05] tracking-[-0.015em] sm:text-[52px]" style={{ color: ink }}>
              "I grew up mowing<br />lawns in Appleton."
            </h2>
            <div className="mt-8 space-y-5 text-[17px] leading-[1.7] text-ink-700">
              {demo.about.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-4 border-t pt-6" style={{ borderColor: "rgba(45,74,43,0.18)" }}>
              <div className="h-1 w-10" style={{ background: accent }} />
              <div className="text-[13px]" style={{ color: ink }}>
                <span className="font-semibold">{demo.founder.firstName} {demo.founder.lastName}</span>
                <span className="text-ink-700"> · {demo.founder.title}, Forest Edge Landscaping</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews — single big quote */}
      <section style={{ background: accent, color: "#f5f3ed" }}>
        <div className="mx-auto max-w-[1200px] px-6 py-24 sm:px-10 sm:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-3">
              <div className="text-[11px] uppercase tracking-[0.22em] text-white/70">In their words</div>
              <div className="mt-4 flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} aria-hidden="true" className="text-[20px]" style={{ color: "#e8c977" }}>★</span>
                ))}
              </div>
              <div className="mt-2 text-[12px] uppercase tracking-[0.14em] text-white/70">5.0 · 87 reviews on Google</div>
            </div>
            <div className="md:col-span-9">
              <blockquote className="fe-serif text-[28px] font-light leading-[1.4] tracking-tight sm:text-[40px]">
                <span aria-hidden="true" className="text-[64px] leading-none opacity-60">&ldquo;</span>
                {demo.reviewQuote}
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full" style={{ background: "rgba(232,201,119,0.7)" }} />
                <div>
                  <div className="text-[14px] font-semibold">{demo.reviewAuthor}</div>
                  <div className="text-[12px] text-white/70">Verified Google review</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service area + contact */}
      <section id="contact" className="bg-white">
        <div className="mx-auto grid max-w-[1200px] gap-16 px-6 py-24 sm:px-10 sm:py-32 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em]" style={{ color: accent }}>Get a free quote</div>
            <h2 className="fe-serif mt-3 text-[40px] font-semibold leading-[1.05] tracking-[-0.015em] sm:text-[48px]" style={{ color: ink }}>
              Two minutes,<br />no obligation.
            </h2>
            <p className="mt-5 max-w-[420px] text-[17px] leading-[1.65] text-ink-700">
              Tell us where you live and what you need. We'll come out, walk the property, and quote on the spot. Free. No pressure.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md" style={{ background: accent, color: "#fff" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.93a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" /></svg>
                </span>
                <div>
                  <div className="text-[12px] uppercase tracking-[0.14em] text-ink-700">Call</div>
                  <a href={`tel:${demo.fakePhone}`} className="fe-serif text-[24px] font-semibold" style={{ color: ink }}>
                    {demo.fakePhone}
                  </a>
                  <div className="text-[13px] text-ink-700">Mike answers · 7am–7pm, M–Sat</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md" style={{ background: accent, color: "#fff" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                </span>
                <div>
                  <div className="text-[12px] uppercase tracking-[0.14em] text-ink-700">Email</div>
                  <a href={`mailto:${demo.fakeEmail}`} className="fe-serif text-[20px] font-medium" style={{ color: ink }}>
                    {demo.fakeEmail}
                  </a>
                  <div className="text-[13px] text-ink-700">Replies in &lt; 4 hours during business days</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md" style={{ background: accent, color: "#fff" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </span>
                <div>
                  <div className="text-[12px] uppercase tracking-[0.14em] text-ink-700">Service area</div>
                  <div className="fe-serif text-[20px] font-medium" style={{ color: ink }}>{demo.fakeAddress}</div>
                  <div className="text-[13px] text-ink-700">Appleton · Neenah · Kaukauna · Menasha · Oshkosh</div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7">
            <form className="rounded-lg border bg-white p-8 shadow-sm sm:p-10" style={{ borderColor: "rgba(45,74,43,0.18)" }}>
              <div className="mb-6 flex items-baseline justify-between border-b pb-4" style={{ borderColor: "rgba(45,74,43,0.18)" }}>
                <h3 className="fe-serif text-[22px] font-semibold" style={{ color: ink }}>Free property estimate</h3>
                <span className="text-[12px] uppercase tracking-[0.14em] text-ink-700">~2 min</span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Your name" placeholder="Mike Smith" />
                <Field label="Phone" placeholder="(920) 555-0100" />
                <Field label="Address" placeholder="123 Maple St, Appleton" full />
                <SelectField label="What do you need?" options={["Weekly mowing", "Spring cleanup", "Mulch & beds", "Snow contract", "All of the above"]} full />
                <TextArea label="Anything we should know?" placeholder="Big oak tree out front, dog in backyard, etc." full />
              </div>
              <button
                type="button"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-md px-7 py-4 text-[15px] font-semibold text-white transition-opacity duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                style={{ background: accent, ["--tw-ring-color" as string]: accent }}
              >
                Send my quote request
                <span aria-hidden="true">→</span>
              </button>
              <p className="mt-4 text-center text-[12px] text-ink-700">
                We respect your time. No telemarketing. Ever.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: ink, color: "#d8d4c8" }}>
        <div className="mx-auto max-w-[1200px] px-6 py-14 sm:px-10">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-md text-white" style={{ background: accent }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 L4 12 L9 12 L7 18 L17 18 L15 12 L20 12 Z" /></svg>
                </span>
                <span className="fe-serif text-[20px] font-semibold text-white">Forest Edge Landscaping</span>
              </div>
              <p className="mt-4 max-w-[420px] text-[14px] leading-[1.7]">
                Lawn care and landscaping for the Fox Valley since 2018. Family-owned. Fully insured. Same crew every visit.
              </p>
              <div className="mt-5 flex gap-3">
                <span className="inline-flex rounded-sm border border-white/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]">WI License #LS-04812</span>
                <span className="inline-flex rounded-sm border border-white/20 px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]">Fully insured</span>
              </div>
            </div>
            <FooterCol heading="Services" links={["Mowing & maintenance", "Spring cleanup", "Mulch & beds", "Hardscape", "Snow removal"]} />
            <FooterCol heading="Service area" links={["Appleton, WI", "Neenah, WI", "Kaukauna, WI", "Menasha, WI", "Oshkosh, WI"]} />
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-[12px] text-white/60 sm:flex-row sm:items-center">
            <div>© 2026 Forest Edge Landscaping. All rights reserved.</div>
            <div>{demo.fakePhone} · {demo.fakeEmail}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function slugify(s: string) {
  return "fe-" + s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function Field({ label, placeholder, full }: { label: string; placeholder: string; full?: boolean }) {
  const id = slugify(label);
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="mb-1.5 block text-[12px] uppercase tracking-[0.14em] text-ink-700">{label}</label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        className="w-full rounded-md border bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus-visible:border-[#2d4a2b] focus-visible:ring-2 focus-visible:ring-[#2d4a2b] focus-visible:ring-offset-1"
        style={{ borderColor: "rgba(45,74,43,0.22)" }}
      />
    </div>
  );
}

function SelectField({ label, options, full }: { label: string; options: string[]; full?: boolean }) {
  const id = slugify(label);
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="mb-1.5 block text-[12px] uppercase tracking-[0.14em] text-ink-700">{label}</label>
      <select
        id={id}
        className="w-full appearance-none rounded-md border bg-white px-4 py-3 text-[15px] text-ink-900 focus:outline-none focus-visible:border-[#2d4a2b] focus-visible:ring-2 focus-visible:ring-[#2d4a2b] focus-visible:ring-offset-1"
        style={{
          borderColor: "rgba(45,74,43,0.22)",
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'><path d='M1 1l5 5 5-5' fill='none' stroke='%232d4a2b' stroke-width='2'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 1rem center",
          paddingRight: "2.5rem",
        }}
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
  const id = slugify(label);
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="mb-1.5 block text-[12px] uppercase tracking-[0.14em] text-ink-700">{label}</label>
      <textarea
        id={id}
        rows={3}
        placeholder={placeholder}
        className="w-full rounded-md border bg-white px-4 py-3 text-[15px] text-ink-900 placeholder:text-ink-400 focus:outline-none focus-visible:border-[#2d4a2b] focus-visible:ring-2 focus-visible:ring-[#2d4a2b] focus-visible:ring-offset-1"
        style={{ borderColor: "rgba(45,74,43,0.22)" }}
      />
    </div>
  );
}

function FooterCol({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div>
      <div className="mb-4 text-[11px] uppercase tracking-[0.22em] text-white/60">{heading}</div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l} className="text-[14px] text-white/80">{l}</li>
        ))}
      </ul>
    </div>
  );
}
