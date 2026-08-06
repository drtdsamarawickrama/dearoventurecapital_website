"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Clock, Globe } from "lucide-react";

interface FormState {
  name: string;
  role: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/investor-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", role: "", email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  const contactDetails = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "info@dearoventurecapital.com",
      href: "mailto:info@dearoventurecapital.com",
    },
    {
      icon: <Phone size={22} />,
      label: "Hotline",
      value: "011 478 2400",
      href: "tel:+94114782400",
    },
    {
      icon: <Phone size={22} />,
      label: "General",
      value: "+94 74 390 8274",
      href: "tel:+94743908274",
    },
    {
      icon: <MapPin size={22} />,
      label: "Office",
      value: "9th Floor, Ceylinco House, No 69, Janadhipathi Mawatha, Colombo 01",
      href: "https://maps.google.com/?q=Ceylinco+House+Colombo",
    },
    {
      icon: <Clock size={22} />,
      label: "Office Hours",
      value: "Mon – Sat: 8:30 AM – 5:00 PM",
      href: null,
    },
    {
      icon: <Globe size={22} />,
      label: "Website",
      value: "www.dearoventurecapital.com",
      href: "https://www.dearoventurecapital.com",
    },
  ];

  return (
    <div className="contact-root">

      {/* Hero Banner */}
      <div className="contact-hero">
        <div className="hero-overlay" />
        <div className="container position-relative z-1 text-center py-5">
          <span className="hero-badge">Get In Touch</span>
          <h1 className="hero-title mt-3">Contact Us</h1>
          <p className="hero-subtitle">
            Reach out for partnerships, investments, or any inquiries.<br />
            Our team is ready to assist you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="contact-body">
        <div className="container">
          <div className="row g-5 align-items-start">

            {/* Left — Info Cards */}
            <div className="col-lg-5">
              <div className="info-panel">
                <h2 className="info-heading">Contact Information</h2>
                <p className="info-sub mb-4">We'd love to hear from you. Here's how you can reach us.</p>

                <div className="info-cards">
                  {contactDetails.map((item, i) => (
                    <div key={i} className="info-card">
                      <div className="info-icon-wrap">
                        {item.icon}
                      </div>
                      <div className="info-text">
                        <span className="info-label">{item.label}</span>
                        {item.href ? (
                          <a href={item.href} className="info-value link-value" target="_blank" rel="noopener noreferrer">
                            {item.value}
                          </a>
                        ) : (
                          <span className="info-value">{item.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Embed */}
              <div className="map-wrapper mt-4">
                <iframe
                  title="Dearo Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.8271985527097!2d79.84793657476565!3d6.921893493076985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2591614f16c0b%3A0x4d50de8ae7a34e4c!2sCeylinco%20House!5e0!3m2!1sen!2slk!4v1690000000000"
                  width="100%"
                  height="220"
                  style={{ border: 0, borderRadius: "16px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Right — Form */}
            <div className="col-lg-7">
              <div className="form-panel">
                <h2 className="form-heading">Send Us a Message</h2>
                <p className="form-sub mb-4">Fill in the form below and we'll get back to you within 24 hours.</p>

                {status === "success" && (
                  <div className="alert-success-box">
                    <CheckCircle size={20} />
                    <span>Your message has been sent successfully! We'll be in touch soon.</span>
                  </div>
                )}
                {status === "error" && (
                  <div className="alert-error-box">
                    <AlertCircle size={20} />
                    <span>Something went wrong. Please try again or email us directly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="field-group">
                        <label className="field-label">Full Name <span className="required">*</span></label>
                        <input
                          name="name"
                          type="text"
                          className="field-input"
                          placeholder="John Silva"
                          required
                          value={form.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="field-group">
                        <label className="field-label">Role / Position</label>
                        <input
                          name="role"
                          type="text"
                          className="field-input"
                          placeholder="e.g. Investor, Partner"
                          value={form.role}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="field-group">
                        <label className="field-label">Email Address <span className="required">*</span></label>
                        <input
                          name="email"
                          type="email"
                          className="field-input"
                          placeholder="you@example.com"
                          required
                          value={form.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="field-group">
                        <label className="field-label">Phone Number</label>
                        <input
                          name="phone"
                          type="tel"
                          className="field-input"
                          placeholder="+94 7X XXX XXXX"
                          value={form.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="field-group">
                        <label className="field-label">Message <span className="required">*</span></label>
                        <textarea
                          name="message"
                          className="field-input"
                          rows={6}
                          placeholder="Write your message here..."
                          required
                          value={form.message}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={status === "loading"}
                      >
                        {status === "loading" ? (
                          <>
                            <span className="spinner" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      <style jsx>{`
        /* ===== ROOT ===== */
        .contact-root {
          background: #f1f5f9;
          min-height: 100vh;
        }

        /* ===== HERO ===== */
        .contact-hero {
          background: linear-gradient(135deg, #0a1628 0%, #1a3a6b 50%, #0f2444 100%);
          position: relative;
          padding: 10px 0 10px;
          overflow: hidden;
        }
        .contact-hero::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(220,50,50,0.15) 0%, transparent 70%);
          border-radius: 50%;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        .hero-badge {
          display: inline-block;
          background: rgba(220,50,50,0.2);
          color: #ef4444;
          border: 1px solid rgba(220,50,50,0.3);
          padding: 6px 20px;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .hero-title {
          font-size: clamp(2rem, 5vw, 3.2rem);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
        }
        .hero-subtitle {
          font-size: 1.05rem;
          color: rgba(255,255,255,0.65);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* ===== BODY ===== */
        .contact-body {
          padding: 60px 0 80px;
        }

        /* ===== INFO PANEL ===== */
        .info-panel {
          background: #fff;
          border-radius: 20px;
          padding: 36px 32px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }
        .info-heading {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
        }
        .info-sub {
          color: #64748b;
          font-size: 0.95rem;
        }
        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .info-card {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 14px 16px;
          border-radius: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          transition: all 0.25s ease;
        }
        .info-card:hover {
          background: #eff6ff;
          border-color: #bfdbfe;
          transform: translateX(4px);
        }
        .info-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: linear-gradient(135deg, #1a3a6b, #2563eb);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .info-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .info-label {
          font-size: 0.75rem;
          font-weight: 600;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 3px;
        }
        .info-value {
          font-size: 0.93rem;
          color: #1e293b;
          font-weight: 500;
          line-height: 1.5;
        }
        .link-value {
          color: #2563eb;
          text-decoration: none;
          transition: color 0.2s;
        }
        .link-value:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }

        /* ===== MAP ===== */
        .map-wrapper {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
          border: 1px solid #e2e8f0;
        }

        /* ===== FORM PANEL ===== */
        .form-panel {
          background: #fff;
          border-radius: 20px;
          padding: 40px 36px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
        }
        .form-heading {
          font-size: 1.5rem;
          font-weight: 700;
          color: #0f172a;
        }
        .form-sub {
          color: #64748b;
          font-size: 0.95rem;
        }

        /* ===== FORM FIELDS ===== */
        .field-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .field-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #374151;
        }
        .required {
          color: #ef4444;
        }
        .field-input {
          width: 100%;
          padding: 13px 16px;
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.95rem;
          color: #1e293b;
          background: #f8fafc;
          outline: none;
          transition: all 0.25s ease;
          font-family: inherit;
          resize: vertical;
        }
        .field-input::placeholder {
          color: #94a3b8;
        }
        .field-input:focus {
          border-color: #2563eb;
          background: #fff;
          box-shadow: 0 0 0 4px rgba(37,99,235,0.1);
        }

        /* ===== SUBMIT BUTTON ===== */
        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          padding: 15px;
          background: linear-gradient(135deg, #1a3a6b 0%, #2563eb 100%);
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 0.01em;
          font-family: inherit;
        }
        .submit-btn:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 12px 28px rgba(37,99,235,0.35);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* ===== SPINNER ===== */
        .spinner {
          width: 18px;
          height: 18px;
          border: 2px solid rgba(255,255,255,0.4);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
          display: inline-block;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ===== ALERTS ===== */
        .alert-success-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: #f0fdf4;
          border: 1px solid #86efac;
          border-radius: 10px;
          color: #15803d;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .alert-error-box {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          background: #fef2f2;
          border: 1px solid #fca5a5;
          border-radius: 10px;
          color: #b91c1c;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 20px;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 991px) {
          .form-panel, .info-panel {
            padding: 28px 22px;
          }
        }
        @media (max-width: 576px) {
          .contact-hero {
            padding: 60px 0 40px;
          }
          .hero-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  );
}