/**
 * Site-wide constants. Change these in one place.
 */
export const site = {
  name: "ProLocalBuilder",
  domain: "prolocalbuilder.com",
  tagline: "Websites for local businesses. $750 flat",
  description:
    "Affordable website design for local businesses. One-time flat fee from $750 — no monthly payments, no contracts. Done in a week. Serving Wisconsin, the Bay Area, and Las Vegas.",
  contact: {
    phone: "(920) 555-0123",
    phoneHref: "tel:+19200000000",
    email: "hello@prolocalbuilder.com",
    emailHref:
      "mailto:hello@prolocalbuilder.com?subject=Free%20quote%20for%20my%20business&body=Hi%2C%0A%0AMy%20business%3A%20%0AWhat%20I%20do%3A%20%0AMy%20current%20website%20(if%20any)%3A%20%0ATier%20I%27m%20interested%20in%3A%20%0A%0AThanks%2C",
  },
  serviceArea: "Wisconsin, Bay Area, and Las Vegas",
} as const;

export type TeamMember = {
  slug: "kyle" | "cesar" | "zac";
  firstName: string;
  title: string;
  location: string;
  metro: "appleton" | "san-jose" | "vegas";
  /** Set to "/team/<slug>.jpg" once the photo file is dropped into public/team/. */
  photoUrl: string | null;
};

export const team: TeamMember[] = [
  {
    slug: "kyle",
    firstName: "Kyle",
    title: "Co-founder",
    location: "Appleton, WI",
    metro: "appleton",
    photoUrl: null,
  },
  {
    slug: "cesar",
    firstName: "Cesar",
    title: "Co-founder",
    location: "San Jose, CA",
    metro: "san-jose",
    photoUrl: null,
  },
  {
    slug: "zac",
    firstName: "Zac",
    title: "Co-founder",
    location: "Las Vegas, NV",
    metro: "vegas",
    photoUrl: null,
  },
];

export function teamMemberByMetro(
  metro: "appleton" | "san-jose" | "vegas"
): TeamMember {
  const m = team.find((t) => t.metro === metro);
  if (!m) throw new Error(`No team member for metro: ${metro}`);
  return m;
}

/**
 * To wire in a real photo:
 *   1. Drop file at public/team/kyle.jpg (1:1 square, 1024px+ recommended)
 *   2. Set photoUrl: "/team/kyle.jpg" on that member above
 *   3. That's it. The Hero and city pages auto-render the image.
 */

export type Tier = {
  id: "starter" | "professional" | "premium";
  name: string;
  flatPrice: number;
  monthlyPrice: number;
  monthlyTerm: number;
  blurb: string;
  bestFor: string;
  features: string[];
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    id: "starter",
    name: "Starter",
    flatPrice: 750,
    monthlyPrice: 69,
    monthlyTerm: 12,
    blurb: "flat fee · one-time",
    bestFor:
      "landscapers, salons, restaurants, cleaning, towing, handymen",
    features: [
      "5-page website",
      "Mobile responsive",
      "Contact form",
      "Click-to-call buttons",
      "1 year hosting included",
      "Done in 5–7 days",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    flatPrice: 1500,
    monthlyPrice: 139,
    monthlyTerm: 12,
    blurb: "flat fee · one-time",
    bestFor:
      "chiropractors, vets, accountants, plumbers, electricians, auto body",
    features: [
      "10-page website",
      "Mobile responsive",
      "Contact + booking form",
      "Click-to-call + click-to-text",
      "Photo gallery / before-after",
      "Local SEO setup",
      "1 year hosting included",
      "Done in 7–10 days",
    ],
    featured: true,
  },
  {
    id: "premium",
    name: "Premium",
    flatPrice: 2500,
    monthlyPrice: 229,
    monthlyTerm: 12,
    blurb: "flat fee · one-time",
    bestFor:
      "dentists, lawyers, med spas, multi-location contractors",
    features: [
      "15+ page website",
      "Mobile responsive",
      "Booking + intake forms",
      "Service area pages",
      "Photo gallery + testimonials",
      "Advanced local SEO",
      "1 year hosting + 3 hrs edits",
      "Done in 10–14 days",
    ],
  },
];

export const faqs = [
  {
    q: "Do I own the site after?",
    a: "Yes. After the flat fee is paid, the site, the domain, and the code are yours. If you ever want to take it to another developer, you can.",
  },
  {
    q: "What if I already have a domain?",
    a: "No problem. We can use your existing domain. If you don't have one, we'll register it for you (cost passed through, usually $12–20/yr).",
  },
  {
    q: "What about hosting after year 1?",
    a: "$25/mo gets you hosting + small edits (changing a phone number, swapping a photo, etc.). Or you can self-host on Cloudflare Pages or GitHub Pages for free. We'll show you how.",
  },
  {
    q: "Can you redo my existing site?",
    a: "Yes. Most of our work is replacing 10-year-old WordPress sites that nobody can edit. Send us your current site URL with the quote request and we'll quote a redesign.",
  },
  {
    q: "Do you do e-commerce / online stores?",
    a: "Not yet. We focus on local service businesses where the website's job is to make the phone ring. If you need to sell products online, Shopify or Squarespace will serve you better.",
  },
  {
    q: "What if I don't like the result?",
    a: "You only paid 50% upfront. If you genuinely hate it, you walk away. You don't pay the second half. I keep the deposit for the work done. This has not happened yet, but the option is there.",
  },
  {
    q: "Are you using AI to build these?",
    a: "Sort of. I use modern AI tools to write code faster, the same way most developers do in 2026. But every site is reviewed, customized, and finished by hand. The end result is a real, hand-tuned site, not a template that AI spat out.",
  },
  {
    q: "Where are you based?",
    a: "Three of us across three metros: Appleton, WI (Fox Valley region — Appleton, Green Bay, Oshkosh, Sheboygan), San Jose, CA (San Francisco Bay Area), and Las Vegas, NV (Henderson, Summerlin, the broader valley). If you're somewhere else and like the look of this site, reach out anyway. We work remotely.",
  },
];

export const processSteps = [
  {
    num: "01",
    title: "Free quote",
    body:
      "You tell me about your business. I confirm the tier and quote you a fixed price. No hourly rates. No surprises.",
  },
  {
    num: "02",
    title: "50% deposit",
    body:
      "I start once you pay half. The other half is due at launch. If you hate the result, you don't pay the second half.",
  },
  {
    num: "03",
    title: "Build + review",
    body:
      "I build the site. You get a preview link. We do up to 2 rounds of revisions to get it right.",
  },
  {
    num: "04",
    title: "Launch",
    body:
      "Site goes live on your domain. I hand you the keys. You own it. Done.",
  },
];

export function formatPrice(n: number): string {
  return n.toLocaleString("en-US");
}
