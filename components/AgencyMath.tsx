import { Reveal } from "./Reveal";

// Categories an agency typically covers in a $5K quote. We don't claim
// specific dollar amounts because we don't have proprietary data on
// other agencies' cost breakdowns — only the labels are defensible.
const agencyItems = [
  "A sales process and discovery call",
  "A project manager between you and the work",
  "Kickoff and status meetings",
  "Template setup and configuration",
  "Multiple structured revision rounds",
];

const ourItems = [
  "Fixed tier before work starts",
  "One builder from quote to launch",
  "No monthly lock-in to keep the site",
  "Scope kept tight so the price can stay honest",
];

export function AgencyMath() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <span className="label">Agency math</span>
            <h2 className="text-h2-sm text-ink-900 md:text-h2">
              A lot of website money never reaches the website.
            </h2>
            <p className="mt-4 text-body-lg text-ink-700">
              Bigger agencies are not always dishonest. They just carry more
              process. You pay for that process whether your site needs it or
              not.
            </p>
          </div>

          <Reveal as="div" className="md:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-ink-200 bg-ink-50 p-6">
                <div className="text-label uppercase text-ink-700">
                  What a $5,000 quote covers
                </div>
                <ul className="mt-5 space-y-3">
                  {agencyItems.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-b border-ink-200 pb-3 text-body-sm text-ink-700 last:border-b-0 last:pb-0"
                    >
                      <DotIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-body-sm italic text-ink-700">
                  None of which improves your phone-ringing rate.
                </p>
              </div>

              <div className="rounded-lg border-2 border-orange-500 bg-white p-6 shadow-featured">
                <div className="text-label uppercase text-orange-500">
                  Our model
                </div>
                <div className="mt-4 font-mono text-price-lg font-bold leading-none text-navy-800">
                  $750+
                </div>
                <ul className="mt-5 space-y-3">
                  {ourItems.map((item) => (
                    <li key={item} className="flex gap-3 text-body-sm text-ink-700">
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function DotIcon() {
  return (
    <span
      aria-hidden="true"
      className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-400"
    />
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mt-1 h-4 w-4 flex-shrink-0 text-orange-500"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="m4 10 4 4 8-9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
