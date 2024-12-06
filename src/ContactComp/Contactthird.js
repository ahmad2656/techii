import React from "react";
import Container from "react-bootstrap/Container";
import "./Contactthird.css";
const Contactthird = () => {
  return (
    <>
      <section className="forms-section">
        <Container>
          <div className="main-form-grid">
            <h2 id="any-ques">Have Any Questions? Let's Answer Them</h2>
            <div className="two-forms">
              <input
                type="text"
                placeholder="Name *"
                className="forms first-forms"
              />
              <div>
                <input
                  type="text"
                  placeholder="Email *"
                  className="forms first-forms"
                />
              </div>
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject *"
                className="forms second-form"
              />
            </div>
            <div>
              <textarea
                name="Your Message"
                cols="104"
                rows="8"
                className="area-text"
                placeholder="Your Message *"
              ></textarea>
            </div>
            <button id="mes-btn">Send Your Message</button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contactthird;
