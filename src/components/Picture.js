import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p className="photographer">{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="loading..." />
      </div>
      <p className="download">
        <a target="_blank" href={data.src.large}>
          Download
        </a>
      </p>
    </div>
  );
};

export default Picture;
