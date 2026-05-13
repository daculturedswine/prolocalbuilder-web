import { Reveal } from "./Reveal";

type Feature = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

const stroke = "1.6";

const WrenchIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M14.7 6.3a4 4 0 0 0 5 5l-9.5 9.5a2.83 2.83 0 1 1-4-4l8.5-8.5a4 4 0 0 1 0-2Z" />
    <path d="M14 6.5a4 4 0 0 1 5 5" />
  </svg>
);

const PhoneIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.93a16 16 0 0 0 6 6l1.29-1.29a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
  </svg>
);

const SearchIcon = (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={stroke}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const features: Feature[] = [
  {
    icon: WrenchIcon,
    title: "Custom built",
    body:
      "Hand-coded HTML and CSS. Not a Wix template, not a WordPress theme. Loads in under a second on any phone.",
  },
  {
    icon: PhoneIcon,
    title: "Phone-first",
    body:
      "Click-to-call buttons everywhere. Big, readable phone number on every page. Your customers can find you in two taps.",
  },
  {
    icon: SearchIcon,
    title: "Found on Google",
    body:
      "Local SEO done right. Your business name, location, and services tagged so Google knows when to show you.",
  },
];

export function WhatWeBuild() {
  return (
    <section id="what" className="section bg-ink-50">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-16">
          <span className="label">What we build</span>
          <h2 className="text-h2-sm md:text-h2 text-ink-900">
            Websites that bring you customers.
            <br className="hidden sm:block" /> Not awards.
          </h2>
          <p className="mt-3 text-body-lg text-ink-700">
            Most agencies build sites that win design awards but don't get the
            phone to ring. We build the opposite. Clean, fast sites that show
            up in Google and convert visitors into calls.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} as="article" className="h-full">
              <div className="card h-full">
                <div className="mb-4 text-orange-500">{f.icon}</div>
                <h3 className="text-h4 text-ink-900">{f.title}</h3>
                <p className="mt-2 text-body-sm text-ink-700">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
