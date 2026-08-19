"use client";

import Image from "next/image";

//const galleryImages = [
//   {
//     title: "Corporate Events",
//     image: "/images/gallery/event1.jpg",
//   },
//   {
//     title: "Community Engagement",
//     image: "/images/gallery/event2.jpg",
//   },
//   {
//     title: "Business Activities",
//     image: "/images/gallery/event3.jpg",
  //},
//   {
//     title: "Agriculture & Plantation",
//     image: "/images/gallery/event4.jpg",
//   },
//   {
//     title: "Engineering & Construction",
//     image: "/images/gallery/event5.jpg",
//   },
//   {
//     title: "Team & Leadership",
//     image: "/images/gallery/event6.jpg",
//   },
//];

export default function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h2>Our Gallery</h2>
        <p>
          Explore our journey, achievements, events, and business activities
        </p>
      </div>

      {/* <div className="gallery-grid">
        {galleryImages.map((item, index) => (
          <div
            key={index}
            className="gallery-card"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div className="gallery-image-wrapper">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 639px) 100vw,
                       (max-width: 1023px) 50vw,
                       33vw"
                className="gallery-image"
                priority={index === 0}
              />

              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <style jsx>{`
        .gallery-section {
          width: 100%;
          padding: clamp(70px, 8vw, 120px) 24px;
          background: #f9f9f9;
        }

        .gallery-header {
          text-align: center;
          margin-bottom: clamp(50px, 6vw, 80px);
          animation: fadeUp 0.8s ease forwards;
        }

        .gallery-header h2 {
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 700;
          color: #111;
          margin-bottom: 12px;
        }

        .gallery-header p {
          font-size: clamp(0.95rem, 1.2vw, 1.1rem);
          color: #555;
        }

        .gallery-grid {
          display: grid;
          gap: clamp(24px, 3vw, 42px);
          margin: 0 auto;
          width: 100%;
        }

        @media (max-width: 639px) {
          .gallery-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 640px) and (max-width: 1023px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr);
            max-width: 1200px;
          }
        }

        .gallery-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
          transition:
            transform 0.45s ease,
            box-shadow 0.45s ease;
          animation: fadeUp 0.6s ease forwards;
          opacity: 0;
        }

        .gallery-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.16);
        }

        .gallery-image-wrapper {
          position: relative;
          width: 100%;
          height: clamp(220px, 22vw, 300px);
          overflow: hidden;
        }

        .gallery-image {
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery-card:hover .gallery-image {
          transform: scale(1.08);
        }

        .gallery-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 24px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.75),
            rgba(0, 0, 0, 0.05)
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .gallery-card:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-overlay h3 {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 600;
          margin: 0;
        }

        @media (max-width: 768px) {
          .gallery-overlay {
            opacity: 1;
          }
        }

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