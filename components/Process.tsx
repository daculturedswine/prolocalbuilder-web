import { processSteps } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="section bg-ink-50">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-16">
          <span className="label">Process</span>
          <h2 className="text-h2-sm md:text-h2 text-ink-900">
            Four steps. About a week.
          </h2>
          <p className="mt-3 text-body-lg text-ink-700">
            No project managers. No agency runaround. You'll talk to one
            person from quote to launch.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[42px] hidden h-px bg-ink-200 md:block"
          />

          <ol className="relative grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal as="li" key={step.num} delay={i * 80}>
                <div className="rounded-lg border border-ink-200 bg-white p-7 h-full">
                  <div
                    aria-hidden="true"
                    className="relative mb-4 flex h-7 w-7 items-center justify-center rounded-md border border-ink-200 bg-white font-mono text-[13px] font-bold text-orange-500"
                  >
                    {step.num}
                  </div>
                  <h3 className="text-h4 text-ink-900">
                    <span className="sr-only">Step {step.num}: </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-body-sm text-ink-700">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
