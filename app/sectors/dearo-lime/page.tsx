
"use client";

import Image from "next/image";

export default function DearoLimePage() {
  return (
    <main className="lime-page">
      {/* ================= HERO IMAGE ================= */}
      <section className="lime-hero">
        <Image
          src="/images/lime.jpg"
          alt="Dearo Lime"
          fill
          priority
          className="hero-image"
        />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="lime-content">
        <div className="content-container">

          {/* Title */}
          <h1>Dearo Lime</h1>

          {/* Introduction */}
          <p className="intro">
            Dearo Lime is focused on producing and supplying high-quality
            lime products for local and international markets. With a strong
            focus on quality, reliability, and sustainable growth, Dearo Lime
            aims to expand Sri Lankan lime products into global markets.
          </p>

          {/* ================= INFORMATION ================= */}
          <div className="information-section">
            <h2>Our Lime Business Focus</h2>

            <div className="information-grid">

              {/* 01 */}
              <div className="info-card">
                <div className="number">01</div>

                <div>
                  <h3>Quality Lime Products</h3>

                  <p>
                    Producing high-quality lime products suitable for
                    agricultural, industrial, construction, and other
                    commercial applications.
                  </p>
                </div>
              </div>

              {/* 02 */}
              <div className="info-card">
                <div className="number">02</div>

                <div>
                  <h3>International Exports</h3>

                  <p>
                    Expanding Sri Lankan lime products into international
                    markets by developing reliable export opportunities
                    across different countries.
                  </p>
                </div>
              </div>

              {/* 03 */}
              <div className="info-card">
                <div className="number">03</div>

                <div>
                  <h3>Global Market Development</h3>

                  <p>
                    Building long-term relationships with international
                    customers and creating sustainable opportunities in
                    global lime markets.
                  </p>
                </div>
              </div>

              {/* 04 */}
              <div className="info-card">
                <div className="number">04</div>

                <div>
                  <h3>Reliable Supply</h3>

                  <p>
                    Maintaining a dependable supply chain to meet customer
                    requirements and support consistent product availability
                    for export markets.
                  </p>
                </div>
              </div>

              {/* 05 */}
              <div className="info-card">
                <div className="number">05</div>

                <div>
                  <h3>Responsible Production</h3>

                  <p>
                    Focusing on responsible production practices and
                    efficient resource utilization while supporting
                    long-term business sustainability.
                  </p>
                </div>
              </div>

              {/* 06 */}
              <div className="info-card">
                <div className="number">06</div>

                <div>
                  <h3>Strategic Location</h3>

                  <p>
                    Our Dearo Lime office is located in Dehiattakandiya,
                    supporting our operations and business activities from
                    the heart of the region.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= EXPORT SECTION ================= */}
          <div className="export-section">

            <div className="export-content">
              <span className="export-label">
                FROM SRI LANKA TO THE WORLD
              </span>

              <h2>Taking Sri Lankan Lime to Global Markets</h2>

              <p>
                Dearo Lime aims to create a strong presence in international
                markets by supplying quality lime products to customers
                around the world.
              </p>

              <p>
                Through reliable production, quality-focused operations, and
                international partnerships, we are working towards building
                Sri Lankan lime as a trusted export product.
              </p>
            </div>

            <div className="location-card">
              <div className="location-icon">
                📍
              </div>

              <h3>Dearo Lime Office</h3>

              <p>
                Dehiattakandiya
                <br />
                Sri Lanka
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CSS ================= */}
      <style jsx>{`
        /* ================= PAGE ================= */

        .lime-page {
          width: 100%;
          background: #ffffff;
        }

        /* ================= HERO ================= */

        .lime-hero {
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

        .lime-content {
          padding: 80px 24px 100px;
          background: #ffffff;
        }

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ================= TITLE ================= */

        .content-container > h1 {
          color: #687d24;
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
          background: #f7f9f0;
          border-radius: 12px;
          border: 1px solid #e1e6d1;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(104, 125, 36, 0.12);
          border-color: #687d24;
        }

        /* ================= NUMBER ================= */

        .number {
          width: 40px;
          height: 40px;
          background: #687d24;
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
          color: #687d24;
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
          background: #687d24;
          border-radius: 20px;
          overflow: hidden;
        }

        .export-label {
          display: inline-block;
          margin-bottom: 12px;
          color: #e7edc9;
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
          color: #f0f3df;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        /* ================= LOCATION CARD ================= */

        .location-card {
          padding: 35px 25px;
          text-align: center;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
        }

        .location-icon {
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

        .location-card h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 1.3rem;
        }

        .location-card p {
          margin: 0;
          color: #edf1d9;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .information-grid {
            grid-template-columns: 1fr;
          }

          .lime-hero {
            height: 50vh;
          }

          .export-section {
            grid-template-columns: 1fr;
            gap: 35px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .lime-hero {
            height: 45vh;
            min-height: 300px;
          }

          .lime-content {
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
