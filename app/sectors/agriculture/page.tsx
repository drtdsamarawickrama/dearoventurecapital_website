
"use client";

import Image from "next/image";

export default function AgriculturePage() {
  return (
    <main className="agriculture-page">
      {/* ================= HERO IMAGE ================= */}
      <section className="agriculture-hero">
        <Image
          src="/images/ag.jpeg"
          alt="Dearo Agriculture"
          fill
          priority
          className="hero-image"
        />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="agriculture-content">
        <div className="content-container">
          {/* Title */}
          <h1>Dearo Agriculture</h1>

          {/* Introduction */}
          <p className="intro">
            Dearo Agriculture is committed to developing sustainable and
            innovative agricultural solutions that contribute to food security,
            economic growth, and environmental sustainability.
          </p>

          {/* ================= INFORMATION ================= */}
          <div className="information-section">
            <h2>Our Agricultural Focus</h2>

            <div className="information-grid">
              <div className="info-card">
                <div className="number">01</div>
                <div>
                  <h3>Sustainable Farming</h3>
                  <p>
                    Promoting environmentally responsible farming practices that
                    protect natural resources while improving productivity.
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="number">02</div>
                <div>
                  <h3>Modern Agricultural Technology</h3>
                  <p>
                    Using modern technologies to improve efficiency, productivity,
                    and agricultural quality.
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="number">03</div>
                <div>
                  <h3>Plantation Development</h3>
                  <p>
                    Supporting sustainable plantation operations with long-term
                    growth and value creation.
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="number">04</div>
                <div>
                  <h3>Quality Agricultural Products</h3>
                  <p>
                    Producing high-quality agricultural products that meet market
                    standards.
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="number">05</div>
                <div>
                  <h3>Supporting Local Communities</h3>
                  <p>
                    Creating opportunities for farmers and supporting rural
                    development.
                  </p>
                </div>
              </div>

              <div className="info-card">
                <div className="number">06</div>
                <div>
                  <h3>Future Growth</h3>
                  <p>
                    Building a sustainable agricultural future through innovation
                    and responsible investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CSS ================= */}
      <style jsx>{`
        .agriculture-page {
          width: 100%;
          background: #fff;
        }

        /* HERO FIX (IMPORTANT) */
        .agriculture-hero {
          position: relative;
          width: 100%;
          height: 70vh;
          min-height: 400px;
          overflow: hidden;
        }

        .hero-image {
          object-fit: cover;
        }

        .agriculture-content {
          padding: 80px 24px;
        }

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        h1 {
          color: #2e7d32;
          font-size: 3rem;
          margin-bottom: 15px;
        }

        .intro {
          color: #555;
          line-height: 1.8;
          margin-bottom: 60px;
          max-width: 900px;
        }

        h2 {
          margin-bottom: 30px;
          color: #222;
        }

        .information-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .info-card {
          display: flex;
          gap: 15px;
          padding: 25px;
          background: #f7faf5;
          border-radius: 12px;
          border: 1px solid #e0e0e0;
        }

        .number {
          width: 40px;
          height: 40px;
          background: #2e7d32;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-weight: bold;
          flex-shrink: 0;
        }

        h3 {
          margin: 0 0 8px;
          color: #2e7d32;
        }

        p {
          margin: 0;
          color: #666;
          line-height: 1.6;
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .information-grid {
            grid-template-columns: 1fr;
          }

          .agriculture-hero {
            height: 50vh;
          }
        }

        @media (max-width: 600px) {
          h1 {
            font-size: 2.2rem;
          }

          .agriculture-content {
            padding: 50px 20px;
          }
        }
      `}</style>
    </main>
  );
}
