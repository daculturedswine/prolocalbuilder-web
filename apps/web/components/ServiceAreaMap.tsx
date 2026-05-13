"use client";

import dynamic from "next/dynamic";
import { cities } from "@/lib/seo";
import type { MapCity } from "./LeafletMap";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
  ssr: false,
  loading: () => (
    <div
      className="w-full rounded-lg bg-ink-50 animate-pulse"
      style={{ height: "220px" }}
      aria-hidden="true"
    />
  ),
});

export function ServiceAreaMap() {
  const wi = cities.filter((c) => c.metro === "appleton");
  const ca = cities.filter((c) => c.metro === "san-jose");
  const nv = cities.filter((c) => c.metro === "vegas");

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <MapPanel label="Wisconsin" cities={wi} />
      <MapPanel label="California, Bay Area" cities={ca} />
      <MapPanel label="Nevada, Las Vegas" cities={nv} />
    </div>
  );
}

function MapPanel({
  label,
  cities,
}: {
  label: string;
  cities: { name: string; geo: { lat: number; lng: number } }[];
}) {
  const points: MapCity[] = cities.map((c) => ({
    name: c.name,
    lat: c.geo.lat,
    lng: c.geo.lng,
  }));

  return (
    <div className="rounded-lg border border-ink-200 bg-white p-6 shadow-card">
      <div className="mb-1 text-label uppercase text-orange-500">{label}</div>
      <div className="mb-4 text-body-sm text-ink-500">
        {cities.length} cities
      </div>

      <LeafletMap cities={points} />

      <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1 text-body-sm text-ink-700">
        {cities.map((c) => (
          <li key={c.name} className="flex items-center gap-1.5">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 flex-shrink-0 rounded-sm bg-orange-500"
            />
            {c.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
