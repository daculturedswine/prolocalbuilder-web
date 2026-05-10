"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Props = {
  phone: string;
  phoneHref: string;
};

const links = [
  { label: "Pricing", href: "/#pricing" },
  { label: "Examples", href: "/examples" },
  { label: "Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];

export function MobileMenu({ phone, phoneHref }: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Body scroll lock + Escape handling + initial focus
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    // Focus the first link in the drawer
    const firstFocusable = drawerRef.current?.querySelector<HTMLElement>(
      "a, button"
    );
    firstFocusable?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        className="flex h-11 w-11 items-center justify-center rounded-md text-ink-900 transition-colors duration-200 hover:bg-ink-100 active:bg-ink-200 md:hidden"
      >
        <span aria-hidden="true" className="relative block h-4 w-6">
          <span
            className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform duration-200 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-1.5 h-0.5 w-6 bg-current transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-0 top-3 h-0.5 w-6 bg-current transition-transform duration-200 ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
        >
          <div
            className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-nav"
            ref={drawerRef}
            className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-ink-200 px-6 py-4">
              <span className="text-lg font-bold tracking-tight text-ink-900">
                Pro<span className="text-orange-500">Local</span>Builder
              </span>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  buttonRef.current?.focus();
                }}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center rounded-md text-ink-700 transition-colors duration-200 hover:bg-ink-100"
              >
                <span aria-hidden="true" className="text-2xl leading-none">
                  ×
                </span>
              </button>
            </div>

            <nav aria-label="Mobile" className="flex flex-col gap-1 px-3 py-4">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="rounded-md px-4 py-3 text-body-lg font-medium text-ink-900 transition-colors duration-200 hover:bg-ink-100"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-3 border-t border-ink-200 px-6 py-5">
              <Link
                href="/#quote"
                className="btn btn-primary btn-block"
                onClick={() => setOpen(false)}
              >
                Get a free quote
              </Link>
              <a
                href={phoneHref}
                aria-label={`Call ${phone}`}
                className="btn btn-secondary btn-block"
                onClick={() => setOpen(false)}
              >
                <span aria-hidden="true">📞</span> {phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
