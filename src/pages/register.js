import React, { useState } from 'react';
import Image from "next/image";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Password regex for validation
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=|\\{}[\]:;"'<>,.?/]).{8,}$/;

  async function handleSubmit(e) {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setError('Password fields cannot be empty.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!passwordRegex.test(password)) {
      setError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return;
    }

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        console.log('User registered successfully');
        window.location = '/'; // Redirect to the home page after successful registration
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Error registering user.');
      }
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Error registering user.');
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        <div style={styles.logoContainer}>
        <img src="/logo.jpeg" alt="Tasky Logo" style={styles.logo} className="d-inline-block align-top rounded-circle"/>
        <h2 style={styles.logoText}>Astrology</h2>
        </div>
        <h1 style={styles.welcomeText}>Create an Account</h1>
        <p style={styles.subText}>Please fill in your details below</p>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password:</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.signInButton}>Register</button>
        </form>

        <div style={styles.signUpText}>
          <span>Already have an account? </span>
          <a href="/login" style={styles.link}>Log in</a>
        </div>
      </div>

      <div style={styles.rightContainer}>
      <a className="navbar-brand">
              <Image
                src="/loginWall3.jpeg"
                alt="Logo"
                width={865}
                height={900}
                // className="d-inline-block align-top rounded-circle"
              />
              {/* <span className="ms-2 fw-bold fs-3 text-primary">Astrology</span> */}
            </a>
        {/* <p style={styles.manageText}>Manage your tasks efficiently with Tasky...</p> */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  leftContainer: {
    width: '50%',
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '40px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#0070f3',
  },
  welcomeText: {
    fontSize: '2.5rem',
    marginBottom: '10px',
  },
  subText: {
    fontSize: '1rem',
    marginBottom: '30px',
    color: '#777',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  label: {
    fontSize: '1rem',
    marginBottom: '8px',
    display: 'block',
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  signInButton: {
    backgroundColor: '#1E90FF',
    color: '#fff',
    padding: '15px',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  signUpText: {
    textAlign: 'center',
    marginTop: '30px',
    fontSize: '0.9rem',
    color: '#777',
  },
  rightContainer: {
    width: '50%',
    position: 'relative',
    backgroundColor: '#E6E6FA',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  manageText: {
    marginTop: '20px',
    fontSize: '1.2rem',
    color: '#555',
    textAlign: 'center',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default Register;
