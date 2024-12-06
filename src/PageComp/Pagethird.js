import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import { LuMonitorPlay } from "react-icons/lu";
import { MdMovieFilter } from "react-icons/md";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { FaXbox } from "react-icons/fa";
import "./Pagethird.css";
const Pagethird = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="pagethird-p">
        <Container>
          <div className="pricing-grid">
            <div
              className="pricing-cards first-cardd"
              data-aos="slide-up"
              data-aos-duration="1000"
            >
              <span>
                <LuMonitorPlay className="cards-iconss" />
              </span>
              <h4 className="plans-details">Free Plan</h4>
              <h2 className="dollars-price " id="zeros">
                <span className="dollar-sign">$</span> 00
              </h2>
              <h5 className="per-project" id="per-zero">
                Per Project
              </h5>
              <span className="hr"></span>
              <h6 className="five-lines">150 Lorem, Ipsum Dolor.</h6>
              <h6 className="five-lines">20 Lorem Ipsum Dolor Sit.</h6>
              <h6 className="five-lines">Lorem Ipsum Dolor Sit.</h6>
              <h6 className="five-lines">Free Lorem Ipsum Dolor .</h6>
              <h6 className="five-lines">Added Lorem Ipsum Dolor.</h6>
              <button className="card-select-btn">Select Plan</button>
            </div>
            <div
              className="pricing-cards"
              data-aos="slide-up"
              data-aos-duration="2000"
            >
              <span>
                <MdMovieFilter className="cards-iconss" id="star-second-box" />
              </span>
              <h4 className="plans-details" id="two-plans">
                Standerd Plan
              </h4>
              <h2 className="dollars-price" id="eighty-five">
                <span className="dollar-sign">$</span> 85
              </h2>
              <h5 className="per-project" id="eight-per">
                Per Project
              </h5>
              <span className="hr"></span>
              <h6 className="five-lines">150 Lorem, Ipsum Dolor.</h6>
              <h6 className="five-lines">20 Lorem Ipsum Dolor Sit.</h6>
              <h6 className="five-lines">Lorem Ipsum Dolor Sit.</h6>
              <h6 className="five-lines">Free Lorem Ipsum Dolor .</h6>
              <h6 className="five-lines">Added Lorem Ipsum Dolor.</h6>
              <button className="card-select-btn">Select Plan</button>
            </div>

            <div
              className="pricing-cards third-blue-card"
              data-aos="slide-up"
              data-aos-duration="1000"
            >
              <span>
                <BsFillBoxSeamFill className="cards-iconss thir-icon" />
              </span>
              <span className="pop-line">Most Popular</span>
              <h4 className="plans-details">Pro Plan</h4>
              <h2 className="dollars-price">
                <span className="dollar-sign thir-dollar">$</span> 150
              </h2>
              <h5 className="per-project">Per Project</h5>
              <span className="hr linetwos"></span>
              <h6 className="five-lines">150 Lorem, Ipsum Dolor.</h6>
              <h6 className="five-lines">20 Lorem Ipsum Dolor Sit.</h6>
              <h6 className="five-lines">Lorem Ipsum Dolor Sit.</h6>
              <h6 className="five-lines">Free Lorem Ipsum Dolor .</h6>
              <h6 className="five-lines">Added Lorem Ipsum Dolor.</h6>
              <button className="card-select-btn thir-btn">Select Plan</button>
            </div>

            <div
              className="pricing-cards"
              data-aos="slide-up"
              data-aos-duration="2000"
            >
              <span>
                <FaXbox className="cards-iconss" />
              </span>
              <h4 className="plans-details" id="two-plans">
                Ultimate Plan
              </h4>
              <h2 className="dollars-price">
                <span className="dollar-sign">$</span> 210
              </h2>
              <h5 className="per-project">Per Project</h5>
              <span className="hr"></span>
              <h6 className="five-lines">150 Lorem, Ipsum Dolor.</h6>
              <h6 className="five-lines">20 Lorem Ipsum Dolor Sit.</h6>
              <h6 className="five-lines">Lorem Ipsum Dolor Sit.</h6>
              <h6 className="five-lines">Free Lorem Ipsum Dolor .</h6>
              <h6 className="five-lines">Added Lorem Ipsum Dolor.</h6>
              <button className="card-select-btn">Select Plan</button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Pagethird;
