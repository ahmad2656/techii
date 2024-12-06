import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import { DiSass } from "react-icons/di";
import { FaFileCode } from "react-icons/fa";
import { RiUserSearchFill } from "react-icons/ri";
import { BsClipboardDataFill } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homesecond.css";
import Scrollbtn from "./Scrol/Scrollbtn";
const Homesecond = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="Box-2">
        <Scrollbtn />
        <Container>
          <div className="g-two">
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              className="cards first-three"
            >
              <span>
                <MdOutlineDeveloperMode className="c-icons" />
              </span>
              <h2 className="fields-rt" id="devel">
                Web Development
              </h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                repellendus minima reiciendis nobis dolore obcaecati.
              </p>
              <button className="read-btn">
                Read More
                <HiArrowNarrowRight className="arrow" />
              </button>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              className="cards first-three"
            >
              <span>
                <FaConnectdevelop className="c-icons" />
              </span>
              <h2 className="fields-rt">Digital Marketing</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                repellendus minima reiciendis nobis dolore obcaecati.
              </p>
              <button className="read-btn">
                Read More
                <HiArrowNarrowRight className="arrow" />
              </button>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              className="cards first-three"
            >
              <span>
                <DiSass className="c-icons" />
              </span>
              <h2 className="fields-rt">SaaS Products</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                repellendus minima reiciendis nobis dolore obcaecati.
              </p>
              <button className="read-btn">
                Read More
                <HiArrowNarrowRight className="arrow" />
              </button>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              className="cards last-three"
            >
              <span>
                <FaFileCode className="c-icons" />
              </span>
              <h2 className="fields-rt" id="devel">
                Apps Development
              </h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                repellendus minima reiciendis nobis dolore obcaecati.
              </p>
              <button className="read-btn">
                Read More
                <HiArrowNarrowRight className="arrow" />
              </button>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              className="cards last-three"
            >
              <span>
                <RiUserSearchFill className="c-icons" />
              </span>
              <h2 className="fields-rt">SEO Services</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                repellendus minima reiciendis nobis dolore obcaecati.
              </p>
              <button className="read-btn">
                Read More
                <HiArrowNarrowRight className="arrow" />
              </button>
            </div>
            <div
              data-aos="flip-left"
              data-aos-duration="2000"
              className="cards last-three"
            >
              <span>
                <BsClipboardDataFill className="c-icons" />
              </span>
              <h2 className="fields-rt">Data Analysis</h2>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                repellendus minima reiciendis nobis dolore obcaecati.
              </p>
              <button className="read-btn">
                Read More
                <HiArrowNarrowRight className="arrow" />
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Homesecond;
