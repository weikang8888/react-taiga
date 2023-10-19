// Toast.tsx

import React from "react";
import { toast, ToastOptions } from "react-toastify";

interface ToastProps {
  message: string;
  type?: "success" | "error" | "info"; // Add more types as needed
}

const Toast: React.FC<ToastProps> = ({ message, type = "success" }) => {
  const options: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  };

  const displayToast = () => {
    switch (type) {
      case "success":
        toast.success(message, options);
        break;
      case "error":
        toast.error(message, options);
        break;
      // Add more types if needed (info, warning, etc.)
      default:
        toast(message, options);
    }
  };

  displayToast(); // Call the function to display the toast
  return null; // This component doesn't need to render anything
};

export default Toast;
