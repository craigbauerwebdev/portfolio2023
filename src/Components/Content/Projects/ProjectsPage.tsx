//const { useEffect, useState } = wp.element;
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import getPayload from "../../../utils/getPayload";
import { dataTypes } from "../../../utils/dataTypes";
//import Loader from "../GeneralPurpose/Loader";

const ProjectsPage = ({ baseUrl }) => {
  //const apiBase = "https://craigbauer.dev/wp-json/cb/v1/"; //"https://craigbauer.dev/wp-json/cb/v1/"; //testing only
  const [projects, setProjects] = useState<
    {
      id: number;
      title: string;
      description: string;
      fimg_url: string;
      project_url: string;
    }[]
  >([]);

  const fetchProjects = useCallback(async (baseUrl: string, path: string) => {
    const response = await getPayload(baseUrl, path);
    setProjects(response);
  }, []);

  useEffect(() => {
    //calling async on useEffect forces it to return a promise instead of a cleanup function
    fetchProjects(baseUrl, dataTypes.projects);
  }, []);

  //console.log(projects);

  const renderedProjects = projects?.map((project) => {
    return (
      //make a card component
      <a href={project.project_url} className="tile" target="blank">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </a>
    );
  });

  return (
    <>
      <div id="projects-page" className="projects-page">
        <h2>
          <span className="yellow">03.</span> Projects
        </h2>

        <div id="projects" className="grid">
          {renderedProjects.length
            ? renderedProjects
            : "There was an issue. Please refresh the page."}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
