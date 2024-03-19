import React from 'react';

const About = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
    <Link className="navbar-brand" href="/dashboard">
        <img src="/logo.jpeg" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
        Astrology
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" href="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contactUs">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/services">Our Services</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
    <div className="container">
      <h2>About Us</h2>
      <p>Welcome to our Astrology Portal. We are dedicated to providing you with accurate astrological insights and guidance to navigate through life's challenges.</p>
      <p>Our team of experienced astrologers combines ancient wisdom with modern techniques to offer personalized readings and forecasts tailored to your needs.</p>
      <p>Whether you're seeking answers about love, career, or personal growth, our astrologers are here to help you unlock the secrets of the cosmos.</p>
      <p>Explore our site to discover horoscopes, compatibility reports, and insightful articles on astrology. Let the stars guide you on your journey to self-discovery and fulfillment.</p>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f1f1f1;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;
        }
        p {
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 15px;
          color: #666;
        }
      `}</style>
    </div>
    </div>
  );
};

export default About;
