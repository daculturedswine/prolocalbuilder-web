import Link from "next/link";
import type { DemoSite } from "@/lib/demos";
import { pagesForDemo } from "@/lib/demos";

/**
 * Shared layout chrome for every demo sub-page (everything except home).
 *
 * Renders a branded header + footer matching the demo's home page so the
 * sub-pages feel like part of the same fictional business, while keeping
 * the structure consistent enough across demos that the buyer can compare
 * how big each tier's site is.
 *
 * The visual *language* (palette, font, button shape) flexes per demo —
 * the *structure* (header → nav → children → footer) does not.
 */

type Props = {
  demo: DemoSite;
  /** Path under /examples/[slug]/ matching DemoPage.path of the current page. */
  currentPath: string;
  children: React.ReactNode;
};

type Palette = {
  bg: string;
  ink: string;
  inkSoft: string;
  accent: string;
  /** Optional secondary accent (e.g. Rivera's red). Falls back to accent. */
  accent2?: string;
  /** Font family for headlines. Inter is fine for ordinary text everywhere. */
  display: string;
  /** Footer background. */
  footerBg: string;
  footerInk: string;
};

const PALETTES: Record<DemoSite["slug"], Palette> = {
  "forest-edge-landscaping": {
    bg: "#eeece1",
    ink: "#10221a",
    inkSoft: "rgba(16,34,26,0.72)",
    accent: "#1f4530",
    display: 'ui-serif, Georgia, serif',
    footerBg: "#10221a",
    footerInk: "#d8d4c8",
  },
  "rivera-plumbing": {
    bg: "#f4f6f9",
    ink: "#0f1115",
    inkSoft: "rgba(15,17,21,0.72)",
    accent: "#0a2540",
    accent2: "#e02d2d",
    display: 'Inter, system-ui, sans-serif',
    footerBg: "#061629",
    footerInk: "rgba(255,255,255,0.78)",
  },
  "henderson-smile-dental": {
    bg: "#fafaf6",
    ink: "#1a1f25",
    inkSoft: "rgba(26,31,37,0.72)",
    accent: "#3f7d80",
    accent2: "#a08760",
    display: 'ui-serif, Georgia, "Iowan Old Style", serif',
    footerBg: "#1a1f25",
    footerInk: "rgba(255,255,255,0.74)",
  },
};

export function DemoSubChrome({ demo, currentPath, children }: Props) {
  const palette = PALETTES[demo.slug as keyof typeof PALETTES];
  const pages = pagesForDemo(demo);
  const navPages = topLevelNav(pages);

  // Premium tier (Henderson) gets a "Locations" dropdown / extra item.
  const isPremium = demo.tier === "premium";

  return (
    <div style={{ background: palette.bg, color: palette.ink }} className="min-h-screen">
      <style>{`
        .demo-display { font-family: ${palette.display}; letter-spacing: -0.015em; }
        .demo-tracking { letter-spacing: 0.18em; }
      `}</style>

      {/* Header */}
      <header
        className="border-b"
        style={{
          background: palette.bg,
          borderColor: rgba(palette.ink, 0.1),
        }}
      >
        <div className="mx-auto flex h-[76px] max-w-[1280px] items-center justify-between gap-6 px-6 sm:px-10">
          <Link
            href={`/examples/${demo.slug}`}
            className="flex items-center gap-3"
            aria-label={`${demo.businessName} home`}
          >
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-md text-white"
              style={{ background: palette.accent }}
            >
              <BrandMark slug={demo.slug} />
            </span>
            <span className="leading-tight">
              <span
                className="demo-display block text-[17px] font-semibold"
                style={{ color: palette.ink }}
              >
                {shortName(demo.businessName)}
              </span>
              <span
                className="block text-[10px] uppercase demo-tracking"
                style={{ color: palette.inkSoft }}
              >
                {demo.category}
              </span>
            </span>
          </Link>

          <nav
            aria-label="Site"
            className="hidden items-center gap-7 text-[14px] font-medium lg:flex"
            style={{ color: palette.inkSoft }}
          >
            {navPages.map((p) => {
              const active = p.path === currentPath;
              return (
                <Link
                  key={p.path}
                  href={p.path ? `/examples/${demo.slug}/${p.path}` : `/examples/${demo.slug}`}
                  className="transition-colors hover:opacity-100"
                  style={{
                    color: active ? palette.ink : palette.inkSoft,
                    fontWeight: active ? 600 : 500,
                  }}
                  aria-current={active ? "page" : undefined}
                >
                  {p.label}
                </Link>
              );
            })}
            {isPremium && demo.locations && demo.locations.length > 0 && (
              <span
                className="hidden text-[10px] uppercase demo-tracking xl:inline"
                style={{ color: palette.inkSoft }}
              >
                · {demo.locations.length} locations
              </span>
            )}
          </nav>

          <a
            href={`tel:${demo.fakePhone}`}
            aria-label={`Call ${demo.fakePhone}`}
            className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-[13px] font-semibold text-white"
            style={{ background: palette.accent2 ?? palette.accent }}
          >
            <PhoneIcon />
            <span className="hidden sm:inline">{demo.fakePhone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>

        {/* Secondary nav row — only on tiers with enough pages to need it */}
        {pages.length > 5 && (
          <div
            className="border-t"
            style={{ borderColor: rgba(palette.ink, 0.06), background: rgba(palette.ink, 0.02) }}
          >
            <div className="mx-auto flex max-w-[1280px] items-center gap-x-5 gap-y-2 overflow-x-auto px-6 py-2 text-[12px] sm:px-10">
              <span
                className="flex-shrink-0 text-[10px] uppercase demo-tracking"
                style={{ color: palette.inkSoft }}
              >
                Quick links
              </span>
              {pages
                .filter((p) => p.path !== "" && p.path !== currentPath)
                .slice(0, 8)
                .map((p) => (
                  <Link
                    key={p.path}
                    href={`/examples/${demo.slug}/${p.path}`}
                    className="flex-shrink-0 whitespace-nowrap hover:underline"
                    style={{ color: palette.inkSoft }}
                  >
                    {p.label}
                  </Link>
                ))}
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 sm:py-20">{children}</main>

      {/* Footer */}
      <footer style={{ background: palette.footerBg, color: palette.footerInk }}>
        <div className="mx-auto max-w-[1280px] px-6 py-12 sm:px-10">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-md text-white"
                  style={{ background: palette.accent }}
                >
                  <BrandMark slug={demo.slug} />
                </span>
                <span
                  className="demo-display text-[18px] font-semibold text-white"
                >
                  {demo.businessName}
                </span>
              </div>
              <p className="mt-4 max-w-[420px] text-[14px] leading-[1.7]">
                {demo.about[0]}
              </p>
            </div>

            <FooterCol heading="Pages" items={navPages.slice(0, 6).map((p) => p.label)} />
            <FooterCol
              heading="Contact"
              items={[demo.fakePhone, demo.fakeEmail, demo.fakeAddress]}
            />
          </div>

          <div
            className="mt-10 flex flex-col items-start justify-between gap-2 border-t pt-6 text-[12px] sm:flex-row sm:items-center"
            style={{ borderColor: "rgba(255,255,255,0.10)" }}
          >
            <div>© 2026 {demo.businessName}. All rights reserved.</div>
            <div>
              {demo.fakePhone} · {demo.fakeEmail}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- helpers ---------- */

function FooterCol({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <div className="mb-3 text-[11px] uppercase demo-tracking opacity-70">{heading}</div>
      <ul className="space-y-1.5">
        {items.map((it) => (
          <li key={it} className="text-[14px]">
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.93a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function BrandMark({ slug }: { slug: string }) {
  if (slug === "forest-edge-landscaping") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2 L4 12 L9 12 L7 18 L17 18 L15 12 L20 12 Z" />
      </svg>
    );
  }
  if (slug === "rivera-plumbing") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 19V5h2v14M5 11h14M5 19h14" />
      </svg>
    );
  }
  // dental
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2C9.5 2 8 4 8 6s.5 4 .5 6-1 5-1 7c0 2 1 3 2 3s1.5-1 2-3 1-3 .5-5-1-5-1-8c0-2 1-2 1-2z" />
      <path d="M12 2c2.5 0 4 2 4 4s-.5 4-.5 6 1 5 1 7c0 2-1 3-2 3s-1.5-1-2-3" />
    </svg>
  );
}

function shortName(name: string): string {
  // Forest Edge Landscaping → Forest Edge ; Rivera Plumbing Co. → Rivera Plumbing
  return name.replace(/\sLandscaping$/, "").replace(/\sCo\.$/, "");
}

/** Returns the small set of top-level nav entries (no /services/[slug] children). */
function topLevelNav(pages: ReturnType<typeof pagesForDemo>) {
  return pages.filter((p) => !p.path.includes("/"));
}

function rgba(hex: string, alpha: number): string {
  // Tiny inline hex → rgba helper. Accepts #rrggbb only.
  const m = hex.replace("#", "");
  const r = parseInt(m.slice(0, 2), 16);
  const g = parseInt(m.slice(2, 4), 16);
  const b = parseInt(m.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}
