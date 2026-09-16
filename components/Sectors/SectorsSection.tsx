
"use client";

import Image from "next/image";
import Link from "next/link";

const sectors = [
  {
    title: "Agriculture & Plantation",
    description:
      "Sustainable farming solutions powered by modern agricultural technology and innovation.",
    image: "/images/Untitled design (1).png",
    href: "/sectors/agriculture",
  },
  {
    title: "Engineering & Construction",
    description:
      "High-quality civil, structural, and infrastructure development across Sri Lanka.",
    image: "/images/Untitled design (2).png",
    href: "/sectors/engineering",
  },
  {
    title: "Education & Training",
    description:
      "Professional education programs focused on skills development and future readiness.",
    image: "/images/Untitled design (3).png",
    href: "/sectors/education",
  },
  {
    title: "DCCI – From Our Waters to the World",
    description:
      "Sustainable source seafood processed with international quality standards for global markets.",
    image: "/images/Untitled design (4).png",
    href: "/sectors/dcci",
  },
  {
    title: "Dearo IT Solutions",
    description:
      "Innovating the Digital Future: Smart, secure and scalable IT solutions designed to empower your business.",
    image: "/images/Untitled design (5).png",
    href: "/sectors/it-solutions",
  },
  {
    title: "Dearo Islamic Services",
    description:
      "Shariah-compliant solutions offering ethical, transparent and responsible financial services designed to support sustainable growth.",
    image: "/images/Untitled design (6).png",
    href: "/sectors/#",
  },
];

export default function BusinessSectors() {
  return (
    <section className="sectors-section">
      <div className="sectors-container">

        {/* ================= HEADER ================= */}
        <div className="sectors-header">
          <span className="section-label">OUR BUSINESS</span>

          <h2>Our Subsidiaries</h2>

          <p>
            Driving growth through diversified and strategic business ventures
          </p>
        </div>

        {/* ================= GRID ================= */}
        <div className="sectors-grid">
          {sectors.map((sector, index) => (
            <article
              key={sector.title}
              className="sector-card"
              style={{
                animationDelay: `${index * 0.08}s`,
              }}
            >
              {/* ================= IMAGE ================= */}
              <Link
                href={sector.href}
                className="sector-image-link"
                aria-label={`View ${sector.title}`}
              >
                <div className="sector-image-wrapper">

                  <Image
                    src={sector.image}
                    alt={sector.title}
                    fill
                    sizes="
                      (max-width: 639px) 100vw,
                      (max-width: 1023px) 50vw,
                      33vw
                    "
                    className="sector-image"
                    priority={index === 0}
                  />

                  {/* Red bottom accent */}
                  <div className="image-accent" />

                  {/* View More */}
                  <div className="view-more">
                    <span>View More</span>
                    <span className="arrow">→</span>
                  </div>
                </div>
              </Link>

              {/* ================= CONTENT ================= */}
              <div className="sector-content">
                <h3>{sector.title}</h3>

                <p>{sector.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`

        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .sectors-section {
          width: 100%;
          padding: 45px 24px 90px;
          background: #ffffff;
          overflow: hidden;
        }

        .sectors-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* =====================================================
           HEADER
        ===================================================== */

        .sectors-header {
          max-width: 720px;
          margin: 0 auto 50px;
          text-align: center;
          animation: headerFade 0.8s ease forwards;
        }

        .section-label {
          display: inline-block;
          margin-bottom: 10px;
          color: #c62828;
          font-size: 0.75rem;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .sectors-header h2 {
          margin: 0 0 12px;
          color: #0b1f4b !important;
          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.15;
          font-weight: 750;
          letter-spacing: -1px;
        }

        .sectors-header p {
          margin: 0;
          color: #667085;
          font-size: clamp(0.95rem, 1.3vw, 1.08rem);
          line-height: 1.6;
        }

        /* =====================================================
           GRID
        ===================================================== */

        .sectors-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 28px;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .sector-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 100%;
          background: #ffffff;
          border: 1px solid rgba(11, 31, 75, 0.12);
          border-radius: 20px;
          overflow: hidden;

          box-shadow:
            0 8px 25px rgba(11, 31, 75, 0.07),
            0 2px 8px rgba(11, 31, 75, 0.03);

          opacity: 0;

          animation: cardFade 0.65s ease forwards;

          transition:
            transform 0.4s cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .sector-card:hover {
          transform: translateY(-8px);

          border-color: #c62828;

          box-shadow:
            0 24px 55px rgba(11, 31, 75, 0.14),
            0 8px 20px rgba(198, 40, 40, 0.08);
        }

        /* =====================================================
           IMAGE LINK
        ===================================================== */

        .sector-image-link {
          display: block;
          width: 100%;
          text-decoration: none;
          color: inherit;
        }

        /* =====================================================
           IMAGE WRAPPER
        ===================================================== */

        .sector-image-wrapper {
          position: relative;

          width: 100%;

          /*
            Responsive aspect ratio.
            This prevents images from becoming stretched.
          */
          aspect-ratio: 16 / 10;

          overflow: hidden;

          background: #f4f6fa;
        }

        /* =====================================================
           IMAGE

           IMPORTANT:
           cover keeps the image proportional.
           It may crop a small amount from the edges,
           but it will NOT stretch the image.
        ===================================================== */

        .sector-image {
          object-fit: cover !important;
          object-position: center center;

          transition: transform 0.5s ease;
        }

        .sector-card:hover .sector-image {
          transform: scale(1.04);
        }

        /* =====================================================
           RED ACCENT
        ===================================================== */

        .image-accent {
          position: absolute;

          left: 0;
          bottom: 0;

          width: 100%;
          height: 5px;

          background: #c62828;

          transform: scaleX(0);
          transform-origin: left;

          transition: transform 0.4s ease;
        }

        .sector-card:hover .image-accent {
          transform: scaleX(1);
        }

        /* =====================================================
           VIEW MORE
        ===================================================== */

        .view-more {
          position: absolute;

          left: 20px;
          bottom: 20px;

          display: inline-flex;
          align-items: center;

          gap: 9px;

          padding: 9px 15px;

          border: 1px solid #ffffff;
          border-radius: 30px;

          background: #0b1f4b;
          color: #ffffff;

          font-size: 0.8rem;
          font-weight: 700;

          opacity: 0;

          transform: translateY(8px);

          transition:
            opacity 0.35s ease,
            transform 0.35s ease,
            background 0.35s ease;
        }

        .sector-card:hover .view-more {
          opacity: 1;
          transform: translateY(0);
        }

        .view-more:hover {
          background: #c62828;
        }

        .view-more .arrow {
          font-size: 1rem;
          line-height: 1;

          transition: transform 0.3s ease;
        }

        .sector-card:hover .view-more .arrow {
          transform: translateX(4px);
        }

        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .sector-content {
          display: flex;
          flex-direction: column;
          flex: 1;

          padding: 25px 27px 26px;

          background: #ffffff;
        }

        /* =====================================================
           CARD TITLE
        ===================================================== */

        .sector-content h3 {
          position: relative;

          margin: 0 0 13px;

          padding-left: 14px;

          color: #0b1f4b;

          font-size: clamp(1.15rem, 1.5vw, 1.35rem);

          line-height: 1.35;

          font-weight: 700;
        }

        .sector-content h3::before {
          content: "";

          position: absolute;

          left: 0;
          top: 3px;

          width: 4px;

          height: calc(100% - 6px);

          border-radius: 5px;

          background: #c62828;
        }

        /* =====================================================
           CARD DESCRIPTION
        ===================================================== */

        .sector-content p {
          margin: 0;

          color: #667085;

          font-size: 0.93rem;

          line-height: 1.7;
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 640px) and (max-width: 1023px) {

          .sectors-section {
            padding: 40px 28px 75px;
          }

          .sectors-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }

          .sector-image-wrapper {
            aspect-ratio: 16 / 10;
          }

          .sector-content {
            padding: 23px 24px 24px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 639px) {

          .sectors-section {
            padding: 30px 18px 65px;
          }

          .sectors-header {
            margin-bottom: 35px;
          }

          .section-label {
            margin-bottom: 8px;
            font-size: 0.7rem;
          }

          .sectors-header h2 {
            font-size: 2rem;
            letter-spacing: -0.5px;
          }

          .sectors-header p {
            font-size: 0.92rem;
            line-height: 1.6;
          }

          /* One column */

          .sectors-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .sector-card {
            border-radius: 18px;
          }

          /* Responsive image */

          .sector-image-wrapper {
            width: 100%;

            /*
              Keeps the same proportion on every
              mobile screen.
            */
            aspect-ratio: 16 / 10;

            background: #f4f6fa;
          }

          .sector-image {
            object-fit: cover !important;
            object-position: center center;
          }

          /* Content */

          .sector-content {
            padding: 22px 21px 22px;
          }

          .sector-content h3 {
            font-size: 1.18rem;
          }

          .sector-content p {
            font-size: 0.9rem;
            line-height: 1.65;
          }

          /* View more visible on mobile */

          .view-more {
            opacity: 1;

            transform: none;

            left: 15px;
            bottom: 15px;

            padding: 8px 12px;

            font-size: 0.75rem;
          }

          .image-accent {
            transform: scaleX(1);
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .sectors-section {
            padding: 25px 14px 55px;
          }

          .sector-image-wrapper {
            aspect-ratio: 16 / 10;
          }

          .sector-content {
            padding: 20px 18px;
          }

          .sector-content h3 {
            font-size: 1.1rem;
          }

          .sector-content p {
            font-size: 0.88rem;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .sector-card,
          .sectors-header {
            animation: none;
            opacity: 1;
          }

          .sector-card,
          .sector-image,
          .view-more,
          .image-accent {
            transition: none;
          }
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes cardFade {

          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes headerFade {

          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

      `}</style>
    </section>
  );
}
