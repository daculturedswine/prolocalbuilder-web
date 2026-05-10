import Image from "next/image";
import { type TeamMember } from "@/lib/site";

type Props = {
  member: TeamMember;
  /** Compact layout for city pages, full layout for hero. */
  variant?: "hero" | "card";
};

/**
 * Renders a team member card with photo or labeled placeholder.
 * Drops in real photo automatically once `photoUrl` is set in lib/site.ts.
 */
export function TeamCard({ member, variant = "card" }: Props) {
  const isHero = variant === "hero";

  return (
    <div className="flex flex-col gap-3">
      <div
        className={[
          "relative aspect-square overflow-hidden rounded-lg border",
          member.photoUrl
            ? "border-ink-200 bg-ink-100"
            : "border-2 border-dashed border-ink-300 bg-ink-100",
          isHero ? "" : "max-w-[200px]",
        ].join(" ")}
      >
        {member.photoUrl ? (
          <Image
            src={member.photoUrl}
            alt={`${member.firstName}, ${member.title} of ProLocalBuilder, based in ${member.location}`}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-center text-body-sm text-ink-500">
            <span className="px-4">
              Photo of {member.firstName}
              <br />
              goes here
            </span>
          </div>
        )}
      </div>
      <div
        className={[
          "rounded-md border border-ink-200 bg-white",
          isHero ? "px-5 py-4" : "px-4 py-3",
        ].join(" ")}
      >
        <strong className="block text-ink-900">{member.firstName}</strong>
        <span className="text-body-sm text-ink-500">
          {member.title} · {member.location}
        </span>
      </div>
    </div>
  );
}
