/**
 * SEO config. Single source of truth for sitemap, robots, schema, OG.
 * Edit here, every consumer route picks up changes.
 */

import { site, tiers, faqs } from "./site";

export const seo = {
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    `https://${site.domain}`,

  // Verification tokens (replace with real values once domain is connected)
  googleVerification: "REPLACE_GOOGLE_SITE_VERIFICATION_TOKEN",
  bingVerification: "REPLACE_BING_VERIFICATION_TOKEN",
  // IndexNow key. Public; the value of the secret is the proof the file
  // lives at /<key>.txt (handled by app/[indexnow]/route.ts).
  indexNowKey: "REPLACE_INDEXNOW_KEY_32CHARS",
} as const;

/* ---------------------------------------------------------------------- */
/* CITIES. Local SEO targets.                                             */
/* ---------------------------------------------------------------------- */

export type CitySEO = {
  slug: string;
  name: string;
  state: string;
  metro: "appleton" | "san-jose" | "vegas";
  geo: { lat: number; lng: number };
  population?: number;
  industries: string[]; // Top business types we target here
  nearby: string[]; // Slugs of neighbor cities for internal linking
};

export const cities: CitySEO[] = [
  // ---- Wisconsin (Appleton metro, 100mi) ----
  {
    slug: "appleton-wi",
    name: "Appleton",
    state: "WI",
    metro: "appleton",
    geo: { lat: 44.2619, lng: -88.4154 },
    population: 75000,
    industries: ["hvac-contractors", "plumbers", "dentists", "lawyers", "general-contractors", "auto-repair-shops"],
    nearby: ["green-bay-wi", "oshkosh-wi", "neenah-wi", "kaukauna-wi"],
  },
  {
    slug: "green-bay-wi",
    name: "Green Bay",
    state: "WI",
    metro: "appleton",
    geo: { lat: 44.5133, lng: -88.0133 },
    population: 107000,
    industries: ["hvac-contractors", "plumbers", "lawyers", "auto-repair-shops", "restaurants", "general-contractors"],
    nearby: ["appleton-wi", "manitowoc-wi"],
  },
  {
    slug: "oshkosh-wi",
    name: "Oshkosh",
    state: "WI",
    metro: "appleton",
    geo: { lat: 44.0247, lng: -88.5426 },
    population: 67000,
    industries: ["dentists", "plumbers", "general-contractors", "auto-repair-shops", "salons"],
    nearby: ["appleton-wi", "neenah-wi", "fond-du-lac-wi"],
  },
  {
    slug: "neenah-wi",
    name: "Neenah",
    state: "WI",
    metro: "appleton",
    geo: { lat: 44.1858, lng: -88.4625 },
    population: 26000,
    industries: ["dentists", "lawyers", "plumbers", "general-contractors"],
    nearby: ["appleton-wi", "oshkosh-wi", "kaukauna-wi"],
  },
  {
    slug: "sheboygan-wi",
    name: "Sheboygan",
    state: "WI",
    metro: "appleton",
    geo: { lat: 43.7508, lng: -87.7145 },
    population: 49000,
    industries: ["restaurants", "plumbers", "auto-repair-shops", "general-contractors", "salons"],
    nearby: ["manitowoc-wi", "fond-du-lac-wi"],
  },
  {
    slug: "manitowoc-wi",
    name: "Manitowoc",
    state: "WI",
    metro: "appleton",
    geo: { lat: 44.0886, lng: -87.6576 },
    population: 32000,
    industries: ["general-contractors", "plumbers", "auto-repair-shops", "lawyers"],
    nearby: ["sheboygan-wi", "green-bay-wi"],
  },
  {
    slug: "fond-du-lac-wi",
    name: "Fond du Lac",
    state: "WI",
    metro: "appleton",
    geo: { lat: 43.7730, lng: -88.4471 },
    population: 44000,
    industries: ["hvac-contractors", "plumbers", "auto-repair-shops", "dentists", "general-contractors"],
    nearby: ["oshkosh-wi", "sheboygan-wi"],
  },
  {
    slug: "stevens-point-wi",
    name: "Stevens Point",
    state: "WI",
    metro: "appleton",
    geo: { lat: 44.5236, lng: -89.5746 },
    population: 25000,
    industries: ["dentists", "general-contractors", "plumbers", "lawyers"],
    nearby: ["wausau-wi"],
  },
  {
    slug: "wausau-wi",
    name: "Wausau",
    state: "WI",
    metro: "appleton",
    geo: { lat: 44.9591, lng: -89.6301 },
    population: 39000,
    industries: ["lawyers", "hvac-contractors", "plumbers", "general-contractors"],
    nearby: ["stevens-point-wi"],
  },
  {
    slug: "kaukauna-wi",
    name: "Kaukauna",
    state: "WI",
    metro: "appleton",
    geo: { lat: 44.2786, lng: -88.2628 },
    population: 16000,
    industries: ["general-contractors", "plumbers", "auto-repair-shops", "salons"],
    nearby: ["appleton-wi", "neenah-wi"],
  },

  // ---- California (San Jose metro, 100mi) ----
  {
    slug: "san-jose-ca",
    name: "San Jose",
    state: "CA",
    metro: "san-jose",
    geo: { lat: 37.3382, lng: -121.8863 },
    population: 1000000,
    industries: ["dentists", "lawyers", "med-spas", "plumbers", "auto-repair-shops", "restaurants"],
    nearby: ["santa-clara-ca", "sunnyvale-ca", "fremont-ca"],
  },
  {
    slug: "santa-clara-ca",
    name: "Santa Clara",
    state: "CA",
    metro: "san-jose",
    geo: { lat: 37.3541, lng: -121.9552 },
    population: 130000,
    industries: ["dentists", "med-spas", "plumbers", "restaurants"],
    nearby: ["san-jose-ca", "sunnyvale-ca"],
  },
  {
    slug: "sunnyvale-ca",
    name: "Sunnyvale",
    state: "CA",
    metro: "san-jose",
    geo: { lat: 37.3688, lng: -122.0363 },
    population: 155000,
    industries: ["dentists", "med-spas", "plumbers", "restaurants"],
    nearby: ["santa-clara-ca", "mountain-view-ca"],
  },
  {
    slug: "mountain-view-ca",
    name: "Mountain View",
    state: "CA",
    metro: "san-jose",
    geo: { lat: 37.3861, lng: -122.0839 },
    population: 82000,
    industries: ["dentists", "lawyers", "med-spas", "plumbers"],
    nearby: ["sunnyvale-ca", "palo-alto-ca"],
  },
  {
    slug: "palo-alto-ca",
    name: "Palo Alto",
    state: "CA",
    metro: "san-jose",
    geo: { lat: 37.4419, lng: -122.143 },
    population: 67000,
    industries: ["lawyers", "dentists", "med-spas", "plumbers"],
    nearby: ["mountain-view-ca"],
  },
  {
    slug: "fremont-ca",
    name: "Fremont",
    state: "CA",
    metro: "san-jose",
    geo: { lat: 37.5485, lng: -121.9886 },
    population: 230000,
    industries: ["dentists", "plumbers", "auto-repair-shops", "restaurants"],
    nearby: ["san-jose-ca", "hayward-ca"],
  },
  {
    slug: "hayward-ca",
    name: "Hayward",
    state: "CA",
    metro: "san-jose",
    geo: { lat: 37.6688, lng: -122.0808 },
    population: 162000,
    industries: ["auto-repair-shops", "plumbers", "dentists", "restaurants"],
    nearby: ["fremont-ca", "oakland-ca"],
  },
  {
    slug: "oakland-ca",
    name: "Oakland",
    state: "CA",
    metro: "san-jose",
    geo: { lat: 37.8044, lng: -122.2712 },
    population: 433000,
    industries: ["restaurants", "auto-repair-shops", "plumbers", "lawyers", "med-spas"],
    nearby: ["hayward-ca", "san-francisco-ca"],
  },
  {
    slug: "san-francisco-ca",
    name: "San Francisco",
    state: "CA",
    metro: "san-jose",
    geo: { lat: 37.7749, lng: -122.4194 },
    population: 808000,
    industries: ["restaurants", "lawyers", "plumbers", "dentists", "med-spas"],
    nearby: ["oakland-ca"],
  },

  // ---- Nevada (Las Vegas metro, 100mi) ----
  {
    slug: "las-vegas-nv",
    name: "Las Vegas",
    state: "NV",
    metro: "vegas",
    geo: { lat: 36.1716, lng: -115.1391 },
    population: 656000,
    industries: ["dentists", "lawyers", "plumbers", "med-spas", "restaurants", "hvac-contractors"],
    nearby: ["henderson-nv", "north-las-vegas-nv", "summerlin-nv"],
  },
  {
    slug: "henderson-nv",
    name: "Henderson",
    state: "NV",
    metro: "vegas",
    geo: { lat: 36.0395, lng: -114.9817 },
    population: 322000,
    industries: ["dentists", "med-spas", "plumbers", "lawyers", "restaurants"],
    nearby: ["las-vegas-nv", "boulder-city-nv"],
  },
  {
    slug: "north-las-vegas-nv",
    name: "North Las Vegas",
    state: "NV",
    metro: "vegas",
    geo: { lat: 36.1989, lng: -115.1175 },
    population: 274000,
    industries: ["auto-repair-shops", "hvac-contractors", "plumbers", "general-contractors", "restaurants"],
    nearby: ["las-vegas-nv", "summerlin-nv"],
  },
  {
    slug: "summerlin-nv",
    name: "Summerlin",
    state: "NV",
    metro: "vegas",
    geo: { lat: 36.1801, lng: -115.3098 },
    population: 100000,
    industries: ["dentists", "med-spas", "lawyers", "plumbers"],
    nearby: ["las-vegas-nv", "north-las-vegas-nv"],
  },
  {
    slug: "boulder-city-nv",
    name: "Boulder City",
    state: "NV",
    metro: "vegas",
    geo: { lat: 35.9786, lng: -114.8311 },
    population: 16000,
    industries: ["restaurants", "auto-repair-shops", "plumbers", "general-contractors"],
    nearby: ["henderson-nv"],
  },
  {
    slug: "pahrump-nv",
    name: "Pahrump",
    state: "NV",
    metro: "vegas",
    geo: { lat: 36.2083, lng: -115.9839 },
    population: 44000,
    industries: ["hvac-contractors", "plumbers", "auto-repair-shops", "general-contractors"],
    nearby: ["las-vegas-nv"],
  },
  {
    slug: "mesquite-nv",
    name: "Mesquite",
    state: "NV",
    metro: "vegas",
    geo: { lat: 36.8055, lng: -114.0672 },
    population: 22000,
    industries: ["restaurants", "auto-repair-shops", "plumbers", "general-contractors"],
    nearby: ["las-vegas-nv"],
  },
];

export function getCity(slug: string): CitySEO | undefined {
  return cities.find((c) => c.slug === slug);
}

/* ---------------------------------------------------------------------- */
/* INDUSTRIES. Vertical SEO targets.                                      */
/* ---------------------------------------------------------------------- */

export type IndustryAudience =
  | "trades"
  | "auto"
  | "medical"
  | "professional"
  | "personal"
  | "food";

export type IndustrySEO = {
  slug: string;
  name: string; // singular, lowercase
  plural: string;
  tier: "starter" | "professional" | "premium";
  /** Audience hub this industry belongs to (drives /for-* pages). */
  audience: IndustryAudience;
  /** schema.org subtype. Drives more specific structured data. */
  schemaType:
    | "HVACBusiness"
    | "Dentist"
    | "Attorney"
    | "GeneralContractor"
    | "Plumber"
    | "Electrician"
    | "AutoRepair"
    | "RoofingContractor"
    | "HousePainter"
    | "Locksmith"
    | "MovingCompany"
    | "HomeAndConstructionBusiness"
    | "ChildCare"
    | "VeterinaryCare"
    | "Optician"
    | "AccountingService"
    | "RealEstateAgent"
    | "BeautySalon"
    | "HairSalon"
    | "NailSalon"
    | "BarberShop"
    | "TattooParlor"
    | "ExerciseGym"
    | "Bakery"
    | "CafeOrCoffeeShop"
    | "FoodEstablishment"
    | "Florist"
    | "FuneralHome"
    | "EventVenue"
    | "MedicalBusiness"
    | "ProfessionalService";
  pains: string[];
  features: string[];
};

export const industries: IndustrySEO[] = [
  // ====================================================================
  // TRADES
  // ====================================================================
  {
    slug: "hvac-contractors",
    name: "HVAC contractor",
    plural: "HVAC contractors",
    tier: "professional",
    audience: "trades",
    schemaType: "HVACBusiness",
    pains: [
      "Old WordPress site nobody can edit anymore",
      "Phone number buried at the bottom of the page",
      "No service-area pages so Google doesn't rank you",
      "No emergency-call CTA when the AC is out at 2am",
    ],
    features: [
      "Service area pages (one per town you serve)",
      "Emergency call button on every page",
      "Before/after photo gallery",
      "Financing-available callout",
      "Customer review carousel from Google",
    ],
  },
  {
    slug: "plumbers",
    name: "plumber",
    plural: "plumbers",
    tier: "professional",
    audience: "trades",
    schemaType: "Plumber",
    pains: [
      "Phone number tiny in the corner",
      "No emergency callout when somebody's basement is flooding",
      "No 'we serve [town]' pages so Google can't rank you locally",
      "Reviews live on Yelp, not your own site",
    ],
    features: [
      "Big tap-to-call button on every page",
      "24/7 emergency callout strip",
      "Service-area pages per town",
      "Embedded Google reviews",
      "Drain camera / leak detection / water heater service pages",
    ],
  },
  {
    slug: "electricians",
    name: "electrician",
    plural: "electricians",
    tier: "professional",
    audience: "trades",
    schemaType: "Electrician",
    pains: [
      "License number and bonding info hard to find",
      "No specialty pages (panel upgrade, EV charger install, etc.)",
      "Phone number not click-to-call on mobile",
    ],
    features: [
      "License + bond + insurance badges in footer",
      "Specialty pages (EV charger, panel upgrade, generator install)",
      "Click-to-call mobile sticky bar",
      "Free-quote intake form",
    ],
  },
  {
    slug: "roofers",
    name: "roofer",
    plural: "roofers and roofing contractors",
    tier: "professional",
    audience: "trades",
    schemaType: "RoofingContractor",
    pains: [
      "No storm-damage / insurance-claim page when you need it most",
      "Drone photos exist but aren't on the site",
      "Manufacturer certifications (GAF, Owens Corning) hidden in About",
      "No financing CTA — homeowners need to know it's available",
    ],
    features: [
      "Storm-damage / insurance-claim landing page",
      "Drone photo gallery (recent jobs by neighborhood)",
      "Manufacturer / certification badges",
      "Financing-available callout",
      "Free roof inspection booking form",
    ],
  },
  {
    slug: "painters",
    name: "painter",
    plural: "painters and painting contractors",
    tier: "professional",
    audience: "trades",
    schemaType: "HousePainter",
    pains: [
      "Before/after photos buried or missing entirely",
      "Interior vs exterior services not separated, so Google can't rank either",
      "No color-consultation or specialty (cabinet painting) callouts",
    ],
    features: [
      "Interior + exterior service pages (separate URLs)",
      "Cabinet / specialty-finish service page",
      "Before/after gallery with project type filters",
      "Color-consultation booking form",
      "Insurance + bonding badges",
    ],
  },
  {
    slug: "landscapers",
    name: "landscaper",
    plural: "landscapers and lawn care companies",
    tier: "starter",
    audience: "trades",
    schemaType: "ProfessionalService",
    pains: [
      "All-text site, no photos of actual work",
      "No before/after gallery to show transformations",
      "Can't book a quote without calling during business hours",
    ],
    features: [
      "Before/after gallery",
      "Service list (mow, mulch, hardscape, design, snow removal)",
      "Online quote request form",
      "Seasonal callouts (spring cleanup, leaf removal, snow plow)",
    ],
  },
  {
    slug: "tree-services",
    name: "tree service",
    plural: "tree services and arborists",
    tier: "professional",
    audience: "trades",
    schemaType: "ProfessionalService",
    pains: [
      "No 24-hour emergency-removal callout for storm cleanup",
      "ISA certification + insurance not visible",
      "No service area defined so Google sends them to a competitor",
    ],
    features: [
      "Emergency tree removal page (24/7 callout)",
      "ISA-certified arborist badges",
      "Service list (removal, trimming, stump grinding, cabling)",
      "Service area map per town",
      "Free estimate request form",
    ],
  },
  {
    slug: "pest-control",
    name: "pest control company",
    plural: "pest control and exterminators",
    tier: "professional",
    audience: "trades",
    schemaType: "HomeAndConstructionBusiness",
    pains: [
      "No specific pages for the pests they actually treat (mice, bedbugs, termites, mosquitoes)",
      "No 'safe for kids and pets' messaging",
      "Quarterly service plans buried instead of being the headline offer",
    ],
    features: [
      "Specific pest pages (mice, bedbugs, termites, mosquitoes, ants)",
      "Quarterly / annual treatment plan page",
      "Free inspection booking form",
      "Pet- and kid-safe treatment messaging",
      "Service area pages",
    ],
  },
  {
    slug: "pool-services",
    name: "pool service",
    plural: "pool services and maintenance",
    tier: "professional",
    audience: "trades",
    schemaType: "ProfessionalService",
    pains: [
      "Weekly maintenance plans not bookable online",
      "No equipment-repair vs cleaning vs opening/closing breakdown",
      "Off-season presence is invisible (no winterization page)",
    ],
    features: [
      "Service plan page (weekly / monthly / on-demand)",
      "Pool opening + closing service pages",
      "Equipment-repair page (pumps, heaters, filters)",
      "Online quote / booking form",
      "Photo gallery of pools serviced",
    ],
  },
  {
    slug: "garage-door-repair",
    name: "garage door repair company",
    plural: "garage door repair and installation",
    tier: "professional",
    audience: "trades",
    schemaType: "ProfessionalService",
    pains: [
      "No emergency-repair callout (broken spring = car stuck)",
      "Brand affiliation (Liftmaster, Genie) not visible",
      "Repair vs install vs new-construction not separated",
    ],
    features: [
      "Same-day emergency repair page",
      "Brand pages (Liftmaster, Chamberlain, Genie, etc.)",
      "Repair / install / new-construction service breakdown",
      "Free estimate form",
      "Tap-to-call sticky bar",
    ],
  },
  {
    slug: "locksmiths",
    name: "locksmith",
    plural: "locksmiths",
    tier: "professional",
    audience: "trades",
    schemaType: "Locksmith",
    pains: [
      "No 24/7 emergency callout for lockouts",
      "Auto / commercial / residential not split",
      "License + insurance badges missing — locksmith scams are common",
    ],
    features: [
      "24/7 emergency lockout page",
      "Auto / residential / commercial service pages",
      "License + insurance badges prominently shown",
      "Service area pages",
      "Tap-to-call mobile sticky bar",
    ],
  },
  {
    slug: "movers",
    name: "moving company",
    plural: "moving companies",
    tier: "professional",
    audience: "trades",
    schemaType: "MovingCompany",
    pains: [
      "Free-quote form is just a generic contact form",
      "Local vs long-distance vs commercial not separated",
      "USDOT / license info hard to find",
    ],
    features: [
      "Local / long-distance / commercial service pages",
      "Free quote form with move-size + date fields",
      "USDOT + state license badges",
      "Customer review carousel",
      "Packing-services upsell page",
    ],
  },
  {
    slug: "junk-removal",
    name: "junk removal company",
    plural: "junk removal services",
    tier: "starter",
    audience: "trades",
    schemaType: "ProfessionalService",
    pains: [
      "Pricing not transparent — customers want a ballpark",
      "No 'what we take / what we don't' page",
      "Booking still happens by phone tag",
    ],
    features: [
      "Transparent pricing (1/4, 1/2, full truck)",
      "What-we-take / what-we-don't page",
      "Online booking with date + truck size",
      "Photo gallery of jobs",
      "Service area pages",
    ],
  },
  {
    slug: "cleaning-services",
    name: "cleaning service",
    plural: "residential and commercial cleaners",
    tier: "starter",
    audience: "trades",
    schemaType: "ProfessionalService",
    pains: [
      "Recurring vs one-time vs deep-clean not separated",
      "No instant quote based on home size",
      "Insurance + bonding info missing — homeowners ask",
    ],
    features: [
      "Recurring / one-time / deep-clean service pages",
      "Instant-quote calculator (sq ft + frequency)",
      "Insured + bonded badges",
      "Online booking",
      "Move-in / move-out specialty page",
    ],
  },
  {
    slug: "handymen",
    name: "handyman",
    plural: "handymen and home-repair pros",
    tier: "starter",
    audience: "trades",
    schemaType: "ProfessionalService",
    pains: [
      "List of services is too vague — homeowners don't know what to ask for",
      "No hourly vs project pricing transparency",
      "Insurance / bonding info missing",
    ],
    features: [
      "Service categories (plumbing fixes, electrical fixes, drywall, fixtures, assembly)",
      "Hourly + project pricing breakdown",
      "Insurance + bonding badges",
      "Quick-quote form (photo + description)",
      "Service area pages",
    ],
  },
  {
    slug: "fencing-contractors",
    name: "fencing contractor",
    plural: "fencing contractors",
    tier: "professional",
    audience: "trades",
    schemaType: "ProfessionalService",
    pains: [
      "Material types (wood, vinyl, chain link, aluminum) not split into pages",
      "No project gallery filterable by material",
      "Free-estimate form is too generic",
    ],
    features: [
      "Material pages (wood, vinyl, chain link, aluminum)",
      "Project gallery filterable by material",
      "Free-estimate form with linear-feet field",
      "Residential vs commercial service split",
      "Service area pages",
    ],
  },
  {
    slug: "concrete-contractors",
    name: "concrete contractor",
    plural: "concrete contractors",
    tier: "professional",
    audience: "trades",
    schemaType: "GeneralContractor",
    pains: [
      "Decorative concrete (stamped, stained) not differentiated from flatwork",
      "No project gallery to show recent driveways / patios",
      "Service area too vague to rank locally",
    ],
    features: [
      "Project pages (driveways, patios, foundations, decorative)",
      "Stamped / stained / polished concrete gallery",
      "Service area pages per town",
      "Free-estimate form with project-type field",
      "Insurance + license badges",
    ],
  },
  {
    slug: "general-contractors",
    name: "general contractor",
    plural: "general contractors and builders",
    tier: "professional",
    audience: "trades",
    schemaType: "GeneralContractor",
    pains: [
      "Photos from 2018 still on the site",
      "No project gallery to show recent work",
      "License + insurance info nowhere to be found",
      "Service area too vague ('Wisconsin' isn't a town)",
    ],
    features: [
      "Project gallery (kitchen / bath / addition / new build)",
      "License + insurance badges",
      "Service area map",
      "Get-an-estimate form with project type",
      "Customer testimonials with project photos",
    ],
  },

  // ====================================================================
  // AUTO
  // ====================================================================
  {
    slug: "auto-repair-shops",
    name: "auto repair shop",
    plural: "auto repair shops and mechanics",
    tier: "professional",
    audience: "auto",
    schemaType: "AutoRepair",
    pains: [
      "Services page lists every brand badge but no actual services",
      "No appointment booking, just 'call us'",
      "ASE certifications buried in About page",
    ],
    features: [
      "Service list (brakes, oil change, transmission, AC, etc.)",
      "Online appointment request",
      "ASE / manufacturer certification badges",
      "Customer review carousel",
      "Loaner-car / shuttle policy callout",
    ],
  },
  {
    slug: "auto-body-shops",
    name: "auto body shop",
    plural: "auto body and collision repair shops",
    tier: "professional",
    audience: "auto",
    schemaType: "AutoRepair",
    pains: [
      "No insurance-claim assistance page",
      "Before/after collision photos missing",
      "Direct-repair partner list (Allstate, State Farm) not visible",
    ],
    features: [
      "Insurance-claim assistance page",
      "Before/after gallery (collision repair)",
      "Direct-repair partner badges",
      "Free-estimate form with photo upload",
      "Loaner / rental coordination callout",
    ],
  },
  {
    slug: "tire-shops",
    name: "tire shop",
    plural: "tire shops",
    tier: "starter",
    audience: "auto",
    schemaType: "AutoRepair",
    pains: [
      "Tire-size finder missing — customers leave to find it elsewhere",
      "Brand selection not searchable",
      "Mounting / balancing / alignment services not bundled clearly",
    ],
    features: [
      "Tire-size finder by year/make/model",
      "Brand pages (Michelin, Goodyear, Continental, etc.)",
      "Service bundle (mount, balance, alignment) page",
      "Online appointment booking",
      "Roadside / mobile service callout",
    ],
  },
  {
    slug: "car-detailing",
    name: "car detailing service",
    plural: "auto detailing services",
    tier: "starter",
    audience: "auto",
    schemaType: "AutoRepair",
    pains: [
      "Package pricing buried in body copy",
      "Mobile vs in-shop services not separated",
      "Before/after photos missing or low quality",
    ],
    features: [
      "Package pricing table (basic, premium, ceramic, paint correction)",
      "Mobile vs in-shop service pages",
      "Before/after gallery",
      "Online booking with package + vehicle",
      "Add-on services (engine bay, headlight restoration)",
    ],
  },
  {
    slug: "towing-services",
    name: "towing service",
    plural: "towing and roadside assistance",
    tier: "starter",
    audience: "auto",
    schemaType: "AutoRepair",
    pains: [
      "No 24/7 emergency callout — towing is by definition urgent",
      "Service area too vague",
      "Insurance / DOT info missing",
    ],
    features: [
      "24/7 dispatch tap-to-call",
      "Service area page",
      "Service list (light-duty, medium-duty, heavy-duty, motorcycles)",
      "Insurance + DOT badges",
      "Roadside-assistance services (jump start, lockout, fuel delivery)",
    ],
  },

  // ====================================================================
  // MEDICAL
  // ====================================================================
  {
    slug: "dentists",
    name: "dentist",
    plural: "dentists",
    tier: "premium",
    audience: "medical",
    schemaType: "Dentist",
    pains: [
      "Stock-photo template from 2014 that screams 'corporate dental'",
      "Online booking form that doesn't actually book",
      "No pages for the procedures you actually do",
      "Insurance-accepted list missing or outdated",
    ],
    features: [
      "Procedure pages (Invisalign, implants, whitening, etc.)",
      "Insurance-accepted list with logos",
      "Online booking that actually integrates with your software",
      "New-patient intake form",
      "Smile gallery (before/after)",
    ],
  },
  {
    slug: "orthodontists",
    name: "orthodontist",
    plural: "orthodontists",
    tier: "premium",
    audience: "medical",
    schemaType: "Dentist",
    pains: [
      "Treatment options (braces vs Invisalign vs clear aligners) not differentiated",
      "No financing / payment-plan callout",
      "Free-consultation CTA missing or buried",
    ],
    features: [
      "Treatment pages (braces, Invisalign, clear aligners, retainers)",
      "Financing + payment plan page",
      "Free-consultation booking form",
      "Smile-transformation gallery",
      "Adult vs teen vs child treatment paths",
    ],
  },
  {
    slug: "cosmetic-dentists",
    name: "cosmetic dentist",
    plural: "cosmetic dentists",
    tier: "premium",
    audience: "medical",
    schemaType: "Dentist",
    pains: [
      "Veneers vs whitening vs bonding lumped together",
      "Before/after gallery either missing or unfilterable",
      "Smile-design consultations not bookable online",
    ],
    features: [
      "Procedure pages (veneers, whitening, bonding, smile makeover)",
      "Filterable before/after gallery",
      "Free smile-design consultation form",
      "Financing + Care Credit callouts",
      "Patient testimonials with photos",
    ],
  },
  {
    slug: "chiropractors",
    name: "chiropractor",
    plural: "chiropractors",
    tier: "professional",
    audience: "medical",
    schemaType: "MedicalBusiness",
    pains: [
      "Conditions treated (back pain, sciatica, headaches) not on separate pages",
      "Insurance-accepted list missing",
      "First-visit experience not described",
    ],
    features: [
      "Condition pages (back pain, neck pain, sciatica, headaches, sports)",
      "Insurance-accepted list with logos",
      "What-to-expect-on-first-visit page",
      "Online booking",
      "New-patient intake form",
    ],
  },
  {
    slug: "veterinarians",
    name: "veterinarian",
    plural: "veterinarians and animal hospitals",
    tier: "professional",
    audience: "medical",
    schemaType: "VeterinaryCare",
    pains: [
      "Services (wellness, dental, surgery, emergency) buried in one page",
      "New-pet intake forms still happen on paper",
      "No emergency-after-hours info",
    ],
    features: [
      "Service pages (wellness, dental, surgery, vaccinations)",
      "Emergency / after-hours page",
      "Online new-pet intake forms",
      "Veterinarian bios with photos",
      "Online appointment booking",
    ],
  },
  {
    slug: "optometrists",
    name: "optometrist",
    plural: "optometrists and eye doctors",
    tier: "professional",
    audience: "medical",
    schemaType: "Optician",
    pains: [
      "Eye-exam booking happens by phone only",
      "Brand pages (frames) are out of date",
      "Insurance-accepted list missing",
    ],
    features: [
      "Online eye-exam booking",
      "Frame brand pages (Ray-Ban, Oakley, Warby Parker, etc.)",
      "Insurance + vision plan list",
      "Contact-lens reorder page",
      "Pediatric / adult / specialty exam pages",
    ],
  },
  {
    slug: "physical-therapy",
    name: "physical therapy clinic",
    plural: "physical therapy clinics",
    tier: "professional",
    audience: "medical",
    schemaType: "MedicalBusiness",
    pains: [
      "Conditions (post-surgery, sports injury, chronic pain) not split",
      "Therapist bios missing or thin",
      "Insurance + payment info hidden",
    ],
    features: [
      "Condition pages (post-surgery, sports, work injury, chronic pain)",
      "Therapist bios with credentials",
      "Insurance-accepted list",
      "Online booking",
      "First-visit walkthrough page",
    ],
  },
  {
    slug: "dermatologists",
    name: "dermatologist",
    plural: "dermatologists",
    tier: "premium",
    audience: "medical",
    schemaType: "MedicalBusiness",
    pains: [
      "Medical vs cosmetic dermatology not separated",
      "Procedure pages thin or missing",
      "Insurance + cosmetic-pay paths not differentiated",
    ],
    features: [
      "Medical dermatology pages (acne, eczema, skin cancer, psoriasis)",
      "Cosmetic procedure pages (Botox, fillers, laser, peels)",
      "Online booking split by type",
      "Insurance-accepted list",
      "Provider bios with credentials",
    ],
  },
  {
    slug: "lawyers",
    name: "lawyer",
    plural: "lawyers and law firms",
    tier: "premium",
    audience: "professional",
    schemaType: "Attorney",
    pains: [
      "Generic legal template that looks like every other firm",
      "Practice areas not indexed properly so Google doesn't surface you",
      "No case results page (when you have wins to show)",
      "Contact form that puts everyone in the same bucket",
    ],
    features: [
      "Practice-area pages with proper schema",
      "Attorney bios with real photos",
      "Case results / settlement page (where ethics rules allow)",
      "Practice-area-specific intake forms",
      "Free consultation CTA on every page",
    ],
  },

  // ====================================================================
  // PROFESSIONAL
  // ====================================================================
  {
    slug: "accountants",
    name: "accountant",
    plural: "accountants and CPAs",
    tier: "professional",
    audience: "professional",
    schemaType: "AccountingService",
    pains: [
      "Service pages (tax, bookkeeping, payroll, advisory) lumped together",
      "Industries served not listed (medical, construction, restaurant)",
      "No new-client intake / discovery call form",
    ],
    features: [
      "Service pages (tax prep, bookkeeping, payroll, advisory)",
      "Industries-served pages (medical, restaurant, contractor, etc.)",
      "Online discovery-call booking",
      "Client portal callout",
      "Tax deadline reminders / resource page",
    ],
  },
  {
    slug: "realtors",
    name: "realtor",
    plural: "realtors and real estate agents",
    tier: "professional",
    audience: "professional",
    schemaType: "RealEstateAgent",
    pains: [
      "Listings page is a static gallery, not searchable",
      "Buyer / seller / investor not segmented",
      "Neighborhood-guide pages missing",
    ],
    features: [
      "IDX-integrated listing search",
      "Buyer / seller / investor landing pages",
      "Neighborhood guide pages with school + amenity info",
      "Free home-valuation tool",
      "Agent bio + recent-sales page",
    ],
  },
  {
    slug: "insurance-agents",
    name: "insurance agent",
    plural: "insurance agents and brokers",
    tier: "professional",
    audience: "professional",
    schemaType: "ProfessionalService",
    pains: [
      "Auto / home / life / business not separated into service pages",
      "Quote-request form is generic, not policy-specific",
      "Carriers represented not visible",
    ],
    features: [
      "Service pages (auto, home, life, business, umbrella)",
      "Quote-request forms specific to each line",
      "Carrier-represented logos",
      "Bundle-discount calculator",
      "Claim-help / after-hours info",
    ],
  },
  {
    slug: "financial-advisors",
    name: "financial advisor",
    plural: "financial advisors and planners",
    tier: "premium",
    audience: "professional",
    schemaType: "ProfessionalService",
    pains: [
      "Service offerings (retirement, estate, tax, investment) lumped together",
      "Fee structure (AUM vs flat vs hourly) not transparent",
      "No client-portal access",
    ],
    features: [
      "Service pages (retirement, estate, tax, investment, insurance)",
      "Fee-structure transparency page",
      "Client portal callout",
      "Discovery-call booking form",
      "Advisor bios with credentials (CFP, CFA, etc.)",
    ],
  },
  {
    slug: "mortgage-brokers",
    name: "mortgage broker",
    plural: "mortgage brokers",
    tier: "professional",
    audience: "professional",
    schemaType: "ProfessionalService",
    pains: [
      "Loan types (conventional, FHA, VA, jumbo) not split into pages",
      "Pre-approval form is just a contact form",
      "Rates page out of date or missing",
    ],
    features: [
      "Loan-type pages (conventional, FHA, VA, USDA, jumbo, refi)",
      "Online pre-approval form with prequal questions",
      "Live-rates widget or rates page",
      "Loan-officer bios + NMLS numbers",
      "First-time buyer guide",
    ],
  },

  // ====================================================================
  // PERSONAL SERVICES
  // ====================================================================
  {
    slug: "salons",
    name: "salon",
    plural: "hair and beauty salons",
    tier: "starter",
    audience: "personal",
    schemaType: "BeautySalon",
    pains: [
      "Booking happens by DM and phone tag",
      "No service menu with prices, just a Linktree",
      "No way to see stylist work before booking",
    ],
    features: [
      "Online booking per stylist",
      "Service menu with prices",
      "Stylist portfolio gallery",
      "Walk-in availability indicator",
      "Gift card and package options",
    ],
  },
  {
    slug: "barbershops",
    name: "barbershop",
    plural: "barbershops",
    tier: "starter",
    audience: "personal",
    schemaType: "BarberShop",
    pains: [
      "No online booking — clients walk to a competitor that has it",
      "Barber bios + portfolios missing",
      "Service menu missing or just a chalkboard photo",
    ],
    features: [
      "Online booking per barber",
      "Barber bios with portfolio shots",
      "Service menu with prices",
      "Walk-in vs appointment availability indicator",
      "Gift card / package purchasing",
    ],
  },
  {
    slug: "nail-salons",
    name: "nail salon",
    plural: "nail salons",
    tier: "starter",
    audience: "personal",
    schemaType: "NailSalon",
    pains: [
      "Service menu (mani, pedi, gel, dip, acrylic) hard to read",
      "No portfolio gallery of recent nail art",
      "Walk-in availability not visible",
    ],
    features: [
      "Service menu with prices (mani, pedi, gel, dip, acrylic, art)",
      "Portfolio gallery of recent work",
      "Online booking per technician",
      "Walk-in availability indicator",
      "Specialty add-ons (paraffin, foot massage, art)",
    ],
  },
  {
    slug: "med-spas",
    name: "med spa",
    plural: "med spas and aesthetic clinics",
    tier: "premium",
    audience: "personal",
    schemaType: "ProfessionalService",
    pains: [
      "Service menu is a wall of text, no photos of treatments",
      "No online booking, despite competitors having it",
      "Before/after photos buried or missing entirely",
      "No transparent pricing, scares off cost-conscious clients",
    ],
    features: [
      "Treatment pages (Botox, fillers, laser, microneedling, etc.)",
      "Before/after gallery with consent-cleared photos",
      "Online booking integrated with your scheduling tool",
      "Provider bios with credentials",
      "First-time client offer / new patient form",
    ],
  },
  {
    slug: "tattoo-studios",
    name: "tattoo studio",
    plural: "tattoo studios and parlors",
    tier: "starter",
    audience: "personal",
    schemaType: "TattooParlor",
    pains: [
      "Artist portfolios scattered across Instagram with no central gallery",
      "Booking happens by DM and is hard to track",
      "No FAQ for first-timers (aftercare, pain, pricing)",
    ],
    features: [
      "Artist portfolio gallery (filterable by style)",
      "Online consultation / booking request",
      "First-timer FAQ + aftercare guide",
      "Artist bios + booking links",
      "Walk-in availability indicator",
    ],
  },
  {
    slug: "fitness-gyms",
    name: "gym",
    plural: "gyms and fitness studios",
    tier: "professional",
    audience: "personal",
    schemaType: "ExerciseGym",
    pains: [
      "Class schedule lives in Mindbody, not embedded on the site",
      "No free-trial or class-pass conversion path",
      "Trainer bios missing or thin",
    ],
    features: [
      "Embedded class schedule (Mindbody / GloFox / etc.)",
      "Free-trial / first-class-free landing page",
      "Trainer bios with credentials + photos",
      "Membership tier comparison",
      "Tour-booking form",
    ],
  },
  {
    slug: "yoga-studios",
    name: "yoga studio",
    plural: "yoga and pilates studios",
    tier: "professional",
    audience: "personal",
    schemaType: "ExerciseGym",
    pains: [
      "Class types (vinyasa, hot, restorative) not differentiated",
      "Drop-in pricing buried",
      "No new-student welcome path",
    ],
    features: [
      "Class-type pages (vinyasa, hot, yin, restorative, prenatal)",
      "Pricing page (drop-in, packages, memberships)",
      "Embedded class schedule",
      "First-class-free new-student landing",
      "Teacher bios",
    ],
  },
  {
    slug: "photographers",
    name: "photographer",
    plural: "photographers",
    tier: "professional",
    audience: "personal",
    schemaType: "ProfessionalService",
    pains: [
      "Specialties (wedding, portrait, real estate, brand) on one page",
      "Pricing not transparent",
      "Booking is back-and-forth email instead of a structured inquiry",
    ],
    features: [
      "Specialty pages (wedding, portrait, family, real estate, brand)",
      "Package pricing tables",
      "Structured inquiry form with date + package",
      "Filterable portfolio gallery",
      "Client testimonials per specialty",
    ],
  },
  {
    slug: "pet-groomers",
    name: "pet groomer",
    plural: "pet groomers",
    tier: "starter",
    audience: "personal",
    schemaType: "ProfessionalService",
    pains: [
      "Booking still happens by phone tag",
      "Pricing per breed / size hidden",
      "No 'first groom what to expect' info",
    ],
    features: [
      "Online booking with breed + size",
      "Pricing table by size + service",
      "First-visit walkthrough page",
      "Photo gallery of recent grooms",
      "Add-on services (de-shed, teeth, nails)",
    ],
  },
  {
    slug: "child-care",
    name: "child care center",
    plural: "daycares and child care centers",
    tier: "professional",
    audience: "personal",
    schemaType: "ChildCare",
    pains: [
      "Tour-booking is a phone-only process",
      "Curriculum + age-group breakdown missing",
      "Licensing + accreditation badges hidden",
    ],
    features: [
      "Online tour booking",
      "Age-group pages (infant, toddler, preschool, pre-K)",
      "Curriculum overview",
      "Licensing + accreditation badges",
      "Tuition transparency / inquiry form",
    ],
  },

  // ====================================================================
  // FOOD
  // ====================================================================
  {
    slug: "restaurants",
    name: "restaurant",
    plural: "restaurants",
    tier: "starter",
    audience: "food",
    schemaType: "FoodEstablishment",
    pains: [
      "Menu lives on a 2-year-old PDF that won't open on phone",
      "No online ordering or reservations",
      "Hours wrong on Google because the site says something else",
      "Photos taken on a flip phone in 2014",
    ],
    features: [
      "Mobile-friendly menu (swap items in seconds, no PDF)",
      "Online reservations or ordering integration",
      "Hours and address synced everywhere",
      "Photo gallery for food, room, events",
      "Specials / events callout strip",
    ],
  },
  {
    slug: "bakeries",
    name: "bakery",
    plural: "bakeries",
    tier: "starter",
    audience: "food",
    schemaType: "Bakery",
    pains: [
      "Custom-cake ordering is a phone-only process",
      "No daily-menu page, so customers can't tell what's available today",
      "Wholesale / catering inquiry path missing",
    ],
    features: [
      "Custom-cake order form with photo upload",
      "Daily / weekly menu page",
      "Wholesale + catering inquiry forms",
      "Photo gallery filterable by category (cakes, pastries, breads)",
      "Online pre-order for pickup",
    ],
  },
  {
    slug: "coffee-shops",
    name: "coffee shop",
    plural: "coffee shops and cafes",
    tier: "starter",
    audience: "food",
    schemaType: "CafeOrCoffeeShop",
    pains: [
      "Menu missing or out of date",
      "Bean-of-the-week / specials not promoted",
      "Wholesale / subscription inquiry missing",
    ],
    features: [
      "Menu page with specials callout",
      "Wholesale + subscription inquiry forms",
      "Photo gallery of drinks + food",
      "Loyalty program / app callout",
      "Hours + multi-location info synced",
    ],
  },
  {
    slug: "food-trucks",
    name: "food truck",
    plural: "food trucks",
    tier: "starter",
    audience: "food",
    schemaType: "FoodEstablishment",
    pains: [
      "Schedule is on Instagram only — older customers miss it",
      "Catering inquiry buried in a generic contact form",
      "Menu not on the site at all",
    ],
    features: [
      "Live schedule (where we are this week)",
      "Catering inquiry form with date + headcount",
      "Menu page",
      "Instagram + social embed",
      "Booking widget for events",
    ],
  },
  {
    slug: "florists",
    name: "florist",
    plural: "florists",
    tier: "professional",
    audience: "food",
    schemaType: "Florist",
    pains: [
      "Wedding / event / sympathy / everyday lumped together",
      "No online ordering for delivery",
      "Custom-arrangement inquiry not separated",
    ],
    features: [
      "Occasion pages (wedding, sympathy, birthday, everyday)",
      "Online ordering with delivery zones",
      "Custom-arrangement inquiry form",
      "Wedding / event consultation booking",
      "Photo gallery filterable by occasion",
    ],
  },
  {
    slug: "wedding-venues",
    name: "wedding venue",
    plural: "wedding and event venues",
    tier: "premium",
    audience: "food",
    schemaType: "EventVenue",
    pains: [
      "Pricing not transparent — couples request quote, then ghost",
      "Photo gallery missing or unfilterable by event type",
      "Tour booking is a phone-tag process",
    ],
    features: [
      "Transparent package pricing",
      "Filterable photo gallery (ceremony, reception, outdoor)",
      "Online tour booking",
      "Vendor partner page",
      "Capacity + floor-plan downloads",
    ],
  },
  {
    slug: "funeral-homes",
    name: "funeral home",
    plural: "funeral homes",
    tier: "premium",
    audience: "food",
    schemaType: "FuneralHome",
    pains: [
      "Service options (traditional, cremation, pre-planning) not split",
      "Obituary page hard to find or update",
      "Pre-planning inquiry path missing",
    ],
    features: [
      "Service-type pages (traditional, cremation, pre-planning)",
      "Obituary page (easy for staff to update)",
      "Pre-planning inquiry form",
      "Grief-resource library",
      "Memorial-service livestream callout",
    ],
  },
];

export function getIndustry(slug: string): IndustrySEO | undefined {
  return industries.find((i) => i.slug === slug);
}

/**
 * Industries that exist in every market and should generate a city×industry
 * page for every city we serve. Covers the highest-volume local SMB
 * searches across all 3 metros.
 */
export const universalIndustrySlugs: string[] = [
  "plumbers",
  "electricians",
  "hvac-contractors",
  "roofers",
  "painters",
  "landscapers",
  "cleaning-services",
  "handymen",
  "movers",
  "pest-control",
  "auto-repair-shops",
  "tire-shops",
  "dentists",
  "lawyers",
  "chiropractors",
  "veterinarians",
  "optometrists",
  "accountants",
  "realtors",
  "insurance-agents",
  "salons",
  "barbershops",
  "nail-salons",
  "fitness-gyms",
  "photographers",
  "pet-groomers",
  "restaurants",
  "bakeries",
  "coffee-shops",
  "florists",
];

/**
 * For a given city, return the merged list of industries we cover there:
 * the curated city.industries (local specialties) UNION the universal list.
 * De-duplicated, preserving the city's curated order first so the city
 * page hero section emphasizes local fit.
 */
export function citiesIndustriesFor(city: CitySEO): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const slug of [...city.industries, ...universalIndustrySlugs]) {
    if (seen.has(slug)) continue;
    if (!getIndustry(slug)) continue; // skip slugs without a definition
    seen.add(slug);
    out.push(slug);
  }
  return out;
}

/** All cities that explicitly list this industry OR have it in their universal coverage. */
export function citiesForIndustry(slug: string): CitySEO[] {
  if (universalIndustrySlugs.includes(slug)) return cities;
  return cities.filter((c) => c.industries.includes(slug));
}

/* ---------------------------------------------------------------------- */
/* COMPETITORS. Alternative-to SEO.                                       */
/* ---------------------------------------------------------------------- */

export type CompetitorSEO = {
  slug: string;
  name: string;
  // Why someone might leave them for us
  cons: string[];
  // What they do well (don't lie)
  pros: string[];
  // Approximate annual cost they pay
  annualCost: string;
  ourAnnualCost: string;
};

export const competitors: CompetitorSEO[] = [
  {
    slug: "wix",
    name: "Wix",
    annualCost: "$216–$564/yr",
    ourAnnualCost: "$750 once, no monthly",
    pros: [
      "Drag-and-drop editor anyone can use",
      "Lots of templates to start from",
      "Hosting included",
    ],
    cons: [
      "Site speed is mediocre. Wix sites routinely fail Google's Core Web Vitals",
      "You can't export your site if you ever want to leave",
      "SEO is locked into Wix's slow URL structure",
      "Monthly fees forever. Pay $300/yr for 5 years and that's $1,500 you don't get back",
    ],
  },
  {
    slug: "squarespace",
    name: "Squarespace",
    annualCost: "$192–$648/yr",
    ourAnnualCost: "$750 once, no monthly",
    pros: [
      "Templates look better out of the box than Wix",
      "Built-in scheduling and email tools",
      "Reliable hosting",
    ],
    cons: [
      "Templates lock you into a specific layout. Hard to escape the 'Squarespace look'",
      "Page-load times slower than custom-built sites",
      "Monthly forever. Same math as Wix, you never own it",
      "Limited control over technical SEO (schema, structured data, redirects)",
    ],
  },
  {
    slug: "godaddy-website-builder",
    name: "GoDaddy",
    annualCost: "$120–$360/yr",
    ourAnnualCost: "$750 once, no monthly",
    pros: [
      "Cheapest of the big builders",
      "Domain + email + site bundled",
    ],
    cons: [
      "The cheapest option for a reason. Speed and SEO are bottom-tier",
      "AI-generated content fills your site with generic copy",
      "Constant upsells and feature paywalls",
      "Sites built on GoDaddy rank visibly worse on Google than the alternatives",
    ],
  },
  {
    slug: "wordpress",
    name: "WordPress",
    annualCost: "$300–$1,500/yr (with hosting + plugins)",
    ourAnnualCost: "$750 once, no monthly",
    pros: [
      "Full control if you (or your developer) know what you're doing",
      "Massive plugin ecosystem",
      "You own the code",
    ],
    cons: [
      "Plugin updates break the site every few months",
      "Hosting + premium plugins + maintenance adds up to $50–$150/mo",
      "Without a developer, you're stuck with whatever your old guy set up",
      "Security patches required constantly. Outdated WordPress is a target",
    ],
  },
];

export function getCompetitor(slug: string): CompetitorSEO | undefined {
  return competitors.find((c) => c.slug === slug);
}

/* ---------------------------------------------------------------------- */
/* SITEMAP REGISTRY                                                        */
/* ---------------------------------------------------------------------- */

export type SitemapEntry = {
  path: string;
  priority: number;
  changefreq: "daily" | "weekly" | "monthly" | "yearly";
};

export function buildSitemap(): SitemapEntry[] {
  const base: SitemapEntry[] = [
    { path: "/", priority: 1.0, changefreq: "weekly" },
    { path: "/examples", priority: 0.9, changefreq: "monthly" },
    { path: "/examples/forest-edge-landscaping", priority: 0.8, changefreq: "monthly" },
    { path: "/examples/rivera-plumbing", priority: 0.8, changefreq: "monthly" },
    { path: "/examples/henderson-smile-dental", priority: 0.8, changefreq: "monthly" },
    { path: "/web-design", priority: 0.85, changefreq: "monthly" },
    { path: "/websites-for", priority: 0.85, changefreq: "monthly" },
    { path: "/vs", priority: 0.7, changefreq: "monthly" },
    { path: "/privacy", priority: 0.3, changefreq: "yearly" },
    { path: "/terms", priority: 0.3, changefreq: "yearly" },
    { path: "/for-trades", priority: 0.85, changefreq: "monthly" },
    { path: "/for-auto", priority: 0.85, changefreq: "monthly" },
    { path: "/for-medical", priority: 0.85, changefreq: "monthly" },
    { path: "/for-professional-services", priority: 0.85, changefreq: "monthly" },
    { path: "/for-personal-services", priority: 0.85, changefreq: "monthly" },
    { path: "/for-restaurants", priority: 0.85, changefreq: "monthly" },
  ];
  for (const c of cities) {
    base.push({
      path: `/web-design/${c.slug}`,
      priority: 0.85,
      changefreq: "monthly",
    });
  }
  for (const i of industries) {
    base.push({
      path: `/websites-for/${i.slug}`,
      priority: 0.85,
      changefreq: "monthly",
    });
    for (const c of citiesForIndustry(i.slug)) {
      base.push({
        path: `/websites-for/${i.slug}/${c.slug}`,
        priority: 0.75,
        changefreq: "monthly",
      });
    }
  }
  for (const c of competitors) {
    base.push({
      path: `/vs/${c.slug}`,
      priority: 0.7,
      changefreq: "monthly",
    });
  }
  return base;
}

/* ---------------------------------------------------------------------- */
/* JSON-LD HELPERS                                                         */
/* ---------------------------------------------------------------------- */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: seo.siteUrl,
    logo: `${seo.siteUrl}/icon.png`,
    description: site.description,
    sameAs: [],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: seo.siteUrl,
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${seo.siteUrl}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * LocalBusiness. The schema that powers Google's local pack and
 * "near me" rankings. For a service business with two service areas,
 * we list both via `areaServed` and provide geo for each.
 */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: seo.siteUrl,
    image: `${seo.siteUrl}/opengraph-image`,
    telephone: site.contact.phoneHref.replace("tel:", ""),
    email: site.contact.email,
    priceRange: "$750 - $2,500",
    areaServed: [
      {
        "@type": "City",
        name: "Appleton",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Appleton",
          addressRegion: "WI",
          addressCountry: "US",
        },
      },
      {
        "@type": "City",
        name: "San Jose",
        address: {
          "@type": "PostalAddress",
          addressLocality: "San Jose",
          addressRegion: "CA",
          addressCountry: "US",
        },
      },
      {
        "@type": "City",
        name: "Las Vegas",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          addressCountry: "US",
        },
      },
    ],
    serviceType: "Website design and development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Website packages",
      itemListElement: tiers.map((t) => ({
        "@type": "Offer",
        name: `${t.name} website`,
        price: t.flatPrice,
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: t.flatPrice,
          priceCurrency: "USD",
          valueAddedTaxIncluded: false,
        },
        description: t.features.join(", "),
      })),
    },
  };
}

export function serviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Local business website design",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: seo.siteUrl,
    },
    areaServed: [
      "Appleton, WI",
      "Green Bay, WI",
      "San Jose, CA",
      "Bay Area, CA",
      "Las Vegas, NV",
      "Henderson, NV",
    ],
    description: site.description,
    offers: tiers.map((t) => ({
      "@type": "Offer",
      name: `${t.name} website`,
      price: t.flatPrice,
      priceCurrency: "USD",
    })),
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "en-US",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["#faq summary", "#faq details p"],
    },
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.url,
    })),
  };
}
