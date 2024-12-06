import React, { useState, useEffect } from "react";
import "./Homesix.css"; // Create this CSS file for styling
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";
const clientData = [
  {
    image: "b3.webp",
    name: "Julia",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit numquam!",
    profession: ". Founder . ",
  },
  {
    image: "m.png",
    name: "Jane Smith",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit numquam!",
    profession: ". Manager . ",
  },

  {
    image: "mj.png",
    name: "Micky Arthour",
    comment:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit numquam!",
    profession: ". Officer . ",
  },
  // Add more client data as needed
];

const Homesix = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % clientData.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + clientData.length) % clientData.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => {
      clearInterval(timer); // Clean up the timer on unmount
    };
  }, [currentIndex]);

  return (
    <section className="six-container">
      <div className="content">
        <div className="client-slider">
          <h5 id="t-text">.TESTIMONIALS.</h5>
          <h2 id="cl-text">Customers Testmonials</h2>
          {clientData.map((client, index) => (
            <div
              key={index}
              className={`client-card ${
                index === currentIndex ? "active" : ""
              }`}
            >
              <div className="cont-frame">
                <img src={client.image} alt={client.name} id="clpics" />
              </div>
              <h3 id="cl-name">{client.name}</h3>
              <p id="comment">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                quibusdam hic pariatur! Sint, odio minus.
              </p>
              <h6 id="profession">{client.profession}</h6>
            </div>
          ))}
          <div className="nav-buttons">
            <button onClick={prevSlide} id="prev">
              <span>
                <BiSolidLeftArrow />
              </span>
            </button>
            <button onClick={nextSlide} id="next">
              <span>
                <BiSolidRightArrow />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homesix;
