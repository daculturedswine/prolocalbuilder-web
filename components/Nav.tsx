"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { label: "Pricing", href: "/#pricing" },
  { label: "Examples", href: "/examples" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white/95 shadow-nav backdrop-blur-sm">
      <div className="container-page flex h-16 items-center gap-4 sm:h-[72px] sm:gap-8">
        <Link
          href="/"
          aria-label={`${site.name} home`}
          className="flex items-center gap-2.5 font-bold tracking-tight transition-opacity duration-200 hover:opacity-80"
        >
          <span
            aria-hidden="true"
            className="flex h-8 w-8 items-center justify-center rounded-md bg-navy-800 font-mono text-[13px] font-bold text-white"
          >
            PL
          </span>
          <span className="text-lg text-ink-900 hidden sm:inline">
            Pro<span className="text-orange-500">Local</span>Builder
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden ml-4 gap-8 md:flex">
          {navLinks.map((l) => {
            const isActive =
              l.href === "/examples"
                ? pathname === "/examples" || pathname.startsWith("/examples/")
                : false;
            return (
              <Link
                key={l.label}
                href={l.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-[15px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-orange-500"
                    : "text-ink-700 hover:text-ink-900"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={site.contact.phoneHref}
          aria-label={`Call ${site.contact.phone}`}
          className="ml-auto font-mono text-[13px] sm:text-[15px] font-semibold text-navy-800 transition-colors duration-200 hover:text-orange-500"
        >
          <span aria-hidden="true">📞 </span>
          {site.contact.phone}
        </a>

        <Link
          href="/#quote"
          className="btn btn-primary px-5 py-3 text-sm hidden sm:inline-flex"
        >
          Free quote
        </Link>

        <MobileMenu
          phone={site.contact.phone}
          phoneHref={site.contact.phoneHref}
        />
      </div>
    </header>
  );
}
