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
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [isTransitioning]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

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
          <div key={index} className={`slide ${active ? "active" : ""}`}>
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              className="hero-image"
            />
            <div className="overlay" />

            <div className={`content ${active ? "content-active" : ""}`}>
              <div className="content-inner">
                {/* Tag */}
                <div className="tag-wrapper">
                  <span className="tag">{slide.tag}</span>
                </div>

                {/* Title */}
                <h1>
                  <span className="title-line">{slide.title}</span>
                  <br />
                  <span className="title-accent">{slide.titleAccent}</span>
                </h1>

                {/* Subtitle */}
                <p className="subtitle">{slide.subtitle}</p>

              

              
               
              </div>
            </div>
          </div>
        );
      })}

      {/* Prev / Next Arrows */}
      <button className="nav-arrow nav-prev" onClick={prev} aria-label="Previous">
        <ChevronLeft size={28} />
      </button>
      <button className="nav-arrow nav-next" onClick={next} aria-label="Next">
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
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-text">Scroll</span>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          min-height: 600px;
          width: 100%;
          overflow: hidden;
          background: #000;
        }

        /* ── SLIDE ── */
        .slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.9s ease;
          pointer-events: none;
        }
        .slide.active {
          opacity: 1;
          z-index: 2;
          pointer-events: auto;
        }

        .hero-image {
          object-fit: cover;
          object-position: center 30%;
        }

        /* ── OVERLAY ── */
        .overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            rgba(2, 6, 23, 0.82) 0%,
            rgba(2, 6, 23, 0.55) 55%,
            rgba(2, 6, 23, 0.15) 100%
          );
          z-index: 1;
        }

        /* ── CONTENT ── */
        .content {
          position: relative;
          z-index: 3;
          height: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          color: #fff;
        }

        .content-inner {
          max-width: 680px;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s ease 0.3s, transform 0.8s ease 0.3s;
        }

        .content-active .content-inner {
          opacity: 1;
          transform: translateY(0);
        }

        /* Tag pill */
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
        }

        /* Heading */
        h1 {
          font-size: clamp(2.4rem, 5.5vw, 4.5rem);
          font-weight: 800;
          line-height: 1.08;
          margin-bottom: 22px;
          letter-spacing: -0.02em;
        }
        .title-line {
          color: #f8fafc;
          text-shadow: 0 4px 24px rgba(0,0,0,0.5);
        }
        .title-accent {
          background: linear-gradient(95deg, #38bdf8 0%, #818cf8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Subtitle */
        .subtitle {
          font-size: clamp(1rem, 2.2vw, 1.2rem);
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.75;
          margin-bottom: 36px;
          max-width: 560px;
        }

        /* CTA Group */
        .cta-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 48px;
          flex-wrap: wrap;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #38bdf8;
          color: #020617;
          font-weight: 700;
          font-size: 0.97rem;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(56, 189, 248, 0.35);
          white-space: nowrap;
        }
        .btn-primary:hover {
          background: #0ea5e9;
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(56, 189, 248, 0.5);
          color: #020617;
        }
        .btn-arrow {
          transition: transform 0.3s ease;
        }
        .btn-primary:hover .btn-arrow {
          transform: translateX(4px);
        }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #fff;
          font-weight: 600;
          font-size: 0.97rem;
          padding: 14px 28px;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }
        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.18);
          border-color: rgba(255, 255, 255, 0.5);
          color: #fff;
        }

        /* Stats Row */
        .stats-row {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .stat {
          display: flex;
          flex-direction: column;
        }
        .stat-num {
          font-size: 1.4rem;
          font-weight: 800;
          color: #f8fafc;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.78rem;
          color: rgba(255,255,255,0.55);
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-top: 4px;
        }
        .stat-divider {
          width: 1px;
          height: 36px;
          background: rgba(255,255,255,0.2);
        }

        /* ── NAV ARROWS ── */
        .nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .nav-arrow:hover {
          background: rgba(56, 189, 248, 0.25);
          border-color: rgba(56, 189, 248, 0.5);
        }
        .nav-prev { left: 28px; }
        .nav-next { right: 28px; }

        /* ── DOTS ── */
        .dots {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 10px;
          z-index: 10;
        }
        .dot {
          position: relative;
          width: 36px;
          height: 4px;
          border: none;
          border-radius: 2px;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          overflow: hidden;
          padding: 0;
          transition: background 0.3s ease;
        }
        .dot.active {
          background: rgba(255, 255, 255, 0.3);
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

        /* ── SCROLL INDICATOR ── */
        .scroll-indicator {
          position: absolute;
          bottom: 32px;
          right: 40px;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, rgba(255,255,255,0.6), transparent);
          animation: scrollPulse 2s ease-in-out infinite;
        }
        .scroll-text {
          font-size: 0.68rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.15em;
          text-transform: uppercase;
          writing-mode: vertical-rl;
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }

        /* ═══════════════════════════════════════ */
        /* ── TABLET (max 991px) ── */
        /* ═══════════════════════════════════════ */
        @media (max-width: 991px) {
          .nav-arrow {
            width: 44px;
            height: 44px;
          }
          .nav-prev { left: 16px; }
          .nav-next { right: 16px; }

          .scroll-indicator {
            display: none;
          }

          h1 {
            font-size: clamp(2.2rem, 5vw, 3.2rem);
          }
        }

        /* ═══════════════════════════════════════ */
        /* ── MOBILE (max 768px) ── */
        /* ═══════════════════════════════════════ */
        @media (max-width: 768px) {
          .hero {
            height: 100svh;
            min-height: 580px;
          }

          .hero-image {
            object-position: center 20%;
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
            padding: 0 20px;
            justify-content: flex-end;
            padding-bottom: 90px;
          }

          .content-inner {
            max-width: 100%;
            text-align: center;
          }

          .tag {
            font-size: 0.72rem;
          }

          h1 {
            font-size: clamp(2rem, 8vw, 2.8rem);
            margin-bottom: 16px;
          }

          .subtitle {
            font-size: 0.97rem;
            margin-bottom: 28px;
            max-width: 100%;
            color: rgba(255,255,255,0.88);
          }

          .cta-group {
            justify-content: center;
            gap: 12px;
            margin-bottom: 36px;
          }

          .btn-primary,
          .btn-secondary {
            font-size: 0.9rem;
            padding: 12px 22px;
          }

          .stats-row {
            justify-content: center;
            gap: 16px;
          }

          .stat-num {
            font-size: 1.2rem;
          }

          .stat-label {
            font-size: 0.7rem;
          }

          .nav-arrow {
            display: none;
          }

          .dots {
            bottom: 20px;
          }
        }

        /* ═══════════════════════════════════════ */
        /* ── SMALL MOBILE (max 480px) ── */
        /* ═══════════════════════════════════════ */
        @media (max-width: 480px) {
          .hero {
            min-height: 560px;
          }

          h1 {
            font-size: clamp(1.8rem, 7.5vw, 2.4rem);
          }

          .cta-group {
            flex-direction: column;
            align-items: stretch;
          }

          .btn-primary,
          .btn-secondary {
            justify-content: center;
            text-align: center;
            padding: 13px 20px;
          }

          .stats-row {
            gap: 12px;
          }

          .stat-divider {
            height: 28px;
          }
        }
      `}</style>
    </section>
  );
}
