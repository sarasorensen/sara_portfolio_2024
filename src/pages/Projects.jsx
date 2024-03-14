import React, { useState, useEffect } from "react";
import Modal from "../components/modal";
import starwarsImage from "../assets/starwars.png";
import devicesImage from "../assets/devices.png";
import mapImage from "../assets/map-pop.png";
import onboarding from "../assets/onboarding.png";
import chart from "../assets/chartJs.png";
import characters from "../assets/characters.png";
import json from "../assets/json.png";

const Projects = () => {
  const [currentModalIndex, setCurrentModalIndex] = useState(0);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    console.log(hover);
  }, [hover]);

  const projectsData = [
    {
      title: "Table",
      imgSrc: starwarsImage,
      list: [
        "Create a sortable table using API",
        "Each column must be sortable by character",
        "Table needs to be searchable",
        "Project must utilize Vue, Vuex & Sass",
      ],
      skills: ["Vue", "Vuex", "SASS", "CSS", "SCSS", "JavaScript"],
    },
    {
      title: "Devices",
      imgSrc: devicesImage,
      list: [
        "Create a sortable table for devices using API",
        "Each column must be sortable by character",
        "Table needs to be searchable",
        "Needs to have a filter function above, with given filters including a filter for displaying my favorites",
        "Project must utilize Vue, Vuex & Sass",
      ],
      skills: ["Vue", "Vuex", "SASS", "CSS", "SCSS", "JavaScript"],
    },
    {
      title: "Maps",
      imgSrc: mapImage,
      list: [
        " Implement a Google Map which displays all devices with markers on the map.",
        "The markers should be different colors depending on the devices battery percentage.",
        "The markers should be clickable, displaying name and address. There should only be one window open at a time, and any click outside the window should close it.",
      ],
      skills: [
        "Map Illustration",
        "Google Maps",
        "Google Maps API",
        "Vue",
        "Vuex",
        "SASS",
        "CSS",
        "SCSS",
        "JavaScript",
      ],
    },
    {
      title: "Onboarding",
      imgSrc: onboarding,
      list: ["Image of form input for device onboarding"],
      skills: ["React", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Chart JS",
      imgSrc: chart,
      list: ["Chart displaying calendar and volume"],
      skills: ["React", "JavaScript", "Chart.js", "CSS"],
    },
    {
      title: "Graphics",
      imgSrc: characters,
      list: ["Graphic illustrations of characters from game of thrones"],
      skills: ["Illustrator", "Graphic Design", "User Experience", "UX"],
    },
    {
      title: "JSON editor",
      imgSrc: json,
      list: [
        "Create a JSON editor for admin users",
        "Editor must display data from provided API",
        "Changes in editor should be saved and change previous data from said API",
        "Must be responsive",
      ],
      skills: [
        "Vue",
        "JSON",
        "JSON editor",
        "JavaScript",
        "CSS",
        "SCSS",
        "SASS",
        "Responsive Design",
        "UX/ UI",
      ],
    },
  ];

  const handleModalIndexChange = (index) => {
    setCurrentModalIndex(index);
  };

  const closeModal = () => {
    setCurrentModalIndex(0);
  };

  return (
    <section className="projects">
      <div className="heading">
        <h1>Portfolio</h1>
      </div>
      <div className="flex-box">
        {projectsData.map((project, index) => (
          <section
            key={index}
            className="project"
            onClick={() => handleModalIndexChange(index + 1)}
          >
            <div className="img-wrap">
              <img
                src={project.imgSrc}
                alt={project.title}
                className={`modal-img ${hover ? "hover" : ""}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              />
              {hover && <div className="title-overlay">{project.title}</div>}
            </div>
          </section>
        ))}
      </div>

      {currentModalIndex !== 0 && (
        <Modal
          open={true}
          onClose={closeModal}
          title={projectsData[currentModalIndex - 1].title}
          img={projectsData[currentModalIndex - 1].imgSrc}
          list={projectsData[currentModalIndex - 1].list}
          skills={projectsData[currentModalIndex - 1].skills}
        />
      )}
    </section>
  );
};

export default Projects;
