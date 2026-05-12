import Link from "next/link";

type Row = {
  label: string;
  values: [string, string, string]; // [Starter, Professional, Premium]
};

const rows: Row[] = [
  { label: "Pages", values: ["5", "10", "15+"] },
  { label: "Mobile responsive", values: ["✓", "✓", "✓"] },
  { label: "Contact form", values: ["✓", "✓", "✓"] },
  { label: "Click-to-call", values: ["✓", "✓", "✓"] },
  { label: "Booking form", values: ["—", "✓", "✓"] },
  { label: "Click-to-text", values: ["—", "✓", "✓"] },
  { label: "Photo gallery", values: ["—", "✓", "✓"] },
  { label: "Service-area pages", values: ["—", "—", "✓"] },
  { label: "Local SEO setup", values: ["—", "✓", "Advanced"] },
  {
    label: "Post-launch edits included",
    values: ["—", "—", "3 hours"],
  },
  { label: "Hosting included", values: ["1 year", "1 year", "1 year"] },
  {
    label: "Timeline",
    values: ["5–7 days", "7–10 days", "10–14 days"],
  },
];

export function PricingCompare() {
  return (
    <section className="section overflow-hidden bg-ink-50">
      <div className="container-page">
        <div className="mx-auto mb-10 max-w-[720px] text-center md:mb-12">
          <span className="label">Compare tiers</span>
          <h2 className="text-h2-sm md:text-h2 text-ink-900">
            What's actually different between tiers.
          </h2>
          <p className="mt-3 text-body-lg text-ink-700">
            The cards above show what you get. This shows what you don't get
            in the cheaper tier — so you pick the right one the first time.
          </p>
        </div>

        <div className="w-full max-w-full overflow-hidden rounded-lg border border-ink-200 bg-white shadow-card">
          <table className="w-full table-fixed text-left">
            <thead>
              <tr className="border-b border-ink-200 bg-ink-50">
                <th
                  scope="col"
                  className="break-words px-3 py-4 text-label uppercase text-ink-700 sm:px-5"
                >
                  Feature
                </th>
                <th
                  scope="col"
                  className="break-words px-3 py-4 text-label uppercase text-navy-800 sm:px-5"
                >
                  Starter <span className="font-mono normal-case">$895</span>
                </th>
                <th
                  scope="col"
                  className="break-words px-3 py-4 text-label uppercase text-orange-500 sm:px-5"
                >
                  Professional{" "}
                  <span className="font-mono normal-case">$1,795</span>
                </th>
                <th
                  scope="col"
                  className="break-words px-3 py-4 text-label uppercase text-navy-800 sm:px-5"
                >
                  Premium <span className="font-mono normal-case">$2,995</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className={`transition-colors duration-150 hover:bg-orange-50/60 ${
                    i % 2 === 0 ? "bg-white" : "bg-ink-50/50"
                  }`}
                >
                  <th
                    scope="row"
                    className="break-words px-3 py-3 text-left text-body-sm font-medium text-ink-900 sm:px-5"
                  >
                    {row.label}
                  </th>
                  {row.values.map((v, j) => {
                    const accessible =
                      v === "—" ? "Not included" : v === "✓" ? "Included" : v;
                    return (
                      <td
                        key={j}
                        className={`break-words px-3 py-3 text-body-sm sm:px-5 ${
                          v === "—"
                            ? "text-ink-700"
                            : v === "✓"
                            ? "text-success font-bold"
                            : "text-ink-900"
                        }`}
                      >
                        <span aria-hidden="true">{v}</span>
                        <span className="sr-only">{accessible}</span>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10 text-center">
          <p className="text-body-sm text-ink-700">
            Not sure which tier? Tell us about your business and we'll point
            you at the right one.
          </p>
          <Link
            href="/#quote"
            className="btn btn-primary mt-4 inline-flex"
          >
            Get a recommendation
          </Link>
        </div>
      </div>
    </section>
  );
}
