
"use client";

import {
  CheckCircle2,
  Users,
} from "lucide-react";

export default function OurApproach() {
  return (
    <section className="shared-growth-section" id="our-approach">

      <div className="container">

        <div className="shared-growth-grid">

          {/* =====================================================
              LEFT SIDE - CONTENT
          ===================================================== */}

          <div className="shared-growth-content">

            {/* <div className="section-label">
              <span className="section-label-line" />
              OUR APPROACH
            </div> */}

            <h2>
              OUR <span>APPROACH</span>
            </h2>

            <div className="heading-accent" />

            <div className="growth-description">

              <p>
                At <strong>Dearo Islamic Venture Capital Ltd</strong>, we
                believe investment should be more than simply placing
                capital into an opportunity. It can be about
                
                  building partnerships, supporting businesses,
                  creating opportunities, and participating in sustainable
                  growth.
             
                Through Musharaka, we aim to create a relationship where
                investors and businesses can work together toward mutually
                beneficial outcomes while adhering to Islamic finance
                principles.
              </p>

            </div>


            {/* =====================================================
                HIGHLIGHTS
            ===================================================== */}

            <div className="growth-highlights">

              <div className="growth-highlight">
                <div className="highlight-icon">
                  <CheckCircle2 size={19} />
                </div>

                <span>
                  Building meaningful partnerships
                </span>
              </div>


              <div className="growth-highlight">
                <div className="highlight-icon">
                  <CheckCircle2 size={19} />
                </div>

                <span>
                  Supporting business development
                </span>
              </div>


              <div className="growth-highlight">
                <div className="highlight-icon">
                  <CheckCircle2 size={19} />
                </div>

                <span>
                  Creating shared opportunities
                </span>
              </div>


              <div className="growth-highlight">
                <div className="highlight-icon">
                  <CheckCircle2 size={19} />
                </div>

                <span>
                  Promoting sustainable growth
                </span>
              </div>

            </div>

          </div>


          {/* =====================================================
              RIGHT SIDE - IMAGE
          ===================================================== */}

          <div className="growth-image-wrapper">

            <div className="growth-image">

              <img
                src="/images/islamic-women-friends-fist-bumps.png"
                alt="Musharaka Investment Partnership"
              />

              <div className="growth-image-overlay" />

              <div className="growth-image-content">

                <div className="growth-image-label">
                  MUSHARAKA PARTNERSHIP
                </div>

                <div className="growth-image-line" />

                <h3>
                  Shared
                  <br />
                  Prosperity
                </h3>

                {/* <p>
                  Working together to create responsible and mutually
                  beneficial investment opportunities.
                </p> */}

              </div>

            </div>


            {/* =================================================
                FLOATING PARTNERSHIP CARD
            ================================================= */}

            {/* <div className="partnership-badge">

              <div className="partnership-badge-icon">
                <Users size={21} />
              </div>

              <div className="partnership-badge-content">
                <strong>Partnership</strong>
                <span>Shared Success</span>
              </div>

            </div> */}


            {/* =================================================
                DECORATIVE CIRCLES
            ================================================= */}

            {/* <div className="image-decoration image-decoration-one" />
            <div className="image-decoration image-decoration-two" /> */}

          </div>

        </div>

      </div>


      {/* =========================================================
          STYLES
      ========================================================= */}

      <style jsx>{`

        /* =========================================================
           SECTION
        ========================================================= */

        .shared-growth-section {
          position: relative;

          padding: 105px 0;

          background: #f5f8f6;

          overflow: hidden;
        }


        /* =========================================================
           CONTAINER
        ========================================================= */

        .container {
          width: 100%;

          max-width: 1200px;

          margin: 0 auto;

          padding: 0 24px;

          position: relative;

          z-index: 2;
        }


        /* =========================================================
           MAIN GRID
        ========================================================= */

        .shared-growth-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1.02fr)
            minmax(0, 0.98fr);

          gap: 75px;

          align-items: center;
        }


        /* =========================================================
           CONTENT
        ========================================================= */

        .shared-growth-content {
          max-width: 650px;
        }


        /* =========================================================
           SECTION LABEL
        ========================================================= */

        .section-label {
          display: flex;

          align-items: center;

          gap: 12px;

          margin-bottom: 18px;

          color: #16834b;

          font-size: 12px;

          font-weight: 800;

          letter-spacing: 2px;
        }


        .section-label-line {
          width: 40px;

          height: 2px;

          background: #ed1c24;

          border-radius: 10px;
        }


        /* =========================================================
           HEADING
        ========================================================= */

        .shared-growth-content h2 {
          margin: 0;

          color: #071a3a;

          font-size: clamp(38px, 4vw, 55px);

          line-height: 1.08;

          letter-spacing: -1.7px;

          font-weight: 800;
        }


        .shared-growth-content h2 span {
          color: #16834b;
        }


        /* =========================================================
           HEADING ACCENT
        ========================================================= */

        .heading-accent {
          width: 70px;

          height: 4px;

          margin: 25px 0 28px;

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
           DESCRIPTION
        ========================================================= */

        .growth-description {
          padding-left: 22px;

          border-left: 3px solid #dcece3;
        }


        .growth-description p {
          margin: 0 0 18px;

          color: #374151;

          font-size: 16px;

          line-height: 1.85;

          text-align: justify;

          text-justify: inter-word;
        }


        .growth-description p:last-child {
          margin-bottom: 0;
        }


        .growth-description strong {
          color: #071a3a;

          font-weight: 700;
        }


        /* =========================================================
           HIGHLIGHTS
        ========================================================= */

        .growth-highlights {
          display: grid;

          grid-template-columns:
            repeat(2, minmax(0, 1fr));

          gap: 14px 22px;

          margin-top: 30px;
        }


        .growth-highlight {
          display: flex;

          align-items: center;

          gap: 11px;

          min-height: 45px;

          color: #071a3a;

          font-size: 14px;

          font-weight: 600;
        }


        /* =========================================================
           HIGHLIGHT ICON
        ========================================================= */

        .highlight-icon {
          width: 34px;

          height: 34px;

          flex-shrink: 0;

          display: flex;

          align-items: center;

          justify-content: center;

          border-radius: 10px;

          background: #e8f4ed;

          color: #16834b;

          border: 1px solid #cde5d7;
        }


        /* =========================================================
           IMAGE WRAPPER
        ========================================================= */

        .growth-image-wrapper {
          position: relative;

          min-height: 570px;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        /* =========================================================
           IMAGE
        ========================================================= */

        .growth-image {
          position: relative;

          width: 100%;

          height: 520px;

          border-radius: 28px;

          overflow: hidden;

          background: #071a3a;

          box-shadow:
            0 25px 60px rgba(7, 26, 58, 0.18);

          z-index: 2;
        }


        .growth-image img {
          width: 100%;

          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.7s ease;
        }


        .growth-image:hover img {
          transform: scale(1.04);
        }


        /* =========================================================
           IMAGE OVERLAY
        ========================================================= */

        .growth-image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              180deg,
              rgba(7, 26, 58, 0.04) 15%,
              rgba(7, 26, 58, 0.15) 40%,
              rgba(7, 26, 58, 0.92) 100%
            );
        }


        /* =========================================================
           IMAGE CONTENT
        ========================================================= */

        .growth-image-content {
          position: absolute;

          left: 42px;

          right: 42px;

          bottom: 45px;

          z-index: 3;
        }


        .growth-image-label {
          display: inline-block;

          padding: 7px 12px;

          border-radius: 30px;

          background: rgba(22, 131, 75, 0.92);

          color: #ffffff;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1.7px;
        }


        .growth-image-line {
          width: 55px;

          height: 3px;

          margin: 20px 0 16px;

          background: #ed1c24;

          border-radius: 10px;
        }


        .growth-image-content h3 {
          margin: 0 0 15px;

          color: #ffffff;

          font-size: 42px;

          line-height: 1.03;

          font-weight: 800;

          letter-spacing: -1px;
        }


        .growth-image-content p {
          max-width: 390px;

          margin: 0;

          color: rgba(255, 255, 255, 0.82);

          font-size: 14px;

          line-height: 1.7;
        }


        /* =========================================================
           FLOATING BADGE
        ========================================================= */

        .partnership-badge {
          position: absolute;

          right: -28px;

          bottom: 45px;

          z-index: 5;

          display: flex;

          align-items: center;

          gap: 12px;

          padding: 14px 18px;

          background: #ffffff;

          border: 1px solid #dce7e1;

          border-radius: 15px;

          box-shadow:
            0 18px 40px rgba(7, 26, 58, 0.15);
        }


        .partnership-badge-icon {
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


        .partnership-badge-content {
          display: flex;

          flex-direction: column;

          gap: 3px;
        }


        .partnership-badge-content strong {
          color: #071a3a;

          font-size: 13px;

          font-weight: 750;
        }


        .partnership-badge-content span {
          color: #687386;

          font-size: 10px;
        }


        /* =========================================================
           DECORATIVE CIRCLES
        ========================================================= */

        .image-decoration {
          position: absolute;

          border-radius: 50%;

          z-index: 1;
        }


        .image-decoration-one {
          width: 170px;

          height: 170px;

          top: 10px;

          right: -35px;

          background: #16834b;

          opacity: 0.13;
        }


        .image-decoration-two {
          width: 115px;

          height: 115px;

          bottom: 10px;

          left: -35px;

          background: #ed1c24;

          opacity: 0.11;
        }


        /* =========================================================
           TABLET
        ========================================================= */

        @media (max-width: 1000px) {

          .shared-growth-section {
            padding: 85px 0;
          }


          .shared-growth-grid {
            grid-template-columns: 1fr;

            gap: 60px;
          }


          .shared-growth-content {
            max-width: 800px;

            margin: 0 auto;
          }


          .growth-image-wrapper {
            width: 100%;

            max-width: 650px;

            margin: 0 auto;
          }

        }


        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 700px) {

          .shared-growth-section {
            padding: 65px 0;
          }


          .container {
            padding: 0 18px;
          }


          .shared-growth-grid {
            gap: 45px;
          }


          .shared-growth-content h2 {
            font-size: 36px;

            letter-spacing: -0.8px;
          }


          .heading-accent {
            margin-bottom: 24px;
          }


          .growth-description {
            padding-left: 17px;
          }


          .growth-description p {
            font-size: 15px;

            line-height: 1.8;
          }


          /* =====================================================
             MOBILE HIGHLIGHTS
          ===================================================== */

          .growth-highlights {
            grid-template-columns: 1fr;

            gap: 10px;

            margin-top: 25px;
          }


          .growth-highlight {
            font-size: 13px;
          }


          /* =====================================================
             MOBILE IMAGE
          ===================================================== */

          .growth-image-wrapper {
            min-height: 455px;
          }


          .growth-image {
            height: 420px;

            border-radius: 22px;
          }


          .growth-image-content {
            left: 28px;

            right: 28px;

            bottom: 32px;
          }


          .growth-image-content h3 {
            font-size: 36px;
          }


          .growth-image-content p {
            font-size: 13px;
          }


          .partnership-badge {
            right: 8px;

            bottom: 15px;

            padding: 11px 13px;

            gap: 9px;
          }


          .partnership-badge-icon {
            width: 38px;

            height: 38px;
          }


          .partnership-badge-content strong {
            font-size: 11px;
          }


          .partnership-badge-content span {
            font-size: 9px;
          }

        }


        /* =========================================================
           SMALL MOBILE
        ========================================================= */

        @media (max-width: 450px) {

          .shared-growth-content h2 {
            font-size: 31px;
          }


          .growth-image {
            height: 390px;
          }


          .growth-image-wrapper {
            min-height: 425px;
          }


          .growth-image-content h3 {
            font-size: 32px;
          }


          .growth-image-content {
            left: 24px;

            right: 24px;

            bottom: 28px;
          }

        }

      `}</style>

    </section>
  );
}

