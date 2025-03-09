'use client';

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const CookieConsent = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");

    // Show popup only if cookies are rejected or not set
    if (consent === "rejected" || !consent) {
      setShowPopup(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set("cookieConsent", "accepted", { expires: 365 }); // Store consent for 1 year
    setShowPopup(false); // Hide popup permanently
  };

  const handleReject = () => {
    Cookies.set("cookieConsent", "rejected", { expires: 365 }); // Store rejection for 1 year
    setShowPopup(true); // Keep showing the popup
  };

  if (!showPopup) return null; // Don't render if cookies are accepted

  return (
    <div className="fixed bottom-5 left-5 right-5 md:left-10 md:right-10 bg-white p-4 shadow-lg rounded-lg flex flex-col md:flex-row justify-between items-center z-50 border border-gray-200">
      <p className="text-sm md:text-base text-gray-700 text-center md:text-left">
        We use cookies to improve your experience. Accept cookies for better performance.
      </p>
      <div className="flex gap-3 mt-3 md:mt-0">
        <button
          onClick={handleAccept}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300"
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;