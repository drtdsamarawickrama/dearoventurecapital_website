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
    title: "Dearo IT Solutions",
    description:
      "Innovating the Digital Future: Smart, Secure and scalable IT solutions designed to empower your business.",
    image: "/images/it.jpg",
  },
];

export default function BusinessSectors() {
  return (
    <section className="sectors-section">
      {/* Header */}
      <div className="sectors-header">
        <h2>Our Subsidiaries</h2>
        <p>Driving growth through diversified and strategic business ventures</p>
      </div>

      {/* Grid */}
      <div className="sectors-grid">
        {sectors.map((sector, index) => (
          <div key={index} className="sector-card">
            <div className="sector-image-wrapper">
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                className="sector-image"
                sizes="33vw"
              />
            </div>

            <div className="sector-content">
              <h3>{sector.title}</h3>
              <p>{sector.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* ===== SECTION ===== */
        .sectors-section {
          padding: 100px 24px;
          background: #f9f9f9;
        }

        /* ===== HEADER ===== */
        .sectors-header {
          text-align: center;
          margin-bottom: 70px;
        }

        .sectors-header h2 {
          font-size: 2.6rem;
          font-weight: 700;
          color: #111;
        }

        .sectors-header p {
          font-size: 1rem;
          color: #555;
        }

        /* ===== GRID (HARD LOCKED) ===== */
        .sectors-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;

          /* 🔒 THIS IS THE FIX */
          max-width: 1200px; /* 3 cards only */
          margin: 0 auto;
        }

        /* ===== CARD ===== */
        .sector-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .sector-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 28px 60px rgba(0, 0, 0, 0.15);
        }

        /* ===== IMAGE ===== */
        .sector-image-wrapper {
          position: relative;
          height: 230px;
        }

        .sector-image {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .sector-card:hover .sector-image {
          transform: scale(1.05);
        }

        /* ===== CONTENT ===== */
        .sector-content {
          padding: 26px;
        }

        .sector-content h3 {
          font-size: 1.3rem;
          margin-bottom: 10px;
          color: #111;
        }

        .sector-content p {
          font-size: 0.95rem;
          color: #666;
          line-height: 1.6;
        }
      `}</style>
    </section>
  );
}