import React from "react";

import * as Constant from '../../constants';
import "../../pages/About/AboutPage.css";
import { Link } from "react-router-dom";
import cv from "../../cv/cv.pdf";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const About = () => (
  <section className="sobre-mi" id="sobre-mi">
    <h2 className="heading">
      <FormattedMessage id="about" defaultMessage="About me" />
    </h2>

    <div className="row container about_section">
      <div className="columns" data-aos="fade-right" data-aos-delay="300">
        <h3>
          <FormattedMessage id="im" defaultMessage="Who I am" />
        </h3>
        <h4>
          <FormattedMessage
            id="descriptions"
            defaultMessage={Constant.WHO_I_AM_TITLE}
          />
        </h4>
        {
          Constant.WHO_I_AM_CONTENT.map( (element) => {
            return <p>{element}</p>
          })
        }
        <div className="mas-info">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            download="cv.pdf"
            className="btn-codigo buttonDownload"
          >
            <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
          </a>
          <div className="mas-info-btn">
            <Link to="/about">
              <ButtomGet />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="columns col-skill"
        data-aos="fade-left"
        data-aos-delay="650"
      >
        <h3>skills</h3>
        <h4>Front-End</h4>
        <div className="skill">
          {
            Constant.FRONT_END_SKILLS.map((element) => {
              return <div>
                        <img
                          alt={element.name}
                          className="icons-skils"
                          src={element.link}
                        />
                        <h5>{element.name}</h5>
                      </div>
            })
          }
        </div>
        <h4>Back-End</h4>
        <div className="skill">
        {
            Constant.BACK_END_SKILLS.map((element) => {
              return <div>
                        <img
                          alt={element.name}
                          className="icons-skils"
                          src={element.link}
                        />
                        <h5>{element.name}</h5>
                      </div>
            })
          }
        </div>
        <h4>Mobile App & Tools</h4>
        <div className="skill">
        {
            Constant.MOBILE_SKILLS.map((element) => {
              return <div>
                        <img
                          alt={element.name}
                          className="icons-skils"
                          src={element.link}
                        />
                        <h5>{element.name}</h5>
                      </div>
            })
          }
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(About);
