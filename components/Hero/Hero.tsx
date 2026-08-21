"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero1.png",
    tag: "Venture Capital",
    title: "Fueling Tomorrow's",
    titleAccent: "Innovators",
    subtitle:
      "We invest in visionary founders shaping the future of technology and business.",
  },
  {
    image: "/images/slide.jpg",
    tag: "Global Reach",
    title: "Empowering Startups",
    titleAccent: "Globally",
    subtitle:
      "Strategic guidance, funding, and a global network to accelerate growth.",
  },
  {
    image: "/images/hero3.png",
    tag: "Industry Leaders",
    title: "Shaping the Future",
    titleAccent: "of Industries",
    subtitle:
      "Driving innovation across technology, agriculture, and financial solutions.",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const SLIDE_DURATION = 7000;

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      setProgress(0);

      setCurrent((idx + slides.length) % slides.length);

      setTimeout(() => {
        setIsTransitioning(false);
      }, 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setProgress(0);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setProgress(0);

    const step = 100 / (SLIDE_DURATION / 50);

    const timer = setInterval(() => {
      setProgress((p) => Math.min(p + step, 100));
    }, 50);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <section className="hero">
      {/* Slides */}
      {slides.map((slide, index) => {
        const active = index === current;

        return (
          <div
            key={index}
            className={`slide ${active ? "active" : ""}`}
          >
            {/* Hero Image */}
            <div className="hero-image-wrapper">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="hero-image"
              />
            </div>

            {/* Overlay */}
            <div className="overlay" />

            {/* Content */}
            <div
              className={`content ${
                active ? "content-active" : ""
              }`}
            >
              <div className="content-inner">
                {/* Tag */}
                <div className="tag-wrapper">
                  <span className="tag">{slide.tag}</span>
                </div>

                {/* Title */}
                <h1>
                  <span className="title-line">
                    {slide.title}
                  </span>
                  <br />
                  <span className="title-accent">
                    {slide.titleAccent}
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="subtitle">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        );
      })}

      {/* Previous Arrow */}
      <button
        className="nav-arrow nav-prev"
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Next Arrow */}
      <button
        className="nav-arrow nav-next"
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots + Progress */}
      <div className="dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          >
            {i === current && (
              <span
                className="dot-progress"
                style={{
                  width: `${progress}%`,
                }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>

      <style jsx>{`
        /* =========================================
           HERO
        ========================================= */

        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          height: 100svh;
          min-height: 600px;
          overflow: hidden;
          background: #000;
        }

        /* =========================================
           SLIDE
        ========================================= */

        .slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          visibility: hidden;
          transition:
            opacity 0.9s ease,
            visibility 0.9s ease;
          pointer-events: none;
        }

        .slide.active {
          opacity: 1;
          visibility: visible;
          z-index: 2;
          pointer-events: auto;
        }

        /* =========================================
           IMAGE WRAPPER
        ========================================= */

        .hero-image-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 0;
        }

        /* =========================================
           HERO IMAGE
        ========================================= */

        .hero-image {
          position: absolute !important;
          inset: 0;

          width: 100% !important;
          height: 100% !important;

          max-width: none !important;

          object-fit: cover;
          object-position: center center;

          display: block;

          z-index: 0;
        }

        /* =========================================
           OVERLAY
        ========================================= */

        .overlay {
          position: absolute;
          inset: 0;
          z-index: 1;

          background: linear-gradient(
            110deg,
            rgba(2, 6, 23, 0.82) 0%,
            rgba(2, 6, 23, 0.55) 55%,
            rgba(2, 6, 23, 0.15) 100%
          );
        }

        /* =========================================
           CONTENT
        ========================================= */

        .content {
          position: relative;
          z-index: 3;

          width: 100%;
          max-width: 1280px;
          height: 100%;

          margin: 0 auto;

          padding: 0 40px;

          display: flex;
          flex-direction: column;
          justify-content: center;

          color: #fff;

          box-sizing: border-box;
        }

        .content-inner {
          width: 100%;
          max-width: 680px;

          opacity: 0;

          transform: translateY(30px);

          transition:
            opacity 0.8s ease 0.3s,
            transform 0.8s ease 0.3s;
        }

        .content-active .content-inner {
          opacity: 1;
          transform: translateY(0);
        }

        /* =========================================
           TAG
        ========================================= */

        .tag-wrapper {
          margin-bottom: 20px;
        }

        .tag {
          display: inline-block;

          background: rgba(56, 189, 248, 0.15);

          border: 1px solid rgba(56, 189, 248, 0.4);

          color: #38bdf8;

          font-size: 0.78rem;
          font-weight: 600;

          letter-spacing: 0.12em;

          text-transform: uppercase;

          padding: 6px 16px;

          border-radius: 100px;

          backdrop-filter: blur(8px);

          max-width: 100%;

          box-sizing: border-box;
        }

        /* =========================================
           HEADING
        ========================================= */

        h1 {
          margin: 0 0 22px;

          font-size: clamp(
            2.4rem,
            5.5vw,
            4.5rem
          );

          font-weight: 800;

          line-height: 1.08;

          letter-spacing: -0.02em;

          overflow-wrap: break-word;
          word-break: normal;
        }

        .title-line {
          color: #f8fafc;

          text-shadow:
            0 4px 24px rgba(0, 0, 0, 0.5);
        }

        .title-accent {
          background: linear-gradient(
            95deg,
            #38bdf8 0%,
            #818cf8 100%
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* =========================================
           SUBTITLE
        ========================================= */

        .subtitle {
          width: 100%;
          max-width: 560px;

          margin: 0 0 36px;

          font-size: clamp(
            1rem,
            2.2vw,
            1.2rem
          );

          line-height: 1.75;

          color: rgba(255, 255, 255, 0.82);

          overflow-wrap: break-word;
        }

        /* =========================================
           NAVIGATION
        ========================================= */

        .nav-arrow {
          position: absolute;

          top: 50%;

          transform: translateY(-50%);

          z-index: 10;

          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: rgba(255, 255, 255, 0.1);

          backdrop-filter: blur(10px);

          border: 1px solid rgba(
            255,
            255,
            255,
            0.2
          );

          color: #fff;

          cursor: pointer;

          transition: all 0.3s ease;

          padding: 0;
        }

        .nav-arrow:hover {
          background: rgba(
            56,
            189,
            248,
            0.25
          );

          border-color: rgba(
            56,
            189,
            248,
            0.5
          );
        }

        .nav-prev {
          left: 28px;
        }

        .nav-next {
          right: 28px;
        }

        /* =========================================
           DOTS
        ========================================= */

        .dots {
          position: absolute;

          bottom: 32px;
          left: 50%;

          transform: translateX(-50%);

          display: flex;
          align-items: center;

          gap: 10px;

          z-index: 10;

          max-width: calc(100% - 40px);
        }

        .dot {
          position: relative;

          width: 36px;
          height: 4px;

          padding: 0;

          border: none;

          border-radius: 2px;

          background: rgba(
            255,
            255,
            255,
            0.3
          );

          cursor: pointer;

          overflow: hidden;

          flex-shrink: 0;

          transition:
            background 0.3s ease,
            width 0.3s ease;
        }

        .dot.active {
          background: rgba(
            255,
            255,
            255,
            0.3
          );

          width: 52px;
        }

        .dot-progress {
          position: absolute;

          left: 0;
          top: 0;

          height: 100%;

          background: #38bdf8;

          border-radius: 2px;

          transition: width 0.05s linear;
        }

        /* =========================================
           SCROLL INDICATOR
        ========================================= */

        .scroll-indicator {
          position: absolute;

          right: 40px;
          bottom: 32px;

          z-index: 10;

          display: flex;
          flex-direction: column;

          align-items: center;

          gap: 8px;
        }

        .scroll-line {
          width: 1px;
          height: 48px;

          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.6),
            transparent
          );

          animation:
            scrollPulse 2s
            ease-in-out infinite;
        }

        .scroll-text {
          font-size: 0.68rem;

          color: rgba(
            255,
            255,
            255,
            0.5
          );

          letter-spacing: 0.15em;

          text-transform: uppercase;

          writing-mode: vertical-rl;
        }

        @keyframes scrollPulse {
          0%,
          100% {
            opacity: 0.4;
          }

          50% {
            opacity: 1;
          }
        }

        /* =========================================
           LARGE DESKTOP
        ========================================= */

        @media (min-width: 1600px) {
          .content {
            max-width: 1440px;

            padding-left: 60px;
            padding-right: 60px;
          }

          .content-inner {
            max-width: 720px;
          }

          .nav-prev {
            left: 40px;
          }

          .nav-next {
            right: 40px;
          }

          .scroll-indicator {
            right: 60px;
          }
        }

        /* =========================================
           DESKTOP
        ========================================= */

        @media (min-width: 1200px) and (max-width: 1599px) {
          .content {
            padding-left: 50px;
            padding-right: 50px;
          }
        }

        /* =========================================
           LAPTOP
        ========================================= */

        @media (min-width: 992px) and (max-width: 1199px) {
          .content {
            padding-left: 40px;
            padding-right: 40px;
          }

          .content-inner {
            max-width: 620px;
          }

          h1 {
            font-size: clamp(
              2.5rem,
              5vw,
              4rem
            );
          }

          .nav-arrow {
            width: 46px;
            height: 46px;
          }

          .nav-prev {
            left: 18px;
          }

          .nav-next {
            right: 18px;
          }
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (min-width: 769px) and (max-width: 991px) {
          .hero {
            min-height: 600px;
          }

          .hero-image {
            object-position: center center;
          }

          .content {
            padding-left: 32px;
            padding-right: 32px;
          }

          .content-inner {
            max-width: 600px;
          }

          h1 {
            font-size: clamp(
              2.2rem,
              5.5vw,
              3.4rem
            );
          }

          .subtitle {
            max-width: 520px;
          }

          .nav-arrow {
            width: 44px;
            height: 44px;
          }

          .nav-prev {
            left: 14px;
          }

          .nav-next {
            right: 14px;
          }

          .scroll-indicator {
            display: none;
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 768px) {
          .hero {
            width: 100%;

            height: 100svh;

            min-height: 560px;
          }

          /*
            MOBILE IMAGE FIX
            Keep the image filling the hero,
            but move the focus slightly upward.
          */

          .hero-image {
            width: 100% !important;
            height: 100% !important;

            object-fit: cover;

            object-position: center center;
          }

          .overlay {
            background: linear-gradient(
              180deg,
              rgba(2, 6, 23, 0.3) 0%,
              rgba(2, 6, 23, 0.75) 60%,
              rgba(2, 6, 23, 0.92) 100%
            );
          }

          .content {
            width: 100%;

            padding-left: 20px;
            padding-right: 20px;

            padding-bottom: 90px;

            justify-content: flex-end;

            box-sizing: border-box;
          }

          .content-inner {
            width: 100%;
            max-width: 100%;

            text-align: center;
          }

          .tag-wrapper {
            margin-bottom: 16px;
          }

          .tag {
            font-size: 0.72rem;

            padding: 6px 13px;

            letter-spacing: 0.1em;
          }

          h1 {
            font-size: clamp(
              2rem,
              8vw,
              2.8rem
            );

            line-height: 1.08;

            margin-bottom: 16px;
          }

          .subtitle {
            width: 100%;
            max-width: 100%;

            font-size: 0.97rem;

            line-height: 1.6;

            margin-bottom: 28px;

            color: rgba(
              255,
              255,
              255,
              0.88
            );
          }

          .nav-arrow {
            display: none;
          }

          .dots {
            bottom: 20px;

            gap: 7px;

            max-width: calc(
              100% - 32px
            );
          }

          .dot {
            width: 28px;
          }

          .dot.active {
            width: 42px;
          }

          .scroll-indicator {
            display: none;
          }
        }

        /* =========================================
           SMALL MOBILE
        ========================================= */

        @media (max-width: 480px) {
          .hero {
            min-height: 540px;
          }

          /*
            Image remains responsive.
            No fixed pixel width or height.
          */

          .hero-image {
            width: 100% !important;
            height: 100% !important;

            object-fit: cover;
            object-position: center center;
          }

          .content {
            padding-left: 16px;
            padding-right: 16px;

            padding-bottom: 72px;
          }

          .tag {
            font-size: 0.65rem;

            padding: 5px 11px;
          }

          h1 {
            font-size: clamp(
              1.75rem,
              8.5vw,
              2.35rem
            );

            line-height: 1.1;

            margin-bottom: 14px;
          }

          .subtitle {
            font-size: 0.9rem;

            line-height: 1.55;

            margin-bottom: 0;
          }

          .dots {
            bottom: 16px;
          }

          .dot {
            width: 24px;
            height: 3px;
          }

          .dot.active {
            width: 36px;
          }
        }

        /* =========================================
           VERY SMALL MOBILE
        ========================================= */

        @media (max-width: 375px) {
          .hero {
            min-height: 520px;
          }

          .content {
            padding-left: 14px;
            padding-right: 14px;

            padding-bottom: 64px;
          }

          .tag {
            font-size: 0.6rem;

            padding: 5px 10px;
          }

          h1 {
            font-size: 1.65rem;
          }

          .subtitle {
            font-size: 0.84rem;

            line-height: 1.5;
          }

          .dots {
            gap: 6px;
          }

          .dot {
            width: 22px;
          }

          .dot.active {
            width: 32px;
          }
        }

        /* =========================================
           EXTRA SMALL
        ========================================= */

        @media (max-width: 319px) {
          .hero {
            min-height: 500px;
          }

          .content {
            padding-left: 12px;
            padding-right: 12px;

            padding-bottom: 60px;
          }

          h1 {
            font-size: 1.5rem;
          }

          .subtitle {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  );
}