"use client";

import dynamic from "next/dynamic";
import { Phone, MapPin, Building2 } from "lucide-react";

// =====================================================
// LOAD MAP ONLY IN THE BROWSER
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

          <div className="branch-map-layout">

            <div className="branch-table-wrapper">
              <table className="branch-table">
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Branch</th>
                    <th>Address</th>
                    <th>Phone</th>
                  </tr>
                </thead>
                <tbody>
                  {branches.map((branch) => (
                    <tr key={branch.no}>
                      <td className="branch-number">
                        {branch.no}
                      </td>
                      <td>
                        <div className="branch-name">
                          <Building2 size={20} />
                          <span>
                            {branch.branch}
                          </span>
                        </div>
                      </td>
                      <td>
                        <div className="branch-address">
                          <MapPin size={18} />
                          <span>
                            {branch.address}
                          </span>
                        </div>
                      </td>
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

            <div className="branch-map-wrapper">
              <BranchMap />
            </div>

          </div>

        </div>
      </section>

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
          font-size: clamp(11px, 1.2vw, 13px);
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .hero-content h1 {
          margin: 0 0 15px;
          color: #ffffff;
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 700;
          line-height: 1.1;
        }

        .hero-content p {
          margin: 0;
          color: rgba(255, 255, 255, 0.92);
          font-size: clamp(15px, 1.5vw, 18px);
          line-height: 1.7;
        }

        /* =====================================================
           BRANCH SECTION
        ====================================================== */

        .branch-section {
          padding: clamp(40px, 6vw, 80px) 0 clamp(50px, 7vw, 100px);
          background: #ffffff;
        }

        /* =====================================================
           SECTION HEADER
        ====================================================== */

        .section-header {
          max-width: 700px;
          margin: 0 auto clamp(30px, 4vw, 50px);
          text-align: center;
        }

        .section-label {
          display: block;
          margin-bottom: 10px;
          color: #c62828;
          font-size: clamp(11px, 1vw, 13px);
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .section-header h2 {
          margin: 0 0 15px;
          color: #1a2850;
          font-size: clamp(26px, 4vw, 44px);
          font-weight: 700;
          line-height: 1.2;
        }

        .section-header p {
          margin: 0;
          color: #666666;
          font-size: clamp(14px, 1.2vw, 16px);
          line-height: 1.7;
        }

        /* =====================================================
           TABLE + MAP LAYOUT
        ====================================================== */

        .branch-map-layout {
          display: grid;
          grid-template-columns:
            minmax(0, 1.65fr)
            minmax(300px, 0.9fr);
          gap: clamp(20px, 3vw, 28px);
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
          box-shadow: 0 10px 35px rgba(26, 40, 80, 0.08);
        }

        .branch-table {
          width: 100%;
          border-collapse: collapse;
          background: #ffffff;
        }

        .branch-table thead {
          background: #1a2850;
        }

        .branch-table th {
          padding: clamp(12px, 1.5vw, 18px) clamp(12px, 1.5vw, 20px);
          text-align: left;
          color: #ffffff;
          font-size: clamp(11px, 1vw, 13px);
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .branch-table td {
          padding: clamp(12px, 1.5vw, 20px) clamp(12px, 1.5vw, 20px);
          border-bottom: 1px solid #eeeeee;
          color: #333333;
          font-size: clamp(12px, 1vw, 14px);
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
          font-size: clamp(14px, 1.2vw, 16px) !important;
          font-weight: 700;
          text-align: center;
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
          width: clamp(16px, 1.5vw, 20px);
          height: clamp(16px, 1.5vw, 20px);
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
          width: clamp(14px, 1.2vw, 18px);
          height: clamp(14px, 1.2vw, 18px);
        }

        .branch-address span {
          word-break: break-word;
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
          width: clamp(14px, 1.2vw, 17px);
          height: clamp(14px, 1.2vw, 17px);
        }

        .no-phone {
          color: #999999;
          font-size: clamp(12px, 1vw, 14px);
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
          min-height: clamp(400px, 50vh, 540px);
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 35px rgba(26, 40, 80, 0.08);
        }

        /* =====================================================
           TABLET (768px - 1100px)
        ====================================================== */

        @media (max-width: 1100px) {
          .branch-map-layout {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .branch-map-wrapper :global(.map-card) {
            height: clamp(380px, 45vh, 500px);
            min-height: 380px;
          }

          .branch-table {
            min-width: 700px;
          }
        }

        /* =====================================================
           MOBILE LARGE (576px - 767px)
        ====================================================== */

        @media (max-width: 767px) {
          .container {
            padding: 0 16px;
          }

          .branch-hero {
            min-height: clamp(220px, 40vh, 280px);
            background-position: center;
          }

          .hero-content {
            padding: clamp(40px, 8vh, 60px) 0;
          }

          .hero-content h1 {
            font-size: clamp(28px, 8vw, 40px);
          }

          .hero-content p {
            font-size: clamp(14px, 2.5vw, 16px);
          }

          .branch-section {
            padding: clamp(30px, 5vw, 55px) 0 clamp(40px, 6vw, 70px);
          }

          .section-header {
            margin-bottom: clamp(25px, 4vw, 35px);
          }

          .section-header h2 {
            font-size: clamp(24px, 6vw, 30px);
          }

          .section-header p {
            font-size: clamp(13px, 2vw, 14px);
          }

          .branch-table-wrapper {
            display: block;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .branch-table {
            min-width: 650px;
          }

          .branch-table th {
            padding: 12px 14px;
            font-size: 10px;
          }

          .branch-table td {
            padding: 12px 14px;
            font-size: 12px;
          }

          .branch-number {
            font-size: 13px !important;
          }

          .branch-name {
            font-size: 12px;
          }

          .branch-name svg {
            width: 16px;
            height: 16px;
          }

          .branch-address {
            font-size: 12px;
          }

          .branch-address svg {
            width: 14px;
            height: 14px;
          }

          .branch-phone {
            font-size: 12px;
          }

          .branch-phone svg {
            width: 14px;
            height: 14px;
          }

          .branch-map-wrapper :global(.map-card) {
            height: clamp(300px, 40vh, 420px);
            min-height: 300px;
            border-radius: 10px;
          }
        }

        /* =====================================================
           MOBILE SMALL (360px - 575px)
        ====================================================== */

        @media (max-width: 575px) {
          .container {
            padding: 0 12px;
          }

          .branch-hero {
            min-height: 200px;
          }

          .hero-content {
            padding: 30px 0;
          }

          .hero-label {
            font-size: 10px;
            letter-spacing: 1.5px;
          }

          .hero-content h1 {
            font-size: clamp(24px, 9vw, 32px);
          }

          .hero-content p {
            font-size: clamp(13px, 3vw, 15px);
          }

          .branch-section {
            padding: 25px 0 35px;
          }

          .section-header h2 {
            font-size: clamp(22px, 7vw, 28px);
          }

          .section-header p {
            font-size: clamp(12px, 2.5vw, 14px);
          }

          .branch-table {
            min-width: 580px;
          }

          .branch-table th {
            padding: 10px 10px;
            font-size: 9px;
            letter-spacing: 0.3px;
          }

          .branch-table td {
            padding: 10px 10px;
            font-size: 11px;
          }

          .branch-number {
            font-size: 12px !important;
            width: 35px;
          }

          .branch-name {
            font-size: 11px;
            gap: 6px;
          }

          .branch-name svg {
            width: 14px;
            height: 14px;
          }

          .branch-address {
            font-size: 11px;
            gap: 5px;
          }

          .branch-address svg {
            width: 12px;
            height: 12px;
          }

          .branch-phone {
            font-size: 11px;
            gap: 5px;
          }

          .branch-phone svg {
            width: 12px;
            height: 12px;
          }

          .no-phone {
            font-size: 11px;
          }

          .branch-map-wrapper :global(.map-card) {
            height: clamp(250px, 35vh, 350px);
            min-height: 250px;
            border-radius: 8px;
          }
        }

        /* =====================================================
           EXTRA SMALL (up to 360px)
        ====================================================== */

        @media (max-width: 360px) {
          .container {
            padding: 0 10px;
          }

          .branch-hero {
            min-height: 180px;
          }

          .hero-content h1 {
            font-size: clamp(20px, 8vw, 26px);
          }

          .hero-content p {
            font-size: 12px;
          }

          .branch-table {
            min-width: 500px;
          }

          .branch-table th {
            padding: 8px 8px;
            font-size: 8px;
          }

          .branch-table td {
            padding: 8px 8px;
            font-size: 10px;
          }

          .branch-number {
            font-size: 10px !important;
            width: 30px;
          }

          .branch-name {
            font-size: 10px;
            gap: 5px;
          }

          .branch-name svg {
            width: 12px;
            height: 12px;
          }

          .branch-address {
            font-size: 10px;
            gap: 4px;
          }

          .branch-address svg {
            width: 10px;
            height: 10px;
          }

          .branch-phone {
            font-size: 10px;
          }

          .branch-phone svg {
            width: 10px;
            height: 10px;
          }

          .branch-map-wrapper :global(.map-card) {
            height: 220px;
            min-height: 220px;
          }
        }

        /* =====================================================
           DESKTOP LARGE (1200px - 1600px)
        ====================================================== */

        @media (min-width: 1200px) and (max-width: 1600px) {
          .container {
            max-width: 1200px;
          }

          .branch-map-layout {
            gap: 30px;
          }
        }

        /* =====================================================
           DESKTOP XL (1600px+)
        ====================================================== */

        @media (min-width: 1600px) {
          .container {
            max-width: 1400px;
          }

          .branch-map-layout {
            gap: 35px;
          }

          .branch-table th {
            font-size: 14px;
            padding: 20px 24px;
          }

          .branch-table td {
            font-size: 15px;
            padding: 22px 24px;
          }

          .branch-map-wrapper :global(.map-card) {
            min-height: 600px;
          }
        }

        /* =====================================================
           PRINT STYLES
        ====================================================== */

        @media print {
          .branch-hero {
            min-height: 200px;
            background: #1a2850 !important;
          }

          .branch-table-wrapper {
            box-shadow: none;
            border: 1px solid #ddd;
          }

          .branch-table thead {
            background: #1a2850 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          .branch-table th {
            color: #ffffff !important;
          }

          .branch-table tbody tr:hover {
            background: transparent !important;
          }

          .branch-map-wrapper {
            display: none;
          }

          .branch-map-layout {
            grid-template-columns: 1fr;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ====================================================== */

        @media (prefers-reduced-motion: reduce) {
          .branch-table tbody tr {
            transition: none;
          }

          .branch-phone {
            transition: none;
          }
        }

        /* =====================================================
           DARK MODE SUPPORT
        ====================================================== */

        @media (prefers-color-scheme: dark) {
          /* Only apply if you have dark mode support */
        }

      `}</style>

    </main>
  );
}