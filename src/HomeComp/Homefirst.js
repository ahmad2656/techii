import React from "react";
import Container from "react-bootstrap/Container";
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import "./Homefirst.css";
const Homefirst = () => {
  return (
    <>
      <section className="first-cont">
        <Container className="grid">
          <div className="count-1">
            <div className="social-container">
              <span>
                <BsFacebook className="social-it-icons" />
              </span>
              <span>
                <BsYoutube className="social-it-icons" />
              </span>
              <span>
                <BsInstagram className="social-it-icons" />
              </span>
              <span>
                <RiTwitterXFill className="social-it-icons" />
              </span>
            </div>
            <h5 id="it">IT SOLUTIONS</h5>
            <h2 className="t-two">
              Providing The Best Services & IT <span id="sol">Solutions</span>
            </h2>
            <p id="p-one">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed
              architecto dolorum inventore totam adipisci.
            </p>

            <button id="start-btn">Start Now</button>
          </div>

          <div>
            <img src="bulb.png" alt="" id="bulb-pic" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Homefirst;

// import React, { useState } from 'react';

// function VideoPlayer() {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const toggleVideoPlayback = () => {
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div>
//       <button onClick={toggleVideoPlayback}>
//         {isPlaying ? 'Pause' : 'Play'}
//       </button>

//       {isPlaying && (
//         <video width="320" height="240" controls>
//           <source src="your-video.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       )}
//     </div>
//   );
// }

// export default VideoPlayer;
