import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image
import styled from 'styled-components';


const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamMember = styled.div`
  margin: 20px;
  text-align: center;
`;

const MemberImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const MemberName = styled.h3`
  font-size: 20px;
  color: #333;
`;

const MemberPosition = styled.p`
  font-size: 16px;
  color: #666;
`;


const About = () => {
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
            <Link className="nav-link" href="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/contactUs">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/services">Our Services</Link>
          </li>
          <li className="nav-item">
                <Link href="/yourCart" legacyBehavior>
                  <a className="nav-link">View Cart</a>
                </Link>
              </li>
        </ul>
      </div>
    </div>

  </nav>
   
    <div className="container">
      <h2>About Us</h2>
      <p>Welcome to our Astrology Portal. We are dedicated to providing you with accurate astrological insights and guidance to navigate through life&apos;s challenges.</p>
      <p>Our team of experienced astrologers combines ancient wisdom with modern techniques to offer personalized readings and forecasts tailored to your needs.</p>
      <p>Whether you&apos;re seeking answers about love, career, or personal growth, our astrologers are here to help you unlock the secrets of the cosmos.</p>
      <p>Explore our site to discover horoscopes, compatibility reports, and insightful articles on astrology. Let the stars guide you on your journey to self-discovery and fulfillment.</p>
      <TeamContainer>
        <TeamMember>
        <Image src="/" alt="Logo" width="100" height="150" className="d-inline-block align-top" />
          <MemberName>Sidhant Sharma</MemberName>
          <MemberPosition>Frontend Developer</MemberPosition>
        </TeamMember>
        <TeamMember>
        <Image src="/" alt="Logo" width="100" height="150" className="d-inline-block align-top" />
          <MemberName>Meetsimar Kaur</MemberName>
          <MemberPosition>Database Administer</MemberPosition>
        </TeamMember>
        <TeamMember>
        <Image src="/" alt="Logo" width="100" height="150" className="d-inline-block align-top" />
          <MemberName>Samarth Modi</MemberName>
          <MemberPosition>Backend Developer</MemberPosition>
        </TeamMember>
      </TeamContainer>
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
     {/* Footer */}
     <footer className="bg-dark text-white text-center py-4" style={{marginTop:180}}>
        <p>&copy; 2024 Astrology World. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
