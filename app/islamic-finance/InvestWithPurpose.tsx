
"use client";

import {
  ArrowUpRight,
  CircleDollarSign,
  Landmark,
} from "lucide-react";

import Link from "next/link";

export default function InvestWithPurpose() {
  return (
    <section className="investment-cta">
      <div className="cta-decoration cta-decoration-one" />
      <div className="cta-decoration cta-decoration-two" />

      <div className="container">
        <div className="cta-content">

          {/* COMPANY */}

          <div className="cta-company">
            <h3>
              Dearo Islamic Venture Capital Ltd
            </h3>

            <p className="company-tagline">
              Empowering Ethical Investment. Enabling Shared Prosperity.
            </p>

            {/* ISLAMIC ADVISER */}

            <div className="islamic-adviser">
              <span className="adviser-label">
                ISLAMIC ADVISER
              </span>

              <h4>
                Ash-Shaikh H. Abdul Nazar
              </h4>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`

        .investment-cta {
          position: relative;
          padding: 30px 0;
          background:
            linear-gradient(
              135deg,
              #04152e,
              #071a3a 55%,
              #0b3154
            );
          color: #ffffff;
          overflow: hidden;
        }

        .container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* DECORATION */

        .cta-decoration {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .cta-decoration-one {
          width: 500px;
          height: 500px;
          top: -250px;
          right: -170px;
          border:
            90px solid
            rgba(22, 131, 75, 0.12);
        }

        .cta-decoration-two {
          width: 250px;
          height: 250px;
          bottom: -140px;
          left: -80px;
          border:
            55px solid
            rgba(237, 28, 36, 0.1);
        }

        /* CONTENT */

        .cta-content {
          position: relative;
          z-index: 2;
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
        }

        /* COMPANY */

        .cta-company {
          margin-top: 0;
        }

        .cta-company h3 {
          margin: 0;
          color: #ffffff;
          font-size: 20px;
          font-weight: 700;
          line-height: 1.5;
        }

        .company-tagline {
          margin: 7px 0 0;
          color: #86d5a6;
          font-size: 13px;
          font-style: italic;
          line-height: 1.7;
        }

        /* ISLAMIC ADVISER */

        .islamic-adviser {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px auto 0;
          padding-top: 16px;
          max-width: 460px;
          border-top: 1px solid
            rgba(255, 255, 255, 0.18);
        }

        .adviser-label {
          display: inline-block;
          margin-bottom: 8px;
          color: #86d5a6;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .islamic-adviser h4 {
          margin: 0;
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.6;
          letter-spacing: 0.2px;
        }

        /* RESPONSIVE DESIGN */

        @media (max-width: 700px) {
          .container {
            width: calc(100% - 36px);
          }

          .investment-cta {
            padding: 35px 0;
          }

          .cta-company h3 {
            font-size: 19px;
          }

          .company-tagline {
            font-size: 12px;
          }

          .islamic-adviser {
            margin-top: 18px;
          }

          .islamic-adviser h4 {
            font-size: 17px;
          }
        }

        @media (max-width: 450px) {
          .container {
            width: calc(100% - 28px);
          }

          .cta-company h3 {
            font-size: 17px;
          }

          .company-tagline {
            font-size: 12px;
          }

          .adviser-label {
            font-size: 10px;
            letter-spacing: 1.5px;
          }

          .islamic-adviser h4 {
            font-size: 15px;
          }
        }

      `}</style>
    </section>
  );
}
