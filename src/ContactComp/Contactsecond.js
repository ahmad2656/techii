import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Container from "react-bootstrap/Container";
import { TbMailOpenedFilled } from "react-icons/tb";
import { BiSolidPhoneCall } from "react-icons/bi";
import "./Contactsecond.css";
const Contactsecond = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section className="cards-count">
        <Container>
          <h2 id="office">Our Offices Around The World</h2>
          <div className="country-cards">
            <div
              className="mulk-shapes first-cardd"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <h4 className="mulks">New York</h4>
              <p className="paras-mulks">
                United States, 307 Wilshire, 2nd Av. New York 3516.
              </p>
              <div className="mails">
                <h6 className="Emailss">
                  <span>
                    <TbMailOpenedFilled className="m-ico" />
                  </span>
                  Email:
                </h6>
                <h6 className="Emailss akela-m">info@example.com</h6>
              </div>
              <div className="calls">
                <h6 className="phones">
                  <span>
                    <BiSolidPhoneCall className="call-ico" />
                  </span>
                  Phone:
                </h6>
                <h6 className="phones akela-numb">+29876543210</h6>
              </div>
            </div>
            <div
              className="mulk-shapes"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <h4 className="mulks">London</h4>
              <p className="paras-mulks">
                United Kingdom, 12 Smith Town, 2nd Av. London 2159.
              </p>
              <div className="mails">
                <h6 className="Emailss">
                  <span>
                    <TbMailOpenedFilled className="m-ico" />
                  </span>
                  Email:
                </h6>
                <h6 className="Emailss akela-m">info@example.com</h6>
              </div>
              <div className="calls">
                <h6 className="phones">
                  <span>
                    <BiSolidPhoneCall className="call-ico" />
                  </span>
                  Phone:
                </h6>
                <h6 className="phones akela-numb">+969876543210</h6>
              </div>
            </div>
            <div
              className="mulk-shapes"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="mulks">Tokio</h4>
              <p className="paras-mulks">
                Japan, 307 Chinzo Appy Road, Portsika Way. Tokio 3516.
              </p>
              <div className="mails">
                <h6 className="Emailss">
                  <span>
                    <TbMailOpenedFilled className="m-ico" />
                  </span>
                  Email:
                </h6>
                <h6 className="Emailss akela-m">info@example.com</h6>
              </div>
              <div className="calls">
                <h6 className="phones">
                  <span>
                    <BiSolidPhoneCall className="call-ico" />
                  </span>
                  Phone:
                </h6>
                <h6 className="phones akela-numb">+459876543210</h6>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Contactsecond;
