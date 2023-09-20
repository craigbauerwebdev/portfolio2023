//const { useEffect, useState } = wp.element;
import React, { useContext } from "react";
import DataContext from "../../Context/pageData";
import { DataModel } from "../../Interfaces/Interfaces";

const Buttons = (baseUrl) => {
  const { resume_url, contact_email } = useContext<DataModel>(DataContext);
  return (
    <div class="large-buttons">
      <a href={resume_url} target="_blank">
        <button>
          <b>Resume</b>
        </button>
      </a>
      <a href={`mailto:${contact_email}`}>
        <button>
          <b>Contact</b>
        </button>
      </a>
    </div>
  );
};

export default Buttons;
