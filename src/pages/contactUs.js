import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Image component from next/image
import styled from 'styled-components'; // Import styled-components

// Styled components
const Navbar = styled.nav`
  background-color: #343a40;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #666;
`;

const ContactDetails = styled.div`
  margin-top: 20px;
`;

const ContactInfo = styled.p`
  margin-bottom: 10px;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
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
      </Navbar>

      <Container>
        <Title>Contact Us</Title>
        <Text>Feel free to reach out to us with any questions, feedback, or inquiries. Our team is here to assist you!</Text>
        <ContactDetails>
          <ContactInfo><strong>Email:</strong> contact@example.com</ContactInfo>
          <ContactInfo><strong>Phone:</strong> +1 (123) 456-7890</ContactInfo>
          <ContactInfo><strong>Address:</strong> 123 Astrology Street, Astro City, Universe</ContactInfo>
        </ContactDetails>

        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Name:</Label>
            <Input type="text" id="name" name="name" required />
          </FormField>
          <FormField>
            <Label htmlFor="email">Email:</Label>
            <Input type="email" id="email" name="email" required />
          </FormField>
          <FormField>
            <Label htmlFor="message">Message:</Label>
            <TextArea id="message" name="message" rows="4" required />
          </FormField>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
      

      <style jsx>{`
        .navbar {
          margin-bottom: 20px;
        }
      `}</style>
       {/* Footer */}
       <footer className="bg-dark text-white text-center py-4" style={{marginTop:130}}>
        <p>&copy; 2024 Astrology World. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
