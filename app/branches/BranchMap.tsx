
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";


/* =====================================================
   MARKER ICON
===================================================== */

const createMarkerIcon = (color: string) => {

  return L.divIcon({

    className: "custom-marker",

    html: `
      <div
        class="marker-pin"
        style="background:${color};"
      >
        <div class="marker-dot"></div>
      </div>
    `,

    iconSize: [32, 42],

    iconAnchor: [16, 42],

    popupAnchor: [0, -42],
  });
};


const headOfficeIcon =
  createMarkerIcon("#c62828");


const branchIcon =
  createMarkerIcon("#1a2850");


/* =====================================================
   BRANCH LOCATIONS
===================================================== */

const locations = [

  {
    no: 1,

    name: "Head Office",

    address:
      "9th Floor, Ceylinco House, No 69, Janadhipathi Mawatha, Colombo 01",

    phone: "011 478 2400",

    position:
      [6.9271, 79.8612] as [number, number],

    main: true,
  },


  {
    no: 2,

    name: "Dambulla Branch",

    address:
      "Dearo Investment Ltd, No 420/D, Matale Road, Dambulla",

    phone: "",

    position:
      [7.8731, 80.7718] as [number, number],

    main: false,
  },


  {
    no: 3,

    name: "Batticaloa Branch",

    address:
      "Dearo Investment Ltd, Trincomalee Road, Batticaloa",

    phone: "",

    position:
      [7.731, 81.6747] as [number, number],

    main: false,
  },


  {
    no: 4,

    name: "Chenkalady Branch",

    address:
      "Dearo Investment Ltd, Main Street, Chenkalady, Batticaloa",

    phone: "",

    position:
      [7.7833, 81.5667] as [number, number],

    main: false,
  },


  {
    no: 5,

    name: "Mannar Branch",

    address:
      "Dearo Investment Ltd, No:45, Hospital Road, Mannar",

    phone: "",

    position:
      [8.981, 79.9044] as [number, number],

    main: false,
  },


  {
    no: 6,

    name: "Chunnakam Branch",

    address:
      "Dearo Investment Ltd, Police Station Road, Chunnakam, Jaffna",

    phone: "",

    position:
      [9.75, 80.025] as [number, number],

    main: false,
  },


  {
    no: 7,

    name: "Vavuniya Branch",

    address:
      "Dearo Investment Ltd, Next To Softlogic Insurance, 1st Cross Street, Vavuniya",

    phone: "",

    position:
      [8.7514, 80.4971] as [number, number],

    main: false,
  },

];


/* =====================================================
   MAP COMPONENT
===================================================== */

export default function BranchMap() {

  return (

    <section className="map-section">

      <div className="map-container">


        {/* MAP */}

        <div className="map-card">

          <MapContainer

            center={[
              7.8731,
              80.7718
            ]}

            zoom={7}

            scrollWheelZoom={false}

            className="sri-lanka-map"
          >

            {/* OPEN STREET MAP */}

            <TileLayer

              attribution='&copy; OpenStreetMap contributors'

              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

            />


            {/* MARKERS */}

            {locations.map((location) => (

              <Marker

                key={location.no}

                position={location.position}

                icon={
                  location.main
                    ? headOfficeIcon
                    : branchIcon
                }

              >

                <Popup>

                  <div className="popup-content">


                    {/* NUMBER */}

                    <div
                      className="popup-number"
                      style={{
                        background: location.main
                          ? "#c62828"
                          : "#1a2850",
                      }}
                    >
                      {location.no}
                    </div>


                    {/* DETAILS */}

                    <div>

                      <h3>
                        {location.name}
                      </h3>


                      <p>
                        {location.address}
                      </p>


                      {location.phone && (

                        <a
                          href={`tel:${location.phone.replace(/\s/g, "")}`}
                        >
                          {location.phone}
                        </a>

                      )}

                    </div>

                  </div>

                </Popup>

              </Marker>

            ))}

          </MapContainer>


          {/* =================================================
              LEGEND
          ================================================== */}

          <div className="map-legend">

            <div className="legend-item">

              <span className="legend-dot head-office"></span>

              <span>
                Head Office
              </span>

            </div>


            <div className="legend-item">

              <span className="legend-dot branch"></span>

              <span>
                Branch
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          MAP STYLES
      ====================================================== */}

      <style jsx global>{`

        /* =====================================================
           MAP
        ====================================================== */

        .map-section {

          width: 100%;

          height: 100%;

          padding: 0;

          background: transparent;
        }


        .map-container {

          width: 100%;

          height: 100%;

          max-width: none;

          margin: 0;
        }


        .map-card {

          position: relative;

          width: 100%;

          height: 540px;

          overflow: hidden;

          border-radius: 12px;

          background: #f8f9fc;
        }


        .sri-lanka-map {

          width: 100%;

          height: 100%;

          z-index: 1;
        }


        /* =====================================================
           MARKER
        ====================================================== */

        .custom-marker {

          background: transparent !important;

          border: none !important;
        }


        .marker-pin {

          position: relative;

          width: 32px;

          height: 32px;

          border-radius:
            50% 50% 50% 0;

          transform:
            rotate(-45deg);

          border:
            3px solid #ffffff;

          box-shadow:
            0 4px 12px
            rgba(0, 0, 0, 0.30);
        }


        .marker-dot {

          position: absolute;

          width: 9px;

          height: 9px;

          top: 50%;

          left: 50%;

          transform:
            translate(-50%, -50%);

          border-radius: 50%;

          background: #ffffff;
        }


        /* =====================================================
           POPUP
        ====================================================== */

        .popup-content {

          display: flex;

          gap: 10px;

          min-width: 220px;
        }


        .popup-number {

          display: flex;

          align-items: center;

          justify-content: center;

          width: 30px;

          min-width: 30px;

          height: 30px;

          border-radius: 50%;

          color: #ffffff;

          font-size: 13px;

          font-weight: 700;
        }


        .popup-content h3 {

          margin:
            0 0 6px;

          color: #1a2850;

          font-size: 15px;

          font-weight: 700;
        }


        .popup-content p {

          margin:
            0 0 7px;

          color: #555555;

          font-size: 12px;

          line-height: 1.5;
        }


        .popup-content a {

          color: #c62828;

          font-size: 13px;

          font-weight: 700;

          text-decoration: none;
        }


        .popup-content a:hover {

          text-decoration: underline;
        }


        /* =====================================================
           LEGEND
        ====================================================== */

        .map-legend {

          position: absolute;

          z-index: 1000;

          left: 15px;

          bottom: 15px;

          display: flex;

          align-items: center;

          gap: 15px;

          padding:
            10px 14px;

          border-radius: 8px;

          background:
            rgba(255, 255, 255, 0.96);

          box-shadow:
            0 5px 20px
            rgba(0, 0, 0, 0.12);

          color: #333333;

          font-size: 12px;

          font-weight: 600;
        }


        .legend-item {

          display: flex;

          align-items: center;

          gap: 7px;
        }


        .legend-dot {

          display: block;

          width: 10px;

          height: 10px;

          border-radius: 50%;
        }


        .legend-dot.head-office {

          background: #c62828;
        }


        .legend-dot.branch {

          background: #1a2850;
        }


        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 767px) {

          .map-card {

            height: 420px;

            border-radius: 10px;
          }


          .map-legend {

            left: 10px;

            bottom: 10px;

            gap: 10px;

            padding:
              8px 10px;

            font-size: 10px;
          }

        }

      `}</style>

    </section>
  );
}
