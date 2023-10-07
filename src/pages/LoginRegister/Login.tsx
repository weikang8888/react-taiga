import React, { useState } from "react";
import "./login.css";
import ButtonMain from "../../components/Button/Button";
import "font-awesome/css/font-awesome.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthContent";

const Login = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState(""); // State to track the email input value
  const [password, setPassword] = useState(""); // State to track the password input value
  const [emailActive, setEmailActive] = useState(false); // State to track email input focus
  const [passwordActive, setPasswordActive] = useState(false); // State to track password input focus
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    // Create a data object with the user's email and password
    const userData = {
      email: email,
      password: password,
    };

    // Send a POST request to the PHP backend
    axios
      .post("https://backend.taiga-auto.com/api_taiga/users/login", userData)
      .then((response) => {
        console.log(response.data);
        const authToken = response.data.authToken;
        const name = response.data.name;

        login(email, name, null, authToken);

        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(`Incorrect username or password.Please try again.`);
        console.error(error);
      });
  };
  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrorMessage("");
  };

  // Function to handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setErrorMessage("");
  };

  return (
    <>
      <section className="gradient-custom bg-orange">
        <div className="container pb-1 pt-5rem h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-black text-white">
                <div className="card-body px-4 text-center">
                  <div className="mb-md-5 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white mb-5">
                      Please enter your login and password!
                    </p>{" "}
                    {errorMessage && (
                      <p className="error-message">{errorMessage}</p>
                    )}
                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="typeEmailX"
                        className={`form-control form-control-lg  ${
                          emailActive || email ? "active" : ""
                        }`}
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <label className="form-label ">Email</label>
                    </div>
                    <div className="form-outline form-white mb-1">
                      <input
                        type="password"
                        id="typePasswordX"
                        className={`form-control form-control-lg ${
                          passwordActive || password ? "active" : ""
                        }`}
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <label className="form-label">Password</label>
                    </div>
                    <p className="small mb-4 pb-lg-2">
                      <a className="text-main" href="#!">
                        Forgot password?
                      </a>
                    </p>
                    <ButtonMain text={"Login"} onClick={handleLogin} />
                    <div className="d-flex justify-content-center text-center mt-4 pt-1">
                      <a href="#!" className="text-dark px-3">
                        <i className="fa fa-facebook-f fa-lg custom-icon-color"></i>
                      </a>
                      <a href="#!" className="text-dark px-3">
                        <i className="fa fa-google fa-lg custom-icon-color"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0 m">
                      Don't have an account?
                      <Link to="/register" className="text-main fw-bold mx-2">
                        Sign Up
                      </Link>
                    </p>
                    {/* <p className="mb-0">
                      Login/Sign Up With
                      <Link to="/login-pn" className="text-main fw-bold ms-1">
                        Phone Number
                      </Link>
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
