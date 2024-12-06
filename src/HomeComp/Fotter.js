import React from "react";
import Container from "react-bootstrap/Container";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";
import { FaSnapchatGhost } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import "./Footer.css";
const Fotter = () => {
  return (
    <>
      <section className="main-footer">
        <Container>
          <div className="fot-grid">
            <div className="parts-1 parts">
              <img src="log.png" alt="" id="flog" />
              <p id="lorem">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatibus facere modi possimus dignissimos, aliquam nobis
                eaque? Voluptatem magnam quisquam rem.
              </p>

              <div className="f-serch">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Email-Address"
                  className="find-bar"
                />
                <span>
                  <button id="subs-btn">Subscribe</button>
                </span>
              </div>
              <h6 id="copyright">Copyright © 2023</h6>
            </div>
            <div className="parts-two parts">
              <h5 className="main-names">Useful Links</h5>

              <div className="links-grid">
                <h6 className="fields">Google</h6>
                <h6 className="fields">Dribble</h6>
                <h6 className="fields">Linkedin</h6>
                <h6 className="fields">Wikipedia</h6>
              </div>
            </div>
            <div className="parts-t parts">
              <h5 className="main-names " id="res">
                Resources
              </h5>
              <div className="links-grid">
                <h6 className="fields">Support</h6>
                <h6 className="fields">Dashboard</h6>
                <h6 className="fields">Drivers</h6>
                <h6 className="fields">Projects</h6>
              </div>
            </div>
            <div className="parts-f parts">
              <h5 className="main-names" id="c-us">
                Contact us
              </h5>
              <div className="cont-grid">
                <h6 className="fields">
                  <span>
                    <GrMail className="contact-icons"/>
                  </span>
                  example@support.com
                </h6>
                <h6 className="fields">
                  <span>
                    <MdLocationPin className="contact-icons"/>
                  </span>
                  5 xyz st., abc, egypt.
                </h6>
                <h6 className="fields">
                  <span>
                    <BiSolidPhoneCall className="contact-icons"/>
                  </span>
                  +20123456789
                </h6>
                <div>
                  <span>
                    <BsFacebook className="fot-icons" />
                  </span>
                  <span>
                    <IoLogoWhatsapp className="fot-icons" />
                  </span>
                  <span>
                    <RiTwitterXLine className="fot-icons" />
                  </span>
                  <span>
                    <RiInstagramFill className="fot-icons" />
                  </span>
                  <span>
                    <FaSnapchatGhost className="fot-icons" />
                  </span>
                  <hr id="hr" />
                </div>
                <h6 id="privacy">Terms of Use | Privacy Policy</h6>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Fotter;
