//const { useEffect, useState } = wp.element;

const ProjectsPage = ({ baseUrl }) => {
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
