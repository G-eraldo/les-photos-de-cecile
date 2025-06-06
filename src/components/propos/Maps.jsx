"use client";

import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";

export default function Maps() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const center = { lng: 2.430251, lat: 49.718112 };
  const [zoom] = useState(14);

  // Définir une icône personnalisée pour le marqueur
  const customIcon = L.icon({
    iconUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const marker = L.marker([49.718112, 2.430251], { icon: customIcon });

  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    map.current = new L.Map(mapContainer.current, {
      center: L.latLng(center.lat, center.lng),
      zoom: zoom,
    });

    // Ajouter le marqueur à la carte
    marker.addTo(map.current);

    // Create a MapTiler Layer inside Leaflet
    const mtLayer = new MaptilerLayer({
      apiKey: process.env.NEXT_PUBLIC_MAPTILER_API_KEY,
    }).addTo(map.current);
  }, [center.lng, center.lat, zoom]);

  return (
    <div className="relative w-[100%] h-[50vh] pt-3">
      <div ref={mapContainer} className="absolute w-[100%] h-[100%]" />
    </div>
  );
}
