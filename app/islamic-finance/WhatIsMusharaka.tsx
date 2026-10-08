"use client";

import {
    CircleDollarSign,
    Users,
    Scale,
    ShieldCheck,
    Landmark,
} from "lucide-react";

const features = [
    {
        icon: CircleDollarSign,
        title: "Capital Contribution",
        text: "Partners contribute capital toward the agreed Musharaka business or investment venture.",
    },
    {
        icon: Users,
        title: "Shared Ownership",
        text: "Partners participate in the ownership of the investment according to the agreed structure.",
    },
    {
        icon: Scale,
        title: "Profit & Loss Sharing",
        text: "Profits are distributed according to the agreed arrangement, while financial losses are generally shared according to capital contribution.",
    },
    {
        icon: ShieldCheck,
        title: "Sharia Principles",
        text: "The investment operates in accordance with applicable Sharia principles and the agreed contractual terms.",
    },
    {
        icon: Landmark,
        title: "Responsible Investment",
        text: "The structure promotes responsible wealth creation, transparency, and shared prosperity.",
    },
];

export default function WhatIsMusharaka() {
    return (
        <section className="what-section">
            <div className="container">

                <div className="section-heading">

                    {/* <div className="section-label">
            <span className="section-label-line" />
            UNDERSTANDING MUSHARAKA
          </div> */}

                    <h2>
                        What is <span>Musharaka?</span>
                    </h2>

                    {/* <p className="musharaka-main-description">
                        <strong>
                            Musharaka is a Sharia-compliant partnership structure in which two or
                            more parties contribute capital toward a business or investment venture.
                        </strong>
                    </p> */}

                </div>

                <div className="features-grid">

                    {features.map((feature, index) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                className="feature-card"
                                key={index}
                            >

                                <div className="feature-icon">
                                    <Icon size={25} />
                                </div>

                                <div className="feature-number">
                                    0{index + 1}
                                </div>

                                <h3>
                                    {feature.title}
                                </h3>

                                <p>
                                    {feature.text}
                                </p>

                            </div>
                        );
                    })}

                </div>

            </div>

            <style jsx>{`

        .what-section {
          padding: 105px 0;
          background: #f5f8f6;
        }


        .container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }


        .section-heading {
          max-width: 700px;
          margin: 0 auto 55px;
          text-align: center;
        }


        .section-label {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          margin-bottom: 17px;
          color: #16834b;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 2px;
        }


        .section-label-line {
          width: 35px;
          height: 2px;
          background: #ed1c24;
        }


        .section-heading h2 {
          margin: 0;
          color: #071a3a;
          font-size: clamp(36px, 5vw, 56px);
          line-height: 1.08;
          letter-spacing: -1.8px;
          font-weight: 800;
        }


        .section-heading h2 span {
          color: #16834b;
          font-size: clamp(36px, 5vw, 56px);
          line-height: 1.08;
        }


        .section-heading p {
          max-width: 690px;
          margin: 20px auto 0;
          color: #687386;
          font-size: 16px;
          line-height: 1.8;
        }


        .features-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
        }

        .musharaka-main-description {
  margin: 0 0 0px;
  color: #000000;
  font-size: 16px;
  line-height: 1.85;
  text-align: justify;
  font-weight: 400;
  font-family: inherit;
}


        


        /* =====================================================
           FEATURE CARDS
        ===================================================== */

        .feature-card {
          position: relative;

          min-height: 310px;

          padding: 30px 25px;

          background: #ffffff;

          border: 1px solid #dde5e0;

          overflow: hidden;

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease,
            border-color 0.25s ease;
        }


        /* =====================================================
           01 - GREEN
        ===================================================== */

        .feature-card:nth-child(1) {
          background: #16834b;
          border-color: #16834b;
        }


        /* =====================================================
           02 - RED
        ===================================================== */

        .feature-card:nth-child(2) {
          background: #ed1c24;
          border-color: #ed1c24;
        }


        /* =====================================================
           03 - WHITE
        ===================================================== */

        .feature-card:nth-child(3) {
          background: #ffffff;
          border-color: #dde5e0;
        }


        /* =====================================================
           04 - NAVY BLUE
        ===================================================== */

        .feature-card:nth-child(4) {
          background: #071a3a;
          border-color: #071a3a;
        }


        /* =====================================================
           05 - LIGHT BLUE
        ===================================================== */

        .feature-card:nth-child(5) {
          background: #e8f2fb;
          border-color: #d2e3f2;
        }


        .feature-card:hover {
          transform: translateY(-5px);

          box-shadow:
            0 20px 45px rgba(7, 26, 58, 0.12);
        }


        /* =====================================================
           ICON
        ===================================================== */

        .feature-icon {
          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: #e8f4ed;
          color: #16834b;

          border-radius: 4px;
        }


        /* =====================================================
           NUMBER
        ===================================================== */

        .feature-number {
          position: absolute;

          top: 18px;
          right: 18px;

          color: #e4ece7;

          font-size: 26px;
          font-weight: 800;
        }


        /* =====================================================
           CARD TITLE
        ===================================================== */

        .feature-card h3 {
          margin: 45px 0 12px;

          color: #071a3a;

          font-size: 18px;
          line-height: 1.25;
        }


        /* =====================================================
           CARD TEXT
        ===================================================== */

        .feature-card p {
          margin: 0;

          color: #687386;

          font-size: 13px;
          line-height: 1.7;
        }


        /* =====================================================
           GREEN CARD TEXT
        ===================================================== */

        .feature-card:nth-child(1) h3,
        .feature-card:nth-child(1) p {
          color: #ffffff;
        }


        .feature-card:nth-child(1) .feature-number {
          color: rgba(255, 255, 255, 0.25);
        }


        /* =====================================================
           RED CARD TEXT
        ===================================================== */

        .feature-card:nth-child(2) h3,
        .feature-card:nth-child(2) p {
          color: #ffffff;
        }


        .feature-card:nth-child(2) .feature-number {
          color: rgba(255, 255, 255, 0.25);
        }


        /* =====================================================
           NAVY CARD TEXT
        ===================================================== */

        .feature-card:nth-child(4) h3,
        .feature-card:nth-child(4) p {
          color: #ffffff;
        }


        .feature-card:nth-child(4) .feature-number {
          color: rgba(255, 255, 255, 0.18);
        }


        /* =====================================================
           LIGHT BLUE CARD
        ===================================================== */

        .feature-card:nth-child(5) h3 {
          color: #071a3a;
        }


        .feature-card:nth-child(5) p {
          color: #52647a;
        }


        .feature-card:nth-child(5) .feature-number {
          color: #cbdceb;
        }


        /* =====================================================
           RESPONSIVE - TABLET
        ===================================================== */

        @media (max-width: 1000px) {

          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }

        }


        /* =====================================================
           RESPONSIVE - MOBILE
        ===================================================== */

        @media (max-width: 700px) {

          .container {
            width: calc(100% - 36px);
          }


          .what-section {
            padding: 80px 0;
          }


          .features-grid {
            grid-template-columns: 1fr;
          }


          .feature-card {
            min-height: auto;
          }

        }

      `}</style>

        </section>
    );
}