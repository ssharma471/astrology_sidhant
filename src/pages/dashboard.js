import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../public/logo.jpeg'; // Import your logo image

const Dashboard = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/dashboard">
            <img src="/logo.jpeg" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
            Astrology
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contactUs">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/services">Our Services</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container">
        {/* Hero Section */}
        <div className="jumbotron">
          <h1 className="display-4">Welcome to Astrology World!</h1>
          <p className="lead">Explore the mysteries of the universe with our astrology services.</p>
          <hr className="my-4" />
          <p>Get personalized readings, predictions, and consultations from our expert astrologers.</p>
          <a className="btn btn-primary btn-lg" href="/services" role="button">Explore Services</a>
        </div>

        {/* About Section */}
        <section className="py-5">
          <div className="row">
            <div className="col-md-6">
              <h2>About Us</h2>
              <p>Learn more about our mission, vision, and team behind Astrology World.</p>
              <a className="btn btn-outline-primary" href="/about" role="button">Read More</a>
            </div>
            <div className="col-md-6">
              {/* <img src="/about-image.jpg" alt="About Us" className="img-fluid rounded" /> */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-5">
          <div className="row">
            <div className="col-md-6">
              {/* <img src="/contact-image.jpg" alt="Contact Us" className="img-fluid rounded" /> */}
            </div>
            <div className="col-md-6">
              <h2>Contact Us</h2>
              <p>Have any questions or queries? Feel free to reach out to us.</p>
              <a className="btn btn-outline-primary" href="/contactUs" role="button">Contact Now</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
