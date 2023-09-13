//const { useEffect, useState } = wp.element;
import React, { useState } from "react";
import Social from "../Social/Social";

interface HeaderProps {
  baseUrl: string;
}

const Header: React.FC<HeaderProps> = ({ baseUrl }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const showMenu = () => {
    setShowMobileMenu(true);
  };
  const hideMenu = () => {
    setShowMobileMenu(false);
  };

  const scrollTo = (page: string, menuType: string) => {
    if (menuType === "mobile") {
      setShowMobileMenu(false);
    }
    const elmntToView = document.getElementById(page)!;
    elmntToView.scrollIntoView();
  };

  return (
    <>
      <header>
        <img
          onClick={() => scrollTo("home-page", "desktop")}
          alt="CBD logo"
          className="logo"
          src={`${baseUrl}/wp-content/themes/portfolio/images/cb-logo1.png`}
        />
        <div className="desktop-menu">
          <span
            className="link"
            onClick={() => scrollTo("about-page", "desktop")}
          >
            <span className="number">01.</span> about me
          </span>
          <span
            className="link"
            onClick={() => scrollTo("experience-page", "desktop")}
          >
            <span className="number">02.</span> experience
          </span>
          <span
            className="link"
            onClick={() => scrollTo("projects-page", "desktop")}
          >
            <span className="number">03.</span> projects
          </span>
          <span
            className="link"
            onClick={() => scrollTo("contact-page", "desktop")}
          >
            <span className="number">04.</span> contact/resume
          </span>
          <Social />
        </div>

        <div className="mobile-menu-icon">
          {!showMobileMenu && <span onClick={showMenu}>&#9776;</span>}
          {showMobileMenu && (
            <span className="close" onClick={hideMenu}>
              &times;
            </span>
          )}
        </div>
      </header>
      <div className="mobile-menu-wrap">
        {showMobileMenu && (
          <div className="mobileMenu">
            <div className="mobile-menu">
              <div
                className="link"
                onClick={() => scrollTo("about-page", "mobile")}
              >
                <span className="number">01.</span> about me
              </div>
              <div
                className="link"
                onClick={() => scrollTo("experience-page", "mobile")}
              >
                <span className="number">02.</span> experience
              </div>
              <div
                className="link"
                onClick={() => scrollTo("projects-page", "mobile")}
              >
                <span className="number">03.</span> projects
              </div>
              <div
                className="link"
                onClick={() => scrollTo("contact-page", "mobile")}
              >
                <span className="number">04.</span> resume
              </div>
              <Social />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
