"use client";

import React from "react";
import {
  Handshake,
  FileSearch,
  Lightbulb,
  Leaf,
  UserRound,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    title: "INTEGRITY",
    color: "navy",
    icon: Handshake,
  },
  {
    title: "TRANSPARENCY",
    color: "white",
    icon: FileSearch,
  },
  {
    title: "INNOVATION",
    color: "red",
    icon: Lightbulb,
  },
  {
    title: "RESPONSIBILITY",
    color: "navy",
    icon: Leaf,
  },
  {
    title: "CUSTOMER FOCUS",
    color: "white",
    icon: UserRound,
    twoLines: true,
  },
  {
    title: "SUSTAINABLE GROWTH",
    color: "red",
    icon: TrendingUp,
    twoLines: true,
  },
];

export default function OurValues() {
  return (<section className="values-section"> <div className="values-container">

    {/* HEADER */}
    {/* <div className="values-header">
      <div className="section-kicker">

      </div>

      <h2>
        Our <span>Values</span>
      </h2>
    </div> */}

    {/* DESCRIPTION */}
    {/* <p className="values-description">
      Our values guide the way we build relationships, create
      opportunities, and deliver sustainable growth.
    </p> */}

    {/* VALUES */}
    <div className="values-grid">
      {values.map((value) => {
        const Icon = value.icon;

        return (
          <div
            key={value.title}
            className={`value-card ${value.color}`}
          >
            {/* ICON */}
            <div className="icon-container">
              <Icon size={34} strokeWidth={1.8} />
            </div>

            {/* TITLE */}
            <h3 className={value.twoLines ? "two-lines" : ""}>
              {value.title}
            </h3>

            {/* SMALL LINE */}
            <div className="small-line"></div>
          </div>
        );
      })}
    </div>
  </div>

    <style jsx>{`
    /* =========================================
       MAIN SECTION
    ========================================= */

    .values-section {
      width: 100%;
      background: #ffffff;
      padding: 70px 20px;
    }

    .values-container {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }

    /* =========================================
       HEADER
    ========================================= */

    .values-header {
      text-align: center;
      margin-bottom: 25px;
    }

    .section-kicker {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      color: #c62828;

      font-size: 0.7rem;
      font-weight: 800;

      letter-spacing: 0.18em;

      margin-bottom: 12px;
    }

    .section-kicker span {
      display: block;

      width: 24px;
      height: 2px;

      background: #c62828;

      border-radius: 10px;
    }

    .values-header h2 {
      margin: 0;

      color: #0b1f4b;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: 800;
      font-size: clamp(1.8rem, 3vw, 2.5rem);
      line-height: 1.2;
      letter-spacing: -0.025em;
      text-align: center;
    }

    .values-header h2 span {
      color: #c62828;
      font-weight: 800;
      font-size: clamp(1.8rem, 3vw, 2.5rem);
    }

    /* =========================================
       DESCRIPTION
    ========================================= */

    .values-description {
      max-width: 700px;

      margin: 0 auto 38px;

      text-align: center;

      color: #666666;

      font-family: Arial, Helvetica, sans-serif;

      font-size: 15px;

      line-height: 1.6;
    }

    /* =========================================
       GRID
    ========================================= */

    .values-grid {
      display: grid;

      grid-template-columns: repeat(6, 1fr);

      gap: 16px;

      width: 100%;
    }

    /* =========================================
       CARD
    ========================================= */

    .value-card {
      min-height: 305px;

      padding: 25px 10px;

      display: flex;

      flex-direction: column;

      align-items: center;

      justify-content: center;

      text-align: center;

      border-radius: 12px;

      box-sizing: border-box;

      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
    }

    .value-card:hover {
      transform: translateY(-5px);

      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.14);
    }

    /* =========================================
       NAVY CARD
    ========================================= */

    .value-card.navy {
      background: #173875;

      color: #ffffff;
    }

    /* =========================================
       RED CARD
    ========================================= */

    .value-card.red {
      background: #ed1c24;

      color: #ffffff;
    }

    /* =========================================
       WHITE CARD
    ========================================= */

    .value-card.white {
      background: #ffffff;

      color: #173875;

      border: 2px solid #173875;

      box-shadow: 0 5px 18px rgba(23, 56, 117, 0.08);
    }

    /* =========================================
       ICON
    ========================================= */

    .icon-container {
      width: 64px;
      height: 64px;

      display: flex;

      align-items: center;
      justify-content: center;

      border-radius: 12px;

      margin-bottom: 17px;

      border: 1px solid currentColor;

      flex-shrink: 0;
    }

    .navy .icon-container,
    .red .icon-container {
      color: #ffffff;

      background: rgba(255, 255, 255, 0.08);
    }

    .white .icon-container {
      color: #173875;

      background: #f7f8fa;

      border-color: #173875;
    }

    /* =========================================
       TITLE
    ========================================= */

    .value-card h3 {
      width: 100%;

      margin: 0;

      padding: 0;

      font-family: Arial, Helvetica, sans-serif;

      font-size: 14px;

      font-weight: 700;

      line-height: 1.3;

      letter-spacing: 0.2px;

      text-align: center;

      white-space: nowrap;

      color: inherit;
    }

    /* =========================================
       TWO LINE TITLES
    ========================================= */

    .value-card h3.two-lines {
      width: 115px;

      white-space: normal;

      line-height: 1.25;

      text-align: center;
    }

    /* =========================================
       SMALL LINE
    ========================================= */

    .small-line {
      width: 35px;

      height: 3px;

      margin-top: 12px;

      border-radius: 5px;

      background: currentColor;
    }

    .navy .small-line,
    .red .small-line {
      background: #ffffff;
    }

    .white .small-line {
      background: #173875;
    }

    /* =========================================
       LARGE TABLET
    ========================================= */

    @media (max-width: 1200px) {
      .values-grid {
        grid-template-columns: repeat(3, 1fr);

        gap: 18px;
      }

      .value-card {
        min-height: 190px;

        padding: 25px 15px;
      }

      .value-card h3 {
        font-size: 16px;
      }

      .value-card h3.two-lines {
        width: 160px;
      }
    }

    /* =========================================
       TABLET
    ========================================= */

    @media (max-width: 768px) {
      .values-section {
        padding: 55px 18px;
      }

      .values-header {
        margin-bottom: 22px;
      }

      .section-kicker {
        font-size: 0.62rem;

        gap: 7px;

        letter-spacing: 0.14em;
      }

      .section-kicker span {
        width: 18px;
        height: 2px;
      }

      .values-header h2 {
        font-size: clamp(1.4rem, 5vw, 1.7rem);
      }

      .values-description {
        font-size: 14px;

        margin-bottom: 30px;
      }

      .values-grid {
        grid-template-columns: repeat(2, 1fr);

        gap: 15px;
      }

      .value-card {
        min-height: 180px;

        padding: 22px 15px;
      }

      .value-card h3 {
        font-size: 16px;
      }

      .value-card h3.two-lines {
        width: 150px;
      }
    }

    /* =========================================
       MOBILE
    ========================================= */

    @media (max-width: 500px) {
      .values-section {
        padding: 45px 15px;
      }

      .values-grid {
        grid-template-columns: 1fr;

        gap: 15px;
      }

      .value-card {
        min-height: 145px;

        padding: 22px 20px;

        border-radius: 10px;
      }

      .icon-container {
        width: 58px;
        height: 58px;

        margin-bottom: 12px;
      }

      .value-card h3 {
        font-size: 17px;
      }

      .value-card h3.two-lines {
        width: 180px;
      }

      .small-line {
        width: 32px;

        height: 2px;

        margin-top: 9px;
      }
    }

    /* =========================================
       SMALL MOBILE
    ========================================= */

    @media (max-width: 380px) {
      .values-section {
        padding: 40px 12px;
      }

      .section-kicker {
        font-size: 0.56rem;

        gap: 6px;
      }

      .section-kicker span {
        width: 15px;
      }

      .values-header h2 {
        font-size: 22px;
      }

      .values-description {
        font-size: 13px;
      }

      .value-card {
        min-height: 135px;

        padding: 20px 15px;
      }

      .icon-container {
        width: 52px;
        height: 52px;
      }

      .value-card h3 {
        font-size: 16px;
      }

      .value-card h3.two-lines {
        width: 160px;
      }
    }
  `}</style>
  </section>


  );
}
