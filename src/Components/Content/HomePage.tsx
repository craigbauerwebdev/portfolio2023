//import { Interface } from "readline";
import React, { useContext } from "react";
import Buttons from "../GeneralPurpose/Buttons";
import DataContext from "../../Context/pageData";
import { DataModel } from "../../Interfaces/Interfaces";

const HomePage = () => {
  const { greeting, tag_line, short_description } = useContext<DataModel>(
    DataContext
  );
  /* const scrollTo = () => {
    const elmntToView = document.getElementById("experience-page");
    elmntToView.scrollIntoView();
  }; */
  return (
    <>
      <div id="home-page" className="home-page">
        <b>
          <p className="yellow">{greeting}</p>
        </b>
        <h1>Craig Bauer.</h1>
        <h2>{tag_line}</h2>
        <p>{short_description}</p>
        <Buttons />
      </div>
    </>
  );
};

export default HomePage;
