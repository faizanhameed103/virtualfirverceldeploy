import React, { Component } from "react";
import BannerBackground from "../Assets/home-banner-background.png";
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
export default class Login extends Component {
  render() {
    return (
      <>
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div style={formContainerStyle}>
          <form style={formStyle}>
            <h3>Sign In</h3>

            <div className="mb-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
              />
            </div>

            <div className="mb-3">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label" htmlFor="customCheck1">
                  Remember me
                </label>
              </div>
            </div>

            <div className="d-grid">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>
          </form>
        </div>
      </>
    );
  }
}
