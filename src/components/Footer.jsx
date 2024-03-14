import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import {
  faArrowRight,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Icons from "./Icons";

const FooterItem = () => {
  const [validForm, setValidForm] = useState(false);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(undefined);

  const handleBackToTopClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    setEmail(emailValue);

    if (emailValue === "") {
      setValidForm(false);
    }
    if (emailValue !== "") {
      setValidForm(isValidEmail);
    }
  };

  const sendEmail = async () => {
    if (validForm) {
      try {
        await emailjs.sendForm(
          "service_iss2pt8",
          "template_f1z49rj",
          document.getElementById("footer-form"),
          "OmP-ic-IM31kcLOUS",
          {
            email,
          }
        );
        setEmailSent(true);
      } catch (error) {
        console.error("Error sending email from footer: ", error);
        setEmailSent(false);
      }

      setEmail("");
    }
  };

  return (
    <footer>
      <div className="footer-wrap">
        <div className="footer-left">
          <div className="heading">
            <h2>Sara Sørensen</h2>
          </div>
          <Icons classesIcon={"icon-footer"} />
        </div>
        <form className="footer-right" id="footer-form">
          <h3>Lets stay connected</h3>
          <div className="input-group">
            <input
              required
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
              autoComplete="off"
            />
            <button type="button" onClick={sendEmail} disabled={!validForm}>
              {emailSent === undefined && (
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className={validForm ? "valid-input" : ""}
                />
              )}
              {emailSent && (
                <FontAwesomeIcon
                  icon={faCheck}
                  style={{ color: "green" }}
                />
              )}
              {emailSent !== undefined && !emailSent && (
                <FontAwesomeIcon
                  icon={faXmark}
                  style={{ color: "red" }}
                />
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="footer-bottom">
        <div className="footer-back-to-top">
          <button onClick={handleBackToTopClick}>
            Back to Top <i class="fa fa-arrow-up"></i>
          </button>
          <hr></hr>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/projects">Portfolio</Link>
            </li>
            <li>
              <Link to="/resume">Resume</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default FooterItem;
