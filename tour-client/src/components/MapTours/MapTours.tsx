import React, { useMemo, useEffect } from "react";

import { TOURS } from "./Constants";
import type { Tour } from "./Types";
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
// delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const SL_CENTER: LatLngTuple = [7.8731, 80.7718];

// export type Stop = {
//   name: string;
//   latlng: LatLngTuple;
// };

// export type Tour = {
//   id: string;
//   name: string;
//   color: string;
//   stops: Stop[];
// };

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
