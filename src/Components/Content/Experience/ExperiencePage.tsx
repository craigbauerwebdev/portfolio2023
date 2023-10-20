import React, { useState, useEffect, useCallback } from "react";
import { dataTypes } from "../../../utils/dataTypes";
import getPayload from "../../../utils/getPayload";
import Tab from "./Tab";
import Slide from "./Slide";

const ExperiencePage = ({ baseUrl }) => {
  const [activeSlide, setActiveSlide] = useState("");
  const [experience, setExperience] = useState<
    {
      id: string;
      company_name: string;
      date_range: string;
      accomplishments: string;
    }[]
  >([]);

  const handleClick = (e) => {
    e.preventDefault();
    const tabNum = e.target.dataset.tab;
    if (!tabNum) {
      return;
    }
    setActiveSlide(tabNum);
  };

  const fetchExperience = useCallback(async (baseUrl: string, path: string) => {
    const response = await getPayload(baseUrl, path);
    setActiveSlide(response[0].id);
    setExperience(response);
  }, []);

  useEffect(() => {
    //calling async on useEffect forces it to return a promise instead of a cleanup function
    fetchExperience(baseUrl, dataTypes.experience);
  }, []);

  const renderedTabs = experience.map((job) => {
    return <Tab activeSlide={activeSlide} job={job} onClick={handleClick} />;
  });

  const renderedSlides = experience.map((job) => {
    return (
      <Slide job={job} activeSlide={activeSlide} />
    );
  });

  return (
    <>
      <div id="experience-page" className="experience-page">
        <h2>
          <span className="yellow">02.</span> Where I've Worked
        </h2>
        <div className="container">
          <div className="tabs">{renderedTabs}</div>

          <div className="content">{renderedSlides}</div>
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
