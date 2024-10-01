import React, { useState, useEffect } from "react";
import FlyoutPanel from "./FlyoutPanel";

const TopBar = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [showPanel, setShowPanel] = useState(false);

  const messages = [
    "SIGN UP & GET 15% OFF",
    "FREE DELIVERY, RETURN & EXCHANGE",
    "EXTRA 5% OFF ON PREPAID ORDERS",
  ];

  const closeShowPanel = () => {
    setShowPanel(!showPanel);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-black text-white text-sm font-semibold flex justify-center items-center p-1 mx-auto">
        <span>{messages[currentMessage]}</span>
        <button
          onClick={() => setShowPanel(!showPanel)}
          className=" text-white px-4 py-2"
        >
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </button>
      </div>

      {/* Flyout Panel */}
      <FlyoutPanel showPanel={showPanel} onClose={closeShowPanel} />
    </div>
  );
};

export default TopBar;
