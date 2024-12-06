import React from "react";
import "./Service.css";
import Servicesecond from "./Servicesecond";
import Homesecond from "../HomeComp/Homesecond";
import Fotter from "../HomeComp/Fotter";
import Homesix from "../HomeComp/Homesix";
import Servicefirst from "./Servicefirst";
import Servicethird from "./Servicethird";

const Service = () => {
  return (
    <>
      <Servicesecond />
      <section className="service-main">
        <Homesecond />
      </section>
      <Homesix />
      <Servicefirst />
      <Servicethird />
      <Fotter />
    </>
  );
};

export default Service;
