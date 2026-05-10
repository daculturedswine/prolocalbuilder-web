import Link from "next/link";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        <section className="bg-white pt-16 pb-12 sm:pt-20 md:pt-24">
          <div className="container-narrow text-center">
            <span className="badge-orange">404</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              That page isn't here.
            </h1>
            <p className="mt-5 text-body-lg text-ink-700">
              Either we moved it, never had it, or you typed something
              slightly off. Try one of these instead:
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link href="/" className="btn btn-primary">
                Go home
              </Link>
              <Link href="/#quote" className="btn btn-secondary">
                Get a free quote
              </Link>
            </div>
          </div>
        </section>

        <section className="section bg-ink-50">
          <div className="container-page">
            <div className="grid gap-10 md:grid-cols-3">
              <NotFoundColumn
                title="Pricing"
                blurb="Three flat-fee tiers. No subscriptions."
                links={[
                  { href: "/#pricing", label: "See pricing" },
                  { href: "/examples", label: "See examples" },
                  { href: "/#process", label: "Our process" },
                  { href: "/#faq", label: "Frequently asked questions" },
                ]}
              />
              <NotFoundColumn
                title="By industry"
                blurb="Built for the way your customers actually find you."
                links={[
                  { href: "/websites-for/plumbers", label: "Plumbers" },
                  {
                    href: "/websites-for/hvac-contractors",
                    label: "HVAC contractors",
                  },
                  { href: "/websites-for/dentists", label: "Dentists" },
                  { href: "/websites-for/lawyers", label: "Lawyers" },
                  { href: "/websites-for", label: "All industries" },
                ]}
              />
              <NotFoundColumn
                title="By city"
                blurb="Three metros, 26 cities."
                links={[
                  { href: "/web-design/appleton-wi", label: "Appleton, WI" },
                  { href: "/web-design/san-jose-ca", label: "San Jose, CA" },
                  { href: "/web-design/las-vegas-nv", label: "Las Vegas, NV" },
                  { href: "/web-design", label: "All cities" },
                ]}
              />
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-narrow text-center">
            <h2 className="text-h2-sm md:text-h2 text-ink-900">
              Still stuck?
            </h2>
            <p className="mt-3 text-body-lg text-ink-700">
              Call or email and we'll point you the right way.
            </p>
            <div className="mt-6 flex flex-col items-center gap-2 text-body-lg">
              <a
                href={site.contact.phoneHref}
                aria-label={`Call ${site.contact.phone}`}
                className="font-mono font-semibold text-orange-500 underline-offset-2 hover:underline"
              >
                <span aria-hidden="true">📞</span> {site.contact.phone}
              </a>
              <a
                href={site.contact.emailHref}
                aria-label={`Email ${site.contact.email}`}
                className="font-mono font-semibold text-orange-500 underline-offset-2 hover:underline"
              >
                <span aria-hidden="true">✉️</span> {site.contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}

function NotFoundColumn({
  title,
  blurb,
  links,
}: {
  title: string;
  blurb: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h2 className="text-label uppercase text-orange-500">{title}</h2>
      <p className="mt-2 text-body-sm text-ink-700">{blurb}</p>
      <ul className="mt-4 flex flex-col gap-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-body-sm font-medium text-ink-900 transition-colors duration-200 hover:text-orange-500"
            >
              {l.label} <span aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
