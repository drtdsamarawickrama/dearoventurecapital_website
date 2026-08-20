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
    title: "Dearo Lime",
    description:
      "Natural high-calcium lime products for industrial and agricultural applications.",
    image: "/images/lime.jpg",
    href: "/sectors/dearo-lime",
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
      {/* ===== Header ===== */}
      <div className="sectors-header">
        <h2>Our Subsidiaries</h2>
        <p>
          Driving growth through diversified and strategic business ventures
        </p>
      </div>

      {/* ===== Grid ===== */}
      <div className="sectors-grid">
        {sectors.map((sector, index) => (
          <div
            key={index}
            className="sector-card"
            style={{
              animationDelay: `${index * 0.08}s`,
            }}
          >
            {/* ===== CLICKABLE IMAGE ONLY ===== */}
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
                  sizes="(max-width: 639px) 100vw,
                         (max-width: 1023px) 50vw,
                         33vw"
                  className="sector-image"
                  priority={index === 0}
                />

                {/* Optional overlay */}
                <div className="image-overlay">
                  <span>View More →</span>
                </div>
              </div>
            </Link>

            {/* ===== CONTENT - NOT CLICKABLE ===== */}
            <div className="sector-content">
              <h3>{sector.title}</h3>
              <p>{sector.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ===== Styles ===== */}
      <style jsx>{`
        /* ===== SECTION ===== */
        .sectors-section {
          width: 100%;
          padding: clamp(70px, 8vw, 120px) 24px;
          background: #f9f9f9;
        }

        /* ===== HEADER ===== */
        .sectors-header {
          text-align: center;
          margin-bottom: clamp(50px, 6vw, 80px);
          animation: fadeUp 0.8s ease forwards;
        }

        .sectors-header h2 {
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 700;
          color: #0b1f4b !important;
          margin-bottom: 12px;
        }

        .sectors-header p {
          font-size: clamp(0.95rem, 1.2vw, 1.1rem);
          color: #555;
        }

        /* ===== GRID ===== */
        .sectors-grid {
          display: grid;
          gap: clamp(24px, 3vw, 42px);
          margin: 0 auto;
          width: 100%;
        }

        /* ===== MOBILE ===== */
        @media (max-width: 639px) {
          .sectors-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ===== TABLET ===== */
        @media (min-width: 640px) and (max-width: 1023px) {
          .sectors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ===== DESKTOP ===== */
        @media (min-width: 1024px) {
          .sectors-grid {
            grid-template-columns: repeat(3, 1fr);
            max-width: 1200px;
          }
        }

        /* ===== CARD ===== */
        .sector-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
          transition:
            transform 0.45s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.45s ease;
          animation: fadeUp 0.6s ease forwards;
          opacity: 0;
        }

        .sector-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.16);
        }

        /* ===== CLICKABLE IMAGE ===== */
        .sector-image-link {
          display: block;
          text-decoration: none;
        }

        .sector-image-wrapper {
          position: relative;
          width: 100%;
          height: clamp(200px, 18vw, 260px);
          overflow: hidden;
          cursor: pointer;
        }

        .sector-image {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .sector-image-link:hover .sector-image {
          transform: scale(1.08);
        }

        /* ===== IMAGE OVERLAY ===== */
        .image-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(11, 31, 75, 0.45);
          opacity: 0;
          transition: opacity 0.35s ease;
        }

        .image-overlay span {
          padding: 10px 20px;
          border: 1px solid #ffffff;
          border-radius: 25px;
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(4px);
        }

        .sector-image-link:hover .image-overlay {
          opacity: 1;
        }

        /* ===== CONTENT ===== */
        .sector-content {
          padding: clamp(22px, 2vw, 30px);
        }

        .sector-content h3 {
          font-size: clamp(1.2rem, 1.5vw, 1.45rem);
          margin-bottom: 10px;
          color: #111;
        }

        .sector-content p {
          font-size: clamp(0.9rem, 1vw, 0.95rem);
          color: #666;
          line-height: 1.6;
        }

        /* ===== MOBILE CONTENT ===== */
        @media (max-width: 768px) {
          .sector-content {
            text-align: center;
          }
        }

        /* ===== ANIMATION ===== */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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