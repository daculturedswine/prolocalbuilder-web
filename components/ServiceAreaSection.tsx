import { ServiceAreaMap } from "./ServiceAreaMap";
import { Reveal } from "./Reveal";
import { cities } from "@/lib/seo";

export function ServiceAreaSection() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <div className="mx-auto mb-12 max-w-[720px] text-center md:mb-12">
          <span className="label">Service area</span>
          <h2 className="text-h2-sm md:text-h2 text-ink-900">
            Three metros. {cities.length} cities. One flat fee.
          </h2>
          <p className="mt-3 text-body-lg text-ink-700">
            Same flat-fee pricing in every city we serve. If you're outside
            these areas, reach out anyway. Most builds happen remotely.
          </p>
        </div>
        <Reveal>
          <ServiceAreaMap />
        </Reveal>
      </div>
    </section>
  );
}
