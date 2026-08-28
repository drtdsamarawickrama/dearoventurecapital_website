"use client";

import dynamic from "next/dynamic";
import { Phone, MapPin, Building2 } from "lucide-react";

// =====================================================
// LOAD MAP ONLY IN THE BROWSER
// Prevents "window is not defined" during Next.js build
// =====================================================
const BranchMap = dynamic(() => import("./BranchMap"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "540px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f6f8",
        color: "#666666",
        fontSize: "15px",
      }}
    >
      Loading map...
    </div>
  ),
});

// =====================================================
// BRANCH DATA
// =====================================================

const branches = [
  {
    no: 1,
    branch: "Head Office",
    address:
      "9th Floor, Ceylinco House, No 69, Janadhipathi Mawatha, Colombo 01",
    phone: "011 478 2400",
  },
  {
    no: 2,
    branch: "Dambulla Branch",
    address:
      "Dearo Investment Ltd, No 420/D, Matale Road, Dambulla",
    phone: "",
  },
  {
    no: 3,
    branch: "Batticaloa Branch",
    address:
      "Dearo Investment Ltd, Trincomalee Road, Batticaloa",
    phone: "",
  },
  {
    no: 4,
    branch: "Chenkalady Branch",
    address:
      "Dearo Investment Ltd, Main Street, Chenkalady, Batticaloa",
    phone: "",
  },
  {
    no: 5,
    branch: "Mannar Branch",
    address:
      "Dearo Investment Ltd, No:45, Hospital Road, Mannar",
    phone: "",
  },
  {
    no: 6,
    branch: "Chunnakam Branch",
    address:
      "Dearo Investment Ltd, Police Station Road, Chunnakam, Jaffna",
    phone: "",
  },
  {
    no: 7,
    branch: "Vavuniya Branch",
    address:
      "Dearo Investment Ltd, Next To Softlogic Insurance, 1st Cross Street, Vavuniya",
    phone: "",
  },
];

export default function BranchNetworkPage() {
  return (
    <main className="branch-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="branch-hero">
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">

              <span className="hero-label">
                DEARO VENTURE CAPITAL
              </span>

              <h1>Branch Network</h1>

              <p>
                Find a Dearo branch near you and connect with our team.
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          BRANCH NETWORK
      ====================================================== */}

      <section className="branch-section">
        <div className="container">

          {/* SECTION HEADER */}

          <div className="section-header">

            <span className="section-label">
              OUR NETWORK
            </span>

            <h2>
              Our Branch Network
            </h2>

            <p>
              Explore our branch locations and contact details across Sri Lanka.
            </p>

          </div>

          {/* =================================================
              TABLE + MAP
          ================================================== */}

          <div className="branch-map-layout">

            {/* =================================================
                BRANCH TABLE
            ================================================== */}

            <div className="branch-table-wrapper">

              <table className="branch-table">

                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Branch</th>
                    <th>Address</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>

                <tbody>

                  {branches.map((branch) => (

                    <tr key={branch.no}>

                      {/* NUMBER */}

                      <td className="branch-number">
                        {branch.no}
                      </td>

                      {/* BRANCH */}

                      <td>
                        <div className="branch-name">

                          <Building2 size={20} />

                          <span>
                            {branch.branch}
                          </span>

                        </div>
                      </td>

                      {/* ADDRESS */}

                      <td>

                        <div className="branch-address">

                          <MapPin size={18} />

                          <span>
                            {branch.address}
                          </span>

                        </div>

                      </td>

                      {/* PHONE */}

                      <td>

                        {branch.phone ? (

                          <a
                            href={`tel:${branch.phone.replace(/\s/g, "")}`}
                            className="branch-phone"
                          >

                            <Phone size={17} />

                            <span>
                              {branch.phone}
                            </span>

                          </a>

                        ) : (

                          <span className="no-phone">
                            -
                          </span>

                        )}

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

            {/* =================================================
                SRI LANKA MAP
            ================================================== */}

            <div className="branch-map-wrapper">

              <BranchMap />

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          STYLES
      ====================================================== */}

      <style jsx>{`

        /* =====================================================
           PAGE
        ====================================================== */

        .branch-page {
          background: #ffffff;
          min-height: 100vh;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          box-sizing: border-box;
        }

        /* =====================================================
           HERO
        ====================================================== */

        .branch-hero {
          min-height: 360px;

          background-image:
            linear-gradient(
              rgba(15, 35, 75, 0.80),
              rgba(15, 35, 75, 0.80)
            ),
            url("/images/branch-network.jpg");

          background-size: cover;
          background-position: center;

          display: flex;
          align-items: center;
        }

        .hero-overlay {
          width: 100%;
        }

        .hero-content {
          max-width: 750px;
          padding: 80px 0;
          color: #ffffff;
        }

        .hero-label {
          display: inline-block;
          margin-bottom: 15px;
          color: #ffffff;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .hero-content h1 {
          margin: 0 0 15px;
          color: #ffffff;
          font-size: clamp(38px, 5vw, 64px);
          font-weight: 700;
          line-height: 1.1;
        }

        .hero-content p {
          margin: 0;
          color: rgba(255, 255, 255, 0.92);
          font-size: 18px;
          line-height: 1.7;
        }

        /* =====================================================
           BRANCH SECTION
        ====================================================== */

        .branch-section {
          padding: 80px 0 100px;
          background: #ffffff;
        }

        /* =====================================================
           SECTION HEADER
        ====================================================== */

        .section-header {
          max-width: 700px;
          margin: 0 auto 50px;
          text-align: center;
        }

        .section-label {
          display: block;
          margin-bottom: 10px;
          color: #c62828;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .section-header h2 {
          margin: 0 0 15px;
          color: #1a2850;
          font-size: clamp(30px, 4vw, 44px);
          font-weight: 700;
          line-height: 1.2;
        }

        .section-header p {
          margin: 0;
          color: #666666;
          font-size: 16px;
          line-height: 1.7;
        }

        /* =====================================================
           TABLE + MAP LAYOUT
        ====================================================== */

        .branch-map-layout {
          display: grid;

          grid-template-columns:
            minmax(0, 1.65fr)
            minmax(350px, 0.9fr);

          gap: 28px;
          align-items: stretch;
        }

        /* =====================================================
           TABLE
        ====================================================== */

        .branch-table-wrapper {
          width: 100%;
          overflow-x: auto;

          border: 1px solid #e5e7eb;
          border-radius: 12px;

          background: #ffffff;

          box-shadow:
            0 10px 35px rgba(26, 40, 80, 0.08);
        }

        .branch-table {
          width: 100%;
          border-collapse: collapse;
          background: #ffffff;
        }

        /* TABLE HEADER */

        .branch-table thead {
          background: #1a2850;
        }

        .branch-table th {
          padding: 18px 20px;

          text-align: left;

          color: #ffffff;

          font-size: 13px;
          font-weight: 700;

          text-transform: uppercase;

          letter-spacing: 0.5px;

          white-space: nowrap;
        }

        /* TABLE CELLS */

        .branch-table td {
          padding: 20px;

          border-bottom: 1px solid #eeeeee;

          color: #333333;

          font-size: 14px;

          vertical-align: middle;
        }

        .branch-table tbody tr {
          transition: background 0.2s ease;
        }

        .branch-table tbody tr:hover {
          background: #f8faff;
        }

        .branch-table tbody tr:last-child td {
          border-bottom: none;
        }

        /* =====================================================
           NUMBER
        ====================================================== */

        .branch-number {
          width: 50px;

          color: #c62828 !important;

          font-size: 16px !important;

          font-weight: 700;
        }

        /* =====================================================
           BRANCH NAME
        ====================================================== */

        .branch-name {
          display: flex;
          align-items: center;

          gap: 9px;

          color: #111111;

          font-weight: 700;

          white-space: nowrap;
        }

        .branch-name svg {
          color: #1a2850;
          flex-shrink: 0;
        }

        /* =====================================================
           ADDRESS
        ====================================================== */

        .branch-address {
          display: flex;
          align-items: flex-start;

          gap: 8px;

          line-height: 1.6;
        }

        .branch-address svg {
          color: #c62828;

          margin-top: 2px;

          flex-shrink: 0;
        }

        /* =====================================================
           PHONE
        ====================================================== */

        .branch-phone {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          color: #1a2850;

          font-weight: 600;

          text-decoration: none;

          white-space: nowrap;
        }

        .branch-phone:hover {
          color: #c62828;
          text-decoration: none;
        }

        .branch-phone svg {
          color: #c62828;
          flex-shrink: 0;
        }

        .no-phone {
          color: #999999;
          font-size: 14px;
        }

        /* =====================================================
           MAP
        ====================================================== */

        .branch-map-wrapper {
          width: 100%;
          min-width: 0;
        }

        .branch-map-wrapper :global(.map-section) {
          height: 100%;
          padding: 0 !important;
          background: transparent !important;
        }

        .branch-map-wrapper :global(.map-container) {
          height: 100%;
          max-width: none;
        }

        .branch-map-wrapper :global(.map-header) {
          display: none;
        }

        .branch-map-wrapper :global(.map-card) {
          height: 100%;

          min-height: 540px;

          border: 1px solid #e5e7eb;

          border-radius: 12px;

          overflow: hidden;

          box-shadow:
            0 10px 35px rgba(26, 40, 80, 0.08);
        }

        /* =====================================================
           TABLET
        ====================================================== */

        @media (max-width: 1100px) {

          .branch-map-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .branch-map-wrapper :global(.map-card) {
            height: 500px;
            min-height: 500px;
          }

        }

        /* =====================================================
           MOBILE
        ====================================================== */

        @media (max-width: 767px) {

          .container {
            padding: 0 16px;
          }

          .branch-hero {
            min-height: 280px;
            background-position: center;
          }

          .hero-content {
            padding: 60px 0;
          }

          .hero-content h1 {
            font-size: 40px;
          }

          .hero-content p {
            font-size: 16px;
          }

          .branch-section {
            padding: 55px 0 70px;
          }

          .section-header {
            margin-bottom: 35px;
          }

          .section-header h2 {
            font-size: 30px;
          }

          .section-header p {
            font-size: 14px;
          }

          /* Keep table scrollable */

          .branch-table-wrapper {
            display: block;

            overflow-x: auto;

            -webkit-overflow-scrolling: touch;
          }

          .branch-table {
            min-width: 760px;
          }

          .branch-table th {
            padding: 15px;
          }

          .branch-table td {
            padding: 15px;
          }

          /* Map */

          .branch-map-wrapper {
            width: 100%;
          }

          .branch-map-wrapper :global(.map-card) {
            height: 420px;

            min-height: 420px;

            border-radius: 10px;
          }

        }

      `}</style>

    </main>
  );
}