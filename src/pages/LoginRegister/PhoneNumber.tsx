import React, { useState } from "react";
import "./login.css";
import ButtonMain from "../../components/Button/Button";
import "font-awesome/css/font-awesome.min.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../AuthContent";
import PhoneInput from "react-phone-input-2";
import "../../static/css/material.css";
import OTPInput from "otp-input-react"; // No need for ResendOTP if you're not using it
import LoaderDiamond from "../../components/Loader/LoaderDiamond";

const PhoneNumber = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState(""); // Renamed from "setotp"
  const [showPhoneNumberForm, setShowPhoneNumberForm] = useState(true); // Initially, show phone number form
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleVerify = () => {
    setIsLoading(true);
    // Create a data object with the user's phone number
    const userData = {
      phoneNumber: phoneNumber,
    };

    // Send a POST request to the PHP backend to request OTP
    axios
      .post("http://localhost:8080/api_taiga/users/phoneNumber", userData)
      .then((response) => {
        console.log(response.data);
        // Assuming the server responds with success, now display OTP form
        setShowPhoneNumberForm(false);
      })
      .catch((error) => {
        setError("Failed to send OTP. Please try again."); // Handle the error
        setIsLoading(false); // Stop loading
        console.error(error);
      });
  };

  const handleOtp = () => {
    setIsLoading(true);
    // Create a data object with the user's phone number and OTP
    const userData = {
      phoneNumber: phoneNumber,
      otp: otp,
    };

    // Send a POST request to the PHP backend to verify OTP
    axios
      .post("http://localhost:8080/api_taiga/users/verifyOtp", userData)
      .then((response) => {
        console.log(response.data);

        // Check if OTP verification is successful
        if (
          response.data.message ===
          "OTP verification successful. You can now log in."
        ) {
          const authToken = response.data.authToken;
          login(null, null, phoneNumber, authToken);
          navigate("/");
        } else {
          // Handle other cases if needed
          setError("Invalid OTP. Please try again.");
        }

        setIsLoading(false); // Stop loading
      })
      .catch((error) => {
        setError("Failed to verify OTP. Please try again."); // Handle the error
        setIsLoading(false); // Stop loading
        console.error(error);
      });
  };

  // Function to handle phone number input change
  const handlePhoneNumberChange = (value) => {
    if (!value.startsWith("+")) {
      setPhoneNumber("+" + value);
    } else {
      setPhoneNumber(value);
    }
  };

  return (
    <>
      <section className="gradient-custom bg-orange">
        <div className="container pb-1 pt-5rem h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-7 col-lg-5 col-xl-4">
              <div className="card bg-black text-white">
                <div className="card-body px-5 text-center">
                  {showPhoneNumberForm ? (
                    <>
                      {/* Phone number input section */}
                      <div className="mb-md-5 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                        <p className="text-white mb-5">
                          Please enter your phone number!
                        </p>
                        <div className="form-outline form-white mb-2">
                          <PhoneInput
                            country={"my"}
                            value={phoneNumber}
                            onChange={handlePhoneNumberChange}
                          />
                        </div>
                        {isLoading ? (
                          <LoaderDiamond />
                        ) : (
                          <div className="text-danger mb-2">{error}</div>
                        )}
                        <ButtonMain text={"Continue"} onClick={handleVerify} />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* OTP input section */}
                      <div className="mb-md-5 mt-md-4">
                        <h2 className="fw-bold mb-2 text-uppercase">
                          Otp Verification
                        </h2>
                        <p className="text-white mb-5">
                          Enter the OTP code sent to your phone
                        </p>
                        <OTPInput
                          value={otp}
                          onChange={setOtp}
                          autoFocus
                          OTPLength={4}
                          otpType="number"
                          disabled={false}
                          className="otp-input-wrapper"
                        />
                        {isLoading ? (
                          <div className="text-white mb-2">
                            Verifying OTP...
                          </div>
                        ) : (
                          <div className="text-danger">{error}</div>
                        )}
                        <ButtonMain text={"Verify"} onClick={handleOtp} />
                      </div>
                    </>
                  )}

                  {/* Login/Sign Up With Email link */}
                  <div>
                    <p className="mb-0">
                      Login/Sign Up With
                      <Link to="/login" className="text-main fw-bold ms-1">
                        Email
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

export default PhoneNumber;
