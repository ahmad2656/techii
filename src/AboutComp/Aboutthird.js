import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdOutlineFavorite, MdSupervisorAccount } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Aboutthree.css";
const Aboutthird = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="ab-t">
        <Container>
          <div className="cards-main">
            <div
              className="card-1 cards-b"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="t1.jpg" alt="" className="b-pics" />
              <div className="names-dev">
                <h6>
                  <span>
                    <MdOutlineFavorite />
                  </span>
                  Hosting <span id="line">|</span>
                </h6>
                <h6 id="allan-text">
                  <span>
                    <MdSupervisorAccount />
                  </span>
                  Allan More
                </h6>
              </div>
              <h4 className="c-head">
                How Litespeed Technology Works To Speed Up Your Site
              </h4>
              <p className="card-para">
                Lorem ipsum dolor sit,amet consectetur adipisicing elit.Iure
                nulla dolorem, voluptates molestiae
              </p>
              <button id="carow-btn">
                Read More
                <span>
                  <FaLongArrowAltRight id="aroow-icon" />
                </span>
              </button>
            </div>
            <div
              className="card-2 cards-b"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="t2.jpg" alt="" className="b-pics" />
              <div className="names-dev">
                <h6>
                  <span>
                    <MdOutlineFavorite />
                  </span>
                  Hosting <span id="line">|</span>
                </h6>
                <h6 id="allan-text">
                  <span>
                    <MdSupervisorAccount />
                  </span>
                  Allan More
                </h6>
              </div>
              <h4 className="c-head">
                Give Your Website A New Look And Feel With Themes
              </h4>
              <p className="card-para">
                Lorem ipsum dolor sit,amet consectetur adipisicing elit.Iure
                nulla dolorem, voluptates molestiae
              </p>
              <button id="carow-btn">
                Read More
                <span>
                  <FaLongArrowAltRight id="aroow-icon" />
                </span>
              </button>
            </div>

            <div
              className="card-3 cards-b"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="t3.jpg" alt="" className="b-pics" />
              <div className="names-dev">
                <h6>
                  <span>
                    <MdOutlineFavorite />
                  </span>
                  Hosting <span id="line">|</span>
                </h6>
                <h6 id="allan-text">
                  <span>
                    <MdSupervisorAccount />
                  </span>
                  Allan More
                </h6>
              </div>
              <h4 className="c-head">
                The Role of Domain Names in SEO World Explained
              </h4>
              <p className="card-para">
                Lorem ipsum dolor sit,amet consectetur adipisicing elit.Iure
                nulla dolorem, voluptates molestiae
              </p>
              <button id="carow-btn">
                Read More
                <span>
                  <FaLongArrowAltRight id="aroow-icon" />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Aboutthird;
