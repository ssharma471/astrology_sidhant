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

  /* // Hover effect handler
  const handleNavHover = () => {
    setNavHovered(true);
  }; */

  const handleNavLeave = () => {
    setNavHovered(false);
  };

  return (
    <div>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg fixed-top shadow-sm ${navHovered ? "bg-hover" : "bg-primary"
          }`}
        style={{
          transition: "background-color 0.3s",
          backgroundColor: navHovered ? "#994636" : "transparent",
        }}
        /* onMouseEnter={handleNavHover}
        onMouseLeave={handleNavLeave} */
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
              <span className="ms-2 fw-bold fs-3 text-black">Astrology</span>
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

      <section
        className="hero-section d-flex align-items-center justify-content-center text-center"
        style={{
          backgroundImage: `url('/wall.jpg')`, // Assuming your image is stored in the public folder
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          position: "relative",
          paddingTop: "5rem",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)", // Dark overlay to make text more readable
            zIndex: 1,
          }}
        ></div>

        <div style={{ zIndex: 2 }}> {/* Ensure content is above the overlay */}
          <h1
            className="display-1"
            style={{
              color: "#fff",
              textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)", // Subtle text shadow for contrast
              fontWeight: "bold",
              marginBottom: "20px",
            }}
          >
            Discover Your Cosmic Journey
          </h1>
          <p
            className="lead"
            style={{
              color: "rgba(255, 255, 255, 0.85)", // Lighter color for subtext
              maxWidth: "600px",
              margin: "0 auto",
              fontSize: "1.25rem",
              textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
              marginBottom: "40px",
            }}
          >
            Unlock the secrets of the universe with our personalized astrological services.
          </p>

          <div className="d-flex justify-content-center">
            <Link href="/services" legacyBehavior>
              <a
                className="btn btn-lg btn-primary mx-2"
                style={{
                  padding: "0.75rem 2rem",
                  fontSize: "1.25rem",
                  borderRadius: "50px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow for modern effect
                }}
              >
                Explore Services
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a
                className="btn btn-lg btn-outline-light mx-2"
                style={{
                  padding: "0.75rem 2rem",
                  fontSize: "1.25rem",
                  borderRadius: "50px",
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Soft shadow for modern effect
                  border: "2px solid #fff", // Add border for the outline button
                }}
              >
                Join Us Today
              </a>
            </Link>

          </div>
        </div>
      </section>

     {/* Horoscope Section */}
<section className="py-5 text-center" style={{ background: "linear-gradient(to bottom, #f3e7e9, #e3eeff)" }}>
  <div className="container">
    <h2 className="fw-bold mb-5" style={{ color: "#2c3e50" }}>Check Out Our Latest Horoscope</h2>
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
        <div key={index} className="text-center" style={{ width: "80px", transition: "transform 0.3s", cursor: "pointer" }} 
             onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
             onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}>
          <div style={{ fontSize: "48px", color: "#8e44ad", filter: "drop-shadow(0 4px 4px rgba(0, 0, 0, 0.2))" }} className="mb-2">
            {sign.icon}
          </div>
          <p className="fw-bold" style={{ fontSize: "14px", marginTop: "8px" }}>{sign.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* About Astrology Section */}
<section className="py-5 text-center" style={{ backgroundColor: "#ffffff" }}>
  <div className="container">
    <h2 className="fw-bold mb-4" style={{ color: "#2c3e50" }}>About Astrology World</h2>
    <p className="lead text-muted mb-4" style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
      At Astrology World, we help you decode the mysteries of your life and future with personalized readings.
    </p>
    <Link href="/about" legacyBehavior>
      <a className="btn btn-dark btn-lg px-5 py-3 rounded-pill shadow-lg" 
         style={{
           background: "#8e44ad", 
           border: "none", 
           color: "#fff", 
           boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.1)", 
           transition: "background 0.3s, box-shadow 0.3s",
         }}
         onMouseEnter={(e) => e.currentTarget.style.background = "#722f98"}
         onMouseLeave={(e) => e.currentTarget.style.background = "#8e44ad"}>
        Learn More
      </a>
    </Link>
  </div>
</section>

{/* Astrology Insights Section */}
<section className="py-5 text-center" style={{ background: "linear-gradient(to right, #6a11cb, #2575fc)" }}>
  <div className="container">
    <h2 className="fw-bold mb-4 text-white">Astrology Insights</h2>
    <p className="lead mb-5 text-white" style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
      Dive into the cosmic world and discover how the stars influence your life and personality.
    </p>
    <Link href="/services" legacyBehavior>
      <a className="btn btn-light btn-lg px-5 py-3 rounded-pill shadow-lg" 
         style={{ 
           background: "#fff", 
           color: "#2575fc", 
           boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", 
           transition: "color 0.3s, box-shadow 0.3s",
         }}
         onMouseEnter={(e) => e.currentTarget.style.color = "#6a11cb"}
         onMouseLeave={(e) => e.currentTarget.style.color = "#2575fc"}>
        Explore Services
      </a>
    </Link>
  </div>
</section>

{/* Get In Touch Section */}
<section className="py-5 text-center" style={{ backgroundColor: "#f8f9fa" }}>
  <div className="container">
    <h2 className="fw-bold mb-4" style={{ color: "#2c3e50" }}>Get in Touch</h2>
    <p className="lead text-muted mb-5" style={{ maxWidth: "700px", margin: "0 auto", lineHeight: "1.6" }}>
      Have any questions or queries? Feel free to reach out to us.
    </p>
    <Link href="/contactUs" legacyBehavior>
      <a className="btn btn-outline-dark btn-lg px-5 py-3 rounded-pill shadow-sm">Contact Us</a>
    </Link>
    <div className="mt-5 d-flex justify-content-center">
      <div className="d-flex justify-content-between" style={{ maxWidth: "300px", gap: "20px" }}>
        <Image src="/icon-facebook.png" alt="Facebook" width={40} height={40} />
        <Image src="/icon-twitter.png" alt="Twitter" width={40} height={40} />
        <Image src="/icon-instagram.png" alt="Instagram" width={40} height={40} />
        <Image src="/icon-linkedin.png" alt="LinkedIn" width={40} height={40} />
      </div>
    </div>
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
