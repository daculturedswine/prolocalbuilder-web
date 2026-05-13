import { faqs } from "@/lib/site";

export function FAQ() {
  return (
    <section id="faq" className="section bg-white" aria-labelledby="faq-heading">
      <div className="container-narrow">
        <div className="mb-12 text-center md:mb-16">
          <span className="label">FAQ</span>
          <h2 id="faq-heading" className="text-h2-sm md:text-h2 text-ink-900">
            Real questions, real answers.
          </h2>
        </div>

        <ul role="list" className="flex flex-col gap-3">
          {faqs.map((item) => (
            <li key={item.q}>
              <details
                className="group rounded-lg border border-ink-200 bg-white px-7 py-5 transition-colors duration-200 hover:border-ink-300 open:border-ink-300 open:shadow-card"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md text-body-lg font-semibold text-ink-900 [&::-webkit-details-marker]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-2xl font-normal text-ink-700 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-body text-ink-700">{item.a}</p>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
