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
      {/* Section Header */}
      <div className="fw-bold text-center mb-3 text-black">
        <h2>Our Subsidiaries</h2>
        <br />
        <p>Driving growth through diversified and strategic business ventures</p>
      </div>

      <br />
      <br />

      {/* Sectors Grid */}
      <div className="sectors-grid">
        {sectors.map((sector, index) => (
          <div key={index} className="sector-card">
            <div className="sector-image-wrapper">
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
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

      {/* Styles */}
      <style jsx>{`
        .sectors-section {
          width: 100%;
          padding: 80px 20px;
          background: #f9f9f9;
        }

        .sectors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 40px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .sector-card {
          background: #ffffff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .sector-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }

        .sector-image-wrapper {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .sector-image {
          object-fit: cover;
        }

        .sector-content {
          padding: 30px 20px;
        }

        .sector-content h3 {
          font-size: 1.5rem;
          margin-bottom: 12px;
          color: #111;
        }

        .sector-content p {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .sector-content {
            text-align: center;
            padding: 25px 15px;
          }
        }

        @media (max-width: 480px) {
          .sectors-section {
            padding: 60px 15px;
          }

          .sector-content h3 {
            font-size: 1.3rem;
          }
        }
      `}</style>
    </section>
  );
}
