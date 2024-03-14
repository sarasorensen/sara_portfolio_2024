const Modal = ({ open, title, img, list, skills, onClose }) => {

  return (
    <div className={`modal ${open ? "show" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>
          &times;
        </span>

        <div className="heading heading__modal">
          <h2>{title}</h2>
        </div>
          <img
            src={process.env.PUBLIC_URL + img}
            alt="image of project"
          />

        <h4>Skills and deliverables</h4>
        <div className="skills">
          {skills.map((li, index) => (
            <span className="badge" key={index}>
              {li}
            </span>
          ))}
        </div>
        <h4>Project description</h4>
        <ul className="modal-ul">
          {list.map((li, index) => (
            <li key={index}>- {li}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Modal;
