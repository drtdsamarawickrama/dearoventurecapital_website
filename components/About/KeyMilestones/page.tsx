"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const milestones = [
  {
    year: "2022",
    title: "Our Journey",
    description:
      "Dearo Venture Capital Limited was formally established, laying the foundation for a disciplined and growth-oriented venture platform.",
  },
  {
    year: "2023",
    title: "Strategic Expansion",
    description:
      "Launch of Dearo Agri and Dearo Engineering, expanding operations into agriculture and engineering-led project facilitation. Dearo also grew its physical presence to 9 branches across Sri Lanka.",
  },
  {
    year: "2024",
    title: "Launch of Dearo Education",
    description:
      "Introduction of Dearo Education, extending impact into learning accessibility and educational initiatives.",
  },
  {
    year: "2025",
    title: "Nationwide Expansion",
    description:
      "Expanded to 25 branches across Sri Lanka, reinforcing nationwide reach and operational strength.",
  },
];

export default function KeyMilestones() {
  return (
    <section className="milestones-section">
      <div className="milestones-container">

        {/* ================= HEADER ================= */}
        <div className="section-header">
          <h3 className="section-heading">
            Key Milestones
          </h3>

          <p className="section-subtitle">
            From a strong beginning to a growing nationwide presence.
          </p>
        </div>

        {/* ================= MILESTONES ================= */}
        <div className="milestones-grid">
          {milestones.map((milestone) => (
            <div
              className="milestone-card"
              key={milestone.year}
            >
              {/* Top */}
              <div className="milestone-top">
                <span className="milestone-year">
                  {milestone.year}
                </span>

                <div className="milestone-arrow">
                  <ArrowUpRight
                    size={19}
                    strokeWidth={2.2}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="milestone-content">
                <h3>{milestone.title}</h3>

                <p>{milestone.description}</p>
              </div>

              {/* Bottom Accent */}
              <div className="milestone-line" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* =========================
           SECTION
        ========================= */

        .milestones-section {
          width: 100%;
          padding: 95px 20px;
          background: #f5f7fa;
        }

        .milestones-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        /* =========================
           HEADER
        ========================= */

        .section-header {
          text-align: center;
          margin-bottom: 35px;
        }

        .section-heading {
          margin: 0;
          color: #0b1f4b;
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.035em;
        }

        .section-heading span {
          color: #c62828;
        }

        .section-subtitle {
          max-width: 600px;
          margin: 10px auto 0;
          color: #6b7280;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        /* =========================
           GRID
        ========================= */

        .milestones-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        /* =========================
           CARD
        ========================= */

        .milestone-card {
          position: relative;
          min-height: 395px;
          padding: 29px 28px 32px;
          background: #ffffff;
          border: 1px solid #dfe4ea;
          border-radius: 20px;
          overflow: hidden;

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        .milestone-card:hover {
          transform: translateY(-9px);
          border-color: #c32026;
          box-shadow: 0 22px 45px rgba(7, 29, 56, 0.14);
        }

        /* =========================
           TOP
        ========================= */

        .milestone-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .milestone-year {
          font-size: 19px;
          font-weight: 800;
          color: #071d38;
        }

        /* =========================
           ARROW
        ========================= */

        .milestone-arrow {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 43px;
          height: 43px;

          border-radius: 50%;

          background: #eef2f6;
          color: #071d38;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }

        .milestone-card:hover .milestone-arrow {
          background: #c32026;
          color: #ffffff;
          transform: rotate(45deg);
        }

        /* =========================
           CONTENT
        ========================= */

        .milestone-content {
          margin-top: 25px;
        }

        .milestone-content h3 {
          margin: 0 0 14px;

          font-size: 21px;
          line-height: 1.3;

          font-weight: 750;

          color: #071d38;
        }

        .milestone-content p {
          margin: 0;

          font-size: 14px;
          line-height: 1.75;

          color: #657184;
        }

        /* =========================
           BOTTOM RED LINE
        ========================= */

        .milestone-line {
          position: absolute;

          left: 28px;
          right: 28px;
          bottom: 0;

          height: 4px;

          background: #c32026;

          transform: scaleX(0);
          transform-origin: left;

          transition: transform 0.4s ease;
        }

        .milestone-card:hover .milestone-line {
          transform: scaleX(1);
        }

        /* =========================
           TOP RED ACCENT
        ========================= */

        .milestone-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 0;
          height: 3px;

          background: #c32026;

          transition: width 0.4s ease;
        }

        .milestone-card:hover::before {
          width: 100%;
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1100px) {
          .milestones-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .milestone-card {
            min-height: 375px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 768px) {
          .section-heading {
            font-size: clamp(1.55rem, 6vw, 1.9rem);
          }

          .section-subtitle {
            padding: 0 20px;
            font-size: 0.78rem;
          }
        }

        @media (max-width: 650px) {
          .milestones-section {
            padding: 65px 16px;
          }

          .section-header {
            margin-bottom: 30px;
          }

          .section-subtitle {
            padding: 0 15px;
            font-size: 0.75rem;
          }

          .milestones-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .milestone-card {
            min-height: 350px;
            padding: 26px 24px 30px;
          }

          .milestone-line {
            left: 24px;
            right: 24px;
          }
        }

        @media (max-width: 375px) {
          .section-heading {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  );
}