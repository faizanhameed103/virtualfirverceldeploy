import React, { Component } from "react";

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
      <form onSubmit={this.handleSubmit}>
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
          Already registered <a href="/sign-in">sign in?</a>
        </p>
      </form>
    );
  }
}
