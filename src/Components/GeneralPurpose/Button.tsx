import React from "react";

interface ButtonProps {
  label: string;
  url: string;
  type?: "email" | "link"; // Restricting `type` to valid values
}

const Button: React.FC<ButtonProps> = ({ label, url, type = "link" }) => {
  const getUrl = (url: string, type: "email" | "link") => {
    return type === "email" ? `mailto:${url}` : url;
  };

  return (
    <a
      className="lg-button"
      href={getUrl(url, type)}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>
        <b>{label}</b>
      </button>
    </a>
  );
};

export default Button;
