//const { useEffect, useState } = wp.element;
import React, { useEffect, useState } from "react";
import getPayload from "../../utils/getPayload";
import Loader from "../GeneralPurpose/Loader";

const ProjectsPage = ({ baseUrl }) => {
  //const apiBase = "https://craigbauer.dev/wp-json/cb/v1/"; //"https://craigbauer.dev/wp-json/cb/v1/"; //testing only
  const [projects, setProjects] = useState<
    {
      id: Number;
      title: String;
      description: String;
      fimg_url: String;
      project_url: String;
    }[]
  >([]);

  useEffect(() => {
    console.log(baseUrl);

    (async () => {
      console.log("Before Await");
      const results = await getPayload(`${baseUrl}/wp-json/cb/v1/`, "projects");
      console.log("Before Setting State: ", results);
      setProjects(results); // type void not assignable to the SetState
    })();
    //func();
    console.log("After Async");
    //return results;

    /* results.map((x) => {
      console.log(x); // use state in return
    }); */
  }, []);

  if (!projects) {
    <Loader />;
  }

  return (
    <>
      <div id="projects-page" className="projects-page">
        <h2>
          <span className="yellow">03.</span> Projects
        </h2>

        <div id="projects" class="grid">
          <a
            href="https://github.com/craigbauerwebdev/Portfolio"
            className="tile"
            target="blank"
          >
            <h2>Fullstack Portfolio</h2>
            <p>Portfolio site built in React, Node and Mongo DB</p>
          </a>
          <a
            href="https://github.com/craigbauerwebdev/tartanbook"
            className="tile"
            target="blank"
          >
            <h2>Tartanbook</h2>
            <p>
              Client Portal Built with React and Wordpress for choosing and
              organizing wedding vendors
            </p>
          </a>
          <a
            href="https://github.com/craigbauerwebdev/earthquaketracker"
            className="tile"
            target="blank"
          >
            <h2>Earthquake Tracker</h2>
            <p>
              Fullstack App built in React and Node totrack earthquakes from a
              public API
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
