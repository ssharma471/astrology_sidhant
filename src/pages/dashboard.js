import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { readToken , removeToken} from "@/lib/tokenfunc"; 
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Read user information from token when the component mounts
    let tokenData = readToken();
    if (tokenData) {
      setUsername(tokenData.name);
    }
  }, []);

  const handleLogout = () => {
    // Remove token from localStorage
    removeToken();
    router.push("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const isLoggedIn = username !== null;

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link href="/dashboard" legacyBehavior>
            <a className="navbar-brand">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={30}
                height={30}
                className="d-inline-block align-top"
              />
              <span className="ms-2">Astrology</span>
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
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link href="/about" legacyBehavior>
                  <a className="nav-link">About Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contactUs" legacyBehavior>
                  <a className="nav-link">Contact Us</a>
                </Link>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <Link href="/services" legacyBehavior>
                    <a className="nav-link">Our Services</a>
                  </Link>
                ) : (
                  <Link href="/" legacyBehavior>
                    <a className="nav-link">Our Services</a>
                  </Link>
                )}
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item dropdown" onClick={toggleDropdown}>
                    <a
                      className={`nav-link dropdown-toggle ${
                        dropdownOpen ? "show" : ""
                      }`}
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      aria-expanded={dropdownOpen ? "true" : "false"}
                    >
                      {username}
                    </a>
                    <ul
                      className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}
                      aria-labelledby="navbarDropdown"
                    >
                      <li>
                        <Link href="/edit-profile" legacyBehavior>
                          <a className="dropdown-item">Edit Profile</a>
                        </Link>
                      </li>
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                  {/* Only show if logged in */}
                  <li className="nav-item">
                    <Link href="/yourCart" legacyBehavior>
                      <a className="nav-link">Your Cart</a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-5">
        {/* Hero Section */}
        <div className="jumbotron bg-light text-dark">
          <div className="container">
            <h1 className="display-4">Welcome to Astrology World!</h1>
            <p className="lead">
              Unlock the mysteries of the universe with our astrology services.
            </p>
            <hr className="my-4" />
            <p>
              Discover your destiny, understand your cosmic influences, and find
              guidance in the stars.
            </p>
            <p>
              Get personalized readings, predictions, and consultations from our
              expert astrologers.
            </p>
            {isLoggedIn ? (
              <Link href="/services" legacyBehavior>
                <a className="btn btn-primary btn-lg">
                  Explore Our Services
                </a>
              </Link>
            ) : (
              <Link href="/" legacyBehavior>
                <a className="btn btn-primary btn-lg">
                  Explore Our Services
                </a>
              </Link>
            )}
          </div>
        </div>

        {/* About Section */}
        <section className="py-5">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>
                Learn more about our mission, vision, and team behind Astrology
                World.
              </p>
              <Link href="/about" legacyBehavior>
                <a className="btn btn-outline-primary">Read More</a>
              </Link>
            </div>
            <div className="col-md-6">
              <Image
                src="/about.png"
                alt="About Us"
                width={500}
                height={300}
              />
            </div>
          </div>
        </section>

        {/* Astrology Section */}
        <section className="py-5 bg-secondary text-white">
          <div className="container">
            <h2>Astrology Insights</h2>
            <p>
              Unlock the secrets of the stars and explore your astrological
              destiny.
            </p>
            <p>
              Discover how planetary alignments influence your life and
              relationships.
            </p>
            <p>
              Get insights into your zodiac signs personality traits and
              compatibility.
            </p>
            {isLoggedIn ? (
              <Link href="/edit-profile" legacyBehavior>
                <a className="btn btn-primary">Edit Profile</a>
              </Link>
            ) : (
              <Link href="/" legacyBehavior>
                <a className="btn btn-primary">Edit Profile</a>
              </Link>
            )}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src="/contact.png"
                alt="Contact Us"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <h2>Contact Us</h2>
              <p>
                Have any questions or queries? Feel free to reach out to us.
              </p>
              <Link href="/contactUs" legacyBehavior>
                <a className="btn btn-outline-primary">Contact Now</a>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2024 Astrology World. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;
