import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAward } from "react-icons/fa";
import { BiSolidGame } from "react-icons/bi";
import { RiShakeHandsFill } from "react-icons/ri";
import { RiHandCoinFill } from "react-icons/ri";
import Container from "react-bootstrap/Container";
import "./Homethird.css";
const Homethird = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="third-section">
        <Container>
          <div className="third-grid">
            <div
              className="two-main-parts"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2 id="trust-text">Trusted By Worldwide Clients Since 1980.</h2>
              <p className="main-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                officia molestiae dolorum tempora cupiditate! Nesciunt tempora
                reiciendis libero voluptate!
              </p>

              <div className="in-one">
                <div>
                  <h3 className="cl-names">
                    <span>
                      <FaAward className="third-iconss" />
                    </span>
                    First On Field
                  </h3>
                  <p className="two-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, iste
                  </p>
                </div>

                <div>
                  <h3 className="cl-names">
                    <span>
                      <BiSolidGame className="third-iconss" />
                    </span>
                    Easy To Reach
                  </h3>
                  <p className="two-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, iste
                  </p>
                </div>
              </div>

              <div className="in-two">
                <div>
                  <h3 className="cl-names">
                    <span>
                      <RiShakeHandsFill className="third-iconss" />
                    </span>
                    World Service
                  </h3>
                  <p className="two-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, iste
                  </p>
                </div>

                <div>
                  <h3 className="cl-names">
                    <span>
                      <RiHandCoinFill className="third-iconss" />
                    </span>
                    24/7 Support
                  </h3>
                  <p className="two-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, iste
                  </p>
                </div>

                <div>
                  <button className="tou-bt">Get in Touch</button>
                </div>
              </div>
            </div>

            <div
              className="two-main-pic"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img src="3.png" alt="" id="pic-three" />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Homethird;
