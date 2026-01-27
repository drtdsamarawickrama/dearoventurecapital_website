"use client";

import Image from "next/image";

const sectors = [
  {
    title: "Agriculture & Plantation",
    description:
      "Sustainable farming solutions powered by modern agricultural technology and innovation.",
    image: "/images/ag.jpeg",
  },
  {
    title: "Engineering & Construction",
    description:
      "High-quality civil, structural, and infrastructure development across Sri Lanka.",
    image: "/images/eng.png",
  },
  {
    title: "Education & Training",
    description:
      "Professional education programs focused on skills development and future readiness.",
    image: "/images/ed.png",
  },
  {
    title: "Dearo Lime",
    description:
      "Natural high-calcium lime products for industrial and agricultural applications.",
    image: "/images/lime.jpg",
  },
  {
    title: "DCCI – From Our Waters to the World",
    description:
      "Sustainable source seafood processed with international quality standards for global markets.",
    image: "/images/dcc.jpg",
  },
  {
    title: "DEARO IT SOLUTION",
    description:
      "Innovating the Digital Future: Smart, Secure and scalable IT solutions designed to empower your business.",
    image: "/images/it.jpg",
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
          <div key={index} className="sector-card">
            <div className="sector-image-wrapper">
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                sizes="(max-width: 640px) 100vw,
                       (max-width: 1024px) 50vw,
                       (max-width: 1280px) 33vw,
                       (max-width: 1600px) 25vw,
                       20vw"
                className="sector-image"
                priority={index === 0}
              />
            </div>

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
          padding: 100px 24px;
          background: #f9f9f9;
        }

        .sectors-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .sectors-header h2 {
          font-size: 2.6rem;
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
        }

        .sectors-header p {
          font-size: 1.05rem;
          color: #555;
        }

        /* ===== GRID ===== */
        .sectors-grid {
          display: grid;
          gap: 40px;
          max-width: 1800px; /* 👈 wider than 1200 */
          margin: 0 auto;
        }

        /* Mobile */
        @media (max-width: 639px) {
          .sectors-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Tablet */
        @media (min-width: 640px) and (max-width: 1023px) {
          .sectors-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Laptop */
        @media (min-width: 1024px) and (max-width: 1279px) {
          .sectors-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Desktop */
        @media (min-width: 1280px) and (max-width: 1599px) {
          .sectors-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Large Desktop */
        @media (min-width: 1600px) {
          .sectors-grid {
            grid-template-columns: repeat(5, 1fr);
          }
        }

        /* ===== CARD ===== */
        .sector-card {
          background: #ffffff;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .sector-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
        }

        /* ===== IMAGE ===== */
        .sector-image-wrapper {
          position: relative;
          width: 100%;
          height: 230px;
          overflow: hidden;
        }

        .sector-image {
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .sector-card:hover .sector-image {
          transform: scale(1.05);
        }

        @media (max-width: 639px) {
          .sector-image-wrapper {
            height: 200px;
          }
        }

        @media (min-width: 1600px) {
          .sector-image-wrapper {
            height: 260px;
          }
        }

        /* ===== CONTENT ===== */
        .sector-content {
          padding: 28px 22px 32px;
        }

        .sector-content h3 {
          font-size: 1.45rem;
          margin-bottom: 10px;
          color: #111;
        }

        .sector-content p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .sector-content {
            text-align: center;
            padding: 24px 16px;
          }
        }
      `}</style>
    </section>
  );
}
