
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const newsArticles = [
  {
    title:
      "Dearo Venture Capital Announces New Board of Directors",
    description:
      "Dearo Venture Capital Ltd has strengthened its leadership with the appointment of a new Board of Directors, marking a significant milestone in the company’s continued growth and strategic development. The announcement was made at a special media conference held on 10 September 2026 at the company’s Head Office at Ceylinco House, Colombo 01.",
    images: ["/images/news/news_m-1.jpg",
      "/images/news/news_m-2.jpg",
            "/images/news/news_m-3.jpg",
                  "/images/news/news_m-4.jpg",


    ],

  },

  {
    title:
      "Dearo Investment Pvt Ltd sweeps multiple awards at Iconic Awards 2024",
    description:
      "Dearo Investment Pvt. Ltd. excelled at the Iconic Awards 2024, winning four notable awards including Best Investment Product Provider and Best Customer Service Excellence. The award ceremony took place at the BMICH in Colombo. The company specializes in comprehensive financial services and innovative digital solutions, with a focus on SME financing and business support. With over 30 branches, they aim to enhance their digital footprint. Under the leadership of CEO Prasanna Sanjeewa, Dearo has diversified into several sectors, fostering strong customer relationships and emphasizing growth and innovation.",
    images: ["/images/news/newsg.jpg"],
  },

  {
    title:
      "Celebrating Children's Day: Dearo Investment Ltd Supports Ampara Uhana Junior School",
    description:
      "As part of its Corporate Social Responsibility initiatives, Dearo Investment Ltd proudly supported Children’s Day by providing lunch to the students of Ampara Uhana Primary School. This initiative reflects Dearo’s commitment to nurturing young minds, supporting local communities, and contributing to the well-being of future generations.",
    images: [
      "/images/news/school00.jpg",
      "/images/news/school1.jpg",
      "/images/news/school2.jpg",
      "/images/news/school4.jpg",
    ],
  },

  {
    title: "Dearo Investment shines at People’s Excellency Awards",
    description:
      "Dearo Investment Pvt. Ltd. won four awards, including Excellence in Workplace Development and Best Customer Service Provider, at the People’s Excellency Awards 2024 in Colombo. Known for its financial services, such as SME financing and entrepreneur loans, the company operates over 25 branches nationwide. Under CEO Prasanna Sanjeewa, Dearo plans to expand its offerings, focusing on the MSME sector.",
    images: ["/images/news/news1.jpg"],
  },

  {
    title: "Dearo Supports Ampara Village Temple Annual Procession",
    description:
      "Dearo Investment Limited proudly supported the annual procession of the Ampara Village Temple, demonstrating its commitment to preserving local traditions and strengthening community bonds. Through this initiative, Dearo actively promotes cultural heritage and fosters meaningful engagement within the communities it serves.",
    images: [
      "/images/news/temple.jpg",
      "/images/news/temple1.jpg",
    ],
  },
];

export default function NewsPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const [slideIndexes, setSlideIndexes] = useState<number[]>(
    newsArticles.map(() => 0)
  );

  /* ================= AUTO IMAGE SLIDER ================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndexes((prev) =>
        prev.map((value, index) =>
          newsArticles[index].images.length > 1
            ? (value + 1) % newsArticles[index].images.length
            : value
        )
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="news-page">

      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="news-hero">

        <div className="hero-circle hero-circle-one"></div>
        <div className="hero-circle hero-circle-two"></div>

        <div className="container hero-content">

          <h1>
            News <span>&amp;</span> Updates
          </h1>

        </div>
      </section>


      {/* =====================================================
          NEWS SECTION
      ===================================================== */}

      <section className="news-section">

        <div className="container">

          <div className="news-section-heading">

            {/* <div>
              <div className="section-label">
                LATEST FROM DEARO
              </div>

              <h2>
                Our <span>News</span>
              </h2>
            </div> */}

            <div className="heading-line"></div>

          </div>


          {/* =====================================================
              NEWS GRID
          ===================================================== */}

          <div className="row g-4 align-items-start">

            {newsArticles.map((news, index) => {

              const isExpanded = expandedIndex === index;

              const previewLength = 180;

              const currentSlide = slideIndexes[index];

              return (
                <div
                  key={index}
                  className="col-md-6 col-lg-4"
                >

                  <article className="news-card">

                    {/* =================================================
                        IMAGE
                    ================================================= */}

                    <div className="news-image">

                      {news.images.map((img, imageIndex) => (

                        <div
                          key={imageIndex}
                          className={`news-slide ${
                            imageIndex === currentSlide
                              ? "active"
                              : ""
                          }`}
                        >

                          <Image
                            src={img}
                            alt={news.title}
                            fill
                            quality={100}
                            priority={index < 3}
                            sizes="
                              (max-width: 576px) 100vw,
                              (max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw
                            "
                            style={{
                              objectFit: "cover",
                            }}
                          />

                        </div>

                      ))}


                      {/* IMAGE OVERLAY */}

                      <div className="image-overlay"></div>


                      {/* NEWS BADGE */}

                      <div className="news-badge">
                        NEWS
                      </div>


                      {/* IMAGE NUMBER */}

                      <div className="image-number">
                        {String(index + 1).padStart(2, "0")}
                      </div>


                      {/* SLIDER DOTS */}

                      {news.images.length > 1 && (

                        <div className="slider-dots">

                          {news.images.map((_, dotIndex) => (

                            <span
                              key={dotIndex}
                              className={
                                dotIndex === currentSlide
                                  ? "dot active"
                                  : "dot"
                              }
                            ></span>

                          ))}

                        </div>

                      )}

                    </div>


                    {/* =================================================
                        CARD CONTENT
                    ================================================= */}

                    <div className="news-content">

                      <h3>
                        {news.title}
                      </h3>


                      <div className="red-line"></div>


                      <p>
                        {isExpanded
                          ? news.description
                          : news.description.length > previewLength
                          ? news.description.slice(0, previewLength) + "..."
                          : news.description}
                      </p>


                      {/* READ MORE */}

                      {news.description.length > previewLength && (

                        <button
                          type="button"
                          className="read-more"
                          onClick={() =>
                            setExpandedIndex(
                              isExpanded ? null : index
                            )
                          }
                        >

                          <span>
                            {isExpanded
                              ? "Read Less"
                              : "Read More"}
                          </span>

                          <span className="arrow">
                            {isExpanded ? "↑" : "→"}
                          </span>

                        </button>

                      )}

                    </div>

                  </article>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          STYLES
      ===================================================== */}

      <style jsx>{`

        /* =====================================================
           PAGE
        ===================================================== */

        .news-page {
          background: #f5f7fb;
          color: #0b1f4b;
        }


        .container {
          max-width: 1200px;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .news-hero {
          position: relative;

          min-height: 300px;

          display: flex;
          align-items: center;
          justify-content: center;

          overflow: hidden;

          background:
            linear-gradient(
              120deg,
              #061735 0%,
              #0b1f4b 55%,
              #102e68 100%
            );
        }


        .hero-content {
          position: relative;

          z-index: 3;

          width: 100%;

          padding-top: 35px;
          padding-bottom: 35px;

          text-align: center;
        }


        /* =====================================================
           HERO TITLE
        ===================================================== */

        .news-hero h1 {
          margin: 0;

          color: #ffffff;

          text-align: center;

          font-size: clamp(
            4rem,
            6vw,
            5.2rem
          );

          font-weight: 700;

          line-height: 1.1;

          letter-spacing: -1px;
        }


        .news-hero h1 span {
          color: #e31e24;
        }


        /* =====================================================
           HERO CIRCLES
        ===================================================== */

        .hero-circle {
          position: absolute;

          border-radius: 50%;

          pointer-events: none;
        }


        .hero-circle-one {
          width: 420px;
          height: 420px;

          right: -130px;
          top: -170px;

          border: 1px solid rgba(
            255,
            255,
            255,
            0.08
          );
        }


        .hero-circle-two {
          width: 260px;
          height: 260px;

          left: -120px;
          bottom: -150px;

          border: 1px solid rgba(
            227,
            30,
            36,
            0.22
          );
        }


        /* =====================================================
           NEWS SECTION
        ===================================================== */

        .news-section {
          background: #ffffff;

          padding: 60px 0 80px;
        }


        /* =====================================================
           SECTION HEADING
        ===================================================== */

        .news-section-heading {
          display: flex;

          align-items: flex-end;

          gap: 30px;

          margin-bottom: 35px;
        }


        .section-label {
          color: #e31e24;

          font-size: 11px;

          font-weight: 800;

          letter-spacing: 2.5px;

          margin-bottom: 8px;
        }


        .news-section-heading h2 {
          margin: 0;

          color: #0b1f4b;

          font-size: 2.3rem;

          font-weight: 800;
        }


        .news-section-heading h2 span {
          color: #e31e24;
        }


        .heading-line {
          flex: 1;

          height: 1px;

          background: #dfe4ec;

          margin-bottom: 8px;
        }


        /* =====================================================
           CARD
        ===================================================== */

        .news-card {
          width: 100%;

          height: auto;

          align-self: flex-start;

          background: #ffffff;

          border: 1px solid #e4e8ef;

          border-radius: 14px;

          overflow: hidden;

          box-shadow:
            0 8px 25px
            rgba(
              11,
              31,
              75,
              0.07
            );

          transition:
            transform 0.35s ease,
            box-shadow 0.35s ease,
            border-color 0.35s ease;
        }


        .news-card:hover {
          transform: translateY(-7px);

          border-color:
            rgba(
              227,
              30,
              36,
              0.3
            );

          box-shadow:
            0 18px 40px
            rgba(
              11,
              31,
              75,
              0.14
            );
        }


        /* =====================================================
           IMAGE
        ===================================================== */

        .news-image {
          position: relative;

          width: 100%;

          height: 245px;

          overflow: hidden;

          background: #0b1f4b;
        }


        .news-slide {
          position: absolute;

          inset: 0;

          opacity: 0;

          transition:
            opacity 0.9s ease;
        }


        .news-slide.active {
          opacity: 1;
        }


        /* IMAGE ZOOM */

        .news-slide.active :global(img) {
          animation:
            imageZoom 5s ease
            forwards;
        }


        @keyframes imageZoom {

          from {
            transform: scale(1);
          }

          to {
            transform: scale(1.05);
          }

        }


        /* =====================================================
           IMAGE OVERLAY
        ===================================================== */

        .image-overlay {
          position: absolute;

          inset: 0;

          z-index: 1;

          background:
            linear-gradient(
              to bottom,
              rgba(
                6,
                23,
                53,
                0.02
              ),
              rgba(
                6,
                23,
                53,
                0.55
              )
            );

          pointer-events: none;
        }


        /* =====================================================
           BADGE
        ===================================================== */

        .news-badge {
          position: absolute;

          left: 18px;
          top: 18px;

          z-index: 3;

          padding:
            7px 13px;

          background: #e31e24;

          color: #ffffff;

          border-radius: 4px;

          font-size: 10px;

          font-weight: 800;

          letter-spacing: 1.5px;

          box-shadow:
            0 4px 12px
            rgba(
              0,
              0,
              0,
              0.15
            );
        }


        /* =====================================================
           IMAGE NUMBER
        ===================================================== */

        .image-number {
          position: absolute;

          right: 18px;
          bottom: 15px;

          z-index: 3;

          color:
            rgba(
              255,
              255,
              255,
              0.85
            );

          font-size: 28px;

          font-weight: 800;

          line-height: 1;
        }


        /* =====================================================
           DOTS
        ===================================================== */

        .slider-dots {
          position: absolute;

          left: 18px;
          bottom: 18px;

          z-index: 4;

          display: flex;

          align-items: center;

          gap: 6px;
        }


        .dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.55
            );

          transition:
            all 0.3s ease;
        }


        .dot.active {
          width: 22px;

          border-radius: 5px;

          background: #ffffff;
        }


        /* =====================================================
           CONTENT
        ===================================================== */

        .news-content {
          position: relative;

          padding:
            23px 24px 25px;

          min-height: 0;

          display: flex;

          flex-direction: column;
        }


        .news-content h3 {
          margin: 0;

          padding-right: 5px;

          color: #0b1f4b;

          font-size: 1.08rem;

          font-weight: 750;

          line-height: 1.45;
        }


        /* =====================================================
           RED LINE
        ===================================================== */

        .red-line {
          width: 38px;

          height: 3px;

          margin:
            13px 0 14px;

          background: #e31e24;

          border-radius: 3px;
        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .news-content p {
          margin: 0;

          color: #687386;

          font-size: 0.91rem;

          line-height: 1.75;
        }


        /* =====================================================
           READ MORE
        ===================================================== */

        .read-more {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          align-self: flex-start;

          margin-top: 16px;

          padding: 0;

          border: 0;

          background: transparent;

          color: #0b1f4b;

          font-size: 13px;

          font-weight: 800;

          cursor: pointer;

          transition:
            color 0.25s ease;
        }


        .read-more:hover {
          color: #e31e24;
        }


        .arrow {
          color: #e31e24;

          font-size: 18px;

          line-height: 1;

          transition:
            transform 0.25s ease;
        }


        .read-more:hover .arrow {
          transform:
            translateX(4px);
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {

          .news-hero {
            min-height: 260px;
          }


          .hero-content {
            padding:
              30px 20px;
          }


          .news-hero h1 {
            font-size: 2.2rem;

            letter-spacing: -0.5px;
          }


          .news-section {
            padding:
              45px 15px 60px;
          }


          .news-section-heading {
            display: block;

            margin-bottom: 30px;
          }


          .heading-line {
            margin-top: 16px;

            width: 100%;
          }


          .news-section-heading h2 {
            font-size: 2rem;
          }


          .news-image {
            height: 230px;
          }

        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 576px) {

          .news-hero {
            min-height: 240px;
          }


          .news-hero h1 {
            font-size: 2rem;
          }


          .news-section {
            padding-left: 15px;
            padding-right: 15px;
          }


          .news-image {
            height: 220px;
          }


          .news-content {
            padding:
              21px 20px 23px;
          }


          .news-content h3 {
            font-size: 1.05rem;
          }


          .hero-circle-one {
            width: 280px;
            height: 280px;

            right: -150px;
            top: -100px;
          }


          .hero-circle-two {
            width: 180px;
            height: 180px;

            left: -100px;
            bottom: -100px;
          }

        }

      `}</style>

    </main>
  );
}

