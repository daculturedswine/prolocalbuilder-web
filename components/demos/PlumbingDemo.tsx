import Image from "next/image";
import type { DemoSite } from "@/lib/demos";

/**
 * Rivera Plumbing — Tier 2 ($1,500) demo.
 *
 * Visual direction: trust-bedrock professional. Deep navy + clean white +
 * a single signal-red used only for emergency CTAs. Inter throughout, heavy
 * weights for headlines. Structured grid with strong horizontal bands.
 * Phone-first. Trust signals (license, badges, response time) front and
 * center. Designed for a homeowner with a flooded basement at 11pm.
 */

const IMG = {
  hero: "/demos/plumbing/hero.png",
  carlos: "/demos/plumbing/carlos-portrait.png",
  truck: "/demos/plumbing/truck.png",
  drainCamera: "/demos/plumbing/service-drain-camera.png",
  waterHeater: "/demos/plumbing/service-water-heater.png",
  serviceArea: "/demos/plumbing/service-area-map.png",
};
export function PlumbingDemo({ demo }: { demo: DemoSite }) {
  const navy = "#0a2540";
  const navyDeep = "#061629";
  const red = "#e02d2d";
  const ink = "#0f1115";

  return (
    <div className="min-h-screen bg-white text-[15px]" style={{ color: ink }}>
      <style>{`
        .rv-mono { font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", monospace; }
        .rv-grid-bg {
          background-image:
            linear-gradient(rgba(10,37,64,0.04) 1px, transparent 1px),
            linear-gradient(to right, rgba(10,37,64,0.04) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .rv-shine {
          background:
            radial-gradient(at 80% 20%, rgba(255,255,255,0.08) 0%, transparent 50%),
            radial-gradient(at 20% 80%, rgba(255,255,255,0.04) 0%, transparent 50%);
        }
        .rv-photo {
          background:
            linear-gradient(135deg, rgba(10,37,64,0.85) 0%, rgba(6,22,41,0.95) 100%),
            radial-gradient(at 30% 30%, #1a4a7a 0%, transparent 50%);
        }
        .rv-truck {
          background:
            linear-gradient(180deg, #1a3a5e 0%, #0a2540 100%);
        }
      `}</style>

      {/* Emergency strip */}
      <div className="text-white" style={{ background: red }}>
        <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-2.5 text-[13px] font-medium sm:px-10">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span>24/7 emergency dispatch — average response 28 minutes across the South Bay</span>
          </div>
          <a href={`tel:${demo.fakePhone}`} className="hidden font-semibold underline-offset-4 hover:underline sm:inline">
            Call now: {demo.fakePhone}
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="border-b border-ink-200 bg-white">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-6 sm:px-10">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded text-white" style={{ background: navy }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 19V5h2v14M5 11h14M5 19h14" /></svg>
            </span>
            <div className="leading-tight">
              <div className="text-[16px] font-bold tracking-tight" style={{ color: navy }}>
                Rivera Plumbing Co.
              </div>
              <div className="text-[11px] uppercase tracking-[0.14em] text-ink-700">
                Licensed · Bonded · Insured · CA #C36-918274
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-[14px] font-medium text-ink-700 lg:flex">
            <a href="#services" className="hover:text-ink-900">Services</a>
            <a href="#why" className="hover:text-ink-900">Why Rivera</a>
            <a href="#pricing" className="hover:text-ink-900">Pricing</a>
            <a href="#service-area" className="hover:text-ink-900">Service area</a>
            <a href="#reviews" className="hover:text-ink-900">Reviews</a>
          </nav>

          <a
            href={`tel:${demo.fakePhone}`}
            aria-label={`Call ${demo.fakePhone}`}
            className="flex items-center gap-2 rounded px-5 py-2.5 text-[14px] font-bold text-white transition-opacity duration-200 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ background: red, ["--tw-ring-color" as string]: red }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.93a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" /></svg>
            <span className="hidden sm:inline">{demo.fakePhone}</span>
            <span className="sm:hidden">Emergency</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="rv-grid-bg" style={{ background: "#f4f6f9" }}>
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 sm:py-28">
          <div className="grid items-center gap-14 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-7">
              <div className="mb-6 inline-flex items-center gap-2 rounded-sm bg-white px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] shadow-sm" style={{ color: navy }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12" /></svg>
                Family-owned · Master plumber on every call
              </div>
              <h1 className="text-[44px] font-black leading-[1] tracking-[-0.02em] sm:text-[64px] md:text-[72px]" style={{ color: navy }}>
                When water won't<br />
                <span style={{ color: red }}>wait,</span> we don't either.
              </h1>
              <p className="mt-7 max-w-[560px] text-[18px] leading-[1.55] text-ink-700">
                South Bay's family-owned plumbing company since 2008. Licensed master plumbers on every truck. Upfront flat-rate pricing — quoted before any wrench turns.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`tel:${demo.fakePhone}`}
                  aria-label={`Emergency dispatch line: call ${demo.fakePhone}`}
                  className="inline-flex items-center justify-center gap-2 rounded px-7 py-4 text-[16px] font-bold text-white transition-opacity duration-200 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ background: red, ["--tw-ring-color" as string]: red }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.93a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" /></svg>
                  <span>Emergency: {demo.fakePhone}</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded border-2 bg-white px-7 py-[14px] text-[16px] font-bold transition-colors duration-200 hover:bg-ink-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ borderColor: navy, color: navy, ["--tw-ring-color" as string]: navy }}
                >
                  Book a service call
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-4">
                {[
                  ["28 min", "avg response"],
                  ["6,400+", "homes served"],
                  ["A+", "BBB rating"],
                  ["18 yr", "in business"],
                ].map(([n, label]) => (
                  <div key={label}>
                    <div className="text-[28px] font-black tabular-nums" style={{ color: navy }}>{n}</div>
                    <div className="text-[12px] uppercase tracking-[0.12em] text-ink-700">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative h-[460px] overflow-hidden rounded-md md:h-[540px]">
                <Image
                  src={IMG.hero}
                  alt="Master plumber from Rivera Plumbing servicing a residential kitchen sink"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
                {/* Subtle dark overlay so the white text cards remain readable */}
                <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,37,64,0.10), rgba(10,37,64,0.45))" }} />

                <div className="absolute inset-x-6 top-6 flex items-center justify-between">
                  <div className="rounded bg-white/95 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: navy }}>
                    Live · 4 trucks dispatched
                  </div>
                  <div className="rounded-full bg-white/15 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-white">
                    Truck #04
                  </div>
                </div>

                <div className="absolute inset-x-6 bottom-6 rounded-lg bg-white p-5 shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full" style={{ background: red }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" /></svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-[12px] uppercase tracking-[0.12em]" style={{ color: red }}>
                        Emergency response
                      </div>
                      <div className="mt-0.5 text-[18px] font-bold" style={{ color: navy }}>
                        Most calls reached in &lt; 30 min
                      </div>
                      <div className="mt-1 text-[13px] text-ink-700">
                        San Jose · Sunnyvale · Santa Clara · Fremont
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section id="services" className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
          <div className="mb-14 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: red }}>What we fix</div>
              <h2 className="mt-3 text-[36px] font-black leading-[1.05] tracking-[-0.015em] sm:text-[44px]" style={{ color: navy }}>
                Every job. Done right.<br />Done once.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pl-8 md:border-l" style={{ borderColor: "rgba(10,37,64,0.12)" }}>
              <p className="text-[16px] leading-[1.65] text-ink-700">
                We don't subcontract. Every Rivera truck is staffed by a master plumber backed by an apprentice. Fully stocked: 92% of jobs are completed in one visit. The other 8% get a same-day return.
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-md" style={{ background: "rgba(10,37,64,0.10)" }}>
            <div className="grid gap-px md:grid-cols-2" style={{ background: "rgba(10,37,64,0.10)" }}>
              {demo.services.map((service, i) => (
                <article
                  key={service.title}
                  className="group relative bg-white p-8 transition-colors duration-200 hover:bg-ink-50"
                >
                  <div className="flex items-start gap-5">
                    <span aria-hidden="true" className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded" style={{ background: i === 0 ? red : navy, color: "#fff" }}>
                      {[
                        <svg key="emergency" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
                        <svg key="drain" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="2" y1="12" x2="6" y2="12" /><line x1="18" y1="12" x2="22" y2="12" /></svg>,
                        <svg key="heater" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.7-2-1.4-3.4-.7-1.6-.4-3 .9-3.6.5 1.8 1.3 1.8 2 2 2 1 5 1 5 4.5a4 4 0 0 1-7 2.5z" /></svg>,
                        <svg key="pipe" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="2" /><rect x="6" y="3" width="2" height="18" /><rect x="16" y="3" width="2" height="18" /></svg>,
                      ][i] || null}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-[20px] font-bold tracking-tight" style={{ color: navy }}>{service.title}</h3>
                        {i === 0 && (
                          <span className="inline-flex rounded-sm px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-white" style={{ background: red }}>
                            24/7
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-[15px] leading-[1.6] text-ink-700">{service.body}</p>
                      <div className="mt-5 flex items-center gap-5 text-[13px] font-medium" style={{ color: navy }}>
                        <span className="flex items-center gap-1.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12" /></svg>
                          Upfront flat-rate
                        </span>
                        <span className="flex items-center gap-1.5">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12" /></svg>
                          1-yr labor warranty
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent service calls — visual proof */}
      <section style={{ background: "#f4f6f9" }}>
        <div className="mx-auto max-w-[1280px] px-6 py-20 sm:px-10 sm:py-24">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: red }}>Recent calls</div>
              <h2 className="mt-3 text-[32px] font-black leading-[1.1] tracking-[-0.015em] sm:text-[40px]" style={{ color: navy }}>
                Real jobs. Real photos.
              </h2>
            </div>
            <div className="text-[14px] text-ink-700 max-w-[420px]">
              No stock images. Every photo on this site is from a job we&apos;ve actually completed in the South Bay this season.
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-md border bg-white" style={{ borderColor: "rgba(10,37,64,0.10)" }}>
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={IMG.waterHeater}
                  alt="Rivera Plumbing technician installing a 40-gallon residential water heater"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute left-5 top-5 inline-flex rounded-sm bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: navy }}>
                  Water heater install
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[18px] font-bold tracking-tight" style={{ color: navy }}>40-gallon swap, Sunnyvale</h3>
                    <p className="mt-1.5 text-[14px] leading-[1.55] text-ink-700">
                      Old unit failed Sunday morning. Quote sent at 9am, install completed by 1pm same day. Code-compliant, hauled away.
                    </p>
                  </div>
                  <span className="rv-mono flex-shrink-0 rounded-sm px-2 py-1 text-[11px] font-bold tabular-nums" style={{ background: "#f4f6f9", color: navy }}>
                    $1,495
                  </span>
                </div>
              </div>
            </article>

            <article className="overflow-hidden rounded-md border bg-white" style={{ borderColor: "rgba(10,37,64,0.10)" }}>
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={IMG.drainCamera}
                  alt="Rivera Plumbing technician operating a sewer-line camera reel"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute left-5 top-5 inline-flex rounded-sm bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: navy }}>
                  Sewer camera
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[18px] font-bold tracking-tight" style={{ color: navy }}>Slow drain diagnosis, San Jose</h3>
                    <p className="mt-1.5 text-[14px] leading-[1.55] text-ink-700">
                      Three plumbers had misdiagnosed a slow drain. Camera found a partial collapse 22 feet down the lateral. Repaired the same week.
                    </p>
                  </div>
                  <span className="rv-mono flex-shrink-0 rounded-sm px-2 py-1 text-[11px] font-bold tabular-nums" style={{ background: "#f4f6f9", color: navy }}>
                    $295
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Why Rivera — trust block */}
      <section id="why" style={{ background: navy, color: "#e6edf5" }}>
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
          <div className="mb-12 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: "#7eb6ff" }}>Why Rivera</div>
              <h2 className="mt-3 text-[36px] font-black leading-[1.05] tracking-[-0.015em] text-white sm:text-[44px]">
                Real reasons.<br />Not marketing fluff.
              </h2>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <p className="text-[16px] leading-[1.65] text-white/80">
                Plumbing is one of those trades where bad work hides behind a wall for years. Then it floods at 2am. Here's what we do that big franchise outfits don't:
              </p>
            </div>
          </div>

          <div className="grid gap-x-12 gap-y-12 md:grid-cols-3">
            {/* Master plumber */}
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded" style={{ background: "rgba(255,255,255,0.08)", color: "#7eb6ff" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" /></svg>
              </div>
              <div className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: "#7eb6ff" }}>
                Master plumber
              </div>
              <h3 className="mt-1 text-[22px] font-bold leading-tight tracking-tight text-white">Every truck. Every call.</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-white/75">
                California requires 4+ years apprenticeship and a license exam to call yourself a master plumber. Every Rivera truck has one onboard. No exceptions. No &apos;helpers&apos; diagnosing your problem.
              </p>
            </div>

            {/* Upfront pricing */}
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded" style={{ background: "rgba(255,255,255,0.08)", color: "#7eb6ff" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <div className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: "#7eb6ff" }}>
                Upfront pricing
              </div>
              <h3 className="mt-1 text-[22px] font-bold leading-tight tracking-tight text-white">Flat rate. Quoted first.</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-white/75">
                We diagnose, quote, then fix. You see the price before any work starts. We don&apos;t charge by the hour and we don&apos;t pad jobs with &apos;unforeseen complications.&apos; Quote is what you pay.
              </p>
            </div>

            {/* Family-owned — featured with Carlos's portrait */}
            <div>
              <div className="mb-5 relative h-[340px] overflow-hidden rounded-md">
                <Image
                  src={IMG.carlos}
                  alt={`Portrait of ${demo.founder.firstName} ${demo.founder.lastName}, ${demo.founder.title} at Rivera Plumbing Co.`}
                  fill
                  sizes="(max-width: 768px) 100vw, 28vw"
                  className="object-cover object-top"
                />
                <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(6,22,41,0.7), transparent 50%)" }} />
                <div className="absolute inset-x-4 bottom-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                  {demo.founder.firstName} {demo.founder.lastName} — {demo.founder.title}
                </div>
              </div>
              <div className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: "#7eb6ff" }}>
                Family-owned
              </div>
              <h3 className="mt-1 text-[22px] font-bold leading-tight tracking-tight text-white">We answer to neighbors.</h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-white/75">
                Rivera Plumbing has been in the South Bay since 2008. Carlos&apos;s name is on the truck. He still goes on emergency calls. The reputation matters because his kids go to school here.
              </p>
            </div>
          </div>

          {/* Badges row */}
          <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t pt-10" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
            <div className="text-[11px] uppercase tracking-[0.18em] text-white/60">Verified credentials</div>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 text-[13px] font-bold uppercase tracking-[0.10em] text-white/85">
              <span>CA C-36 #918274</span>
              <span aria-hidden="true" className="opacity-30">•</span>
              <span>BBB A+</span>
              <span aria-hidden="true" className="opacity-30">•</span>
              <span>$1M Liability</span>
              <span aria-hidden="true" className="opacity-30">•</span>
              <span>NEXSTAR Member</span>
              <span aria-hidden="true" className="opacity-30">•</span>
              <span>EPA Lead-Safe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing transparency */}
      <section id="pricing" className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
          <div className="mb-12 grid gap-6 md:grid-cols-12">
            <div className="md:col-span-7">
              <div className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: red }}>Upfront pricing</div>
              <h2 className="mt-3 text-[36px] font-black leading-[1.05] tracking-[-0.015em] sm:text-[44px]" style={{ color: navy }}>
                You'll know the price before<br />anyone touches a fixture.
              </h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-[15px] leading-[1.65] text-ink-700">
                Common jobs we're transparent about. Custom quotes for everything else after diagnosis. Diagnostic fee waived if you book the work.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border" style={{ borderColor: "rgba(10,37,64,0.12)" }}>
            <table className="w-full">
              <caption className="sr-only">Common plumbing job pricing — flat rates for diagnostic and repair services</caption>
              <thead style={{ background: navy, color: "#fff" }}>
                <tr className="text-left text-[12px] font-bold uppercase tracking-[0.14em]">
                  <th scope="col" className="px-6 py-4">Job</th>
                  <th scope="col" className="hidden px-6 py-4 sm:table-cell">Typical scope</th>
                  <th scope="col" className="px-6 py-4 text-right">Flat rate</th>
                </tr>
              </thead>
              <tbody className="text-[14px]">
                {[
                  ["Drain unclog (single)", "Snake or hydro-jet, 1 hour on-site", "$179"],
                  ["Toilet repair", "Flapper, fill valve, supply line replacement", "$229–$329"],
                  ["Water heater install (40gal)", "Tank swap, code upgrades, haul-away", "$1,495"],
                  ["Tankless install (gas)", "Full mount, venting, gas line, permit pulled", "$3,895"],
                  ["Camera inspection", "Sewer line, full report with photos/video", "$295"],
                  ["Re-pipe (2-bath home, copper)", "PEX or copper, walls patched, 2–3 days", "from $7,800"],
                ].map(([job, scope, price], i) => (
                  <tr key={i} className={`transition-colors duration-150 hover:bg-ink-50 ${i % 2 === 0 ? "bg-white" : "bg-ink-50/50"}`}>
                    <th scope="row" className="px-6 py-4 text-left font-bold" style={{ color: navy }}>{job}</th>
                    <td className="hidden px-6 py-4 text-ink-700 sm:table-cell">{scope}</td>
                    <td className="rv-mono px-6 py-4 text-right font-bold tabular-nums" style={{ color: ink }}>{price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-md border-l-4 bg-ink-50 px-6 py-5 text-[14px]" style={{ borderColor: red, color: ink }}>
            <div>
              <strong style={{ color: navy }}>Financing available.</strong> 0% APR for 12 months on jobs over $1,500. Apply in 60 seconds, decision instant.
            </div>
            <span className="inline-flex items-center gap-2 font-bold" style={{ color: navy }}>
              See terms <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" style={{ background: "#f4f6f9" }}>
        <div className="mx-auto max-w-[1280px] px-6 py-24 sm:px-10 sm:py-28">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: red }}>Reviews</div>
              <h2 className="mt-3 text-[36px] font-black leading-[1.05] tracking-[-0.015em] sm:text-[44px]" style={{ color: navy }}>
                Don't take our word.<br />Take theirs.
              </h2>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => <span key={i} aria-hidden="true" className="text-[20px]" style={{ color: "#f59e0b" }}>★</span>)}
              </div>
              <div className="mt-2 text-[14px] font-bold" style={{ color: navy }}>4.9 average · 412 reviews</div>
              <div className="text-[12px] uppercase tracking-[0.12em] text-ink-700">Google · Yelp · BBB</div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                quote: demo.reviewQuote,
                author: demo.reviewAuthor,
                source: "Google",
                kicker: "Emergency call",
              },
              {
                quote: "Carlos quoted me $1,495 for a water heater. Two competitors quoted $2,400 and $2,800. Same install, faster, cleaner. They also threw in extra valves that the others wanted to charge for separately. Will use them again.",
                author: "Patricia L., Santa Clara",
                source: "Yelp",
                kicker: "Water heater",
              },
              {
                quote: "We had three plumbers misdiagnose a slow drain over six months. Rivera ran a camera, found a partially collapsed line under the foundation, and fixed it that week. Saved us from a much bigger problem down the road.",
                author: "Henry T., San Jose",
                source: "Google",
                kicker: "Drain diagnosis",
              },
            ].map((r) => (
              <article key={r.author} className="flex flex-col rounded-md border bg-white p-7" style={{ borderColor: "rgba(10,37,64,0.10)" }}>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[0, 1, 2, 3, 4].map((i) => <span key={i} aria-hidden="true" className="text-[14px]" style={{ color: "#f59e0b" }}>★</span>)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-ink-700">{r.kicker}</span>
                </div>
                <p className="text-[15px] leading-[1.6] text-ink-900">"{r.quote}"</p>
                <div className="mt-6 flex items-center justify-between border-t pt-4" style={{ borderColor: "rgba(10,37,64,0.10)" }}>
                  <div>
                    <div className="text-[13px] font-bold" style={{ color: navy }}>{r.author}</div>
                    <div className="text-[11px] uppercase tracking-[0.12em] text-ink-700">via {r.source}</div>
                  </div>
                  <span className="rv-mono text-[11px] text-ink-700">VERIFIED</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service area */}
      <section id="service-area" className="bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-24 sm:px-10 sm:py-28 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: red }}>Service area</div>
            <h2 className="mt-3 text-[36px] font-black leading-[1.05] tracking-[-0.015em] sm:text-[44px]" style={{ color: navy }}>
              South Bay coverage,<br />30-minute response.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.65] text-ink-700">
              Four trucks, six master plumbers, dispatched from our San Jose shop. We hit every neighborhood between Palo Alto and Fremont in under 35 minutes.
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-2 text-[14px]">
              {["San Jose", "Sunnyvale", "Santa Clara", "Mountain View", "Palo Alto", "Fremont", "Cupertino", "Milpitas", "Los Altos", "Campbell"].map((c) => (
                <li key={c} className="flex items-center gap-2 text-ink-900">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={navy} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12" /></svg>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-7">
            <div className="relative h-[420px] overflow-hidden rounded-md md:h-[480px]">
              <Image
                src={IMG.serviceArea}
                alt="Aerial view of a typical San Jose residential neighborhood Rivera Plumbing serves"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,37,64,0.10), rgba(10,37,64,0.55))" }} />
              {/* Pin markers */}
              {[
                [25, 35, "San Jose"], [45, 25, "Sunnyvale"], [38, 30, "Santa Clara"],
                [52, 22, "Mountain View"], [58, 18, "Palo Alto"], [22, 50, "Fremont"],
                [42, 28, "Cupertino"], [30, 40, "Milpitas"], [55, 20, "Los Altos"], [28, 38, "Campbell"],
              ].map(([x, y], i) => (
                <div key={i} className="absolute" style={{ left: `${x}%`, top: `${y}%`, transform: "translate(-50%, -100%)" }}>
                  <div aria-hidden="true" className="flex h-7 w-7 items-center justify-center rounded-full text-white shadow-lg" style={{ background: red }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="3" /></svg>
                  </div>
                </div>
              ))}
              {/* Center label */}
              <div className="absolute inset-x-8 bottom-8 rounded-md bg-white/95 p-5 shadow-xl backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-[24px] font-black" style={{ color: navy }}>10+</div>
                    <div className="text-[11px] uppercase tracking-[0.12em] text-ink-700">cities served</div>
                  </div>
                  <div className="border-x" style={{ borderColor: "rgba(10,37,64,0.12)" }}>
                    <div className="text-[24px] font-black" style={{ color: navy }}>4</div>
                    <div className="text-[11px] uppercase tracking-[0.12em] text-ink-700">trucks dispatched</div>
                  </div>
                  <div>
                    <div className="text-[24px] font-black" style={{ color: red }}>24/7</div>
                    <div className="text-[11px] uppercase tracking-[0.12em] text-ink-700">availability</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — truck image background with deep-navy overlay */}
      <section className="relative overflow-hidden" style={{ background: navyDeep }}>
        <Image
          src={IMG.truck}
          alt=""
          aria-hidden="true"
          fill
          sizes="(max-width: 768px) 100vw, 1280px"
          className="object-cover opacity-40"
        />
        <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6,22,41,0.92) 0%, rgba(6,22,41,0.85) 50%, rgba(6,22,41,0.65) 100%)" }} />
        <div className="relative mx-auto max-w-[1280px] px-6 py-20 sm:px-10 sm:py-24">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <h2 className="text-[40px] font-black leading-[1.05] tracking-[-0.02em] text-white sm:text-[52px]">
                Pipe leaking <span style={{ color: red }}>now?</span>
                <br />Phone's open. Truck's loaded.
              </h2>
              <p className="mt-5 max-w-[540px] text-[16px] leading-[1.6] text-white/80">
                Schedule online for non-emergencies. For anything actively leaking, flooding, or backed up — call. Average pickup time: 11 seconds.
              </p>
            </div>
            <div className="md:col-span-5 md:pl-6">
              <div className="rounded-md bg-white p-6">
                <div className="text-[12px] font-bold uppercase tracking-[0.18em]" style={{ color: red }}>Right now</div>
                <a href={`tel:${demo.fakePhone}`} className="rv-mono mt-2 block text-[34px] font-black tracking-tight" style={{ color: navy }}>
                  {demo.fakePhone}
                </a>
                <a
                  href={`tel:${demo.fakePhone}`}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded px-6 py-4 text-[15px] font-bold text-white transition-opacity duration-200 hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ background: red, ["--tw-ring-color" as string]: red }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.93a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" /></svg>
                  Call dispatch · 24/7
                </a>
                <div className="mt-3 text-center text-[12px] text-ink-700">
                  Booking online instead?{" "}
                  <span className="font-bold" style={{ color: navy }}>Schedule a service →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-12 sm:px-10">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded text-white" style={{ background: navy }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 19V5h2v14M5 11h14M5 19h14" /></svg>
                </span>
                <span className="text-[18px] font-bold tracking-tight" style={{ color: navy }}>Rivera Plumbing Co.</span>
              </div>
              <p className="mt-4 max-w-[420px] text-[14px] leading-[1.7] text-ink-700">
                Family-owned, master-plumber-staffed plumbing for the South Bay since 2008. Licensed, bonded, insured.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 text-[10px] font-bold uppercase tracking-[0.14em]" style={{ color: navy }}>
                <span className="rounded-sm border px-2 py-1" style={{ borderColor: "rgba(10,37,64,0.18)" }}>CA C-36 #918274</span>
                <span className="rounded-sm border px-2 py-1" style={{ borderColor: "rgba(10,37,64,0.18)" }}>BBB A+</span>
                <span className="rounded-sm border px-2 py-1" style={{ borderColor: "rgba(10,37,64,0.18)" }}>$1M LIABILITY</span>
              </div>
            </div>
            <FooterCol heading="Services" items={["Emergency repair", "Drain cleaning", "Water heaters", "Re-pipe", "Sewer line"]} />
            <FooterCol heading="Service area" items={["San Jose", "Sunnyvale", "Santa Clara", "Mountain View", "Fremont"]} />
          </div>
          <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t pt-6 text-[12px] text-ink-700 sm:flex-row sm:items-center" style={{ borderColor: "rgba(10,37,64,0.10)" }}>
            <div>© 2026 Rivera Plumbing Co. All rights reserved.</div>
            <div>{demo.fakePhone} · {demo.fakeEmail}</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FooterCol({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-700">{heading}</div>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li key={it} className="text-[14px] text-ink-900">{it}</li>
        ))}
      </ul>
    </div>
  );
}
