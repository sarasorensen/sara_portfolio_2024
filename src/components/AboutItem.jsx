import { useNavigate } from "react-router-dom";

const AboutItem = () => {
  const navigate = useNavigate();

  const goToResume = () => {
    navigate("/resume");
  };

  return (
    <section className="about">
      <div className="code" onClick={goToResume}>
        <i class="fa fa-code"></i>
      </div>
      <div>
        <div className="heading">
          <h2>About me</h2>
        </div>
        <p>
          From my job experience and education, I have knowledge of{" "}
          <span className="cta__inline-text">JavaScript</span>,{" "}
          <span className="cta__inline-text">Vue.js</span>,{" "}
          <span className="cta__inline-text">React</span> and{" "}
          <span className="cta__inline-text">SASS</span>. In addition to these
          programming languages, I have experience within graphic design using{" "}
          <span className="cta__inline-text">Adobe XD</span> and{" "}
          <span className="cta__inline-text">Illustrator</span>.
        </p>
        <p>
          In my current role, I implemented changes that made their app
          accessible, responsive, and more. I got to experience first-hand the
          fast pace of a startup company, where we created advanced new
          solutions for different markets.
        </p>
        <p>
          For collaboration with the team, I have experience with platforms such
          as <span className="cta__inline-text">Slack,</span>
          <span className="cta__inline-text"> Jira</span>,{" "}
          <span className="cta__inline-text">GitHub</span>,{" "}
          <span className="cta__inline-text">Bitbucket</span> and{" "}
          <span className="cta__inline-text">Confluence</span>.
        </p>

        <button className="btn" onClick={goToResume}>
          See resume
        </button>
      </div>
    </section>
  );
};

export default AboutItem;
