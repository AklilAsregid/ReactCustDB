import React from "react";

const RegisterTemplate = () => {
  return (
    <div className="container h-100 Auth">
      <div className="d-flex justify-content-center h-100">
        <div className="user_card">
          <div className="d-flex justify-content-center">
            <div className="brand_logo_container">
              <img src="user+.png" className="brand_logo" alt="Logo" />
            </div>
          </div>
          <div className="d-flex justify-content-center form_container">
            <form>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
                <input
                  type="text"
                  name=""
                  className="form-control input_user"
                  value=""
                  placeholder="Full Name"
                />
              </div>
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
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
                    <i className="fas fa-key"></i>
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
              <div className="input-group mb-3">
                <div className="input-group-append">
                  <span className="input-group-text">
                    <i className="fas fa-key"></i>
                  </span>
                </div>
                <input
                  type="password"
                  name=""
                  className="form-control input_user"
                  value=""
                  placeholder="confirm password"
                />
              </div>
              <div className="d-flex justify-content-center mt-3 login_container">
                <button type="button" name="button" className="btn login_btn">
                  Login
                </button>
              </div>
            </form>
          </div>

          <div className="mt-2 mb-2">
            <div className="d-flex justify-content-center links">
              have an account?{" "}
              <a href="login.html" className="ml-2">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterTemplate;
