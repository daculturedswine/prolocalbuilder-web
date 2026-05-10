import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MobilePhoneBar } from "@/components/MobilePhoneBar";

export const metadata: Metadata = {
  title: "Privacy",
  description: `How ${site.name} handles your information.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const lastUpdated = "May 2026";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main id="main" className="pb-16 sm:pb-0">
        <section className="bg-white pt-12 pb-12 sm:pt-16 md:pt-20">
          <div className="container-narrow">
            <span className="badge-orange">Privacy</span>
            <h1 className="text-display-sm sm:text-display-md md:text-display font-bold leading-[1.05] tracking-[-0.025em] text-ink-900">
              Plain-English privacy.
            </h1>
            <p className="mt-5 text-body-lg text-ink-700">
              We don't run analytics. We don't sell your data. We don't share
              it. The only reason we have any of your information is so we can
              quote your project and build your site.
            </p>
            <p className="mt-3 text-body-sm text-ink-700">
              Last updated {lastUpdated}.
            </p>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container-narrow space-y-10 text-body-lg text-ink-700">
            <Block title="What we collect">
              <p>
                When you submit the quote form, we receive: your name, your
                business name, your city, your phone number (optional), and the
                description you wrote. That's it.
              </p>
              <p>
                When you call or email us directly, we keep that conversation
                in our regular inboxes. Same as any other business
                relationship.
              </p>
              <p>
                We do <strong>not</strong> currently use any analytics,
                tracking pixels, advertising cookies, or third-party trackers
                on this site.
              </p>
            </Block>

            <Block title="What we do with it">
              <p>
                We use it to quote and build your website. We may keep your
                contact information after the project ends so we can reach you
                if there's a hosting issue or if you ask for follow-up work.
              </p>
              <p>
                We never sell, rent, or share it with anyone.
              </p>
            </Block>

            <Block title="How long we keep it">
              <p>
                Quote requests we don't end up working on get deleted within
                12 months. If we build your site, we keep your contact info
                for as long as we host the site or until you ask us to delete
                it, whichever comes first.
              </p>
            </Block>

            <Block title="Your rights">
              <p>
                You can ask us at any time to delete the information we have
                about you. Email{" "}
                <a
                  href={site.contact.emailHref}
                  aria-label={`Email ${site.contact.email}`}
                  className="font-semibold text-orange-500 underline-offset-2 hover:underline"
                >
                  {site.contact.email}
                </a>{" "}
                with the subject line "Delete my data" and we'll do it within
                30 days. We'll confirm by email when it's done.
              </p>
            </Block>

            <Block title="Cookies">
              <p>
                This site doesn't set cookies. If we ever add features that
                require them (such as a logged-in client area), we'll update
                this page first.
              </p>
            </Block>

            <Block title="Third parties">
              <p>
                The maps on this site are served by{" "}
                <a
                  href="https://www.openstreetmap.org/copyright"
                  className="font-semibold text-orange-500 underline-offset-2 hover:underline"
                >
                  OpenStreetMap
                </a>
                . When you view a page that has a map, your browser fetches
                map tiles directly from OpenStreetMap servers. We have no
                control over what they log; their{" "}
                <a
                  href="https://wiki.osmfoundation.org/wiki/Privacy_Policy"
                  className="font-semibold text-orange-500 underline-offset-2 hover:underline"
                >
                  privacy policy
                </a>{" "}
                applies.
              </p>
              <p>
                The fonts on this site are loaded by Next.js's font optimizer
                and served from our domain. We don't fetch them from Google
                Fonts at runtime.
              </p>
            </Block>

            <Block title="Questions">
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
              This page describes what we actually do. It is not legal advice.
              If you operate in a jurisdiction with stricter requirements
              (GDPR, CPRA, etc.) and you need additional contractual language,{" "}
              <Link
                href="/#quote"
                className="font-semibold text-orange-500 underline-offset-2 hover:underline"
              >
                reach out
              </Link>{" "}
              and we'll handle it.
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
