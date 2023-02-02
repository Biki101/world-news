import React, { useContext, useEffect } from "react";
import "./contact-page.styles.scss";
import { BreadCrumbContext } from "../../context/BreadCrumbcontext";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";

const ContactPage = () => {
  const { setRoute } = useContext(BreadCrumbContext);
  useEffect(() => {
    setRoute("Home/Contact");
  }, []);
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div className="contact-container">
        <div className="contact-item">
          <form action="backend.php">
            <div className="contact-input-container">
              <label htmlFor="name">Enter Your Name:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name*"
                required
              />
            </div>
            <div className="contact-input-container">
              <label htmlFor="email">Enter Your Email:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email*"
                required
              />
            </div>
            <div className="contact-input-container">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="contact-input-container">
              <label htmlFor="message">Message:</label>
              <textarea
                cols={50}
                rows={10}
                name="message"
                id="message"
                placeholder="Your Message"
                required
              />
            </div>
          </form>
          <div className="submit-button">
            <Button variant="contained" color="success" endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </div>
        <div className="our-location">
          <div className="gmap_canvas">
            <iframe
              width="350"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Bhaktapur Nepal&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
