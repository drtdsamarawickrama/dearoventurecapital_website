
"use client";

import Image from "next/image";

export default function EducationPage() {
  return (
    <main className="education-page">
      {/* ================= HERO IMAGE ================= */}
      <section className="education-hero">
        <Image
          src="/images/ed.png"
          alt="Dearo Education"
          fill
          priority
          className="hero-image"
        />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="education-content">
        <div className="content-container">

          {/* Title */}
          <h1>Dearo Education</h1>

          {/* Introduction */}
          <p className="intro">
            Dearo Education is dedicated to supporting the educational
            development of students connected to Dearo customers and
            communities. Through accessible digital learning solutions,
            students can access educational resources, practice their
            knowledge, and develop the skills needed for their academic
            journey.
          </p>

          {/* ================= INFORMATION ================= */}
          <div className="information-section">
            <h2>Our Education Focus</h2>

            <div className="information-grid">

              {/* 01 */}
              <div className="info-card">
                <div className="number">01</div>

                <div>
                  <h3>Student Support</h3>

                  <p>
                    Providing educational support and learning opportunities
                    for students of Dearo customers, helping them improve
                    their academic knowledge and confidence.
                  </p>
                </div>
              </div>

              {/* 02 */}
              <div className="info-card">
                <div className="number">02</div>

                <div>
                  <h3>Mobile Learning App</h3>

                  <p>
                    Our mobile application provides students with convenient
                    access to learning materials and educational resources
                    anytime and anywhere.
                  </p>
                </div>
              </div>

              {/* 03 */}
              <div className="info-card">
                <div className="number">03</div>

                <div>
                  <h3>Educational Notes</h3>

                  <p>
                    Providing organized and easy-to-understand study notes
                    that help students revise lessons and strengthen their
                    understanding of important subjects.
                  </p>
                </div>
              </div>

              {/* 04 */}
              <div className="info-card">
                <div className="number">04</div>

                <div>
                  <h3>Interactive Quizzes</h3>

                  <p>
                    Students can practice their knowledge through quizzes
                    designed to support revision, identify knowledge gaps,
                    and improve exam preparation.
                  </p>
                </div>
              </div>

              {/* 05 */}
              <div className="info-card">
                <div className="number">05</div>

                <div>
                  <h3>Accessible Learning Resources</h3>

                  <p>
                    Making useful educational content easier to access through
                    digital learning resources designed for students'
                    different learning needs.
                  </p>
                </div>
              </div>

              {/* 06 */}
              <div className="info-card">
                <div className="number">06</div>

                <div>
                  <h3>Future-Ready Students</h3>

                  <p>
                    Encouraging continuous learning, digital skills, and
                    personal development to help students prepare for future
                    academic and career opportunities.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= MOBILE APP SECTION ================= */}
          <div className="app-section">

            <div className="app-content">
              <span className="app-label">DIGITAL LEARNING</span>

              <h2>Learn Anytime, Anywhere</h2>

              <p>
                The Dearo Education mobile app brings learning closer to
                students by providing convenient access to educational notes,
                quizzes, study materials, and other learning resources from
                one platform.
              </p>

              <p>
                Designed to make learning more accessible and engaging, the
                platform allows students to continue their educational
                journey beyond the traditional classroom.
              </p>
            </div>

            <div className="app-highlight">
              <div className="app-icon">
                📚
              </div>

              <h3>Dearo Education App</h3>

              <p>
                Notes • Quizzes • Learning Resources • Student Support
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= CSS ================= */}
      <style jsx>{`
        /* ================= PAGE ================= */

        .education-page {
          width: 100%;
          background: #ffffff;
        }

        /* ================= HERO ================= */

        .education-hero {
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

        .education-content {
          padding: 80px 24px 100px;
          background: #ffffff;
        }

        .content-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ================= TITLE ================= */

        .content-container > h1 {
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

        /* ================= APP SECTION ================= */

        .app-section {
          margin-top: 80px;
          padding: 50px;
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: 50px;
          align-items: center;
          background: #0b1f4b;
          border-radius: 20px;
          overflow: hidden;
        }

        .app-label {
          display: inline-block;
          margin-bottom: 12px;
          color: #8fb3e8;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .app-content h2 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 2rem;
          font-weight: 700;
        }

        .app-content p {
          margin-bottom: 15px;
          color: #d9e1ef;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        /* ================= APP HIGHLIGHT ================= */

        .app-highlight {
          padding: 35px 25px;
          text-align: center;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 16px;
        }

        .app-icon {
          width: 70px;
          height: 70px;
          margin: 0 auto 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          border-radius: 18px;
          font-size: 2rem;
        }

        .app-highlight h3 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: 1.3rem;
        }

        .app-highlight p {
          margin: 0;
          color: #c8d3e5;
          line-height: 1.6;
          font-size: 0.9rem;
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .information-grid {
            grid-template-columns: 1fr;
          }

          .education-hero {
            height: 50vh;
          }

          .app-section {
            grid-template-columns: 1fr;
            gap: 35px;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .education-hero {
            height: 45vh;
            min-height: 300px;
          }

          .education-content {
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

          .app-section {
            margin-top: 60px;
            padding: 30px 22px;
            border-radius: 15px;
          }

          .app-content h2 {
            font-size: 1.6rem;
          }
        }
      `}</style>
    </main>
  );
}
