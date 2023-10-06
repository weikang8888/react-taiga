import React, { useEffect, useState } from "react";
import "./login.css";
import ButtonMain from "../../components/Button/Button";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import axios from "axios";
import LoaderDiamond from "../../components/Loader/LoaderDiamond";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [passwordActive, setPasswordActive] = useState(false);
  const [confirmPasswordActive, setConfirmPasswordActive] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const isFormValid =
    nameValid && emailValid && passwordValid && confirmPasswordValid;

  const handleNameChange = (e) => {
    const newValue = e.target.value;
    setName(e.target.value);
    setNameValid(newValue.trim() !== "");
  };

  const handleEmailChange = (e) => {
    const newValue = e.target.value;
    setEmail(e.target.value);
    setEmailValid(newValue.trim() !== "" && emailPattern.test(newValue));
  };

  const handlePasswordChange = (e) => {
    const newValue = e.target.value;
    setPassword(e.target.value);
    setPasswordValid(newValue.trim() !== "");
  };

  const handleConfirmPasswordChange = (e) => {
    const newValue = e.target.value;
    setConfirmPassword(e.target.value);
    setConfirmPasswordValid(newValue.trim() !== "");
    setPasswordMatch(newValue === password);
  };

  const handleRegistration = () => {
    setFormSubmitted(true);

    if (isFormValid && passwordMatch && emailValid) {
      const userData = {
        name: name,
        email: email,
        password: password,
      };

      // Start loading indicator
      setIsLoading(true);

      axios
        .post("https://backend.taiga-auto.com/api_taiga/users/register", userData)
        .then((registrationResponse) => {
          console.log("Registration Response:", registrationResponse.data);

          if (
            registrationResponse.data.message ===
            "Registration successful. Verification email sent."
          ) {
            setRegistrationStatus("success");
          }
        })
        .catch((registrationError) => {
          console.error("Error during registration:", registrationError);
          setRegistrationStatus("error");
        })
        .finally(() => {
          // Stop loading indicator regardless of success or error
          setIsLoading(false);
        });
    }
  };

  return (
    <>
      <section className="gradient-custom bg-orange">
        <div className="container pb-1 pt-5rem h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-black text-white">
                <div className="card-body px-5 text-center">
                  <div className="mb-md-5 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                    <p className="text-white mb-5">
                      Please enter your login and password!
                    </p>
                    {registrationStatus === "success" ? (
                      <p className="error-message">
                        Please check your email to verify.
                      </p>
                    ) : registrationStatus === "error" ? (
                      <p className="error-message">
                        Registration failed. Please try again.
                      </p>
                    ) : null}

                    <div className="form-outline form-white mb-4">
                      <input
                        type="name"
                        id="name"
                        className={`form-control form-control-lg ${
                          formSubmitted && !nameValid ? "error-input" : ""
                        } ${nameActive || name ? "active" : ""}`}
                        value={name}
                        onChange={handleNameChange}
                      />
                      <label className="form-label">Name</label>
                      {formSubmitted && !nameValid && (
                        <div className="error-message">Please enter name.</div>
                      )}
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="email"
                        id="email"
                        className={`form-control form-control-lg ${
                          formSubmitted && !emailValid ? "error-input" : ""
                        } ${emailActive || email ? "active" : ""}`}
                        onChange={handleEmailChange}
                      />
                      <label className="form-label ">Email</label>
                      {formSubmitted && !emailValid && (
                        <div className="error-message">
                          Please enter a valid email address.
                        </div>
                      )}
                    </div>

                    <div className="form-outline form-white mb-4">
                      <input
                        type="password"
                        id="password"
                        className={`form-control form-control-lg ${
                          formSubmitted && !passwordValid ? "error-input" : ""
                        } ${passwordActive || password ? "active" : ""}`}
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      <label className="form-label">Password</label>
                      {formSubmitted && !passwordValid && (
                        <div className="error-message">
                          Please enter password.
                        </div>
                      )}
                    </div>

                    <div className="form-outline form-white mb-1">
                      <input
                        type="password"
                        id="confirmPassword"
                        className={`form-control form-control-lg ${
                          formSubmitted && !confirmPasswordValid
                            ? "error-input"
                            : ""
                        } ${
                          confirmPasswordActive || confirmPassword
                            ? "active"
                            : ""
                        }`}
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                      />
                      <label className="form-label">Confirm Password</label>
                      {formSubmitted && !confirmPasswordValid && (
                        <div className="error-message">
                          Please enter confirm password.
                        </div>
                      )}
                      {!passwordMatch && (
                        <div className="error-message">
                          Passwords do not match.
                        </div>
                      )}
                    </div>

                    {isLoading ? (
                      <LoaderDiamond />
                    ) : (
                      <>
                        <p className="small mb-5 pb-lg-2">
                          <a className="text-main" href="#!">
                            Forgot password?
                          </a>
                        </p>

                        <ButtonMain
                          text={"Register"}
                          onClick={handleRegistration}
                        />

                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                          <a href="#!" className="text-dark ">
                            <i className="fa fa-facebook-f fa-lg custom-icon-color"></i>
                          </a>
                          <a href="#!" className="text-dark">
                            <i className="fa fa-twitter fa-lg mx-4 px-2 custom-icon-color"></i>
                          </a>
                          <a href="#!" className="text-dark">
                            <i className="fa fa-google fa-lg custom-icon-color"></i>
                          </a>
                        </div>
                      </>
                    )}
                  </div>

                  <div>
                    <p className="mb-0">
                      Already have an account?{" "}
                      <Link to="/login" className="text-main fw-bold">
                        Sign In
                      </Link>
                    </p>
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

export default Register;
