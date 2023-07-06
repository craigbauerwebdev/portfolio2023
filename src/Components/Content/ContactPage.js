//const { useEffect, useState } = wp.element;
import Buttons from "../GeneralPurpose/Buttons";

const ContactPage = ({ baseUrl }) => {
  return (
    <>
      <div id="contact-page" className="contact-page">
        <h2>
          <span class="yellow">04.</span> Contact/Resume
        </h2>
        <p>
          Please feel free to contact me with new opportunities or download my
          resume below.
        </p>
        <Buttons />
      </div>
    </>
  );
};

export default ContactPage;
