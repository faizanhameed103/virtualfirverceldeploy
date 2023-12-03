import React from "react";
import "./UserProfileCss.css"; // Import the CSS file

const UserProfile = () => {
  // Dummy user data (replace with actual user data)
  const user = {
    username: "JohnDoe",
    fullName: "John Doe",
    email: "johndoe@example.com",
    profileImage: "https://via.placeholder.com/150", // Replace with user's image URL
    // Add more user information here
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={user.profileImage} alt="User" className="profile-image" />
        <h1>User Profile</h1>
      </div>
      <div className="profile-info">
        <p>Username: {user.username}</p>
        <p>Full Name: {user.fullName}</p>
        <p>Email: {user.email}</p>
        {/* Add more user information here */}
      </div>
    </div>
  );
};

export default UserProfile;
