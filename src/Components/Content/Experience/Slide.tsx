import React from "react";

const Slide: React.FC<{
  job: { id: string; company_name: string, date_range: string; accomplishments: string; };
  activeSlide: string;
}> = ({ job, activeSlide }) => {
  return (
    activeSlide === job.id && (
        <div className="content__section">
          <h2>{job.company_name}</h2>
          <h3>{job.date_range}</h3>
          <div dangerouslySetInnerHTML={{ __html: job.accomplishments }} />
        </div>
      )
  );
};

export default Slide;