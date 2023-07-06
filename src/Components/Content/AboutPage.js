//const { useEffect, useState } = wp.element;

const AboutPage = ({ baseUrl }) => {
  return (
    <>
      <div id="about-page" className="about-page">
        <h2>
          <span class="yellow">01.</span> About Me
        </h2>
        <div class="bio-container">
          <div class="left">
            <img
              alt="Craig Bauer bio pic"
              className="biopic"
              src={`${baseUrl}/wp-content/themes/portfolio/images/craig-bauer-bio-pic.jpg`}
            />
            <div class="dev-icons">
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
          <div class="right">
            <p>
              Hello! My name is Craig and I enjoy building websites and
              applications for the web. For the last 8 years I have been working
              with JS and React to build a variety of large scale applications
              on agile teams. I have also been building websites and
              applications as a freelancer since 2006.
            </p>
            <p>
              I discoverd web development in 2006 while trying to build a
              website for my band. After the site was finished I felt the need
              to build another and another. Before I new it I was studying wed
              development and computer science in school. I have since worked
              for some great companies doing what I love to do. To this day I am
              passionate about writing great code and building great products
              for users.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
