"use client";

import {
  ShieldCheck,
  TrendingUp,
  Handshake,
  FileCheck2,
  Building2,
} from "lucide-react";

const benefits = [
  {
    icon: ShieldCheck,
    title: "Sharia-Compliant Partnership",
    text: "Designed around Islamic finance principles, with a focus on partnership, transparency, and responsible investment.",
  },
  {
    icon: TrendingUp,
    title: "Participate in Business Growth",
    text: "Gain exposure to businesses and ventures with potential for sustainable growth and development.",
  },
  {
    icon: Handshake,
    title: "Shared Success",
    text: "Musharaka aligns the interests of the partners by connecting investment outcomes with the performance of the underlying venture.",
  },
  {
    icon: FileCheck2,
    title: "Transparent Structure",
    text: "Investment terms, capital contributions, profit-sharing arrangements, and relevant obligations are established clearly between the parties.",
  },
  {
    icon: Building2,
    title: "Supporting Sri Lankan Businesses",
    text: "Your investment can contribute to the growth of businesses, entrepreneurs, SMEs, and economic opportunities within Sri Lanka.",
  },
];

export default function WhyChooseMusharaka() {
  return (
    <section className="benefits-section">
      <div className="container">

        {/* =====================================================
            SECTION HEADING
        ===================================================== */}
        <div className="section-heading">

          <h2>
            Why Choose <span>Musharaka Investments?</span>
          </h2>

          <p>
            A partnership-based approach designed to connect investment with
            business growth, transparency, and shared prosperity.
          </p>

        </div>

        {/* =====================================================
            BENEFITS
        ===================================================== */}
        <div className="benefits-grid">

          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                className="benefit-card"
                key={index}
              >

                {/* TOP */}
                <div className="benefit-top">

                  <div className="benefit-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span>
                    0{index + 1}
                  </span>

                </div>

                {/* TITLE */}
                <h3>
                  {benefit.title}
                </h3>

                {/* DESCRIPTION */}
                <p>
                  {benefit.text}
                </p>

                {/* RED LINE */}
                <div className="benefit-line" />

              </div>
            );
          })}

        </div>

      </div>

      <style jsx>{`

        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .benefits-section {
          position: relative;
          padding: 110px 0;
          background: #071a3a;
          color: #ffffff;
          overflow: hidden;
        }


        /* =====================================================
           BACKGROUND DECORATION
        ===================================================== */

        .benefits-section::before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: rgba(22, 131, 75, 0.08);
          transform: translate(35%, -35%);
          pointer-events: none;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .container {
          position: relative;
          z-index: 1;
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }


        /* =====================================================
           SECTION HEADING
        ===================================================== */

        .section-heading {
          width: 100%;
          max-width: none;
          margin: 0;
        }


        .section-heading h2 {
          margin: 0;

          color: #ffffff;

          font-family:
            "Inter",
            "Segoe UI",
            Arial,
            Helvetica,
            sans-serif;

          font-size: clamp(34px, 4vw, 52px);

          line-height: 1.15;

          letter-spacing: -1.2px;

          font-weight: 700;

          white-space: nowrap;
        }


        .section-heading h2 span {
          color: #76d69b;

          font-family:
            "Inter",
            "Segoe UI",
            Arial,
            Helvetica,
            sans-serif;

          font-size: inherit;

          font-weight: 700;
        }


        /* =====================================================
           INTRODUCTION TEXT
        ===================================================== */

        .section-heading > p {
          width: 100%;
          max-width: none;

          margin: 18px 0 0;

          color: #aebbd0;

          font-family:
            "Inter",
            "Segoe UI",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 16px;

          line-height: 1.6;

          font-weight: 400;

          white-space: nowrap;
        }


        /* =====================================================
           BENEFITS GRID
        ===================================================== */

        .benefits-grid {
          display: grid;

          grid-template-columns:
            repeat(5, 1fr);

          gap: 1px;

          margin-top: 55px;

          background: rgba(255, 255, 255, 0.13);
        }


        /* =====================================================
           BENEFIT CARD
        ===================================================== */

        .benefit-card {
          min-height: 320px;

          padding: 30px 24px;

          background: #071a3a;

          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }


        .benefit-card:hover {
          background: #173875;
        }


        /* =====================================================
           CARD TOP
        ===================================================== */

        .benefit-top {
          display: flex;

          align-items: center;

          justify-content: space-between;
        }


        /* =====================================================
           ICON
        ===================================================== */

        .benefit-icon {
          width: 52px;
          height: 52px;

          display: flex;

          align-items: center;

          justify-content: center;

          color: #7cdda1;

          background: rgba(22, 131, 75, 0.17);

          border-radius: 4px;

          transition:
            background 0.25s ease,
            transform 0.25s ease;
        }


        .benefit-card:hover .benefit-icon {
          background: rgba(118, 214, 155, 0.2);

          transform: translateY(-2px);
        }


        /* =====================================================
           NUMBER
        ===================================================== */

        .benefit-top > span {
          color: rgba(255, 255, 255, 0.25);

          font-family:
            "Inter",
            "Segoe UI",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 14px;

          font-weight: 800;
        }


        /* =====================================================
           CARD TITLE
        ===================================================== */

        .benefit-card h3 {
          margin: 42px 0 15px;

          color: #ffffff;

          font-family:
            "Inter",
            "Segoe UI",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 18px;

          line-height: 1.3;

          font-weight: 700;
        }


        /* =====================================================
           CARD DESCRIPTION
        ===================================================== */

        .benefit-card p {
          margin: 0;

          color: #aebbd0;

          font-family:
            "Inter",
            "Segoe UI",
            Arial,
            Helvetica,
            sans-serif;

          font-size: 13px;

          line-height: 1.75;

          font-weight: 400;
        }


        /* =====================================================
           RED LINE
        ===================================================== */

        .benefit-line {
          width: 34px;

          height: 2px;

          margin-top: 27px;

          background: #ed1c24;

          transition:
            width 0.25s ease;
        }


        .benefit-card:hover .benefit-line {
          width: 55px;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .section-heading h2 {
            font-size: 44px;
          }

          .section-heading > p {
            font-size: 15px;
          }

          .benefits-grid {
            grid-template-columns:
              repeat(3, 1fr);
          }

        }


        /* =====================================================
           TABLET SMALL
        ===================================================== */

        @media (max-width: 850px) {

          .section-heading h2 {
            white-space: normal;
          }

          .section-heading > p {
            white-space: normal;
          }

          .benefits-grid {
            grid-template-columns:
              repeat(2, 1fr);
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .container {
            width: calc(100% - 36px);
          }


          .benefits-section {
            padding: 80px 0;
          }


          .section-heading h2 {
            font-size: 34px;

            line-height: 1.2;

            letter-spacing: -0.8px;

            white-space: normal;
          }


          .section-heading h2 span {
            font-size: inherit;
          }


          .section-heading > p {
            margin-top: 16px;

            font-size: 15px;

            line-height: 1.7;

            white-space: normal;
          }


          .benefits-grid {
            grid-template-columns: 1fr;

            margin-top: 40px;
          }


          .benefit-card {
            min-height: auto;

            padding: 28px 24px 32px;
          }


          .benefit-card h3 {
            margin-top: 32px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .container {
            width: calc(100% - 30px);
          }


          .benefits-section {
            padding: 65px 0;
          }


          .section-heading h2 {
            font-size: 30px;
          }


          .section-heading > p {
            font-size: 14px;
          }


          .benefit-card {
            padding: 25px 20px 30px;
          }

        }

      `}</style>

    </section>
  );
}