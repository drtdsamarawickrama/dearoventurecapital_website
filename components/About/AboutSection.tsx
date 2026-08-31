"use client";

import Image from "next/image";

export default function AboutSection() {
  const milestones = [
    {
      year: "2022",
      title: "Our Journey",
      description:
        "Dearo Venture Capital Limited was formally established, laying the foundation for a disciplined and growth-oriented venture platform.",
    },
    {
      year: "2023",
      title: "Strategic Expansion",
      description:
        "Launch of Dearo Agri and Dearo Engineering, expanding operations into agriculture and engineering-led project facilitation. Dearo also grew its physical presence to 9 branches across Sri Lanka.",
    },
    {
      year: "2024",
      title: "Launch of Dearo Education",
      description:
        "Introduction of Dearo Education, extending impact into learning accessibility and educational initiatives.",
    },
    {
      year: "2025",
      title: "Nationwide Expansion",
      description:
        "Expanded to 25 branches across Sri Lanka, reinforcing nationwide reach and operational strength.",
    },
  ];

  const awards = [
    {
      title: "Iconic Awards 2024",
      image: "/images/awards/AW.jpg",
    },
    {
      title: "Peoples Excellency Awards 2024",
      image: "/images/awards/AW23.jpg",
    },
    {
      title: "Iconic Awards Bangkok 2025",
      image: "/images/awards/AW2.jpg",
    },
    {
      title: "Asia Miracle Awards 2024",
      image: "/images/awards/AW3.jpg",
    },
    {
      title: "BWIO USA Awards 2025",
      image: "/images/awards/AW4.jpg",
    },
    {
      title: "Best SME Financing Initiative",
      image: "/images/awards/AW5.jpg",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* ================= ABOUT ================= */}
        <div className="row about-row">
          <div className="col-12">
            <h2 className="text-center section-title about-main-title">
              <strong>About Our Company</strong>
            </h2>

            {/* ABOUT IMAGE - IMPROVED RESPONSIVE */}
            <div className="about-image-wrapper">
              <div className="about-image-container">
                <Image
                  src="/images/about_dearo_new.jpg"
                  alt="About Dearo Venture Capital"
                  fill
                  className="about-image"
                  sizes="(max-width: 576px) 100vw, (max-width: 992px) 100vw, 100vw"
                  priority
                />
              </div>
            </div>

            <div className="about-content">
              <p>
                Dearo Venture Capital Ltd is a diversified investment and
                business development organization dedicated to creating
                sustainable value for individuals, entrepreneurs, SMEs, and
                corporate partners across Sri Lanka.
              </p>

              <p>
                Established in September 2022, the company has rapidly evolved
                into one of the country's emerging investment institutions,
                driven by a vision of empowering economic growth, supporting
                innovation, and creating opportunities that uplift communities.
              </p>

              <p>
                Through disciplined risk management, sound governance
                practices, and a client-centric approach, Dearo Venture
                Capital Ltd provides investment solutions that help clients
                achieve financial security while contributing to national
                economic development.
              </p>

              <p>
                Our strength lies in understanding market opportunities,
                building strategic partnerships, and delivering innovative
                financial solutions that generate long-term returns and
                sustainable growth.
              </p>

              {/* VISION */}
              <h4 className="section-title vision-title">
                Our <strong>Vision</strong>
              </h4>

              <p>
                To become Sri Lanka's most trusted and innovative investment
                and venture capital organization, creating lasting value for
                stakeholders while contributing to the nation's economic
                prosperity.
              </p>

              {/* MISSION */}
              <h4 className="section-title mission-title">
                Our <strong>Mission</strong>
              </h4>

              <p>
                To empower individuals, entrepreneurs, SMEs, and corporate
                partners through innovative investment solutions, strategic
                partnerships, and responsible business practices that drive
                sustainable growth and create meaningful economic
                opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* ================= STORY ================= */}
        <div className="row milestones-section">
          <div className="col-12 text-center">
            <h3 className="section-title section-heading">Our Story</h3>
          </div>

          <div className="col-12">
            <p>
              At Dearo Venture Capital Ltd, we believe that every individual,
              entrepreneur, and business has the potential to achieve
              extraordinary growth when supported by the right financial
              partner. Our brand was built on the vision of creating
              opportunities, empowering ambitions, and guiding investments
              toward long-term prosperity.
            </p>

            <p>
              The Dearo logo represents a journey of progress. The
              upward-moving arrow symbolizes growth, achievement, and the
              continuous pursuit of success. The flowing paths beneath the
              arrow reflect the diverse financial journeys of our clients—
              individual investors, entrepreneurs, SMEs, and growing
              enterprises—all converging toward a common destination:
              financial security and wealth creation.
            </p>

            <p>
              Just as roads lead to new opportunities, Dearo serves as a
              trusted pathway connecting people with innovative investment
              solutions, strategic financial guidance, and sustainable
              wealth-building opportunities. The logo captures our commitment
              to helping clients move forward with confidence, clarity, and
              purpose.
            </p>
          </div>
        </div>

        {/* ================= MILESTONES ================= */}
        <div className="row milestones-section">
          <div className="col-12 text-center">
            <h3 className="section-title section-heading">Key Milestones</h3>
          </div>

          {milestones.map((item, i) => (
            <div key={i} className="col-12 col-md-6 milestone-column">
              <div className="milestone-card h-100">
                <h5>{item.year}</h5>
                <h6>{item.title}</h6>
                <p className="mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= AWARDS ================= */}
        <div className="row awards-section">
          <div className="col-12 text-center">
            <h3 className="section-title section-heading">
              Awards & Recognition
            </h3>
            <p className="awards-subtitle">
              Recognition of excellence and leadership
            </p>
          </div>

          {awards.map((award, i) => (
            <div key={i} className="col-6 col-sm-6 col-md-4 col-lg-3 award-column">
              <div className="award-card h-100">
                <div className="award-icon">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="award-img"
                    sizes="(max-width: 576px) 70px, (max-width: 992px) 90px, 110px"
                  />
                </div>
                <h6>{award.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ================= SECTION ================= */
        .about-section {
          padding: 0 0 80px;
          overflow-x: hidden;
          background: #f8fafc;
        }

        .about-row {
          margin-bottom: 70px;
        }

        /* ================= TITLES ================= */
        .section-title {
          color: #0b1f4b !important;
          font-weight: 400;
        }

        .section-title strong {
          font-weight: 700;
        }

        .about-main-title {
          margin-top: 48px;
          margin-bottom: 28px;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
        }

        .section-heading {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          margin-bottom: 35px;
          font-weight: 700;
        }

        .vision-title,
        .mission-title {
          margin-top: 32px;
          margin-bottom: 14px;
          font-size: clamp(1.2rem, 2vw, 1.5rem);
        }

        /* ================= RESPONSIVE ABOUT IMAGE ================= */
        .about-image-wrapper {
          width: 100%;
          max-width: 1300px;
          margin: 0 auto 32px;
          padding: 0;
        }

        .about-image-container {
          position: relative;
          width: 100%;
          height: 0;
          padding-bottom: 40%; /* 2.5:1 aspect ratio */
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .about-image {
          object-fit: cover;
          object-position: center center;
        }

        /* ================= CONTENT ================= */
        .about-content {
          width: 100%;
        }

        .about-content p,
        .milestone-card p {
          color: #374151;
          font-size: clamp(0.95rem, 1.1vw, 1.05rem);
          line-height: 1.75;
          margin-bottom: 20px;
          overflow-wrap: break-word;
          word-wrap: break-word;
        }

        /* ================= MILESTONES ================= */
        .milestones-section {
          margin-bottom: 70px;
        }

        .milestone-column {
          margin-bottom: 24px;
        }

        .milestone-card {
          background: #ffffff;
          padding: 28px 26px;
          border-radius: 14px;
          border-left: 4px solid #1e40af;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .milestone-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
        }

        .milestone-card h5 {
          font-size: clamp(0.8rem, 0.9vw, 0.85rem);
          letter-spacing: 0.08em;
          color: #1e40af;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .milestone-card h6 {
          color: #000000;
          font-size: clamp(1rem, 1.2vw, 1.1rem);
          font-weight: 700;
          margin-bottom: 12px;
        }

        /* ================= AWARDS ================= */
        .awards-section {
          margin-bottom: 20px;
        }

        .awards-subtitle {
          color: #6b7280;
          font-size: clamp(0.9rem, 1vw, 1rem);
          margin-bottom: 35px;
        }

        .award-column {
          margin-bottom: 24px;
        }

        .award-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          padding: 28px 16px;
          text-align: center;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 180px;
        }

        .award-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .award-icon {
          position: relative;
          width: 110px;
          height: 110px;
          margin: 0 auto 16px;
          flex-shrink: 0;
        }

        .award-img {
          object-fit: contain;
          object-position: center;
        }

        .award-card h6 {
          color: #000000;
          font-size: clamp(0.85rem, 0.9vw, 0.95rem);
          font-weight: 600;
          margin-bottom: 0;
          line-height: 1.3;
        }

        /* ====================================================
           RESPONSIVE BREAKPOINTS
        ==================================================== */

        /* ===== TABLET (up to 992px) ===== */
        @media (max-width: 992px) {
          .about-section {
            padding-bottom: 60px;
          }

          .about-row {
            margin-bottom: 55px;
          }

          .milestones-section {
            margin-bottom: 55px;
          }

          .milestone-card {
            padding: 24px 22px;
          }

          .award-card {
            padding: 24px 14px;
            min-height: 160px;
          }

          .award-icon {
            width: 100px;
            height: 100px;
          }

          .about-image-container {
            padding-bottom: 45%; /* Slightly taller on tablet */
          }
        }

        /* ===== MOBILE (up to 768px) ===== */
        @media (max-width: 768px) {
          .about-image-container {
            padding-bottom: 50%;
            border-radius: 12px;
          }

          .about-main-title {
            font-size: clamp(1.6rem, 3.5vw, 2rem);
          }

          .section-heading {
            font-size: clamp(1.3rem, 3vw, 1.6rem);
          }
        }

        /* ===== SMALL MOBILE (up to 576px) ===== */
        @media (max-width: 576px) {
          .about-section {
            padding-bottom: 45px;
          }

          .container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .about-row {
            margin-bottom: 40px;
          }

          /* IMAGE - Full width with proper aspect ratio */
          .about-image-wrapper {
            padding: 0;
            margin-bottom: 24px;
          }

          .about-image-container {
            padding-bottom: 55%;
            border-radius: 10px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
          }

          /* TITLES */
          .about-main-title {
            margin-top: 32px;
            margin-bottom: 20px;
            font-size: clamp(1.5rem, 5vw, 1.7rem);
          }

          .section-heading {
            font-size: clamp(1.3rem, 4.5vw, 1.45rem);
            margin-bottom: 25px;
          }

          .vision-title,
          .mission-title {
            margin-top: 28px;
            font-size: clamp(1.1rem, 4vw, 1.2rem);
          }

          /* TEXT */
          .about-content p,
          .milestone-card p {
            font-size: clamp(0.88rem, 2.8vw, 0.95rem);
            line-height: 1.7;
            margin-bottom: 16px;
          }

          /* MILESTONE */
          .milestones-section {
            margin-bottom: 40px;
          }

          .milestone-column {
            margin-bottom: 16px;
          }

          .milestone-card {
            padding: 20px 18px;
            border-radius: 12px;
          }

          .milestone-card h6 {
            font-size: clamp(0.95rem, 3vw, 1rem);
          }

          .milestone-card h5 {
            font-size: 0.8rem;
          }

          /* AWARDS - 2 columns on mobile */
          .award-column {
            margin-bottom: 16px;
          }

          .award-card {
            padding: 20px 12px;
            border-radius: 14px;
            min-height: 140px;
          }

          .award-icon {
            width: 80px;
            height: 80px;
            margin-bottom: 12px;
          }

          .award-card h6 {
            font-size: clamp(0.78rem, 2.5vw, 0.85rem);
            line-height: 1.3;
          }

          .awards-subtitle {
            font-size: clamp(0.82rem, 2.8vw, 0.9rem);
            margin-bottom: 25px;
          }

          /* AWARDS - 2 columns */
          .col-6 {
            flex: 0 0 50%;
            max-width: 50%;
          }
        }

        /* ===== VERY SMALL MOBILE (up to 375px) ===== */
        @media (max-width: 375px) {
          .container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .about-main-title {
            font-size: clamp(1.3rem, 4.5vw, 1.5rem);
          }

          .section-heading {
            font-size: clamp(1.1rem, 4vw, 1.3rem);
          }

          .about-content p,
          .milestone-card p {
            font-size: clamp(0.82rem, 3vw, 0.88rem);
          }

          .milestone-card {
            padding: 16px 14px;
          }

          .award-card {
            padding: 16px 10px;
            min-height: 120px;
          }

          .award-icon {
            width: 70px;
            height: 70px;
          }

          .award-card h6 {
            font-size: clamp(0.7rem, 2.8vw, 0.78rem);
          }

          .about-image-container {
            padding-bottom: 60%;
          }
        }

        /* ===== LARGE SCREENS (1200px+) ===== */
        @media (min-width: 1200px) {
          .about-image-container {
            padding-bottom: 38%;
          }

          .about-content p {
            font-size: 1.05rem;
          }

          .award-card {
            min-height: 200px;
          }

          .award-icon {
            width: 120px;
            height: 120px;
          }
        }

        /* ===== ULTRA WIDE (1600px+) ===== */
        @media (min-width: 1600px) {
          .about-image-container {
            padding-bottom: 35%;
          }

          .about-content p {
            font-size: 1.1rem;
          }
        }

        /* ===== REDUCED MOTION ===== */
        @media (prefers-reduced-motion: reduce) {
          .milestone-card,
          .award-card {
            transition: none;
          }

          .milestone-card:hover,
          .award-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}