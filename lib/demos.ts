/**
 * Demo / portfolio sites. Each is a fictional local business used to
 * demonstrate what a tier looks like. Live as real pages on prolocalbuilder.com
 * with an honest "concept design" disclaimer banner at the top.
 *
 * Replace one of these with a real client when the first paying client in
 * that tier signs.
 */

export type DemoTheme = "warm" | "trustworthy" | "professional";

export type DemoService = {
  title: string;
  body: string;
  icon: string;
};

export type DemoSite = {
  slug: string;
  businessName: string;
  category: string; // e.g. "Landscaping", "Plumbing", "Dental"
  city: string;
  state: string;
  metro: "appleton" | "san-jose" | "vegas";
  tier: "starter" | "professional" | "premium";
  flatPrice: number;
  /** Fictional owner name displayed in the demo's "About" section. */
  founder: { firstName: string; lastName: string; title: string };
  fakePhone: string;
  fakeEmail: string;
  fakeAddress: string;
  hero: {
    badge: string;
    headline: string;
    subhead: string;
    primaryCta: string;
  };
  services: DemoService[];
  about: string[];
  reviewQuote: string;
  reviewAuthor: string;
  /** Visual variant. All within brand bible bounds. */
  theme: DemoTheme;
};

export const demos: DemoSite[] = [
  {
    slug: "forest-edge-landscaping",
    businessName: "Forest Edge Landscaping",
    category: "Landscaping & lawn care",
    city: "Appleton",
    state: "WI",
    metro: "appleton",
    tier: "starter",
    flatPrice: 895,
    founder: {
      firstName: "Mike",
      lastName: "Halverson",
      title: "Owner",
    },
    fakePhone: "(920) 555-0184",
    fakeEmail: "mike@forestedgewi.com",
    fakeAddress: "Appleton, WI · serving the Fox Valley",
    hero: {
      badge: "Family-owned. Fully insured.",
      headline: "Lawn care and landscaping for the Fox Valley.",
      subhead:
        "Mowing, mulching, hardscape, snow removal. Honest pricing. No surprise charges.",
      primaryCta: "Get a free quote",
    },
    services: [
      {
        icon: "🌱",
        title: "Mowing & maintenance",
        body: "Weekly or bi-weekly. Bagged or mulched, your call. Same crew every visit.",
      },
      {
        icon: "🍂",
        title: "Spring & fall cleanup",
        body: "Leaf removal, gutter clear, bed refresh. We leave your yard ready for the season.",
      },
      {
        icon: "🪨",
        title: "Mulch & beds",
        body: "Beds re-edged, mulch refreshed. Curb appeal you'll see from across the street.",
      },
      {
        icon: "❄️",
        title: "Snow removal",
        body: "Driveways, walkways, business lots. Pre-storm contracts available.",
      },
    ],
    about: [
      "I'm Mike. I grew up mowing lawns in Appleton. After 15 years working for someone else, I started Forest Edge in 2018 to do this the way I always thought it should be done.",
      "We answer the phone. We show up when we say we will. We don't gouge you on mulch markups. Most of our customers have been with us for 5+ years.",
    ],
    reviewQuote:
      "Mike's crew is the only landscaping outfit in town that calls back. Three years now and the lawn looks better every season.",
    reviewAuthor: "Jenny T., Neenah",
    theme: "warm",
  },
  {
    slug: "rivera-plumbing",
    businessName: "Rivera Plumbing Co.",
    category: "Plumbing & drain service",
    city: "San Jose",
    state: "CA",
    metro: "san-jose",
    tier: "professional",
    flatPrice: 1795,
    founder: {
      firstName: "Carlos",
      lastName: "Rivera",
      title: "Master Plumber",
    },
    fakePhone: "(408) 555-0192",
    fakeEmail: "service@riveraplumbingco.com",
    fakeAddress: "San Jose, CA · serving the South Bay",
    hero: {
      badge: "24/7 emergency service",
      headline: "Plumbing for the South Bay. Family-owned since 2008.",
      subhead:
        "Same-day service. Licensed and bonded. Upfront pricing before any wrench turns.",
      primaryCta: "Call now",
    },
    services: [
      {
        icon: "🚨",
        title: "Emergency repairs",
        body: "Burst pipes, no hot water, sewer backup. We're 30 minutes out, day or night.",
      },
      {
        icon: "💧",
        title: "Drain cleaning",
        body: "Hydro-jet, snake, camera inspection. We find the root cause, not just the clog.",
      },
      {
        icon: "🔥",
        title: "Water heater service",
        body: "Tankless, traditional, hybrid. Repair or full replacement, same week.",
      },
      {
        icon: "🏠",
        title: "Re-pipe specialists",
        body: "Galvanized to copper or PEX. Most homes done in 2 to 3 days. Walls patched.",
      },
    ],
    about: [
      "Rivera Plumbing is a family business. Carlos started in his dad's shop at 16. Now he runs a crew of 6 master plumbers serving the South Bay.",
      "We're licensed, bonded, and insured. Every truck is fully stocked. Most jobs are done in one visit.",
    ],
    reviewQuote:
      "Called Rivera at 11pm with a flooded basement. Carlos was at my door in 25 minutes. Fair price, clean work, gone by 1am. They earned a customer for life.",
    reviewAuthor: "David M., Sunnyvale",
    theme: "trustworthy",
  },
  {
    slug: "henderson-smile-dental",
    businessName: "Henderson Smile Dental",
    category: "General & cosmetic dentistry",
    city: "Henderson",
    state: "NV",
    metro: "vegas",
    tier: "premium",
    flatPrice: 2995,
    founder: {
      firstName: "Sarah",
      lastName: "Park",
      title: "DDS, Owner",
    },
    fakePhone: "(702) 555-0167",
    fakeEmail: "appointments@hendersonsmiledental.com",
    fakeAddress: "Henderson, NV · serving Las Vegas + Henderson",
    hero: {
      badge: "Now accepting new patients",
      headline: "Modern dental care in Henderson.",
      subhead:
        "General, cosmetic, and emergency dentistry. Most insurance accepted. Online booking available.",
      primaryCta: "Book an appointment",
    },
    services: [
      {
        icon: "🦷",
        title: "General dentistry",
        body: "Cleanings, fillings, crowns, root canals. Modern equipment, gentle approach.",
      },
      {
        icon: "✨",
        title: "Cosmetic & whitening",
        body: "Veneers, professional whitening, smile redesign. Free consultation.",
      },
      {
        icon: "👶",
        title: "Family dentistry",
        body: "Kids welcome. We make first dental visits a positive memory.",
      },
      {
        icon: "🚑",
        title: "Emergency dental",
        body: "Same-day appointments for pain, broken teeth, lost crowns. Just call.",
      },
    ],
    about: [
      "Dr. Sarah Park has been practicing dentistry in the Las Vegas Valley for 12 years. She opened Henderson Smile in 2020 to bring boutique-style care to the East side of town.",
      "Our office is small on purpose. You see the same dentist every visit. We remember your kids' names. We don't oversell treatments you don't need.",
    ],
    reviewQuote:
      "I was terrified of dentists my whole life. Dr. Park changed that. My whole family goes here now. They actually listen.",
    reviewAuthor: "Maria S., Henderson",
    theme: "professional",
  },
];

export function getDemo(slug: string): DemoSite | undefined {
  return demos.find((d) => d.slug === slug);
}
