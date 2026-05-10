"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * On every path change AND on hashchange, scroll the matching #element into view.
 * Next.js's client-side router doesn't auto-scroll to hashes when navigating
 * cross-page (e.g. /websites-for/foo -> /#quote). This component picks up the
 * slack so a "Get a free quote" link from any page reliably lands the user on
 * the form section, not at the top of the home page.
 */
export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    function scrollToHash(smooth = true) {
      if (typeof window === "undefined") return;
      const hash = window.location.hash;
      if (!hash || hash.length < 2) return;
      const id = decodeURIComponent(hash.slice(1));
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({
            behavior: smooth ? "smooth" : "auto",
            block: "start",
          });
          return true;
        }
        return false;
      };
      // Try several times — section may be lazy-mounted after hydration.
      if (tryScroll()) return;
      [50, 200, 500, 1000].forEach((delay) => setTimeout(tryScroll, delay));
    }

    // Run on every path change (covers cross-page nav like /foo -> /#quote)
    // AND on initial mount. Defer initial scroll past Next.js's own
    // scroll-to-top behavior on route change.
    const initial = setTimeout(() => scrollToHash(false), 80);

    const onHashChange = () => scrollToHash(true);
    window.addEventListener("hashchange", onHashChange);
    return () => {
      clearTimeout(initial);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [pathname]);

  return null;
}
