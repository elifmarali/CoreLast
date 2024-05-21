import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faGoogle, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import "./Footer.css";
import ThemeContext from "../context/ThemeContext";

function Footer() {
    const navigate = useNavigate();
    const {theme} =useContext(ThemeContext);
    return (
<div className={`footer ${theme ==="dark" ? theme : ""}`}>
    <ul className="footerOptions">

          <li className="footerOption">
            <button onClick={() => navigate("/certificates")} className="footerLink">
              <strong className="homeStrong">Sertifikalar</strong>
            </button>
          </li>

          <li className="footerOption">
            <button onClick={() => navigate("/hakkimizda")} className="footerLink">
              <strong className="homeStrong">Hakkımızda</strong>
            </button>
          </li>

          <li className="footerOption">
            <button onClick={() => navigate("/comunicate")} className="footerLink"><strong className="homeStrong">İletişim</strong></button>
          </li>
    </ul>

<div className="socialMedia"> 
      <div className="facebook">
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} color="white"/>
        </a>
      </div>

      <div className="twitter">
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} color="white"/>
        </a>
      </div>

      <div className="google">
        <a href="https://www.google.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGoogle} color="white"/>
        </a>
      </div>

      <div className="instagram">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} color="white"/>
        </a>
      </div>

      <div className="youtube">
        <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} color="white"/>
        </a>
      </div>
    </div>


</div>
  );
}

export default Footer;
