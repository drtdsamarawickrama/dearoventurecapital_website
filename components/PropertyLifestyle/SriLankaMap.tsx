
"use client";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";

// PROPOSED DEVELOPMENT LOCATIONS
const proposedLocations = [
  {
    name: "Nilaveli",
    region: "Trincomalee",
    position: [8.6947, 81.1835] as [number, number],
  },
  {
    name: "Uppuveli",
    region: "Trincomalee",
    position: [8.613, 81.217] as [number, number],
  },
  {
    name: "Alles Garden",
    region: "Trincomalee",
    position: [8.58, 81.225] as [number, number],
  },
  {
    name: "Sampalthivu",
    region: "Trincomalee",
    position: [8.66, 81.205] as [number, number],
  },
  {
    name: "Pasikuda",
    region: "Batticaloa",
    position: [7.924, 81.561] as [number, number],
  },
  {
    name: "Kalkudah",
    region: "Batticaloa",
    position: [7.913, 81.57] as [number, number],
  },
  {
    name: "Arugam Bay",
    region: "Ampara",
    position: [6.84, 81.836] as [number, number],
  },
  {
    name: "Pottuvil",
    region: "Ampara",
    position: [6.871, 81.831] as [number, number],
  },
  {
    name: "Whiskey Point",
    region: "Ampara",
    position: [6.871, 81.846] as [number, number],
  },
];

// FUTURE DEVELOPMENT OPPORTUNITIES
const futureLocations = [
  {
    name: "Jaffna",
    position: [9.6615, 80.0255] as [number, number],
  },
  {
    name: "Mannar",
    position: [8.981, 79.904] as [number, number],
  },
  {
    name: "Down South",
    position: [6.05, 80.55] as [number, number],
    note: "Indicative marker for the wider southern region, not a confirmed project site.",
  },
  {
    name: "Kandy",
    position: [7.2906, 80.6337] as [number, number],
  },
  {
    name: "Ella",
    position: [6.8667, 81.0466] as [number, number],
  },
  {
    name: "Nuwara Eliya",
    position: [6.9497, 80.7891] as [number, number],
  },
  {
    name: "Dambulla",
    position: [7.8731, 80.6511] as [number, number],
  },
  {
    name: "Sigiriya",
    position: [7.957, 80.7603] as [number, number],
  },
  {
    name: "Anuradhapura",
    position: [8.3114, 80.4037] as [number, number],
  },
  {
    name: "Puttalam",
    position: [8.0362, 79.8283] as [number, number],
  },
  {
    name: "Negombo",
    position: [7.2083, 79.8358] as [number, number],
  },
];

// MARKER ICONS
const proposedIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 20px;
      height: 20px;
      background: #ed1c24;
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    "></div>
  `,
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const futureIcon = L.divIcon({
  className: "",
  html: `
    <div style="
      width: 18px;
      height: 18px;
      background: #16834b;
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.4);
    "></div>
  `,
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

// REFRESH MAP SIZE
function MapResize() {
  const map = useMap();

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize();
    }, 500);

    return () => clearTimeout(timer);
  }, [map]);

  return null;
}

export default function SriLankaMap() {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "30px",
        position: "relative",
        zIndex: 1,
      }}
    >
      <MapContainer
        center={[7.8, 80.7]}
        zoom={7}
        scrollWheelZoom={false}
        style={{
          width: "100%",
          height: "520px",
          borderRadius: "16px",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapResize />

        {/* PROPOSED DEVELOPMENT LOCATIONS */}
        {proposedLocations.map((place) => (
          <Marker
            key={place.name}
            position={place.position}
            icon={proposedIcon}
          >
            <Popup>
              <div style={{ minWidth: "170px" }}>
                <strong style={{ color: "#071a3a", fontSize: "15px" }}>
                  {place.name}
                </strong>

                <p style={{ margin: "5px 0", color: "#16834b" }}>
                  {place.region}, Sri Lanka
                </p>

                <span style={{ fontSize: "12px" }}>
                  Proposed tourism development location
                </span>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* FUTURE DEVELOPMENT OPPORTUNITIES */}
        {futureLocations.map((place) => (
          <Marker
            key={place.name}
            position={place.position}
            icon={futureIcon}
          >
            <Popup>
              <div style={{ minWidth: "170px" }}>
                <strong style={{ color: "#071a3a", fontSize: "15px" }}>
                  {place.name}
                </strong>

                <p style={{ margin: "5px 0", fontSize: "12px" }}>
                  Future development opportunity
                </p>

                {"note" in place && (
                  <p style={{ fontSize: "12px", marginBottom: 0 }}>
                    {place.note}
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* MAP LEGEND */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "22px",
          marginTop: "18px",
          color: "#071a3a",
          fontSize: "13px",
          fontWeight: 600,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#ed1c24",
            }}
          />
          Proposed Development Locations
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              background: "#16834b",
            }}
          />
          Future Development Opportunities
        </div>
      </div>
    </div>
  );
}
