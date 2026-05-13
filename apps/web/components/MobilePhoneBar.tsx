import { site } from "@/lib/site";

export function MobilePhoneBar() {
  return (
    <a
      href={site.contact.phoneHref}
      aria-label={`Call ${site.contact.phone}`}
      className="fixed inset-x-0 bottom-0 z-[60] block bg-navy-800 px-4 py-4 text-center text-base font-semibold text-white shadow-[0_-2px_8px_rgba(15,23,42,0.1)] transition-colors duration-200 hover:bg-navy-900 active:bg-navy-900 active:scale-[0.99] sm:hidden"
    >
      <span aria-hidden="true">📞</span> Call now · {site.contact.phone}
    </a>
  );
}
