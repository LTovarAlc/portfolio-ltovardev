/* section about me*/

import "./aboutMe.css";

const AboutMe = ({darkMode}) => {
  return (
    <section className={`aboutMe section ${darkMode ? 'aboutMe-dark' : ''}`} id="aboutMe">
      <h2 className="section-title">About me</h2>
      <div className="aboutMe-content">
        <div className="aboutMe-text">
          <h3>Know about me</h3>
          <p>
            I am a video game developer focused on gameplay mechanics and system design. I specialize in building functional, 
            scalable, and intuitive player systems such as inventories, menus, progression, and interaction, while maintaining a strong focus on both planning and execution.
            <br />
            I am passionate about game development because it merges logic and creativity, allowing ideas to become interactive experiences. 
            I aim to contribute to projects that value technical quality, adapting to both structured production environments and independent development.
            <br />
            <br />
            I specialize in 2D and 3D development using the Godot Engine, focusing on gameplay systems, scene architecture, 
            and tool-driven workflows. Recently, I have been working on the development of a top-down fantasy RPG, building core gameplay systems, environment integration, 
            and prototype features aimed at creating a cohesive and scalable gameplay experience.
          </p>
        </div>
        <div className="aboutMe-skills" id="skills">
            <h3>Game development</h3>
            <div className={`skills-container ${darkMode ? 'skills-container-dark' : ''}`}>
                <span>Gameplay System Design</span>
                <span>Mechanic Implementation</span>
                <span>Player Interactions Systems</span>
                <span>UI/UX Gameplay Integration</span>
                <span>State Machines</span>
                <span>Event-Driven Architecture</span>
                <span>Game Loop & Game flow design</span>
            </div>
              <h3>Engine, tools and systems</h3>
            <div className={`skills-container ${darkMode ? 'skills-container-dark' : ''}`}>
                <span>Godot Engine (2D/3D)</span>
                <span>GDScript</span>
                <span>Tilemap/GridSystems</span>
                <span>Resource & Scene Managment</span>
                <span>Performance Optimization (Godot)</span>
                <span>Inventory Systems</span>
                <span>Save / Load Systems</span>
                <span>Character Controller</span>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
