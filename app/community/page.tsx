
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const newsArticles = [
  {
    title: "Dearo Venture Capital Announces New Board of Directors",
    description:
      "Dearo Venture Capital Ltd has strengthened its leadership with the appointment of a new Board of Directors, marking a significant milestone in the company’s continued growth and strategic development. The announcement was made at a special media conference held on 10 September 2026 at the company’s Head Office at Ceylinco House, Colombo 01.",
    images: [
      "/images/news/news_m-1.jpg",
      "/images/news/news_m-2.jpg",
      "/images/news/news_m-3.jpg",
      "/images/news/news_m-4.jpg",
      "/images/news/news_m-5.jpg",
      "/images/news/news_m_6.jpg",
      "/images/news/news_m-7.jpg",
      "/images/news/news_m-8.jpg",
      "/images/news/news_m-9.jpg",
      "/images/news/news_m-10.jpg",
      "/images/news/news_m-11.jpg",
      "/images/news/news_m-12.jpg",
      "/images/news/news_m-13.jpg",
      "/images/news/news_m-14.jpg",
      "/images/news/news_m-15.jpg",
      "/images/news/news_m-16.jpg",
      "/images/news/news_m-17.jpg",
      "/images/news/news_m-18.jpg",
      "/images/news/news_m-19.jpg",


      
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

  /*
    Each news article has its own slider index.
    Example:
    First article = 0
    Second article = 0
    Third article = 0
  */
  const [slideIndexes, setSlideIndexes] = useState<number[]>(
    newsArticles.map(() => 0)
  );

  /* =====================================================
     AUTO IMAGE SLIDER
     
     Every 5 seconds the current image changes.
     This works for ALL images in each article.
  ===================================================== */

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndexes((prev) =>
        prev.map((value, index) => {
          const imageCount = newsArticles[index].images.length;

          if (imageCount <= 1) {
            return 0;
          }

          return (value + 1) % imageCount;
        })
      );
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  /* =====================================================
     MANUAL PREVIOUS
  ===================================================== */

  const previousSlide = (newsIndex: number) => {
    setSlideIndexes((prev) => {
      const updated = [...prev];

      const imageCount = newsArticles[newsIndex].images.length;

      if (imageCount <= 1) {
        return updated;
      }

      updated[newsIndex] =
        (updated[newsIndex] - 1 + imageCount) % imageCount;

      return updated;
    });
  };

  /* =====================================================
     MANUAL NEXT
  ===================================================== */

  const nextSlide = (newsIndex: number) => {
    setSlideIndexes((prev) => {
      const updated = [...prev];

      const imageCount = newsArticles[newsIndex].images.length;

      if (imageCount <= 1) {
        return updated;
      }

      updated[newsIndex] =
        (updated[newsIndex] + 1) % imageCount;

      return updated;
    });
  };

  /* =====================================================
     GO TO SPECIFIC SLIDE
  ===================================================== */

  const goToSlide = (newsIndex: number, slideIndex: number) => {
    setSlideIndexes((prev) => {
      const updated = [...prev];

      updated[newsIndex] = slideIndex;

      return updated;
    });
  };

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
                        IMAGE SLIDER
                    ================================================= */}

                    <div className="news-image">

                      {/* ===============================
                          ALL IMAGES
                      =============================== */}

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
                            alt={`${news.title} - Image ${imageIndex + 1}`}
                            fill
                            quality={100}
                            priority={
                              index === 0 && imageIndex === 0
                            }
                            sizes="
                              (max-width: 576px) 100vw,
                              (max-width: 768px) 100vw,
                              (max-width: 1200px) 50vw,
                              33vw
                            "
                            className="news-slide-image"
                          />

                        </div>

                      ))}


                      {/* =================================================
                          IMAGE OVERLAY
                      ================================================= */}

                      <div className="image-overlay"></div>


                      {/* =================================================
                          NEWS BADGE
                      ================================================= */}

                      {/* <div className="news-badge">
                        NEWS
                      </div> */}


                      {/* =================================================
                          IMAGE NUMBER

                          First article:
                          01 / 02 / 03 / ... / 08
                      ================================================= */}

                      {news.images.length > 1 && (

                        <div className="image-number">
                          {String(currentSlide + 1).padStart(2, "0")}
                          <span>
                            / {String(news.images.length).padStart(2, "0")}
                          </span>
                        </div>

                      )}


                      {/* =================================================
                          PREVIOUS / NEXT BUTTONS
                      ================================================= */}

                      {news.images.length > 1 && (

                        <>

                          <button
                            type="button"
                            className="slider-button slider-prev"
                            onClick={() => previousSlide(index)}
                            aria-label="Previous image"
                          >
                            ‹
                          </button>

                          <button
                            type="button"
                            className="slider-button slider-next"
                            onClick={() => nextSlide(index)}
                            aria-label="Next image"
                          >
                            ›
                          </button>

                        </>

                      )}


                      {/* =================================================
                          SLIDER DOTS

                          First news = 8 dots
                      ================================================= */}

                      {news.images.length > 1 && (

                        <div className="slider-dots">

                          {news.images.map((_, dotIndex) => (

                            <button
                              key={dotIndex}
                              type="button"
                              aria-label={`Go to image ${
                                dotIndex + 1
                              }`}
                              className={
                                dotIndex === currentSlide
                                  ? "dot active"
                                  : "dot"
                              }
                              onClick={() =>
                                goToSlide(index, dotIndex)
                              }
                            />

                          ))}

                        </div>

                      )}

                    </div>


                    {/* =================================================
                        CONTENT
                    ================================================= */}

                    <div className="news-content">

                      <h3>
                        {news.title}
                      </h3>


                      {/* RED LINE */}

                      <div className="red-line"></div>


                      {/* DESCRIPTION */}

                      <p>
                        {isExpanded
                          ? news.description
                          : news.description.length > previewLength
                          ? news.description.slice(
                              0,
                              previewLength
                            ) + "..."
                          : news.description}
                      </p>


                      {/* =================================================
                          READ MORE
                      ================================================= */}

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
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 15px;
          padding-right: 15px;
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
            3rem,
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
           IMAGE CONTAINER
        ===================================================== */

        .news-image {
          position: relative;

          width: 100%;

          /*
            Fixed aspect ratio instead of stretching.
          */

          aspect-ratio: 16 / 10;

          overflow: hidden;

          background: #0b1f4b;
        }


        /* =====================================================
           SLIDE
        ===================================================== */

        .news-slide {
          position: absolute;

          inset: 0;

          opacity: 0;

          visibility: hidden;

          z-index: 0;

          transition:
            opacity 0.9s ease,
            visibility 0.9s ease;
        }


        .news-slide.active {
          opacity: 1;

          visibility: visible;

          z-index: 1;
        }


        /* =====================================================
           IMAGE

           Important:
           object-fit cover prevents stretching.
        ===================================================== */

        .news-slide-image {
          object-fit: cover;

          object-position: center;

          transform: scale(1);

          transition:
            transform 5s ease;
        }


        .news-slide.active .news-slide-image {
          transform: scale(1.04);
        }


        /* =====================================================
           IMAGE OVERLAY
        ===================================================== */

        .image-overlay {
          position: absolute;

          inset: 0;

          z-index: 2;

          pointer-events: none;

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
        }


        /* =====================================================
           BADGE
        ===================================================== */

        .news-badge {
          position: absolute;

          left: 18px;
          top: 18px;

          z-index: 4;

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

          z-index: 4;

          color:
            rgba(
              255,
              255,
              255,
              0.9
            );

          font-size: 28px;

          font-weight: 800;

          line-height: 1;
        }


        .image-number span {
          font-size: 13px;

          font-weight: 500;

          opacity: 0.8;

          margin-left: 3px;
        }


        /* =====================================================
           SLIDER BUTTONS
        ===================================================== */

        .slider-button {
          position: absolute;

          top: 50%;

          z-index: 5;

          width: 36px;
          height: 36px;

          display: flex;

          align-items: center;

          justify-content: center;

          border: 1px solid
            rgba(
              255,
              255,
              255,
              0.6
            );

          border-radius: 50%;

          background:
            rgba(
              11,
              31,
              75,
              0.75
            );

          color: #ffffff;

          font-size: 28px;

          line-height: 1;

          cursor: pointer;

          opacity: 0;

          transform:
            translateY(-50%);

          transition:
            opacity 0.3s ease,
            background 0.3s ease,
            transform 0.3s ease;
        }


        .news-image:hover .slider-button {
          opacity: 1;
        }


        .slider-button:hover {
          background: #e31e24;

          transform:
            translateY(-50%)
            scale(1.08);
        }


        .slider-prev {
          left: 14px;
        }


        .slider-next {
          right: 14px;
        }


        /* =====================================================
           SLIDER DOTS
        ===================================================== */

        .slider-dots {
          position: absolute;

          left: 18px;
          bottom: 18px;

          z-index: 5;

          display: flex;

          align-items: center;

          gap: 5px;

          max-width: calc(100% - 100px);

          overflow: hidden;
        }


        .dot {
          width: 7px;
          height: 7px;

          flex-shrink: 0;

          padding: 0;

          border: 0;

          border-radius: 50%;

          background:
            rgba(
              255,
              255,
              255,
              0.55
            );

          cursor: pointer;

          transition:
            width 0.3s ease,
            background 0.3s ease;
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
           TABLET
        ===================================================== */

        @media (max-width: 991px) {

          .news-image {
            aspect-ratio: 16 / 10;
          }

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


          .news-image {
            aspect-ratio: 16 / 10;
          }


          /*
            Always show arrows on mobile
            because there is no hover.
          */

          .slider-button {
            opacity: 1;

            width: 34px;
            height: 34px;
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
            aspect-ratio: 16 / 10;
          }


          .news-content {
            padding:
              21px 20px 23px;
          }


          .news-content h3 {
            font-size: 1.05rem;
          }


          .image-number {
            right: 15px;
            bottom: 14px;

            font-size: 23px;
          }


          .slider-dots {
            left: 15px;
            bottom: 15px;
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


        /* =====================================================
           VERY SMALL MOBILE
        ===================================================== */

        @media (max-width: 380px) {

          .news-image {
            aspect-ratio: 4 / 3;
          }


          .slider-button {
            width: 30px;
            height: 30px;

            font-size: 22px;
          }


          .dot {
            width: 6px;
            height: 6px;
          }


          .dot.active {
            width: 18px;
          }

        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .news-slide,
          .news-slide-image,
          .news-card,
          .slider-button,
          .dot,
          .read-more,
          .arrow {
            transition: none !important;
          }

          .news-slide.active .news-slide-image {
            transform: none;
          }

        }

      `}</style>

    </main>
  );
}

