import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import FontAwesome from "react-fontawesome";

const LoginTemplate = () => {
  return (
    <div className="container h-100">
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img src="admin-icon-9.jpg" className="brand_logo" alt="Logo" />
            </div>
          </div>
          <div className="d-flex justify-content-center form_container">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <FontAwesome
                      name="user"
                      style={{
                        color: "#dfdfdf",
                        padding: "10px",
                        cursor: "pointer"
                      }}
                    />
                  </span>
                </div>
                <input
                  type="text"
                  name=""
                  className="form-control input_user"
                  value=""
                  placeholder="username"
                />
              </div>
              <div className="input-group mb-2">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <FontAwesome
                      name="key"
                      style={{
                        color: "#dfdfdf",
                        padding: "10px",
                        cursor: "pointer"
                      }}
                    />
                  </span>
                </div>
                <input
                  type="password"
                  name=""
                  className="form-control input_pass"
                  value=""
                  placeholder="password"
                />
              </div>
              <div className="d-flex justify-content-center mt-3 login_container">
                <button type="button" name="button" className="btn login_btn">
                  Login
                </button>
              </div>
            </form>
          </div>
          <div className="mt-4">
            <div className="d-flex justify-content-center links">
              Don't have an account?{" "}
              <Link to="/register" className="ml-2">
                Register
              </Link>
            </div>
            <div className="d-flex justify-content-center links">
              <Link to="/">Forgot your password?</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginTemplate;
