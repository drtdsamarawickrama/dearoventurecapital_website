"use client";

import {
  CheckCircle2,
  Handshake,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

export default function Introduction() {
  return (
    <>
      <section className="musharaka-intro" id="about-musharaka">
        <div className="container">

          {/* =====================================================
              MAIN INTRO GRID
          ===================================================== */}

          <div className="intro-grid">

            {/* =====================================================
                IMAGE SIDE
            ===================================================== */}

            <div className="intro-image-wrapper">

              <div className="intro-image">

                <img
                  src="/images/hero5.jpg"
                  alt="Musharaka Islamic Investment Partnership"
                />

                <div className="image-overlay" />

                <div className="image-content">

                  <div className="image-small-label">
                    MUSHARAKA INVESTMENT
                  </div>

                  <div className="image-line" />

                  <p>
                    Building partnerships.
                    <br />
                    Sharing success.
                  </p>

                </div>
              </div>

              {/* =================================================
                  FLOATING PARTNERSHIP BADGE
              ================================================= */}

              {/* <div className="image-badge">

                {/* <div className="badge-icon">
                  <Handshake size={21} />
                </div> */}

                {/* <div className="badge-content">
                  <strong>Shared Success</strong>
                  <span>Sharia-Compliant Partnership</span>
                </div> */}

              {/* </div> */} 

            </div>


            {/* =====================================================
                CONTENT SIDE
            ===================================================== */}

            <div className="intro-content">

              {/* <div className="section-label">

                <span className="section-label-line" />

                MUSHARAKA INVESTMENTS

              </div> */}


              <h2>
                Partnering in Growth.
                <br />
                <span>Sharing in Success.</span>
              </h2>


              <div className="description-accent"></div>


              {/* =================================================
                  INTRODUCTION PARAGRAPHS
              ================================================= */}

              <div className="intro-description">

                <p className="intro-lead">
                  At <strong>Dearo Islamic Venture Capital Ltd</strong>,
                  our Musharaka Investment solution offers an opportunity
                  to participate in business growth through a
                  Sharia-compliant partnership model.
                
                  Musharaka is based on the principle of{" "}
                  <strong>partnership and shared ownership</strong>,
                  where the parties contribute capital to a business or
                  investment opportunity and share the resulting profits
                  according to an agreed arrangement. Losses are borne
                  in proportion to the capital contribution, in accordance
               
                  Our approach is designed to connect investors with
                  carefully considered business and investment
                  opportunities while promoting responsible wealth
                  creation, transparency, and shared prosperity.
                </p>

              </div>

            </div>

          </div>


          {/* =====================================================
              MODERN FEATURE CARDS
          ===================================================== */}

          <div className="intro-points">

            {/* =================================================
                CARD 01
            ================================================= */}

            <div className="intro-point">

              {/* <div className="point-number">
                01
              </div> */}

              <div className="point-icon">
                <Users size={21} />
              </div>

              <div className="point-content">

                <div className="point-title-row">

                  <strong>
                    Shared Ownership
                  </strong>

                  {/* <CheckCircle2
                    className="point-check"
                    size={17}
                  /> */}

                </div>

                <span>
                  Partners participate in the investment structure
                  through shared ownership.
                </span>

              </div>

            </div>


            {/* =================================================
                CARD 02
            ================================================= */}

            <div className="intro-point">

              {/* <div className="point-number">
                02
              </div> */}

              <div className="point-icon">
                <TrendingUp size={21} />
              </div>

              <div className="point-content">

                <div className="point-title-row">

                  <strong>
                    Profit &amp; Loss Sharing
                  </strong>

                    {/* <CheckCircle2
                        className="point-check"
                        size={17}
                    /> */}

                </div>

                <span>
                  Investment outcomes are shared according to
                  the agreed partnership structure.
                </span>

              </div>

            </div>


            {/* =================================================
                CARD 03
            ================================================= */}

            <div className="intro-point">

              {/* <div className="point-number">
                03
              </div> */}

              <div className="point-icon">
                <ShieldCheck size={21} />
              </div>

              <div className="point-content">

                <div className="point-title-row">

                  <strong>
                    Sharia-Compliant
                  </strong>

                  {/* <CheckCircle2
                    className="point-check"
                    size={17}
                  /> */}

                </div>

                <span>
                  Designed around applicable Islamic finance
                  principles and responsible investment.
                </span>

              </div>

            </div>

          </div>


          {/* =====================================================
              BOTTOM HIGHLIGHT
          ===================================================== */}

          {/*

          <div className="intro-highlight">

            <div className="highlight-icon">
              <Sparkles size={22} />
            </div>

            <div className="highlight-text">

              <strong>
                A Partnership Built on Shared Prosperity
              </strong>

              <span>
                Musharaka encourages responsible investment,
                transparency and mutual participation in business growth.
              </span>

            </div>

            <div className="highlight-accent" />

          </div>

          */}

        </div>
      </section>


      {/* =========================================================
          STYLES
      ========================================================= */}

      <style jsx>{`

        /* =========================================================
           SECTION
        ========================================================= */

        .musharaka-intro {
          position: relative;

          padding: 105px 0;

          background: #ffffff;

          overflow: hidden;
        }


        /* =========================================================
           CONTAINER
        ========================================================= */

        .musharaka-intro .container {
          width: 100%;

          max-width: 1200px;

          margin: 0 auto;

          padding: 0 24px;

          position: relative;

          z-index: 1;
        }


        /* =========================================================
           MAIN GRID
        ========================================================= */

        .intro-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 0.92fr)
            minmax(0, 1.08fr);

          gap: 75px;

          align-items: center;
        }


        /* =========================================================
           IMAGE WRAPPER
        ========================================================= */

        .intro-image-wrapper {
          position: relative;

          min-height: 570px;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        /* =========================================================
           IMAGE
        ========================================================= */

        .intro-image {
          position: relative;

          width: 100%;

          height: 500px;

          border-radius: 28px;

          overflow: hidden;

          background: #071a3a;

          box-shadow:
            0 25px 60px rgba(7, 26, 58, 0.16);
        }


        .intro-image img {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.7s ease;
        }


        .intro-image:hover img {
          transform: scale(1.04);
        }


        /* =========================================================
           IMAGE OVERLAY
        ========================================================= */

        .image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(7, 26, 58, 0.05) 20%,
              rgba(7, 26, 58, 0.20) 45%,
              rgba(7, 26, 58, 0.90) 100%
            );
        }


        /* =========================================================
           IMAGE CONTENT
        ========================================================= */

        .image-content {
          position: absolute;

          left: 40px;

          right: 40px;

          bottom: 42px;

          z-index: 2;
        }


        .image-small-label {
          display: inline-block;

          margin-bottom: 14px;

          padding: 7px 11px;

          border-radius: 30px;

          background: rgba(22, 131, 75, 0.90);

          color: #ffffff;

          font-size: 10px;

          font-weight: 700;

          letter-spacing: 1.6px;
        }


        .image-line {
          width: 55px;

          height: 3px;

          margin: 22px 0 18px;

          background: #ed1c24;

          border-radius: 10px;
        }


        .image-content p {
          margin: 0;

          font-size: 15px;

          line-height: 1.7;

          color: rgba(255, 255, 255, 0.86);
        }


        /* =========================================================
           FLOATING IMAGE BADGE
        ========================================================= */

        .image-badge {
          position: absolute;

          right: -28px;

          bottom: 35px;

          display: flex;

          align-items: center;

          gap: 12px;

          padding: 14px 18px;

          background: #ffffff;

          border-radius: 15px;

          border: 1px solid #e0e8e3;

          box-shadow:
            0 18px 40px rgba(7, 26, 58, 0.16);

          z-index: 5;
        }


        .badge-icon {
          width: 43px;

          height: 43px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 12px;

          background: #e8f4ed;

          color: #16834b;
        }


        .badge-content {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }


        .image-badge strong {
          font-size: 13px;

          color: #071a3a;
        }


        .image-badge span {
          font-size: 10px;

          color: #687386;
        }


        /* =========================================================
           SECTION LABEL
        ========================================================= */

        .section-label {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 19px;

          font-size: 12px;

          font-weight: 750;

          letter-spacing: 1.8px;

          color: #16834b;
        }


        .section-label-line {
          width: 42px;

          height: 2px;

          display: block;

          background: #ed1c24;

          border-radius: 10px;
        }


        /* =========================================================
           CONTENT
        ========================================================= */

        .intro-content {
          max-width: 650px;
        }


        .intro-content h2 {
          margin: 0 0 20px;

          font-size: clamp(38px, 4vw, 54px);

          line-height: 1.08;

          font-weight: 750;

          color: #071a3a;

          letter-spacing: -1.5px;
        }


        .intro-content h2 span {
          color: #16834b;
        }


        /* =========================================================
           DESCRIPTION ACCENT
        ========================================================= */

        .description-accent {
          width: 70px;

          height: 4px;

          margin: 0 0 28px;

          border-radius: 20px;

          background:
            linear-gradient(
              90deg,
              #ed1c24 0%,
              #ed1c24 35%,
              #16834b 35%,
              #16834b 100%
            );
        }


        /* =========================================================
           INTRODUCTION DESCRIPTION
        ========================================================= */

        .intro-description {
          position: relative;

          padding-left: 24px;

          border-left: 3px solid #e8f4ed;
        }


        .intro-content p {
          margin: 0 0 18px;

          font-size: 16px;

          line-height: 1.85;

          color: #687386;
        }


        .intro-content p:last-child {
          margin-bottom: 0;
        }


        .intro-content .intro-lead {
          margin: 0;

          color: #374151;

          font-size: clamp(0.96rem, 1.1vw, 1.07rem);

          line-height: 1.9;

          font-weight: 400;

          text-align: justify;

          text-justify: inter-word;

          letter-spacing: 0.005em;

          overflow-wrap: break-word;
        }


        .intro-content strong {
          color: #071a3a;

          font-weight: 700;
        }


        /* =========================================================
           MODERN POINTS
        ========================================================= */

        .intro-points {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          gap: 18px;

          width: 100%;

          margin-top: 32px;
        }


        /* =========================================================
           POINT CARD
        ========================================================= */

        .intro-point {
          position: relative;

          min-height: 120px;

          padding: 22px 20px;

          display: flex;

          align-items: center;

          gap: 14px;

          background: #ffffff;

          border: 1px solid #dce7e1;

          border-radius: 18px;

          overflow: hidden;

          box-shadow:
            0 8px 25px rgba(7, 26, 58, 0.06);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }


        /* =========================================================
           CARD TOP LINE
        ========================================================= */

        .intro-point::before {
          content: "";

          position: absolute;

          top: 0;

          left: 0;

          width: 100%;

          height: 4px;

          background:
            linear-gradient(
              90deg,
              #16834b 0%,
              #16834b 65%,
              #ed1c24 65%,
              #ed1c24 100%
            );
        }


        /* =========================================================
           CARD BACKGROUND DECORATION
        ========================================================= */

        .intro-point::after {
          content: "";

          position: absolute;

          right: -35px;

          bottom: -40px;

          width: 100px;

          height: 100px;

          border-radius: 50%;

          background:
            rgba(22, 131, 75, 0.045);

          pointer-events: none;
        }


        /* =========================================================
           HOVER
        ========================================================= */

        .intro-point:hover {
          transform: translateY(-6px);

          border-color: #b7d7c5;

          box-shadow:
            0 18px 38px rgba(7, 26, 58, 0.12);
        }


        

        /* =========================================================
           ICON
        ========================================================= */

        .point-icon {
          position: relative;

          z-index: 2;

          width: 44px;

          height: 44px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 13px;

          background: #e8f4ed;

          color: #16834b;

          border: 1px solid #cde5d7;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            transform 0.3s ease;
        }


        .intro-point:hover .point-icon {
          background: #16834b;

          color: #ffffff;

          transform: translateY(-2px);
        }


        /* =========================================================
           POINT CONTENT
        ========================================================= */

        .point-content {
          position: relative;

          z-index: 2;

          min-width: 0;

          display: flex;

          flex-direction: column;

          gap: 7px;

        }


        /* =========================================================
           TITLE ROW
        ========================================================= */

        .point-title-row {
          display: flex;

          align-items: center;

          gap: 7px;
        }


        .intro-point strong {
          font-size: 20px;

          line-height: 1.3;

          font-weight: 750;

          color: #071a3a;
        }


        /* =========================================================
           CHECK
        ========================================================= */

        .point-check {
          flex-shrink: 0;

          color: #16834b;
        }


        /* =========================================================
           DESCRIPTION
        ========================================================= */

        .intro-point span {
          font-size: 11.5px;

          line-height: 1.5;

          color: #687386;
                              font-size: 13px;

        }


        /* =========================================================
           BOTTOM HIGHLIGHT
        ========================================================= */

        .intro-highlight {
          position: relative;

          margin-top: 55px;

          padding: 25px 30px;

          display: flex;

          align-items: center;

          gap: 18px;

          border-radius: 18px;

          overflow: hidden;

          background:
            linear-gradient(
              105deg,
              #071a3a 0%,
              #173875 68%,
              #0f6338 100%
            );

          box-shadow:
            0 15px 40px rgba(7, 26, 58, 0.13);
        }


        /* =========================================================
           HIGHLIGHT RED ACCENT
        ========================================================= */

        .highlight-accent {
          position: absolute;

          right: 0;

          top: 0;

          width: 5px;

          height: 100%;

          background: #ed1c24;
        }


        /* =========================================================
           HIGHLIGHT ICON
        ========================================================= */

        .highlight-icon {
          width: 50px;

          height: 50px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 14px;

          background: rgba(255, 255, 255, 0.12);

          color: #8fd3ad;

          border: 1px solid rgba(255, 255, 255, 0.12);
        }


        /* =========================================================
           HIGHLIGHT TEXT
        ========================================================= */

        .highlight-text {
          display: flex;

          flex-direction: column;

          gap: 5px;
        }


        .highlight-text strong {
          font-size: 16px;

          color: #ffffff;
        }


        .highlight-text span {
          font-size: 14px;

          line-height: 1.6;

          color: rgba(255, 255, 255, 0.72);
        }


        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1000px) {

          .musharaka-intro {
            padding: 85px 0;
          }


          .intro-grid {
            grid-template-columns: 1fr;

            gap: 65px;
          }


          .intro-image-wrapper {
            width: 100%;

            max-width: 650px;

            margin: 0 auto;
          }


          .intro-content {
            max-width: 800px;

            margin: 0 auto;
          }


          .intro-points {
            grid-template-columns:
              repeat(3, minmax(0, 1fr));

            gap: 12px;
          }


          .intro-point {
            min-height: 115px;

            padding: 18px 15px;

            gap: 10px;
          }


          .point-icon {
            width: 40px;

            height: 40px;
          }

        }


        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 700px) {

          .musharaka-intro {
            padding: 65px 0;
          }


          .musharaka-intro .container {
            padding: 0 18px;
          }


          .intro-grid {
            gap: 45px;
          }


          .intro-image-wrapper {
            min-height: 455px;
          }


          .intro-image {
            height: 410px;

            border-radius: 22px;
          }


          .image-content {
            left: 28px;

            right: 28px;

            bottom: 30px;
          }


          .image-small-label {
            font-size: 9px;
          }


          .image-content p {
            font-size: 14px;
          }


          /* =====================================================
             MOBILE BADGE
          ===================================================== */

          .image-badge {
            right: 8px;

            bottom: 15px;

            padding: 11px 13px;

            gap: 9px;
          }


          .badge-icon {
            width: 38px;

            height: 38px;
          }


          .image-badge strong {
            font-size: 11px;
          }


          .image-badge span {
            font-size: 9px;
          }


          /* =====================================================
             CONTENT
          ===================================================== */

          .intro-content h2 {
            font-size: 36px;

            letter-spacing: -0.8px;
          }


          .description-accent {
            margin-bottom: 24px;
          }


          .intro-description {
            padding-left: 18px;
          }


          .intro-content .intro-lead {
            font-size: 16px;
          }


          .intro-content p {
            font-size: 15px;

            line-height: 1.75;
          }


          /* =====================================================
             MOBILE CARDS
          ===================================================== */

          .intro-points {
            grid-template-columns: 1fr;

            gap: 12px;

            margin-top: 26px;
          }


          .intro-point {
            min-height: 105px;

            padding: 19px 17px;

            gap: 13px;

            border-radius: 16px;
          }


          .point-icon {
            width: 40px;

            height: 40px;

            border-radius: 12px;
          }


          .point-number {
            top: 10px;

            right: 13px;
          }


          .intro-point strong {
            font-size: 13px;
          }


          .intro-point span {
            font-size: 11.5px;
          }


          /* =====================================================
             HIGHLIGHT
          ===================================================== */

          .intro-highlight {
            margin-top: 45px;

            padding: 21px;

            align-items: flex-start;

            gap: 13px;
          }


          .highlight-icon {
            width: 43px;

            height: 43px;

            border-radius: 12px;
          }


          .highlight-text strong {
            font-size: 14px;
          }


          .highlight-text span {
            font-size: 12px;

            line-height: 1.55;
          }

        }


        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 450px) {

          .intro-image {
            height: 380px;
          }


          .intro-image-wrapper {
            min-height: 425px;
          }


          .intro-content h2 {
            font-size: 31px;
          }


          .intro-description {
            padding-left: 15px;
          }


          .intro-point {
            min-height: 100px;

            padding: 17px 15px;
          }


          .point-icon {
            width: 38px;

            height: 38px;
          }


          .intro-highlight {
            gap: 11px;

            padding: 19px;
          }


          .highlight-icon {
            width: 40px;

            height: 40px;
          }

        }

      `}</style>
    </>
  );
}