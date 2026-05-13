import Link from "next/link";

/**
 * Presentation primitives for demo sub-pages. Theme-aware via inline
 * style props so each demo can pass its palette without the components
 * needing to know which demo they're rendering for.
 */

export type SubPageTheme = {
  ink: string;
  inkSoft: string;
  accent: string;
  surface: string;
  surfaceInk?: string;
};

export function PageEyebrow({ children, theme }: { children: React.ReactNode; theme: SubPageTheme }) {
  return (
    <div
      className="text-[11px] uppercase font-semibold"
      style={{ color: theme.accent, letterSpacing: "0.22em" }}
    >
      {children}
    </div>
  );
}

export function PageHeading({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: SubPageTheme;
}) {
  return (
    <h1
      className="demo-display mt-4 text-[40px] font-semibold leading-[1.05] sm:text-[56px]"
      style={{ color: theme.ink, letterSpacing: "-0.02em" }}
    >
      {children}
    </h1>
  );
}

export function PageLede({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: SubPageTheme;
}) {
  return (
    <p
      className="mt-6 max-w-[640px] text-[18px] leading-[1.65]"
      style={{ color: theme.inkSoft }}
    >
      {children}
    </p>
  );
}

export function Prose({
  paragraphs,
  theme,
}: {
  paragraphs: string[];
  theme: SubPageTheme;
}) {
  return (
    <div className="mt-10 space-y-5 max-w-[680px]">
      {paragraphs.map((p, i) => (
        <p
          key={i}
          className="text-[16px] leading-[1.7]"
          style={{ color: theme.inkSoft }}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

export function BulletList({
  items,
  theme,
}: {
  items: string[];
  theme: SubPageTheme;
}) {
  return (
    <ul className="mt-8 grid gap-3 sm:grid-cols-2">
      {items.map((it) => (
        <li
          key={it}
          className="flex items-start gap-3 text-[15px] leading-[1.55]"
          style={{ color: theme.ink }}
        >
          <span
            aria-hidden="true"
            className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full"
            style={{ background: theme.accent, color: "white" }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20,6 9,17 4,12" />
            </svg>
          </span>
          {it}
        </li>
      ))}
    </ul>
  );
}

export function SectionDivider({ theme }: { theme: SubPageTheme }) {
  return (
    <hr
      className="my-14 border-0 h-px"
      style={{ background: theme.accent, opacity: 0.18 }}
    />
  );
}

export function Pill({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: SubPageTheme;
}) {
  return (
    <span
      className="inline-flex rounded-full px-3 py-1 text-[12px] font-medium"
      style={{ background: theme.accent + "15", color: theme.accent }}
    >
      {children}
    </span>
  );
}

export function CardGrid({ children }: { children: React.ReactNode }) {
  return <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export function Card({
  title,
  body,
  meta,
  theme,
  href,
}: {
  title: string;
  body: string;
  meta?: string;
  theme: SubPageTheme;
  href?: string;
}) {
  const inner = (
    <div
      className="h-full rounded-lg border bg-white p-6 transition-shadow"
      style={{ borderColor: theme.accent + "20" }}
    >
      {meta && (
        <div className="text-[11px] uppercase font-semibold mb-3" style={{ color: theme.accent, letterSpacing: "0.18em" }}>
          {meta}
        </div>
      )}
      <h3 className="demo-display text-[20px] font-semibold" style={{ color: theme.ink }}>
        {title}
      </h3>
      <p className="mt-2 text-[14px] leading-[1.6]" style={{ color: theme.inkSoft }}>
        {body}
      </p>
      {href && (
        <span
          className="mt-4 inline-flex items-center gap-1 text-[13px] font-semibold"
          style={{ color: theme.accent }}
        >
          View page <span aria-hidden="true">→</span>
        </span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {inner}
      </Link>
    );
  }
  return inner;
}

export function ContactPanel({
  phone,
  email,
  address,
  theme,
}: {
  phone: string;
  email: string;
  address: string;
  theme: SubPageTheme;
}) {
  return (
    <aside
      className="rounded-lg border p-6"
      style={{
        borderColor: theme.accent + "30",
        background: theme.accent + "08",
      }}
    >
      <div className="text-[11px] uppercase font-semibold" style={{ color: theme.accent, letterSpacing: "0.18em" }}>
        Get in touch
      </div>
      <dl className="mt-4 space-y-3">
        <div>
          <dt className="text-[12px] uppercase" style={{ color: theme.inkSoft, letterSpacing: "0.12em" }}>
            Phone
          </dt>
          <dd className="text-[18px] font-semibold" style={{ color: theme.ink }}>
            <a href={`tel:${phone}`}>{phone}</a>
          </dd>
        </div>
        <div>
          <dt className="text-[12px] uppercase" style={{ color: theme.inkSoft, letterSpacing: "0.12em" }}>
            Email
          </dt>
          <dd className="text-[15px]" style={{ color: theme.ink }}>
            <a href={`mailto:${email}`}>{email}</a>
          </dd>
        </div>
        <div>
          <dt className="text-[12px] uppercase" style={{ color: theme.inkSoft, letterSpacing: "0.12em" }}>
            Service area
          </dt>
          <dd className="text-[14px]" style={{ color: theme.inkSoft }}>
            {address}
          </dd>
        </div>
      </dl>
    </aside>
  );
}

/** Per-demo theme lookups by slug for sub-pages. */
export function themeForSlug(slug: string): SubPageTheme {
  switch (slug) {
    case "forest-edge-landscaping":
      return {
        ink: "#10221a",
        inkSoft: "rgba(16,34,26,0.78)",
        accent: "#1f4530",
        surface: "#ffffff",
      };
    case "rivera-plumbing":
      return {
        ink: "#0f1115",
        inkSoft: "rgba(15,17,21,0.72)",
        accent: "#0a2540",
        surface: "#ffffff",
      };
    case "henderson-smile-dental":
      return {
        ink: "#1a1f25",
        inkSoft: "rgba(26,31,37,0.72)",
        accent: "#3f7d80",
        surface: "#ffffff",
      };
    default:
      return {
        ink: "#1a1f25",
        inkSoft: "rgba(26,31,37,0.72)",
        accent: "#3f7d80",
        surface: "#ffffff",
      };
  }
}
