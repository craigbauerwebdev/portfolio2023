//const { useEffect, useState } = wp.element;
import React, { useState, useEffect } from "react";

const SplashScreen: React.FC<{ baseUrl: string }> = ({ baseUrl }) => {
  const [top, setTop] = useState("");
  const [message, setMessage] = useState("Fetching Data");

  useEffect(() => {
    let i = 0;
    setTimeout(() => {
      // change setTimeout to when data is loaded
      setTop("-100vh");
    }, 4000);
    const messages = ["Testing Code", "Compiling", "Building UI"];
    setInterval(() => {
      setMessage(messages[i]);
      i++;
    }, 1000);
  }, []);

  return (
    <>
      <div className="intro" style={{ top: top }}>
        <div className="intro-logo">
          <img
            className="pulse"
            alt="CB logo"
            src={`${baseUrl}/wp-content/themes/portfolio/images/cb-logo1.png`}
          />
          <p>{message}</p>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
