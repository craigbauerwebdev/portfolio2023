//const { useEffect, useState } = wp.element;
import React, { useEffect, useState, useCallback } from "react";
import getPayload from "../../utils/getPayload";
import { dataTypes } from "../../utils/dataTypes";

// possibly move to app component
type pageData = {
  /*   greeting: string;
  tag_line: string;
  resume_url: string;
  contact_email: string;
  short_description: string; */
  full_bio: string;
  bio_pic: string;
  /* contact_text: string;
  bio_pic: string; */
};

const AboutPage: React.FC<{ baseUrl: string }> = ({ baseUrl }) => {
  const [data, setData] = useState<pageData>({
    /* greeting: "",
    tag_line: "",
    resume_url: "",
    contact_email: "", 
    short_description: "",*/
    full_bio: "", //only include
    bio_pic: "",
    /* contact_text: "",
    bio_pic: "", */
  });

  const fetchData = useCallback(async (baseUrl: string, path: string) => {
    const response = await getPayload(baseUrl, path);
    setData(response);
  }, []);

  useEffect(() => {
    //calling async on useEffect forces it to return a promise instead of a cleanup function
    fetchData(baseUrl, dataTypes.data);
  }, []);

  //const hasData = data.hasOwnProperty("acf");
  if (!data.full_bio) {
    return "Loading";
  }

  const { bio_pic, full_bio } = data;

  return (
    <>
      <div id="about-page" className="about-page">
        <h2>
          <span className="yellow">01.</span> About Me
        </h2>
        <div className="bio-container">
          <div className="left">
            <img alt="Craig Bauer: Front End Developer" className="biopic" src={bio_pic} />
            <div className="dev-icons">
              <img
                alt="react logo"
                className="logo"
                src={`${baseUrl}/wp-content/themes/portfolio/images/icons/react.png`}
              />
              {/* <img
                alt="redux logo"
                className="logo"
                src={`${baseUrl}/wp-content/themes/portfolio/images/icons/redux.png`}
              /> */}
              <img
                alt="react logo"
                className="logo"
                src={`${baseUrl}/wp-content/themes/portfolio/images/icons/node.png`}
              />
              <img
                alt="react logo"
                className="logo"
                src={`${baseUrl}/wp-content/themes/portfolio/images/icons/wordpress.png`}
              />
              <img
                alt="unity logo"
                className="logo"
                src={`${baseUrl}/wp-content/themes/portfolio/images/icons/unity.png`}
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
