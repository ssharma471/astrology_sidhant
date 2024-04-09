import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { readToken } from "../../src/lib/tokenfunc";

const EditProfile = () => {
  const router = useRouter();

  // Initialize tokenData as a state variable
  const [tokenData, setTokenData] = useState(null);

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    // Read user information from token when the component mounts
    const token = readToken();
    if (token) {
      setTokenData(token);
      setUserInfo({
        name: token.name,
        email: token.email
      });
    }
  }, []);

  const [editInfo, setEditInfo] = useState({});
  const [confirmPassword, setConfirmPassword] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleInputChange = (e) => {
    setEditInfo({ ...editInfo, [e.target.name]: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatchError(e.target.value !== editInfo.password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editInfo.password !== confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    try {
      const response = await fetch('/api/update-profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: tokenData.id, updatedUserData: editInfo })
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        router.push('/dashboard');
      } else {
        throw new Error(data.error || 'Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const renderViewMode = () => {
    return (
      <div className="container mt-5">
        <h1>View Profile</h1>
        <div className="card mt-3 p-4">
          <p><strong>Name:</strong> {userInfo.name}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <button onClick={() => setEditMode(true)} className="btn btn-primary">Edit Profile</button>
        </div>
      </div>
    );
  };

  const renderEditMode = () => {
    return (
      <div className="container mt-5">
        <h1>Edit Profile</h1>
        <div className="card mt-3 p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
  type="text"
  className="form-control"
  id="name"
  name="name"
  value={editInfo.name ?? ''}
  onChange={handleInputChange}
/>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={editInfo.email || userInfo.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={editInfo.password || userInfo.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input
                type="password"
                className={`form-control ${passwordMatchError ? 'is-invalid' : ''}`}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />
              {passwordMatchError && <div className="invalid-feedback">Passwords do not match</div>}
            </div>
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Update Profile</button>
              <button onClick={() => setEditMode(false)} className="btn btn-secondary">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div>
      {editMode ? renderEditMode() : renderViewMode()}
    </div>
  );
};

export default EditProfile;
