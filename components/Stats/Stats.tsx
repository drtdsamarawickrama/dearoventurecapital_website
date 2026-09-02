
"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  BiBuilding,
  BiGroup,
  BiDollar,
  BiBriefcase,
} from "react-icons/bi";

const stats = [
  {
    label: "Branches",
    value: 25,
    icon: <BiBuilding size={40} />,
  },
  {
    label: "Happy Clients",
    value: 25000,
    icon: <BiGroup size={40} />,
  },
  {
    label: "Total Assets",
    value: 5,
    suffix: " Bn+",
    icon: <BiDollar size={40} />,
  },
  {
    label: "Work Force",
    value: 350,
    icon: <BiBriefcase size={40} />,
  },
];

export default function Stats() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="py-5 stats-section"
    >
      <div className="container">
        <div className="row text-center justify-content-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="col-6 col-md-3 mb-4 mb-md-0 d-flex flex-column align-items-center"
            >
              {/* Icon */}
              <div
                className={`stats-icon mb-3 ${
                  inView ? "active" : ""
                }`}
              >
                {stat.icon}
              </div>

              {/* Animated Number */}
              <h3 className="stats-number display-5 fw-bold mb-2">
                {inView ? (
                  <>
                    <CountUp
                      end={stat.value}
                      duration={2}
                      separator=","
                    />
                    <span>{stat.suffix || "+"}</span>
                  </>
                ) : (
                  <>
                    0<span>{stat.suffix || "+"}</span>
                  </>
                )}
              </h3>

              {/* Label */}
              <p className="stats-label fw-semibold mb-0">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-section {
          background-color: #100755;
        }

        .stats-icon {
          color: #ffffff;
          opacity: 0;
          transform: translateY(-20px);
          transition: all 0.7s ease;
        }

        .stats-icon.active {
          opacity: 1;
          transform: translateY(0);
        }

        .stats-number {
          color: #ffffff;
          font-size: clamp(2rem, 3vw, 2.5rem);
          transition: transform 0.3s ease;
        }

        .stats-number:hover {
          transform: scale(1.1);
        }

        .stats-number span {
          margin-left: 2px;
        }

        .stats-label {
          font-size: 1rem;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .stats-section {
            padding-top: 3rem !important;
            padding-bottom: 3rem !important;
          }

          .stats-icon svg {
            width: 34px;
            height: 34px;
          }

          .stats-number {
            font-size: 2rem;
          }

          .stats-label {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 576px) {
          .stats-number {
            font-size: 1.8rem;
          }

          .stats-label {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </section>
  );
}

