import Link from "next/link";
import { site } from "@/lib/site";

const cols = [
  {
    id: "footer-pricing",
    heading: "Pricing & process",
    links: [
      { label: "Pricing", href: "/#pricing" },
      { label: "Compare tiers", href: "/#pricing" },
      { label: "Process", href: "/#process" },
      { label: "FAQ", href: "/#faq" },
      { label: "Examples", href: "/examples" },
      { label: "Free quote", href: "/#quote" },
    ],
  },
  {
    id: "footer-audiences",
    heading: "By business type",
    links: [
      { label: "For trades", href: "/for-trades" },
      { label: "For auto", href: "/for-auto" },
      { label: "For medical", href: "/for-medical" },
      { label: "For professional services", href: "/for-professional-services" },
      { label: "For personal services", href: "/for-personal-services" },
      { label: "For restaurants & food", href: "/for-restaurants" },
    ],
  },
  {
    id: "footer-cities",
    heading: "Cities",
    links: [
      { label: "Wisconsin (Fox Valley)", href: "/web-design" },
      { label: "San Jose / Bay Area", href: "/web-design" },
      { label: "Las Vegas", href: "/web-design" },
      { label: "All cities", href: "/web-design" },
      { label: "All industries", href: "/websites-for" },
      { label: "Vs other builders", href: "/vs" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="container-page py-16 pb-24 md:py-20 md:pb-20">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="mb-10 inline-block text-[22px] font-bold tracking-tight text-white transition-opacity duration-200 hover:opacity-80"
        >
          Pro<span className="text-orange-500">Local</span>Builder
        </Link>

        <div className="mb-8 grid gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          {cols.map((col) => (
            <div key={col.heading}>
              <h2
                id={col.id}
                className="mb-4 text-label uppercase tracking-[0.06em] text-ink-300"
              >
                {col.heading}
              </h2>
              <nav aria-labelledby={col.id}>
                <ul className="flex flex-col">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="block py-1.5 text-body-sm text-ink-300 transition-colors duration-200 hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          ))}
          <div>
            <h2
              id="footer-contact"
              className="mb-4 text-label uppercase tracking-[0.06em] text-ink-300"
            >
              Contact
            </h2>
            <ul aria-labelledby="footer-contact" className="flex flex-col">
              <li>
                <a
                  href={site.contact.phoneHref}
                  aria-label={`Call ${site.contact.phone}`}
                  className="block py-1.5 text-body-sm text-ink-300 transition-colors duration-200 hover:text-white"
                >
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.emailHref}
                  aria-label={`Email ${site.contact.email}`}
                  className="block py-1.5 text-body-sm text-ink-300 transition-colors duration-200 hover:text-white"
                >
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-5 text-body-sm text-ink-300 font-mono">
          <span aria-hidden="true">📞</span>{" "}
          <a
            href={site.contact.phoneHref}
            aria-label={`Call ${site.contact.phone}`}
            className="hover:text-white transition-colors duration-200"
          >
            {site.contact.phone}
          </a>{" "}
          ·{" "}
          <span aria-hidden="true">✉️</span>{" "}
          <a
            href={site.contact.emailHref}
            aria-label={`Email ${site.contact.email}`}
            className="hover:text-white transition-colors duration-200"
          >
            {site.contact.email}
          </a>{" "}
          · Serving {site.serviceArea}
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-navy-800 pt-3 text-body-sm text-ink-300">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span aria-hidden="true">·</span>
          <Link
            href="/privacy"
            className="transition-colors duration-200 hover:text-white"
          >
            Privacy
          </Link>
          <span aria-hidden="true">·</span>
          <Link
            href="/terms"
            className="transition-colors duration-200 hover:text-white"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
