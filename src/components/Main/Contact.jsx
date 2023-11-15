import React from "react";

import * as Constant from '../../constants';
import "../../pages/Contact/ContactPage.css";
/* TypedJs */
import Typical from "react-typical";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Contact = () => (
  // <section className="contactos" id="contactos">
  //   <h2 className="heading">
  //     <FormattedMessage id="contact" defaultMessage="Contact" />
  //   </h2>
  //   <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
  //     <FormattedMessage id="contact-info" defaultMessage="Contact me by: " />
  //     <Typical
  //       className="site-contacto"
  //       loop={Infinity}
  //       wrapper="b"
  //       steps={[
  //         "Gmail",
  //         1500,
  //         "Skype",
  //         1500,
  //         "Telegram",
  //         1500,
  //         "Discord",
  //         1500,
  //         "Github",
  //         1500,
  //       ]}
  //     />
  //   </h3>

  //   <div className="icons">
  //     <a
  //       href={Constant.GMAIL_ADDRESS}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       data-aos="zoom-in"
  //     >
  //       <div className="layer">
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //         <span className="fab fas fa-envelope"></span>
  //       </div>
  //       <div className="text">Gmail</div>
  //     </a>
  //     <a
  //       href={Constant.SKYPE_ADDRESS}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       data-aos="zoom-in"
  //     >
  //       <div className="layer">
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //         <span className="fab fa-skype"></span>
  //       </div>
  //       <div className="text">skype</div>
  //     </a>
  //     {/* <a
  //       href={Constant.DISCORD_ADDRESS}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       data-aos="zoom-in"
  //     >
  //       <div className="layer">
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //         <span className="fab fa-discord"></span>
  //       </div>
  //       <div className="text">Discord</div>
  //     </a>
  //     <a
  //       href={Constant.GITHUB_ADDRESS}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       data-aos="zoom-in"
  //     >
  //       <div className="layer">
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //         <span className="fab fa-github-square"></span>
  //       </div>
  //       <div className="text">GitHub</div>
  //     </a> */}
  //     <a
  //       href={Constant.TELEGRAM_ADDRESS}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       data-aos="zoom-in"
  //     >
  //       <div className="layer">
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //         <span className="fab fa-telegram"></span>
  //       </div>
  //       <div className="text">Telegram</div>
  //     </a>
  //     <a
  //       href={Constant.INSTAGRAM_ADDRESS}
  //       target="_blank"
  //       rel="noopener noreferrer"
  //       data-aos="zoom-in"
  //     >
  //       <div className="layer">
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //         <span></span>
  //         <span className="fab fa-instagram"></span>
  //       </div>
  //       <div className="text">Instagram</div>
  //     </a>
  //   </div>
  // </section>
  <section className="contactos" id="contactos">
    <h2 className="heading">
      <FormattedMessage id="contact" defaultMessage="Terms of Use and Privacy Policy" />
    </h2>
    <p>Early Access to Grok</p>
    <p>We are offering a limited number of users in the United States to try out our Grok prototype and provide valuable feedback that will help us improve its capabilities before a wider release.</p>
    <p>You can join the Grok waitlist here.</p>
    <p>This release just represents the first step for xAl.</p>
    <p>Looking ahead, we have an exciting roadmap and will be rolling out new capabilities and features in the coming months.</p>
  </section>
);

export default React.memo(Contact);
