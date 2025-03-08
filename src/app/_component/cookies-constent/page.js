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
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        right: "20px",
        backgroundColor: "#fff",
        padding: "15px",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: "1000",
      }}
    >
      <p style={{ fontSize: "14px", color: "#333", margin: "0" }}>
        We use cookies to improve your experience. Accept cookies for better performance.
      </p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button
          onClick={handleAccept}
          style={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Accept
        </button>
        <button
          onClick={handleReject}
          style={{
            backgroundColor: "#FF5733",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
