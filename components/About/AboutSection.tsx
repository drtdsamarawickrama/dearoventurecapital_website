"use client";

import Image from "next/image";

import OurValues from "@/components/About/Our_values/page";
import KeyMilestones from "@/components/About/KeyMilestones/page";
import AwardsRecognition from "./AwardsRecognition/page";

export default function AboutSection() {
 

  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* ==================================================
            ABOUT HEADER
        ================================================== */}

        <div className="about-header">
          <div className="section-kicker">

          </div>

          <h2 className="about-main-title">
            <span className="about-text">About</span>{" "}
            <span className="us-text">Us</span>
          </h2>

          {/* <p className="about-heading-description">
            Building opportunities. Supporting ambition. Creating sustainable
            value.
          </p> */}
        </div>

        {/* ==================================================
            ABOUT IMAGE
        ================================================== */}

        <div className="about-image-wrapper">
          <div className="about-image-container">
            <Image
              src="/images/about_dearo_new.jpg"
              alt="About Dearo Venture Capital"
              fill
              className="about-image"
              sizes="(max-width: 576px) 100vw, (max-width: 992px) 100vw, 1300px"
              priority
            />

            <div className="image-overlay"></div>

            <div className="image-badge">
              <span className="badge-year">2022</span>
              <span className="badge-text">Established</span>
            </div>

            <div className="image-corner image-corner-top"></div>
            <div className="image-corner image-corner-bottom"></div>
          </div>
        </div>

        {/* ==================================================
            ABOUT CONTENT
        ================================================== */}

        <div className="about-description-wrapper">
          <div className="description-accent"></div>

          <p className="about-description">
            Dearo Venture Capital Ltd is a diversified investment and business
            development organization dedicated to creating sustainable value
            for individuals, entrepreneurs, SMEs, and corporate partners across
            Sri Lanka. Established in September 2022, the company has rapidly
            evolved into one of the country's emerging investment institutions,
            driven by a vision of empowering economic growth, supporting
            innovation, and creating opportunities that uplift communities.
            Through disciplined risk management, sound governance practices,
            and a client-centric approach, Dearo Venture Capital Ltd provides
            investment solutions that help clients achieve financial security
            while contributing to national economic development. Our strength
            lies in understanding market opportunities, building strategic
            partnerships, and delivering innovative financial solutions that
            generate long-term returns and sustainable growth.
          </p>
        </div>

        {/* ==================================================
            VISION & MISSION
        ================================================== */}

        <div className="vision-mission-section">
          <div className="vision-mission-header">
            <h3>
              Driven by <span>purpose.</span> Focused on impact.
            </h3>
          </div>

          <div className="row vision-mission-row">
            {/* VISION */}

            <div className="col-12 col-md-6 vision-mission-column">
              <div className="vision-mission-card vision-card">
                <div className="vision-mission-icon vision-icon">
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

                <div className="vision-card-content">


                  <h4>
                    Our <strong>Vision</strong>
                  </h4>

                  <p>
                    To become a trusted investment and venture capital
                    institution contributing to sustainable economic growth
                    and prosperity in Sri Lanka.
                  </p>
                </div>
              </div>
            </div>

            {/* MISSION */}

            <div className="col-12 col-md-6 vision-mission-column">
              <div className="vision-mission-card mission-card">
                <div className="vision-mission-icon mission-icon">
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

                <div className="vision-card-content">

                  <h4>
                    Our <strong>Mission</strong>
                  </h4>

                  <p>
                    To connect capital with opportunity by creating responsible
                    investment solutions and supporting businesses with the
                    resources required to grow.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ==================================================
              OUR VALUES
          ================================================== */}

          <div className="story-section">
            <div className="story-heading">
              <h3 className="story-title">
                <span className="story-our">Our</span>{" "}
                <span className="story-story">Values</span>
              </h3>

               <p className="story-subtitle">
Our values guide the way we build relationships, create opportunities, and deliver sustainable growth.

              </p> 
            </div>

           </div>

          <div>
            <OurValues />
          </div>

          {/* ==================================================
              OUR STORY
          ================================================== */}

          <div className="story-section">
            <div className="story-heading">
              <h3 className="story-title">
                <span className="story-our">Our</span>{" "}
                <span className="story-story">Story</span>
              </h3>

              <p className="story-subtitle">
                A journey built on opportunity, progress and purpose.
              </p>
            </div>

            <div className="story-card">
              <div className="story-quote">“</div>

              <div className="story-content">
                <p>
                  At Dearo Venture Capital Ltd, we believe that every
                  individual, entrepreneur, and business has the potential to
                  achieve extraordinary growth when supported by the right
                  financial partner. Our brand was built on the vision of
                  creating opportunities, empowering ambitions, and guiding
                  investments toward long-term prosperity.

                  The Dearo logo represents a journey of progress. The
                  upward-moving arrow symbolizes growth, achievement, and the
                  continuous pursuit of success. The flowing paths beneath the
                  arrow reflect the diverse financial journeys of our
                  clients—individual investors, entrepreneurs, SMEs, and growing
                  enterprises—all converging toward a common destination:
                  financial security and wealth creation.

                  Just as roads lead to new opportunities, Dearo serves as a
                  trusted pathway connecting people with innovative investment
                  solutions, strategic financial guidance, and sustainable
                  wealth-building opportunities. The logo captures our
                  commitment to helping clients move forward with confidence,
                  clarity, and purpose.
                </p>
              </div>

              <div className="story-bottom-accent"></div>
            </div>
          </div> 

          {/* ==================================================
             WHY INVEST WITH DEARO
        ================================================== */}

        <div className="vision-mission-section">
          <div className="vision-mission-header">
            <h3>
              Investing with <span>purpose.</span> Creating lasting value.
            </h3>
          </div>

          <div className="row vision-mission-row">
            {/* VISION */}

            <div className="col-12 col-md-6 vision-mission-column">
              <div className="vision-mission-card vision-card">
                

                <div className="vision-card-content">


                  <h4>
                    Our <strong>Investment Philosophy</strong>
                  </h4>

                  <p>
                    Long-term value creation.
                  </p>
                  <p>
                    Strategic and responsible investing.
                  </p>
                  <p>
                    Diversification across high-potential sectors.
                  </p>
                  <p>
                    Transparency and trust in stakeholder relationships.
                  </p>
                  <p>
                    Strong corporate governance and compliance.
                  </p>
                  <p>
                    Driving sustainable growth.
                  </p>
                  <p>
                    Sustainable and ethical business practices.
                  </p>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 vision-mission-column">
              <div className="vision-mission-card mission-card">
                

                <div className="vision-card-content">

                  <h4>
                    Why <strong>Invest With Dearo</strong>
                  </h4>

                  <p>
                    Strong leadership and corporate governance.
                  </p>
                  <p>
                    Diversified investment portfolio.
                  </p>
                  <p>
                    Focus on sustainable and scalable ventures.
                  </p>
                  <p>
                    Investor-friendly investment structures.
                  </p>
                  <p>
                    Commitment to transparency and accountability.
                  </p>
                  <p>
                    Professional management and risk controls.
                  </p>
                  <p>
                    Long-term wealth creation opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
          </div>



          <KeyMilestones />

          <AwardsRecognition />
                  </div>

        
      </div>

      {/* ==================================================
          CSS
      ================================================== */}

      <style jsx>{`
        /* ==================================================
           MAIN SECTION
        ================================================== */

        .about-section {
          position: relative;
          padding: 0 0 90px;
          overflow: hidden;
          background: #f8fafc;
        }

        .about-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 300px;

          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(11, 31, 75, 0.05),
              transparent 35%
            ),
            radial-gradient(
              circle at 90% 10%,
              rgba(198, 40, 40, 0.04),
              transparent 30%
            );

          pointer-events: none;
        }

        .about-header,
        .vision-mission-section,
        .story-section,
        .milestones-section,
        .values-section {
          position: relative;
          z-index: 2;
        }

        /* ==================================================
           ABOUT HEADER
        ================================================== */

        .about-header {
          text-align: center;
          padding-top: 48px;
          margin-bottom: 38px;
        }

        

        .about-main-title {
          margin: 0;

          font-size: clamp(2.2rem, 4vw, 3.4rem);

          line-height: 1.1;

          font-weight: 800;

          letter-spacing: -0.04em;
        }

        .about-text {
          color: #0b1f4b;
        }

        .us-text {
          color: #c62828;
        }

        .about-heading-description {
          max-width: 650px;

          margin: 14px auto 0;

          color: #6b7280;

          font-size: clamp(0.9rem, 1.1vw, 1rem);

          line-height: 1.7;
        }

        /* ==================================================
           ABOUT IMAGE
        ================================================== */

        .about-image-wrapper {
          width: 100%;
          max-width: 1300px;

          margin: 0 auto 42px;

          position: relative;
        }

        .about-image-container {
          position: relative;

          width: 100%;

          height: 0;

          padding-bottom: 42%;

          overflow: hidden;

          border-radius: 22px;

          background: #0b1f4b;

          box-shadow:
            0 20px 50px rgba(11, 31, 75, 0.12),
            0 5px 15px rgba(11, 31, 75, 0.06);
        }

        .about-image {
          object-fit: cover;

          object-position: center center;

          transition: transform 0.8s ease;
        }

        .about-image-container:hover .about-image {
          transform: scale(1.025);
        }

        .image-overlay {
          position: absolute;

          inset: 0;

          background:
            linear-gradient(
              90deg,
              rgba(11, 31, 75, 0.48),
              transparent 45%,
              rgba(11, 31, 75, 0.05)
            );

          z-index: 1;
        }

        .image-badge {
          position: absolute;

          left: 30px;
          bottom: 30px;

          z-index: 3;

          display: flex;

          flex-direction: column;

          padding: 13px 18px;

          min-width: 125px;

          background: rgba(255, 255, 255, 0.96);

          border-left: 4px solid #c62828;

          border-radius: 8px;

          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.12);
        }

        .badge-year {
          color: #0b1f4b;

          font-size: 1.35rem;

          line-height: 1;

          font-weight: 800;
        }

        .badge-text {
          color: #6b7280;

          font-size: 0.7rem;

          margin-top: 5px;

          letter-spacing: 0.08em;

          text-transform: uppercase;
        }

        .image-corner {
          position: absolute;

          z-index: 3;

          width: 70px;
          height: 70px;

          pointer-events: none;
        }

        .image-corner-top {
          top: 20px;
          right: 20px;

          border-top: 2px solid rgba(255, 255, 255, 0.75);
          border-right: 2px solid rgba(255, 255, 255, 0.75);
        }

        .image-corner-bottom {
          bottom: 20px;
          right: 20px;

          border-bottom: 2px solid rgba(198, 40, 40, 0.9);
          border-right: 2px solid rgba(198, 40, 40, 0.9);
        }

        /* ==================================================
           ABOUT DESCRIPTION
        ================================================== */

        .about-description-wrapper {
          position: relative;

          width: 100%;

          max-width: 1100px;

          margin: 0 auto 65px;

          padding: 0 60px;
        }

        .description-accent {
          position: absolute;

          top: 4px;
          left: 0;

          width: 4px;
          height: 80px;

          border-radius: 10px;

          background: linear-gradient(
            180deg,
            #0b1f4b,
            #c62828
          );
        }

        .about-description {
          margin: 0;

          color: #374151;

          font-size: clamp(0.96rem, 1.1vw, 1.07rem);

          line-height: 1.9;

          font-weight: 400;

          text-align: justify;

          text-justify: inter-word;

          letter-spacing: 0.005em;

          overflow-wrap: break-word;
        }

        /* ==================================================
           VISION MISSION
        ================================================== */

        .vision-mission-section {
          margin-bottom: 50px;
        }

        .vision-mission-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .vision-mission-header h3 {
          margin: 0;

          color: #0b1f4b;

          font-size: clamp(1.45rem, 2.5vw, 2rem);

          font-weight: 700;

          letter-spacing: -0.025em;
        }

        .vision-mission-header h3 span {
          color: #c62828;
        }

        .vision-mission-row {
          margin: 0 -10px;
        }

        .vision-mission-column {
          padding: 10px;
        }

        .vision-mission-card {
          position: relative;

          min-height: 220px;

          padding: 34px 38px;

          overflow: hidden;

          background: #ffffff;

          border: 1px solid rgba(11, 31, 75, 0.08);

          border-radius: 18px;

          box-shadow:
            0 10px 30px rgba(11, 31, 75, 0.055);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .vision-mission-card:hover {
          transform: translateY(-7px);

          border-color: rgba(198, 40, 40, 0.25);

          box-shadow:
            0 18px 40px rgba(11, 31, 75, 0.1);
        }

        .vision-mission-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 100%;
          height: 4px;

          background: linear-gradient(
            90deg,
            #0b1f4b 0%,
            #0b1f4b 65%,
            #c62828 65%,
            #c62828 100%
          );
        }

        .vision-mission-icon {
          position: absolute;

          top: 28px;
          right: 28px;

          width: 48px;
          height: 48px;

          display: flex;

          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: #f8fafc;

          color: #c62828;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .mission-icon {
          color: #0b1f4b;
        }

        .vision-mission-icon svg {
          width: 31px;
          height: 31px;
        }

        .vision-mission-card:hover .vision-mission-icon {
          transform: rotate(5deg) scale(1.08);

          background: #fff4f4;

          color: #c62828;
        }

        .vision-card-content {
          position: relative;

          z-index: 2;

          padding-right: 65px;
        }

        .card-accent {
          width: 38px;
          height: 3px;

          margin-bottom: 16px;

          background: #c62828;

          border-radius: 10px;
        }

        .card-label {
          display: block;

          color: #9ca3af;

          font-size: 0.65rem;

          font-weight: 800;

          letter-spacing: 0.16em;

          margin-bottom: 7px;
        }

        .vision-mission-card h4 {
          margin: 0 0 13px;

          color: #0b1f4b;

          font-size: clamp(1.35rem, 2vw, 1.7rem);

          font-weight: 400;
        }

        .vision-mission-card h4 strong {
          color: #c62828;

          font-weight: 800;
        }

        .vision-mission-card p {
          margin: 0;

          color: #4b5563;

          font-size: clamp(0.9rem, 1vw, 1rem);

          line-height: 1.75;

          text-align: justify;
        }

        /* ==================================================
           OUR VALUES
        ================================================== */

        .values-section {
          position: relative;

          z-index: 2;

          margin: 65px 0 78px;
        }

        /* ==================================================
           STORY
        ================================================== */

        .story-section {
          margin-top: 50px;
          margin-bottom: 60px;
        }

        .story-heading {
          text-align: center;

          margin-bottom: 30px;
        }

        .story-title {
          margin: 0;

          font-size: clamp(2rem, 3.5vw, 2.8rem);

          line-height: 1.15;

          font-weight: 800;

          letter-spacing: -0.04em;
        }

        .story-our {
          color: #0b1f4b;
        }

        .story-story {
          color: #c62828;
        }

        .story-subtitle {
          margin: 10px 0 0;

          color: #6b7280;

          font-size: 0.9rem;
        }

        .story-card {
          position: relative;

          width: 100%;

          max-width: 1250px;

          margin: 0 auto;

          padding: 60px 85px 52px;

          overflow: hidden;

          background: #ffffff;

          border: 1px solid rgba(11, 31, 75, 0.08);

          border-radius: 22px;

          box-shadow:
            0 15px 45px rgba(11, 31, 75, 0.07);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .story-card:hover {
          transform: translateY(-3px);

          box-shadow:
            0 20px 50px rgba(11, 31, 75, 0.1);
        }

        .story-card::before {
          content: "";

          position: absolute;

          top: 0;
          left: 0;

          width: 7px;
          height: 100%;

          background: linear-gradient(
            180deg,
            #0b1f4b 0%,
            #0b1f4b 55%,
            #c62828 55%,
            #c62828 100%
          );
        }

        .story-quote {
          position: absolute;

          top: 0;
          left: 28px;

          color: #0b1f4b;

          font-family: Georgia, "Times New Roman", serif;

          font-size: clamp(7rem, 11vw, 10rem);

          line-height: 1;

          font-weight: 700;

          opacity: 0.5;

          pointer-events: none;

          user-select: none;

          z-index: 1;
        }

        .story-content {
          position: relative;

          z-index: 2;

          width: 100%;
        }

        .story-content p {
          margin: 0 0 20px;

          color: #374151;

          font-size: clamp(0.96rem, 1.1vw, 1.08rem);

          line-height: 1.9;

          text-align: justify;

          text-justify: inter-word;

          font-weight: 400;

          letter-spacing: 0.005em;
        }

        .story-content p:last-child {
          margin-bottom: 0;
        }

        .story-bottom-accent {
          position: absolute;

          left: 7px;
          bottom: 0;

          width: calc(100% - 7px);

          height: 4px;

          background: linear-gradient(
            90deg,
            #0b1f4b 0%,
            #0b1f4b 68%,
            #c62828 68%,
            #c62828 100%
          );
        }

        /* ==================================================
           SECTION HEADERS
        ================================================== */

        .section-header {
          text-align: center;

          margin-bottom: 32px;
        }

        .section-heading {
          margin: 0;

          color: #0b1f4b;

          font-size: clamp(1.8rem, 3vw, 2.4rem);

          line-height: 1.2;

          font-weight: 800;

          letter-spacing: -0.035em;
        }

        .section-heading span {
          color: #c62828;
        }

        .section-subtitle {
          max-width: 600px;

          margin: 10px auto 0;

          color: #6b7280;

          font-size: 0.9rem;

          line-height: 1.6;
        }

        /* ==================================================
           MILESTONES
        ================================================== */

        .milestones-section {

        }

        .milestones-grid {
          display: grid;

          grid-template-columns: repeat(2, minmax(0, 1fr));

          gap: 20px;

          max-width: 1250px;

          margin: 0 auto;
        }

        .milestone-card {
          position: relative;

          min-height: 235px;

          padding: 28px 30px;

          overflow: hidden;

          background: #ffffff;

          border: 1px solid rgba(11, 31, 75, 0.08);

          border-radius: 17px;

          box-shadow:
            0 8px 25px rgba(11, 31, 75, 0.05);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .milestone-card:hover {
          transform: translateY(-5px);

          border-color: rgba(198, 40, 40, 0.25);

          box-shadow:
            0 15px 35px rgba(11, 31, 75, 0.09);
        }

        .milestone-top {
          display: flex;

          align-items: center;

          justify-content: space-between;

          margin-bottom: 13px;
        }

        .milestone-year {
          color: #c62828;

          font-size: 0.85rem;

          font-weight: 800;

          letter-spacing: 0.12em;
        }

        .milestone-number {
          color: #0b1f4b;

          font-size: 0.7rem;

          font-weight: 800;

          letter-spacing: 0.1em;

          opacity: 0.45;
        }

        .milestone-line {
          width: 45px;
          height: 3px;

          margin-bottom: 17px;

          background: linear-gradient(
            90deg,
            #0b1f4b,
            #c62828
          );

          border-radius: 10px;
        }

        .milestone-card h5 {
          margin: 0 0 12px;

          color: #0b1f4b;

          font-size: clamp(1.05rem, 1.3vw, 1.2rem);

          line-height: 1.3;

          font-weight: 750;
        }

        .milestone-card p {
          margin: 0;

          max-width: 95%;

          color: #4b5563;

          font-size: clamp(0.88rem, 1vw, 0.98rem);

          line-height: 1.7;

          text-align: justify;

          text-justify: inter-word;
        }

        .milestone-arrow {
          position: absolute;

          right: 25px;
          bottom: 20px;

          color: #c62828;

          font-size: 1.25rem;

          opacity: 0;

          transform: translate(5px, 5px);

          transition:
            opacity 0.3s ease,
            transform 0.3s ease;
        }

        .milestone-card:hover .milestone-arrow {
          opacity: 1;

          transform: translate(0, 0);
        }

       

        /* ==================================================
           TABLET
        ================================================== */

        @media (max-width: 992px) {
          .about-section {
            padding-bottom: 65px;
          }

          .about-header {
            padding-top: 40px;

            margin-bottom: 30px;
          }

          .about-image-container {
            padding-bottom: 47%;

            border-radius: 18px;
          }

          .about-image-wrapper {
            margin-bottom: 35px;
          }

          .about-description-wrapper {
            padding: 0 30px;

            margin-bottom: 55px;
          }

          .vision-mission-section {
            margin-bottom: 60px;
          }

          .vision-mission-card {
            min-height: 245px;

            padding: 30px 28px;
          }

          .vision-mission-icon {
            top: 25px;
            right: 24px;
          }

          .story-section {
            margin-bottom: 60px;
          }

          .story-card {
            padding: 50px 52px 45px;

            border-radius: 18px;
          }

          .story-quote {
            left: 20px;

            font-size: 7rem;
          }

          .milestones-section {
            margin-bottom: 60px;
          }

          .milestone-card {
            min-height: 225px;

            padding: 25px 24px;
          }

          

        /* ==================================================
           MOBILE
        ================================================== */

        @media (max-width: 768px) {
          .about-section {
            padding-bottom: 50px;
          }

          .about-header {
            padding-top: 32px;

            margin-bottom: 25px;
          }

          .section-kicker {
            font-size: 0.62rem;

            gap: 7px;

            letter-spacing: 0.14em;
          }

          .section-kicker span {
            width: 18px;

            height: 2px;
          }

          .about-main-title {
            font-size: clamp(1.8rem, 7vw, 2.3rem);
          }

          .about-heading-description {
            font-size: 0.82rem;

            padding: 0 15px;
          }

          .about-image-container {
            padding-bottom: 58%;

            border-radius: 14px;
          }

          .about-image-wrapper {
            margin-bottom: 28px;
          }

          .image-badge {
            left: 15px;
            bottom: 15px;

            min-width: 105px;

            padding: 10px 13px;
          }

          .badge-year {
            font-size: 1.1rem;
          }

          .badge-text {
            font-size: 0.58rem;
          }

          .image-corner {
            width: 40px;
            height: 40px;
          }

          .image-corner-top {
            top: 12px;
            right: 12px;
          }

          .image-corner-bottom {
            bottom: 12px;
            right: 12px;
          }

          .about-description-wrapper {
            padding: 0 20px;

            margin-bottom: 48px;
          }

          .description-accent {
            width: 3px;

            height: 65px;
          }

          .about-description {
            font-size: clamp(0.88rem, 3vw, 0.96rem);

            line-height: 1.75;

            text-align: justify;
          }

          .vision-mission-section {
            margin-bottom: 52px;
          }

          .vision-mission-header {
            margin-bottom: 22px;
          }

          .vision-mission-header h3 {
            font-size: clamp(1.25rem, 5vw, 1.55rem);
          }

          .vision-mission-row {
            margin-left: 0;
            margin-right: 0;
          }

          .vision-mission-column {
            padding: 7px 0;
          }

          .vision-mission-card {
            min-height: 0;

            padding: 25px 22px;

            border-radius: 14px;
          }

          .vision-mission-icon {
            top: 20px;
            right: 20px;

            width: 42px;
            height: 42px;
          }

          .vision-mission-icon svg {
            width: 27px;
            height: 27px;
          }

          .vision-card-content {
            padding-right: 50px;
          }

          .card-accent {
            width: 32px;

            margin-bottom: 12px;
          }

          .card-label {
            font-size: 0.58rem;

            margin-bottom: 5px;
          }

          .vision-mission-card h4 {
            font-size: 1.25rem;

            margin-bottom: 10px;
          }

          .vision-mission-card p {
            font-size: clamp(0.84rem, 2.8vw, 0.93rem);

            line-height: 1.7;
          }

          /* STORY */

          .story-section {
  margin-top: 60px;
  margin-bottom: 78px;
}

          .story-heading {

            margin-bottom: 23px;
          }

          .story-title {
            font-size: clamp(1.7rem, 7vw, 2rem);
          }

          .story-subtitle {
            padding: 0 15px;

            font-size: 0.78rem;
          }

          .story-card {
            padding: 43px 25px 35px;

            border-radius: 14px;
          }

          .story-card::before {
            width: 4px;
          }

          .story-quote {
            left: 12px;
            top: 3px;

            font-size: 5.5rem;
          }

          .story-content p {
            font-size: clamp(0.87rem, 2.8vw, 0.95rem);

            line-height: 1.75;

            text-align: justify;

            margin-bottom: 16px;
          }

          .story-bottom-accent {
            left: 4px;

            width: calc(100% - 4px);

            height: 3px;
          }

          /* SECTION HEADINGS */

          .section-heading {
            font-size: clamp(1.55rem, 6vw, 1.9rem);
          }

          .section-subtitle {
            padding: 0 20px;

            font-size: 0.78rem;
          }

          /* MILESTONES */

          .milestones-section {
          }

         
        /* ==================================================
           SMALL MOBILE
        ================================================== */

        @media (max-width: 576px) {
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }

          .about-header {
            padding-top: 27px;

            margin-bottom: 22px;
          }

          .about-main-title {
            font-size: clamp(1.65rem, 8vw, 2rem);
          }

          .about-heading-description {
            font-size: 0.77rem;

            line-height: 1.6;
          }

          .about-image-container {
            padding-bottom: 62%;

            border-radius: 12px;
          }

          .about-description-wrapper {
            padding: 0 12px;

            margin-bottom: 42px;
          }

          .description-accent {
            height: 55px;
          }

          .about-description {
            font-size: clamp(0.84rem, 3vw, 0.9rem);

            line-height: 1.72;
          }

          .vision-mission-card {
            padding: 22px 18px;

            border-radius: 12px;
          }

          .vision-mission-icon {
            top: 17px;
            right: 17px;

            width: 38px;
            height: 38px;
          }

          .vision-mission-icon svg {
            width: 24px;
            height: 24px;
          }

          .vision-card-content {
            padding-right: 43px;
          }

          .vision-mission-card h4 {
            font-size: 1.15rem;
          }

          .vision-mission-card p {
            font-size: 0.84rem;

            line-height: 1.65;
          }

          /* STORY */

          .story-card {
            padding: 38px 18px 30px;

            border-radius: 12px;
          }

          .story-quote {
            left: 7px;

            font-size: 4.5rem;
          }

          .story-content p {
            font-size: clamp(0.82rem, 3vw, 0.9rem);

            line-height: 1.7;
          }

          /* MILESTONES */

          .milestone-card {
            padding: 20px 17px;
          }

          .milestone-year {
            font-size: 0.75rem;
          }

          .milestone-card h5 {
            font-size: 0.96rem;
          }

          .milestone-card p {
            font-size: clamp(0.82rem, 3vw, 0.9rem);

            line-height: 1.7;
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
            font-size: 1.55rem;
          }

          .section-heading {
            font-size: 1.4rem;
          }

          .about-image-container {
            padding-bottom: 66%;
          }

          .image-badge {
            left: 10px;
            bottom: 10px;

            min-width: 92px;

            padding: 8px 10px;
          }

          .badge-year {
            font-size: 1rem;
          }

          .badge-text {
            font-size: 0.52rem;
          }

          .about-description-wrapper {
            padding: 0 7px;
          }

          .about-description {
            font-size: 0.82rem;

            line-height: 1.68;
          }

          .vision-mission-card {
            padding: 19px 15px;

            border-radius: 10px;
          }

          .vision-mission-icon {
            top: 15px;
            right: 15px;

            width: 34px;
            height: 34px;
          }

          .vision-mission-icon svg {
            width: 21px;
            height: 21px;
          }

          .vision-card-content {
            padding-right: 38px;
          }

          .card-accent {
            width: 28px;

            height: 2px;

            margin-bottom: 10px;
          }

          .card-label {
            font-size: 0.52rem;
          }

          .vision-mission-card h4 {
            font-size: 1.05rem;
          }

          .vision-mission-card p {
            font-size: 0.8rem;

            line-height: 1.62;
          }

          /* STORY */

          .story-card {
            padding: 34px 14px 27px;
          }

          .story-quote {
            left: 4px;

            font-size: 4rem;
          }

          .story-content p {
            font-size: 0.82rem;

            line-height: 1.68;
          }

          /* MILESTONES */

          .milestone-card {
            padding: 17px 14px;
          }

          .milestone-card p {
            font-size: 0.82rem;

            line-height: 1.65;
          }

          

        /* ==================================================
           LARGE DESKTOP
        ================================================== */

        @media (min-width: 1200px) {
          .about-header {
            padding-top: 55px;
          }

          .about-image-container {
            padding-bottom: 39%;
          }

          .about-description-wrapper {
            max-width: 1150px;
          }

          .vision-mission-card {
            min-height: 275px;

            padding: 38px 42px;
          }

          .story-card {
            max-width: 1300px;

            padding: 65px 95px 55px;
          }

          .story-content p {
            font-size: 1.08rem;

            line-height: 1.92;
          }

          .milestones-grid {
            max-width: 1300px;

            gap: 22px;
          }

          
        /* ==================================================
           ULTRA WIDE
        ================================================== */

        @media (min-width: 1600px) {
          .about-image-container {
            padding-bottom: 35%;
          }

          .about-description {
            font-size: 1.1rem;
          }

          .story-card {
            max-width: 1400px;

            padding-left: 105px;
            padding-right: 105px;
          }

          .story-content p {
            font-size: 1.1rem;

            line-height: 1.95;
          }

          .story-quote {
            font-size: 11rem;

            left: 35px;
          }

          .milestone-card {
            min-height: 250px;
          }

          .awards-section {
            padding: 60px 55px 65px;
          }
        }

        /* ==================================================
           REDUCED MOTION
        ================================================== */

        @media (prefers-reduced-motion: reduce) {
          .about-image,
          .vision-mission-card,
          .story-card,
          .milestone-card,
          .milestone-arrow,
          .award-card,
          .award-icon,
          .award-top-line,
          .award-bottom-line {
            transition: none;
          }

          .about-image-container:hover .about-image,
          .vision-mission-card:hover,
          .story-card:hover,
          .milestone-card:hover,
          .award-card:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}