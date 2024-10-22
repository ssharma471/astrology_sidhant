import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { setToken } from '../lib/tokenfunc';
import Image from "next/image";
import Link from 'next/link';


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: username,
          password: password
        })
      });
  
      if (response.ok) {
        const resp = await response.json();
        setToken(resp.token);
        router.push('/dashboard');
      } else {
        const errorResponse = await response.json();
        if (errorResponse.error === 'Invalid password') {
          setError('Incorrect password. Please try again.');
        } else if (errorResponse.error === 'User not found') {
          setError('User not found. Please check your credentials.');
        } else {
          setError('Login failed. Please try again.');
        }
      }
    } catch (error) {
      console.error('Error logging in user:', error.message);
      setError('An error occurred, please try again later');
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.leftContainer}>
        <div style={styles.logoContainer}>
          <img src="/logo.jpeg" alt="Astrology Logo" style={styles.logo} className="d-inline-block align-top rounded-circle"/>
          <h2 style={styles.logoText}>Astrology</h2>
        </div>
        <h1 style={styles.welcomeText}>Welcome Back!</h1>
        <p style={styles.subText}>Please enter your login details below</p>

        {error && <p style={styles.error}>{error}</p>}

        <form onSubmit={handleLogin} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              placeholder="Enter the email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              placeholder="Enter the password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>
          
          <button type="submit" style={styles.signInButton}>Sign in</button>
        </form>

        <div style={styles.signUpText}>
          <span>Do not have an account? </span>
          <Link href="/register">
          <a  style={styles.link}>Sign Up</a>
          </Link>
        </div>
      </div>

      <div style={styles.rightContainer}>
        <Image
          src="/loginWall2.jpg"
          alt="Login Background"
          width={865}
          height={900}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    flexDirection: 'row',
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
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#E6E6FA',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
  link: {
    color: '#0070f3',
    textDecoration: 'none',
  },

  /* Media Query for Smaller Screens */
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
    },
    leftContainer: {
      width: '100%',
      padding: '20px',
    },
    rightContainer: {
      display: 'none',  // Hide right container on small screens
    },
    welcomeText: {
      fontSize: '2rem',
    },
    subText: {
      fontSize: '0.9rem',
    },
    input: {
      fontSize: '0.9rem',
      padding: '10px',
    },
    signInButton: {
      fontSize: '0.9rem',
      padding: '10px',
    },
    signUpText: {
      fontSize: '0.8rem',
    },
  },
};

export default LoginPage;
