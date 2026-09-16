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
            {/* ABOUT TITLE */}
            <h2 className="text-center section-title about-main-title">
              <span className="about-text">About</span>{" "}
              <span className="us-text">Us</span>
            </h2>

            {/* ABOUT IMAGE */}
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

            {/* ABOUT CONTENT */}
            <div className="about-content">
              <p className="about-description">
                Dearo Venture Capital Ltd is a diversified investment and
                business development organization dedicated to creating
                sustainable value for individuals, entrepreneurs, SMEs, and
                corporate partners across Sri Lanka. Established in September
                2022, the company has rapidly evolved into one of the
                country's emerging investment institutions, driven by a vision
                of empowering economic growth, supporting innovation, and
                creating opportunities that uplift communities. Through
                disciplined risk management, sound governance practices, and a
                client-centric approach, Dearo Venture Capital Ltd provides
                investment solutions that help clients achieve financial
                security while contributing to national economic development.
                Our strength lies in understanding market opportunities,
                building strategic partnerships, and delivering innovative
                financial solutions that generate long-term returns and
                sustainable growth.
              </p>

              {/* ================= VISION & MISSION ================= */}
              <div className="row vision-mission-row">
                {/* VISION */}
                <div className="col-12 col-md-6 vision-mission-column">
                  <div className="vision-mission-card vision-card">
                    <div className="vision-mission-icon vision-icon">
                      {/* Eye / Vision Icon */}
                      <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M6 32C6 32 15 15 32 15C49 15 58 32 58 32C58 32 49 49 32 49C15 49 6 32 6 32Z"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />

                        <circle
                          cx="32"
                          cy="32"
                          r="8"
                          stroke="currentColor"
                          strokeWidth="3"
                        />

                        <circle
                          cx="32"
                          cy="32"
                          r="3"
                          fill="currentColor"
                        />
                      </svg>
                    </div>

                    <div className="card-content">
                      <div className="accent-line"></div>

                      <h4 className="vision-mission-title">
                        Our <strong>Vision</strong>
                      </h4>

                      <p className="vision-mission-text">
                        To become a trusted investment and venture capital institution contributing to sustainable
economic growth and prosperity in Sri Lanka.
                      </p>
                    </div>
                  </div>
                </div>

                {/* MISSION */}
                <div className="col-12 col-md-6 vision-mission-column">
                  <div className="vision-mission-card mission-card">
                    <div className="vision-mission-icon mission-icon">
                      {/* Target / Mission Icon */}
                      <svg
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <circle
                          cx="32"
                          cy="32"
                          r="23"
                          stroke="currentColor"
                          strokeWidth="3"
                        />

                        <circle
                          cx="32"
                          cy="32"
                          r="14"
                          stroke="currentColor"
                          strokeWidth="3"
                        />

                        <circle
                          cx="32"
                          cy="32"
                          r="6"
                          fill="currentColor"
                        />

                        <path
                          d="M32 5V13"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        <path
                          d="M32 51V59"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        <path
                          d="M5 32H13"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />

                        <path
                          d="M51 32H59"
                          stroke="currentColor"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div className="card-content">
                      <div className="accent-line"></div>

                      <h4 className="vision-mission-title">
                        Our <strong>Mission</strong>
                      </h4>

                      <p className="vision-mission-text">
                        To connect capital with opportunity by creating responsible investment solutions and supporting
businesses with the resources required to grow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= STORY ================= */}
        <div className="row milestones-section">
          <div className="col-12 text-center">
            <h4 className="section-title section-heading">Our Story</h4>
          </div>

          <div className="col-12 story-content">
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
              arrow reflect the diverse financial journeys of our
              clients—individual investors, entrepreneurs, SMEs, and growing
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

                <p className="mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= AWARDS ================= */}
        <div className="row awards-section">
          <div className="col-12 text-center">
            <h3 className="section-title section-heading">
              Awards &amp; Recognition
            </h3>

            <p className="awards-subtitle">
              Recognition of excellence and leadership
            </p>
          </div>

          {awards.map((award, i) => (
            <div
              key={i}
              className="col-6 col-sm-6 col-md-4 col-lg-3 award-column"
            >
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

      {/* ==================================================
          CSS
      ================================================== */}

      <style jsx>{`
        /* ==================================================
           SECTION
        ================================================== */

        .about-section {
          padding: 0 0 80px;
          overflow-x: hidden;
          background: #f8fafc;
        }

        .about-row {
          margin-bottom: 70px;
        }

        /* ==================================================
           TITLES
        ================================================== */

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
          font-weight: 800 !important;
          line-height: 1.2;
        }

        .about-main-title .about-text {
          color: #0b1f4b;
          font-weight: 800;
        }

        .about-main-title .us-text {
          color: #c62828;
          font-weight: 800;
        }

        .section-heading {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          margin-bottom: 35px;
          font-weight: 700;
        }

        /* ==================================================
           ABOUT IMAGE
        ================================================== */

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
          padding-bottom: 40%;
          overflow: hidden;
          border-radius: 16px;
          box-shadow: 0 8px 24px rgba(11, 31, 75, 0.08);
        }

        .about-image {
          object-fit: cover;
          object-position: center center;
        }

        /* ==================================================
           ABOUT TEXT
        ================================================== */

        .about-content,
        .story-content {
          width: 100%;
        }

        .about-content .about-description {
          color: #374151;
          font-size: clamp(0.95rem, 1.1vw, 1.05rem);
          line-height: 1.75;
          text-align: justify;
          text-justify: inter-word;
          margin-bottom: 20px;
          padding: 0 80px;
          overflow-wrap: break-word;
          word-wrap: break-word;
          font-family: inherit;
          font-weight: 400;
        }

        .story-content p,
        .milestone-card p,
        .story-text {
          color: #374151;
          font-size: clamp(0.95rem, 1.1vw, 1.05rem);
          line-height: 1.75;
          text-align: justify;
          text-justify: inter-word;
          margin-bottom: 20px;
          overflow-wrap: break-word;
          word-wrap: break-word;
          font-family: inherit;
          font-weight: 400;
        }

        /* ==================================================
           VISION & MISSION
        ================================================== */

        .vision-mission-row {
          margin-top: 30px;
          margin-left: 0;
          margin-right: 0;
        }

        .vision-column {
          margin-bottom: 18px;
          padding-left: 10px;
          padding-right: 10px;
        }
         .mission-column {
         margin-bottom: 8px;
          padding-left: 10px;
          padding-right: 10px;
        }



        /* ==================================================
           VISION & MISSION CARD
        ================================================== */

        .vision-mission-card {
          position: relative;

          background: #ffffff;

          border-radius: 12px;

          padding: 24px 26px;

          min-height: 215px;

          border: 1px solid #e5e7eb;

          overflow: hidden;

          display: flex;
          align-items: center;

          box-shadow: 0 8px 25px rgba(11, 31, 75, 0.08);

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }

        /* ==================================================
           ANIMATED TOP LINE
        ================================================== */

        .vision-mission-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 4px;

          background: linear-gradient(
            90deg,
            #0b1f4b,
            #c62828,
            #0b1f4b,
            #c62828,
            #0b1f4b
          );

          background-size: 250% 100%;

          animation: visionBorderMove 4s linear infinite;
        }

        /* No decorative circle */

        .vision-mission-card::after {
          display: none;
        }

        /* ==================================================
           CARD CONTENT
        ================================================== */

        .card-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding-right: 55px;
        }

        /* ==================================================
           ICON
        ================================================== */

        .vision-mission-icon {
          position: absolute;

          top: 22px;
          right: 25px;

          width: 46px;
          height: 46px;

          display: flex;
          align-items: center;
          justify-content: center;

          color: #c62828;

          z-index: 3;

          animation: iconFloat 3s ease-in-out infinite;

          transition:
            transform 0.35s ease,
            color 0.35s ease;
        }

        .vision-mission-icon svg {
          width: 42px;
          height: 42px;
          display: block;
        }

        .mission-icon {
          color: #0b1f4b;
          animation-delay: 0.5s;
        }

        .vision-mission-card:hover .vision-mission-icon {
          transform: translateY(-5px) scale(1.08);
          color: #c62828;
        }

        /* ==================================================
           ACCENT LINE
        ================================================== */

        .accent-line {
          width: 48px;
          height: 3px;

          background: #c62828;

          margin-bottom: 14px;

          position: relative;

          overflow: hidden;

          transition: width 0.35s ease;
        }

        .accent-line::after {
          content: "";

          position: absolute;

          top: 0;
          left: -100%;

          width: 100%;
          height: 100%;

          background: #0b1f4b;

          animation: accentMove 3s ease-in-out infinite;
        }

        /* ==================================================
           TITLE
        ================================================== */

        .vision-mission-title {
          position: relative;

          z-index: 2;

          color: #0b1f4b !important;

          font-size: clamp(1.35rem, 2vw, 1.65rem);

          font-weight: 400;

          margin: 0 0 12px;

          line-height: 1.3;
        }

        .vision-mission-title strong {
          color: #c62828;
          font-weight: 800;
        }

        /* ==================================================
           TEXT
        ================================================== */

        .vision-mission-text {
          position: relative;

          z-index: 2;

          color: #374151;

          font-size: clamp(0.92rem, 1vw, 1rem);

          line-height: 1.7;

          font-weight: 400;

          padding: 0;

          margin: 0;

          text-align: justify;

          text-justify: inter-word;

          letter-spacing: 0;

          overflow-wrap: break-word;

          word-wrap: break-word;
        }

        /* ==================================================
           HOVER
        ================================================== */

        .vision-mission-card:hover {
          transform: translateY(-6px);

          border-color: rgba(198, 40, 40, 0.35);

          box-shadow:
            0 15px 35px rgba(11, 31, 75, 0.14),
            0 0 20px rgba(198, 40, 40, 0.05);
        }

        .vision-mission-card:hover .accent-line {
          width: 72px;
        }

        /* ==================================================
           ANIMATIONS
        ================================================== */

        @keyframes visionBorderMove {
          0% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }

          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes iconFloat {
          0% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-5px);
          }

          100% {
            transform: translateY(0);
          }
        }

        @keyframes accentMove {
          0% {
            left: -100%;
          }

          50% {
            left: 100%;
          }

          100% {
            left: 100%;
          }
        }

        /* ==================================================
           MILESTONES
        ================================================== */

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

          border-left: 4px solid #0b1f4b;

          box-shadow: 0 6px 18px rgba(11, 31, 75, 0.05);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;
        }

        .milestone-card:hover {
          transform: translateY(-4px);

          box-shadow: 0 12px 28px rgba(11, 31, 75, 0.09);
        }

        .milestone-card h5 {
          font-size: clamp(0.8rem, 0.9vw, 0.85rem);

          letter-spacing: 0.08em;

          color: #c62828;

          margin-bottom: 8px;

          font-weight: 700;
        }

        .milestone-card h6 {
          color: #0b1f4b;

          font-size: clamp(1rem, 1.2vw, 1.1rem);

          font-weight: 700;

          margin-bottom: 12px;
        }

        /* ==================================================
           AWARDS
        ================================================== */

        .awards-section {
          margin-bottom: 20px;
        }

        .awards-subtitle {
          color: #6b7280;

          font-size: clamp(0.9rem, 1vw, 1rem);

          margin-bottom: 35px;

          text-align: center;
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

          box-shadow: 0 6px 18px rgba(11, 31, 75, 0.05);

          transition:
            transform 0.25s ease,
            box-shadow 0.25s ease;

          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          min-height: 180px;
        }

        .award-card:hover {
          transform: translateY(-4px);

          box-shadow: 0 12px 30px rgba(11, 31, 75, 0.1);
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
          color: #0b1f4b;

          font-size: clamp(0.85rem, 0.9vw, 0.95rem);

          font-weight: 600;

          margin-bottom: 0;

          line-height: 1.3;

          text-align: center;
        }

        /* ==================================================
           TABLET
        ================================================== */

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

          .vision-mission-card {
            padding: 22px 22px;

            min-height: 210px;
          }

          .vision-mission-icon {
            top: 20px;
            right: 20px;

            width: 42px;
            height: 42px;
          }

          .vision-mission-icon svg {
            width: 37px;
            height: 37px;
          }

          .vision-mission-title {
            font-size: 1.4rem;
          }

          .vision-mission-text {
            font-size: 0.95rem;

            line-height: 1.7;
          }

          .card-content {
            padding-right: 50px;
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
            padding-bottom: 45%;
          }

          .about-content .about-description {
            padding: 0 50px;
          }

          .about-content p,
          .story-content p,
          .milestone-card p,
          .story-text {
            text-align: justify;
          }
        }

        /* ==================================================
           MOBILE
        ================================================== */

        @media (max-width: 768px) {
          .about-image-container {
            padding-bottom: 50%;

            border-radius: 12px;
          }

          .about-main-title {
            font-size: clamp(1.6rem, 5vw, 2rem);
          }

          .section-heading {
            font-size: clamp(1.3rem, 4vw, 1.6rem);
          }

          .vision-mission-row {
            margin-top: 25px;
          }

          .vision-mission-column {
            margin-bottom: 16px;

            padding-left: 8px;
            padding-right: 8px;
          }

          .vision-mission-card {
            padding: 22px 20px;

            min-height: 0;

            border-radius: 11px;
          }

          .vision-mission-card::before {
            height: 3px;
          }

          .vision-mission-icon {
            top: 18px;
            right: 18px;

            width: 40px;
            height: 40px;
          }

          .vision-mission-icon svg {
            width: 35px;
            height: 35px;
          }

          .card-content {
            padding-right: 48px;
          }

          .accent-line {
            width: 42px;

            height: 3px;

            margin-bottom: 13px;
          }

          .vision-mission-title {
            font-size: clamp(1.2rem, 4vw, 1.4rem);

            margin-bottom: 11px;
          }

          .vision-mission-text {
            font-size: clamp(0.88rem, 2.8vw, 0.96rem);

            line-height: 1.7;

            padding: 0;

            text-align: justify;
          }

          .about-content .about-description {
            padding: 0 25px;
          }

          .story-content p,
          .milestone-card p,
          .story-text {
            text-align: justify;
          }
        }

        /* ==================================================
           SMALL MOBILE
        ================================================== */

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

          .about-image-wrapper {
            padding: 0;

            margin-bottom: 24px;
          }

          .about-image-container {
            padding-bottom: 55%;

            border-radius: 10px;

            box-shadow: 0 4px 16px rgba(11, 31, 75, 0.08);
          }

          .about-main-title {
            margin-top: 32px;

            margin-bottom: 20px;

            font-size: clamp(1.5rem, 5vw, 1.7rem);
          }

          .section-heading {
            font-size: clamp(1.3rem, 4.5vw, 1.45rem);

            margin-bottom: 25px;
          }

          .vision-mission-row {
            margin-top: 20px;
          }

          .vision-mission-column {
            margin-bottom: 14px;

            padding-left: 0;
            padding-right: 0;
          }

          .vision-mission-card {
            padding: 20px 18px;

            border-radius: 10px;
          }

          .vision-mission-icon {
            top: 16px;
            right: 16px;

            width: 36px;
            height: 36px;
          }

          .vision-mission-icon svg {
            width: 31px;
            height: 31px;
          }

          .card-content {
            padding-right: 42px;
          }

          .accent-line {
            width: 38px;

            height: 3px;

            margin-bottom: 11px;
          }

          .vision-mission-title {
            font-size: 1.15rem;

            margin-bottom: 10px;
          }

          .vision-mission-text {
            font-size: 0.88rem;

            line-height: 1.65;

            padding: 0;

            text-align: justify;
          }

          .about-content .about-description {
            font-size: clamp(0.88rem, 2.8vw, 0.95rem);

            line-height: 1.7;

            text-align: justify;

            text-justify: inter-word;

            padding: 0 8px;

            margin-bottom: 16px;

            overflow-wrap: break-word;

            word-break: normal;
          }

          .story-content p,
          .milestone-card p,
          .story-text {
            font-size: clamp(0.88rem, 2.8vw, 0.95rem);

            line-height: 1.7;

            text-align: justify;

            text-justify: inter-word;

            margin-bottom: 16px;

            overflow-wrap: break-word;

            word-break: normal;
          }

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

            text-align: center;
          }

          .col-6 {
            flex: 0 0 50%;

            max-width: 50%;
          }
        }

        /* ==================================================
           VERY SMALL MOBILE
        ================================================== */

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

          .vision-mission-card {
            padding: 18px 16px;

            border-radius: 9px;
          }

          .vision-mission-icon {
            top: 14px;
            right: 14px;

            width: 33px;
            height: 33px;
          }

          .vision-mission-icon svg {
            width: 28px;
            height: 28px;
          }

          .card-content {
            padding-right: 38px;
          }

          .accent-line {
            width: 35px;

            height: 2px;
          }

          .vision-mission-title {
            font-size: 1.05rem;
          }

          .vision-mission-text {
            font-size: 0.83rem;

            line-height: 1.65;
          }

          .about-content .about-description {
            font-size: clamp(0.82rem, 3vw, 0.88rem);

            text-align: justify;

            line-height: 1.7;

            padding: 0 4px;
          }

          .story-content p,
          .milestone-card p,
          .story-text {
            font-size: clamp(0.82rem, 3vw, 0.88rem);

            text-align: justify;

            line-height: 1.7;
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

        /* ==================================================
           LARGE SCREENS
        ================================================== */

        @media (min-width: 1200px) {
          .about-image-container {
            padding-bottom: 38%;
          }

          .about-content .about-description {
            font-size: 1.05rem;

            text-align: justify;

            padding: 0 80px;
          }

          .vision-mission-card {
            padding: 28px 30px;

            min-height: 220px;
          }

          .vision-mission-icon {
            top: 24px;
            right: 28px;

            width: 48px;
            height: 48px;
          }

          .vision-mission-icon svg {
            width: 42px;
            height: 42px;
          }

          .card-content {
            padding-right: 60px;
          }

          .vision-mission-text {
            font-size: 1rem;

            line-height: 1.75;

            padding: 0;
          }

          .milestone-card p {
            text-align: justify;
          }

          .award-card {
            min-height: 200px;
          }

          .award-icon {
            width: 120px;
            height: 120px;
          }
        }

        /* ==================================================
           ULTRA WIDE
        ================================================== */

        @media (min-width: 1600px) {
          .about-image-container {
            padding-bottom: 35%;
          }

          .about-content .about-description {
            font-size: 1.1rem;

            text-align: justify;

            padding: 0 100px;
          }

          .vision-mission-card {
            min-height: 225px;
          }

          .vision-mission-text {
            font-size: 1.05rem;

            line-height: 1.8;
          }

          .milestone-card p {
            text-align: justify;
          }
        }

        /* ==================================================
           REDUCED MOTION
        ================================================== */

        @media (prefers-reduced-motion: reduce) {
          .vision-mission-card::before,
          .accent-line::after,
          .vision-mission-icon {
            animation: none;
          }

          .milestone-card,
          .award-card,
          .vision-mission-card,
          .accent-line,
          .vision-mission-icon {
            transition: none;
          }

          .milestone-card:hover,
          .award-card:hover,
          .vision-mission-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}