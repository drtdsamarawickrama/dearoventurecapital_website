"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase, Users, TrendingUp, MonitorPlay, ChevronDown, CheckCircle2, MapPin } from "lucide-react";
import Head from "next/head";

export default function CareersPage() {
  const [detailsOpen, setDetailsOpen] = useState(false);

  const benefits = [
    {
      icon: <TrendingUp className="text-primary" size={32} />,
      title: <span className="text-black">Attractive Earnings</span>,
      description: "Performance Based Incentives"
    },
    {
      icon: <MonitorPlay className="text-primary" size={32} />,
      title: <span className="text-black">Training & Development</span>,
      description: "Comprehensive Training Provided"
    },
    {
      icon: <Briefcase className="text-primary" size={32} />,
      title: <span className="text-black">Career Growth</span>,
      description: "Opportunities for Advancement"
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: <span className="text-black">Supportive Environment</span>,
      description: "Be Part of a Dynamic and Professional Team"
    }
  ];

  const requirements = [
    "Male and Female candidates",
    "Age 21 years and above",
    "With experience or without experience",
    "Excellent communication and interpersonal skills",
    "Passion for sales, customer service, and business development",
    "Self-motivated individuals with a desire to achieve career growth and financial success"
  ];

  return (
    <main className="careers-main bg-light">
      <Head>
        <title>Careers - Dearo Venture Capital</title>
        <meta name="description" content="Join Dearo Venture Capital and build wealth while empowering futures." />
      </Head>

      {/* Hero Section */}
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
            Step into a rewarding career in the investment industry with unlimited growth opportunities.
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

      {/* Why Join Us Section */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <motion.h2
              className="display-5 fw-bold mb-3 text-black section-title"
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="icon-wrapper mb-4 mx-auto d-flex align-items-center justify-content-center rounded-circle bg-white shadow-sm" style={{ width: "80px", height: "80px" }}>
                    {benefit.icon}
                  </div>
                  <h4 className="fw-bold mb-3 h5">{benefit.title}</h4>
                  <p className="text-muted small mb-0">{benefit.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="open-roles" className="py-5 bg-light">
        <div className="container py-5">
          <div className="row align-items-center mb-5">
            <div className="col-md-12 text-center">
              <motion.h2
                className="display-5 fw-bold text-black section-title mb-3"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Current Opportunities
              </motion.h2>
            </div>
          </div>

          <div className="role-list max-w-4xl mx-auto" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <motion.div
              className="role-card rounded-4 mb-4 shadow-sm border bg-white overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-4 p-md-5 d-flex flex-column flex-md-row justify-content-between align-items-md-center">
                <div className="role-info mb-4 mb-md-0">
                  <span className="badge bg-primary bg-opacity-10 text-white mb-3 px-3 py-2 rounded-pill fw-bold">Full Time</span>
                  <h3 className="h4 fw-bold mb-2 text-black">Business Development Professionals - Investments</h3>
                  <p className="text-muted mb-0 d-flex align-items-center gap-2">
                    Step into a rewarding career in the investment industry with unlimited growth opportunities.
                  </p>
                </div>
                <div className="role-action text-md-end">
                  <button
                    onClick={() => setDetailsOpen(!detailsOpen)}
                    className="btn btn-outline-primary rounded-pill px-4 py-2 d-flex align-items-center gap-2 text-nowrap fw-bold mx-auto mx-md-0"
                  >
                    {detailsOpen ? "Hide Details" : "View Details"}
                    <motion.div
                      animate={{ rotate: detailsOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </button>
                </div>
              </div>

              {/* Expansible Details */}
              <AnimatePresence>
                {detailsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="border-top"
                  >
                    <div className="p-4 p-md-5 bg-light bg-opacity-50">

                      <div className="row g-4">
                        {/* Who Can Apply */}
                        <div className="col-lg-6">
                          <h4 className="fw-bold mb-4 text-black d-flex align-items-center gap-2">
                            Who Can Apply?
                          </h4>
                          <ul className="list-unstyled mb-0">
                            {requirements.map((req, i) => (
                              <li key={i} className="mb-3 d-flex align-items-start gap-3">
                                <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                                <span className="text-muted">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Venue & Action */}
                        <div className="col-lg-6">
                          <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
                            <h5 className="fw-bold text-black mb-3 d-flex align-items-center gap-2">
                              <MapPin className="text-primary" size={20} />
                              Walk-In Interview Venue
                            </h5>
                            <p className="text-muted mb-0">
                              The Ceylinco House, 9th Floor, <br />
                              No. 69, Janadhipathi Mawatha, <br />
                              Colombo 01.
                            </p>
                          </div>

                          <div className="text-center mt-5">
                            <p className="fw-bold mb-3 text-black">Take the first step towards a successful future!</p>
                            <a
                              href="mailto:info@dearoventurecapital.com?subject=Application%20for%20Business%20Development%20Professional%20-%20Investments"
                              className="btn btn-dark rounded-pill px-5 py-3 d-inline-flex align-items-center gap-2 apply-btn w-100 justify-content-center fw-bold shadow-sm"
                            >
                              Apply Now <ArrowRight size={18} />
                            </a>
                            <p className="small text-muted mt-3 mb-0">Send your CV to info@dearoventurecapital.com</p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .careers-main {
          overflow-x: hidden;
        }
        .careers-hero {
          min-height: 500px;
          height: 60vh;
          background: url('/images/careers_hero.png') no-repeat center center;
          background-size: cover;
          position: relative;
        }
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(26, 40, 80, 0.95) 0%, rgba(13, 110, 253, 0.85) 100%);
        }
        .hero-btn {
          background: linear-gradient(90deg, #0d6efd, #0bb5ff);
          border: none;
          box-shadow: 0 8px 20px rgba(13, 110, 253, 0.3);
          transition: all 0.3s ease;
        }
        .hero-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 12px 30px rgba(13, 110, 253, 0.4);
        }
        .section-title {
          background: linear-gradient(90deg, #1a2850, #0d6efd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline-block;
        }
        .benefit-card {
          border: 1px solid rgba(0,0,0,0.05);
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        .benefit-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.08);
          background-color: #fff !important;
          border-color: rgba(13, 110, 253, 0.2);
        }
        .role-card {
          transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
          border: 1px solid rgba(0,0,0,0.08) !important;
        }
        .role-card:hover {
          box-shadow: 0 15px 35px rgba(0,0,0,0.08) !important;
          border-color: rgba(13, 110, 253, 0.3) !important;
        }
        .apply-btn {
          background-color: #1a2850;
          transition: all 0.3s ease;
        }
        .apply-btn:hover {
          background-color: #0d6efd;
          transform: scale(1.02);
          box-shadow: 0 10px 20px rgba(13, 110, 253, 0.2) !important;
        }
        .text-primary {
          color: #0d6efd !important;
        }
        .bg-primary {
          background-color: #0d6efd !important;
        }
        .text-black {
          color: #111 !important;
        }
        .btn-outline-primary {
          color: #0d6efd;
          border-color: #0d6efd;
          transition: all 0.3s ease;
        }
        .btn-outline-primary:hover {
          background-color: #0d6efd;
          color: #fff;
        }
      `}</style>
    </main>
  );
}
