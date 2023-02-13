import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollEvent = () => {
  let boxStyle = {
    width: "40%",
    height: "200px",
    fontSize: "30px",
    lineHeight: "200px",
    background: "black",
    color: "white",
    textAlign: "center",
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });

  return (
    <>
      <div>
        <div>
          <p data-aos="fade-up">AOS 테스트1</p>
        </div>
        <div style={{ height: "500px" }}></div>
        <div style={boxStyle}>
          <p data-aos="fade-up">AOS 테스트2</p>
        </div>
        <div style={{ height: "500px" }}></div>
        <div style={boxStyle} data-aos="fade-up">
          <p>AOS 테스트3</p>
        </div>
        <div style={{ height: "500px" }}></div>
      </div>
    </>
  );
};

export default ScrollEvent;
