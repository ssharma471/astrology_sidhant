import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import Avatar from 'react-avatar'; // Import Avatar component from react-avatar

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
  return (
    <PageContainer>
      {/* Navbar */}
      <Navbar>
        <Link href="/" legacyBehavior>
          <a className="navbar-brand">
            <Image src="/logo.jpeg" alt="Logo" width={40} height={40} className="d-inline-block align-top rounded-circle" />
            <span className="ms-2 fw-bold text-light">Astrology</span>
          </a>
        </Link>
        <div>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/contactUs">Contact Us</NavLink>
          <NavLink href="/services">Our Services</NavLink>
        </div>
      </Navbar>

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
