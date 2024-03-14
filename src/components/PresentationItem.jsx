import React from "react";
import { useNavigate } from "react-router-dom";

import profileimg from "../assets/profileimg.jpg";
import AboutItem from "./AboutItem";
import Icons from "./Icons";

const PresentationItem = () => {
  const navigate = useNavigate();

  const goToResume = () => {
    navigate("/contact");
  };

  return (
    <div>
      <div className="presentation">
        <div className="presentation__content">
          <div>
            <div className="heading">
              <h1>Sara Sørensen</h1>
            </div>
            <h3>Front End Developer</h3>
            <p className="descr">
              Seasoned web developer with 3 years of front-end expertise,
              dedicated to driving impactful change and enhancing user
              experiences. With a leading role in feature implementation and
              maintenance at Soolo, I've also collaborated closely with clients
              to align expectations and technological advancements for user
              satisfaction.{" "}
            </p>
            <p className="descr">
              {" "}
              Now at Gaming Innovation Group, I continue to push boundaries,
              presenting innovative solutions and refining user interfaces for
              optimal engagement.
            </p>
            <button className="btn" onClick={goToResume}>
              Contact me
            </button>
          </div>

          <img
            src={profileimg}
            className="profileimg"
            alt="portrait of a woman with brown hair"
          />
        </div>
        <div className="presentation__content--icons">
          <Icons />
        </div>
      </div>
      <AboutItem />
    </div>
  );
};

export default PresentationItem;
