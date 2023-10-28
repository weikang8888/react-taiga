import React, { useState } from "react";
import "./login.css";
import ButtonMain from "../../components/Button/Button";
import "font-awesome/css/font-awesome.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthContent";
import CopyrightFooter from "src/components/Footer/CopyrightFooter";
import Logo from "../../static/assets/image/tiger.png";
import Toast from "../../Toast";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { loginWithEmail, registerWithGoogle } from "../../apiEndpoints";

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
    loginWithEmail(userData)
      .then((response) => {
        // console.log(response.data);
        const authToken = response.data.authToken;
        const name = response.data.name;
        login(email, name, null, authToken);
        Toast({ message: "Login Successful!" });
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(`Incorrect username or password.Please try again.`);
        console.error(error);
        Toast({ message: "Login Failed!", type: "error" });
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

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        // Make an API call to Google to retrieve user information
        const userInfoResponse = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        const email = userInfoResponse.data.email || "";
        const name = userInfoResponse.data.name;

        console.log("Email:", email);
        console.log("Name:", name);

        // Call the registerWithGoogle function with the access token in the headers
        const registrationResponse = await registerWithGoogle(email, name, {
          Authorization: `Bearer ${response.access_token}`,
        });

        Toast({ message: "Google Login Successful!" });
        login(email, name, null, null);

        if (registrationResponse.data.emailExists) {
          // Email exists, navigate to the homepage directly
          navigate("/");
        } else {
          navigate("/register/moreInfo", { state: { email } });
        }
      } catch (err) {
        console.error(err);
        Toast({ message: "Google Login Error!", type: "error" });
      }
    },
  });

  return (
    <>
      <section className="gradient-custom bg-black">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-black text-white">
                <div className="card-body px-sm-5 px-4 pt-4 text-center">
                  <div className="mb-md-5 mt-md-4">
                    <Link to="/">
                      <img src={Logo} style={{ width: "240px" }} />
                    </Link>
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white mb-5">
                      Please enter your login and password!
                    </p>{" "}
                    {/* {errorMessage && (
                      <p className="error-message">{errorMessage}</p>
                    )} */}
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
                    <div className="text-center mt-4 pt-1">
                      <a className="text-dark px-3 cursorPointer">
                        <i className="fa fa-facebook-f fa-lg custom-icon-color"></i>
                      </a>
                      <a
                        className="text-dark px-3 cursorPointer"
                        onClick={() => handleGoogleLogin()}>
                        <i className="fa fa-google fa-lg custom-icon-color"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <p className="mb-0 m">
                      Don't have an account?
                      <Link
                        to="/register/signUp"
                        className="text-main fw-bold mx-2">
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
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default Login;
