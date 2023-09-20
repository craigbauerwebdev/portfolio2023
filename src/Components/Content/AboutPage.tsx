import React, { useContext } from "react";
import DataContext from "../../Context/pageData";
import { DataModel } from "../../Interfaces/Interfaces";

const AboutPage: React.FC<{ baseUrl: string }> = ({ baseUrl }) => {
  const { bio_pic, full_bio } = useContext<DataModel>(DataContext);

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
              <img
                alt="ReactJS logo"
                className="logo"
                src={`${baseUrl}/wp-content/themes/portfolio/images/icons/react.png`}
              />
              <img
                alt="Redux logo"
                className="logo"
                src={`${baseUrl}/wp-content/themes/portfolio/images/icons/redux.png`}
              />
              <img
                alt="nodeJS logo"
                className="logo"
                src={`${baseUrl}/wp-content/themes/portfolio/images/icons/node.png`}
              />
              <img
                alt="WordPress logo"
                className="logo"
                src={`${baseUrl}/wp-content/themes/portfolio/images/icons/wordpress.png`}
              />
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
