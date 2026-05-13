"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L, { LatLngBoundsExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

export type MapCity = { name: string; lat: number; lng: number };

const pinIcon = L.divIcon({
  className: "plb-pin",
  html: `<svg role="img" aria-label="Service area pin" width="22" height="28" viewBox="0 0 22 28" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(0 2px 3px rgba(0,0,0,0.25));">
    <title>Service area pin</title>
    <path d="M11 0C4.92 0 0 4.92 0 11c0 8.25 11 17 11 17s11-8.75 11-17c0-6.08-4.92-11-11-11z" fill="#F26B1F"/>
    <circle cx="11" cy="11" r="4" fill="#fff"/>
  </svg>`,
  iconSize: [22, 28],
  iconAnchor: [11, 28],
  tooltipAnchor: [0, -24],
});

export default function LeafletMap({ cities }: { cities: MapCity[] }) {
  if (cities.length === 0) return null;

  const lats = cities.map((c) => c.lat);
  const lngs = cities.map((c) => c.lng);
  const bounds: LatLngBoundsExpression = [
    [Math.min(...lats), Math.min(...lngs)],
    [Math.max(...lats), Math.max(...lngs)],
  ];

  return (
    <div
      role="img"
      aria-label={`Map showing ${cities.length} cities we serve: ${cities.map((c) => c.name).join(", ")}`}
    >
      <MapContainer
        bounds={bounds}
        boundsOptions={{ padding: [24, 24] }}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={true}
        style={{ height: "220px", width: "100%", borderRadius: "8px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        {cities.map((c) => (
          <Marker key={c.name} position={[c.lat, c.lng]} icon={pinIcon}>
            <Tooltip direction="top" offset={[0, -4]} opacity={0.95}>
              {c.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
