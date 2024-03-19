import React from 'react';

const ContactUs = () => {
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
      <h2>Contact Us</h2>
      <p>Feel free to reach out to us with any questions, feedback, or inquiries. Our team is here to assist you!</p>
      <div className="contact-details">
        <p><strong>Email:</strong> contact@example.com</p>
        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
        <p><strong>Address:</strong> 123 Astrology Street, Astro City, Universe</p>
      </div>

      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f7f7f7;
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
        .contact-details {
          margin-top: 20px;
        }
        .contact-details p {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
    </div>

  );
};

export default ContactUs;
