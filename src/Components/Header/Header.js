const { useEffect, useState } = wp.element;
import Social from "../Social/Social";

const Header = ({ baseUrl }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(null);

  const showMenu = () => {
    setShowMobileMenu(true);
  };
  const hideMenu = () => {
    setShowMobileMenu(false);
  };

  const scrollTo = (el, menu) => {
    if (menu === "mobile") {
      setShowMobileMenu(false);
    }
    const elmntToView = document.getElementById(el);
    elmntToView.scrollIntoView();
  };

  return (
    <>
      <header>
        <img
          onClick={() => scrollTo("home-page")}
          alt="CBD logo"
          className="logo"
          src={`${baseUrl}/wp-content/themes/portfolio/images/cb-logo1.png`}
        />
        <div className="desktop-menu">
          <span className="link" onClick={() => scrollTo("about-page")}>
            <span class="number">01.</span> about me
          </span>
          <span className="link" onClick={() => scrollTo("experience-page")}>
            <span class="number">02.</span> experience
          </span>
          <span className="link" onClick={() => scrollTo("projects-page")}>
            <span class="number">03.</span> projects
          </span>
          <span className="link" onClick={() => scrollTo("contact-page")}>
            <span class="number">04.</span> contact/resume
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
                <span class="number">01.</span> about me
              </div>
              <div
                className="link"
                onClick={() => scrollTo("experience-page", "mobile")}
              >
                <span class="number">02.</span> experience
              </div>
              <div
                className="link"
                onClick={() => scrollTo("projects-page", "mobile")}
              >
                <span class="number">03.</span> projects
              </div>
              <div
                className="link"
                onClick={() => scrollTo("contact-page", "mobile")}
              >
                <span class="number">04.</span> resume
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
