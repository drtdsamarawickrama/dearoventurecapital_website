"use client";

import { ArrowUpRight } from "lucide-react";

import Introduction from "./Introduction";
import WhatIsMusharaka from "./WhatIsMusharaka";
import WhyChooseMusharaka from "./WhyChooseMusharaka";
import MusharakaInvestmentWorks from "./MusharakaInvestmentWorks";
import OurApproach from "./OurApproach";
import InvestWithPurpose from "./InvestWithPurpose";
// import WhyChooseMusharaka from "./WhyChooseMusharaka";
// import MusharakaInvestmentWorks from "./MusharakaInvestmentWorks";
// import OurApproach from "./OurApproach";
// import InvestWithPurpose from "./InvestWithPurpose";

export default function IslamicFinancePage() {
  return (
    <main className="musharaka-page">

      {/* =========================================================
          HERO SECTION
      ========================================================= */}

      <section className="musharaka-hero">

        <div className="hero-image" />

        <div className="hero-overlay" />

        <div className="container hero-container">

          <div className="hero-content">

            <div className="hero-label">
              <span className="label-line" />
              <span>DEARO ISLAMIC VENTURE CAPITAL LTD</span>
            </div>

            <h1>
              Musharaka
              <br />
              <span>Investments</span>
            </h1>

            <p className="hero-tagline">
              Partnering in Growth. Sharing in Success.
            </p>

            <p className="hero-description">
              Our Musharaka Investment solution offers an opportunity to
              participate in business growth through a Sharia-compliant
              partnership model based on shared ownership and shared success.
            </p>

            <a
              href="#about-musharaka"
              className="hero-button"
            >
              Explore Musharaka
              <ArrowUpRight size={18} />
            </a>

          </div>

        </div>

      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <Introduction />


      {/* =========================================================
          WHAT IS MUSHARAKA
      ========================================================= */}

      <WhatIsMusharaka />


      {/* =========================================================
          WHY CHOOSE MUSHARAKA
      ========================================================= */}

      <WhyChooseMusharaka />


      {/* =========================================================
          HOW MUSHARAKA INVESTMENT WORKS
      ========================================================= */}

      <MusharakaInvestmentWorks />


      {/* =========================================================
          OUR APPROACH
      ========================================================= */}

      <OurApproach />


      {/* =========================================================
          INVEST WITH PURPOSE
      ========================================================= */}

      <InvestWithPurpose />


      {/* =========================================================
          PAGE STYLES
      ========================================================= */}

      <style jsx>{`

        .musharaka-page {
          --navy: #071a3a;
          --navy-dark: #04152e;
          --navy-light: #173875;

          --green: #16834b;
          --green-dark: #0f6338;
          --green-light: #e8f4ed;

          --red: #ed1c24;
          --red-dark: #c81018;

          --white: #ffffff;
          --off-white: #f5f8f6;

          --text: #172033;
          --muted: #687386;
          --border: #dde5e0;

          width: 100%;
          overflow: hidden;
          background: #ffffff;
        }


        /* =========================================================
           CONTAINER
        ========================================================= */

        .container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }


        /* =========================================================
           HERO
        ========================================================= */

        .musharaka-hero {
          position: relative;

          min-height: 330px;

          display: flex;

          align-items: center;

          background:
            linear-gradient(
              135deg,
              #04152e,
              #071a3a 50%,
              #173875
            );

          color: #ffffff;
        }


        .hero-image {
          position: absolute;

          inset: 0;

          z-index: 0;

          background-image:
            url("/images/136144734_d852880b-a56d-4312-b121-32f77ac5286c.jpg");

          background-size: cover;

          background-position: center;

          background-repeat: no-repeat;
        }


        .hero-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              135deg,
              rgba(4, 21, 46, 0.78) 0%,
              rgba(7, 26, 58, 0.65) 50%,
              rgba(23, 56, 117, 0.52) 100%
            );
        }


        .hero-container {
          position: relative;

          z-index: 2;
        }


        .hero-content {
          width: min(760px, 100%);

          padding: 65px 0 70px;
        }


        .hero-label {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 16px;

          color: #b7dfca;

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 2.2px;
        }


        .label-line {
          width: 42px;

          height: 2px;

          background: #ed1c24;
        }


        .hero-content h1 {
          margin: 0;

          font-size: clamp(50px, 6vw, 78px);

          line-height: 0.98;

          letter-spacing: -3px;

          font-weight: 800;
        }


        .hero-content h1 span {
          color: #67c98e;
        }


        .hero-tagline {
          margin: 20px 0 10px;

          font-size: clamp(19px, 2.5vw, 27px);

          line-height: 1.25;

          font-weight: 600;
        }


        .hero-description {
          max-width: 650px;

          margin: 0;

          color: #d8e0eb;

          font-size: 15px;

          line-height: 1.7;
        }


        .hero-button {
          display: inline-flex;

          align-items: center;

          gap: 10px;

          margin-top: 24px;

          padding: 13px 21px;

          border-radius: 5px;

          background: #ed1c24;

          color: #ffffff;

          text-decoration: none;

          font-size: 14px;

          font-weight: 700;

          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }


        .hero-button:hover {
          background: #c81018;

          transform: translateY(-2px);
        }


        /* =========================================================
           RESPONSIVE
        ========================================================= */

        @media (max-width: 700px) {

          .container {
            width: calc(100% - 36px);
          }


          .musharaka-hero {
            min-height: 450px;
          }


          .hero-content {
            padding: 60px 0;
          }


          .hero-content h1 {
            font-size: 50px;

            letter-spacing: -2px;
          }


          .hero-tagline {
            font-size: 21px;
          }


          .hero-description {
            font-size: 14px;
          }

        }


        @media (max-width: 450px) {

          .container {
            width: calc(100% - 28px);
          }


          .hero-content h1 {
            font-size: 43px;
          }


          .hero-label {
            font-size: 9px;

            letter-spacing: 1.4px;
          }

        }

      `}</style>

    </main>
  );
}