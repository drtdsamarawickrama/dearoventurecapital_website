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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const text = texts[currentText];

  return (
    <>
      {/* ======================================================
          HERO
      ======================================================= */}

      <section className="hero">

        {/* ====================================================
            CINEMATIC IMAGE AREA
        ===================================================== */}

        <div className="image-stage">

          <div className="image-camera">
            <Image
              src="/images/lotus_tower_new.jpg"
              alt="Dearo Venture Capital"
              fill
              priority
              sizes="100vw"
              className="hero-image"
            />
          </div>

          {/* MOVING LIGHT */}

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

        {/* ====================================================
            LIGHT OVERLAY
        ===================================================== */}

        <div className="dark-overlay" />

        {/* ====================================================
            BOTTOM GRADIENT
        ===================================================== */}

        <div className="bottom-fade" />

        {/* ====================================================
            HERO TEXT
            CENTER OF IMAGE
        ===================================================== */}

        <div className="hero-content">

          <div
            key={currentText}
            className="text-animation"
          >

            {/* TAG */}

            <div className="tag">
              {text.tag}
            </div>

            {/* TITLE */}

            <h1>
              <span className="title-main">
                {text.title}
              </span>

              <br />

              <span className="title-accent">
                {text.accent}
              </span>
            </h1>

            {/* DESCRIPTION */}

            <p>
              {text.description}
            </p>

            {/* SMALL LINE */}

            <div className="hero-line">
              <span />
              <span />
            </div>

          </div>
        </div>

        {/* ====================================================
            TEXT INDICATORS
        ===================================================== */}

        <div className="text-indicators">

          {texts.map((_, index) => (
            <button
              key={index}
              className={
                index === currentText
                  ? "indicator active"
                  : "indicator"
              }
              onClick={() => setCurrentText(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}

        </div>

        {/* ====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <div className="scroll-indicator">

          <span className="scroll-text">
            SCROLL
          </span>

          <span className="scroll-line" />

        </div>

      </section>

      {/* ======================================================
          CSS
      ======================================================= */}

      <style jsx>{`

        /* ====================================================
           HERO
        ===================================================== */

        .hero {
          position: relative;

          width: 100%;

          height: 100vh;
          height: 100svh;

          min-height: 650px;

          overflow: hidden;

          background: #050505;
        }


        /* ====================================================
           IMAGE STAGE
        ===================================================== */

        .image-stage {
          position: absolute;

          inset: -12%;

          width: 124%;
          height: 124%;

          overflow: hidden;

          z-index: 1;

          transform-style: preserve-3d;

          perspective: 1200px;
        }


        /* ====================================================
           CAMERA
        ===================================================== */

        .image-camera {
          position: absolute;

          inset: 0;

          overflow: hidden;

          transform-origin: center center;

          animation:
            cinematicCamera
            18s
            cubic-bezier(
              0.45,
              0.05,
              0.55,
              0.95
            )
            infinite
            alternate;

          will-change: transform;

          transform-style: preserve-3d;
        }


        /* ====================================================
           IMAGE
        ===================================================== */

        .hero-image {
          object-fit: cover;

          object-position: center center;

          transform: scale(1.08);

          filter:
            saturate(1.05)
            contrast(1.03);

          will-change: transform;
        }


        /* ====================================================
           CINEMATIC CAMERA ANIMATION
        ===================================================== */

        @keyframes cinematicCamera {

          0% {
            transform:
              translate3d(0%, 0%, 0)
              scale(1)
              rotateZ(0deg)
              rotateX(0deg)
              rotateY(0deg);
          }

          20% {
            transform:
              translate3d(1.2%, -0.8%, 0)
              scale(1.035)
              rotateZ(0.15deg)
              rotateX(0.15deg)
              rotateY(-0.15deg);
          }

          40% {
            transform:
              translate3d(-1.5%, 0.8%, 0)
              scale(1.07)
              rotateZ(-0.15deg)
              rotateX(-0.15deg)
              rotateY(0.15deg);
          }

          60% {
            transform:
              translate3d(1.5%, -1.2%, 0)
              scale(1.10)
              rotateZ(0.2deg)
              rotateX(0.2deg)
              rotateY(-0.2deg);
          }

          80% {
            transform:
              translate3d(-1.2%, 1%, 0)
              scale(1.13)
              rotateZ(-0.15deg)
              rotateX(-0.15deg)
              rotateY(0.15deg);
          }

          100% {
            transform:
              translate3d(1%, -0.6%, 0)
              scale(1.16)
              rotateZ(0.1deg)
              rotateX(0.1deg)
              rotateY(-0.1deg);
          }

        }


        /* ====================================================
           MOVING LIGHT
        ===================================================== */

        .light-orb {
          position: absolute;

          width: 35vw;
          height: 35vw;

          max-width: 500px;
          max-height: 500px;

          border-radius: 50%;

          pointer-events: none;

          mix-blend-mode: screen;

          filter: blur(90px);

          opacity: 0.12;

          z-index: 2;
        }


        .light-one {
          top: -15%;
          left: -10%;

          background:
            radial-gradient(
              circle,
              rgba(56, 189, 248, 0.8),
              transparent 70%
            );

          animation:
            floatingLightOne
            14s
            ease-in-out
            infinite
            alternate;
        }


        .light-two {
          right: -15%;
          bottom: -20%;

          background:
            radial-gradient(
              circle,
              rgba(129, 140, 248, 0.8),
              transparent 70%
            );

          animation:
            floatingLightTwo
            17s
            ease-in-out
            infinite
            alternate;
        }


        @keyframes floatingLightOne {

          0% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          100% {
            transform:
              translate3d(25vw, 20vh, 0)
              scale(1.25);
          }

        }


        @keyframes floatingLightTwo {

          0% {
            transform:
              translate3d(0, 0, 0)
              scale(1);
          }

          100% {
            transform:
              translate3d(-20vw, -15vh, 0)
              scale(1.2);
          }

        }


        /* ====================================================
           PARTICLES
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

          background:
            rgba(
              255,
              255,
              255,
              0.55
            );

          box-shadow:
            0 0 15px
            rgba(
              255,
              255,
              255,
              0.5
            );

          animation:
            particleFloat
            8s
            ease-in-out
            infinite
            alternate;
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

            transform:
              translate3d(
                0,
                20px,
                0
              )
              scale(0.7);
          }

          100% {
            opacity: 0.65;

            transform:
              translate3d(
                10px,
                -30px,
                0
              )
              scale(1.2);
          }

        }


        /* ====================================================
           LIGHT OVERLAY
        ===================================================== */

        .dark-overlay {
          position: absolute;

          inset: 0;

          z-index: 4;

          pointer-events: none;

          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.10),
              rgba(255, 255, 255, 0.02) 50%,
              rgba(255, 255, 255, 0.10)
            );
        }


        /* ====================================================
           BOTTOM GRADIENT
        ===================================================== */

        .bottom-fade {
          position: absolute;

          left: 0;
          right: 0;
          bottom: 0;

          height: 55%;

          z-index: 4;

          pointer-events: none;

          background:
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.03) 20%,
              rgba(255, 255, 255, 0.18) 65%,
              rgba(255, 255, 255, 0.45) 100%
            );
        }


        /* ====================================================
           HERO CONTENT - EXACT CENTER
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

          transform:
            translate(-50%, -50%);
        }


        /* ====================================================
           TEXT ANIMATION
        ===================================================== */

        .text-animation {
          display: flex;

          flex-direction: column;

          align-items: center;

          justify-content: center;

          animation:
            textReveal
            1.1s
            cubic-bezier(
              0.16,
              1,
              0.3,
              1
            )
            both;
        }


        @keyframes textReveal {

          0% {
            opacity: 0;

            transform:
              translate3d(
                0,
                80px,
                0
              )
              scale(0.96);

            filter: blur(8px);
          }

          60% {
            opacity: 0.8;

            filter: blur(1px);
          }

          100% {
            opacity: 1;

            transform:
              translate3d(
                0,
                0,
                0
              )
              scale(1);

            filter: blur(0);
          }

        }


        /* ====================================================
           TAG
        ===================================================== */

        .tag {
          display: inline-flex;

          align-items: center;

          margin-bottom: 18px;

          padding: 8px 17px;

          border:
            1px solid
            rgba(
              255,
              255,
              255,
              0.28
            );

          border-radius: 999px;

          background:
            rgba(
              255,
              255,
              255,
              0.08
            );

          backdrop-filter:
            blur(12px);

          -webkit-backdrop-filter:
            blur(12px);

          color: #fff;

          font-size: 0.76rem;

          font-weight: 500;

          letter-spacing: 0.16em;

          text-transform: uppercase;
        }


        /* ====================================================
           TITLE
        ===================================================== */

        .hero-content h1 {
          margin:
            0 auto 18px;

          max-width: 850px;

          font-size:
            clamp(
              2.4rem,
              5.3vw,
              5.3rem
            );

          font-weight: 600;

          line-height: 0.98;

          letter-spacing: -0.045em;

          color: #ffffff;

          text-shadow:
            0 8px 40px
            rgba(
              0,
              0,
              0,
              0.55
            );
        }


        .title-main {
          color: #fff;
        }


        .title-accent {
          background:
            linear-gradient(
              100deg,
              #38bdf8 0%,
              #818cf8 45%,
              #c084fc 100%
            );

          -webkit-background-clip:
            text;

          -webkit-text-fill-color:
            transparent;

          background-clip: text;
        }


        /* ====================================================
           DESCRIPTION - NAVY BLUE
        ===================================================== */

        .hero-content p {
          max-width: 550px;

          margin: 0 auto;

          color: #000080;

          font-size:
            clamp(
              0.88rem,
              1.2vw,
              1.1rem
            );

          font-weight: 600;

          line-height: 1.65;

          text-shadow:
            0 2px 10px
            rgba(
              255,
              255,
              255,
              0.65
            );
        }


        /* ====================================================
           SMALL DECORATIVE LINE
        ===================================================== */

        .hero-line {
          display: flex;

          align-items: center;

          justify-content: center;

          gap: 5px;

          margin-top: 25px;
        }


        .hero-line span:first-child {
          width: 42px;

          height: 2px;

          background: #38bdf8;

          border-radius: 10px;
        }


        .hero-line span:last-child {
          width: 8px;

          height: 2px;

          background:
            rgba(
              255,
              255,
              255,
              0.55
            );

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

          background:
            rgba(
              255,
              255,
              255,
              0.35
            );

          cursor: pointer;

          transition:
            width 0.5s ease,
            background 0.5s ease;
        }


        .indicator.active {
          width: 48px;

          background: #38bdf8;
        }


        /* ====================================================
           SCROLL INDICATOR
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
          color:
            rgba(
              255,
              255,
              255,
              0.55
            );

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

          background:
            rgba(
              255,
              255,
              255,
              0.25
            );
        }


        .scroll-line::after {
          content: "";

          position: absolute;

          top: -100%;
          left: 0;

          width: 100%;
          height: 50%;

          background: #38bdf8;

          animation:
            scrollLine
            2s
            ease-in-out
            infinite;
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
           TABLET
        ===================================================== */

        @media (max-width: 991px) {

          .hero-content {
            padding: 0 35px;
          }

          .scroll-indicator {
            left: 30px;
          }

          .text-indicators {
            right: 30px;
          }

        }


        /* ====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 768px) {

          .hero {
            min-height: 580px;
          }


          /* IMAGE */

          .image-stage {
            inset: -16%;

            width: 132%;
            height: 132%;
          }


          .image-camera {
            animation:
              mobileCamera
              13s
              cubic-bezier(
                0.45,
                0.05,
                0.55,
                0.95
              )
              infinite
              alternate;
          }


          @keyframes mobileCamera {

            0% {
              transform:
                translate3d(
                  0,
                  0,
                  0
                )
                scale(1);
            }

            30% {
              transform:
                translate3d(
                  -1.5%,
                  -1%,
                  0
                )
                scale(1.06)
                rotateZ(-0.2deg);
            }

            60% {
              transform:
                translate3d(
                  1.5%,
                  1%,
                  0
                )
                scale(1.11)
                rotateZ(0.2deg);
            }

            100% {
              transform:
                translate3d(
                  -1%,
                  -0.5%,
                  0
                )
                scale(1.15);
            }

          }


          /* LIGHT */

          .light-orb {
            width: 60vw;
            height: 60vw;

            filter: blur(70px);

            opacity: 0.08;
          }


          /* CENTER TEXT */

          .hero-content {
            top: 50%;
            left: 50%;

            width: 100%;

            padding: 0 20px;

            transform:
              translate(-50%, -50%);
          }


          .tag {
            margin-bottom: 13px;

            padding: 6px 12px;

            font-size: 0.62rem;

            letter-spacing: 0.12em;
          }


          .hero-content h1 {
            max-width: 100%;

            font-size:
              clamp(
                2rem,
                9vw,
                3.2rem
              );

            line-height: 1.02;

            letter-spacing: -0.035em;

            margin-bottom: 14px;
          }


          .hero-content p {
            max-width: 100%;

            font-size: 0.86rem;

            line-height: 1.55;

            color: #000080;
          }


          .hero-line {
            margin-top: 18px;
          }


          /* INDICATORS */

          .text-indicators {
            left: 50%;
            right: auto;

            bottom: 24px;

            transform:
              translateX(-50%);
          }


          /* SCROLL */

          .scroll-indicator {
            display: none;
          }


          /* PARTICLES */

          .particle {
            width: 2px;
            height: 2px;
          }

        }


        /* ====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 480px) {

          .hero {
            min-height: 540px;
          }


          .hero-content {
            top: 50%;
            left: 50%;

            padding: 0 16px;

            transform:
              translate(-50%, -50%);
          }


          .hero-content h1 {
            font-size:
              clamp(
                1.8rem,
                9.5vw,
                2.6rem
              );
          }


          .hero-content p {
            font-size: 0.8rem;

            color: #000080;
          }


          .hero-line {
            margin-top: 15px;
          }


          .indicator {
            width: 18px;
          }


          .indicator.active {
            width: 35px;
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
          .text-animation {

            animation: none;
          }

        }

      `}</style>
    </>
  );
}