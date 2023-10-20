import React from "react";

const Tab: React.FC<{
  job: { id: string; company_name: string };
  activeSlide: string;
  onClick: (e: any) => void;
}> = ({ job, activeSlide, onClick }) => {
  return (
    <a
      style={{
        background: activeSlide === job.id ? "yellow" : "grey",
      }}
      className="tab"
      href="#"
      onClick={(e) => onClick(e)}
      data-tab={job.id}
    >
      {job.company_name}
    </a>
  );
};

export default Tab;
