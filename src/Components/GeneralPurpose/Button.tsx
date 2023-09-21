import React from "react";

const Button = ({ label, url, type }) => {
  const getUrl = (url: string, type: string) => {
    if (type === "email") {
      return `mailto:${url}`;
    }
    return url;
  };
  return (
    <a className="lg-button" href={getUrl(url, type)} target="_blank">
      <button>
        <b>{label}</b>
      </button>
    </a>
  );
};

export default Button;
