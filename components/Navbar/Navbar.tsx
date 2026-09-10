
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Phone, Mail, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  /* =====================================================
     MENU FUNCTIONS
  ===================================================== */

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setAboutOpen(false);
  };

  const toggleAbout = () => {
    setAboutOpen((prev) => !prev);
  };

  /* =====================================================
     SCROLL
  ===================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header-wrapper">

      {/* =================================================
          TOP BAR
      ================================================= */}

      <div className="top-bar">
        <div className="container-fluid px-3 px-lg-4">
          <div className="top-bar-inner">

            {/* LEFT */}
            <div className="top-bar-left">
              Building Wealth, Empowering Futures in Sri Lanka
            </div>

            {/* RIGHT */}
            <div className="top-bar-right">

              <a
                href="tel:0114782400"
                className="top-bar-link"
              >
                <Phone size={14} />
                <span>011 478 2400</span>
              </a>

              <a
                href="mailto:info@dearoventurecapital.com"
                className="top-bar-link"
              >
                <Mail size={14} />
                <span>info@dearoventurecapital.com</span>
              </a>

            </div>
          </div>
        </div>
      </div>


      {/* =================================================
          NAVBAR
      ================================================= */}

      <nav
        className={`navbar navbar-expand-lg premium-nav ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid px-3 px-lg-4">

          {/* =================================================
              LOGO
          ================================================= */}

          <Link
            href="/"
            className="navbar-brand"
            onClick={closeMenu}
          >
            <Image
              src="/images/final_logo-venture.jpg"
              alt="Dearo Venture Capital Logo"
              width={140}
              height={40}
              className="logo"
              priority
            />
          </Link>


          {/* =================================================
              MOBILE TOGGLE
          ================================================= */}

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="navbar-toggler-icon"></span>
          </button>


          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div
            className={`collapse navbar-collapse ${
              isOpen ? "show" : ""
            }`}
          >
            <ul className="navbar-nav ms-auto align-items-lg-center nav-menu">


              {/* =================================================
                  ABOUT US DROPDOWN
              ================================================= */}

              <li
                className={`nav-item dropdown-custom ${
                  aboutOpen ? "dropdown-active" : ""
                }`}
              >

                <button
                  type="button"
                  className="nav-link dropdown-toggle-custom"
                  onClick={toggleAbout}
                  aria-expanded={aboutOpen}
                >
                  About Us

                  <ChevronDown
                    size={15}
                    className={`dropdown-icon ${
                      aboutOpen ? "rotate" : ""
                    }`}
                  />
                </button>


                {/* DROPDOWN MENU */}

                <div className="dropdown-menu-custom">

                  <Link
                    href="/about"
                    className="dropdown-item-custom"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>

                  {/* <Link
                    href="/director"
                    className="dropdown-item-custom"
                    onClick={closeMenu}
                  >
                    Our Leadership
                  </Link> */}

                  <Link
                    href="/sectors"
                    className="dropdown-item-custom"
                    onClick={closeMenu}
                  >
                    Subsidiaries
                  </Link>

                  <Link
                    href="#"
                    className="dropdown-item-custom"
                    onClick={closeMenu}
                  >
                    Islamic Services
                  </Link>

                </div>
              </li>


              {/* =================================================
                  INVESTOR RELATIONS
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="/investors"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Investor Relations
                </Link>
              </li>


              {/* =================================================
                  BRANCH NETWORK
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="/branches"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Branch Network
                </Link>
              </li>


              {/* =================================================
                  NEWS & UPDATES
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="/community"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  News & Updates
                </Link>
              </li>


              {/* =================================================
                  CAREERS
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="/careers"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Careers
                </Link>
              </li>


              {/* =================================================
                  CONTACT
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="/contact"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>


              {/* =================================================
                  APPLY NOW
              ================================================= */}

              <li className="nav-item">
                <Link
                  href="/portal"
                  className="nav-link"
                  onClick={closeMenu}
                >
                  Apply Now
                </Link>
              </li>

            </ul>
          </div>

        </div>
      </nav>


      {/* =====================================================
          STYLES
      ===================================================== */}

      <style jsx>{`

        /* =====================================================
           HEADER
        ===================================================== */

        .header-wrapper {
          width: 100%;
          background: #ffffff;
          position: relative;
          z-index: 9999;
        }


        /* =====================================================
           TOP BAR
        ===================================================== */

        .top-bar {
          width: 100%;
          background: #1a2850;
          color: #ffffff;
          font-size: 0.85rem;
        }


        .top-bar-inner {
          min-height: 38px;

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          padding: 5px 0;
        }


        .top-bar-left {
          font-size: 0.8rem;
          line-height: 1.4;
          white-space: nowrap;
        }


        .top-bar-right {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          flex-wrap: wrap;

          gap: 18px;
        }


        .top-bar-link {
          display: inline-flex;
          align-items: center;

          gap: 5px;

          color: #ffffff !important;

          text-decoration: none !important;

          white-space: nowrap;

          transition: color 0.2s ease;
        }


        .top-bar-link:hover {
          color: #a5c8ff !important;
        }


        /* =====================================================
           NAVBAR
        ===================================================== */

        .premium-nav {
          position: sticky;
          top: 0;

          z-index: 9998;

          width: 100%;

          background: #ffffff;

          padding: 14px 0;

          border-bottom: 1px solid rgba(0, 0, 0, 0.06);

          transition:
            box-shadow 0.2s ease,
            background-color 0.2s ease;
        }


        /* =====================================================
           SCROLLED NAVBAR
        ===================================================== */

        .premium-nav.scrolled {
          background: #ffffff;

          box-shadow:
            0 4px 20px rgba(0, 0, 0, 0.10);
        }


        /* =====================================================
           LOGO
        ===================================================== */

        .logo {
          display: block;

          width: 140px;
          height: 40px;

          object-fit: contain;

          flex-shrink: 0;
        }


        /* =====================================================
           NAV MENU
        ===================================================== */

        .nav-menu {
          display: flex;

          gap: 20px;

          margin-bottom: 0;
        }


        /* =====================================================
           NORMAL NAV LINKS
        ===================================================== */

        .nav-link {
          position: relative;

          display: flex;
          align-items: center;

          font-family: inherit;

          font-size: 0.82rem;

          font-weight: 600;

          text-transform: none;

          color: #000000;

          padding: 8px 5px;

          white-space: nowrap;

          text-decoration: none !important;

          transition: color 0.2s ease;
        }


        .nav-link:hover {
          color: #0d6efd;
        }


        /* =====================================================
           NAV UNDERLINE
        ===================================================== */

        .nav-link::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: 0;

          width: 0;
          height: 2px;

          background: linear-gradient(
            90deg,
            #0d6efd,
            #5aa2ff
          );

          transition: width 0.25s ease;
        }


        .nav-link:hover::after {
          width: 100%;
        }


        /* =====================================================
           ABOUT US BUTTON
        ===================================================== */

        .dropdown-toggle-custom {
          border: none;

          background: transparent;

          cursor: pointer;

          font-family: inherit;

          font-size: 0.82rem;

          font-weight: 600;

          color: #000000;

          display: flex;

          align-items: center;

          gap: 5px;

          padding: 8px 5px;

          white-space: nowrap;

          text-transform: none;

          position: relative;
        }


        .dropdown-toggle-custom:hover {
          color: #0d6efd;
        }


        /* =====================================================
           DROPDOWN ARROW
        ===================================================== */

        .dropdown-icon {
          flex-shrink: 0;

          transition: transform 0.2s ease;
        }


        .dropdown-icon.rotate {
          transform: rotate(180deg);
        }


        /* =====================================================
           DROPDOWN BOX
        ===================================================== */

        .dropdown-custom {
          position: relative;
        }


        .dropdown-menu-custom {
          position: absolute;

          top: calc(100% + 5px);

          left: 0;

          width: 220px;

          padding: 6px;

          background: #ffffff;

          border: 1px solid #e5e7eb;

          border-radius: 6px;

          box-shadow:
            0 6px 18px rgba(0, 0, 0, 0.12);

          display: flex;

          flex-direction: column;

          opacity: 0;

          visibility: hidden;

          transform: translateY(5px);

          transition:
            opacity 0.2s ease,
            transform 0.2s ease,
            visibility 0.2s ease;

          z-index: 10001;
        }


        /* =====================================================
           DESKTOP DROPDOWN
        ===================================================== */

        @media (min-width: 992px) {

          .dropdown-custom:hover
          .dropdown-menu-custom {
            opacity: 1;

            visibility: visible;

            transform: translateY(0);
          }


          .dropdown-custom:hover
          .dropdown-icon {
            transform: rotate(180deg);
          }

        }


        /* =====================================================
           CLICK DROPDOWN
        ===================================================== */

        .dropdown-active
        .dropdown-menu-custom {
          opacity: 1;

          visibility: visible;

          transform: translateY(0);
        }


        /* =====================================================
           DROPDOWN ITEMS
        ===================================================== */

        .dropdown-item-custom {
          display: block;

          width: 100%;

          padding: 10px 12px;

          margin: 0;

          color: #222222 !important;

          background: transparent;

          border-radius: 4px;

          font-family: inherit;

          font-size: 0.85rem;

          font-weight: 500;

          text-decoration: none !important;

          text-transform: none;

          line-height: 1.4;

          transition:
            background-color 0.15s ease,
            color 0.15s ease;
        }


        /* =====================================================
           DROPDOWN ITEM HOVER
        ===================================================== */

        .dropdown-item-custom:hover {
          background: #f3f6fa;

          color: #0d6efd !important;

          text-decoration: none !important;
        }


        /* =====================================================
           REMOVE DROPDOWN UNDERLINES
        ===================================================== */

        .dropdown-menu-custom
        .dropdown-item-custom::before,

        .dropdown-menu-custom
        .dropdown-item-custom::after {
          content: none !important;

          display: none !important;
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 991px) {

          .premium-nav {
            padding: 10px 0;
          }


          .navbar-collapse {
            background: #ffffff;

            padding: 15px 0;

            border-top:
              1px solid rgba(0, 0, 0, 0.05);
          }


          .nav-menu {
            flex-direction: column;

            align-items: stretch !important;

            gap: 5px;
          }


          .nav-item {
            width: 100%;
          }


          .nav-link {
            width: 100%;

            justify-content: space-between;

            padding: 12px 15px;

            font-size: 0.9rem;
          }


          /* REMOVE UNDERLINE ON MOBILE */

          .nav-link::after {
            display: none;
          }


          /* =================================================
             MOBILE DROPDOWN
          ================================================= */

          .dropdown-toggle-custom {
            width: 100%;

            justify-content: space-between;

            padding: 12px 15px;

            font-size: 0.9rem;
          }


          .dropdown-menu-custom {
            position: static;

            width: 100%;

            min-width: 100%;

            margin-top: 4px;

            padding: 5px 0;

            background: #f8fafc;

            border:
              1px solid #e5e7eb;

            border-radius: 6px;

            box-shadow: none;

            display: none;

            opacity: 1;

            visibility: visible;

            transform: none;
          }


          .dropdown-active
          .dropdown-menu-custom {
            display: flex;
          }


          .dropdown-item-custom {
            padding: 10px 18px;

            font-size: 0.85rem;
          }


          /* TOP BAR */

          .top-bar-inner {
            flex-direction: column;

            justify-content: center;

            gap: 4px;

            padding: 6px 0;
          }


          .top-bar-left {
            display: none;
          }


          .top-bar-right {
            justify-content: center;

            gap: 12px;
          }


          /* LOGO */

          .logo {
            width: 140px;

            height: 40px;
          }

        }


        /* =====================================================
           LARGE SCREENS
        ===================================================== */

        @media (min-width: 1200px) {

          .nav-menu {
            gap: 22px;
          }


          .nav-link,
          .dropdown-toggle-custom {
            font-size: 0.82rem;
          }

        }


        /* =====================================================
           EXTRA LARGE SCREENS
        ===================================================== */

        @media (min-width: 1400px) {

          .nav-menu {
            gap: 28px;
          }


          .nav-link,
          .dropdown-toggle-custom {
            font-size: 0.84rem;
          }

        }


        /* =====================================================
           REDUCE MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .premium-nav,

          .nav-link::after,

          .dropdown-menu-custom,

          .dropdown-icon,

          .dropdown-item-custom {
            transition: none !important;
          }

        }

      `}</style>
    </header>
  );
}

