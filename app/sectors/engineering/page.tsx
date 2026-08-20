
"use client";

import Image from "next/image";

export default function EngineeringPage() {
  return (
    <main className="engineering-page">
      {/* ================= HERO IMAGE ================= */}
      <section className="engineering-hero">
        <Image
          src="/images/eng.png"
          alt="Dearo Engineering "
          fill
          priority
          className="hero-image"
        />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="engineering-content">
        <div className="content-container">

          {/* Title */}
          <h1>Dearo Engineering</h1>

          {/* Introduction */}
          <p className="intro">
            Dearo Engineering & Construction is committed to delivering
            high-quality civil, structural, and infrastructure development
            solutions with a strong focus on quality, innovation, safety,
            and sustainable growth.
          </p>

          {/* ================= INFORMATION ================= */}
          <div className="information-section">
            <h2>Our Engineering & Construction Focus</h2>

            <div className="information-grid">

              {/* 01 */}
              <div className="info-card">
                <div className="number">01</div>

                <div>
                  <h3>Civil Engineering</h3>

                  <p>
                    Delivering reliable civil engineering solutions designed
                    to meet modern infrastructure requirements and long-term
                    development needs.
                  </p>
                </div>
              </div>

              {/* 02 */}
              <div className="info-card">
                <div className="number">02</div>

                <div>
                  <h3>Construction Development</h3>

                  <p>
                    Providing high-quality construction services with
                    attention to structural strength, functionality, and
                    project requirements.
                  </p>
                </div>
              </div>

              {/* 03 */}
              <div className="info-card">
                <div className="number">03</div>

                <div>
                  <h3>Infrastructure Development</h3>

                  <p>
                    Supporting the development of essential infrastructure
                    that contributes to economic growth and community
                    development.
                  </p>
                </div>
              </div>

              {/* 04 */}
              <div className="info-card">
                <div className="number">04</div>

                <div>
                  <h3>Quality & Standards</h3>

                  <p>
                    Maintaining high standards throughout every stage of
                    construction while ensuring quality, durability, and
                    professional project delivery.
                  </p>
                </div>
              </div>

              {/* 05 */}
              <div className="info-card">
                <div className="number">05</div>

                <div>
                  <h3>Safety & Responsibility</h3>

                  <p>
                    Prioritizing workplace safety, responsible construction
                    practices, and compliance with relevant industry
                    standards.
                  </p>
                </div>
              </div>

              {/* 06 */}
              <div className="info-card">
                <div className="number">06</div>

                <div>
                  <h3>Innovation & Future Growth</h3>

                  <p>
                    Adopting modern construction technologies and innovative
                    approaches to create efficient and sustainable solutions
                    for the future.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= CSS ================= */}
      <style jsx>{`
        /* ================= PAGE ================= */

        .engineering-page {
          width: 100%;
          background: #ffffff;
        }

        /* ================= HERO ================= */

        .engineering-hero {
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

        .engineering-content {
          padding: 80px 24px;
          background: #ffffff;
        }

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ================= TITLE ================= */

        .content-container h1 {
          color: #0b1f4b;
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

        /* ================= SECTION TITLE ================= */

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
          background: #f5f7fb;
          border-radius: 12px;
          border: 1px solid #dfe4ed;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(11, 31, 75, 0.1);
          border-color: #0b1f4b;
        }

        /* ================= NUMBER ================= */

        .number {
          width: 40px;
          height: 40px;
          background: #0b1f4b;
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
          color: #0b1f4b;
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

        /* ================= RESPONSIVE ================= */

        @media (max-width: 900px) {
          .information-grid {
            grid-template-columns: 1fr;
          }

          .engineering-hero {
            height: 50vh;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .engineering-hero {
            height: 45vh;
            min-height: 300px;
          }

          .engineering-content {
            padding: 50px 20px;
          }

          .content-container h1 {
            font-size: 2.2rem;
          }

          .information-section h2 {
            font-size: 1.6rem;
          }

          .info-card {
            padding: 20px;
          }
        }
      `}</style>
    </main>
  );
}
