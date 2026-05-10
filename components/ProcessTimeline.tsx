import { Reveal } from "./Reveal";

const steps = [
  {
    day: "Day 1",
    title: "Quote and scope",
    body: "You send the basics. We pick the right tier and write down what is included before anyone pays.",
  },
  {
    day: "Day 3",
    title: "First build",
    body: "The structure, copy direction, mobile layout, and conversion paths are in place.",
  },
  {
    day: "Day 7",
    title: "Review pass",
    body: "You get a preview link. We tighten details, swap content, and fix anything unclear.",
  },
  {
    day: "Day 10",
    title: "Launch",
    body: "The site goes live on your domain. You own the code, the domain, and the finished site.",
  },
];

export function ProcessTimeline() {
  return (
    <section id="process" className="section bg-ink-50">
      <div className="container-page">
        <div className="grid gap-10 md:grid-cols-12 md:items-start">
          <div className="md:col-span-4">
            <span className="label">Process</span>
            <h2 className="text-h2-sm text-ink-900 md:text-h2">
              Ten days without the agency fog.
            </h2>
            <p className="mt-4 text-body-lg text-ink-700">
              Starter sites are often faster. Premium sites can take a little
              longer. The point is the same: clear owner, clear timeline, clear
              launch.
            </p>
          </div>

          <ol className="relative md:col-span-8">
            <span
              aria-hidden="true"
              className="absolute left-3 top-3 bottom-3 hidden w-px bg-ink-200 sm:block"
            />
            {steps.map((step, index) => (
              <Reveal as="li" key={step.day} delay={index * 80}>
                <div className="relative grid gap-4 border-b border-ink-200 py-6 last:border-b-0 sm:grid-cols-12 sm:pl-10">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-8 hidden h-6 w-6 rounded-md border border-orange-500 bg-white sm:block"
                  />
                  <div className="font-mono text-h3 text-navy-800 sm:col-span-3">
                    {step.day}
                  </div>
                  <div className="sm:col-span-9">
                    <h3 className="text-h4 text-ink-900">{step.title}</h3>
                    <p className="mt-2 text-body-sm text-ink-700">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
