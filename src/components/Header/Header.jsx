import React, { useContext } from "react";

import * as Constant from '../../constants';
import "./Header.css";
/* ReactScroll */
import { Link } from "react-scroll";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/Context";
import Photo from '../../img/header_avatar.jpg'

const Header = () => {
  // Buttom language
  const idioma = useContext(langContext);
  // Menu desplegable
  const menuDesplegable = () => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("activar");

    window.onscroll = () => {
      if (window.scrollY > 0) {
        document.querySelector(".site-header").classList.add("activar");
      } else document.querySelector(".site-header").classList.remove("activar");

      navbar.classList.remove("activar");
    };
  };

  return (
    <header className="site-header">
      <div
        id="menu-btn"
        className="fas fa-bars"
        onClick={menuDesplegable}
      ></div>

      <a href="https://redhorizonmedtech.info/" className="logo" target="_blank">
        <img src={Photo} className="header_avatar" />
        <span>{Constant.HEADER_NAME}</span>
      </a>

      <nav className="navbar">
        <Link to="inicio" spy={true} offset={-150} href="#inicio">
          <FormattedMessage id="home" defaultMessage="Home" />
        </Link>
        <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
          <FormattedMessage id="about" defaultMessage="About me" />
        </Link>
        <Link to="servicios" spy={true} offset={-150} href="#servicios">
          <FormattedMessage id="services" defaultMessage="Services" />
        </Link>
        <Link to="proyectos" spy={true} offset={-150} href="#proyectos">
          <FormattedMessage id="projects" defaultMessage="Projects" />
        </Link>
        <a href="https://www.renew360medtech.app" target="_blank">
          <FormattedMessage id="products" defaultMessage="Products" />
        </a>
        <Link to="contactos" spy={true} offset={-150} href="#contactos">
          <FormattedMessage id="contact" defaultMessage="Contact" />
        </Link>
        {/* <div id="buttons">
          <img
            onClick={() => idioma.selectLanguage("en-US")}
            src="https://nahuel61920.github.io/Portafoliovirtual/img/en.png"
            alt="EEUU"
          />
          <img
            onClick={() => idioma.selectLanguage("es-ES")}
            src="https://nahuel61920.github.io/Portafoliovirtual/img/es.png"
            alt="España"
          />
        </div> */}
      </nav>
      <div className="switch" id="switch">
        <DarkMode />
      </div>
    </header>
  );
};

export default React.memo(Header);
