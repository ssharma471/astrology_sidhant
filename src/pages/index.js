import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';

const WelcomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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

        {/* Hamburger Icon for Mobile
        <div style={styles.hamburgerIcon} onClick={toggleMenu}>
          <div style={styles.hamburgerLine}></div>
          <div style={styles.hamburgerLine}></div>
          <div style={styles.hamburgerLine}></div>
        </div> */}

        {/* <nav style={{ ...styles.navLinks, display: menuOpen ? 'flex' : 'none' }}> */}
        {/* <nav>
          <a href="/dashboard" style={styles.navLink}>Home</a>
          <a href="/contactUs" style={styles.navLink}>Contact</a>
          <a href="/login" style={styles.signUpButton}>Login</a>
          <a href="/register" style={styles.signUpButton}>Sign Up</a>
        </nav> */}
      </header>

      {/* Welcome Section */}
      <section style={styles.welcomeSection}>
        <div style={styles.textContent}>
          <h1 style={styles.heading}>WELCOME</h1>
          <h2 style={styles.subHeading}>To Astrology</h2>
          <p style={styles.description}>
            Your Gateway to the Stars!
            <br /><br />
            Explore the universe within you through the ancient art of astrology. Whether youre seeking guidance, insight, or a deeper understanding of how celestial forces shape your personality and life, you are in the right place.
            <br /><br />
            At astrology.ca, we believe that the stars and planets influence not only our destinies but also our day-to-day experiences. Here, youll find personalized horoscopes, in-depth readings, and astrological insights tailored to help you navigate lifes journey with confidence.
            <br /><br />
            Unlock the secrets of your zodiac sign, discover how planetary transits affect your emotions and decisions, and dive into the fascinating world of astrology—where the answers to lifes biggest questions are written in the stars.
          </p>
          <Link href='/dashboard'>
          <button style={{ padding: '10px 30px', background: 'linear-gradient(90deg, #6a00ff, #9b00ff)', color: '#fff', border: 'none', borderRadius: '30px', fontSize: '1rem', cursor: 'pointer', marginRight: '10px' }}>
            
            
  <a style={{ textDecoration: 'none', color: 'white' }} >Continue</a>
</button>   
</Link>
<br></br>          <br></br>
          <br></br>

         <div>
         <Link href='/login'>

         <button style={{ padding: '10px 30px', backgroundColor: '#0052cc', color: '#fff', border: 'none', borderRadius: '30px', fontSize: '1rem', cursor: 'pointer', marginRight: '10px' }}>
  <a style={{ textDecoration: 'none', color: 'white' }} >Login</a>
</button>
</Link>

<Link href='/register'>

<button style={{ padding: '10px 30px', backgroundColor: '#0099ff', color: '#fff', border: 'none', borderRadius: '30px', fontSize: '1rem', cursor: 'pointer' }}>
  <a style={{ textDecoration: 'none', color: 'white' }} >Sign Up</a>
</button>
</Link>

</div>
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
    minHeight: '100vh',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 30px',
    backgroundColor: 'rgb(30,33,37)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    transition: 'transform 0.3s ease-in-out',
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
  hamburgerIcon: {
    display: 'none',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
  },
  hamburgerLine: {
    width: '100%',
    height: '3px',
    backgroundColor: '#fff',
    borderRadius: '2px',
  },
  welcomeSection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '50px 80px',
    minHeight: '80vh',
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
    lineargradient:"(90deg, #6a00ff, #9b00ff)",
    color: '#fff',
    border: 'none',
    borderRadius: '20px',
    fontSize: '1rem',
    cursor: 'pointer',
  },

  LoginButton:{
    textDecoration:"none",
    padding: '10px 20px',
    // marginLeft:'50px',
    backgroundColor: 'blue',
    // color:'green',
    border: 'none',
    borderRadius: '20px',
    fontSize: '1rem',
    cursor: 'pointer',

    // display: 'flex', flexDirection:"column", gap: '10px' 
    // margin


  },
  hreff: {
    textDecoration: "none",
    color: "white",
  },
  imageContainer: {
    width: '60vh',
  },
  image: {
    width: '100%',
    objectFit: 'contain',
  },
  // Media Queries for Responsiveness
  '@media (max-width: 1024px)': { // Tablets
    welcomeSection: {
      flexDirection: 'column',
      padding: '40px 60px',
    },
    textContent: {
      maxWidth: '100%',
      textAlign: 'center',
    },
    imageContainer: {
      width: '50vh',
    },
  },
  '@media (max-width: 768px)': { // Phones
    navbar: {
      flexDirection: 'row',
      padding: '15px 20px',
    },
    hamburgerIcon: {
      display: 'flex',
    },
    navLinks: {
      position: 'absolute',
      top: '70px',
      right: '0',
      width: '100%',
      backgroundColor: 'rgb(30,33,37)',
      flexDirection: 'column',
      alignItems: 'center',
      transform: 'translateY(-100%)',
      padding: '20px 0',
    },
    navLink: {
      marginLeft: '0',
      marginBottom: '20px',
    },
    welcomeSection: {
      flexDirection: 'column',
      padding: '30px 40px',
    },
    heading: {
      fontSize: '2.5rem',
    },
    subHeading: {
      fontSize: '1.3rem',
    },
    description: {
      fontSize: '0.9rem',
    },
    continueButton: {
      padding: '8px 16px',
    },
    imageContainer: {
      width: '40vh',
      marginTop: '20px',
    },
  },
};

export default WelcomePage;
