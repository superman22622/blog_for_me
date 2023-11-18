import React from "react";

import * as Constant from '../../constants';
import "./Footer.css";
import PP from "../../assets/PP.pdf";
import TOP from "../../assets/TOP.pdf";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Footer = () => {
  // Fecha
  let fecha = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>
            <FormattedMessage
              id="footer-infos"
              defaultMessage={Constant.CREATED_BY}
            />
          </p>
          <p>&copy; {fecha}. All Rights Reserved.</p>
        </div>
        <div className="redes-sociales">
          {/* <a
            href={Constant.SKYPE_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-skype"></i>
          </a>
          <a
            href={Constant.GMAIL_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fas fa-envelope"></i>
          </a>
          <a
            href={Constant.TELEGRAM_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-telegram"></i>
          </a>
          <a
            href={Constant.INSTAGRAM_ADDRESS}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a> */}
          {/* <h1>Terms of Use and Privacy Policy</h1>
          <p>Early Access to Grok</p>
          <p>We are offering a limited number of users in the United States to try out our Grok prototype and provide valuable feedback that will help us improve its capabilities before a wider release. You can join the Grok waitlist here.This release just represents the first step for xAl.Looking ahead, we have an exciting roadmap and will be rolling out new capabilities and features in the coming months.</p> */}
          <p><a href={TOP} target="_blank">Terms Of Services</a> | <a href={PP} target="_blank">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
