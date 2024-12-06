import React from "react";
import "./Contact.css";
import Contactfirst from "./Contactfirst";
import Contactthird from "./Contactthird";
import Contactsecond from "./Contactsecond";
import Contactlocation from "./Contactlocation";
import Fotter from "../HomeComp/Fotter";

const Contact = () => {
  return (
    <>
      <Contactfirst />
      <Contactsecond />
      <Contactlocation />
      <Contactthird />
      <section className="f-boto">
        <Fotter />
      </section>
    </>
  );
};

export default Contact;
