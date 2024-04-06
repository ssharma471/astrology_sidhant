// src/pages/UserProfile.js

import React from 'react';
import PrivateRoute from 'components/PrivateRoute'; // Import PrivateRoute

const UserProfile = () => {
  return (
    <PrivateRoute>
      <div>
        <h2>User Profile</h2>
        {/* Your profile content goes here */}
      </div>
    </PrivateRoute>
  );
};

export default UserProfile;
