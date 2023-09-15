//const { useEffect, useState } = wp.element;
import React from "react";
import Buttons from "../GeneralPurpose/Buttons";
import { useContext } from "react";
import DataContext from "../../Context/pageData";
import { DataModel } from "../../Interfaces/Interfaces";

const ContactPage: React.FC = () => {
  const { contact_text } = useContext<DataModel>(DataContext);
  return (
    <>
      <div id="contact-page" className="contact-page">
        <h2>
          <span className="yellow">04.</span> Contact/Resume
        </h2>
        <p>{contact_text}</p>
        <Buttons />
      </div>
    </>
  );
};

export default ContactPage;
