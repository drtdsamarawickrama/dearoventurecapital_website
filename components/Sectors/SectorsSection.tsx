
"use client";

import Image from "next/image";
import Link from "next/link";

const sectors = [
  {
    title: "Agriculture & Plantation",
    description:
      "Sustainable farming solutions powered by modern agricultural technology and innovation.",
    image: "/images/ag.jpeg",
    href: "/sectors/agriculture",
  },
  {
    title: "Engineering & Construction",
    description:
      "High-quality civil, structural, and infrastructure development across Sri Lanka.",
    image: "/images/eng.png",
    href: "/sectors/engineering",
  },
  {
    title: "Education & Training",
    description:
      "Professional education programs focused on skills development and future readiness.",
    image: "/images/ed.png",
    href: "/sectors/education",
  },
  {
    title: "DCCI – From Our Waters to the World",
    description:
      "Sustainable source seafood processed with international quality standards for global markets.",
    image: "/images/dcc.jpg",
    href: "/sectors/dcci",
  },
  {
    title: "Dearo IT Solutions",
    description:
      "Innovating the Digital Future: Smart, Secure and scalable IT solutions designed to empower your business.",
    image: "/images/it.jpg",
    href: "/sectors/it-solutions",
  },
];

export default function BusinessSectors() {
  return (
    <section className="sectors-section">
      <div className="sectors-container">

        {/* ================= HEADER ================= */}
        <div className="sectors-header">
          {/* <span className="section-label">OUR BUSINESS</span> */}

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

                  <div className="image-gradient" />

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

                {/* <Link href={sector.href} className="learn-more">
                  Explore
                  <span>→</span>
                </Link> */}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ================= STYLES ================= */}
      <style jsx>{`
        /* =====================================================
           SECTION
        ===================================================== */

        .sectors-section {
          width: 100%;

          /* Reduced top space */
          padding: 35px 24px 80px;

          background: #f7f9fc;
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
          margin: 0 auto 45px;
          text-align: center;

          animation: headerFade 0.8s ease forwards;
        }

        .section-label {
          display: inline-block;
          margin-bottom: 10px;

          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;

          color: #1769aa;
        }

        .sectors-header h2 {
          margin: 0 0 12px;

          font-size: clamp(2rem, 4vw, 3.2rem);
          line-height: 1.15;
          font-weight: 750;
          letter-spacing: -1px;

          color: #0b1f4b !important;
        }

        .sectors-header p {
          margin: 0;

          font-size: clamp(0.95rem, 1.3vw, 1.08rem);
          line-height: 1.6;

          color: #667085;
        }

        /* =====================================================
           GRID
        ===================================================== */

        .sectors-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 28px;
        }

        /* =====================================================
           CARD
        ===================================================== */

        .sector-card {
          display: flex;
          flex-direction: column;

          min-width: 0;

          background: #ffffff;

          border: 1px solid rgba(11, 31, 75, 0.07);
          border-radius: 22px;

          overflow: hidden;

          box-shadow:
            0 8px 25px rgba(11, 31, 75, 0.05),
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

          border-color: rgba(23, 105, 170, 0.16);

          box-shadow:
            0 24px 55px rgba(11, 31, 75, 0.11),
            0 8px 20px rgba(11, 31, 75, 0.05);
        }

        /* =====================================================
           IMAGE
        ===================================================== */

        .sector-image-link {
          display: block;

          text-decoration: none;
          color: inherit;
        }

        .sector-image-wrapper {
          position: relative;

          width: 100%;
          height: 250px;

          overflow: hidden;

          background: #e9edf3;
        }

        .sector-image {
          object-fit: cover;

          transition:
            transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.5s ease;
        }

        .sector-card:hover .sector-image {
          transform: scale(1.07);
        }

        /* =====================================================
           IMAGE GRADIENT
        ===================================================== */

        .image-gradient {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to bottom,
              rgba(11, 31, 75, 0) 35%,
              rgba(11, 31, 75, 0.58) 100%
            );

          opacity: 0.75;

          transition: opacity 0.4s ease;
        }

        .sector-card:hover .image-gradient {
          opacity: 1;
        }

        /* =====================================================
           VIEW MORE
        ===================================================== */

        .view-more {
          position: absolute;

          left: 22px;
          bottom: 20px;

          display: inline-flex;
          align-items: center;
          gap: 9px;

          padding: 9px 14px;

          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 30px;

          background: rgba(255, 255, 255, 0.12);

          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);

          color: #ffffff;

          font-size: 0.8rem;
          font-weight: 600;

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

        .view-more .arrow {
          font-size: 1rem;
          line-height: 1;

          transition: transform 0.3s ease;
        }

        .sector-card:hover .view-more .arrow {
          transform: translateX(4px);
        }

        /* =====================================================
           CONTENT
        ===================================================== */

        .sector-content {
          display: flex;
          flex-direction: column;
          flex: 1;

          padding: 25px 27px 24px;
        }

        .sector-content h3 {
          margin: 0 0 11px;

          font-size: clamp(1.15rem, 1.5vw, 1.35rem);
          line-height: 1.35;
          font-weight: 700;

          color: #111827;
        }

        .sector-content p {
          margin: 0;

          font-size: 0.93rem;
          line-height: 1.7;

          color: #667085;
        }

        /* =====================================================
           EXPLORE LINK
        ===================================================== */

        .learn-more {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          width: fit-content;

          margin-top: auto;
          padding-top: 18px;

          color: #0b4f8a;

          text-decoration: none;

          font-size: 0.88rem;
          font-weight: 700;

          transition:
            color 0.3s ease,
            gap 0.3s ease;
        }

        .learn-more span {
          font-size: 1.05rem;

          transition: transform 0.3s ease;
        }

        .learn-more:hover {
          color: #1769aa;
          gap: 11px;
        }

        .learn-more:hover span {
          transform: translateX(3px);
        }

        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 640px) and (max-width: 1023px) {
          .sectors-section {
            padding: 32px 28px 70px;
          }

          .sectors-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 24px;
          }

          .sector-image-wrapper {
            height: 235px;
          }
        }

        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 639px) {
          .sectors-section {
            /* Reduced top space on mobile */
            padding: 25px 18px 60px;
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

          .sectors-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .sector-card {
            border-radius: 18px;
          }

          .sector-image-wrapper {
            height: 220px;
          }

          .sector-content {
            padding: 22px 21px 21px;
          }

          .sector-content h3 {
            font-size: 1.18rem;
          }

          .sector-content p {
            font-size: 0.9rem;
            line-height: 1.65;
          }

          /* No hover-only button on mobile */
          .view-more {
            display: none;
          }

          .learn-more {
            padding-top: 16px;
          }
        }

        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {
          .sectors-section {
            padding: 22px 14px 55px;
          }

          .sector-image-wrapper {
            height: 205px;
          }

          .sector-content {
            padding: 20px 18px;
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
          .learn-more {
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
