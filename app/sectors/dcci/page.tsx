
"use client";

import Image from "next/image";

export default function DCCIPage() {
  return (
    <main className="dcci-page">
      {/* ================= HERO IMAGE ================= */}
      <section className="dcci-hero">
        <Image
          src="/images/dcc.jpg"
          alt="DCCI - From Our Waters to the World"
          fill
          priority
          className="hero-image"
        />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="dcci-content">
        <div className="content-container">

          {/* Title */}
          <h1>DCCI – From Our Waters to the World</h1>

          {/* Introduction */}
          <p className="intro">
            DCCI is focused on bringing high-quality seafood from Sri Lankan
            waters to international markets. With a strong commitment to
            quality, responsible sourcing, and international standards, DCCI
            aims to connect Sri Lankan seafood with customers around the world.
          </p>

          {/* ================= INFORMATION ================= */}
          <div className="information-section">
            <h2>Our Seafood Business Focus</h2>

            <div className="information-grid">

              {/* 01 */}
              <div className="info-card">
                <div className="number">01</div>

                <div>
                  <h3>Quality Seafood</h3>

                  <p>
                    Providing high-quality seafood products while maintaining
                    careful handling and processing practices throughout the
                    supply chain.
                  </p>
                </div>
              </div>

              {/* 02 */}
              <div className="info-card">
                <div className="number">02</div>

                <div>
                  <h3>From Sri Lankan Waters</h3>

                  <p>
                    Connecting the richness of Sri Lankan waters with
                    international customers by bringing locally sourced
                    seafood to global markets.
                  </p>
                </div>
              </div>

              {/* 03 */}
              <div className="info-card">
                <div className="number">03</div>

                <div>
                  <h3>International Standards</h3>

                  <p>
                    Focusing on quality and processing practices that support
                    international market requirements and customer
                    expectations.
                  </p>
                </div>
              </div>

              {/* 04 */}
              <div className="info-card">
                <div className="number">04</div>

                <div>
                  <h3>Global Export Markets</h3>

                  <p>
                    Developing export opportunities and building long-term
                    relationships with customers across international
                    seafood markets.
                  </p>
                </div>
              </div>

              {/* 05 */}
              <div className="info-card">
                <div className="number">05</div>

                <div>
                  <h3>Responsible Sourcing</h3>

                  <p>
                    Supporting responsible sourcing practices while creating
                    sustainable value from Sri Lanka's marine resources.
                  </p>
                </div>
              </div>

              {/* 06 */}
              <div className="info-card">
                <div className="number">06</div>

                <div>
                  <h3>Connecting Sri Lanka to the World</h3>

                  <p>
                    Creating a bridge between Sri Lankan seafood producers and
                    international markets while promoting the country's
                    seafood potential globally.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= EXPORT SECTION ================= */}
          <div className="export-section">

            <div className="export-content">
              <span className="export-label">
                FROM OUR WATERS TO THE WORLD
              </span>

              <h2>Bringing Sri Lankan Seafood to Global Markets</h2>

              <p>
                DCCI is committed to developing Sri Lanka's seafood export
                potential by connecting quality seafood with international
                customers.
              </p>

              <p>
                Through quality-focused operations, responsible sourcing, and
                international partnerships, DCCI works towards creating a
                trusted Sri Lankan seafood brand for global markets.
              </p>
            </div>

            <div className="export-highlight">
              <div className="export-icon">
                🌊
              </div>

              <h3>From Our Waters</h3>

              <p>
                Sri Lankan Seafood
                <br />
                Global Markets
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CSS ================= */}
      <style jsx>{`
        /* ================= PAGE ================= */

        .dcci-page {
          width: 100%;
          background: #ffffff;
        }

        /* ================= HERO ================= */

        .dcci-hero {
          position: relative;
          width: 100%;
          height: 70vh;
          min-height: 400px;
          overflow: hidden;
        }

        .hero-image {
          object-fit: cover;
        }

        /* ================= CONTENT ================= */

        .dcci-content {
          padding: 80px 24px 100px;
          background: #ffffff;
        }

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ================= TITLE ================= */

        .content-container > h1 {
          color: #075985;
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        /* ================= INTRO ================= */

        .intro {
          color: #555;
          line-height: 1.8;
          margin-bottom: 60px;
          max-width: 900px;
          font-size: 1rem;
        }

        /* ================= INFORMATION ================= */

        .information-section h2 {
          margin-bottom: 30px;
          color: #222;
          font-size: 2rem;
          font-weight: 700;
        }

        /* ================= GRID ================= */

        .information-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        /* ================= INFO CARD ================= */

        .info-card {
          display: flex;
          gap: 15px;
          padding: 25px;
          background: #f2f8fb;
          border-radius: 12px;
          border: 1px solid #d7e7ee;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(7, 89, 133, 0.12);
          border-color: #075985;
        }

        /* ================= NUMBER ================= */

        .number {
          width: 40px;
          height: 40px;
          background: #075985;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: bold;
          flex-shrink: 0;
        }

        /* ================= CARD TITLE ================= */

        .info-card h3 {
          margin: 0 0 8px;
          color: #075985;
          font-size: 1.15rem;
          font-weight: 600;
        }

        /* ================= CARD TEXT ================= */

        .info-card p {
          margin: 0;
          color: #666;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* ================= EXPORT SECTION ================= */

        .export-section {
          margin-top: 80px;
          padding: 50px;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 50px;
          align-items: center;
          background: #075985;
          border-radius: 20px;
          overflow: hidden;
        }

        .export-label {
          display: inline-block;
          margin-bottom: 12px;
          color: #a9d8ed;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .export-content h2 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 2rem;
          font-weight: 700;
        }

        .export-content p {
          margin-bottom: 15px;
          color: #e0f0f7;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        /* ================= EXPORT HIGHLIGHT ================= */

        .export-highlight {
          padding: 35px 25px;
          text-align: center;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
        }

        .export-icon {
          width: 65px;
          height: 65px;
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border-radius: 50%;
          font-size: 1.8rem;
        }

        .export-highlight h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 1.3rem;
        }

        .export-highlight p {
          margin: 0;
          color: #d8edf5;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .information-grid {
            grid-template-columns: 1fr;
          }

          .dcci-hero {
            height: 50vh;
          }

          .export-section {
            grid-template-columns: 1fr;
            gap: 35px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .dcci-hero {
            height: 45vh;
            min-height: 300px;
          }

          .dcci-content {
            padding: 50px 20px 70px;
          }

          .content-container > h1 {
            font-size: 2.2rem;
          }

          .information-section h2 {
            font-size: 1.6rem;
          }

          .info-card {
            padding: 20px;
          }

          .export-section {
            margin-top: 60px;
            padding: 30px 22px;
            border-radius: 15px;
          }

          .export-content h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </main>
  );
}
