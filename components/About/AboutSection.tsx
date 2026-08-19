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
    <section id="about" className="pt-0 pb-5 bg-light">
      <div className="container">

        {/* ===== ABOUT SECTION ===== */}
        <div className="row mb-5">
          <div className="col-12">

            {/* ===== ABOUT CONTENT ===== */}
            <h2 className="fw-bold mb-3 mt-5 text-black text-center">
              About Our Company
            </h2>

            {/* ===== ABOUT IMAGE ===== */}
            <div className="about-image-wrapper mt-4">
              <Image
                src="/images/about_new.png"
                alt="About Dearo"
                width={1300}
                height={500}
                className="about-image"
                priority
              />
            </div>


            <p className="text-dark">
              Dearo Venture Capital Ltd is a diversified investment and business
              development organization dedicated to creating sustainable value
              for individuals, entrepreneurs, SMEs, and corporate partners
              across Sri Lanka.
            </p>

            <p className="text-dark">
              Established in September 2022, the company has rapidly evolved
              into one of the country's emerging investment institutions,
              driven by a vision of empowering economic growth, supporting
              innovation, and creating opportunities that uplift communities.
            </p>

            <p className="text-dark">
              Through disciplined risk management, sound governance practices,
              and a client-centric approach, Dearo Venture Capital Ltd provides
              investment solutions that help clients achieve financial
              security while contributing to national economic development.
            </p>

            <p className="text-dark">
              Our strength lies in understanding market opportunities, building
              strategic partnerships, and delivering innovative financial
              solutions that generate long-term returns and sustainable growth.
            </p>

            {/* ===== VISION ===== */}
            <h4 className="fw-bold mb-3 text-black">
              Our Vision
            </h4>

            <p className="text-dark">
              To become Sri Lanka's most trusted and innovative investment and
              venture capital organization, creating lasting value for
              stakeholders while contributing to the nation's economic
              prosperity.
            </p>

            {/* ===== MISSION ===== */}
            <h4 className="fw-bold mb-3 text-black">
              Our Mission
            </h4>

            <p className="text-dark">
              To empower individuals, entrepreneurs, SMEs, and corporate
              partners through innovative investment solutions, strategic
              partnerships, and responsible business practices that drive
              sustainable growth and create meaningful economic opportunities.
            </p>
          </div>
        </div>

        {/* ===== KEY MILESTONES ===== */}
        <div className="row mb-5">
          <div className="col-12 mb-3">
            <h3 className="fw-bold text-black">
              Key Milestones
            </h3>
          </div>

          {milestones.map((item, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div className="milestone-card h-100">
                <h5>{item.year}</h5>

                <h6 className="fw-semibold text-black">
                  {item.title}
                </h6>

                <p className="mb-0 text-dark">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ===== AWARDS ===== */}
        <div className="row mb-5">
          <div className="col-12 text-center mb-4">
            <h3 className="fw-bold text-black">
              Awards & Recognition
            </h3>

            <p className="text-muted">
              Recognition of excellence and leadership
            </p>
          </div>

          {awards.map((award, i) => (
            <div key={i} className="col-md-4 mb-4">
              <div className="award-card h-100">

                <div className="award-icon">
                  <Image
                    src={award.image}
                    alt={award.title}
                    fill
                    className="award-img"
                  />
                </div>

                <h6 className="fw-semibold text-black">
                  {award.title}
                </h6>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== STYLES ===== */}
      <style jsx>{`
        /* ================= ABOUT IMAGE ================= */

        .about-image-wrapper {
          width: 100%;
          margin: 0 0 30px 0;
          padding: 0;
        }

        .about-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
          border-radius: 0 0 20px 20px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        }

        /* ================= TYPOGRAPHY ================= */

        p {
          line-height: 1.7;
          color: #374151;
          font-size: 1rem;
        }

        h2,
        h3 {
          line-height: 1.3;
        }

        /* ================= MILESTONES ================= */

        .milestone-card {
          background: #ffffff;
          padding: 24px;
          border-radius: 14px;
          border-left: 4px solid #1e40af;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
          height: 100%;
        }

        .milestone-card h5 {
          font-size: 0.8rem;
          letter-spacing: 0.08em;
          color: #1e40af;
          margin-bottom: 6px;
        }

        /* ================= AWARDS ================= */

        .award-card {
          background: #ffffff;
          border-radius: 16px;
          border: 1px solid #e5e7eb;
          padding: 28px 20px;
          text-align: center;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          height: 100%;
        }

        .award-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .award-icon {
          width: 110px;
          height: 110px;
          margin: 0 auto 16px;
          position: relative;
        }

        .award-img {
          object-fit: contain;
          padding: 10px;
        }

        /* ================= RESPONSIVE ================= */

        /* Tablets */

        @media (max-width: 992px) {
          .about-image {
            height: 400px;
          }
        }

        /* Mobile */

        @media (max-width: 576px) {
          section {
            padding-top: 0;
            padding-bottom: 3rem;
          }

          .about-image-wrapper {
            margin-bottom: 25px;
          }

          .about-image {
            height: 260px;
            border-radius: 0 0 15px 15px;
          }

          h2 {
            font-size: 1.6rem;
          }

          h3 {
            font-size: 1.4rem;
          }

          p {
            font-size: 0.95rem;
          }

          .milestone-card {
            padding: 20px;
          }

          .award-icon {
            width: 90px;
            height: 90px;
          }
        }
      `}</style>
    </section>
  );
}