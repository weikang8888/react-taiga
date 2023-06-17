import React, { useState } from "react";
import "./popoverVideo.css";

const Popover = () => {
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  const handlePopoverToggle = () => {
    setPopoverVisible(!isPopoverVisible);
  };

  return (
    <>
      <div className="video-wrap" onClick={handlePopoverToggle}>
        <a>
          <i className="bx bx-play"></i>
        </a>
      </div>
      {isPopoverVisible && (
        <div className="popover-container">
          <iframe
            className="popover-iframe"
            src="https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=1"
            frameBorder="0"
            allowFullScreen></iframe>
          <i className="popover-close bx bx-closet" onClick={handlePopoverToggle}></i>
        </div>
      )}
    </>
  );
};

export default Popover;
