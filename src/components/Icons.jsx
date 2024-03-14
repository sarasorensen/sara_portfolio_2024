import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faSquareWhatsapp
} from "@fortawesome/free-brands-svg-icons";

const icons = ({ classesIcon }) =>{
    return (
        <div className="icons">
        <a
          href="https://www.linkedin.com/in/sara-s%C3%B8rensen-7b0711179/"
          target="_blank"
          rel="noopener noreferrer"
          className={`icon ${classesIcon}`}
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            aria-label="linkedin icon"
          />
        </a>
        <a
          href="https://github.com/sarasorensen/portfolio_front-end_sara"
          target="_blank"
          rel="noopener noreferrer"
          className={`icon ${classesIcon}`}
        >
          <FontAwesomeIcon
            icon={faGithubSquare}
            aria-label="github icon"
          />
        </a>
        <a
          href="mailto:sarasorensen97@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`icon ${classesIcon}`}
        >
          <FontAwesomeIcon
            icon={faSquareWhatsapp}
            aria-label="email icon"
          />
        </a>
      </div>
    )
}

export default icons;