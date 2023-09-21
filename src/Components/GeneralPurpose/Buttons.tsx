//const { useEffect, useState } = wp.element;
import React, { useContext } from "react";
import Button from "./Button";
import DataContext from "../../Context/pageData";
import { DataModel } from "../../Interfaces/Interfaces";

const Buttons = () => {
  const { resume_url, contact_email } = useContext<DataModel>(DataContext);
  return (
    <div className="large-buttons">
      <Button label="Resume" url={resume_url} type="link" />
      <Button label="Contact" url={contact_email} type="email" />
    </div>
  );
};

export default Buttons;
