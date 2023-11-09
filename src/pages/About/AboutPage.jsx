import React from "react";

import * as Constant from '../../constants';
import "./AboutPage.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import cv from "../../cv/cv.pdf";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */
import imgabout from "../../img/avatar.jpg";

const About = () => {
  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>
      <HeaderPage />

      {/* <ParticleBackground /> */}

      <main>
        <section className="sobre-mi-seccion about_section" id="sobre-mi">
          <div className="sobre-mi-container" id="intro_section">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img avatar" />    
              <div className="cv_button">
                <a
                  href={cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="cv.pdf"
                  className="btn-codigo buttonDownload"
                >
                  <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
                </a> 
              </div>     
            </div>
            <div className="sobre-mi-info">
              <p>{Constant.ABOUT_ME}</p>
              <div className="btn-info">
                <div className="custom-btn btn-codigo" onClick={readMore}>
                  <span>Read more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              {
                Constant.FRONT_END_SKILLS.map((element) => {
                  return <div
                            className="skill-card"
                            data-aos="flip-left"
                            data-aos-delay="300"
                          >
                            <img
                              alt={element.name}
                              className="skills-img icon-li"
                              src={element.link}
                              title={element.name}
                            />
                            <h2 className="skill-name">{element.name}</h2>
                          </div>
                })
              }
              {
                Constant.BACK_END_SKILLS.map((element) => {
                  return <div
                            className="skill-card"
                            data-aos="flip-left"
                            data-aos-delay="300"
                          >
                            <img
                              alt={element.name}
                              className="skills-img icon-li"
                              src={element.link}
                              title={element.name}
                            />
                            <h2 className="skill-name">{element.name}</h2>
                          </div>
                })
              }
              {
                Constant.MOBILE_SKILLS.map((element) => {
                  return <div
                            className="skill-card"
                            data-aos="flip-left"
                            data-aos-delay="300"
                          >
                            <img
                              alt={element.name}
                              className="skills-img icon-li"
                              src={element.link}
                              title={element.name}
                            />
                            <h2 className="skill-name">{element.name}</h2>
                          </div>
                })
              }
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default About;
