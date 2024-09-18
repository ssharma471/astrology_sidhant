import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { readToken, removeToken } from "@/lib/tokenfunc";
import { useRouter } from "next/router";
import Script from 'next/script'; // Import the Script component to handle external scripts properly


const ContactUs = () => {
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

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

  return (
    <>
<Script
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"
        strategy="afterInteractive"
      />
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
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
                  <a className="nav-link fw-semibold text-dark">About Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contactUs" legacyBehavior>
                  <a className="nav-link fw-semibold text-dark">Contact Us</a>
                </Link>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <Link href="/services" legacyBehavior>
                    <a className="nav-link fw-semibold text-dark">Our Services</a>
                  </Link>
                ) : (
                  <Link href="/" legacyBehavior>
                    <a className="nav-link fw-semibold text-dark">Our Services</a>
                  </Link>
                )}
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle fw-semibold text-dark ${dropdownOpen ? "show" : ""
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
                        <button
                          className="dropdown-item"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <Link href="/yourCart" legacyBehavior>
                      <a className="nav-link fw-semibold text-dark">Your Cart</a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <div className="mb-5">
            <br></br>            <br></br>

            <h2 className="fw-bold text-dark mb-3">Get in Touch with Us</h2>
            <p className="lead text-muted mb-4">
              Have questions or need assistance? We’re here to help you. Reach out to us using the form below or contact us directly.
            </p>
          </div>

          {/* Contact Form */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-8">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Full Name</label>
                    <input type="text" id="name" className="form-control" placeholder="John Doe" />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" id="email" className="form-control" placeholder="john.doe@example.com" />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" className="form-control" rows="4" placeholder="Your message here..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg px-4 py-2 rounded-pill">Send Message</button>
              </form>
            </div>
          </div>

          {/* Contact Details */}
          <div className="row justify-content-center mb-5">
            <div className="col-md-4">
              <h4 className="fw-bold text-dark">Contact Information</h4>
              <ul className="list-unstyled text-start">
                <li className="mb-2">
                  <i className="bi bi-envelope-fill me-2"></i>
                  <a href="mailto:contact@example.com" className="text-dark">contact@example.com</a>
                </li>
                <li className="mb-2">
                  <i className="bi bi-telephone-fill me-2"></i>
                  <a href="tel:+1234567890" className="text-dark">+1 (234) 567-890</a>
                </li>
                <li>
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  1234 Astrological Ave, Suite 567, Zodiac City, CA 12345
                </li>
              </ul>
            </div>

            {/* Map Integration */}
            <div className="col-md-8 mt-4" style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px' }}>
            <h4 className="fw-bold text-dark" >Our Location</h4>
            <div className="embed-responsive embed-responsive-16by9" style={{ border: '5px solid lightblue', borderRadius: '13px' }}>
            <iframe
                  className="embed-responsive-item"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.2468169073134!2d-79.34854130452425!3d43.79645236883428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b35d8f24ae067%3A0x7d6e51d1d024d8b2!2sSeneca%20Polytechnic%20College%20Newnham%20Residence!5e0!3m2!1sen!2sus!4v1635412312625!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 100 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
              </div>
            </div>
          </div>
          

             {/* Social Media Links */}
             <div className="mb-5">
            <h4 className="fw-bold text-dark">Follow Us On</h4>
            <br></br>
            <div className="d-flex justify-content-center gap-5">
              <a href="https://facebook.com" className="text-dark" aria-label="Facebook">
                <i className="fa fa-facebook fa-2x"></i>
              </a>
              <a href="https://twitter.com" className="text-dark" aria-label="Twitter">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
              <a href="https://instagram.com" className="text-dark" aria-label="Instagram">
                <i className="fa fa-instagram fa-2x"></i>
              </a>
              <a href="https://linkedin.com" className="text-dark" aria-label="LinkedIn">
                <i className="fa fa-linkedin fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4">
        <p>&copy; 2024 Astrology World. All Rights Reserved.</p>
      </footer>
    </>
  );
};

export default ContactUs;
