import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Avatar from 'react-avatar'; // Import Avatar component from react-avatar
import { readToken, removeToken } from "@/lib/tokenfunc";
import { useRouter } from "next/router";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to right, #f5f5f5, #e0e0e0); /* Light gradient background */
`;

const Navbar = styled.nav`
  background: #333;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 15px;
  &:hover {
    text-decoration: underline;
  }
`;

const HeroSection = styled.section`
  background: linear-gradient(to right, white, lightblue), url('/images/hero-bg.jpg') no-repeat center center/cover;
  color: black;
  text-align: center;
  padding: 80px 20px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-weight: bold;
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const Content = styled.main`
  flex: 1;
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamMember = styled.div`
  margin: 20px;
  text-align: center;
  width: 200px;
`;

const MemberName = styled.h3`
  font-size: 18px;
  color: #333;
`;

const MemberPosition = styled.p`
  font-size: 14px;
  color: #666;
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 20px;
`;

const avatars = {
  'Sidhant Sharma': { color: '#e91e63', name: 'Sidhant Sharma' },
  'Meetsimar Kaur': { color: '#3f51b5', name: 'Meetsimar Kaur' },
  'Samarth Modi': { color: '#4caf50', name: 'Samarth Modi' },
};

const About = () => {
  const router = useRouter();
  const [username, setUsername] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navHovered, setNavHovered] = useState(false);


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

  // Hover effect handler
  const handleNavHover = () => {
    setNavHovered(true);
  };

  const handleNavLeave = () => {
    setNavHovered(false);
  };
  return (
    <PageContainer>
    {/* Navbar */}
    <nav
  className={`navbar navbar-expand-lg fixed-top shadow-sm ${navHovered ? "bg-hover" : "bg-dark"}`}
  style={{
    transition: "background-color 0.3s",
    backgroundColor: navHovered ? "#333" : "transparent", // Changed the hover color to dark grey
  }}
  onMouseEnter={handleNavHover}
  onMouseLeave={handleNavLeave}
>
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
                  <a className="nav-link fw-semibold text-light">About Us</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contactUs" legacyBehavior>
                  <a className="nav-link fw-semibold text-light">Contact Us</a>
                </Link>
              </li>
              <li className="nav-item">
                {isLoggedIn ? (
                  <Link href="/services" legacyBehavior>
                    <a className="nav-link fw-semibold text-light">Our Services</a>
                  </Link>
                ) : (
                  <Link href="/" legacyBehavior>
                    <a className="nav-link fw-semibold text-light">Our Services</a>
                  </Link>
                )}
              </li>
              {isLoggedIn && (
                <>
                  <li className="nav-item dropdown">
                    <a
                      className={`nav-link dropdown-toggle fw-semibold text-light ${dropdownOpen ? "show" : ""
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
                        <button className="dropdown-item" onClick={handleLogout}>
                          Logout
                        </button>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                <Link href="/blog" legacyBehavior>
                  <a className="nav-link fw-semibold text-light">Blogs</a>
                </Link>
              </li>
                  <li className="nav-item">
                    <Link href="/yourCart" legacyBehavior>
                      <a className="nav-link fw-semibold text-light">Your Cart</a>
                    </Link>
                  </li>
                </>
              )}
            </ul>
            {/* Search bar */}
            <form className="d-flex ms-3">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>


      <HeroSection>
        <HeroTitle>About Us</HeroTitle>
        <HeroSubtitle>
          Welcome to our Astrology Portal. We are dedicated to providing you with accurate astrological insights and guidance to navigate through lifes challenges.
        </HeroSubtitle>
      </HeroSection>

      <Content>
        <div className="text-center mb-5">
          <h2 className="mb-4">Our Mission</h2>
          <p>
            Our team of experienced astrologers combines ancient wisdom with modern techniques to offer personalized readings and forecasts tailored to your needs. Whether youre seeking answers about love, career, or personal growth, we are here to help you unlock the secrets of the cosmos.
          </p>
        </div>

        {/* Team Section */}
        <TeamContainer>
          <TeamMember>
            <Avatar name={avatars['Sidhant Sharma'].name} color={avatars['Sidhant Sharma'].color} round={true} size="100" />
            <MemberName>Sidhant Sharma</MemberName>
            <MemberPosition>Frontend Developer</MemberPosition>
          </TeamMember>
          <TeamMember>
            <Avatar name={avatars['Meetsimar Kaur'].name} color={avatars['Meetsimar Kaur'].color} round={true} size="100" />
            <MemberName>Meetsimar Kaur</MemberName>
            <MemberPosition>Database Administrator</MemberPosition>
          </TeamMember>
          <TeamMember>
            <Avatar name={avatars['Samarth Modi'].name} color={avatars['Samarth Modi'].color} round={true} size="100" />
            <MemberName>Samarth Modi</MemberName>
            <MemberPosition>Backend Developer</MemberPosition>
          </TeamMember>
        </TeamContainer>
      </Content>

      <Footer>
        <p>&copy; 2024 Astrology World. All Rights Reserved.</p>
      </Footer>
    </PageContainer>
  );
};

export default About;
