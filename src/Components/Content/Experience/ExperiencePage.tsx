import React, {useState} from "react";

const ExperiencePage = () => {
  const [activeSlide, setActiveSlide] = useState("1");

  const handleClick = (e) => {
    e.preventDefault();
    const tabNum = e.target.dataset.tab;
    if (!tabNum) {
      return;
    }
    setActiveSlide(tabNum);
  };

  return (
    <>
      <div id="experience-page" className="experience-page">
        <h2>
          <span className="yellow">02.</span> Where I've Worked
        </h2>
        <div className="container">
          <div className="tabs">
            <a
              style={{ background: activeSlide === "1" ? "yellow" : "grey" }}
              className="tab tab-1"
              href="#"
              onClick={(e) => handleClick(e)}
              data-tab="1"
            >
              EY
            </a>
            <a
              style={{ background: activeSlide === "2" ? "yellow" : "grey" }}
              className="tab tab-2"
              href="#"
              onClick={(e) => handleClick(e)}
              data-tab="2"
            >
              Freeman
            </a>
            <a
              style={{ background: activeSlide === "3" ? "yellow" : "grey" }}
              className="tab tab-3"
              href="#"
              onClick={(e) => handleClick(e)}
              data-tab="3"
            >
              Townsquare Media
            </a>
            <a
              style={{ background: activeSlide === "4" ? "yellow" : "grey" }}
              className="tab tab-4"
              href="#"
              onClick={(e) => handleClick(e)}
              data-tab="4"
            >
              AF&G
            </a>
            <a
              style={{ background: activeSlide === "5" ? "yellow" : "grey" }}
              className="tab tab-5"
              href="#"
              onClick={(e) => handleClick(e)}
              data-tab="5"
            >
              Freelance
            </a>

            {/* <span className="highlighter"></span> */}
          </div>

          <div className="content">
            {activeSlide === "1" && (
              <div className="content__section">
                <h2>Ernst & Young</h2>
                <h3>2022 - Present</h3>
                <ul>
                  <li>
                    Proficient Front-End Developer with a strong background in
                    creating innovative solutions using cutting-edge
                    technologies such as JavaScript, mixed reality, and
                    data-driven whiteboard models.
                  </li>
                  <li>
                    Proven ability in designing and implementing engaging user
                    experiences both virtually and in-person.
                  </li>
                  <li>
                    Skilled in utilizing React.js, Node, Sass, and other
                    relevant tools to design and implement user interfaces for
                    web and mobile applications.
                  </li>
                  <li>
                    Highly proficient in developing immersive and interactive
                    experiences within the metaverse using technologies such as
                    Unity, Unreal Engine5, C#, Spatial Unity Tool Kit, 8thWall,
                    and Blender.
                  </li>
                  <li>
                    Possesses extensive experience in creating complex visual
                    whiteboards and flowcharts using Lucid Chart and Lucid
                    Formulas to enhance business efficiency and communication.
                  </li>
                  <li>
                    Demonstrated ability to deliver high-quality solutions on
                    time and within budget, meeting the needs of clients and
                    end-users.
                  </li>
                </ul>
              </div>
            )}
            {activeSlide === "2" && (
              <div className="content__section">
                <h2>Freeman</h2>
                <h3>2020 - 2022</h3>
                <ul>
                  <li>
                    Adept at designing, developing, and maintaining new features
                    for the platform, ensuring seamless performance and bug-free
                    functionality.
                  </li>
                  <li>
                    Proven ability to work closely with project leads and
                    cross-functional teams, delivering customized solutions that
                    meet the unique needs of each project.
                  </li>
                  <li>
                    Skilled in creating reusable components and offering
                    guidance in daily stand-up meetings, streamlining processes
                    and increasing overall efficiency.
                  </li>
                  <li>
                    Possesses excellent communication and interpersonal skills,
                    fostering strong relationships with team members and
                    stakeholders to ensure project success.
                  </li>
                  <li>
                    Adept at problem-solving, quickly identifying and resolving
                    technical issues that may arise during development, ensuring
                    timely delivery of high-quality projects.
                  </li>
                  <li>
                    Continuously seeks opportunities to improve processes and
                    procedures, leveraging industry best practices to drive
                    innovation and increase productivity within the team.
                  </li>
                </ul>
              </div>
            )}
            {activeSlide === "3" && (
              <div className="content__section">
                <h2>Townsquare Media</h2>
                <h3>2015 - 2020</h3>
                <ul>
                  <li>
                    Highly skilled in leading the development, innovation, and
                    R&D initiatives for infrastructure systems, software, and
                    solutions that align with stakeholders' business needs.
                  </li>
                  <li>
                    Proven track record of successfully powering over 600
                    well-optimized media websites by improving delivery,
                    requirements gathering, and development of customized site
                    development, enhancements, new tooling, performance tuning,
                    and support of triage and bug/defect issues for complex
                    technologies.
                  </li>
                  <li>
                    Demonstrated expertise in leveraging ReactJS and PHP to
                    deliver the architecture of the new Google Amp platform and
                    develop new back-to-front features that enable thousands of
                    blog posts across 600+ sites.
                  </li>
                  <li>
                    Possesses extensive experience in developing WordPress
                    plugins to improve the platform's CMS with customized
                    dashboards and REST data.
                  </li>
                  <li>
                    Skilled in building and supporting interactive and
                    technically sophisticated HTML5 rich media ads using
                    numerous third-party APIs and creating embed codes and
                    launch files for ads with custom options and creatives,
                    utilizing Google Ad Manager and Native Apps.
                  </li>
                </ul>
              </div>
            )}
            {activeSlide === "4" && (
              <div className="content__section">
                <h2>AF&G</h2>
                <h3>2014 - 2015</h3>
                <ul>
                  <li>
                    Developed and delivered dynamic and highly functional web
                    applications, games, and front-end development using
                    cutting-edge technologies such as WordPress, JavaScript,
                    jQuery/Mobile, PHP, HTML5, CSS3, Bootstrap, Sass, and GIT.
                  </li>
                  <li>
                    Collaborated effectively with clients and cross-functional
                    teams to manage and deliver large projects, leading resource
                    allocation and task assignments to ensure on-time and
                    high-quality delivery.
                  </li>
                  <li>
                    Contributed to the success of the 4-person web development
                    team as a key player, effectively managing workload and
                    ensuring efficient project execution.
                  </li>
                  <li>
                    Optimized website components, established cross-browser
                    compatibility, and reduced loading times to enhance
                    performance and user experience.
                  </li>
                  <li>
                    Possessed a deep understanding of programming languages,
                    frameworks, and tools, and was able to leverage this
                    knowledge to deliver high-quality solutions on time and
                    within budget.
                  </li>
                  <li>
                    Demonstrated strong problem-solving skills and a commitment
                    to continuous learning and improvement, staying up-to-date
                    with the latest industry trends and best practices.
                  </li>
                </ul>
              </div>
            )}
            {activeSlide === "5" && (
              <div className="content__section">
                <h2>Freelance</h2>
                <h3>2006 - 2014</h3>
                <ul>
                  <li>
                    Collaborated with clients to understand their needs and
                    business objectives in order to design and develop custom
                    WordPress websites using full-featured WordPress and
                    ReactJS.
                  </li>
                  <li>
                    Led the development of interactive websites for clients,
                    including the design of custom WordPress websites,
                    integration of dynamic graphics, and optimization of search
                    engine rankings.
                  </li>
                  <li>
                    Worked closely with clients to identify and implement the
                    features and functionality required to meet their business
                    needs, ensuring high levels of user engagement and
                    satisfaction.
                  </li>
                  <li>
                    Developed and delivered back-end access for future
                    development and design changes, providing clients with the
                    flexibility and adaptability needed to respond to changing
                    business requirements.
                  </li>
                  <li>
                    Contributed to the development of components that enabled
                    interaction with site content, enhancing the user experience
                    and driving engagement.
                  </li>
                  <li>
                    Maintained a focus on operational functionality, ensuring
                    that websites were efficient, reliable, and able to meet the
                    needs of users and clients.
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
