import React, { Component } from "react";
import { Link } from "react-router-dom";
const formContainerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  padding: "20px",
};

const formStyle = {
  width: "100%",
  maxWidth: "500px",
  background: "#ffffff",
  padding: "40px",
  borderRadius: "10px",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
};
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      profilePicture: null,
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileInputChange = (event) => {
    this.setState({ profilePicture: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { firstName, lastName, email, password, profilePicture } = this.state;
    console.log("Submitted Data:", {
      firstName,
      lastName,
      email,
      password,
      profilePicture,
    });
  };

  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <div style={formContainerStyle}>
        <form onSubmit={this.handleSubmit} style={formStyle}>
          <h3>Sign Up</h3>

          <div className="mb-3">
            <label>First name</label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="First name"
            />
          </div>

          <div className="mb-3">
            <label>Last name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="Last name"
            />
          </div>

          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="mb-3">
            <label>Profile Picture</label>
            <input
              type="file"
              accept="image/*"
              onChange={this.handleFileInputChange}
              className="form-control"
            />
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered <Link to="/sign-in">Login</Link>
          </p>
        </form>
      </div>
    );
  }
}
