import React from "react";
import "./Pagesecond.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Container from "react-bootstrap/Container";
const Pagesecond = () => {
  return (
    <>
      <section className="plan-section">
        <Container>
          <div className="plans-grid">
            <div>
              <h6 className="plan-head">.PRICING PLANS.</h6>
              <h1 id="afford-plan-text">Affordable Pricing Plans</h1>
              <p className="afford-plan-para">
                Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit Omnis Id
                Atque Dignissimos Repellat Quae Ullam.
              </p>
            </div>
            <div>
              <button id="plan-btn">
                See All Plans
                <span>
                  <HiOutlineArrowNarrowRight id="plan-arrow" />
                </span>
              </button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Pagesecond;
