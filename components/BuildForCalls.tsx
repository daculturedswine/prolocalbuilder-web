import { Reveal } from "./Reveal";

const rows = [
  {
    usual: "A homepage that talks about the agency's taste.",
    ours: "A homepage that gets a stranger to understand, trust, and call.",
  },
  {
    usual: "Pretty pages with unclear next steps.",
    ours: "Service pages, city cues, click-to-call, and quote paths on mobile.",
  },
  {
    usual: "A proposal that grows every time you ask a question.",
    ours: "Three fixed tiers: $895, $1,795, or $2,995.",
  },
];

export function BuildForCalls() {
  return (
    <section id="what" className="section bg-ink-50">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">
            <span className="label">What we build</span>
            <h2 className="text-h2-sm text-ink-900 md:text-h2">
              Built for calls, not awards.
            </h2>
            <p className="mt-4 text-body-lg text-ink-700">
              The job is simple: make the business look real, explain the work,
              and make the next step obvious on a phone.
            </p>
          </div>

          <div className="md:col-span-7">
            <div className="overflow-hidden rounded-lg border border-ink-200 bg-white shadow-card">
              <div className="grid grid-cols-2 border-b border-ink-200 bg-ink-50">
                <div className="px-5 py-4 text-label uppercase text-ink-700">
                  Most agencies
                </div>
                <div className="border-l border-ink-200 px-5 py-4 text-label uppercase text-orange-500">
                  ProLocalBuilder
                </div>
              </div>
              <div>
                {rows.map((row, index) => (
                  <Reveal
                    key={row.ours}
                    delay={index * 80}
                    className="grid grid-cols-1 border-b border-ink-100 last:border-b-0 sm:grid-cols-2"
                  >
                    <div className="px-5 py-5 text-body-sm text-ink-700">
                      {row.usual}
                    </div>
                    <div className="border-t border-ink-100 px-5 py-5 text-body-sm font-semibold text-ink-900 sm:border-l sm:border-t-0">
                      {row.ours}
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
