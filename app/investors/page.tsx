
"use client";

export default function InvestorPage() {
  const financialReports = [
    {
      title: "Annual & Quarterly Statements",
      text: "Balance sheets, income statements, and cash flow reports under international standards.",
    },
    {
      title: "Performance Highlights",
      text: "Key metrics, growth trends, and profitability indicators.",
    },
    {
      title: "Risk & Compliance Overview",
      text: "Credit, market, and operational risk with mitigation strategies.",
    },
    {
      title: "Venture & Portfolio Reports",
      text: "Portfolio performance, sector exposure, and ESG impact.",
    },
  ];

  const investorRelations = [
    {
      title: "Attractive & Predictable Returns",
      text: "Structured venture capital models with transparent reporting.",
    },
    {
      title: "Robust Risk Management",
      text: "Collateral-backed lending and advanced credit controls.",
    },
    {
      title: "Scalable Growth Strategy",
      text: "Expansion across Sri Lanka and international markets.",
    },
    {
      title: "Impact-Driven Investing",
      text: "Strong ESG focus supporting SMEs and communities.",
    },
  ];

  return (
    <main className="investor-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="investor-hero">
        <div className="hero-content">

          <h1>Investor Relations</h1>

          <p>
            Transparency. Growth. Sustainable Value.
          </p>

        </div>
      </section>


      {/* =====================================================
          FINANCIAL REPORTS
      ===================================================== */}

      <section className="reports-section">

        <div className="page-container">

          <div className="section-heading">

            <h2>Financial Reports</h2>

            {/* Optional description */}

            {/* 
            <p>
              At Dearo Venture Capital Limited, we believe in complete
              financial transparency. Our reports provide a clear view of
              performance, risk, and strategy.
            </p>
            */}

          </div>


          <div className="outer-box">

            <div className="cards-grid">

              {financialReports.map((item, index) => (

                <div
                  className="report-card"
                  key={index}
                >

                  {/* Optional number */}

                  {/* 
                  <div className="card-number">
                    0{index + 1}
                  </div>
                  */}

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          INVESTOR RELATIONS
      ===================================================== */}

      {/* 
      <section className="relations-section">

        <div className="page-container">

          <div className="section-heading">

            <h2>Investor Relations</h2>

            <p>
              We are committed to building long-term relationships with our
              investors through transparency, responsible investment and
              sustainable growth.
            </p>

          </div>


          <div className="outer-box relations-box">

            <div className="cards-grid">

              {investorRelations.map((item, index) => (

                <div
                  className="relation-card"
                  key={index}
                >

                  <div className="card-number">
                    0{index + 1}
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>
      */}


      {/* =====================================================
          INVESTOR INVITATION
      ===================================================== */}

      <section className="investor-invitation">

        <div className="page-container">

          <div className="invitation-content">

            <span className="invitation-label">
              INVEST WITH DEARO
            </span>

            <h2>
              Investor Invitation
            </h2>

            <p className="invitation-description">
              Partner with a high-growth, impact-driven financial institution
              operating in Sri Lanka and emerging global markets.
            </p>


            <div className="invitation-grid">

              {investorRelations.map((item, index) => (

                <div
                  className="invitation-card"
                  key={index}
                >

                  {/* Optional number */}

                  {/* 
                  <div className="invitation-number">
                    0{index + 1}
                  </div>
                  */}

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="investor-cta">

        <div className="page-container">

          <div className="cta-content">

            <h2>
              Ready to Partner With Dearo?
            </h2>

            <p>
              Join us in driving sustainable growth and impactful returns.
            </p>

            <a
              href="/contact"
              className="cta-button"
            >
              Contact Us
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          RESPONSIVE CSS
      ===================================================== */}

      <style jsx>{`

        /* =====================================================
           RESET
        ===================================================== */

        .investor-page {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;
          background: #f7f9fc;
          color: #111827;
          box-sizing: border-box;
        }

        .investor-page *,
        .investor-page *::before,
        .investor-page *::after {
          box-sizing: border-box;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .page-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .investor-hero {
          position: relative;
          width: 100%;
          height: 280px;
          overflow: hidden;
          background: #0b1f4b;

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-content {
          position: relative;
          z-index: 1;
          width: 100%;
          padding: 0 24px;
          text-align: center;
        }

        .hero-content h1 {
          margin: 0 0 10px;
          color: #ffffff;
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          line-height: 1.2;
        }

        .hero-content p {
          margin: 0;
          color: #d9e2f2;
          font-size: 16px;
          line-height: 1.6;
        }


        /* =====================================================
           SECTION HEADING
        ===================================================== */

        .section-heading {
          width: 100%;
          max-width: 850px;
          margin: 0 auto 45px;
          text-align: center;
        }

        .section-heading h2 {
          margin: 0 0 16px;
          color: #0b1f4b;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          line-height: 1.2;
        }

        .section-heading p {
          width: 100%;
          margin: 0;
          color: #667085;
          font-size: 16px;
          line-height: 1.8;
        }


        /* =====================================================
           FINANCIAL REPORTS
        ===================================================== */

        .reports-section {
          width: 100%;
          padding: 90px 0;
          background: #f7f9fc;
        }

        .outer-box {
          width: 100%;
          padding: 30px;
          background: #ffffff;
          border: 1px solid #e5e9f0;
          border-radius: 22px;
          box-shadow: 0 10px 35px rgba(11, 31, 75, 0.06);
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 24px;
          width: 100%;
        }

        .report-card {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-width: 0;
          min-height: 250px;
          padding: 28px 24px;

          background: #f8fafc;
          border: 1px solid #e5e9f0;
          border-radius: 16px;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .report-card:hover {
          transform: translateY(-6px);
          background: #ffffff;
          border-color: #0b1f4b;
          box-shadow: 0 12px 30px rgba(11, 31, 75, 0.1);
        }


        /* =====================================================
           CARD NUMBER
        ===================================================== */

        .card-number {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;

          width: 42px;
          height: 42px;
          margin-bottom: 22px;

          border-radius: 50%;
          background: #0b1f4b;
          color: #ffffff;

          font-size: 13px;
          font-weight: 700;
        }


        /* =====================================================
           CARD TYPOGRAPHY
        ===================================================== */

        .report-card h3,
        .relation-card h3 {
          margin: 0 0 12px;

          color: #0b1f4b;

          font-size: 18px;
          font-weight: 700;
          line-height: 1.45;
        }

        .report-card p,
        .relation-card p {
          margin: 0;

          color: #667085;

          font-size: 14px;
          line-height: 1.75;
        }


        /* =====================================================
           INVESTOR RELATIONS
        ===================================================== */

        .relations-section {
          width: 100%;
          padding: 90px 0;
          background: #ffffff;
        }

        .relations-box {
          background: #f7f9fc;
        }

        .relation-card {
          display: flex;
          flex-direction: column;

          width: 100%;
          min-width: 0;
          min-height: 250px;

          padding: 28px 24px;

          background: #ffffff;
          border: 1px solid #e5e9f0;
          border-radius: 16px;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .relation-card:hover {
          transform: translateY(-6px);

          border-color: #0b1f4b;

          box-shadow: 0 12px 30px rgba(11, 31, 75, 0.1);
        }


        /* =====================================================
           INVESTOR INVITATION
        ===================================================== */

        .investor-invitation {
          width: 100%;
          padding: 90px 0;
          background: #0b1f4b;
        }

        .invitation-content {
          width: 100%;
          text-align: center;
        }

        .invitation-label {
          display: inline-block;

          margin-bottom: 15px;

          color: #b9c9e6;

          font-size: 13px;
          font-weight: 700;

          letter-spacing: 2px;
        }

        .invitation-content h2 {
          margin: 0 0 16px;

          color: #ffffff;

          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          line-height: 1.2;
        }

        .invitation-description {
          width: 100%;
          max-width: 800px;

          margin: 0 auto;

          color: #d9e2f2;

          font-size: 16px;
          line-height: 1.8;
        }


        /* =====================================================
           INVITATION CARDS
        ===================================================== */

        .invitation-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 24px;

          width: 100%;

          margin-top: 45px;
        }

        .invitation-card {
          display: flex;
          flex-direction: column;

          width: 100%;
          min-width: 0;
          min-height: 250px;

          padding: 28px 24px;

          text-align: left;

          background: rgba(255, 255, 255, 0.08);

          border: 1px solid rgba(255, 255, 255, 0.16);

          border-radius: 16px;

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease;
        }

        .invitation-card:hover {
          transform: translateY(-6px);

          background: rgba(255, 255, 255, 0.13);

          border-color: rgba(255, 255, 255, 0.35);
        }

        .invitation-number {
          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          width: 42px;
          height: 42px;

          margin-bottom: 22px;

          border-radius: 50%;

          background: #ffffff;
          color: #0b1f4b;

          font-size: 13px;
          font-weight: 700;
        }

        .invitation-card h3 {
          margin: 0 0 12px;

          color: #ffffff;

          font-size: 18px;
          font-weight: 700;
          line-height: 1.45;
        }

        .invitation-card p {
          margin: 0;

          color: #d9e2f2;

          font-size: 14px;
          line-height: 1.75;
        }


        /* =====================================================
           CTA
        ===================================================== */

        .investor-cta {
          width: 100%;
          padding: 85px 0;

          background: #ffffff;
        }

        .cta-content {
          width: 100%;
          text-align: center;
        }

        .cta-content h2 {
          margin: 0 0 15px;

          color: #0b1f4b;

          font-size: clamp(28px, 4vw, 38px);
          font-weight: 700;
          line-height: 1.25;
        }

        .cta-content p {
          margin: 0 0 30px;

          color: #667085;

          font-size: 16px;
          line-height: 1.7;
        }

        .cta-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          min-height: 52px;

          padding: 0 32px;

          border-radius: 8px;

          background: #0b1f4b;
          color: #ffffff;

          font-size: 16px;
          font-weight: 600;

          text-decoration: none;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);

          background: #16356f;

          color: #ffffff;
        }


        /* =====================================================
           LARGE TABLET
        ===================================================== */

        @media (max-width: 1100px) {

          .page-container {
            padding-left: 30px;
            padding-right: 30px;
          }

          .cards-grid,
          .invitation-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));
          }

          .report-card,
          .relation-card,
          .invitation-card {
            min-height: 220px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 768px) {

          .page-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          /* Reduced Hero Height */

          .investor-hero {
            height: 230px;
          }

          .hero-content h1 {
            font-size: 34px;
          }

          .hero-content p {
            font-size: 15px;
          }

          .reports-section,
          .relations-section,
          .investor-invitation {
            padding: 65px 0;
          }

          .section-heading {
            margin-bottom: 32px;
          }

          .section-heading p,
          .invitation-description {
            font-size: 15px;
            line-height: 1.75;
          }

          .outer-box {
            padding: 20px;
            border-radius: 18px;
          }

          .cards-grid,
          .invitation-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 18px;
          }

          .report-card,
          .relation-card,
          .invitation-card {
            min-height: 210px;
            padding: 22px 20px;
          }

          .report-card h3,
          .relation-card h3,
          .invitation-card h3 {
            font-size: 17px;
          }

          .report-card p,
          .relation-card p,
          .invitation-card p {
            font-size: 13px;
            line-height: 1.7;
          }

          .investor-cta {
            padding: 65px 0;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 576px) {

          .page-container {
            padding-left: 16px;
            padding-right: 16px;
          }

          /* Smaller Hero */

          .investor-hero {
            height: 200px;
          }

          .hero-content {
            padding: 0 16px;
          }

          .hero-content h1 {
            margin-bottom: 8px;

            font-size: 30px;
          }

          .hero-content p {
            font-size: 14px;
          }

          .reports-section,
          .relations-section,
          .investor-invitation {
            padding: 55px 0;
          }

          .section-heading {
            margin-bottom: 28px;
          }

          .section-heading h2,
          .invitation-content h2 {
            font-size: 30px;
          }

          .section-heading p,
          .invitation-description {
            font-size: 14px;
            line-height: 1.7;
          }

          .outer-box {
            padding: 12px;
            border-radius: 16px;
          }

          .cards-grid,
          .invitation-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .report-card,
          .relation-card,
          .invitation-card {
            min-height: auto;
            padding: 24px 20px;
          }

          .card-number,
          .invitation-number {
            width: 40px;
            height: 40px;

            margin-bottom: 18px;
          }

          .report-card h3,
          .relation-card h3,
          .invitation-card h3 {
            font-size: 17px;
          }

          .report-card p,
          .relation-card p,
          .invitation-card p {
            font-size: 14px;
          }

          .invitation-grid {
            margin-top: 32px;
          }

          .invitation-card {
            text-align: left;
          }

          .investor-cta {
            padding: 55px 0;
          }

          .cta-content h2 {
            font-size: 28px;
          }

          .cta-content p {
            font-size: 14px;
          }

          .cta-button {
            width: 100%;
            max-width: 320px;
          }

        }


        /* =====================================================
           VERY SMALL PHONES
        ===================================================== */

        @media (max-width: 360px) {

          .page-container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .investor-hero {
            height: 180px;
          }

          .hero-content h1 {
            font-size: 26px;
          }

          .hero-content p {
            font-size: 13px;
          }

          .section-heading h2,
          .invitation-content h2 {
            font-size: 26px;
          }

          .outer-box {
            padding: 8px;
          }

          .report-card,
          .relation-card,
          .invitation-card {
            padding: 20px 16px;
          }

        }

      `}</style>

    </main>
  );
}
