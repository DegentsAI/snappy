"use client";
import React, { useEffect, useRef, useState } from "react";

import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderOne = () => {
  const [scroll, setScroll] = useState(false);
  const location = usePathname();
  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else if (window.pageYOffset > 150) {
        setScroll(true);
      }
      return () => (window.onscroll = null);
    };
  }, []);

  const bodyOverlayRef = useRef(null);
  const searchPopupRef = useRef(null);
  const sidebarMenuRef = useRef(null);

  useEffect(() => {
    const handleOverlayClick = (e) => {
      e.preventDefault();
      bodyOverlayRef.current.classList.remove("active");
      searchPopupRef.current.classList.remove("active");
      sidebarMenuRef.current.classList.remove("active");
    };

    // Handle search button click
    const handleSearchBarClick = (e) => {
      e.preventDefault();
      searchPopupRef.current.classList.add("active");
      bodyOverlayRef.current.classList.add("active");
    };

    // Attach event listeners
    const bodyOverlayElement = bodyOverlayRef.current;
    const searchBarButton = document.querySelector(".search-bar-btn");

    if (bodyOverlayElement) {
      bodyOverlayElement.addEventListener("click", handleOverlayClick);
    }

    if (searchBarButton) {
      searchBarButton.addEventListener("click", handleSearchBarClick);
    }

    // Cleanup event listeners on unmount
    return () => {
      if (bodyOverlayElement) {
        bodyOverlayElement.removeEventListener("click", handleOverlayClick);
      }
      if (searchBarButton) {
        searchBarButton.removeEventListener("click", handleSearchBarClick);
      }
    };
  }, []);

  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Toggle sub-menu
  const handleSubMenuToggle = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const [hash, setHash] = useState("");

  useEffect(() => {
    // Set initial hash
    setHash(window.location.hash);

    const handleHashChange = () => {
      setHash(window.location.hash);
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      {/* search popup start*/}
      <div
        className="td-search-popup"
        id="td-search-popup"
        ref={searchPopupRef}
      >
        <form action="index" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <i className="fa fa-search" />
          </button>
        </form>
      </div>
      {/* search popup end*/}
      <div className="body-overlay" id="body-overlay" ref={bodyOverlayRef} />
      {/* navbar start */}
      <nav
        className={`navbar main navbar-area navbar-area-1 navbar-border navbar-expand-lg ${
          scroll ? "sticky-active" : ""
        }`}
      >
        <div className="container nav-container px-lg-0">
          <div className="responsive-mobile-menu">
            <button
              className="menu toggle-btn d-block d-lg-none"
              data-target="#xdyat"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <Link href="/">
              <img src="assets/img/logo.png" alt="img" />
            </Link>
          </div>
          <div className="collapse navbar-collapse" id="xdyat_main_menu">
            <ul className="navbar-nav menu-open ps-lg-5 pe-xl-4 text-end ">
              <li>
                <Link className={location === "/" ? "active" : ""} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className={hash === "#about" ? "active" : ""}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#why" className={hash === "#why" ? "active" : ""}>
                  Why
                </Link>
              </li>
              <li>
                <Link href="#how" className={hash === "#how" ? "active" : ""}>
                  How
                </Link>
              </li>
              <li>
                <Link className={hash === "#faq" ? "active" : ""} href="#faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop d-lg-inline-flex align-item-center">
            <Link className="btn btn-main style-small" href="#">
              <span>
                <span>
                  <img src="assets/img/btn-arrow.png" alt="img" />~
                </span>
                <span>connect</span>
              </span>
            </Link>
          </div>
        </div>
      </nav>
      {/* navbar end */}
      {/* off canvas */}
      <div
        className="offcanvas offcanvas-menu-wrap offcanvas-end"
        tabIndex={-1}
        id="offcanvasright"
        ref={sidebarMenuRef}
      >
        <div className="offcanvas-menu-inner">
          <button
            type="button"
            className="offcanvas-icon"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
          </button>
          <div className="sidebar-inner">
            <div className="thumb">
              <img src="assets/img/logo.png" alt="logo" />
            </div>
            <p>
              we understand better that enim ad minim veniam, consectetur
              adipiscing enim ad minim elit,
            </p>
            <p>
              we understand better that enim ad minim veniam, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="sidebar-address">
              <h4 className="mb-3">contact us</h4>
              <ul>
                <li>
                  <i className="fa fa-map-marker-alt" />
                  lavaca street, suite 2000
                </li>
                <li>
                  <i className="fa fa-envelope" />
                  email@evha.com
                </li>
                <li>
                  <i className="fa fa-phone" />
                  (+880) 172570051
                </li>
              </ul>
            </div>
            <ul className="social-media social-media-light">
              <li>
                <Link href="#">
                  <i className="fab fa-facebook-f" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fab fa-pinterest" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* off canvas end */}

      {/* Mobile Menu */}
      <nav
        className={`navbar mobile navbar-area navbar-area-1 navbar-border navbar-expand-lg ${
          scroll ? "sticky-active" : ""
        }`}
      >
        <div className="container nav-container px-lg-0">
          {/* Mobile Menu Toggle Button */}
          <div className="responsive-mobile-menu">
            <button
              className={`menu toggle-btn d-block d-lg-none ${
                isMobileMenuOpen ? "open" : ""
              }`}
              onClick={handleMobileMenuToggle}
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <span className="icon-left"></span>
              <span className="icon-right"></span>
            </button>
          </div>

          {/* Logo */}
          <div className="logo">
            <Link href="/">
              <img src="assets/img/logo.png" alt="Logo" />
            </Link>
          </div>

          {/* Navbar Links */}
          <div
            className={`collapse navbar-collapse ${
              isMobileMenuOpen ? "sopen" : ""
            }`}
            id="xdyat_main_menu"
          >
            <ul className="navbar-nav menu-open ps-lg-5 pe-xl-4 text-end ">
              <li>
                <Link
                  className={location === "/contact" ? "active" : ""}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className={location === "#about" ? "active" : ""}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#why"
                  className={location === "#why" ? "active" : ""}
                >
                  Why
                </Link>
              </li>
              <li>
                <Link
                  href="#how"
                  className={location === "#how" ? "active" : ""}
                >
                  How
                </Link>
              </li>
              <li>
                <Link
                  className={location === "#faq" ? "active" : ""}
                  href="#faq"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Part of Navbar */}
          <div className="nav-right-part nav-right-part-desktop d-lg-inline-flex align-item-center">
            <div className="header-search search-bar-btn d-inline-block me-3">
              <button>
                <svg
                  width="21"
                  height="21"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8.5" cy="8.5" r="8" stroke="none" />
                  <line
                    x1="13"
                    y1="13"
                    x2="19"
                    y2="19"
                    strokeWidth="2"
                    stroke="white"
                  />
                </svg>
              </button>
            </div>

            <Link className="header-cart" href="/cart">
              <svg
                width="24"
                height="24"
                fill="#25C6DA"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="20" r="2" />
                <circle cx="18" cy="20" r="2" />
                <rect x="2" y="2" width="20" height="3" />
                <line x1="3" y1="6" x2="15" y2="15" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderOne;
