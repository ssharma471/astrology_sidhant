import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image

const Services = () => {
  // Array of random astrology services
  const astrologyServices = [
    { name: "Natal Chart Readings", price: "$50", image: "/Natal Chart Readings.jpeg"  },
    { name: "Tarot Card Readings", price: "$30", image: "Tarot Card Readings.jpeg" },
    { name: "Horoscope Predictions", price: "$40", image: "Horoscope Predictions.jpg" },
    { name: "Astrological Compatibility Analysis", price: "$60", image: "Astrological Compatibility Analysis.jpeg" },
    { name: "Past Life Regression", price: "$70", image: "Past Life Regression.jpeg" },
    { name: "Dream Interpretation", price: "$45", image: "Dream Interpretation.png" },
    { name: "Chakra Balancing", price: "$55", image: "Chakra Balancing.jpeg" },
    { name: "Crystal Healing", price: "$75", image: "Crystal Healing.jpeg" },
    { name: "Numerology Consultations", price: "$65", image: "Numerology Consultations.png" },
    { name: "Astrological Remedies", price: "$80", image: "Astrological Remedies.jpeg" }
  ];

  return (
    <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
    <Link className="navbar-brand" href="/dashboard">
        <Image src="/logo.jpeg" alt="Logo" width="30" height="30" className="d-inline-block align-top" />
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
        <h2 className="page-title">Our Astrology Services</h2>
        <div className="services-grid">
          {astrologyServices.map((service, index) => (
            <div key={index} className="service-item">
              <img src={service.image} alt={service.name} className="service-image" />
              <h3 className="service-name">{service.name}</h3>
              <p className="service-price">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .page-title {
          font-size: 32px;
          text-align: center;
          margin-bottom: 40px;
        }
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
    </div>
  );
};

export default Services;
