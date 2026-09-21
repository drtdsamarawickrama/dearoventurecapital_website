
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
        <div className="hero-pattern"></div>

        <div className="hero-accent hero-accent-left"></div>
        <div className="hero-accent hero-accent-right"></div>

        <div className="hero-content">
          <span className="hero-label">DEARO VENTURE CAPITAL</span>

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

            <span className="section-label">
              FINANCIAL INFORMATION
            </span>

            <h2>Financial Reports</h2>


          </div>


          <div className="outer-box">

            <div className="cards-grid">

              {financialReports.map((item, index) => (

                <div
                  className="report-card"
                  key={index}
                >

                  <div className="card-accent"></div>

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


      {/* =====================================================
          INVESTOR INVITATION
      ===================================================== */}

      <section className="investor-invitation">

        <div className="invitation-pattern"></div>

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

                  <div className="invitation-number">
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


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="investor-cta">

        <div className="page-container">

          <div className="cta-content">

            <span className="cta-label">
              LET'S BUILD THE FUTURE
            </span>

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
           COLOR SYSTEM
        ===================================================== */

        /*
          NAVY  : #0B1F4B
          DARK  : #071633
          RED   : #C8102E
          RED 2 : #A50D26
          WHITE : #FFFFFF
        */


        /* =====================================================
           RESET
        ===================================================== */

        .investor-page {
          width: 100%;
          max-width: 100%;
          overflow-x: hidden;

          background: #f7f9fc;
          color: #172033;

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
          height: 300px;

          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              #071633 0%,
              #0b1f4b 60%,
              #102a5f 100%
            );

          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-pattern {
          position: absolute;
          inset: 0;

          background-image:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.035) 25%,
              transparent 25%
            );

          background-size: 45px 45px;

          opacity: 0.5;
        }

        .hero-accent {
          position: absolute;

          width: 180px;
          height: 180px;

          border: 1px solid rgba(200, 16, 46, 0.45);

          transform: rotate(45deg);

          pointer-events: none;
        }

        .hero-accent-left {
          left: -120px;
          bottom: -110px;
        }

        .hero-accent-right {
          right: -120px;
          top: -110px;

          border-color: rgba(255,255,255,0.08);
        }

        .hero-content {
          position: relative;

          z-index: 2;

          width: 100%;

          padding: 0 24px;

          text-align: center;
        }

        .hero-label {
          display: inline-block;

          margin-bottom: 14px;

          color: #e63950;

          font-size: 12px;
          font-weight: 700;

          letter-spacing: 3px;
        }

        .hero-content h1 {
          margin: 0 0 12px;

          color: #ffffff;

          font-size: clamp(32px, 5vw, 64px);

          font-weight: 700;

          line-height: 1.2;
        }

        .hero-line {
          width: 55px;
          height: 3px;

          margin: 0 auto 15px;

          background: #c8102e;

          border-radius: 10px;
        }

        .hero-content p {
          margin: 0;

          color: #dce5f5;

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

        .section-label {
          display: inline-block;

          margin-bottom: 12px;

          color: #c8102e;

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 2.5px;
        }

        .section-heading h2 {
          margin: 0 0 15px;

          color: #0b1f4b;

          font-size: clamp(28px, 4vw, 44px);

          font-weight: 700;

          line-height: 1.2;
        }

        .section-red-line {
          width: 50px;
          height: 3px;

          margin: 0 auto;

          background: #c8102e;

          border-radius: 10px;
        }


        /* =====================================================
           FINANCIAL REPORTS
        ===================================================== */

        .reports-section {
          width: 100%;

          padding: 90px 0;

          background:
            linear-gradient(
              180deg,
              #f7f9fc 0%,
              #ffffff 100%
            );
        }

        .outer-box {
          position: relative;

          width: 100%;

          padding: 30px;

          background: #ffffff;

          border: 1px solid #e1e6ef;

          border-radius: 22px;

          box-shadow:
            0 12px 40px rgba(11, 31, 75, 0.07);
        }

        .outer-box::before {
          content: "";

          position: absolute;

          top: 0;
          left: 40px;
          right: 40px;

          height: 3px;

          background: #c8102e;

          border-radius: 0 0 10px 10px;
        }

        .cards-grid {
          display: grid;

          grid-template-columns:
            repeat(4, minmax(0, 1fr));

          gap: 24px;

          width: 100%;
        }


        /* =====================================================
           REPORT CARDS
        ===================================================== */

        .report-card {
          position: relative;

          display: flex;

          flex-direction: column;

          width: 100%;

          min-width: 0;

          min-height: 250px;

          padding: 30px 24px;

          overflow: hidden;

          background: #ffffff;

          border: 1px solid #e1e6ef;

          border-radius: 16px;

          box-shadow:
            0 5px 20px rgba(11, 31, 75, 0.035);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
        }

        .card-accent {
          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 4px;

          background: #c8102e;

          transform: scaleX(0.25);

          transform-origin: left;

          transition: transform 0.3s ease;
        }

        .report-card:hover {
          transform: translateY(-7px);

          background: #ffffff;

          border-color: #c8102e;

          box-shadow:
            0 16px 35px rgba(11, 31, 75, 0.12);
        }

        .report-card:hover .card-accent {
          transform: scaleX(1);
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

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .report-card:hover .card-number {
          background: #c8102e;

          transform: scale(1.05);
        }


        /* =====================================================
           CARD TYPOGRAPHY
        ===================================================== */

        .report-card h3 {
          margin: 0 0 12px;

          color: #0b1f4b;

          font-size: 18px;

          font-weight: 700;

          line-height: 1.45;
        }

        .report-card p {
          margin: 0;

          color: #667085;

          font-size: 14px;

          line-height: 1.75;
        }


        /* =====================================================
           INVESTOR INVITATION
        ===================================================== */

        .investor-invitation {
          position: relative;

          width: 100%;

          padding: 90px 0;

          overflow: hidden;

          background:
            linear-gradient(
              135deg,
              #071633 0%,
              #0b1f4b 60%,
              #102b62 100%
            );
        }

        .invitation-pattern {
          position: absolute;

          inset: 0;

          background-image:
            linear-gradient(
              135deg,
              rgba(200, 16, 46, 0.08) 25%,
              transparent 25%
            );

          background-size: 55px 55px;

          pointer-events: none;
        }

        .invitation-content {
          position: relative;

          z-index: 1;

          width: 100%;

          text-align: center;
        }

        .invitation-label {
          display: inline-block;

          margin-bottom: 14px;

          color: #e63950;

          font-size: 13px;

          font-weight: 700;

          letter-spacing: 2.5px;
        }

        .invitation-content h2 {
          margin: 0 0 14px;

          color: #ffffff;

          font-size: clamp(28px, 4vw, 44px);

          font-weight: 700;

          line-height: 1.2;
        }

        .invitation-line {
          width: 55px;
          height: 3px;

          margin: 0 auto 18px;

          background: #c8102e;

          border-radius: 10px;
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
          position: relative;

          display: flex;

          flex-direction: column;

          width: 100%;

          min-width: 0;

          min-height: 250px;

          padding: 28px 24px;

          text-align: left;

          background:
            rgba(255, 255, 255, 0.075);

          border: 1px solid
            rgba(255, 255, 255, 0.14);

          border-radius: 16px;

          backdrop-filter: blur(8px);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
        }

        .invitation-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 4px;
          height: 0;

          background: #c8102e;

          border-radius: 16px 0 0 16px;

          transition: height 0.3s ease;
        }

        .invitation-card:hover {
          transform: translateY(-7px);

          background:
            rgba(255, 255, 255, 0.12);

          border-color:
            rgba(200, 16, 46, 0.65);

          box-shadow:
            0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .invitation-card:hover::before {
          height: 100%;
        }


        /* =====================================================
           INVITATION NUMBER
        ===================================================== */

        .invitation-number {
          display: flex;

          align-items: center;
          justify-content: center;

          flex-shrink: 0;

          width: 42px;
          height: 42px;

          margin-bottom: 22px;

          border-radius: 50%;

          background: #c8102e;

          color: #ffffff;

          font-size: 13px;

          font-weight: 700;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .invitation-card:hover .invitation-number {
          background: #ffffff;

          color: #0b1f4b;

          transform: scale(1.05);
        }


        /* =====================================================
           INVITATION TYPOGRAPHY
        ===================================================== */

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

          background:
            linear-gradient(
              180deg,
              #ffffff 0%,
              #f7f9fc 100%
            );
        }

        .cta-content {
          width: 100%;

          text-align: center;
        }

        .cta-label {
          display: inline-block;

          margin-bottom: 12px;

          color: #c8102e;

          font-size: 12px;

          font-weight: 700;

          letter-spacing: 2.5px;
        }

        .cta-content h2 {
          margin: 0 0 14px;

          color: #0b1f4b;

          font-size: clamp(28px, 4vw, 38px);

          font-weight: 700;

          line-height: 1.25;
        }

        .cta-line {
          width: 50px;
          height: 3px;

          margin: 0 auto 18px;

          background: #c8102e;

          border-radius: 10px;
        }

        .cta-content p {
          margin: 0 0 30px;

          color: #667085;

          font-size: 16px;

          line-height: 1.7;
        }


        /* =====================================================
           CTA BUTTON
        ===================================================== */

        .cta-button {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          min-height: 52px;

          padding: 0 34px;

          border-radius: 8px;

          background: #c8102e;

          color: #ffffff;

          font-size: 16px;

          font-weight: 600;

          text-decoration: none;

          box-shadow:
            0 8px 20px rgba(200, 16, 46, 0.2);

          transition:
            transform 0.3s ease,
            background 0.3s ease,
            box-shadow 0.3s ease;
        }

        .cta-button:hover {
          transform: translateY(-3px);

          background: #a50d26;

          color: #ffffff;

          box-shadow:
            0 12px 28px rgba(200, 16, 46, 0.3);
        }

        .cta-button:focus-visible {
          outline: 3px solid rgba(200, 16, 46, 0.3);

          outline-offset: 4px;
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

          .investor-hero {
            height: 235px;
          }

          .hero-content h1 {
            font-size: 34px;
          }

          .hero-content p {
            font-size: 15px;
          }

          .hero-label {
            font-size: 11px;
            letter-spacing: 2px;
          }

          .reports-section,
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

          .outer-box::before {
            left: 25px;
            right: 25px;
          }

          .cards-grid,
          .invitation-grid {
            grid-template-columns:
              repeat(2, minmax(0, 1fr));

            gap: 18px;
          }

          .report-card,
          .invitation-card {
            min-height: 210px;

            padding: 22px 20px;
          }

          .report-card h3,
          .invitation-card h3 {
            font-size: 17px;
          }

          .report-card p,
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

          .investor-hero {
            height: 205px;
          }

          .hero-content {
            padding: 0 16px;
          }

          .hero-content h1 {
            margin-bottom: 9px;

            font-size: 30px;
          }

          .hero-content p {
            font-size: 14px;
          }

          .hero-label {
            margin-bottom: 10px;

            font-size: 9px;

            letter-spacing: 1.8px;
          }

          .hero-line {
            width: 45px;
            height: 2px;
          }

          .reports-section,
          .investor-invitation {
            padding: 55px 0;
          }

          .section-heading {
            margin-bottom: 28px;
          }

          .section-label,
          .cta-label {
            font-size: 10px;

            letter-spacing: 2px;
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

          .outer-box::before {
            left: 18px;
            right: 18px;
          }

          .cards-grid,
          .invitation-grid {
            grid-template-columns: 1fr;

            gap: 14px;
          }

          .report-card,
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
          .invitation-card h3 {
            font-size: 17px;
          }

          .report-card p,
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
            height: 185px;
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
          .invitation-card {
            padding: 20px 16px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .report-card,
          .invitation-card,
          .cta-button,
          .card-number,
          .invitation-number,
          .card-accent,
          .invitation-card::before {
            transition: none;
          }

        }

      `}</style>

    </main>
  );
}

