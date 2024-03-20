import React, { useState } from 'react';

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
      setError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*()-_+=|\\{}[]:;"\'<>,.?/)');
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
      <h1 style={styles.heading}>Register Page</h1>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>
          Enter your Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} />
        </label>
        <br />
        <label style={styles.label}>
          Enter your Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} />
        </label>
        <br />
        <label style={styles.label}>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input} />
        </label>
        <br />
        <label style={styles.label}>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '20px',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    width: '300px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  label: {
    display: 'block',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '15px',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Register;
