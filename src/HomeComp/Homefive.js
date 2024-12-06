import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homefive.css";
import Data from "./Data";
const Homefive = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [toggle, setToggle] = useState(Data);

  const filteritems = (categitems) => {
    const updateItems = Data.filter((curElem) => {
      return curElem.category === categitems;
    });
    setToggle(updateItems);
  };

  return (
    <>
      <section className="sec-five">
        <Container>
          <h2 id="port">
            Awesome <span id="por-text">Portfolio</span>
          </h2>
          <div className="btns">
            <button className="type-bt" onClick={() => setToggle(Data)}>
              All
            </button>
            <button
              className="type-bt"
              onClick={() => filteritems("Mobile Apps")}
            >
              Apps
            </button>
            <button className="type-bt" onClick={() => filteritems("Cloud")}>
              Cloud
            </button>
            <button className="type-bt" onClick={() => filteritems("Hosting")}>
              Hosting
            </button>
            <button className="type-bt" onClick={() => filteritems("Analysis")}>
              Analysis
            </button>
          </div>

          <div className="data">
            {toggle.map((elem) => {
              const { img } = elem;
              return (
                <>
                  <img
                    src={img}
                    alt=""
                    className="tog-pics"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                  />
                </>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Homefive;
