import Link from "next/link";
import { team } from "@/lib/site";
import { Reveal } from "./Reveal";
import { TeamCard } from "./TeamCard";

export function Hero() {
  return (
    <section className="relative bg-white pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 overflow-hidden">
      {/* Subtle dot grid background. Geometric, no gradient. Top-left only. */}
      <div
        aria-hidden
        className="dot-grid pointer-events-none absolute -top-12 -left-12 h-[280px] w-[420px] opacity-50"
      />

      <div className="container-page relative grid items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div className="max-w-[600px]">
          {/* Decorative hairline accent above the eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span aria-hidden className="h-px w-10 bg-orange-500" />
            <span className="text-label uppercase text-orange-500">
              Now booking. 5 spots open
            </span>
          </div>

          <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
            Websites for local
            <br className="hidden sm:block" /> businesses.{" "}
            <span className="text-orange-500">$750 flat.</span>
          </h1>

          <p className="mt-5 text-body-lg text-ink-700 sm:mt-6">
            Done in 7 days. No monthly fees. No 12-page contract. Built by
            real people in Wisconsin, the Bay Area, and Las Vegas. Local
            shops who answer the phone.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/#quote" className="btn btn-primary btn-lg">
              Get a free quote
            </Link>
            <Link href="/examples" className="btn btn-secondary btn-lg">
              See examples <span aria-hidden="true">→</span>
            </Link>
          </div>

          <Reveal as="div" delay={240}>
            <div className="mt-8 flex flex-col gap-4 text-body-sm text-ink-700 sm:flex-row sm:gap-7">
              <TrustItem>Built in 7 days</TrustItem>
              <TrustItem>No monthly contracts</TrustItem>
              <TrustItem>Hosting included</TrustItem>
            </div>
          </Reveal>
        </div>

        <Reveal as="div" delay={120} className="w-full">
          <div className="relative">
            {/* Top accent hairline */}
            <span
              aria-hidden
              className="absolute -top-3 left-0 h-px w-16 bg-orange-500"
            />
            {/* Bottom accent hairline */}
            <span
              aria-hidden
              className="absolute -bottom-3 right-0 h-px w-16 bg-navy-800"
            />

            <div className="grid grid-cols-3 gap-3">
              {team.map((member) => (
                <TeamCard key={member.slug} member={member} variant="hero" />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="text-success font-bold" aria-hidden>
        ✓
      </span>
      {children}
    </span>
  );
}
