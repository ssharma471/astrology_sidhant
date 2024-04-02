import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TarotCardReadings = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" href="/dashboard">
            <Image src="/logo.jpeg" alt="Logo" width={30} height={30} className="d-inline-block align-top" />
            <span className="ms-2">Astrology</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" href="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contactUs">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/services">Our Services</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <div className="card">
          <div className="row g-0">
            <div className="col-md-3">
              <Image src="/Tarot Card Readings.jpeg" alt="Tarot Card Readings" width={300} height={400} className="card-img" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Tarot Card Readings</h5>
                <p className="card-text">Tarot Card Readings provide insight into your past, present, and future. Our experienced readers interpret the cards to uncover hidden truths and guide you on your spiritual journey.</p>
                <p className="card-text">Discover the dynamics of your relationships with Astrological Compatibility Analysis. Our expert astrologers analyze the alignment of celestial bodies to provide insights into the compatibility between you and your partner.</p>
                <p className="card-text">Uncover potential challenges and strengths in your relationship, and gain a deeper understanding of each other&apos;s personalities and needs.</p>
                <p className="card-text">Whether you&apos;re seeking clarity on love, career, or personal growth, our Tarot Card Readings offer valuable perspectives and empower you to make informed decisions.</p>
                <p className="card-text">Whether you&apos;re seeking clarity on love, career, or personal growth, our Tarot Card Readings offer valuable perspectives and empower you to make informed decisions.</p>

                <Link href="/service/tarot-card-readings-details">
                  <legacyBehavior className="btn btn-primary me-2">Learn More</legacyBehavior>
                </Link>
                <Link href="/service/tarot-card-readings-booking">
                  <legacyBehavior className="btn btn-secondary">Book Now</legacyBehavior>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-img {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
        .card-body {
          padding: 1.25rem;
        }
        .card-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 0.75rem;
        }
        .card-text {
          font-size: 1rem;
          color: #555;
          margin-bottom: 0.75rem;
        }
        .btn-primary {
          background-color: #007bff;
          border-color: #007bff;
        }
        .btn-primary:hover {
          background-color: #0056b3;
          border-color: #0056b3;
        }
        .btn-secondary {
          background-color: #6c757d;
          border-color: #6c757d;
        }
        .btn-secondary:hover {
          background-color: #5a6268;
          border-color: #5a6268;
        }
      `}</style>
    </div>
  );
};

export default TarotCardReadings;
