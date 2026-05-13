import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";

export const metadata: Metadata = {
  title: "Terms",
  description: `${site.name} terms of service. Plain English, the way the work actually happens.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const lastUpdated = "May 2026";

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        <section className="bg-white pt-12 pb-12 sm:pt-16 md:pt-20">
          <div className="container-narrow">
            <span className="badge-orange">Terms</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              Plain-English terms.
            </h1>
            <p className="mt-5 text-body-lg text-ink-700">
              Most agency contracts are 12 pages of lawyer-speak. Here's how
              the work actually goes between us and you.
            </p>
            <p className="mt-3 text-body-sm text-ink-700">
              Last updated {lastUpdated}.
            </p>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-narrow space-y-10 text-body-lg text-ink-700">
            <Block title="The deal">
              <p>
                You pay a flat fee. We build the site you agreed to. When it's
                live, we hand you the keys. The site, the code, and the domain
                are yours to keep.
              </p>
            </Block>

            <Block title="Payment">
              <p>
                50% deposit before we start. The other 50% is due at launch
                (when the site goes live on your domain).
              </p>
              <p>
                If you go with the monthly plan instead of the flat fee, you
                pay the listed monthly amount for the listed term, then the
                site is yours and you stop paying.
              </p>
              <p>
                Optional ongoing hosting is $25/month. That covers hosting,
                domain renewal, and small edits (about an hour per month — for
                example, swapping a phone number or updating hours). Cancel
                any time. The site stays yours.
              </p>
            </Block>

            <Block title="What you get">
              <p>
                The features listed in your tier (Starter, Professional, or
                Premium). 1 year of hosting included. Up to 2 rounds of
                revisions before launch.
              </p>
              <p>
                If you ask for things outside the original scope (extra pages,
                new features, e-commerce, integrations), we'll quote those
                separately before doing them.
              </p>
            </Block>

            <Block title="Timeline">
              <p>
                Starter: 5–7 days. Professional: 7–10 days. Premium: 10–14
                days. We start the clock when we get the deposit and your
                content (logo, photos, copy points, etc.).
              </p>
              <p>
                If you take longer than 30 days to send us your content, we'll
                pause and pick up when you're ready. No penalty.
              </p>
            </Block>

            <Block title="If you don't like the result">
              <p>
                You only paid 50% upfront. If you genuinely don't want the
                site after seeing it, you walk. You don't owe the second half.
                We keep the deposit for the work done.
              </p>
              <p>
                This has not happened so far, and we'd rather it never does —
                so we work hard to nail the brief on the first preview. But
                the option is there.
              </p>
            </Block>

            <Block title="Ownership">
              <p>
                Once the final 50% is paid, the code, content, and domain are
                yours. You can move the site to any other developer or host
                without asking us.
              </p>
              <p>
                Photos and copy you provide stay yours. Photos and copy we
                wrote for you also become yours after final payment.
              </p>
              <p>
                We may show screenshots of your site in our portfolio unless
                you ask us not to.
              </p>
            </Block>

            <Block title="What we're not on the hook for">
              <p>
                Stuff outside our control: domain registrar outages, hosting
                provider downtime, third-party services (booking platforms,
                payment processors), or changes Google makes to its search
                ranking. We'll help you figure things out, but we can't
                guarantee uptime or rankings.
              </p>
              <p>
                We don't write legal copy (privacy policies, terms specific to
                your industry, licensing disclosures). If your business needs
                that on its site, get it from your lawyer and we'll publish
                it.
              </p>
            </Block>

            <Block title="Changes to these terms">
              <p>
                If we change these terms in a meaningful way, we'll let active
                clients know by email. The version on this page at the time
                you sign up is the version that applies to your project.
              </p>
            </Block>

            <Block title="Questions or disputes">
              <p>
                Call or email us first. We're three people who care about our
                reputation in three small markets. We'd rather solve a problem
                than fight about it.
              </p>
              <p>
                Email{" "}
                <a
                  href={site.contact.emailHref}
                  aria-label={`Email ${site.contact.email}`}
                  className="font-semibold text-orange-500 underline-offset-2 hover:underline"
                >
                  {site.contact.email}
                </a>{" "}
                or call{" "}
                <a
                  href={site.contact.phoneHref}
                  aria-label={`Call ${site.contact.phone}`}
                  className="font-semibold text-orange-500 underline-offset-2 hover:underline"
                >
                  {site.contact.phone}
                </a>
                .
              </p>
            </Block>

            <div className="rounded-lg border border-ink-200 bg-ink-50 p-6 text-body-sm text-ink-700">
              This page describes how we work. It is not legal advice. If your
              project is large, regulated, or you need bespoke contract
              language,{" "}
              <Link
                href="/#quote"
                className="font-semibold text-orange-500 underline-offset-2 hover:underline"
              >
                tell us
              </Link>{" "}
              and we'll add a written agreement on top of these terms.
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobilePhoneBar />
    </>
  );
}

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-h2-sm md:text-h2 text-ink-900">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}
