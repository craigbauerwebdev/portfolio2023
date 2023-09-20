import React, { useContext } from "react";
import DataContext from "../../Context/pageData";
import { DataModel } from "../../Interfaces/Interfaces";

const AboutPage: React.FC<{ baseUrl: string }> = ({ baseUrl }) => {
  const { bio_pic, full_bio, tech_logos } = useContext<DataModel>(DataContext);

  return (
    <>
      <div id="about-page" className="about-page">
        <h2>
          <span className="yellow">01.</span> About Me
        </h2>
        <div className="bio-container">
          <div className="left">
            <img
              alt="Craig Bauer: Front End Developer"
              className="biopic"
              src={bio_pic}
            />
            <div className="dev-icons">
              {tech_logos?.tech_logo_1 && (
                <img
                  alt="tech logo"
                  className="logo"
                  src={tech_logos?.tech_logo_1}
                />
              )}
              {tech_logos?.tech_logo_2 && (
                <img
                  alt="tech logo"
                  className="logo"
                  src={tech_logos?.tech_logo_2}
                  //src={`${baseUrl}/wp-content/themes/portfolio/images/icons/redux.png`}
                />
              )}
              {tech_logos?.tech_logo_3 && (
                <img
                  alt="tech logo"
                  className="logo"
                  src={tech_logos?.tech_logo_3}
                  //src={`${baseUrl}/wp-content/themes/portfolio/images/icons/node.png`}
                />
              )}
              {tech_logos?.tech_logo_4 && (
                <img
                  alt="tech logo"
                  className="logo"
                  src={tech_logos?.tech_logo_4}
                  //src={`${baseUrl}/wp-content/themes/portfolio/images/icons/wordpress.png`}
                />
              )}
            </div>
          </div>
          <div className="right">
            <div dangerouslySetInnerHTML={{ __html: full_bio }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
