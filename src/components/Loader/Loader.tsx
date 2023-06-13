import React, { useEffect, useState } from "react";
import "./loader.css";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a 2-second delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="spinner">
              <div className="bounce1"></div>
              <div className="bounce2"></div>
              <div className="bounce3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null; // Render nothing once loading is complete
};

export default Loader;
