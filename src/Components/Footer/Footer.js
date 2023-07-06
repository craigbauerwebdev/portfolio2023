import Social from "../Social/Social";

const Footer = ({ baseUrl }) => {
  return (
    <>
      <footer>
        {/*         
          <embed src="https://www.codewars.com/users/craigbauerwebdev/badges/small"></embed>
        */}
        <div class="social-wrapper">
          <Social />
        </div>
        {/* <img
          alt="cb logo"
          className="logo"
          src={`${baseUrl}/wp-content/themes/portfolio/images/cb-logo1.png`}
        /> */}
      </footer>
    </>
  );
};

export default Footer;
