import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { readToken, removeToken } from "@/lib/tokenfunc";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navHovered, setNavHovered] = useState(false);

  useEffect(() => {
    let tokenData = readToken();
    if (tokenData) {
      setUsername(tokenData.name);
    }
  }, []);

  const handleLogout = () => {
    removeToken();
    router.push("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isLoggedIn = username !== null;

  // Hover effect handler
  const handleNavHover = () => {
    setNavHovered(true);
  };

  const handleNavLeave = () => {
    setNavHovered(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-top shadow-sm ${
          navHovered ? "bg-hover" : "bg-dark"
        }`}
        style={{
          transition: "background-color 0.3s",
          backgroundColor: navHovered ? "#994636" : "transparent",
        }}
        onMouseEnter={handleNavHover}
        onMouseLeave={handleNavLeave}
      >
        <div className="container">
          <Link href="/dashboard" legacyBehavior>
            <a className="navbar-brand d-flex align-items-center">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={40}
                height={40}
                className="d-inline-block align-top rounded-circle"
              />
              <span className="ms-2 fw-bold fs-3 text-primary">Astrology</span>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav align-items-center">
              <li className="nav-item">
                <Link href="/about" legacyBehavior>
                  <a className="nav-link fw-semibold text-light">About Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contactUs" legacyBehavior>
                  <a className="nav-link fw-semibold text-light">Contact Us</a>
                </Link>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <Link href="/services" legacyBehavior>
                    <a className="nav-link fw-semibold text-light">Our Services</a>
                  </Link>
                ) : (
                  <Link href="/" legacyBehavior>
                    <a className="nav-link fw-semibold text-light">Our Services</a>
                  </Link>
                )}
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle fw-semibold text-light ${
                        dropdownOpen ? "show" : ""
                      }`}
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      aria-expanded={dropdownOpen ? "true" : "false"}
                      onClick={toggleDropdown}
                    >
                      {username}
                    </a>
                    <ul
                      className={`dropdown-menu dropdown-menu-end border-0 shadow ${
                        dropdownOpen ? "show" : ""
                      }`}
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link href="/edit-profile" legacyBehavior>
                          <a className="dropdown-item">Edit Profile</a>
                        </Link>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/yourCart" legacyBehavior>
                      <a className="nav-link fw-semibold text-light">Your Cart</a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {/* Search bar */}
            <form className="d-flex ms-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="hero-section d-flex align-items-center"
        style={{
          background: `linear-gradient(to left, #f8f9fa, lightblue)`,
          height: "90vh",
          paddingTop: "5rem",
        }}
      >
        <div className="container text-center">
          <h1 className="display-3 fw-bold text-primary mb-4">
            Discover Your Cosmic Journey
          </h1>
          <p className="lead text-dark mb-5">
            Unlock the secrets of the universe with our personalized astrological services.
          </p>
          {isLoggedIn ? (
            <Link href="/services" legacyBehavior>
              <a className="btn btn-lg btn-primary px-5 py-3 shadow-sm rounded-pill">
                Explore Services
              </a>
            </Link>
          ) : (
            <Link href="/" legacyBehavior>
              <a className="btn btn-lg btn-primary px-5 py-3 shadow-sm rounded-pill">
                Join Us Today
              </a>
            </Link>
          )}
        </div>
      </section>

      {/* Horoscope Section */}
      <section className="py-5 text-center bg-light">
        <div className="container">
          <h2 className="fw-bold mb-4">Check Out Our Latest Horoscope</h2>
          <div className="d-flex justify-content-center flex-wrap gap-4">
            {[
              { name: "Aries", icon: "\u2648" },
              { name: "Taurus", icon: "\u2649" },
              { name: "Gemini", icon: "\u264A" },
              { name: "Cancer", icon: "\u264B" },
              { name: "Leo", icon: "\u264C" },
              { name: "Virgo", icon: "\u264D" },
              { name: "Libra", icon: "\u264E" },
              { name: "Scorpio", icon: "\u264F" },
              { name: "Sagittarius", icon: "\u2650" },
              { name: "Capricorn", icon: "\u2651" },
              { name: "Aquarius", icon: "\u2652" },
              { name: "Pisces", icon: "\u2653" },
            ].map((sign, index) => (
              <div key={index} className="text-center">
                <div style={{ fontSize: "70px" }} className="mb-2">
                  {sign.icon}
                </div>
                <p className="fw-bold">{sign.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold text-dark">About Astrology World</h2>
          <p className="lead mb-4 text-muted">
            At Astrology World, we help you decode the mysteries of your life
            and future with personalized readings.
          </p>
          <Image
            src="/about.png"
            alt="About Us"
            width={700}
            height={400}
            className="rounded-3 shadow mb-4"
          />
          <br />
          <Link href="/about" legacyBehavior>
            <a className="btn btn-outline-dark btn-lg px-5 py-3 rounded-pill">
              Learn More
            </a>
          </Link>
        </div>
      </section>

      {/* Astrology Insights Section */}
      <section className="py-5 bg-gradient text-black text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold">Astrology Insights</h2>
          <p className="lead mb-5">
            Dive into the cosmic world and discover how the stars influence your
            life and personality.
          </p>
          <Link href="/services" legacyBehavior>
            <a className="btn btn-lg btn-light px-5 py-3 shadow-sm rounded-pill text-dark">
              Explore Services
            </a>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-4 fw-bold text-dark">Get in Touch</h2>
          <p className="lead mb-5 text-muted">
            Have any questions or queries? Feel free to reach out to us.
          </p>
          <Link href="/contactUs" legacyBehavior>
            <a className="btn btn-outline-dark btn-lg px-5 py-3 rounded-pill">
              Contact Us
            </a>
          </Link>
          <br />
          <Image
            src="/contact.png"
            alt="Contact Us"
            width={300}
            height={90}
            className="rounded-3 shadow mb-4"
          />
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <div className="container">
          <p className="mb-0">&copy; 2024 Astrology World. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
