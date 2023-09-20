import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="loading-screen">
        <div className="loader-wrap center">
          <div className="loader"></div>
          <p>Just a second</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
