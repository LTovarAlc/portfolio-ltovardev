/* Seccion de Projects */

import "./projects.css";
import BARSSS from "../../assets/BARSSS.png"

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        <div className="project-container">
          <img
            src={BARSSS}
            alt="TapJoyProject mechanographicMiniGame mechanographic"
            className="project-img"
          />
          <div className="project-details">
            <h3 className="project-name">Be Another Rank SSS (DEMO)</h3>
            <p className="project-description">
                Be Another Rank SSS is a PvE RPG with a linear storyline that follows Auren, a young E-rank adventurer who begins his journey across the continent of Osmeria. Throughout his adventure, he discovers the government’s dark actions and fights to restore purity to the entire continent. This game was logically developed 100% by me, and by using assets from itch.io, I was able to bring a new fantasy world to life.
            </p>
            <div className="projects-links">
              <a
                href="https://github.com/IKarasuDev/BeAnotherRankSSS"
                target="_blank"
                rel="noreferrer"
                className="links-button"
              >
                GitHub
              </a>
              <a
                href="https://ltdeveloper.itch.io/be-another-rank-sss-demo"
                target="_blank"
                rel="noreferrer"
                className="links-button"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
        

    </section>
  );
};

export default Projects;
