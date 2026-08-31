"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const texts = [
  {
    tag: "Venture Capital",
    title: "Fueling Tomorrow's",
    accent: "Innovators",
    description:
      "We invest in visionary founders shaping the future of technology and business.",
  },
  {
    tag: "Global Reach",
    title: "Empowering Startups",
    accent: "Globally",
    description:
      "Strategic guidance, funding, and a global network to accelerate growth.",
  },
  {
    tag: "Industry Leaders",
    title: "Shaping the Future",
    accent: "of Industries",
    description:
      "Driving innovation across technology, agriculture, and financial solutions.",
  },
];

export default function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % texts.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const text = texts[currentText];

  return (
    <>
      <section className="hero">
        {/* IMAGE STAGE */}
        <div className="image-stage">
          <div className="image-camera">
            <Image
              src="/images/lotus_tower_new.jpg"
              alt="Dearo Venture Capital"
              fill
              priority
              sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
              className="hero-image"
              quality={85}
            />
          </div>

          {/* MOVING LIGHTS */}
          <div className="light-orb light-one" />
          <div className="light-orb light-two" />

          {/* PARTICLES */}
          <div className="particles">
            <span className="particle p1" />
            <span className="particle p2" />
            <span className="particle p3" />
            <span className="particle p4" />
            <span className="particle p5" />
            <span className="particle p6" />
            <span className="particle p7" />
            <span className="particle p8" />
          </div>
        </div>

        {/* OVERLAYS */}
        <div className="dark-overlay" />
        <div className="bottom-fade" />

        {/* HERO CONTENT */}
        <div className="hero-content">
          <div
            key={currentText}
            className={`text-animation ${isTransitioning ? "exiting" : "entering"}`}
          >
            <div className="tag">{text.tag}</div>
            <h1>
              <span className="title-main">{text.title}</span>
              <br />
              <span className="title-accent">{text.accent}</span>
            </h1>
            <p>{text.description}</p>
            <div className="hero-line">
              <span />
              <span />
            </div>
          </div>
        </div>

        {/* INDICATORS */}
        <div className="text-indicators">
          {texts.map((_, index) => (
            <button
              key={index}
              className={index === currentText ? "indicator active" : "indicator"}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentText(index);
                  setIsTransitioning(false);
                }, 300);
              }}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>

        {/* SCROLL INDICATOR */}
        <div className="scroll-indicator">
          <span className="scroll-text">SCROLL</span>
          <span className="scroll-line" />
        </div>
      </section>

      <style jsx>{`
        /* ====================================================
           HERO - BASE
        ===================================================== */
        .hero {
          position: relative;
          width: 100%;
          height: 100vh;
          height: 100svh;
          min-height: 650px;
          max-height: 1000px;
          overflow: hidden;
          background: #050505;
        }

        /* ====================================================
           IMAGE STAGE - ANIMATED
        ===================================================== */
        .image-stage {
          position: absolute;
          inset: -8%;
          width: 116%;
          height: 116%;
          overflow: hidden;
          z-index: 1;
          transform-style: preserve-3d;
          perspective: 1200px;
        }

        .image-camera {
          position: absolute;
          inset: 0;
          overflow: hidden;
          transform-origin: center center;
          animation: cinematicCamera 20s cubic-bezier(0.45, 0.05, 0.55, 0.95)
            infinite alternate;
          will-change: transform;
          transform-style: preserve-3d;
        }

        .hero-image {
          object-fit: cover;
          object-position: center 30%;
          transform: scale(1.05);
          filter: saturate(1.05) contrast(1.03) brightness(0.95);
          will-change: transform;
        }

        @keyframes cinematicCamera {
          0% {
            transform: translate3d(0%, 0%, 0) scale(1) rotateZ(0deg)
              rotateX(0deg) rotateY(0deg);
          }
          20% {
            transform: translate3d(1.5%, -1%, 0) scale(1.03) rotateZ(0.15deg)
              rotateX(0.15deg) rotateY(-0.15deg);
          }
          40% {
            transform: translate3d(-1.8%, 1%, 0) scale(1.06) rotateZ(-0.15deg)
              rotateX(-0.15deg) rotateY(0.15deg);
          }
          60% {
            transform: translate3d(2%, -1.5%, 0) scale(1.09) rotateZ(0.2deg)
              rotateX(0.2deg) rotateY(-0.2deg);
          }
          80% {
            transform: translate3d(-1.5%, 1.2%, 0) scale(1.12) rotateZ(-0.15deg)
              rotateX(-0.15deg) rotateY(0.15deg);
          }
          100% {
            transform: translate3d(1.5%, -0.8%, 0) scale(1.15) rotateZ(0.1deg)
              rotateX(0.1deg) rotateY(-0.1deg);
          }
        }

        /* ====================================================
           LIGHTS - ANIMATED
        ===================================================== */
        .light-orb {
          position: absolute;
          width: 30vw;
          height: 30vw;
          max-width: 450px;
          max-height: 450px;
          border-radius: 50%;
          pointer-events: none;
          mix-blend-mode: screen;
          filter: blur(90px);
          opacity: 0.15;
          z-index: 2;
        }

        .light-one {
          top: -10%;
          left: -5%;
          background: radial-gradient(
            circle,
            rgba(56, 189, 248, 0.8),
            transparent 70%
          );
          animation: floatingLightOne 14s ease-in-out infinite alternate;
        }

        .light-two {
          right: -10%;
          bottom: -15%;
          background: radial-gradient(
            circle,
            rgba(129, 140, 248, 0.8),
            transparent 70%
          );
          animation: floatingLightTwo 17s ease-in-out infinite alternate;
        }

        @keyframes floatingLightOne {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            transform: translate3d(20vw, 15vh, 0) scale(1.2);
          }
        }

        @keyframes floatingLightTwo {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            transform: translate3d(-15vw, -10vh, 0) scale(1.15);
          }
        }

        /* ====================================================
           PARTICLES - ANIMATED
        ===================================================== */
        .particles {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          display: block;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.4);
          animation: particleFloat 8s ease-in-out infinite alternate;
        }

        .p1 {
          left: 12%;
          top: 25%;
          animation-delay: 0s;
        }
        .p2 {
          left: 25%;
          top: 65%;
          animation-delay: 2s;
        }
        .p3 {
          left: 43%;
          top: 20%;
          animation-delay: 4s;
        }
        .p4 {
          left: 62%;
          top: 35%;
          animation-delay: 1s;
        }
        .p5 {
          left: 78%;
          top: 22%;
          animation-delay: 3s;
        }
        .p6 {
          left: 86%;
          top: 68%;
          animation-delay: 5s;
        }
        .p7 {
          left: 55%;
          top: 75%;
          animation-delay: 2.5s;
        }
        .p8 {
          left: 18%;
          top: 80%;
          animation-delay: 4.5s;
        }

        @keyframes particleFloat {
          0% {
            opacity: 0.15;
            transform: translate3d(0, 20px, 0) scale(0.7);
          }
          100% {
            opacity: 0.6;
            transform: translate3d(10px, -30px, 0) scale(1.2);
          }
        }

        /* ====================================================
           OVERLAYS
        ===================================================== */
        .dark-overlay {
          position: absolute;
          inset: 0;
          z-index: 4;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.02) 50%,
            rgba(255, 255, 255, 0.08)
          );
        }

        .bottom-fade {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 55%;
          z-index: 4;
          pointer-events: none;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.03) 20%,
            rgba(255, 255, 255, 0.18) 65%,
            rgba(255, 255, 255, 0.45) 100%
          );
        }

        /* ====================================================
           HERO CONTENT - TEXT FULLY RESPONSIVE
        ===================================================== */
        .hero-content {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 10;
          width: 100%;
          max-width: 1300px;
          padding: 0 55px;
          box-sizing: border-box;
          text-align: center;
          color: #fff;
          transform: translate(-50%, -50%);
        }

        /* ====================================================
           TEXT ANIMATION
        ===================================================== */
        .text-animation {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: opacity 0.4s ease, transform 0.4s ease;
        }

        .text-animation.entering {
          animation: textReveal 1.1s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        .text-animation.exiting {
          opacity: 0;
          transform: translate3d(0, -30px, 0) scale(0.95);
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translate3d(0, 80px, 0) scale(0.96);
            filter: blur(8px);
          }
          60% {
            opacity: 0.8;
            filter: blur(1px);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
            filter: blur(0);
          }
        }

        /* ====================================================
           TAG - FULLY RESPONSIVE
        ===================================================== */
        .tag {
          display: inline-flex;
          align-items: center;
          margin-bottom: 18px;
          padding: 8px 17px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #fff;
          font-size: clamp(0.55rem, 0.9vw, 0.76rem);
          font-weight: 500;
          letter-spacing: clamp(0.1em, 0.16em, 0.2em);
          text-transform: uppercase;
        }

        /* ====================================================
           TITLE - FULLY RESPONSIVE
        ===================================================== */
        .hero-content h1 {
          margin: 0 auto 18px;
          max-width: 850px;
          font-size: clamp(2rem, 6vw, 5.3rem);
          font-weight: 700;
          line-height: clamp(0.95, 1, 1.02);
          letter-spacing: clamp(-0.025em, -0.04em, -0.045em);
          color: #ffffff;
          text-shadow: 0 8px 40px rgba(0, 0, 0, 0.55);
        }

        .title-main {
          color: #fff;
        }

        .title-accent {
          background: linear-gradient(
            100deg,
            #38bdf8 0%,
            #818cf8 45%,
            #c084fc 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ====================================================
           DESCRIPTION - FULLY RESPONSIVE
        ===================================================== */
        .hero-content p {
          max-width: 550px;
          margin: 0 auto;
          color: #ffffff;
          font-size: clamp(0.75rem, 1.2vw, 1.1rem);
          font-weight: 400;
          line-height: clamp(1.4, 1.6, 1.8);
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.5);
          padding: 0 10px;
        }

        /* ====================================================
           DECORATIVE LINE
        ===================================================== */
        .hero-line {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(4px, 5px, 6px);
          margin-top: clamp(18px, 25px, 30px);
        }

        .hero-line span:first-child {
          width: clamp(28px, 42px, 50px);
          height: 2px;
          background: #38bdf8;
          border-radius: 10px;
        }

        .hero-line span:last-child {
          width: clamp(6px, 8px, 10px);
          height: 2px;
          background: rgba(255, 255, 255, 0.55);
          border-radius: 10px;
        }

        /* ====================================================
           INDICATORS
        ===================================================== */
        .text-indicators {
          position: absolute;
          right: 50px;
          bottom: 50px;
          z-index: 12;
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .indicator {
          width: 24px;
          height: 2px;
          padding: 0;
          border: 0;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.35);
          cursor: pointer;
          transition: width 0.5s ease, background 0.5s ease;
        }

        .indicator:hover {
          background: rgba(255, 255, 255, 0.6);
        }

        .indicator.active {
          width: 48px;
          background: #38bdf8;
        }

        /* ====================================================
           SCROLL INDICATOR - ANIMATED
        ===================================================== */
        .scroll-indicator {
          position: absolute;
          left: 50px;
          bottom: 45px;
          z-index: 12;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .scroll-text {
          color: rgba(255, 255, 255, 0.55);
          font-size: 0.62rem;
          letter-spacing: 0.2em;
          writing-mode: vertical-rl;
        }

        .scroll-line {
          position: relative;
          display: block;
          width: 1px;
          height: 45px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.25);
        }

        .scroll-line::after {
          content: "";
          position: absolute;
          top: -100%;
          left: 0;
          width: 100%;
          height: 50%;
          background: #38bdf8;
          animation: scrollLine 2s ease-in-out infinite;
        }

        @keyframes scrollLine {
          0% {
            top: -100%;
          }
          100% {
            top: 200%;
          }
        }

        /* ====================================================
           RESPONSIVE BREAKPOINTS
        ==================================================== */

        /* ===== LARGE TABLET (992px - 1200px) ===== */
        @media (max-width: 1200px) {
          .hero-content {
            padding: 0 45px;
          }

          .hero-content h1 {
            font-size: clamp(2.2rem, 5vw, 4.2rem);
          }

          .light-orb {
            width: 35vw;
            height: 35vw;
          }
        }

        /* ===== TABLET (768px - 992px) ===== */
        @media (max-width: 992px) {
          .hero {
            min-height: 600px;
          }

          .scroll-indicator {
            left: 30px;
          }

          .text-indicators {
            right: 30px;
          }

          .hero-content {
            padding: 0 35px;
          }

          .image-stage {
            inset: -6%;
            width: 112%;
            height: 112%;
          }

          .hero-image {
            object-position: center 25%;
          }

          .light-orb {
            width: 40vw;
            height: 40vw;
            filter: blur(80px);
            opacity: 0.12;
          }

          .hero-content h1 {
            font-size: clamp(2.5rem, 5vw, 3.8rem);
          }

          .hero-content p {
            font-size: clamp(0.9rem, 1.2vw, 1rem);
          }

          .tag {
            font-size: clamp(0.6rem, 0.9vw, 0.7rem);
          }
        }

        /* ===== MOBILE (up to 768px) ===== */
        @media (max-width: 768px) {
          .hero {
            min-height: 560px;
            height: 80vh;
          }

          /* IMAGE - SMALLER */
          .image-stage {
            inset: -2%;
            width: 104%;
            height: 104%;
          }

          .image-camera {
            animation: mobileCamera 15s cubic-bezier(0.45, 0.05, 0.55, 0.95)
              infinite alternate;
          }

          @keyframes mobileCamera {
            0% {
              transform: translate3d(0, 0, 0) scale(0.85);
            }
            30% {
              transform: translate3d(-0.8%, -0.5%, 0) scale(0.87) rotateZ(-0.15deg);
            }
            60% {
              transform: translate3d(0.8%, 0.5%, 0) scale(0.89) rotateZ(0.15deg);
            }
            100% {
              transform: translate3d(-0.5%, -0.3%, 0) scale(0.91);
            }
          }

          .hero-image {
            object-position: center 30%;
            transform: scale(0.85);
          }

          /* LIGHTS */
          .light-orb {
            width: 50vw;
            height: 50vw;
            filter: blur(60px);
            opacity: 0.08;
          }

          .light-one {
            animation: floatingLightOneMobile 12s ease-in-out infinite alternate;
          }

          .light-two {
            animation: floatingLightTwoMobile 14s ease-in-out infinite alternate;
          }

          @keyframes floatingLightOneMobile {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            100% {
              transform: translate3d(15vw, 10vh, 0) scale(1.15);
            }
          }

          @keyframes floatingLightTwoMobile {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            100% {
              transform: translate3d(-10vw, -8vh, 0) scale(1.1);
            }
          }

          /* PARTICLES */
          .particle {
            width: 2px;
            height: 2px;
          }

          .p2,
          .p4,
          .p6,
          .p8 {
            display: none;
          }

          .p1,
          .p3,
          .p5,
          .p7 {
            display: block;
          }

          /* CONTENT - FULLY RESPONSIVE */
          .hero-content {
            top: 52%;
            padding: 0 20px;
          }

          .tag {
            margin-bottom: 13px;
            padding: 6px 12px;
            font-size: clamp(0.5rem, 1.5vw, 0.6rem);
            letter-spacing: 0.12em;
          }

          .hero-content h1 {
            max-width: 100%;
            font-size: clamp(2rem, 8vw, 3.2rem);
            line-height: 1.05;
            letter-spacing: -0.02em;
            margin-bottom: 14px;
          }

          .hero-content p {
            max-width: 100%;
            font-size: clamp(0.8rem, 2.5vw, 0.95rem);
            line-height: 1.5;
            color: #ffffff;
            padding: 0 5px;
          }

          .hero-line {
            margin-top: 18px;
          }

          .hero-line span:first-child {
            width: 32px;
          }

          /* INDICATORS */
          .text-indicators {
            left: 50%;
            right: auto;
            bottom: 24px;
            transform: translateX(-50%);
          }

          .indicator {
            width: 18px;
          }

          .indicator.active {
            width: 38px;
          }

          /* HIDE SCROLL */
          .scroll-indicator {
            display: none;
          }

          /* TEXT ANIMATION */
          .text-animation.entering {
            animation: textRevealMobile 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
          }

          @keyframes textRevealMobile {
            0% {
              opacity: 0;
              transform: translate3d(0, 40px, 0) scale(0.96);
              filter: blur(6px);
            }
            60% {
              opacity: 0.8;
              filter: blur(1px);
            }
            100% {
              opacity: 1;
              transform: translate3d(0, 0, 0) scale(1);
              filter: blur(0);
            }
          }
        }

        /* ===== SMALL MOBILE (480px - 576px) ===== */
        @media (max-width: 576px) {
          .hero {
            min-height: 500px;
            height: 75vh;
          }

          .image-stage {
            inset: 0%;
            width: 100%;
            height: 100%;
          }

          .image-camera {
            animation: mobileCameraSmall 12s cubic-bezier(0.45, 0.05, 0.55, 0.95)
              infinite alternate;
          }

          @keyframes mobileCameraSmall {
            0% {
              transform: translate3d(0, 0, 0) scale(0.75);
            }
            50% {
              transform: translate3d(0.5%, 0.3%, 0) scale(0.78) rotateZ(0.1deg);
            }
            100% {
              transform: translate3d(-0.5%, -0.3%, 0) scale(0.81);
            }
          }

          .hero-image {
            transform: scale(0.75);
            object-position: center 25%;
          }

          .hero-content {
            padding: 0 16px;
            top: 54%;
          }

          .tag {
            font-size: clamp(0.45rem, 1.8vw, 0.55rem);
            padding: 5px 10px;
            letter-spacing: 0.1em;
          }

          .hero-content h1 {
            font-size: clamp(1.6rem, 9vw, 2.6rem);
            line-height: 1.08;
            letter-spacing: -0.015em;
          }

          .hero-content p {
            font-size: clamp(0.7rem, 2.8vw, 0.85rem);
            line-height: 1.4;
          }

          .hero-line {
            margin-top: 15px;
          }

          .hero-line span:first-child {
            width: 25px;
          }

          .indicator {
            width: 14px;
          }

          .indicator.active {
            width: 30px;
          }

          .light-orb {
            width: 55vw;
            height: 55vw;
            filter: blur(50px);
            opacity: 0.06;
          }
        }

        /* ===== EXTRA SMALL (up to 480px) ===== */
        @media (max-width: 480px) {
          .hero {
            min-height: 460px;
            height: 70vh;
          }

          .image-stage {
            inset: 0%;
            width: 100%;
            height: 100%;
          }

          .image-camera {
            animation: mobileCameraExtraSmall 10s cubic-bezier(0.45, 0.05, 0.55, 0.95)
              infinite alternate;
          }

          @keyframes mobileCameraExtraSmall {
            0% {
              transform: translate3d(0, 0, 0) scale(0.65);
            }
            100% {
              transform: translate3d(0.3%, -0.2%, 0) scale(0.68);
            }
          }

          .hero-image {
            transform: scale(0.65);
            object-position: center 20%;
          }

          .hero-content {
            padding: 0 14px;
            top: 55%;
          }

          .tag {
            font-size: clamp(0.4rem, 1.5vw, 0.48rem);
            padding: 4px 8px;
            margin-bottom: 10px;
            letter-spacing: 0.08em;
          }

          .hero-content h1 {
            font-size: clamp(1.4rem, 8.5vw, 2.2rem);
            line-height: 1.1;
            margin-bottom: 10px;
          }

          .hero-content p {
            font-size: clamp(0.65rem, 2.5vw, 0.78rem);
            line-height: 1.35;
          }

          .hero-line {
            margin-top: 12px;
          }

          .hero-line span:first-child {
            width: 20px;
          }

          .light-orb {
            width: 60vw;
            height: 60vw;
            filter: blur(40px);
            opacity: 0.05;
          }

          .indicator {
            width: 12px;
          }

          .indicator.active {
            width: 24px;
          }
        }

        /* ===== TINY (up to 360px) ===== */
        @media (max-width: 360px) {
          .hero {
            min-height: 400px;
            height: 65vh;
          }

          .image-camera {
            animation: none;
          }

          .hero-image {
            transform: scale(0.55);
            object-position: center 15%;
          }

          .hero-content {
            padding: 0 12px;
          }

          .tag {
            font-size: 0.4rem;
            padding: 3px 6px;
            margin-bottom: 8px;
          }

          .hero-content h1 {
            font-size: clamp(1.2rem, 8vw, 1.6rem);
            margin-bottom: 8px;
          }

          .hero-content p {
            font-size: clamp(0.55rem, 2.2vw, 0.65rem);
          }

          .hero-line {
            margin-top: 10px;
          }

          .hero-line span:first-child {
            width: 16px;
          }

          .indicator {
            width: 10px;
          }

          .indicator.active {
            width: 18px;
          }

          .light-orb {
            width: 65vw;
            height: 65vw;
            filter: blur(30px);
            opacity: 0.04;
          }
        }

        /* ===== LARGE SCREENS (1200px+) ===== */
        @media (min-width: 1200px) {
          .hero-content {
            padding: 0 80px;
          }

          .hero-content h1 {
            font-size: clamp(3.5rem, 5.3vw, 5.3rem);
          }

          .light-orb {
            width: 28vw;
            height: 28vw;
          }
        }

        /* ===== ULTRA WIDE (1600px+) ===== */
        @media (min-width: 1600px) {
          .hero-content {
            max-width: 1500px;
            padding: 0 100px;
          }

          .hero-content h1 {
            font-size: clamp(4.5rem, 5.5vw, 6rem);
          }

          .hero-content p {
            font-size: clamp(1rem, 1.2vw, 1.2rem);
          }

          .light-orb {
            width: 22vw;
            height: 22vw;
            max-width: 500px;
            max-height: 500px;
          }
        }

        /* ====================================================
           REDUCED MOTION
        ===================================================== */
        @media (prefers-reduced-motion: reduce) {
          .image-camera,
          .light-orb,
          .particle,
          .scroll-line::after,
          .text-animation.entering {
            animation: none;
          }

          .text-animation.entering {
            opacity: 1;
            transform: none;
            filter: none;
          }

          .image-camera {
            transform: scale(1.05);
          }

          @media (max-width: 768px) {
            .image-camera {
              transform: scale(0.85);
            }
          }

          @media (max-width: 576px) {
            .image-camera {
              transform: scale(0.75);
            }
          }

          @media (max-width: 480px) {
            .image-camera {
              transform: scale(0.65);
            }
          }
        }
      `}</style>
    </>
  );
}