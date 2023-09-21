import React from "react";
import Button from "../../GeneralPurpose/Button";

const ProjectCard = ({ project }) => {
  return (
    <a href={project.project_url} className="tile" target="blank">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <Button label="View Code" url={project.project_url} type="link" />
    </a>
  );
};

export default ProjectCard;
