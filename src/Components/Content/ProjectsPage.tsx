//const { useEffect, useState } = wp.element;
import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
//import getPayload from "../../utils/getPayload";
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

  // move to external file and make reusable
  const getPayload = useCallback(async (baseUrl: string, path: string) => {
    const response = await axios.get(`${baseUrl}/wp-json/cb/v1/${path}`);
    setProjects(response.data);
  }, []);

  useEffect(() => {
    getPayload(baseUrl, "projects");
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
          {renderedProjects}
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
