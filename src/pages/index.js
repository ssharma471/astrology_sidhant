import React from 'react';
import Image from "next/image";

const WelcomePage = () => {
  return (
    <div style={styles.container}>
      {/* Navbar */}
      <header style={styles.navbar}>
      <a className="navbar-brand">
              <Image
                src="/logo.jpeg"
                alt="Logo"
                width={40}
                height={40}
                className="d-inline-block align-top rounded-circle"
              />
              <span className="ms-1 fw-bold fs-3 text-primary">Astrology</span>
            </a>
        
        <nav style={styles.navLinks}>
          <a href="/dashboard" style={styles.navLink}>Home</a>
          {/* <a href="#" style={styles.navLink}>About</a> */}
          {/* <a href="#" style={styles.navLink}>Services</a> */}
          <a href="/contactUs" style={styles.navLink}>Contact</a>
          <a href="/login" style={styles.signUpButton}>Login</a>
          <a href="/register" style={styles.signUpButton}>Sign Up</a>
        </nav>
      </header>
      
      {/* Welcome Section */}
      <section style={styles.welcomeSection}>
        <div style={styles.textContent}>
          <h1 style={styles.heading}>WELCOME</h1>
          <h2 style={styles.subHeading}>To Astrology</h2>
          <p style={styles.description}>
          Your Gateway to the Stars!
          
          <br></br>
          Explore the universe within you through the ancient art of astrology. Whether youre seeking guidance, insight, or a deeper understanding of how celestial forces shape your personality and life, youre in the right place.
          <br></br>          <br></br>


At astrology.ca, we believe that the stars and planets influence not only our destinies but also our day-to-day experiences. Here, youll find personalized horoscopes, in-depth readings, and astrological insights tailored to help you navigate lifes journey with confidence.
<br></br>          <br></br>


Unlock the secrets of your zodiac sign, discover how planetary transits affect your emotions and decisions, and dive into the fascinating world of astrology—where the answers to lifes biggest questions are written in the stars.

                    </p>
          <button style={styles.continueButton}><a style={styles.hreff} href='/dashboard'>Continue</a></button>
        </div>

        {/* Illustration */}
        <div style={styles.imageContainer}>
          <img src="/astro2.png" alt="Welcome Illustration" style={styles.image} />
        </div>
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#f9f9f9',
    height: '100vh',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    backgroundColor: 'rgb(30,33,37)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    marginLeft: '20px',
    textDecoration: 'none',
    color: 'white',
    fontSize: '1rem',
  },
  signUpButton: {
    marginLeft: '20px',
    padding: '10px 20px',
    backgroundColor: '#6a00ff',
    color: '#fff',
    borderRadius: '20px',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  welcomeSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px 100px',
  },
  textContent: {
    maxWidth: '500px',
  },
  heading: {
    fontSize: '3rem',
    color: '#333',
    marginBottom: '10px',
  },
  subHeading: {
    fontSize: '1.5rem',
    color: '#ffa500',
    marginBottom: '20px',
  },
  description: {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '30px',
  },
  continueButton: {
    padding: '10px 20px',
    backgroundColor: '#6a00ff',
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  hreff:{
    textDecoration:"none",
    color:"white",

  },
  imageContainer: {
    width: '80vh',
    // height: '100vh',
  },
  image: {
    width: '100%',
    objectFit: 'contain',
  },
};

export default WelcomePage;
