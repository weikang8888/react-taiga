import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { verifyEmail } from "../../apiEndpoints";
import { toast } from "react-toastify";

const Verify = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const verificationToken = queryParams.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    // Make a GET request to your server to verify the token
    verifyEmail(verificationToken)
      .then((response) => {
        // Handle the verification response here
        console.log("Verification Response:", response.data);
        toast.success("Verification Successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        const email = response.data.email || "";
        console.log("Email:", email);
        navigate("/register/moreInfo", { state: { email } });
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error during verification:", error);
      });
  }, [verificationToken, navigate]);

  return <></>;
};

export default Verify;
