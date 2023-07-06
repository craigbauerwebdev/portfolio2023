//const { useEffect, useState } = wp.element;
//import { useDispatch, useSelector } from "react-redux";
//import Social from "../Social/Social";
import Buttons from "../GeneralPurpose/Buttons";

const HomePage = () => {
  const scrollTo = () => {
    const elmntToView = document.getElementById("experience-page");
    elmntToView.scrollIntoView();
  };
  return (
    <>
      <div id="home-page" className="home-page">
        <b>
          <p class="yellow">Hi, my name is</p>
        </b>
        <h1>Craig Bauer.</h1>
        <h2>I build things for the web.</h2>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          ReactJS, Web3 and Unity.
        </p>
        <Buttons />
      </div>
    </>
  );
};

export default HomePage;
