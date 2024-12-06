import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homefour.css";
const Homefour = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="sec-four">
        <Container>
          <div className="four-Grid">
            <div
              className="four-class"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img src="1.png" id="pic-four" alt="" />
            </div>

            <div
              className="four-class-two"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h2 id="cust-text">Why Our Customers Choose Working With Us.</h2>
              <p className="f-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. officia
                molestiae dolorum tempora cupiditate! Nesciunt tempora
                reiciendis libero voluptate!
              </p>
              <div className="f-in">
                <h3 className="counter">01.</h3>
                <div>
                  <h4 className="profession">Latest Technologies</h4>
                  <p className="ft-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.
                  </p>
                </div>
              </div>

              <div className="f-in">
                <h3 className="counter">02.</h3>
                <div className="twit-two">
                  <h4 className="profession">Uniqe Solutions</h4>
                  <p className="ft-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.
                  </p>
                </div>
              </div>

              <div className="f-in">
                <h3 className="counter">03.</h3>
                <div className="twit-two">
                  <h4 className="profession">Powerful Strategies</h4>
                  <p className="ft-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Neque repellendus minima reiciendis nobis dolore obcaecati.
                  </p>
                </div>
              </div>
              <div>
                <button className="touch-Btn ">Get in Touch</button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Homefour;
