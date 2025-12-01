import React, { useMemo, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  Popup,
  useMap,
} from "react-leaflet";
import L, { LatLngTuple } from "leaflet";

import "leaflet/dist/leaflet.css";
import styles from "../../pages/Tours/Tours.module.css";

// Fix Leaflet default icon paths
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const SL_CENTER: LatLngTuple = [7.8731, 80.7718];

export type Stop = {
  name: string;
  latlng: LatLngTuple;
};

export type Tour = {
  id: string;
  name: string;
  color: string;
  stops: Stop[];
};

export const TOURS: Tour[] = [
  {
    id: "couple_3d",
    name: "3 Days • Couple • Luxury",
    color: "#DAA520",
    stops: [
      { name: "Colombo", latlng: [6.9271, 79.8612] },
      { name: "Galle", latlng: [6.0535, 80.221] },
      { name: "Mirissa", latlng: [5.9485, 80.458] },
    ],
  },
  {
    id: "family_5d",
    name: "5 Days • Family",
    color: "#1E90FF",
    stops: [
      { name: "Colombo", latlng: [6.9271, 79.8612] },
      { name: "Kandy", latlng: [7.2906, 80.6337] },
      { name: "Nuwara Eliya", latlng: [6.9497, 80.7891] },
      { name: "Ella", latlng: [6.8667, 81.046] },
      { name: "Mirissa", latlng: [5.9485, 80.458] },
    ],
  },
  {
    id: "friends_5d",
    name: "5 Days • Friends / Group",
    color: "#2ECC71",
    stops: [
      { name: "Negombo", latlng: [7.2083, 79.8358] },
      { name: "Sigiriya", latlng: [7.9557, 80.7596] },
      { name: "Dambulla", latlng: [7.8569, 80.6492] },
      { name: "Kandy", latlng: [7.2906, 80.6337] },
      { name: "South Coast", latlng: [6.1248, 80.124] },
    ],
  },
  {
    id: "solo_5d",
    name: "5 Days • Solo • Budget",
    color: "#E74C3C",
    stops: [
      { name: "Colombo", latlng: [6.9271, 79.8612] },
      { name: "Galle", latlng: [6.0535, 80.221] },
      { name: "Matara", latlng: [5.9549, 80.554] },
      { name: "Ella", latlng: [6.8667, 81.046] },
      { name: "Colombo", latlng: [6.9271, 79.8612] },
    ],
  },
  {
    id: "custom",
    name: "Customise Your Trip",
    color: "#7F8C8D",
    stops: [
      { name: "Colombo", latlng: [6.9271, 79.8612] },
      { name: "Anuradhapura", latlng: [8.3114, 80.4037] },
      { name: "Jaffna", latlng: [9.6615, 80.0255] },
    ],
  },
];

type MapToursProps = {
  tourIds?: string[];
};

function MapTours({ tourIds }: MapToursProps) {
  // Filter tours by selected IDs (or show all if none provided)
  const tours = useMemo(() => {
    if (!tourIds || tourIds.length === 0) return TOURS;
    return TOURS.filter((t) => tourIds.includes(t.id));
  }, [tourIds]);

  // Build polylines data from tours
  const polyLines = useMemo(
    () =>
      tours.map((t) => ({
        id: t.id,
        color: t.color,
        path: t.stops.map((s) => s.latlng),
      })),
    [tours]
  );

  return (
    <div className={styles.mapWrapper}>
      <MapContainer
        center={SL_CENTER}
        zoom={7}
        scrollWheelZoom
        className={styles.mapLeaflet}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Tour polylines */}
        {polyLines.map((pl) => (
          <Polyline
            key={pl.id}
            positions={pl.path}
            pathOptions={{ color: pl.color, weight: 4 }}
          />
        ))}

        {/* Markers for each stop */}
        {tours.map((t) =>
          t.stops.map((s, i) => (
            <Marker key={`${t.id}-${i}`} position={s.latlng}>
              <Popup>
                <strong>{t.name}</strong>
                <br />
                Stop {i + 1}: {s.name}
              </Popup>
            </Marker>
          ))
        )}

        {/* Auto-fit bounds to all tour stops */}
        <FitAllBounds tours={tours} />
      </MapContainer>
    </div>
  );
}

// Helper component to fit map to all tour bounds
function FitAllBounds({ tours }: { tours: Tour[] }) {
  const map = useMap();

  useEffect(() => {
    const allPoints = tours.flatMap((t) => t.stops.map((s) => s.latlng));

    if (!allPoints.length) return;

    const bounds = L.latLngBounds(allPoints);
    map.fitBounds(bounds, { padding: [50, 50] });
  }, [map, tours]);

  return null;
}

export default MapTours;
