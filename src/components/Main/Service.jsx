import React from "react";

import * as Constant from '../../constants';
import "../../pages/Service/ServicesPage.css";
import { Link } from "react-router-dom";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Service = () => (
  <section className="servicios" id="servicios">
    <h2 className="heading">
      <FormattedMessage id="services" defaultMessage="What I do?" />
    </h2>
    <div className="row service_section">
    {
        Constant.WHAT_I_DO.map((element) => {
          return <div className="columns" data-aos="fade-up" data-aos-delay="300">
                    <i className={element.icon}></i>
                    <h3>
                      <FormattedMessage id="development" defaultMessage={element.header} />
                    </h3>
                    <p>
                      <FormattedMessage
                        id="development-info"
                        defaultMessage={element.content}
                      />
                    </p>
                  </div>
        })
      }
    </div>
    <div className="portafolio-btn">
      <Link to="/service">
        <ButtomGet />
      </Link>
    </div>
  </section>
);

export default React.memo(Service);
