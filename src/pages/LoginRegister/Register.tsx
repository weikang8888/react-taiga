import React, { useEffect, useState } from "react";
import "./login.css";
import ButtonMain from "../../components/Button/Button";
import "font-awesome/css/font-awesome.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import LoaderDiamond from "../../components/Loader/LoaderDiamond";
import PhoneInput from "react-phone-input-2";
import { useAuth } from "src/AuthContent";
import { toast } from "react-toastify";

declare global {
  interface Window {
    FB: any;
    google: {
      accounts: {
        id: {
          initialize(options: { client_id: string; callback: Function }): void;
          prompt(): void;
          renderButton(
            element: HTMLElement,
            options: { theme: string; size: string }
          ): void;
        };
      };
    };
  }
}

const Register = () => {
  const navigate = useNavigate();
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
  const [registrationStatus, setRegistrationStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      emailPattern.test(formData.email) &&
      formData.password.trim() !== "" &&
      formData.confirmPassword === formData.password &&
      formData.phoneNumber.trim() !== "" &&
      formData.carType.trim() !== "" &&
      formData.address.trim() !== ""
    );
  };

  const handleInputChange = (fieldName, value) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  const handleRegistration = () => {
    setFormSubmitted(true);

    if (isFormValid()) {
      const userData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        phoneNumber: formData.phoneNumber,
        carType: formData.carType,
        address: formData.address,
      };

      // Start loading indicator
      setIsLoading(true);

      axios
        .post("http://localhost:8080/api_taiga/users/register", userData)
        .then((registrationResponse) => {
          console.log("Registration Response:", registrationResponse.data);

          if (
            registrationResponse.data.message ===
            "Registration successful. Verification email sent."
          ) {
            toast.success("Verification Email Sent!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        })
        .catch((registrationError) => {
          console.error("Error during registration:", registrationError);
          toast.error("Register Failed!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
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

            axios
              .post("http://localhost:8080/api_taiga/users/registerFacebook", {
                facebookAccessToken: accessToken,
              })
              .then((registrationResponse) => {
                console.log(
                  "Registration Response:",
                  registrationResponse.data
                );
                const name = registrationResponse.data.name;
                const email = registrationResponse.data.email;
                login(email, name, null, null);
                toast.success("Facebook Login Successfully!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                navigate("/");
              })
              .catch((registrationError) => {
                console.error("Error during registration:", registrationError);
                toast.error("Facebook Login Failed!", {
                  position: "top-right",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
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
      axios
        .post("http://localhost:8080/api_taiga/users/registerGoogle", {
          googleAccessToken: googleIdToken, // Pass the ID token to the backend
        })
        .then((registrationResponse) => {
          console.log("Backend response:", registrationResponse.data);
          const name = registrationResponse.data.name;
          const email = registrationResponse.data.email;
          login(email, name, null, null);
          toast.success("Google Login Successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/");
        })
        .catch((error) => {
          console.error("Error making the backend request:", error);
          toast.success("Google Login Failed!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
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
        "163741164506-pkvf3cgnjnaf1h3srfuhdr2s17j63hqg.apps.googleusercontent.com",
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
      <section className="gradient-custom bg-orange">
        <div className="container pb-1 pt-5rem h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7">
              <div className="card bg-black text-white">
                <div className="card-body px-4 text-center">
                  <div className="mb-md-5 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                    <p className="text-white">
                      Sign Up For Our Taiga Auto Member
                    </p>
                    <div className="d-sm-flex justify-content-between flex-wrap mb-4">
                      {/* Name input */}
                      <div className="form-outline form-white mb-4 col-sm-6 px-2">
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
                      <div className="form-outline form-white mb-4 col-sm-6 px-2">
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
                      <div className="form-outline form-white mb-4 col-sm-6 px-2">
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
                      <div className="form-outline form-white mb-1 col-sm-6 px-2">
                        <input
                          type="password"
                          id="confirmPassword"
                          className={`form-control form-control-lg ${
                            formSubmitted &&
                            (!formData.confirmPassword.trim() ||
                              formData.confirmPassword !== formData.password)
                              ? "error-input"
                              : ""
                          } ${formData.confirmPassword ? "active" : ""}`}
                          value={formData.confirmPassword}
                          onChange={(e) =>
                            handleInputChange("confirmPassword", e.target.value)
                          }
                        />
                        <label className="form-label">Confirm Password</label>
                        {formSubmitted &&
                          (!formData.confirmPassword.trim() ||
                            formData.confirmPassword !== formData.password) && (
                            <div className="error-message">
                              Passwords do not match.
                            </div>
                          )}
                      </div>
                    </div>

                    {/* Additional Information */}
                    <h3 className="fw-bold mb-3">Additional Information</h3>
                    <div className="d-sm-flex justify-content-between flex-wrap">
                      {/* Phone Number input */}
                      <div className="form-outline form-white mb-4 col-sm-6 px-2">
                        <PhoneInput
                          country={"my"}
                          value={formData.phoneNumber}
                          onChange={(e) => handleInputChange("phoneNumber", e)}
                        />
                        {formSubmitted && !formData.phoneNumber.trim() && (
                          <div className="error-message">
                            Please enter phone number.
                          </div>
                        )}
                      </div>

                      {/* Car Type input */}
                      <div className="form-outline form-white mb-4 col-sm-6 px-2">
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

                    {isLoading ? (
                      <LoaderDiamond />
                    ) : (
                      <>
                        <ButtonMain
                          text={"Register"}
                          onClick={handleRegistration}
                        />

                        <div className="d-flex justify-content-center text-center mt-4 pt-1">
                          <a
                            href="#facebook"
                            className="text-dark px-3"
                            onClick={handleFacebookLogin}>
                            <i className="fa fa-facebook-f fa-lg custom-icon-color"></i>
                          </a>
                          <a
                            href="#google"
                            className="text-dark px-3"
                            id="signInDiv"
                            onClick={handleCustomGoogleSignIn}>
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
