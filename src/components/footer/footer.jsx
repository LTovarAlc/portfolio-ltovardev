/* footer */

import "./footer.css";
import LinkedinIcon from "../../assets/linkedinIcon.png";
import XIcon from "../../assets/xIcon.png";
import GithubIcon from '../../assets/githubIcon.png'
import tiktokIcon from "../../assets/tik-tok.png"
import itchioIcon from "../../assets/itchio.svg"

const Footer = ({darkMode}) => {
  return (
    <footer className="footer">
      <div className="footerUp">
        <div className="principals-footer">
          <h3>Luis Tovar</h3>
          <p>
            Gaming developer specialized at mechanics, systems & project development
          </p>
        </div>
        <div className="socials-footer">
          <h3>Social</h3>
          <div className="social-Icons__container">
            <a href="https://www.tiktok.com/@lkarasu__" target="_blank">
              <img src={tiktokIcon} alt="TikTok TiktokIcon IconTiktok Icon" className={`social-icon ${darkMode ? 'social-icon__dark' : ''}`}/>
            </a>
            <a href="https://github.com/IKarasuDev" target="_blank">
              <img src={GithubIcon} alt="GitHhub GitHubIcon IconGitHub Icon" className={`social-icon ${darkMode ? 'social-icon__dark' : ''}`}/>
            </a>
            <a href="https://x.com/karasu__dev" target="_blank">
              <img src={XIcon} alt="XIcon X Twiiter TwitterIcon IconX" className={`social-icon ${darkMode ? 'social-icon__dark' : ''}`}/>
            </a>
            <a href="https://ltdeveloper.itch.io/" target="_blank">
              <img src={itchioIcon} alt="ItchIO" className={`social-icon ${darkMode ? 'social-icon__dark' : ''}`}/>
            </a>
          </div>
        </div>
      </div>
      <div className="footerDown">
        <p>&copy; Copyright 2026. Developed By <span className="footer-developer">Luis Tovar</span></p>
      </div>
    </footer>
  );
};

export default Footer;
