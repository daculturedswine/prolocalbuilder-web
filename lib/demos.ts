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
  /** URL slug for the dedicated service page (Pro + Premium tiers). */
  slug: string;
  title: string;
  body: string;
  icon: string;
  /** One-line pitch used at the top of the service detail page. */
  pitch?: string;
  /** Long-form paragraphs for the detail page. */
  paragraphs?: string[];
  /** Detail-page bullet list ("what's included"). */
  bullets?: string[];
};

export type DemoLocation = {
  slug: string;
  /** Short display name, e.g. "Henderson". */
  name: string;
  /** Full name with state, e.g. "Henderson, NV". */
  fullName: string;
  address: string;
  hours: string;
  neighborhoods: string[];
  /** One-line pitch for the location page. */
  pitch: string;
  paragraphs: string[];
};

export type DemoTeamMember = {
  name: string;
  role: string;
  bio: string;
};

export type DemoReview = {
  quote: string;
  author: string;
  source: string;
  kicker?: string;
};

export type DemoSite = {
  slug: string;
  businessName: string;
  category: string;
  city: string;
  state: string;
  metro: "appleton" | "san-jose" | "vegas";
  tier: "starter" | "professional" | "premium";
  flatPrice: number;
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
  theme: DemoTheme;
  /** Additional reviews used on the /reviews sub-page. */
  reviews?: DemoReview[];
  /** Service-area locations (Premium tier — populates /locations/[city] routes). */
  locations?: DemoLocation[];
  /** Team members (Premium tier — populates /team). */
  team?: DemoTeamMember[];
  /** New-patient guidance (Premium tier — populates /new-patients). */
  newPatients?: {
    intro: string;
    bring: string[];
    forms: { name: string; description: string }[];
    insurance: string[];
  };
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
    founder: { firstName: "Mike", lastName: "Halverson", title: "Owner" },
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
        slug: "mowing",
        icon: "🌱",
        title: "Mowing & maintenance",
        body: "Weekly or bi-weekly. Bagged or mulched, your call. Same crew every visit.",
      },
      {
        slug: "cleanup",
        icon: "🍂",
        title: "Spring & fall cleanup",
        body: "Leaf removal, gutter clear, bed refresh. We leave your yard ready for the season.",
      },
      {
        slug: "mulch",
        icon: "🪨",
        title: "Mulch & beds",
        body: "Beds re-edged, mulch refreshed. Curb appeal you'll see from across the street.",
      },
      {
        slug: "snow",
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
    reviews: [
      {
        quote:
          "Mike's crew is the only landscaping outfit in town that calls back. Three years now and the lawn looks better every season.",
        author: "Jenny T., Neenah",
        source: "Google",
        kicker: "Weekly mowing",
      },
      {
        quote:
          "Forest Edge cleared a winter's worth of leaves and edged every bed in one afternoon. Yard looked like a magazine cover by Saturday.",
        author: "Rob K., Appleton",
        source: "Google",
        kicker: "Spring cleanup",
      },
      {
        quote:
          "Plowed our driveway at 5am after the big February storm without us even calling. Just had us on the route. That's the difference.",
        author: "Diane S., Kaukauna",
        source: "Facebook",
        kicker: "Snow contract",
      },
      {
        quote:
          "Quoted us $400 less than the other guy and the work was twice as careful. They cleaned up every cigarette butt the previous owner left.",
        author: "Marcus W., Menasha",
        source: "Google",
        kicker: "Mulch refresh",
      },
      {
        quote:
          "Five years a customer. Same crew every visit. They know our gate code, where the dog is, and that the back hose drips. Trust.",
        author: "Lori P., Neenah",
        source: "Google",
        kicker: "Weekly mowing",
      },
    ],
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
    founder: { firstName: "Carlos", lastName: "Rivera", title: "Master Plumber" },
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
        slug: "emergency",
        icon: "🚨",
        title: "Emergency repairs",
        body: "Burst pipes, no hot water, sewer backup. We're 30 minutes out, day or night.",
        pitch: "When water won't wait, we don't either. Average pickup: 11 seconds.",
        paragraphs: [
          "Emergency plumbing is the reason most people meet a plumber. A pipe lets go at 2am, the bathroom floor fills up, and suddenly you need someone you trust at the door — fast.",
          "Rivera runs four trucks out of San Jose with master plumbers on shift around the clock. Average response to South Bay calls is 28 minutes. We quote flat rate before any work starts, so the price you hear at midnight is the price you pay at 3am.",
        ],
        bullets: [
          "Burst pipe shutoff and replacement",
          "No-hot-water diagnostics and water heater swap",
          "Sewer backup, drain stoppage, sump pump failure",
          "Slab leak detection and repair",
          "Frozen pipe thaw (rare in San Jose, but yes)",
        ],
      },
      {
        slug: "drain-cleaning",
        icon: "💧",
        title: "Drain cleaning",
        body: "Hydro-jet, snake, camera inspection. We find the root cause, not just the clog.",
        pitch: "We don't just clear the clog. We find why it keeps coming back.",
        paragraphs: [
          "Most plumbers run a snake, charge you, and leave. The clog comes back in three months because the snake never addressed the underlying issue — usually root intrusion, a sag, or a partial collapse downstream.",
          "We run a camera before and after every drain job over 50 feet, and we hand you the video. If the line needs more than a clean — say, a spot repair — you'll know exactly why, in plain language.",
        ],
        bullets: [
          "Hydro-jet cleaning (1500–4000 PSI)",
          "Cable snaking for small lines and stoppages",
          "Sewer-line camera inspection with handed-over video",
          "Root intrusion identification and treatment",
          "Sewer-line locate and depth report",
        ],
      },
      {
        slug: "water-heater",
        icon: "🔥",
        title: "Water heater service",
        body: "Tankless, traditional, hybrid. Repair or full replacement, same week.",
        pitch: "Tank, tankless, or hybrid — installed correctly, code-compliant, same week.",
        paragraphs: [
          "Half the water heater jobs we see were installed wrong. Missing T&P discharge, undersized gas line, flue venting into a sealed closet. Then someone like us shows up after a leak and has to redo the install on top of the repair.",
          "We pull permits, follow Title 24, and haul away the old unit. If you're switching to tankless we'll size the gas service to match, not promise you'll be fine and hope.",
        ],
        bullets: [
          "40 / 50 / 75-gallon tank replacement",
          "Tankless install (Rinnai, Navien, Noritz)",
          "Recirculation pump install",
          "Permits pulled — every job",
          "10-year manufacturer warranty registered for you",
        ],
      },
      {
        slug: "re-pipe",
        icon: "🏠",
        title: "Re-pipe specialists",
        body: "Galvanized to copper or PEX. Most homes done in 2 to 3 days. Walls patched.",
        pitch: "Whole-house re-pipe in 2–3 days. Drywall patched, painted, ready to move on.",
        paragraphs: [
          "If you live in a pre-1970 South Bay home with original galvanized lines, you're on borrowed time. Pressure drops, rust in the cold water, pinhole leaks behind walls — the lines are corroding from inside out.",
          "We re-pipe in copper or PEX, depending on what your home calls for, and we coordinate the drywall patch and texture so you're not living with cuts in the wall for weeks. Most 2-bath homes are done in three days.",
        ],
        bullets: [
          "Copper or PEX-A whole-house re-pipe",
          "Drywall patch + texture match (color-coat by owner)",
          "Pressure regulator + main shutoff included",
          "City inspection coordinated for you",
          "10-year workmanship warranty",
        ],
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
    reviews: [
      {
        quote:
          "Called Rivera at 11pm with a flooded basement. Carlos was at my door in 25 minutes. Fair price, clean work, gone by 1am. They earned a customer for life.",
        author: "David M., Sunnyvale",
        source: "Google",
        kicker: "Emergency call",
      },
      {
        quote:
          "Carlos quoted me $1,495 for a water heater. Two competitors quoted $2,400 and $2,800. Same install, faster, cleaner. They also threw in extra valves the others wanted to charge for.",
        author: "Patricia L., Santa Clara",
        source: "Yelp",
        kicker: "Water heater",
      },
      {
        quote:
          "We had three plumbers misdiagnose a slow drain over six months. Rivera ran a camera, found a partially collapsed line under the foundation, and fixed it that week.",
        author: "Henry T., San Jose",
        source: "Google",
        kicker: "Drain diagnosis",
      },
      {
        quote:
          "Re-piped our 1956 ranch in three days. Drywall patches were so clean I forgot which walls they had cut open. Pressure is finally what it should be.",
        author: "Aiyana B., Fremont",
        source: "Google",
        kicker: "Re-pipe",
      },
      {
        quote:
          "I'm a property manager. I've used a lot of plumbers. Rivera is the only one I trust to send to a unit without me there. They treat tenants like customers.",
        author: "Brett O., Mountain View",
        source: "Yelp",
        kicker: "Property management",
      },
      {
        quote:
          "Sunday morning, no hot water. Booked online at 7am, install done by 1pm. Old tank hauled away, area cleaner than they found it.",
        author: "Saanvi R., Cupertino",
        source: "Google",
        kicker: "Water heater",
      },
    ],
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
    founder: { firstName: "Sarah", lastName: "Park", title: "DDS, Owner" },
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
        slug: "general-dentistry",
        icon: "🦷",
        title: "General dentistry",
        body: "Cleanings, fillings, crowns, root canals. Modern equipment, gentle approach.",
        pitch: "The foundation of a healthy mouth. Cleanings, fillings, crowns — done thoughtfully.",
        paragraphs: [
          "Most dental problems are easier, cheaper, and less invasive to handle early. That's why our general care leans hard into prevention — twice-yearly cleanings with the same hygienist, digital X-rays only when needed, and treatment plans that explain why before what.",
          "When restorative work is called for, we use same-day digital crowns (no temporaries for two weeks), tooth-colored fillings, and rotary endodontics for root canals that are genuinely comfortable.",
        ],
        bullets: [
          "Exams and digital X-rays",
          "Cleanings and periodontal maintenance",
          "Tooth-colored composite fillings",
          "Same-day CEREC crowns",
          "Root canals (rotary, single visit when possible)",
        ],
      },
      {
        slug: "cosmetic-whitening",
        icon: "✨",
        title: "Cosmetic & whitening",
        body: "Veneers, professional whitening, smile redesign. Free consultation.",
        pitch: "Whiter, straighter, more confident — without overdoing it.",
        paragraphs: [
          "Cosmetic dentistry should make you look like a better version of yourself, not like you got dental work done. Dr. Park is conservative on purpose — minimum-prep veneers when veneers are right, whitening when whitening is enough.",
          "Every cosmetic case starts with a free consultation including a digital mockup so you can see the proposed result on your own face before anything irreversible happens.",
        ],
        bullets: [
          "In-office whitening (single visit)",
          "Take-home custom whitening trays",
          "Minimum-prep porcelain veneers",
          "Clear aligners (Invisalign, SureSmile)",
          "Smile-design consultation with digital mockup",
        ],
      },
      {
        slug: "family-dentistry",
        icon: "👶",
        title: "Family dentistry",
        body: "Kids welcome. We make first dental visits a positive memory.",
        pitch: "Bring the kids. We're great with anxious patients, big or small.",
        paragraphs: [
          "We're a family practice in the literal sense — the same dentist sees grandparents, parents, and kids in many of our households. Pediatric visits are paced for short attention spans, and first cleanings happen with mom or dad in the room.",
          "For kids who need a little extra help, we offer nitrous and behavior-management techniques that have nothing to do with bribes or restraint and everything to do with patience.",
        ],
        bullets: [
          "Pediatric first visits and fluoride",
          "Sealants for new molars",
          "Mouthguards (custom-fit for sports)",
          "Nitrous oxide for anxious kids",
          "Family appointment blocks so siblings come together",
        ],
      },
      {
        slug: "emergency-dental",
        icon: "🚑",
        title: "Emergency dental",
        body: "Same-day appointments for pain, broken teeth, lost crowns. Just call.",
        pitch: "Same-day appointments for broken teeth, lost crowns, and active pain.",
        paragraphs: [
          "Dental emergencies don't keep office hours, but most can wait until morning if you know what to do until then. Call our after-hours line for triage — half the time we can talk you through the night and book you first thing.",
          "When you arrive we don't keep emergency patients waiting in a lobby. You go straight to an exam room, get an X-ray, and leave with a plan and out of pain.",
        ],
        bullets: [
          "Same-day pain relief and triage",
          "Crown re-cement (often same-visit)",
          "Tooth fracture and chip repair",
          "Lost filling replacement",
          "Knocked-out tooth (call us immediately)",
        ],
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
    reviews: [
      {
        quote:
          "I was terrified of dentists my whole life. Dr. Park changed that. My whole family goes here now. They actually listen.",
        author: "Maria S., Henderson",
        source: "Google",
        kicker: "New patient",
      },
      {
        quote:
          "Same-day crown for my 70-year-old mom. She walked in with a cracked molar at 9am and walked out with a finished crown by lunch. Modern dentistry is something else.",
        author: "Jonathan K., Summerlin",
        source: "Google",
        kicker: "Same-day crown",
      },
      {
        quote:
          "They told me I didn't need the work my old dentist had quoted. Saved me $2,800 in unnecessary crowns. Honesty earned them a customer for life.",
        author: "Elena R., Las Vegas",
        source: "Google",
        kicker: "Second opinion",
      },
      {
        quote:
          "My kids actually look forward to dental visits now. The hygienists are unbelievable with little ones.",
        author: "Rachel P., Henderson",
        source: "Facebook",
        kicker: "Family",
      },
      {
        quote:
          "Cracked a front tooth on a Saturday. Dr. Park called me back within 20 minutes and met me at the office that afternoon. Who does that?",
        author: "Tom V., Summerlin",
        source: "Google",
        kicker: "Emergency",
      },
      {
        quote:
          "Got veneers I'd been thinking about for a decade. Dr. Park talked me OUT of two extra teeth I didn't need to do. Result looks like me, just better.",
        author: "Priya M., Las Vegas",
        source: "Yelp",
        kicker: "Cosmetic",
      },
    ],
    locations: [
      {
        slug: "henderson",
        name: "Henderson",
        fullName: "Henderson, NV",
        address: "2840 St. Rose Parkway, Suite 120 · Henderson, NV 89052",
        hours: "Mon–Thu 7:30am–5pm · Fri 8am–2pm",
        neighborhoods: [
          "Green Valley",
          "Anthem",
          "Seven Hills",
          "MacDonald Highlands",
          "Inspirada",
        ],
        pitch: "Our flagship office, serving Henderson families since 2020.",
        paragraphs: [
          "Henderson Smile's home base sits on St. Rose Parkway, five minutes from the Galleria and most Green Valley neighborhoods. It's the largest of our three offices — six operatories, a CEREC mill, and an in-house panoramic CBCT for surgical cases.",
          "If you live in Green Valley, Anthem, Seven Hills, MacDonald Highlands, or Inspirada, this is almost certainly your closest office. Free parking right out front, no garage maze.",
        ],
      },
      {
        slug: "summerlin",
        name: "Summerlin",
        fullName: "Summerlin, NV",
        address: "10870 W. Charleston Blvd, Suite 220 · Las Vegas, NV 89135",
        hours: "Mon–Thu 8am–5pm · Fri by appointment",
        neighborhoods: [
          "Summerlin South",
          "The Ridges",
          "Red Rock Country Club",
          "Downtown Summerlin",
          "The Trails",
        ],
        pitch: "West-side patients see Dr. Park here Mondays and Wednesdays.",
        paragraphs: [
          "Our Summerlin office serves the west side of the valley — Summerlin South, The Ridges, Red Rock Country Club, and the Downtown Summerlin core. It's a smaller satellite, four operatories, and Dr. Park personally sees patients there two days a week.",
          "Same digital workflow, same standards, same friendly front desk staff who will remember your kids' names. Parking is in the building's covered garage; we validate.",
        ],
      },
      {
        slug: "las-vegas",
        name: "Las Vegas",
        fullName: "Las Vegas, NV",
        address: "8870 S. Eastern Ave, Suite 5 · Las Vegas, NV 89123",
        hours: "Mon–Wed 8am–4pm · Thu–Fri by appointment",
        neighborhoods: ["Silverado Ranch", "Mountain's Edge", "Southern Highlands", "Spring Valley"],
        pitch: "Convenient for South Las Vegas patients with weekday-only schedules.",
        paragraphs: [
          "Our south-valley office is the newest of the three, opened in 2024 to make Henderson Smile reachable for patients in Silverado Ranch, Mountain's Edge, and Southern Highlands without an east-side drive.",
          "Three operatories, full general dentistry, and emergency triage on Mon–Wed. Cosmetic and same-day crown cases route to the Henderson flagship by patient choice.",
        ],
      },
    ],
    team: [
      {
        name: "Dr. Sarah Park, DDS",
        role: "Owner · Lead Dentist",
        bio: "UCLA School of Dentistry, 2013. AACD member. Twelve years practicing in the Las Vegas Valley before opening Henderson Smile in 2020. Known for talking patients out of unnecessary work.",
      },
      {
        name: "Dr. Marcus Chen, DMD",
        role: "Associate Dentist",
        bio: "Tufts University School of Dental Medicine, 2018. Focus on restorative and CEREC same-day crowns. Sees patients at the Henderson and Summerlin locations.",
      },
      {
        name: "Liana Torres, RDH",
        role: "Lead Hygienist",
        bio: "Twelve years as a hygienist, the last six with Dr. Park. Periodontal maintenance specialist. Speaks Spanish.",
      },
      {
        name: "Brianna Hayes, RDH",
        role: "Hygienist · Pediatric",
        bio: "Specializes in first dental visits and kids 3–10. Has the patience of a saint and the sticker drawer to match.",
      },
      {
        name: "Maria Esposito",
        role: "Office Manager · Insurance Coordinator",
        bio: "The person who actually understands your dental insurance. Verifies coverage before your visit and shows you the breakdown in writing.",
      },
      {
        name: "James Wallace",
        role: "Patient Care Coordinator",
        bio: "Answers the phones, books new patients, and remembers everyone's name. Eight years at Henderson Smile.",
      },
    ],
    newPatients: {
      intro:
        "Your first visit at Henderson Smile is about meeting you, not selling you. We block 75 minutes for new patients — long enough for X-rays, a thorough exam with Dr. Park, and a clear conversation about what (if anything) you need.",
      bring: [
        "A photo ID and your insurance card",
        "A list of any medications and supplements you take",
        "Any recent dental records or X-rays (we can request them if you don't have copies)",
        "Questions — bring them written down if it helps",
      ],
      forms: [
        {
          name: "Medical history",
          description:
            "Standard medical and dental history. Takes about 10 minutes. We email it the day before so you can do it at home.",
        },
        {
          name: "HIPAA acknowledgement",
          description: "Required for any dental office. Signed once.",
        },
        {
          name: "Insurance verification",
          description:
            "Optional but recommended. We'll call your carrier and show you your coverage breakdown before your appointment if you give us 48 hours.",
        },
      ],
      insurance: [
        "Delta Dental (PPO and Premier)",
        "Aetna",
        "Cigna",
        "MetLife",
        "United Healthcare / United Concordia",
        "BlueCross BlueShield",
        "Guardian",
        "Most other PPO plans (we file as out-of-network)",
      ],
    },
  },
];

export function getDemo(slug: string): DemoSite | undefined {
  return demos.find((d) => d.slug === slug);
}

/**
 * Pages every demo of a given tier exposes as routes. Used by the demo
 * chrome to render a real navigation, and by generateStaticParams to
 * decide which slug-subpath combinations are valid (404 otherwise).
 *
 * The numbers add up to the tier promise: 5 / 10 / 15.
 */
export type DemoPage = {
  label: string;
  /** Relative path under /examples/[slug]/. Use "" for the home page. */
  path: string;
};

export function pagesForDemo(demo: DemoSite): DemoPage[] {
  const home: DemoPage = { label: "Home", path: "" };
  const about: DemoPage = { label: "About", path: "about" };
  const services: DemoPage = { label: "Services", path: "services" };
  const reviews: DemoPage = { label: "Reviews", path: "reviews" };
  const contact: DemoPage = { label: "Contact", path: "contact" };

  if (demo.tier === "starter") {
    // 5 pages
    return [home, services, about, reviews, contact];
  }

  if (demo.tier === "professional") {
    // 10 pages: 1 home + 1 services overview + 4 service detail + 1 gallery
    // + 1 about + 1 reviews + 1 contact
    const serviceDetails: DemoPage[] = demo.services.map((s) => ({
      label: s.title,
      path: `services/${s.slug}`,
    }));
    const gallery: DemoPage = { label: "Gallery", path: "gallery" };
    return [home, services, ...serviceDetails, gallery, about, reviews, contact];
  }

  // Premium: 15 pages
  // 1 home + 1 services overview + 4 service detail + 1 locations overview
  // + 3 location detail + 1 about + 1 team + 1 reviews + 1 new-patients + 1 contact
  const serviceDetails: DemoPage[] = demo.services.map((s) => ({
    label: s.title,
    path: `services/${s.slug}`,
  }));
  const locations: DemoPage = { label: "Locations", path: "locations" };
  const locationDetails: DemoPage[] = (demo.locations ?? []).map((l) => ({
    label: l.name,
    path: `locations/${l.slug}`,
  }));
  const team: DemoPage = { label: "Team", path: "team" };
  const newPatients: DemoPage = { label: "New patients", path: "new-patients" };
  return [
    home,
    services,
    ...serviceDetails,
    locations,
    ...locationDetails,
    about,
    team,
    reviews,
    newPatients,
    contact,
  ];
}
