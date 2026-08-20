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
    <section id="about" className="about-section bg-light">
      <div className="container">

        {/* ================= ABOUT ================= */}

        <div className="row about-row">
          <div className="col-12">

            <h2 className="text-center section-title about-main-title">
              <strong>About Our Company</strong>
            </h2>

            <div className="about-image-wrapper">
              <Image
                src="/images/about_new.png"
                alt="About Dearo"
                width={1300}
                height={500}
                className="about-image"
                sizes="(max-width: 576px) 100vw, (max-width: 992px) 100vw, 1300px"
                priority
              />
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
                Through disciplined risk management, sound governance practices,
                and a client-centric approach, Dearo Venture Capital Ltd
                provides investment solutions that help clients achieve
                financial security while contributing to national economic
                development.
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
                To become Sri Lanka's most trusted and innovative investment and
                venture capital organization, creating lasting value for
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
                sustainable growth and create meaningful economic opportunities.
              </p>

            </div>
          </div>
        </div>

        {/* ================= MILESTONES ================= */}

        <div className="row milestones-section">

          <div className="col-12 text-center">
            <h3 className="section-title section-heading">
              Key Milestones
            </h3>
          </div>

          {milestones.map((item, i) => (
            <div
              key={i}
              className="col-12 col-md-6 milestone-column"
            >
              <div className="milestone-card h-100">

                <h5>{item.year}</h5>

                <h6>{item.title}</h6>

                <p className="mb-0">
                  {item.description}
                </p>

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
            <div
              key={i}
              className="col-12 col-sm-6 col-md-4 award-column"
            >

              <div className="award-card h-100">

                <div className="award-icon">

                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="award-img"
                    sizes="(max-width: 576px) 90px, 110px"
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


        /* ================= ABOUT IMAGE ================= */

        .about-image-wrapper {
          width: 100%;
          overflow: hidden;
          margin-bottom: 32px;
        }

        .about-image {
          display: block;
          width: 100% !important;
          height: auto !important;
          max-width: 100%;
          object-fit: cover;
          border-radius: 0 0 20px 20px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        }


        /* ================= CONTENT ================= */

        .about-content {
          width: 100%;
        }

        .about-content p,
        .milestone-card p {
          color: #374151;
          font-size: 1rem;
          line-height: 1.75;
          margin-bottom: 20px;
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
          padding: 26px;
          border-radius: 14px;
          border-left: 4px solid #1e40af;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease;
        }

        .milestone-card:hover {
          transform: translateY(-4px);
        }

        .milestone-card h5 {
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          color: #1e40af;
          margin-bottom: 8px;
          font-weight: 700;
        }

        .milestone-card h6 {
          color: #000000;
          font-size: 1.1rem;
          font-weight: 700;
          margin-bottom: 12px;
        }


        /* ================= AWARDS ================= */

        .awards-section {
          margin-bottom: 20px;
        }

        .awards-subtitle {
          color: #6b7280;
          margin-bottom: 35px;
        }

        .award-column {
          margin-bottom: 24px;
        }

        .award-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          padding: 28px 20px;
          text-align: center;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .award-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .award-icon {
          width: 110px;
          height: 110px;
          position: relative;
          margin: 0 auto 18px;
        }

        .award-img {
          object-fit: contain;
        }

        .award-card h6 {
          color: #000000;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0;
        }


        /* ================= TABLET ================= */

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
            padding: 22px;
          }

          .award-card {
            padding: 24px 16px;
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 576px) {

          .about-section {
            padding-bottom: 45px;
          }

          .container {
            padding-left: 16px;
            padding-right: 16px;
          }

          .about-row {
            margin-bottom: 45px;
          }


          /* TITLE */

          .about-main-title {
            margin-top: 32px;
            margin-bottom: 22px;
            font-size: 1.7rem;
          }

          .section-heading {
            font-size: 1.45rem;
            margin-bottom: 25px;
          }

          .vision-title,
          .mission-title {
            margin-top: 28px;
            font-size: 1.2rem;
          }


          /* IMAGE */

          .about-image-wrapper {
            margin-bottom: 25px;
          }

          .about-image {
            width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            border-radius: 0 0 14px 14px;
          }


          /* TEXT */

          .about-content p,
          .milestone-card p {
            font-size: 0.95rem;
            line-height: 1.7;
            margin-bottom: 18px;
          }


          /* MILESTONE */

          .milestones-section {
            margin-bottom: 45px;
          }

          .milestone-column {
            margin-bottom: 18px;
          }

          .milestone-card {
            padding: 20px;
            border-radius: 12px;
          }

          .milestone-card h6 {
            font-size: 1rem;
          }


          /* AWARDS */

          .award-column {
            margin-bottom: 18px;
          }

          .award-card {
            padding: 22px 14px;
            border-radius: 14px;
          }

          .award-icon {
            width: 90px;
            height: 90px;
            margin-bottom: 14px;
          }

          .award-card h6 {
            font-size: 0.92rem;
            line-height: 1.4;
          }

          .awards-subtitle {
            font-size: 0.9rem;
            margin-bottom: 25px;
          }

        }


        /* ================= VERY SMALL MOBILE ================= */

        @media (max-width: 375px) {

          .container {
            padding-left: 12px;
            padding-right: 12px;
          }

          .about-main-title {
            font-size: 1.5rem;
          }

          .section-heading {
            font-size: 1.3rem;
          }

          .about-content p,
          .milestone-card p {
            font-size: 0.9rem;
          }

          .milestone-card {
            padding: 18px;
          }

          .award-card {
            padding: 20px 12px;
          }

          .award-icon {
            width: 80px;
            height: 80px;
          }

        }

      `}</style>
    </section>
  );
}