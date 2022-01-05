import React from "react";
import banner from "../images/1.jpg";

const Banner = () => {
  return (
    <div style={{ height: 300 }}>
      <img
        src={banner}
        width="100%"
        height="100%"
        classNameName="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </div>
  );
};

export default Banner;
