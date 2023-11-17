import React from "react";

import * as Constant from '../../constants';
import "./Content.css";

/* ReactScroll */
import { Link } from "react-scroll";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="contenido">
    {/* <ParticleHeaderBg /> */}
    <div className="inicio" id="inicio">
      <div className="titulo">
        {
          Constant.INTRO_HEADER.map((element, idx) => {
            return  <h1 data-aos="fade-up" data-aos-delay="500">
                      <FormattedMessage id="namess" defaultMessage={element} />
                    </h1>
          })
        }
        <p className="h_intro">{Constant.INTRO_CONTENT}</p>

        <div className="wrapper">
          <a
            className="button"
            href={Constant.SKYPE_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-skype"></i>
            </div>
            <span>Skype</span>
          </a>
          {/* <a
            className="button"
            href={Constant.GITHUB_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="icon">
              <i className="fab fa-github"></i>
            </div>
            <span>Github</span>
          </a>
          <a
            className="button"
            href={Constant.DISCORD_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <i className="fab fa-discord"></i>
            </div>
            <span>Discord</span>
          </a> */}
          <a
            className="button"
            href={Constant.TELEGRAM_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1600"
          >
            <div className="icon">
              <i className="fab fa-telegram"></i>
            </div>
            <span>Telegram</span>
          </a>
          <a
            className="button"
            href={Constant.INSTAGRAM_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            <div className="icon">
              <i className="fab fa-instagram"></i>
            </div>
            <span>Instagram</span>
          </a>
        </div>

        <Link to="sobre-mi" href="#sobre-mi">
          <div className="scroll-down"></div>
        </Link>
      </div>
    </div>
  </div>
);

export default Content;
