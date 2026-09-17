
"use client";

import Image from "next/image";

export default function AwardsRecognition() {
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
    <section className="awards-section">
      
      <div className="section-header">
        
        <h2 className="section-heading">
          Awards & <span>Recognition</span>
        </h2>

        <p className="section-subtitle">
          Recognition of excellence and leadership.
        </p>
      </div>

      <div className="row awards-row">
        {awards.map((award, index) => (
          <div
            key={index}
            className="col-6 col-md-4 col-lg-3 award-column"
          >
            <div className="award-card">
              <div className="award-top-line"></div>

              <div className="award-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="award-icon">
                <Image
                  src={award.image}
                  alt={award.title}
                  fill
                  className="award-img"
                  sizes="(max-width: 576px) 70px, (max-width: 992px) 100px, 120px"
                />
              </div>

              <h3>{award.title}</h3>

            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* =========================================
           MAIN SECTION
        ========================================= */

        .awards-section {
          position: relative;
          width: 100%;
          margin: 70px auto 20px;
          padding: 65px 45px 70px;
          background:
            radial-gradient(
              circle at 10% 20%,
              rgba(198, 40, 40, 0.055),
              transparent 30%
            ),
            radial-gradient(
              circle at 90% 80%,
              rgba(11, 31, 75, 0.07),
              transparent 32%
            ),
            linear-gradient(
              135deg,
              #ffffff 0%,
              #f8faff 50%,
              #ffffff 100%
            );
          border-radius: 24px;
          box-shadow: 0 12px 40px rgba(11, 31, 75, 0.07);
          overflow: hidden;
          isolation: isolate;
        }

        /* Top Navy + Red Accent */

        .awards-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 5px;
          
          z-index: 5;
        }

        /* =========================================
           DECORATIVE BACKGROUND
        ========================================= */

        .background-circle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
        }

        .circle-one {
          width: 300px;
          height: 300px;
          top: -150px;
          right: -100px;
          border: 1px solid rgba(11, 31, 75, 0.07);
          background: rgba(11, 31, 75, 0.025);
        }

        .circle-two {
          width: 230px;
          height: 230px;
          bottom: -120px;
          left: -90px;
          border: 1px solid rgba(198, 40, 40, 0.08);
          background: rgba(198, 40, 40, 0.025);
        }

        .background-line {
          position: absolute;
          width: 420px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(11, 31, 75, 0.08),
            transparent
          );
          transform: rotate(-35deg);
          pointer-events: none;
          z-index: -1;
        }

        .line-one {
          top: 150px;
          left: -160px;
        }

        .line-two {
          bottom: 130px;
          right: -150px;
          transform: rotate(-35deg);
        }

        /* =========================================
           HEADER
        ========================================= */

        .section-header {
          position: relative;
          z-index: 2;
          text-align: center;
          margin-bottom: 50px;
        }

        .heading-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin-bottom: 12px;
        }

        .heading-decoration span {
          display: block;
          height: 3px;
          border-radius: 10px;
        }

        .heading-decoration span:nth-child(1) {
          width: 22px;
          background: #0b1f4b;
        }

        .heading-decoration span:nth-child(2) {
          width: 38px;
          background: #c62828;
        }

        .heading-decoration span:nth-child(3) {
          width: 12px;
          background: #0b1f4b;
        }

        .section-heading {
          margin: 0;
          color: #0b1f4b;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          line-height: 1.2;
          font-weight: 800;
          letter-spacing: -0.035em;
        }

        .section-heading span {
          color: #c62828;
          font-weight: 800;
          font-size: clamp(1.8rem, 3vw, 2.5rem);

        }

        .section-subtitle {
          max-width: 600px;
          margin: 12px auto 0;
          color: #6b7280;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        /* =========================================
           GRID
        ========================================= */

        .awards-row {
          position: relative;
          z-index: 2;
          margin-left: -10px;
          margin-right: -10px;
        }

        .award-column {
          padding: 10px;
          margin-bottom: 10px;
        }

        /* =========================================
           AWARD CARD
        ========================================= */

        .award-card {
          position: relative;
          min-height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 32px 16px 25px;
          overflow: hidden;

          background: rgba(255, 255, 255, 0.95);
          border: 1px solid rgba(11, 31, 75, 0.09);
          border-radius: 18px;

          text-align: center;

          box-shadow:
            0 8px 25px rgba(11, 31, 75, 0.055),
            0 2px 6px rgba(11, 31, 75, 0.025);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .award-card:hover {
          transform: translateY(-8px);
          border-color: rgba(198, 40, 40, 0.28);

          box-shadow:
            0 20px 45px rgba(11, 31, 75, 0.12),
            0 5px 12px rgba(198, 40, 40, 0.05);
        }

        /* =========================================
           TOP LINE
        ========================================= */

        .award-top-line {
          position: absolute;
          top: 0;
          left: 0;
          width: 45%;
          height: 3px;
          background: #0b1f4b;

          transition:
            width 0.3s ease,
            background 0.3s ease;
        }

        .award-card:hover .award-top-line {
          width: 100%;
          background: linear-gradient(
            90deg,
            #0b1f4b,
            #c62828
          );
        }

        /* =========================================
           NUMBER
        ========================================= */

        .award-number {
          position: absolute;
          top: 13px;
          right: 15px;

          color: rgba(11, 31, 75, 0.12);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.08em;
        }

        /* =========================================
           AWARD IMAGE
        ========================================= */

        .award-icon {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 8px auto 22px;
          flex-shrink: 0;

          transition:
            transform 0.3s ease,
            filter 0.3s ease;
        }

        .award-card:hover .award-icon {
          transform: scale(1.06);
        }

        .award-img {
          object-fit: contain;
          object-position: center;
        }

        /* =========================================
           TITLE
        ========================================= */

        .award-card h3 {
          max-width: 190px;
          margin: 0;

          color: #0b1f4b;
          font-size: clamp(0.78rem, 0.9vw, 0.92rem);
          line-height: 1.45;
          font-weight: 700;
          text-align: center;
        }

        /* =========================================
           BOTTOM RED LINE
        ========================================= */

        .award-bottom-line {
          width: 25px;
          height: 2px;
          margin-top: 15px;

          background: #c62828;
          border-radius: 10px;

          transition: width 0.3s ease;
        }

        .award-card:hover .award-bottom-line {
          width: 55px;
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 992px) {
          .awards-section {
            margin-top: 60px;
            padding: 50px 25px 55px;
            border-radius: 18px;
          }

          .section-header {
            margin-bottom: 42px;
          }

          .award-card {
            min-height: 270px;
            padding: 30px 15px 23px;
          }

          .award-icon {
            width: 100px;
            height: 100px;
            margin-bottom: 18px;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 768px) {
          .awards-section {
            margin-top: 52px;
            padding: 40px 18px 45px;
            border-radius: 15px;
          }

          .section-header {
            margin-bottom: 32px;
          }

          .section-heading {
            font-size: clamp(1.55rem, 6vw, 1.95rem);
          }

          .section-subtitle {
            padding: 0 15px;
            font-size: 0.8rem;
          }

          .awards-row {
            margin-left: -6px;
            margin-right: -6px;
          }

          .award-column {
            padding: 6px;
            margin-bottom: 8px;
          }

          .award-card {
            min-height: 220px;
            padding: 25px 10px 20px;
            border-radius: 13px;
          }

          .award-icon {
            width: 82px;
            height: 82px;
            margin-bottom: 14px;
          }

          .award-card h3 {
            max-width: 135px;
            font-size: clamp(0.7rem, 2.5vw, 0.83rem);
          }

          .award-number {
            top: 11px;
            right: 11px;
            font-size: 0.62rem;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 576px) {
          .awards-section {
            margin-top: 45px;
            padding: 34px 12px 38px;
            border-radius: 12px;
          }

          .section-header {
            margin-bottom: 28px;
          }

          .section-heading {
            font-size: clamp(1.45rem, 7vw, 1.8rem);
          }

          .section-subtitle {
            font-size: 0.76rem;
            line-height: 1.55;
          }

          .award-column {
            padding: 5px;
          }

          .award-card {
            min-height: 200px;
            padding: 21px 8px 17px;
            border-radius: 12px;
          }

          .award-icon {
            width: 70px;
            height: 70px;
            margin-bottom: 12px;
          }

          .award-card h3 {
            max-width: 115px;
            font-size: 0.72rem;
            line-height: 1.4;
          }

          .award-bottom-line {
            margin-top: 10px;
          }

          .award-number {
            font-size: 0.58rem;
          }

          .circle-one {
            width: 200px;
            height: 200px;
          }

          .circle-two {
            width: 170px;
            height: 170px;
          }
        }

        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 375px) {
          .awards-section {
            padding: 29px 9px 33px;
          }

          .section-heading {
            font-size: 1.4rem;
          }

          .award-card {
            min-height: 185px;
            padding: 18px 7px 15px;
          }

          .award-icon {
            width: 62px;
            height: 62px;
            margin-bottom: 10px;
          }

          .award-card h3 {
            max-width: 105px;
            font-size: 0.68rem;
          }
        }

        /* =========================================
           REDUCED MOTION
        ========================================= */

        @media (prefers-reduced-motion: reduce) {
          .award-card,
          .award-icon,
          .award-top-line,
          .award-bottom-line {
            transition: none;
          }

          .award-card:hover {
            transform: none;
          }

          .award-card:hover .award-icon {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
