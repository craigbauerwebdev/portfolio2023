const { useEffect, useState } = wp.element;
import getPayload from "../../utils/getPayload";
//import Loader from "../Components/GeneralPurpose/Loader";

const ProjectsPage = ({ baseUrl }) => {
  //const apiBase = "https://craigbauer.dev/wp-json/cb/v1/"; //"https://craigbauer.dev/wp-json/cb/v1/";
  const [projects, setProjects] = useState([]);

  useEffect(async () => {
    const results = await getPayload(`${baseUrl}/wp-json/cb/v1/`, "projects");
    //console.log("results", results);
    setProjects(results);
    results.map((x) => {
      console.log(x.title);
    });
  }, []);

  if (!projects || projects === []) {
    <h1>Loading</h1>;
  }

  return (
    <>
      <div id="projects-page" className="projects-page">
        <h2>
          <span class="yellow">03.</span> Projects
        </h2>

        <div id="projects" class="grid">
          <a
            href="https://github.com/craigbauerwebdev/Portfolio"
            class="tile"
            target="blank"
          >
            <h2>Fullstack Portfolio</h2>
            <p>Portfolio site built in React, Node and Mongo DB</p>
          </a>
          <a
            href="https://github.com/craigbauerwebdev/tartanbook"
            class="tile"
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
            class="tile"
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
