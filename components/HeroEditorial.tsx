import Link from "next/link";
import { team } from "@/lib/site";
import { Reveal } from "./Reveal";
import { TeamCard } from "./TeamCard";

const proof = [
  { value: "$895", label: "starter sites" },
  { value: "3", label: "metros, 3 founders" },
  { value: "10 days", label: "for a professional build" },
];

export function HeroEditorial() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-8 sm:pt-14 sm:pb-10 md:pt-16 md:pb-10">
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute -top-12 left-0 h-72 w-96 opacity-50"
      />
      <div className="container-page relative">
        <div className="grid gap-12 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-7">
            <div className="mb-6 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-orange-500" />
              <span className="text-label uppercase text-orange-500">
                Flat-fee websites. Local people.
              </span>
            </div>

            <h1 className="text-display-sm font-bold text-ink-900 sm:text-display-md md:text-display">
              Your website should make the phone ring.
              <span className="block font-serif font-normal italic text-navy-800">
                Not make you manage an agency.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-body-lg text-ink-700">
              ProLocalBuilder builds clean, fast sites for service businesses
              in Wisconsin, the SF Bay Area, and Las Vegas. Fixed scope. Fixed
              price. Built by one of the three people you see here.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/#quote" className="btn btn-primary btn-lg">
                Get a free quote
              </Link>
              <Link href="/examples" className="btn btn-secondary btn-lg">
                See examples <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <Reveal as="div" delay={120} className="md:col-span-5">
            <div className="border-t border-ink-200 pt-5 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="max-w-sm text-h4 text-ink-900">
                Three founders, each responsible for a real metro.
              </p>
              <p className="mt-2 text-body-sm text-ink-700">
                No faceless account team. No outsourced handoff.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3">
                {team.map((member) => (
                  <TeamCard key={member.slug} member={member} variant="hero" />
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal as="ul" delay={220} className="mt-8 grid gap-4 border-y border-ink-200 py-3 sm:grid-cols-3">
          {proof.map((item) => (
            <li key={item.label} className="flex items-baseline gap-3 sm:block">
              <div className="font-mono text-price-lg font-bold leading-none text-navy-800">
                {item.value}
              </div>
              <div className="text-label uppercase text-ink-700">
                {item.label}
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
