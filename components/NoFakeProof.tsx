import Link from "next/link";

export function NoFakeProof() {
  return (
    <section className="bg-navy-800 py-12 text-white sm:py-16">
      <div className="container-page">
        <div className="grid gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-8">
            <div className="text-label uppercase text-orange-500">
              No fake proof
            </div>
            <h2 className="mt-3 text-h2-sm md:text-h2">
              No borrowed logos. No invented reviews. No "trusted by" wall.
            </h2>
            <p className="mt-3 max-w-2xl text-body-lg text-ink-100">
              We would rather show you the offer, the people, the price, and
              the process. When we have real client proof, it will say so.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link href="/#quote" className="btn btn-primary btn-lg">
              Start with a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
