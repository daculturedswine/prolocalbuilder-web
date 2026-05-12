import Image from "next/image";
import Link from "next/link";
import type { DemoSite } from "@/lib/demos";

const IMG = {
  heroPatient: "/demos/dental/hero-patient.png",
  reception: "/demos/dental/reception.png",
  drPark: "/demos/dental/dr-park.png",
  intraoralScanner: "/demos/dental/intraoral-scanner.png",
  coneBeamCT: "/demos/dental/cone-beam-ct.png",
  treatmentRoom: "/demos/dental/treatment-room.png",
  sameDayCrowns: "/demos/dental/same-day-crowns.png",
  softTissueLaser: "/demos/dental/soft-tissue-laser.png",
  diagnodent: "/demos/dental/diagnodent.png",
  sedation: "/demos/dental/sedation.png",
};

/**
 * Henderson Smile Dental — Tier 1 ($2,500) demo.
 *
 * Visual direction: boutique modern medical. Warm white background +
 * sage green primary + warm gold accent. Editorial / magazine layout
 * with generous whitespace. Inter throughout but uses the lightest
 * weights (200, 300) for elegant headlines, contrasted with bold for
 * stats. Asymmetric, photo-forward, premium.
 */
export function DentalDemo({ demo }: { demo: DemoSite }) {
  // Henderson Smile palette: clinical cool porcelain (deliberately cooler
  // than Landscaping's earthy beige and far from PLB's warm cream), dusty
  // teal as the "calm medical" primary, warm champagne accent for editorial
  // labels. Reads as boutique-medical, not earthy-trade.
  const sage = "#3f7d80"; // dusty teal (was sage green) — more medical
  const gold = "#a08760"; // warm champagne (was darker gold) — refined
  const ink = "#1a1f25";
  const cream = "#fafaf6"; // cool porcelain (was warm cream)

  return (
    <div className="min-h-screen" style={{ background: cream, color: ink }}>
      <style>{`
        .hs-display { font-family: ui-serif, Georgia, "Iowan Old Style", "Apple Garamond", serif; font-feature-settings: "ss01"; letter-spacing: -0.02em; }
        .hs-tracking { letter-spacing: 0.22em; }
        .hs-photo-1 {
          background:
            radial-gradient(at 60% 35%, rgba(255, 245, 220, 0.6) 0%, transparent 60%),
            linear-gradient(135deg, #d4c4a8 0%, #a08966 60%, #7a6347 100%);
        }
        .hs-photo-2 {
          background:
            radial-gradient(at 30% 30%, #e8d8b8 0%, #b8a07e 70%);
        }
        .hs-photo-3 {
          background:
            radial-gradient(at 65% 50%, #c8d8c8 0%, #5d7a6a 100%);
        }
        .hs-photo-4 {
          background:
            linear-gradient(180deg, #f0e8d8 0%, #d8c8a8 100%);
        }
        .hs-grain {
          background-image:
            radial-gradient(circle at 1px 1px, rgba(26,31,37,0.025) 1px, transparent 0);
          background-size: 14px 14px;
        }
        .hs-divider {
          background-image: linear-gradient(to right, ${gold} 0%, ${gold} 50%, transparent 50%);
          background-size: 8px 1px;
          background-repeat: repeat-x;
          background-position: center;
        }
      `}</style>

      {/* Header */}
      <header className="border-b" style={{ background: cream, borderColor: "rgba(26,31,37,0.08)" }}>
        <div className="mx-auto flex h-[88px] max-w-[1320px] items-center justify-between px-6 sm:px-12">
          <div className="flex items-center gap-3">
            <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-full" style={{ background: sage, color: cream }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9.5 2 8 4 8 6s.5 4 .5 6-1 5-1 7c0 2 1 3 2 3s1.5-1 2-3 1-3 .5-5-1-5-1-8c0-2 1-2 1-2z" /><path d="M12 2c2.5 0 4 2 4 4s-.5 4-.5 6 1 5 1 7c0 2-1 3-2 3s-1.5-1-2-3" /></svg>
            </span>
            <div className="leading-tight">
              <div className="hs-display text-[19px] font-medium" style={{ color: ink }}>
                Henderson Smile
              </div>
              <div className="hs-tracking text-[10px] uppercase" style={{ color: sage }}>
                Dental · Henderson, NV
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 text-[13.5px] font-medium md:flex" style={{ color: ink }}>
            <Link href={`/examples/${demo.slug}/services`} className="hover:opacity-70">Services</Link>
            <Link href={`/examples/${demo.slug}/locations`} className="hover:opacity-70">Locations</Link>
            <Link href={`/examples/${demo.slug}/about`} className="hover:opacity-70">About</Link>
            <Link href={`/examples/${demo.slug}/team`} className="hover:opacity-70">Team</Link>
            <Link href={`/examples/${demo.slug}/reviews`} className="hover:opacity-70">Reviews</Link>
            <Link href={`/examples/${demo.slug}/new-patients`} className="hover:opacity-70">New patients</Link>
            <Link href={`/examples/${demo.slug}/contact`} className="hover:opacity-70">Contact</Link>
          </nav>

          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-sm border px-5 py-2.5 text-[13px] font-medium hs-tracking uppercase transition-colors duration-200 hover:bg-[#1a1f25] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{ borderColor: ink, color: ink, ["--tw-ring-color" as string]: ink }}
          >
            Book online
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      {/* Hero — editorial asymmetric */}
      <section className="hs-grain">
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-12 sm:py-28 md:py-36">
          <div className="grid gap-16 md:grid-cols-12 md:items-center md:gap-12">
            <div className="md:col-span-6">
              <div className="mb-8 flex items-center gap-3 hs-tracking text-[11px] uppercase" style={{ color: gold }}>
                <span className="h-px w-10" style={{ background: gold }} />
                Now accepting new patients · Boutique practice
              </div>
              <h1 className="hs-display text-[48px] font-light leading-[1.05] sm:text-[72px] md:text-[88px]" style={{ color: ink }}>
                Modern dentistry,
                <br />
                <span className="italic font-normal" style={{ color: sage }}>quietly excellent.</span>
              </h1>
              <p className="mt-8 max-w-[480px] text-[18px] font-light leading-[1.7]" style={{ color: ink }}>
                Henderson Smile is a small, deliberately-paced practice. Dr. Park sees a limited number of patients per day so you never feel rushed and every detail of your care has the attention it deserves.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#book"
                  className="inline-flex items-center gap-2 rounded-sm px-7 py-4 text-[14px] font-medium hs-tracking uppercase text-white transition-opacity duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ background: sage, ["--tw-ring-color" as string]: sage }}
                >
                  Book a new-patient visit
                </a>
                <a
                  href="#technology"
                  className="rounded-sm text-[14px] font-medium hs-tracking uppercase underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4"
                  style={{ color: ink, ["--tw-ring-color" as string]: ink }}
                >
                  See the practice →
                </a>
              </div>
            </div>

            <div className="md:col-span-6">
              <div className="relative">
                <div className="relative h-[480px] overflow-hidden rounded-sm md:h-[640px]">
                  <Image
                    src={IMG.heroPatient}
                    alt="Patient relaxed in a Henderson Smile Dental treatment chair, soft natural light"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3" style={{ background: "linear-gradient(to top, rgba(26,31,37,0.45), transparent)" }} />
                  <div className="absolute right-6 top-6 rounded-sm bg-white/95 px-4 py-2 text-[11px] font-medium hs-tracking uppercase shadow-sm" style={{ color: ink }}>
                    Open Mon–Fri · 7am–5pm
                  </div>
                </div>
                {/* Offset accent card */}
                <div className="absolute -bottom-6 -left-6 hidden rounded-sm bg-white p-6 shadow-xl md:block" style={{ width: "280px" }}>
                  <div className="flex items-center gap-3">
                    <div aria-hidden="true" className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full" style={{ background: cream, color: gold }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 15,8.5 22,9.3 17,14.1 18.2,21 12,17.8 5.8,21 7,14.1 2,9.3 9,8.5" /></svg>
                    </div>
                    <div>
                      <div className="hs-display text-[20px] font-medium" style={{ color: ink }}>4.95 / 5</div>
                      <div className="text-[12px]" style={{ color: ink }}>312 patient reviews</div>
                    </div>
                  </div>
                  <div className="hs-divider mt-4 h-px" />
                  <div className="mt-3 text-[12px]" style={{ color: ink }}>
                    "I was terrified of dentists my whole life. Dr. Park changed that."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services — elegant horizontal cards */}
      <section id="services" style={{ background: cream }}>
        <div className="mx-auto max-w-[1320px] px-6 py-24 sm:px-12 sm:py-32">
          <div className="mb-16 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="hs-tracking text-[11px] uppercase" style={{ color: gold }}>What we offer</div>
              <h2 className="hs-display mt-3 text-[48px] font-light leading-[1.05] sm:text-[64px]" style={{ color: ink }}>
                Care that meets<br />
                <span className="italic" style={{ color: sage }}>you where you are.</span>
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-[16px] font-light leading-[1.7]" style={{ color: ink }}>
                From routine cleanings to full smile transformations, every appointment is unhurried and explained clearly. No upselling, no pressure.
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {demo.services.map((service, i) => (
              <article
                key={service.title}
                className="group grid items-center gap-8 rounded-sm border bg-white p-8 transition-shadow duration-300 hover:shadow-md sm:p-10 md:grid-cols-12"
                style={{ borderColor: "rgba(26,31,37,0.08)" }}
              >
                <div className="md:col-span-2">
                  <div className="hs-display text-[44px] font-light" style={{ color: gold }}>0{i + 1}</div>
                </div>
                <div className="md:col-span-6">
                  <h3 className="hs-display text-[28px] font-normal leading-tight" style={{ color: ink }}>{service.title}</h3>
                  <p className="mt-2 max-w-[480px] text-[15px] font-light leading-[1.65]" style={{ color: ink }}>{service.body}</p>
                </div>
                <div className="md:col-span-3">
                  <ul className="space-y-1.5 text-[13px] font-light" style={{ color: ink }}>
                    {[
                      ["Cleanings", "Crowns & bridges", "Fillings", "Root canals"],
                      ["Veneers", "Whitening", "Smile design", "Bonding"],
                      ["Pediatric exams", "Sealants", "Orthodontics", "Mouthguards"],
                      ["Same-day visits", "Pain management", "Crown repairs", "After-hours line"],
                    ][i]?.map((sub) => (
                      <li key={sub} className="flex items-center gap-2">
                        <span aria-hidden="true" className="h-1 w-1 rounded-full" style={{ background: gold }} />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:col-span-1 md:text-right">
                  <span aria-hidden="true" className="text-[20px]" style={{ color: sage }}>→</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inside the practice — atmosphere band */}
      <section style={{ background: cream }}>
        <div className="mx-auto max-w-[1320px] px-6 py-20 sm:px-12 sm:py-24">
          <div className="mb-12 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <div className="hs-tracking text-[11px] uppercase" style={{ color: gold }}>Inside the practice</div>
              <h2 className="hs-display mt-3 text-[40px] font-light leading-[1.05] sm:text-[52px]" style={{ color: ink }}>
                Quiet, warm, and built<br />
                <span className="italic" style={{ color: sage }}>for unhurried care.</span>
              </h2>
            </div>
            <div className="md:col-span-4 md:col-start-9">
              <p className="text-[15px] font-light leading-[1.7]" style={{ color: ink }}>
                We chose every detail — the lighting, the wood, the music — so the chair feels less like a clinic and more like a place you don&apos;t mind sitting in for an hour.
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-12 md:gap-6">
            {/* Reception — wider card */}
            <article className="md:col-span-7">
              <div className="relative h-[360px] overflow-hidden rounded-sm md:h-[480px]">
                <Image
                  src={IMG.reception}
                  alt="Boutique dental reception area with sage accent wall, light oak millwork, and warm natural light"
                  fill
                  sizes="(max-width: 768px) 100vw, 58vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="hs-display text-[20px] font-normal" style={{ color: ink }}>The reception</h3>
                <span className="hs-tracking text-[10px] uppercase" style={{ color: gold }}>01 / 02</span>
              </div>
              <p className="mt-1 text-[14px] font-light" style={{ color: ink }}>
                Light oak, sage accents, warm pendant light. Coffee, sparkling water, a real plant.
              </p>
            </article>

            {/* Treatment room — taller card */}
            <article className="md:col-span-5">
              <div className="relative h-[360px] overflow-hidden rounded-sm md:h-[480px]">
                <Image
                  src={IMG.treatmentRoom}
                  alt="Modern dental treatment room with cream chair, sage walls, and soft window light"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h3 className="hs-display text-[20px] font-normal" style={{ color: ink }}>The treatment room</h3>
                <span className="hs-tracking text-[10px] uppercase" style={{ color: gold }}>02 / 02</span>
              </div>
              <p className="mt-1 text-[14px] font-light" style={{ color: ink }}>
                One chair. One dentist. No background noise from a busy hallway.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Provider — Dr. Park */}
      <section id="provider" className="bg-white">
        <div className="mx-auto max-w-[1320px] px-6 py-24 sm:px-12 sm:py-32">
          <div className="grid gap-16 md:grid-cols-12 md:gap-12">
            <div className="md:col-span-5">
              <div className="relative">
                <div className="relative h-[520px] overflow-hidden rounded-sm md:h-[640px]">
                  <Image
                    src={IMG.drPark}
                    alt={`Editorial portrait of Dr. ${demo.founder.firstName} ${demo.founder.lastName}, ${demo.founder.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="absolute -right-4 bottom-8 max-w-[260px] rounded-sm bg-white p-5 shadow-lg">
                  <div className="hs-tracking text-[10px] uppercase" style={{ color: gold }}>Credentials</div>
                  <ul className="mt-2 space-y-1 text-[12px] font-medium" style={{ color: ink }}>
                    <li>DDS · UCLA School of Dentistry</li>
                    <li>Invisalign Diamond Provider</li>
                    <li>AGD Fellowship</li>
                    <li>ADA, AAID Member</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <div className="hs-tracking text-[11px] uppercase" style={{ color: gold }}>Your dentist</div>
              <h2 className="hs-display mt-3 text-[44px] font-light leading-[1.1] sm:text-[56px]" style={{ color: ink }}>
                Dr. {demo.founder.firstName} {demo.founder.lastName}
              </h2>
              <div className="mt-2 text-[14px] italic font-light" style={{ color: sage }}>
                {demo.founder.title} · 12 years in practice
              </div>

              <div className="mt-8 space-y-5 text-[16px] font-light leading-[1.75]" style={{ color: ink }}>
                {demo.about.map((p, i) => <p key={i}>{p}</p>)}
                <p>
                  Dr. Park completed her DDS at UCLA, followed by an AGD Fellowship and certification in Invisalign clear aligners. She speaks English and Korean and has been recognized as a Las Vegas Top Dentist three years running.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-8 border-t pt-8" style={{ borderColor: "rgba(26,31,37,0.10)" }}>
                {[
                  ["12 yr", "in practice"],
                  ["3,200+", "patients served"],
                  ["89%", "referrals from existing"],
                ].map(([n, label]) => (
                  <div key={label}>
                    <div className="hs-display text-[34px] font-light" style={{ color: ink }}>{n}</div>
                    <div className="hs-tracking mt-1 text-[10px] uppercase" style={{ color: ink }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section id="technology" style={{ background: ink, color: cream }}>
        <div className="mx-auto max-w-[1320px] px-6 py-24 sm:px-12 sm:py-32">
          <div className="mb-16 max-w-[640px]">
            <div className="hs-tracking text-[11px] uppercase" style={{ color: gold }}>Technology</div>
            <h2 className="hs-display mt-3 text-[44px] font-light leading-[1.05] sm:text-[60px] text-white">
              Modern equipment.<br />
              <span className="italic" style={{ color: gold }}>Calmer visits.</span>
            </h2>
            <p className="mt-6 text-[16px] font-light leading-[1.7] text-white/75">
              The right tools turn a 90-minute appointment into 30. Less time in the chair. More accurate diagnoses. Crowns in a single visit instead of two.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div className="grid gap-px md:grid-cols-3" style={{ background: "rgba(255,255,255,0.08)" }}>
              {[
                {
                  name: "Cone-beam CT",
                  body: "3D imaging for implant planning, root canal mapping, and impacted-tooth diagnosis. Lower radiation than traditional dental X-rays.",
                  tag: "Carestream CS 8200",
                  image: IMG.coneBeamCT,
                  alt: "Carestream CS 8200 cone-beam CT machine in a dental treatment room",
                },
                {
                  name: "Intraoral scanner",
                  body: "No more goopy impression trays. We take a digital scan in 90 seconds and you can see your own teeth in 3D on the monitor.",
                  tag: "iTero Element 5D",
                  image: IMG.intraoralScanner,
                  alt: "iTero Element 5D intraoral scanner wand on a light-oak countertop",
                },
                {
                  name: "Same-day crowns",
                  body: "CEREC milling unit on-site. Crowns designed, milled, and placed in one appointment. No temporaries, no second visit.",
                  tag: "Dentsply CEREC",
                  image: IMG.sameDayCrowns,
                  alt: "Dentsply CEREC milling unit shaping a ceramic crown in a Henderson Smile Dental treatment room",
                },
                {
                  name: "Soft-tissue laser",
                  body: "Diode laser for gum contouring, frenectomies, and biopsies. Less bleeding, faster healing, often no anesthesia required.",
                  tag: "Biolase Epic Pro",
                  image: IMG.softTissueLaser,
                  alt: "Biolase Epic Pro soft-tissue diode laser on a clean light-oak dental tray",
                },
                {
                  name: "DIAGNOdent caries detection",
                  body: "Laser fluorescence to find decay before it's visible on X-rays. Catches problems while they're still small.",
                  tag: "KaVo DIAGNOdent",
                  image: IMG.diagnodent,
                  alt: "KaVo DIAGNOdent handheld laser-fluorescence cavity-detection pen",
                },
                {
                  name: "Sedation options",
                  body: "Nitrous, oral conscious sedation, and IV sedation available. We have multiple ways to make anxious patients comfortable.",
                  tag: "ADA-compliant",
                  image: IMG.sedation,
                  alt: "Nitrous-oxide nasal mask hanging on a stainless-steel hook beside a cream dental chair",
                },
              ].map((t) => (
                <div key={t.name} className="bg-[#1a1f25] p-8">
                  {t.image && (
                    <div className="-mx-8 -mt-8 mb-6 relative h-[180px] overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.alt || t.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(26,31,37,0.10), rgba(26,31,37,0.55))" }} />
                    </div>
                  )}
                  <div className="hs-tracking text-[10px] uppercase" style={{ color: gold }}>{t.tag}</div>
                  <h3 className="hs-display mt-3 text-[24px] font-normal text-white">{t.name}</h3>
                  <p className="mt-3 text-[14px] font-light leading-[1.65] text-white/70">{t.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance */}
      <section id="insurance" style={{ background: cream }}>
        <div className="mx-auto max-w-[1320px] px-6 py-24 sm:px-12 sm:py-28">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="hs-tracking text-[11px] uppercase" style={{ color: gold }}>Insurance & financing</div>
              <h2 className="hs-display mt-3 text-[40px] font-light leading-[1.05] sm:text-[52px]" style={{ color: ink }}>
                Most insurance<br />
                <span className="italic" style={{ color: sage }}>accepted.</span>
              </h2>
              <p className="mt-5 max-w-[420px] text-[16px] font-light leading-[1.7]" style={{ color: ink }}>
                We file directly with most major plans. Don't see yours? Call us — we likely still accept it as out-of-network with most of the same benefits.
              </p>
              <a
                href="#"
                className="mt-8 inline-flex items-center gap-2 text-[13px] font-medium hs-tracking uppercase underline-offset-4 hover:underline"
                style={{ color: sage }}
              >
                See all accepted plans →
              </a>

              <div className="mt-10 rounded-sm bg-white p-6" style={{ border: "1px solid rgba(26,31,37,0.08)" }}>
                <div className="hs-tracking text-[10px] uppercase" style={{ color: gold }}>In-house membership</div>
                <div className="hs-display mt-2 text-[28px] font-light" style={{ color: ink }}>$39<span className="text-[16px]">/month</span></div>
                <p className="mt-3 text-[14px] font-light leading-[1.6]" style={{ color: ink }}>
                  No insurance? Our membership covers two cleanings, two exams, X-rays, and 20% off all other services. No deductible. No claim forms.
                </p>
              </div>
            </div>

            <div className="md:col-span-7">
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4">
                {[
                  "Delta Dental",
                  "Cigna",
                  "Aetna",
                  "MetLife",
                  "Guardian",
                  "United",
                  "Anthem",
                  "Humana",
                  "Principal",
                  "Ameritas",
                  "BlueCross",
                  "DentaQuest",
                ].map((p) => (
                  <div
                    key={p}
                    className="flex h-20 items-center justify-center rounded-sm bg-white text-center text-[13px] font-medium"
                    style={{ border: "1px solid rgba(26,31,37,0.08)", color: ink }}
                  >
                    {p}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  ["No-interest", "Up to 18 months on jobs over $1,000 with CareCredit"],
                  ["HSA / FSA", "We'll provide every code and document for reimbursement"],
                  ["Cash discount", "5% off for full payment at time of service"],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-sm bg-white p-5" style={{ border: "1px solid rgba(26,31,37,0.08)" }}>
                    <div className="hs-tracking text-[10px] uppercase" style={{ color: gold }}>{title}</div>
                    <p className="mt-2 text-[13px] font-light leading-[1.55]" style={{ color: ink }}>{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient story */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1080px] px-6 py-28 sm:px-10 sm:py-36">
          <div className="text-center">
            <div className="hs-tracking text-[11px] uppercase" style={{ color: gold }}>Patient story</div>
            <blockquote className="hs-display mt-6 text-[34px] font-light leading-[1.35] sm:text-[44px]" style={{ color: ink }}>
              <span aria-hidden="true" className="hs-display text-[80px] leading-none" style={{ color: gold }}>&ldquo;</span>
              <br />
              {demo.reviewQuote}
            </blockquote>
            <div className="mt-10">
              <div className="mx-auto h-px w-16" style={{ background: gold }} />
              <div className="mt-4 text-[14px] font-medium" style={{ color: ink }}>{demo.reviewAuthor}</div>
              <div className="hs-tracking text-[10px] uppercase mt-1" style={{ color: ink }}>Henderson Smile patient · 5 years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" style={{ background: sage, color: cream }}>
        <div className="mx-auto max-w-[1320px] px-6 py-24 sm:px-12 sm:py-32">
          <div className="grid gap-12 md:grid-cols-12 md:gap-16">
            <div className="md:col-span-5">
              <div className="hs-tracking text-[11px] uppercase" style={{ color: "#e8d8b8" }}>New patients</div>
              <h2 className="hs-display mt-3 text-[44px] font-light leading-[1.05] sm:text-[56px] text-white">
                Welcome.<br />
                <span className="italic" style={{ color: gold }}>We're glad you found us.</span>
              </h2>
              <p className="mt-6 max-w-[420px] text-[16px] font-light leading-[1.7] text-white/85">
                Your first visit is 75 minutes. We'll review your dental history, take 3D imaging, and have an honest conversation about what you want from your smile. No pressure, no upselling.
              </p>

              <div className="mt-10 space-y-5 text-[14px]">
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12,6 12,12 16,14" /></svg>
                  </span>
                  <div>
                    <div className="font-medium text-white">Mon–Thu, 7am–5pm</div>
                    <div className="text-white/70">Friday by appointment</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  </span>
                  <div>
                    <div className="font-medium text-white">{demo.fakeAddress}</div>
                    <div className="text-white/70">Free parking · Fully accessible</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.93a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" /></svg>
                  </span>
                  <div>
                    <a href={`tel:${demo.fakePhone}`} className="font-medium text-white hover:underline">{demo.fakePhone}</a>
                    <div className="text-white/70">After-hours emergency line available</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-7">
              <form className="rounded-sm bg-white p-8 sm:p-10" style={{ color: ink }}>
                <div className="hs-tracking text-[11px] uppercase" style={{ color: gold }}>Schedule online</div>
                <h3 className="hs-display mt-2 text-[32px] font-light" style={{ color: ink }}>New-patient appointment</h3>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <DentalField label="First name" placeholder="Sarah" />
                  <DentalField label="Last name" placeholder="Park" />
                  <DentalField label="Email" type="email" placeholder="you@example.com" full />
                  <DentalField label="Phone" type="tel" placeholder="(702) 555-0100" />
                  <DentalSelect label="Reason for visit" options={["New patient cleaning + exam", "Cosmetic consultation", "Pain or emergency", "Second opinion", "Bring my child"]} />
                  <DentalSelect label="Insurance" options={["Delta Dental", "Cigna", "Aetna", "United", "Other / paying directly", "Not sure yet"]} full />
                </div>

                <div className="mt-7 flex items-start gap-3">
                  <input type="checkbox" id="hs-consent" className="mt-1" />
                  <label htmlFor="hs-consent" className="text-[13px] font-normal leading-[1.5]" style={{ color: ink }}>
                    I&apos;d like to receive a 1-time appointment confirmation by text. We don&apos;t send marketing.
                  </label>
                </div>

                <button
                  type="button"
                  className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm px-7 py-4 text-[14px] font-medium hs-tracking uppercase text-white transition-opacity duration-200 hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ background: ink, ["--tw-ring-color" as string]: ink }}
                >
                  Request my appointment
                  <span aria-hidden="true">→</span>
                </button>
                <p className="mt-3 text-center text-[11px] font-light hs-tracking uppercase" style={{ color: ink }}>
                  Confirmation within 1 business hour
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: ink, color: "rgba(253, 251, 247, 0.7)" }}>
        <div className="mx-auto max-w-[1320px] px-6 py-16 sm:px-12 sm:py-20">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <div className="flex items-center gap-3">
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: sage, color: cream }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C9.5 2 8 4 8 6s.5 4 .5 6-1 5-1 7c0 2 1 3 2 3s1.5-1 2-3 1-3 .5-5-1-5-1-8c0-2 1-2 1-2z" /></svg>
                </span>
                <span className="hs-display text-[18px] font-medium text-white">Henderson Smile Dental</span>
              </div>
              <p className="mt-5 max-w-[380px] text-[13px] font-light leading-[1.7]">
                A boutique dental practice in Henderson, NV. New patients welcome. Most insurance accepted. After-hours emergency line for current patients.
              </p>
            </div>

            <DentalFooterCol heading="Care" links={["General dentistry", "Cosmetic", "Family", "Emergency", "Cone-beam imaging"]} />
            <DentalFooterCol heading="Patients" links={["New patient forms", "Insurance accepted", "Membership plan", "Financing", "Patient portal"]} />
            <DentalFooterCol heading="Practice" links={["About Dr. Park", "Technology", "Reviews", "Contact", "Careers"]} />

            <div className="md:col-span-2">
              <div className="hs-tracking mb-3 text-[10px] uppercase" style={{ color: "rgba(253,251,247,0.5)" }}>Visit</div>
              <div className="text-[13px] font-light leading-[1.7] break-words">
                {demo.fakeAddress}<br />
                <a href={`tel:${demo.fakePhone}`} className="text-white hover:underline">{demo.fakePhone}</a><br />
                <a href={`mailto:${demo.fakeEmail}`} className="hover:underline break-all">{demo.fakeEmail}</a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t pt-6 text-[11px] font-light hs-tracking uppercase sm:flex-row sm:items-center" style={{ borderColor: "rgba(253,251,247,0.10)" }}>
            <div>© 2026 Henderson Smile Dental · NV License #RD-12483</div>
            <div className="flex gap-5">
              <span>Privacy</span>
              <span>HIPAA</span>
              <span>Accessibility</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function hsSlug(s: string) {
  return "hs-" + s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function DentalField({ label, placeholder, type = "text", full }: { label: string; placeholder: string; type?: string; full?: boolean }) {
  const id = hsSlug(label);
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="hs-tracking mb-2 block text-[11px] uppercase" style={{ color: "#1a1f25" }}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className="w-full border-b bg-transparent py-3 text-[15px] font-light placeholder:text-ink-400 transition-colors duration-150 focus:outline-none focus-visible:border-[#5d7a6a]"
        style={{ borderColor: "rgba(26,31,37,0.30)", color: "#1a1f25" }}
      />
    </div>
  );
}

function DentalSelect({ label, options, full }: { label: string; options: string[]; full?: boolean }) {
  const id = hsSlug(label);
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label htmlFor={id} className="hs-tracking mb-2 block text-[11px] uppercase" style={{ color: "#1a1f25" }}>{label}</label>
      <select
        id={id}
        className="w-full appearance-none border-b bg-transparent py-3 text-[15px] font-light transition-colors duration-150 focus:outline-none focus-visible:border-[#5d7a6a]"
        style={{
          borderColor: "rgba(26,31,37,0.30)",
          color: "#1a1f25",
          backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path d='M1 1l4 4 4-4' fill='none' stroke='%231a1f25' stroke-width='1.5'/></svg>\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 4px center",
          paddingRight: "1.5rem",
        }}
      >
        <option value="">Select…</option>
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}

function DentalFooterCol({ heading, links }: { heading: string; links: string[] }) {
  return (
    <div className="md:col-span-2">
      <div className="hs-tracking mb-3 text-[10px] uppercase" style={{ color: "rgba(253,251,247,0.5)" }}>{heading}</div>
      <ul className="space-y-1.5">
        {links.map((l) => <li key={l} className="text-[13px] font-light">{l}</li>)}
      </ul>
    </div>
  );
}
