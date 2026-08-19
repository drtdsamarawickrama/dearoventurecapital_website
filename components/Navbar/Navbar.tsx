"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

function DropdownArrow({ open }: { open?: boolean }) {
  return (
    <span
      style={{
        display: "inline-block",
        marginLeft: "6px",
        width: "6px",
        height: "6px",
        borderRight: "2px solid #111",
        borderBottom: "2px solid #111",
        transform: open ? "rotate(-135deg)" : "rotate(45deg)",
        transition: "transform 0.3s ease",
      }}
    />
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [leadershipOpen, setLeadershipOpen] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
    setLeadershipOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setLeadershipOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setLeadershipOpen(false), 200);
  };

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Subsidiaries", href: "/sectors" },
    { name: "Community & Environment", href: "/community" },
    { name: "Investor Relations", href: "/investors" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Gallery", href: "/gallery" },

  ];
  return (
    <header className="header-wrapper">
      {/* Top Bar */}
      <div className={`top-bar ${scrolled ? "top-bar-hidden" : ""}`}>
        <div className="container-fluid px-3 px-lg-4">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-1">
            <div className="top-bar-left text-white small mb-1 mb-md-0 d-none d-md-block">
              Building Wealth, Empowering Futures in Sri Lanka
            </div>
            <div className="top-bar-right d-flex flex-wrap justify-content-center align-items-center text-white small">
              <a href="tel:0114782400" className="top-bar-link me-3 d-flex align-items-center gap-1">
                <Phone size={14} /> 011 478 2400
              </a>
              <a href="mailto:info@dearoventurecapital.com" className="top-bar-link me-3 me-md-4 d-flex align-items-center gap-1">
                <Mail size={14} /> info@dearoventurecapital.com
              </a>
              {/* <div className="auth-links mt-1 mt-md-0">
                <Link href="/login" className="top-bar-link">Login</Link>
                <span className="mx-2 text-white-50">|</span>
                <Link href="/register" className="top-bar-link">Register</Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <nav className={`navbar navbar-expand-lg premium-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container-fluid">
          {/* Logo */}
          <Link href="/" className="navbar-brand" onClick={closeMenu}>
            <Image
              src="/images/logo1.jpg"
              alt="Dearo Logo"
              width={160}
              height={40}
              className="logo"
            />
          </Link>

          {/* Hamburger */}
          <button className="navbar-toggler border-0" onClick={toggleMenu}>
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Nav Items */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-center nav-menu">

            {/* About Us */}
            <li className="nav-item">
              <Link href="/about" className="nav-link" onClick={closeMenu}>
                About Us
              </Link>
            </li>

            {/* Leadership */}
            <li className="nav-item">
              <Link href="/director" className="nav-link" onClick={closeMenu}>
                Our Leadership
              </Link>
            </li>

            {/* Subsidiaries */}
            <li className="nav-item">
              <Link href="/sectors" className="nav-link" onClick={closeMenu}>
                Subsidiaries
              </Link>
            </li>

            {/* Establish finance */}
            <li className="nav-item">
              <Link href="" className="nav-link" onClick={closeMenu}>
                 Establish Finance
              </Link>
            </li>


            {/* Community */}
            <li className="nav-item">
              <Link href="/community" className="nav-link" onClick={closeMenu}>
                Community & Environment
              </Link>
            </li>

            {/* Investors */}
            <li className="nav-item">
              <Link href="/investors" className="nav-link" onClick={closeMenu}>
                Investor Relations
              </Link>
            </li>

            {/* Gallery */}
            <li className="nav-item">
              <Link href="/gallery" className="nav-link" onClick={closeMenu}>
                Gallery
              </Link>
            </li>

            {/* Careers */}
            <li className="nav-item">
              <Link href="/careers" className="nav-link" onClick={closeMenu}>
                Careers
              </Link>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <Link href="/contact" className="nav-link" onClick={closeMenu}>
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </nav>

      <style jsx>{`
        /* Logo */
        .logo {
          display: block;
          transition: transform 0.35s ease;
        }

        .premium-nav.scrolled .logo {
          transform: scale(0.9);
        }

        /* Header Wrapper & Top Bar */
        .header-wrapper {
          position: sticky;
          top: 0;
          z-index: 999;
          width: 100%;
          background: #ffffff;
        }

        .top-bar {
          background-color: #1a2850;
          font-size: 0.85rem;
          padding: 5px 0;
          transition: all 0.3s ease;
          overflow: hidden;
          max-height: 100px;
        }

        .top-bar-hidden {
          max-height: 0;
          padding: 0;
          opacity: 0;
        }

        .top-bar-link {
          color: #ffffff;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .top-bar-link:hover {
          color: #a5c8ff;
        }

        /* Navbar */
        .premium-nav {
          position: relative;
          z-index: 998;
          background: #ffffff;
          padding: 14px 0;
          transition: all 0.35s ease;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        .premium-nav.scrolled {
          padding: 6px 0;
          background: #ffffff;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        /* Nav menu */
        .nav-menu {
          display: flex;
          gap: 30px;
        }

        @media (max-width: 991px) {
          .nav-menu {
            flex-direction: column;
            gap: 20px;
          }
        }

        /* Nav links */
        .nav-link {
          font-size: 0.85rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #000000;
          padding: 6px 12px;
          display: flex;
          align-items: center;
          position: relative;
          transition: all 0.3s ease;
        }

        .premium-nav.scrolled .nav-link {
          padding: 4px 10px;
          font-size: 0.8rem;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #0d6efd, #5aa2ff);
          transition: width 0.3s ease;
        }

        .nav-link:hover {
          color: #0d6efd;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        /* Dropdown */
        .leadership-wrapper {
          position: relative;
        }

        .leadership-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.25s ease;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 14px;
          box-shadow: 0 18px 36px rgba(0, 0, 0, 0.18);
          padding: 8px 0;
        }

        .leadership-wrapper.open .leadership-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item {
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #000000;
          padding: 12px 18px;
          transition: all 0.25s ease;
        }

        .dropdown-item:hover {
          background: linear-gradient(90deg, #0d6efd, #5aa2ff);
          color: #fff;
        }

        @media (max-width: 991px) {
          .leadership-menu {
            position: static;
            opacity: 1 !important;
            visibility: visible !important;
            box-shadow: none;
          }
        }
      `}</style>
    </header>
  );
}