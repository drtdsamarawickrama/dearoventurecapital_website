"use client";

import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Users, Zap, Star } from "lucide-react";
import Head from "next/head";

export default function CareersPage() {
  const benefits = [
    {
      icon: <Zap className="text-primary" size={32} />,
      title: <span className="text-black">"Innovative Environment"</span>,
      description: "Work with cutting-edge technologies and shape the future of venture capital."
    },
    {
      icon: <Users className="text-primary" size={32} />,
      title: <span className="text-black">"Collaborative Culture"</span>,
      description: "Join a diverse team of brilliant minds dedicated to mutual success."
    },
    {
      icon: <Star className="text-primary" size={32} />,
      title: <span className="text-black">"Growth Opportunities"</span>,
      description: "Continuous learning and clear paths for professional advancement."
    },
    {
      icon: <Briefcase className="text-primary" size={32} />,
      title: <span className="text-black">"Competitive Compensation"</span>,
      description: "Attractive packages that reward your hard work and dedication."
    }
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
            Shape the Future <br/> With Us
          </motion.h1>
          <motion.p 
            className="lead text-white-50 mb-5 mx-auto"
            style={{ maxWidth: "700px" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            At Dearo Venture Capital, we believe that the right people can change the world. 
            Join our dynamic team and help us build wealth and empower futures.
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
            <div className="col-md-8 text-center text-md-start">
              <motion.h2 
                className="display-5 fw-bold text-black section-title mb-3"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Current Opportunities
              </motion.h2>
              <motion.p 
                className="text-muted"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                We are always looking for talented individuals. If you don't see a role that fits, reach out anyway.
              </motion.p>
            </div>
          </div>

          <div className="role-list">
            <motion.div 
              className="role-card p-4 rounded-4 mb-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center shadow-sm border bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="role-info mb-4 mb-md-0">
                <span className="badge bg-primary bg-opacity-10 text-white mb-3 px-3 py-2 rounded-pill fw-bold">Full Time</span>
                <h3 className="h4 fw-bold mb-2 text-black">General Application</h3>
                <p className="text-muted mb-0 d-flex align-items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                  Colombo, Sri Lanka / Remote
                </p>
              </div>
              <div className="role-action">
                <a 
                  href="mailto:info@dearoventurecapital.com?subject=Application%20for%20General%20Role&body=Please%20attach%20your%20CV%20and%20provide%20a%20brief%20cover%20letter%20here." 
                  className="btn btn-dark rounded-pill px-4 py-3 d-flex align-items-center gap-2 apply-btn fw-bold"
                >
                  Apply Now <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>

            <motion.div 
              className="role-card p-4 rounded-4 mb-4 d-flex flex-column flex-md-row justify-content-between align-items-md-center shadow-sm border bg-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="role-info mb-4 mb-md-0">
                <span className="badge bg-primary bg-opacity-10 text-white mb-3 px-3 py-2 rounded-pill fw-bold">Full Time</span>
                <h3 className="h4 fw-bold mb-2 text-black">Investment Analyst</h3>
                <p className="text-muted mb-0 d-flex align-items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                  </svg>
                  Colombo, Sri Lanka
                </p>
              </div>
              <div className="role-action">
                <a 
                  href="mailto:info@dearoventurecapital.com?subject=Application%20for%20Investment%20Analyst%20Role&body=Please%20attach%20your%20CV%20and%20provide%20a%20brief%20cover%20letter%20here." 
                  className="btn btn-dark rounded-pill px-4 py-3 d-flex align-items-center gap-2 apply-btn fw-bold"
                >
                  Apply Now <ArrowRight size={18} />
                </a>
              </div>
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
          background: url('/images/hero1.jpg') no-repeat center center;
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
          transform: translateX(10px) translateY(-2px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08) !important;
          border-color: rgba(13, 110, 253, 0.3) !important;
        }
        .apply-btn {
          background-color: #1a2850;
          transition: all 0.3s ease;
        }
        .apply-btn:hover {
          background-color: #0d6efd;
          transform: scale(1.05);
          box-shadow: 0 10px 20px rgba(13, 110, 253, 0.2);
        }
        .text-primary {
          color: #0d6efd !important;
        }
        .bg-primary {
          background-color: #0d6efd !important;
        }
      `}</style>
    </main>
  );
}
