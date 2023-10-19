import React, { useEffect, useState } from "react";
import "./login.css";
import ButtonMain from "../../components/Button/Button";
import "font-awesome/css/font-awesome.min.css";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import {
  registerWithEmail,
  registerInfo,
  registerWithFacebook,
  registerWithGoogle,
} from "../../apiEndpoints"; // Adjust the import path as needed
import LoaderDiamond from "../../components/Loader/LoaderDiamond";
import PhoneInput from "react-phone-input-2";
import { useAuth } from "src/AuthContent";
import { toast } from "react-toastify";
import CopyrightFooter from "src/components/Footer/CopyrightFooter";
import Logo from "../../static/assets/image/tiger.png";
import Toast from "../../Toast";

declare global {
  interface Window {
    FB: any;
    google: {
      accounts: {
        id: {
          initialize(options: { client_id: string; callback: Function }): void;
          prompt(): void;
        };
      };
    };
  }
}

const Register = () => {
  const navigate = useNavigate();
  const { step } = useParams();
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    carType: "",
    address: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const isBasicInfoValid = () => {
    return (
      formData.name.trim() !== "" &&
      emailPattern.test(formData.email) &&
      formData.password.trim() !== "" &&
      formData.confirmPassword === formData.password
    );
  };

  const isAdditionalInfoValid = () => {
    return (
      formData.phoneNumber.trim() !== "" &&
      formData.carType.trim() !== "" &&
      formData.address.trim() !== ""
    );
  };

  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleBasicInfoSubmission = () => {
    setFormSubmitted(true);
    if (isBasicInfoValid()) {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };
      setIsLoading(true);

      registerWithEmail(userData)
        .then((response) => {
          setIsLoading(false);
          console.log("Registration Response:", response.data);
          Toast({ message: "Verification Link Sent Successful!" });
          setEmail(email);
        })
        .catch((registrationError) => {
          setIsLoading(false);
          console.error("Error during registration:", registrationError);
          Toast({ message: "Email Already Exists", type: "error" });
        });
    }
  };

  const handleRegistration = () => {
    setFormSubmitted(true);

    if (isAdditionalInfoValid()) {
      const infoData = {
        email: email,
        phoneNumber: formData.phoneNumber,
        carType: formData.carType,
        address: formData.address,
      };

      // Start loading indicator
      setIsLoading(true);

      registerInfo(infoData)
        .then((response) => {
          console.log("Registration Response:", response.data);
          const name = response.data.name;
          const email = response.data.email;
          login(email, name, null, null);
          Toast({ message: "Register Successful!" });

          navigate("/");
          // Handle success
        })
        .catch((registrationError) => {
          console.error("Error during registration:", registrationError);
        })
        .finally(() => {
          // Stop loading indicator regardless of success or error
          setIsLoading(false);
        });
    }
  };

  const handleFacebookLogin = () => {
    // Ensure the Facebook SDK is initialized (you should have done this elsewhere)
    if (window.FB) {
      // Trigger the Facebook login process
      window.FB.login(
        function (response) {
          if (response.authResponse) {
            // User is logged in and authenticated
            const accessToken = response.authResponse.accessToken;

            registerWithFacebook(accessToken)
              .then((response) => {
                console.log("Registration Response:", response.data);
                const email = response.data.email;
                const name = response.data.name;
                const emailExists = response.data.emailExists;

                Toast({ message: "Facebook Login Successful!" });
                setEmail(email);
                navigate(`/register/moreInfo`);
                login(email, name, null, null);

                if (emailExists) {
                  // Email exists, navigate to the homepage directly
                  navigate("/");
                } else {
                  setEmail(email);
                  navigate("/register/moreInfo");
                }
              })
              .catch((registrationError) => {
                console.error("Error during registration:", registrationError);
                Toast({ message: "Facebook Login Error!", type: "error" });
              });
          } else {
            // User canceled the login or didn't authorize your app
            console.log("Facebook login canceled or not authorized.");
          }
        },
        { scope: "email,public_profile" }
      );
    } else {
      console.error("Facebook SDK not initialized.");
    }
  };

  function handleCallbackResponse(response) {
    // Check if the response contains the Google ID token
    if (response.credential) {
      // User successfully logged in
      const googleIdToken = response.credential;
      // Send the Google ID token to the backend
      registerWithGoogle(googleIdToken)
        .then((response) => {
          console.log("Backend response:", response.data);
          const name = response.data.name;
          const email = response.data.email;
          const emailExists = response.data.emailExists;

          login(email, name, null, null);
          Toast({ message: "Google Login Successful!" });
          setEmail(email);
          navigate(`/register/moreInfo`);

          if (emailExists) {
            navigate("/");
          } else {
            setEmail(email);
            navigate("/register/moreInfo");
          }
        })
        .catch((error) => {
          console.error("Error making the backend request:", error);
          Toast({ message: "Google Login Error!", type: "error" });
        });
    } else {
      // Handle the case where the Google ID token is missing in the response
      console.error("Google ID token is missing in the response.");
      // Handle the error as needed
    }
  }

  useEffect(() => {
    /* global google */
    window.google.accounts.id.initialize({
      client_id:
        "106987708628-69u7ibsorp0rfkaq35qvril6j09gp4st.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    return () => {};
  }, []);

  const handleCustomGoogleSignIn = () => {
    // Trigger the Google Sign-In process
    window.google.accounts.id.prompt();
  };

  return (
    <>
      {isLoading && <LoaderDiamond />}
      <section className="gradient-custom bg-black">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-black text-white">
                <div className="card-body px-sm-5 px-4 text-center">
                  <div className="mb-md-5 mt-md-4">
                    <img src={Logo} style={{ width: "240px" }} />
                    {step === "signUp" && (
                      <>
                        <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                        <p className="text-white">
                          Sign Up For Our Taiga Auto Member
                        </p>
                        <div className="mb-4">
                          {/* Name input */}
                          <div className="form-outline form-white mb-4  px-2">
                            <input
                              type="text"
                              id="name"
                              className={`form-control form-control-lg ${
                                formSubmitted && !formData.name.trim()
                                  ? "error-input"
                                  : ""
                              } ${formData.name ? "active" : ""}`}
                              value={formData.name}
                              onChange={(e) =>
                                handleInputChange("name", e.target.value)
                              }
                            />
                            <label className="form-label">Name</label>
                            {formSubmitted && !formData.name.trim() && (
                              <div className="error-message">
                                Please enter name.
                              </div>
                            )}
                          </div>

                          {/* Email input */}
                          <div className="form-outline form-white mb-4  px-2">
                            <input
                              type="email"
                              id="email"
                              className={`form-control form-control-lg ${
                                formSubmitted &&
                                (!emailPattern.test(formData.email) ||
                                  !formData.email.trim())
                                  ? "error-input"
                                  : ""
                              } ${formData.email ? "active" : ""}`}
                              value={formData.email}
                              onChange={(e) =>
                                handleInputChange("email", e.target.value)
                              }
                            />
                            <label className="form-label">Email</label>
                            {formSubmitted &&
                              (!emailPattern.test(formData.email) ||
                                !formData.email.trim()) && (
                                <div className="error-message">
                                  Please enter a valid email address.
                                </div>
                              )}
                          </div>

                          {/* Password input */}
                          <div className="form-outline form-white mb-4  px-2">
                            <input
                              type="password"
                              id="password"
                              className={`form-control form-control-lg ${
                                formSubmitted && !formData.password.trim()
                                  ? "error-input"
                                  : ""
                              } ${formData.password ? "active" : ""}`}
                              value={formData.password}
                              onChange={(e) =>
                                handleInputChange("password", e.target.value)
                              }
                            />
                            <label className="form-label">Password</label>
                            {formSubmitted && !formData.password.trim() && (
                              <div className="error-message">
                                Please enter password.
                              </div>
                            )}
                          </div>

                          {/* Confirm Password input */}
                          <div className="form-outline form-white mb-1  px-2">
                            <input
                              type="password"
                              id="confirmPassword"
                              className={`form-control form-control-lg ${
                                formSubmitted &&
                                (!formData.confirmPassword.trim() ||
                                  formData.confirmPassword !==
                                    formData.password)
                                  ? "error-input"
                                  : ""
                              } ${formData.confirmPassword ? "active" : ""}`}
                              value={formData.confirmPassword}
                              onChange={(e) =>
                                handleInputChange(
                                  "confirmPassword",
                                  e.target.value
                                )
                              }
                            />
                            <label className="form-label">
                              Confirm Password
                            </label>
                            {formSubmitted &&
                              (!formData.confirmPassword.trim() ||
                                formData.confirmPassword !==
                                  formData.password) && (
                                <div className="error-message">
                                  Passwords do not match.
                                </div>
                              )}
                          </div>
                        </div>

                        <ButtonMain
                          text={"Register"}
                          onClick={handleBasicInfoSubmission}
                        />

                        <div className="text-center mt-4 pt-1">
                          <a
                            className="text-dark px-3 cursorPointer"
                            onClick={handleFacebookLogin}>
                            <i className="fa fa-facebook-f fa-lg custom-icon-color"></i>
                          </a>
                          <a
                            className="text-dark px-3 cursorPointer"
                            id="signInDiv"
                            onClick={handleCustomGoogleSignIn}>
                            <i className="fa fa-google fa-lg custom-icon-color"></i>
                          </a>
                        </div>
                      </>
                    )}
                    {step === "moreInfo" && (
                      <>
                        {/* Additional Information */}
                        <h3 className="fw-bold mb-3">Additional Information</h3>
                        <p className="text-white">Let Us more remember you!</p>
                        <div className="">
                          {/* Phone Number input */}
                          <div className="form-outline form-white mb-4  px-2">
                            <PhoneInput
                              country={"my"}
                              value={formData.phoneNumber}
                              onChange={(e) =>
                                handleInputChange("phoneNumber", e)
                              }
                            />
                            {formSubmitted && !formData.phoneNumber.trim() && (
                              <div className="error-message">
                                Please enter phone number.
                              </div>
                            )}
                          </div>

                          {/* Car Type input */}
                          <div className="form-outline form-white mb-4  px-2">
                            <input
                              type="text"
                              id="carType"
                              className={`form-control form-control-lg ${
                                formSubmitted && !formData.carType.trim()
                                  ? "error-input"
                                  : ""
                              } ${formData.carType ? "active" : ""}`}
                              value={formData.carType}
                              onChange={(e) =>
                                handleInputChange("carType", e.target.value)
                              }
                            />
                            <label className="form-label">Type of Car</label>
                            {formSubmitted && !formData.carType.trim() && (
                              <div className="error-message">
                                Please enter your car type.
                              </div>
                            )}
                          </div>

                          {/* Address input */}
                          <div className="form-outline form-white mb-5 col-12 px-2">
                            <input
                              type="text"
                              id="address"
                              className={`form-control form-control-lg ${
                                formSubmitted && !formData.address.trim()
                                  ? "error-input"
                                  : ""
                              } ${formData.address ? "active" : ""}`}
                              value={formData.address}
                              onChange={(e) =>
                                handleInputChange("address", e.target.value)
                              }
                            />
                            <label className="form-label">Address</label>
                            {formSubmitted && !formData.address.trim() && (
                              <div className="error-message">
                                Please enter your address.
                              </div>
                            )}
                          </div>
                        </div>
                        <ButtonMain
                          text={"Register"}
                          onClick={handleRegistration}
                        />
                      </>
                    )}
                  </div>

                  <div>
                    <p className="mb-0">
                      Already have an account?
                      <Link to="/login" className="text-main fw-bold mx-2">
                        Sign In
                      </Link>
                    </p>
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

export default Register;
