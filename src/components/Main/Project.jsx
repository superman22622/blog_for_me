import React from "react";
import "../../pages/Project/ProjectPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Swiper */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

/* Img */
const proyectImg = require.context("../../img", true);

const Project = () => {
  return (
    <section className="proyectos" id="proyectos">
      <h2 className="heading">
        <FormattedMessage id="projects" defaultMessage="Projects" />
      </h2>
      <div
        className="proyect-site"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <Swiper
          spaceBetween={30}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="proyectos-slider mySwiper"
        >
          <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-app-18.png`)} alt="proyectos" />
            <div className="content">
              <h3>SpiceJet</h3>
              <p>SpiceJet – Book Cheap Flights</p>
              <p className="tecnologias">
                Flutter
                <span> -</span> Dart
                <span> -</span> Firebase
                <span> -</span> NodeJS
              </p>
              {/* <a href="https://https://coin-plus.vercel.app/" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-app-17.png`)} alt="proyectos" />
            <div className="content">
              <h3>InvestFar</h3>
              <p>InvestFar Real Estate - Invest </p>
              <p className="tecnologias">
                React Native
                <span> -</span> React
                <span> -</span> Firebase
                <span> -</span> Redux
                <span> -</span> TypeScript
                <span> -</span> NodeJS
                <span> -</span> MongoDB
              </p>
              {/* <a href="https://github.com/Nahuel61920/PI-DOGS-MAIN" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-11.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Build - A - Bear</h3>
              <p>Build a Bear Workshop</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
                <span> -</span> Bootstrap
              </p>
              {/* <a href="https://github.com/Nahuel61920/Spider-Man" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a> */}
            </div>
          </SwiperSlide>
          <SwiperSlide className="caja">
            <img src={proyectImg(`./proyecto-10.jpg`)} alt="proyectos" />
            <div className="content">
              <h3>Milkable</h3>
              <p>creative agency with an attention-grabbing and colorful homepage</p>
              <p className="tecnologias">
                HTML5
                <span> -</span> CSS
                <span> -</span> JavaScript
              </p>
              {/* <a href="https://github.com/Nahuel61920/ElegantHand" className="custom-btn btn-codigo" target="_blank" rel="noopener noreferrer">Repository</a> */}
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
      {/* <Link className="custom-btn btn-codigo portafolio-btn" to="/project">
                <FormattedMessage
                    id='btn-more-projects'
                    defaultMessage='More projects'
                />
            </Link> */}
      <div className="portafolio-btn">
        <Link to="/project">
          <ButtomGet />
        </Link>
      </div>
    </section>
  );
};
export default React.memo(Project);
