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

          {/* =====================================================
              LABEL
          ===================================================== */}

          {/* <div className="section-label cta-label">

            <span className="section-label-line" />

            INVEST WITH PURPOSE

          </div> */}


          {/* =====================================================
              TITLE
          ===================================================== */}

          {/* <h2>
            Partner in Growth.
            <br />
            <span>Share in Success.</span>
          </h2> */}


          {/* =====================================================
              DESCRIPTION
          ===================================================== */}

          {/* <p>
            Whether you are looking to diversify your investment portfolio,
            participate in business opportunities, or explore
            Sharia-compliant investment structures,{" "}
            <strong>
              Musharaka Investments by Dearo Islamic Venture Capital Ltd
            </strong>{" "}
            provides a partnership-based approach to investment.
          </p> */}


          {/* =====================================================
              COMPANY
          ===================================================== */}

          <div className="cta-company">

            <h3>
              Dearo Islamic Venture Capital Ltd
            </h3>

            <p>
              Empowering Ethical Investment. Enabling Shared Prosperity.
            </p>

          </div>


          {/* =====================================================
              CONTACT
          ===================================================== */}

          {/* <div className="cta-contact-grid">

            <div className="contact-box">

              <div className="contact-icon">
                <CircleDollarSign size={22} />
              </div>

              <div>

                <span>
                  CONTACT US
                </span>

                <strong>
                  011 478 2400
                </strong>

              </div>

            </div>


            <div className="contact-box">

              <div className="contact-icon">
                <Landmark size={22} />
              </div>

              <div>

                <span>
                  WEBSITE
                </span>

                <strong>
                  www.dearoventurecapital.com
                </strong>

              </div>

            </div> */}

          {/* </div> */}


          {/* =====================================================
              BUTTON
          ===================================================== */}
{/* 
          <Link
            href="/contact"
            className="cta-button"
          >
            Contact Us
            <ArrowUpRight size={18} />
          </Link> */}

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


        /* =====================================================
           DECORATION
        ===================================================== */

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


        /* =====================================================
           CONTENT
        ===================================================== */

        .cta-content {
          position: relative;

          z-index: 2;

          max-width: 850px;

          margin: 0 auto;

          text-align: center;
        }


        .section-label {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 10px;

          margin-bottom: 17px;

          color: #8ed8aa;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 2px;
        }


        .section-label-line {
          width: 35px;

          height: 2px;

          background: #ed1c24;
        }


        .cta-content h2 {
          margin: 0;

          font-size: clamp(40px, 5vw, 62px);

          line-height: 1.05;

          letter-spacing: -2px;
        }


        .cta-content h2 span {
          color: #78d79c;
        }


        .cta-content > p {
          max-width: 760px;

          margin: 25px auto 0;

          color: #c4cfdd;

          font-size: 16px;

          line-height: 1.85;
        }


        .cta-content > p strong {
          color: #ffffff;
        }


        /* =====================================================
           COMPANY
        ===================================================== */

        .cta-company {
          margin-top: 40px;
        }


        .cta-company h3 {
          margin: 0;

          color: #ffffff;

          font-size: 20px;
        }


        .cta-company p {
          margin: 7px 0 0;

          color: #86d5a6;

          font-size: 13px;

          font-style: italic;
        }


        /* =====================================================
           CONTACT GRID
        ===================================================== */

        .cta-contact-grid {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 15px;

          max-width: 680px;

          margin: 38px auto 0;
        }


        .contact-box {
          display: flex;

          align-items: center;

          gap: 15px;

          padding: 18px 20px;

          background:
            rgba(255, 255, 255, 0.07);

          border:
            1px solid
            rgba(255, 255, 255, 0.1);

          text-align: left;
        }


        .contact-icon {
          width: 46px;

          height: 46px;

          flex: 0 0 auto;

          display: flex;

          align-items: center;

          justify-content: center;

          background:
            rgba(22, 131, 75, 0.2);

          color: #83dba5;
        }


        .contact-box div:last-child {
          display: flex;

          flex-direction: column;

          gap: 4px;
        }


        .contact-box span {
          color: #8290a5;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1.5px;
        }


        .contact-box strong {
          color: #ffffff;

          font-size: 14px;

          word-break: break-word;
        }


        /* =====================================================
           BUTTON
        ===================================================== */

        .cta-button {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-top: 35px;

          padding: 15px 25px;

          background: #ed1c24;

          color: #ffffff;

          text-decoration: none;

          font-size: 14px;

          font-weight: 700;

          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }


        .cta-button:hover {
          background: #c81018;

          transform: translateY(-2px);
        }


        @media (max-width: 700px) {

          .container {
            width: calc(100% - 36px);
          }


          .investment-cta {
            padding: 80px 0;
          }


          .cta-content h2 {
            font-size: 40px;
          }


          .cta-contact-grid {
            grid-template-columns: 1fr;
          }

        }


        @media (max-width: 450px) {

          .container {
            width: calc(100% - 28px);
          }


          .cta-content h2 {
            font-size: 35px;
          }


          .contact-box strong {
            font-size: 13px;
          }

        }

      `}</style>

    </section>
  );
}