import React, { useState, useEffect } from "react";
import { RxDotFilled } from "react-icons/rx";
import Container from "react-bootstrap/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Servicefirst.css"; // Create a CSS file for styling

const Servicefirst = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const items = [
    {
      title: "Service Easy to Use?",
      content:
        "Anim pariatur cliche reprehenderit enim eiusmod high life accusamus terry richardson ad squid.3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempo.",
    },
    {
      title: "How Much I Will Pay?",
      content:
        "Anim pariatur cliche reprehenderit enim eiusmod high life accusamus terry richardson ad squid.3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempo.",
    },

    {
      title: "All There Other Fees?",
      content:
        "Anim pariatur cliche reprehenderit enim eiusmod high life accusamus terry richardson ad squid.3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempo.",
    },
  ];

  const handleClick = (index) => {
    if (index === activeIndex) {
      // Clicking on the active item again will close it
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="accord-section">
      <Container>
        <div className="accord-grid">
          <div className="vect-div">
            <img
              src="qvect.png"
              alt=""
              id="qvect"
              data-aos="flip-left"
              data-aos-duration="1000"
            />
          </div>
          <h3 id="fasabr">FAQS</h3>
          <h2 id="faqs">. Frequently Asked Questions .</h2>
          <div className="accordion">
            {items.map((item, index) => (
              <div key={index} className="accordion-item">
                <div
                  className="accordion-title"
                  onClick={() => handleClick(index)}
                >
                  {item.title}
                  <span>
                    <RxDotFilled id="dot" />
                  </span>
                </div>
                <div
                  className={`accordion-content ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Servicefirst;
