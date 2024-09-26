import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import YourCart,{ useCart } from './yourCart'; // Import the custom hook
import { useRouter } from "next/router";
import { readToken, removeToken } from "@/lib/tokenfunc";

const Services = () => {
  const astrologyServices = [
    { name: "Natal Chart Readings", price: "$50", image: "/Natal Chart Readings.jpeg"  },
    { name: "Tarot Card Readings", price: "$30", image: "/Tarot Card Readings.jpeg" },
    { name: "Horoscope Predictions", price: "$40", image: "/Horoscope Predictions.jpg" },
    { name: "Astrological Compatibility Analysis", price: "$60", image: "/Astrological Compatibility Analysis.jpeg" },
    { name: "Past Life Regression", price: "$70", image: "/Past Life Regression.jpeg" },
    { name: "Dream Interpretation", price: "$45", image: "/Dream Interpretation.png" },
    { name: "Chakra Balancing", price: "$55", image: "/Chakra Balancing.jpeg" },
    { name: "Crystal Healing", price: "$75", image: "/Crystal Healing.jpeg" },
    { name: "Numerology Consultations", price: "$65", image: "/Numerology Consultations.png" },
    { name: "Astrological Remedies", price: "$80", image: "/Astrological Remedies.jpeg" }
  ];
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

  const { addToCart } = useCart(); // Use the addToCart function from the custom hook

  return (
    <div>
      {/* Navbar */}
      <nav
  className={`navbar navbar-expand-lg fixed-top shadow-sm ${navHovered ? "bg-hover" : "bg-dark"}`}
  style={{
    transition: "background-color 0.3s",
    backgroundColor: navHovered ? "#333" : "transparent", // Changed the hover color to dark grey
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
                      className={`nav-link dropdown-toggle fw-semibold text-light ${dropdownOpen ? "show" : ""
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
                      className={`dropdown-menu dropdown-menu-end border-0 shadow ${dropdownOpen ? "show" : ""
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
      <div className="container">
        <h2 className="page-title">Our Astrology Services</h2>
        <div className="services-grid">
          {astrologyServices.map((service, index) => (
            <div className="service-item" key={index}>
              <Link href={`/service/${encodeURIComponent(service.name.replace(/\s/g, ''))}`} legacyBehavior>
                <a>
                  <Image src={service.image} alt={service.name} className="service-image" width={200} height={200} />
                  <h3 className="service-name">{service.name}</h3>
                  <p className="service-price">{service.price}</p>
                </a>
              </Link>
              {/* Add to Cart button */}
              <button onClick={() => addToCart(service)}>Add to Favourites</button>
            </div>
          ))}
        </div>
        {/* Render the YourCart component */}
        <YourCart />
      </div>
      {/* Styles */}
      <style jsx>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          grid-gap: 20px;
        }
        .service-item {
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          padding: 20px;
          text-align: center;
          display: block;
          text-decoration: none;
        }
        .service-item:hover {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        }
        .service-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
        .service-name {
          font-size: 18px;
          margin-top: 15px;
        }
        .service-price {
          font-size: 16px;
          color: #888;
          margin-top: 10px;
        }
      `}</style>
      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2024 Astrology World. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Services;
