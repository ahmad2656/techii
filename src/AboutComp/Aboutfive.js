import React from "react";
import "./Aboutfive.css";
const Abutfive = () => {
  const images = ["s1.png", "s2.png", "s3.png", "s4.png", "s5.png", "s6.png"];

  return (
    <section className="f-portion">
      <div className="sliders">
        {images.map((image, index) => (
          <img
            id="slidess"
            className="slides-pics"
            key={index}
            src={image}
            alt=""
          />
        ))}
      </div>
    </section>
  );
};

export default Abutfive;
