import React, { useContext, useEffect } from "react";
import "./about-page.styles.scss";
import { BreadCrumbContext } from "../../context/BreadCrumbcontext";

const AboutPage = () => {
  const { setRoute } = useContext(BreadCrumbContext);
  useEffect(() => {
    setRoute("Home/About");
  });
  return (
    <div className="container">
      <h1>About US</h1>
      <div className="about-container">
        <div className="about-content">
          Welcome to our news website! We are dedicated to providing accurate
          and up-to-date information to our readers. Our team of experienced
          journalists and editors work around the clock to bring you the latest
          news from around the world, covering a wide range of topics including
          politics, business, technology, sports, and more.
          <br />
          <br />
          We believe in transparency and fairness in our reporting, and strive
          to provide balanced and impartial coverage of events. Our goal is to
          inform and educate, and we aim to do so in an engaging and accessible
          manner.
          <br />
          <br />
          We value the opinions of our readers and welcome feedback and
          suggestions. Our website is designed to be user-friendly and
          accessible, making it easy for you to stay informed and connected with
          the world.
          <br />
          <br />
          Thank you for choosing us as your source of news and information. We
          are committed to delivering high-quality journalism and hope you will
          join us on this journey.
        </div>
        <div className="our-location">
          <div className="gmap_canvas">
            <iframe
              width="300"
              height="400"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Suryabinayak%20Bhaktapur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
