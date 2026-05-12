import type { IndustryAudience } from "./seo";

export type AudienceConfig = {
  slug: IndustryAudience;
  /** URL is /for-{path} */
  path: string;
  badge: string;
  h1Lead: string;
  h1Accent: string;
  intro: string;
  whyHeading: string;
  whyPoints: { title: string; body: string }[];
};

export const audienceConfigs: AudienceConfig[] = [
  {
    slug: "trades",
    path: "for-trades",
    badge: "For trades",
    h1Lead: "Websites built for the way trades actually work.",
    h1Accent: "$895–$1,795 flat.",
    intro:
      "Plumbers, HVAC, electricians, roofers, painters, landscapers, cleaners — your customers find you on Google when something's broken. Your site has to load fast, show your phone number on every screen, and make calling easy.",
    whyHeading: "What makes a trades website convert",
    whyPoints: [
      {
        title: "Phone-first everything",
        body: "Big tap-to-call buttons on every page. Big readable phone number in the header. Click-to-text where it works.",
      },
      {
        title: "Service-area pages per town",
        body: "Google ranks 'plumber Appleton WI' and 'plumber Green Bay WI' as different searches. We build a page for each.",
      },
      {
        title: "Emergency-callout strip",
        body: "If you do 24/7 work, the emergency callout sits at the top of every page. Customers in a panic shouldn't have to scroll.",
      },
      {
        title: "License + insurance + bonded",
        body: "Right in the footer. The first thing every smart homeowner checks before calling.",
      },
      {
        title: "Before/after photo gallery",
        body: "Drone shots for roofers. Storm-damage repair. Driveway pours. Before/after speaks louder than 'we do quality work.'",
      },
      {
        title: "Free-quote form on every page",
        body: "Two minutes to fill out. We text you when it submits.",
      },
    ],
  },
  {
    slug: "auto",
    path: "for-auto",
    badge: "For auto",
    h1Lead: "Websites built for shops, body shops, and roadside.",
    h1Accent: "$895–$1,795 flat.",
    intro:
      "Auto repair, body shops, tire shops, detailers, towing — customers want to know you can fix what's broken, what it costs, and when you can take their car. Your site should answer all three at a glance.",
    whyHeading: "What makes an auto website convert",
    whyPoints: [
      {
        title: "Service breakdown by category",
        body: "Brakes, oil, transmission, AC, tires, alignment. Each on its own page so Google can rank them.",
      },
      {
        title: "Online appointment booking",
        body: "Year/make/model + service type + preferred day. No phone tag.",
      },
      {
        title: "ASE + manufacturer certifications",
        body: "Right in the footer. Customers shopping you against other shops will check.",
      },
      {
        title: "Loaner / shuttle policy callout",
        body: "If you offer one, it's a conversion factor. If you don't, your competitor probably does.",
      },
      {
        title: "Before/after collision gallery",
        body: "Body shop work that speaks louder than copy. Insurance-claim assistance prominent.",
      },
      {
        title: "Emergency dispatch (towing)",
        body: "Tap-to-call dispatch button on every page. Towing is by definition urgent.",
      },
    ],
  },
  {
    slug: "medical",
    path: "for-medical",
    badge: "For medical practices",
    h1Lead: "Websites built for medical, dental, and specialty care.",
    h1Accent: "$1,795–$2,995 flat.",
    intro:
      "Dentists, orthodontists, chiropractors, optometrists, vets, dermatologists, physical therapy. Patients evaluate practices online before picking up the phone. Your site has to look credible, list insurance, and let people book in two clicks.",
    whyHeading: "What makes a medical website convert",
    whyPoints: [
      {
        title: "Procedure / condition pages",
        body: "One page per major procedure or condition you treat. Google ranks each individually for high-intent searches.",
      },
      {
        title: "Insurance-accepted list with logos",
        body: "First thing patients filter on. Outdated lists kill bookings.",
      },
      {
        title: "Online booking that actually works",
        body: "Integrated with your scheduling software. Not a contact form pretending to be a booking tool.",
      },
      {
        title: "New-patient intake forms",
        body: "Filled out before they walk in. Less time on paperwork, faster room turnover.",
      },
      {
        title: "Provider bios with credentials",
        body: "Patients want to know who's treating them. Real photos, real degrees.",
      },
      {
        title: "Before/after or smile gallery",
        body: "Where ethics rules allow. Dramatically improves cosmetic conversions.",
      },
    ],
  },
  {
    slug: "professional",
    path: "for-professional-services",
    badge: "For professional services",
    h1Lead: "Websites built for lawyers, CPAs, advisors, agents.",
    h1Accent: "$1,795–$2,995 flat.",
    intro:
      "Lawyers, accountants, insurance, financial advisors, mortgage, realtors. The first impression is the website. It has to look professional without looking generic, and it has to convert traffic into discovery calls.",
    whyHeading: "What makes a professional-services website convert",
    whyPoints: [
      {
        title: "Practice / service-area pages",
        body: "Each practice area or service line gets its own page with proper schema. Generic 'we do everything' pages don't rank.",
      },
      {
        title: "Discovery / consultation booking",
        body: "Free 15-minute discovery calls turn into clients. Make booking one click.",
      },
      {
        title: "Credentials + bar / license info",
        body: "Bar numbers, NMLS, CPA, CFP. Visible in the footer or bio block.",
      },
      {
        title: "Service-specific intake forms",
        body: "Personal injury vs estate planning vs business law need different intake fields. So do tax prep vs bookkeeping vs advisory.",
      },
      {
        title: "Case results / testimonials",
        body: "Where ethics rules allow. Real wins, real numbers, real stories.",
      },
      {
        title: "Industries-served pages",
        body: "Accountants for restaurants. Lawyers for contractors. Niching pays in search.",
      },
    ],
  },
  {
    slug: "personal",
    path: "for-personal-services",
    badge: "For personal services",
    h1Lead: "Websites built for salons, gyms, studios, photographers.",
    h1Accent: "$895–$2,995 flat.",
    intro:
      "Salons, barbershops, nail salons, gyms, yoga, photographers, tattoo, pet groomers, daycares, med spas. Booking happens on the phone or online. Your site decides which. Make booking one tap and watch your no-show rate drop.",
    whyHeading: "What makes a personal-services website convert",
    whyPoints: [
      {
        title: "Online booking per provider",
        body: "Stylist, barber, technician, trainer, photographer, artist. Customers want to pick.",
      },
      {
        title: "Portfolio / before-after gallery",
        body: "Filterable by style, occasion, treatment. The portfolio sells more than the copy does.",
      },
      {
        title: "Transparent pricing",
        body: "Service menu with prices. Package tiers. No 'request pricing' walls — those just send customers to your competitor.",
      },
      {
        title: "First-visit / new-client offer",
        body: "Free first class. Free consultation. New-client discount. Conversion fuel for top of funnel.",
      },
      {
        title: "Provider bios with photos",
        body: "Personal services are personal. People book people, not businesses.",
      },
      {
        title: "Walk-in or instant-book indicator",
        body: "Walk-ins welcome. Same-day available. Real-time availability widget if you have it.",
      },
    ],
  },
  {
    slug: "food",
    path: "for-restaurants",
    badge: "For restaurants & food",
    h1Lead: "Websites built for restaurants, bakeries, food trucks.",
    h1Accent: "$895–$2,995 flat.",
    intro:
      "Restaurants, bakeries, coffee shops, food trucks, florists, wedding venues, funeral homes. Your customers want a clean menu, hours that match Google, and a way to book or order in two taps. Most food-business websites fail on all three.",
    whyHeading: "What makes a food / event website convert",
    whyPoints: [
      {
        title: "Mobile-friendly menu (no PDFs)",
        body: "PDFs don't open on phones. Real HTML menus load instantly and let you swap items in seconds.",
      },
      {
        title: "Hours synced everywhere",
        body: "Site, Google Business Profile, social. One source of truth. Wrong hours kill foot traffic.",
      },
      {
        title: "Online reservations or ordering",
        body: "Integrated with OpenTable, Resy, Toast, Square, Toast — whatever you already use.",
      },
      {
        title: "Photo gallery that doesn't suck",
        body: "Real food photography, real room shots. Stock photos kill conversion.",
      },
      {
        title: "Catering / event inquiry",
        body: "Date + headcount + cuisine in the form. Catering bookings are high-margin and worth a clean intake.",
      },
      {
        title: "Specials / what's-new strip",
        body: "Pinned at the top. Repeat customers want to know what's new this week.",
      },
    ],
  },
];

export function getAudienceConfig(
  slug: IndustryAudience
): AudienceConfig | undefined {
  return audienceConfigs.find((a) => a.slug === slug);
}

export function getAudienceByPath(
  path: string
): AudienceConfig | undefined {
  return audienceConfigs.find((a) => a.path === path);
}
