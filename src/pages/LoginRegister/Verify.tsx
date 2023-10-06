import React, { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

const Verify = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const verificationToken = queryParams.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    // Make a GET request to your server to verify the token
    axios
      .get(
        `https://backend.taiga-auto.com/api_taiga/users/verifyEmail?token=${verificationToken}`
      )
      .then((response) => {
        // Handle the verification response here
        console.log("Verification Response:", response.data);

        navigate("/login");
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error during verification:", error);
      });
  }, [verificationToken, navigate]);

  return <></>;
};

export default Verify;
