import React from "react";
import "./ServicesPage.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import * as Constant from '../../constants';
/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Services = () => {
  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main className="service-page">
        <section className="servicios" id="servicios">
          <h2 className="heading">
            <FormattedMessage id="services" defaultMessage="What I do?" />
          </h2>
          <div className="row">
            {
              Constant.WHAT_I_DO.map((element, idx) => {
                return <div key={idx} className="columns" data-aos="fade-up" data-aos-delay="200">
                          <i className={element.icon}></i>
                          <h3>
                            <FormattedMessage
                              id="design"
                              defaultMessage={element.header}
                            />
                          </h3>
                          <p>
                            <FormattedMessage
                              id="design-info"
                              defaultMessage={element.content}
                            />
                          </p>
                        </div>
              })
            }
          </div>
        </section>

        {/* <section className="preguntas">
          <h2 className="heading">
            <FormattedMessage
              id="services-questions"
              defaultMessage="WEB DEVELOPMENT FAQS"
            />
          </h2>
          <div className="accordion-container">
            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-2s"
                  defaultMessage="WHAT WILL BE REQUIRED FROM ME DURING THE DEVELOPMENT PROCESS?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p2s"
                  defaultMessage="If you want to create a website, it is important that you or your marketer are involved in the process of coordinating all stages, providing information, and giving prompt feedback."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-3s"
                  defaultMessage="HOW CAN I FIND OUT THE EXACT COST?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p3s"
                  defaultMessage="The sales department manager will give you the cost after communicating with you. Before preparing a commercial offer for you, they will conduct an interview, find out about your needs, and determine the tasks that the project should solve.

                  You will receive the final proposal with the specified cost and website development timeframe within 2-5 business days."
                />
              }
              dataAos="fade-right"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-4s"
                  defaultMessage="ON WHICH CMS DO YOU DEVELOP WEBSITES?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p4s"
                  defaultMessage="Work with CMS: WordPress, Magento, Opencart, Bitrix, Joomla, Lavalite, Custom CMS, Frameworks and Builders like Wix, Squarespace and etc."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-4s"
                  defaultMessage="HOW MUCH DOES ONGOING SUPPORT COST?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p4s"
                  defaultMessage="Web development support 25€ per hour"
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            <Accordion
              title={
                <FormattedMessage
                  id="services-questions-4s"
                  defaultMessage="DO YOU PROVIDE SEO PROMOTION AND ADVERTISING SERVICES?"
                />
              }
              content={
                <FormattedMessage
                  id="services-questions-p4s"
                  defaultMessage="Yes, that’s one of our specialties. After development, we can take care of comprehensive website promotion. We can create a marketing strategy and launch lead generation through the most effective channels for your business, such as SEO, contextual advertising, and content marketing."
                />
              }
              dataAos="fade-left"
              dataAosDelay="300"
            />

            
          </div>
        </section> */}
      </main>

      <ScrollToTop />

      <Footer />
    </div>
  );
};
export default Services;
