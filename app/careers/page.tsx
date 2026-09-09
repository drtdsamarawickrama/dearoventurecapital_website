
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Briefcase,
  Users,
  TrendingUp,
  MonitorPlay,
  ChevronDown,
} from "lucide-react";
import Head from "next/head";

export default function CareersPage() {
  const [openCareer, setOpenCareer] = useState<number | null>(null);

  // ============================================================
  // CURRENT OPENINGS
  // ============================================================
  const careers = [
    {
      id: 2,
      title: "Company Secretary",
      type: "Full Time",
      shortDescription:
        "Ensure compliance, maintain records, and support corporate governance.",
      image: "/images/careers/COMPANY SECRETARY.jpg",
    },

    {
      id: 3,
      title: "Business Development Professional - Investment",
      type: "Full Time",
      shortDescription:
        "Drive business growth, build client relationships, and identify new investment opportunities.",

      image: "/images/careers/business_development.jpg",
    },

    {
      id: 4,
      title: "Legal Officer",
      type: "Full Time",
      shortDescription:
        "Provide legal support, ensure compliance, and assist with corporate matters.",

      image: "/images/careers/legal_officer.png",
    },

     {
      id: 5,
      title: "Business Development Manager And Executive - Investment",
      type: "Full Time",
      shortDescription:
        "Manage investment operations, support clients, and identify opportunities for business growth.",

      image: "/images/careers/MANAGER EXCECUTIVE - INVESTMENT.jpg",
    },

    {
      id: 6,
      title: "Personal Assistant To the CEO",
      type: "Full Time",
      shortDescription:
        "Provide administrative support and assist with daily operations.",

      image: "/images/careers/PERSONAL ASSITANT.jpg",

  
    },

    {
      id: 7,
      title: "Receptionist",
      type: "Full Time",
      shortDescription:
        "Welcome visitors, handle inquiries, manage calls, and provide professional front-desk support.",

      image: "/images/careers/RECEPTIONIST.jpg",

  
    },



  ];

  // ============================================================
  // BENEFITS
  // ============================================================
  const benefits = [
    {
      icon: <TrendingUp className="text-primary" size={32} />,
      title: "Attractive Earnings",
      description: "Performance Based Incentives",
    },
    {
      icon: <MonitorPlay className="text-primary" size={32} />,
      title: "Training & Development",
      description: "Comprehensive Training Provided",
    },
    {
      icon: <Briefcase className="text-primary" size={32} />,
      title: "Career Growth",
      description: "Opportunities for Advancement",
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: "Supportive Environment",
      description: "Be Part of a Dynamic and Professional Team",
    },
  ];

  // ============================================================
  // TOGGLE CAREER DETAILS
  // ============================================================
  const toggleCareer = (id: number) => {
    setOpenCareer(openCareer === id ? null : id);
  };

  return (
    <main className="careers-main bg-light">
      <Head>
        <title>Careers - Dearo Venture Capital</title>

        <meta
          name="description"
          content="Join Dearo Venture Capital and build wealth while empowering futures."
        />
      </Head>

      {/* ========================================================
          HERO SECTION
      ======================================================== */}
      <section className="careers-hero position-relative d-flex align-items-center justify-content-center text-center">
        <div className="hero-overlay"></div>

        <div className="container position-relative z-1 py-5">
          <motion.h1
            className="display-3 fw-bold text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Shape the Future <br /> With Us
          </motion.h1>

          <motion.p
            className="lead text-white-50 mb-5 mx-auto"
            style={{ maxWidth: "700px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Step into a rewarding career in the investment industry with
            unlimited growth opportunities.
          </motion.p>

          <motion.a
            href="#open-roles"
            className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold hero-btn"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            View Open Roles
          </motion.a>
        </div>
      </section>

      {/* ========================================================
          WHY JOIN US
      ======================================================== */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <motion.h2
              className="display-5 fw-bold mb-3 section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Why Join Dearo?
            </motion.h2>

            <motion.p
              className="text-muted"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Discover the benefits of being part of our exceptional team.
            </motion.p>
          </div>

          <div className="row g-4 pt-3">
            {benefits.map((benefit, index) => (
              <div className="col-md-6 col-lg-3" key={index}>
                <motion.div
                  className="benefit-card h-100 p-4 bg-light rounded-4 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >
                  <div
                    className="icon-wrapper mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm"
                    style={{
                      width: "80px",
                      height: "80px",
                    }}
                  >
                    {benefit.icon}
                  </div>

                  <h4 className="fw-bold mb-3 h5">{benefit.title}</h4>

                  <p className="text-muted small mb-0">
                    {benefit.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CURRENT OPPORTUNITIES
      ======================================================== */}
      <section id="open-roles" className="py-5 bg-light">
        <div className="container py-5">

          {/* Heading */}
          <div className="text-center mb-5">
            <motion.h2
              className="display-5 fw-bold section-title mb-3"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Current Opportunities
            </motion.h2>

            <p className="text-muted mx-auto careers-subtitle">
              Explore our current career opportunities and take the next step
              in your professional journey.
            </p>
          </div>

          {/* Career List */}
          <div className="career-list mx-auto">
            {careers.map((career, index) => {
              const isOpen = openCareer === career.id;

              return (
                <motion.div
                  className="career-card bg-white rounded-4 shadow-sm border overflow-hidden mb-4"
                  key={career.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                >

                  {/* =================================================
                      CAREER HEADER
                  ================================================= */}
                  <div className="career-header p-4 p-md-5">
                    <div className="row align-items-center">

                      {/* Job Title + Short Description */}
                      <div className="col-lg-9">

                        <span className="badge career-badge mb-3 px-3 py-2 rounded-pill fw-bold">
                          {career.type}
                        </span>

                        <h3 className="h4 fw-bold mb-2 career-title">
                          {career.title}
                        </h3>

                        <p className="text-muted mb-0 career-short-description">
                          {career.shortDescription}
                        </p>

                      </div>

                      {/* View Details Button */}
                      <div className="col-lg-3 mt-4 mt-lg-0">
                        <button
                          onClick={() => toggleCareer(career.id)}
                          className="btn btn-outline-primary rounded-pill px-4 py-2 d-flex align-items-center justify-content-center gap-2 fw-bold mx-auto mx-lg-0 ms-lg-auto details-btn"
                        >
                          {isOpen ? "Hide Details" : "View Details"}

                          <motion.div
                            animate={{
                              rotate: isOpen ? 180 : 0,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                          >
                            <ChevronDown size={18} />
                          </motion.div>
                        </button>
                      </div>

                    </div>
                  </div>

                  {/* =================================================
                      DETAILS
                  ================================================= */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.4,
                        }}
                        className="career-details border-top"
                      >

                        {/* CENTERED IMAGE + APPLY BUTTON */}
                        <div className="career-details-content p-4 p-md-5">

                          <div className="career-image-container">

                            <div className="career-image-wrapper">
                              <img
                                src={career.image}
                                alt={career.title}
                                className="career-image"
                              />
                            </div>

                            {/* APPLY NOW UNDER IMAGE */}

                            <div className="apply-container">
                              <a
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=careers@dearoinvestment.com&su=${encodeURIComponent(
                                  `Application for ${career.title}`
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-dark rounded-pill px-5 py-3 d-inline-flex align-items-center justify-content-center gap-2 apply-btn fw-bold shadow-sm"
                              >
                                Apply Now
                                <ArrowRight size={18} />
                              </a>

                              <p className="small text-muted mt-3 mb-0">
                                Send your CV to careers@dearoinvestment.com
                              </p>
                            </div>


                          </div>

                        </div>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================
          CSS
      ======================================================== */}
      <style jsx>{`

        /* =====================================================
           MAIN
        ===================================================== */

        .careers-main {
          overflow-x: hidden;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .careers-hero {
          min-height: 500px;
          height: 60vh;
          background: url('/images/careers_hero.png') no-repeat center center;
          background-size: cover;
          position: relative;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(26, 40, 80, 0.95) 0%,
            rgba(13, 110, 253, 0.85) 100%
          );
        }

        .hero-btn {
          background: linear-gradient(
            90deg,
            #0d6efd,
            #0bb5ff
          );
          border: none;
          box-shadow: 0 8px 20px rgba(13, 110, 253, 0.3);
          transition: all 0.3s ease;
        }

        .hero-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 30px rgba(13, 110, 253, 0.4);
        }


        /* =====================================================
           SECTION TITLE
        ===================================================== */

        .section-title {
          background: linear-gradient(
            90deg,
            #1a2850,
            #0d6efd
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }

        .careers-subtitle {
          max-width: 650px;
        }


        /* =====================================================
           BENEFITS
        ===================================================== */

        .benefit-card {
          border: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s
            cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          background-color: #fff !important;
          border-color: rgba(13, 110, 253, 0.2);
        }


        /* =====================================================
           CAREER LIST
        ===================================================== */

        .career-list {
          max-width: 1000px;
        }

        .career-card {
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
          transition: all 0.3s
            cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        .career-card:hover {
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08) !important;
          border-color: rgba(13, 110, 253, 0.3) !important;
        }


        /* =====================================================
           CAREER HEADER
        ===================================================== */

        .career-header {
          min-height: 170px;
        }

        .career-badge {
          background-color: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
        }

        .career-title {
          color: #111;
        }

        .career-short-description {
          line-height: 1.7;
        }

        .details-btn {
          min-width: 155px;
        }


        /* =====================================================
           DETAILS
        ===================================================== */

        .career-details {
          background: rgba(248, 249, 250, 0.7);
        }

        .career-details-content {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .career-image-container {
          width: 100%;
          max-width: 650px;
          margin: 0 auto;
          text-align: center;
        }


        /* =====================================================
           CAREER IMAGE
        ===================================================== */

        .career-image-wrapper {
  width: 100%;
  max-width: 650px;
  min-height: 300px;
  overflow: hidden;
  border-radius: 20px;
  background-color: #f1f3f5;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.career-image {
  width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: contain;
  object-position: center;
  display: block;
  transition: transform 0.5s ease;
}

        .career-image-wrapper:hover .career-image {
          transform: scale(1.05);
        }


        /* =====================================================
           APPLY BUTTON
        ===================================================== */

        .apply-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-top: 25px;
        }

        .apply-btn {
          background-color: #1a2850;
          border: none;
          min-width: 220px;
          transition: all 0.3s ease;
        }

        .apply-btn:hover {
          background-color: #0d6efd;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(
            13,
            110,
            253,
            0.2
          ) !important;
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 767px) {

          .careers-hero {
            min-height: 450px;
            height: auto;
            padding: 60px 0;
          }

          .careers-hero h1 {
            font-size: 2.3rem;
          }

          .careers-hero p {
            font-size: 1rem;
          }

          .career-header {
            min-height: auto;
          }

          .career-title {
            font-size: 1.25rem;
            line-height: 1.5;
          }

          .career-short-description {
            font-size: 0.95rem;
          }

          .details-btn {
            width: 100%;
            max-width: 200px;
          }

          .career-image-container {
            max-width: 100%;
          }

          .career-image-wrapper {
  height: auto;
  min-height: 230px;
  width: 100%;
}

.career-image {
  width: 100%;
  height: auto;
  max-height: none;
  object-fit: contain;
}
          .apply-container {
            margin-top: 20px;
          }

          .apply-btn {
            width: 100%;
            max-width: 300px;
          }

        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (min-width: 768px) and (max-width: 991px) {

          .career-image-wrapper {
            height: 280px;
          }

        }

      `}</style>
    </main>
  );
}

