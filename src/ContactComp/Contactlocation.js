import React from "react";
import Container from "react-bootstrap/Container";
import "./Contactlocation.css";
const Contactlocation = () => {
  return (
    <>
      <section className="location-section">
        <Container>
          <h2 id="find">Find Us On Google Maps</h2>
          <iframe
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            id="gmap_canvas"
            className="location"
            src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Lahore+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </Container>
      </section>
    </>
  );
};

export default Contactlocation;
