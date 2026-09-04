"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, TrendingUp, Users } from "lucide-react";

export default function JoinDearoPage() {
  const router = useRouter();

  return (
    <>
      <main className="join-page">

        {/* ================= TOP NAVY SECTION ================= */}
        <section className="join-hero">
          <div className="hero-content">

            <p className="hero-small-text">
              DEARO VENTURE CAPITAL
            </p>

            <h1>
              JOIN <span>DEARO</span>
            </h1>

            <p className="hero-description">
              Be part of the Dearo community and discover
              opportunities designed to help you grow,
              connect, and move forward.
            </p>

          </div>
        </section>

        {/* ================= CARDS SECTION ================= */}
        <section className="join-options">

          <div className="section-heading">

            <p>GET STARTED</p>

            <h2>Choose Your Path</h2>

            <span>
              Select the option that best suits you.
            </span>

          </div>

          <div className="cards-container">

            {/* ================= INVESTOR CARD ================= */}
            <div
              className="join-card"
              onClick={() => router.push("../portal/investor/application/")}
            >

              <div className="card-image-wrapper">

                <Image
                  src="/images/investor1.jpg"
                  alt="Apply for Investor"
                  fill
                  priority
                  className="card-image"
                  sizes="
                    (max-width: 480px) 100vw,
                    (max-width: 768px) 90vw,
                    50vw
                  "
                />

                <div className="card-icon">
                  <TrendingUp size={27} />
                </div>

              </div>

              <div className="card-content">

                <p className="card-label">
                  INVESTMENT
                </p>

                <h3>
                  Apply for Investor
                </h3>

                <p className="card-description">
                  Explore investment opportunities with
                  Dearo and become part of our growing
                  network.
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push("../portal/investor/application/");
                  }}
                >
                  Apply as Investor

                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

            {/* ================= CUSTOMER CARD ================= */}
            <div
              className="join-card"
              onClick={() => router.push("../portal/customer/application/")}
            >

              <div className="card-image-wrapper">

                <Image
                  src="/images/customer.jpg"
                  alt="Apply as Customer"
                  fill
                  className="card-image"
                  sizes="
                    (max-width: 480px) 100vw,
                    (max-width: 768px) 90vw,
                    50vw
                  "
                />

                <div className="card-icon">
                  <Users size={27} />
                </div>

              </div>

              <div className="card-content">

                <p className="card-label">
                  CUSTOMER
                </p>

                <h3>
                  Apply for Facility
                </h3>

                <p className="card-description">
                  Join Dearo as a customer and explore
                  our products, services, and
                  opportunities.
                </p>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    router.push("../portal/customer/application/");
                  }}
                >
                  Apply for Facility

                  <ArrowRight size={18} />
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

      <style jsx>{`

        /* =========================================
           MAIN PAGE
        ========================================= */

        .join-page {
          width: 100%;
          min-height: 100vh;
          background: #ffffff;
          color: #071a3d;
          overflow-x: hidden;
          box-sizing: border-box;
        }

        /* =========================================
           HERO
        ========================================= */

        .join-hero {
          position: relative;
          width: 100%;
          min-height: 350px;

          display: flex;
          align-items: center;
          justify-content: center;

          padding: 70px 20px;

          overflow: hidden;

          background: #071a3d;

          text-align: center;
          box-sizing: border-box;
        }

        .join-hero::before {
          content: "";

          position: absolute;

          width: 360px;
          height: 360px;

          top: -190px;
          left: -120px;

          border: 1px solid rgba(255, 255, 255, 0.08);

          border-radius: 50%;
        }

        .join-hero::after {
          content: "";

          position: absolute;

          width: 450px;
          height: 450px;

          right: -180px;
          bottom: -250px;

          border: 1px solid rgba(255, 255, 255, 0.08);

          border-radius: 50%;
        }

        .hero-content {
          position: relative;

          z-index: 2;

          width: 100%;
          max-width: 750px;

          margin: 0 auto;
        }

        .hero-small-text {
          margin: 0 0 15px;

          color: rgba(255, 255, 255, 0.75);

          font-size: 13px;
          font-weight: 700;

          letter-spacing: 3px;
        }

        .hero-content h1 {
          margin: 0;

          color: #ffffff;

          font-size: clamp(42px, 7vw, 72px);

          line-height: 1.1;

          font-weight: 700;
        }

        .hero-content h1 span {
          color: #ffffff;
        }

        .hero-description {
          max-width: 650px;

          margin: 22px auto 0;

          color: rgba(255, 255, 255, 0.82);

          font-size: 18px;

          line-height: 1.7;
        }

        /* =========================================
           OPTIONS SECTION
        ========================================= */

        .join-options {
          width: 100%;

          max-width: 1200px;

          margin: 0 auto;

          padding: 75px 20px 100px;

          box-sizing: border-box;
        }

        /* =========================================
           SECTION HEADING
        ========================================= */

        .section-heading {
          margin-bottom: 45px;

          text-align: center;
        }

        .section-heading p {
          margin: 0 0 10px;

          color: #071a3d;

          font-size: 13px;

          font-weight: 700;

          letter-spacing: 2px;
        }

        .section-heading h2 {
          margin: 0 0 12px;

          color: #071a3d;

          font-size: clamp(30px, 4vw, 44px);

          line-height: 1.2;

          font-weight: 700;
        }

        .section-heading span {
          color: #666666;

          font-size: 16px;
        }

        /* =========================================
           CARDS CONTAINER
        ========================================= */

        .cards-container {
          width: 100%;

          max-width: 1050px;

          margin: 0 auto;

          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 30px;
        }

        /* =========================================
           CARD
        ========================================= */

        .join-card {
          width: 100%;

          overflow: hidden;

          background: #ffffff;

          border: 1px solid #e5e8ee;

          border-radius: 18px;

          box-shadow:
            0 10px 35px rgba(7, 26, 61, 0.08);

          cursor: pointer;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;

          box-sizing: border-box;
        }

        .join-card:hover {
          transform: translateY(-8px);

          box-shadow:
            0 20px 45px rgba(7, 26, 61, 0.16);
        }

        /* =========================================
           RESPONSIVE IMAGE
        ========================================= */

        .card-image-wrapper {
          position: relative;

          width: 100%;

          /*
            Keeps the image proportional on
            desktop, tablet and mobile.
          */
          aspect-ratio: 16 / 9;

          overflow: hidden;

          background: #f5f5f5;
        }

        .card-image {
          width: 100% !important;
          height: 100% !important;

          object-fit: cover;

          object-position: center;

          display: block;

          transition:
            transform 0.5s ease;
        }

        .join-card:hover .card-image {
          transform: scale(1.03);
        }

        /* =========================================
           CARD ICON
        ========================================= */

        .card-icon {
          position: absolute;

          left: 25px;
          bottom: 25px;

          width: 58px;
          height: 58px;

          display: flex;

          align-items: center;
          justify-content: center;

          color: #071a3d;

          background: #ffffff;

          border-radius: 50%;

          box-shadow:
            0 8px 20px rgba(0, 0, 0, 0.15);

          z-index: 2;
        }

        /* =========================================
           CARD CONTENT
        ========================================= */

        .card-content {
          padding: 30px;

          box-sizing: border-box;
        }

        .card-label {
          margin: 0 0 8px;

          color: #718096;

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 2px;
        }

        .card-content h3 {
          margin: 0 0 12px;

          color: #071a3d;

          font-size: 28px;

          line-height: 1.3;

          font-weight: 700;
        }

        .card-description {
          margin: 0 0 25px;

          color: #666666;

          font-size: 15px;

          line-height: 1.7;
        }

        /* =========================================
           BUTTON
        ========================================= */

        .card-content button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 10px;

          padding: 13px 20px;

          color: #ffffff;

          background: #071a3d;

          border: none;

          border-radius: 8px;

          font-size: 14px;

          font-weight: 600;

          cursor: pointer;

          transition:
            background 0.3s ease,
            gap 0.3s ease;
        }

        .card-content button:hover {
          background: #102c60;

          gap: 15px;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 900px) {

          .cards-container {
            gap: 22px;
          }

          .card-content {
            padding: 25px;
          }

          .card-content h3 {
            font-size: 24px;
          }

        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 768px) {

          .join-hero {
            min-height: 310px;

            padding: 60px 20px;
          }

          .hero-description {
            font-size: 16px;
          }

          .join-options {
            padding: 60px 18px 75px;
          }

          .cards-container {
            grid-template-columns: 1fr;

            max-width: 600px;

            gap: 25px;
          }

          /*
            Image automatically stays proportional
            because of aspect-ratio.
          */
          .card-image-wrapper {
            aspect-ratio: 16 / 9;
          }

        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {

          .join-hero {
            min-height: 285px;

            padding: 50px 18px;
          }

          .hero-small-text {
            font-size: 11px;

            letter-spacing: 2px;
          }

          .hero-content h1 {
            font-size: 42px;
          }

          .hero-description {
            margin-top: 18px;

            font-size: 15px;

            line-height: 1.6;
          }

          .join-options {
            padding: 45px 15px 60px;
          }

          .section-heading {
            margin-bottom: 30px;
          }

          .section-heading h2 {
            font-size: 30px;
          }

          .section-heading span {
            font-size: 14px;
          }

          .card-image-wrapper {
            aspect-ratio: 16 / 9;
          }

          .card-icon {
            left: 18px;
            bottom: 18px;

            width: 52px;
            height: 52px;
          }

          .card-content {
            padding: 24px;
          }

          .card-content h3 {
            font-size: 24px;
          }

          .card-description {
            font-size: 14px;
          }

          .card-content button {
            width: 100%;
          }

        }

        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 360px) {

          .hero-content h1 {
            font-size: 36px;
          }

          .hero-description {
            font-size: 14px;
          }

          .card-image-wrapper {
            aspect-ratio: 16 / 9;
          }

          .card-content {
            padding: 20px;
          }

          .card-content h3 {
            font-size: 22px;
          }

        }

        /* =========================================
           TOUCH DEVICES
        ========================================= */

        @media (hover: none) {

          .join-card:hover {
            transform: none;

            box-shadow:
              0 10px 35px rgba(7, 26, 61, 0.08);
          }

          .join-card:hover .card-image {
            transform: none;
          }

          .card-content button:hover {
            background: #071a3d;

            gap: 10px;
          }

        }

      `}</style>
    </>
  );
}