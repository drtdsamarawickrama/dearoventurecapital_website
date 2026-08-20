
"use client";

import Image from "next/image";

export default function ITSolutionsPage() {
  return (
    <main className="it-page">
      {/* ================= HERO IMAGE ================= */}
      <section className="it-hero">
        <Image
          src="/images/it.jpg"
          alt="Dearo IT Solutions"
          fill
          priority
          className="hero-image"
        />
      </section>

      {/* ================= CONTENT ================= */}
      <section className="it-content">
        <div className="content-container">

          {/* Title */}
          <h1>Dearo IT Solutions</h1>

          {/* Introduction */}
          <p className="intro">
            Dearo IT Solutions focuses on building smart, secure, and scalable
            digital solutions that support businesses, customers, and
            communities. Through modern technology and digital platforms,
            Dearo aims to make financial and business services more accessible,
            efficient, and convenient.
          </p>

          {/* ================= INFORMATION ================= */}
          <div className="information-section">
            <h2>Our Digital Solutions</h2>

            <div className="information-grid">

              {/* 01 */}
              <div className="info-card">
                <div className="number">01</div>

                <div>
                  <h3>Dearo Digital Mobile App</h3>

                  <p>
                    Dearo Digital provides customers with convenient access
                    to financial services through a mobile application,
                    including loans, investments, gold loans, insurance,
                    inquiries, and account information.
                  </p>
                </div>
              </div>

              {/* 02 */}
              <div className="info-card">
                <div className="number">02</div>

                <div>
                  <h3>Digital Financial Services</h3>

                  <p>
                    Developing digital solutions that make financial
                    transactions, customer services, inquiries, and account
                    management easier and more accessible.
                  </p>
                </div>
              </div>

              {/* 03 */}
              <div className="info-card">
                <div className="number">03</div>

                <div>
                  <h3>Dearo Investment Platform</h3>

                  <p>
                    Supporting the digital presence of Dearo Investment and
                    providing customers with access to information about
                    financial and investment services through a modern web
                    platform.
                  </p>
                </div>
              </div>

              {/* 04 */}
              <div className="info-card">
                <div className="number">04</div>

                <div>
                  <h3>DBF Investment Platform</h3>

                  <p>
                    Providing digital infrastructure and web solutions to
                    support DBF Investment's online presence and customer
                    engagement.
                  </p>
                </div>
              </div>

              {/* 05 */}
              <div className="info-card">
                <div className="number">05</div>

                <div>
                  <h3>Smart Business Solutions</h3>

                  <p>
                    Creating practical digital solutions that help businesses
                    improve their operations, customer experience, information
                    management, and overall efficiency.
                  </p>
                </div>
              </div>

              {/* 06 */}
              <div className="info-card">
                <div className="number">06</div>

                <div>
                  <h3>Innovation & Future Technology</h3>

                  <p>
                    Exploring modern technologies and continuously improving
                    digital platforms to create secure, scalable, and
                    future-ready solutions.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* ================= DIGITAL PRODUCTS ================= */}
          <div className="products-section">

            <div className="products-header">
              <span className="products-label">
                OUR DIGITAL PRODUCTS
              </span>

              <h2>Technology That Connects People & Businesses</h2>

              <p>
                Dearo IT Solutions develops and supports digital platforms
                that connect customers with financial and business services
                through convenient online experiences.
              </p>
            </div>

            <div className="products-grid">

              {/* Dearo Digital */}
              <a
                href="https://play.google.com/store/apps/details?id=com.dearodigital.dearo_frontend&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="product-card"
              >
                <div className="product-icon">
                  📱
                </div>

                <h3>Dearo Digital</h3>

                <p>
                  A mobile application that provides convenient access to
                  financial services, inquiries, account information,
                  investments, loans, insurance, and receipt management.
                </p>

                <span className="product-link">
                  View on Google Play →
                </span>
              </a>

              {/* Dearo Investment */}
              <a
                href="https://www.dearoinvestment.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="product-card"
              >
                <div className="product-icon">
                  🌐
                </div>

                <h3>Dearo Investment</h3>

                <p>
                  A digital platform supporting Dearo Investment's financial
                  services, business solutions, customer services, and
                  investment opportunities.
                </p>

                <span className="product-link">
                  Visit Website →
                </span>
              </a>

              {/* DBF Investment */}
              <a
                href="https://dbfinvestment.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="product-card"
              >
                <div className="product-icon">
                  💻
                </div>

                <h3>DBF Investment</h3>

                <p>
                  A dedicated web platform supporting DBF Investment's digital
                  presence and providing customers with convenient access to
                  its online services and information.
                </p>

                <span className="product-link">
                  Visit Website →
                </span>
              </a>

            </div>
          </div>

        </div>
      </section>

      {/* ================= CSS ================= */}
      <style jsx>{`
        /* ================= PAGE ================= */

        .it-page {
          width: 100%;
          background: #ffffff;
        }

        /* ================= HERO ================= */

        .it-hero {
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

        .it-content {
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
          background: #f4f6fa;
          border-radius: 12px;
          border: 1px solid #dce2eb;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .info-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(11, 31, 75, 0.12);
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

        /* ================= PRODUCTS SECTION ================= */

        .products-section {
          margin-top: 80px;
          padding: 50px;
          background: #0b1f4b;
          border-radius: 20px;
        }

        .products-header {
          max-width: 850px;
          margin-bottom: 40px;
        }

        .products-label {
          display: inline-block;
          margin-bottom: 12px;
          color: #9eb9e6;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .products-header h2 {
          margin: 0 0 18px;
          color: #ffffff;
          font-size: 2rem;
          font-weight: 700;
          line-height: 1.3;
        }

        .products-header p {
          margin: 0;
          color: #d8e1ef;
          line-height: 1.7;
          font-size: 0.95rem;
        }

        /* ================= PRODUCT GRID ================= */

        .products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* ================= PRODUCT CARD ================= */

        .product-card {
          display: block;
          padding: 30px 25px;
          text-decoration: none;
          background: #ffffff;
          border-radius: 15px;
          border: 1px solid #e1e5ec;
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .product-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        /* ================= PRODUCT ICON ================= */

        .product-icon {
          width: 55px;
          height: 55px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #eef2f8;
          border-radius: 14px;
          font-size: 1.6rem;
        }

        /* ================= PRODUCT TITLE ================= */

        .product-card h3 {
          margin: 0 0 12px;
          color: #0b1f4b;
          font-size: 1.25rem;
          font-weight: 700;
        }

        /* ================= PRODUCT DESCRIPTION ================= */

        .product-card p {
          margin: 0 0 20px;
          color: #666;
          font-size: 0.9rem;
          line-height: 1.7;
        }

        /* ================= PRODUCT LINK ================= */

        .product-link {
          color: #0b1f4b;
          font-size: 0.9rem;
          font-weight: 700;
        }

        .product-card:hover .product-link {
          text-decoration: underline;
        }

        /* ================= TABLET ================= */

        @media (max-width: 900px) {
          .information-grid {
            grid-template-columns: 1fr;
          }

          .it-hero {
            height: 50vh;
          }

          .products-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ================= MOBILE ================= */

        @media (max-width: 600px) {
          .it-hero {
            height: 45vh;
            min-height: 300px;
          }

          .it-content {
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

          .products-section {
            margin-top: 60px;
            padding: 30px 20px;
            border-radius: 15px;
          }

          .products-header h2 {
            font-size: 1.6rem;
          }

          .product-card {
            padding: 25px 20px;
          }
        }
      `}</style>
    </main>
  );
}
