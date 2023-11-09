import React, { useState } from 'react'
import './ProjectPage.css';

/* Modal */
import Modal from "./Modal";

/* React router */
import { NavLink } from 'react-router-dom';

/* Componet */
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

/* Img */
const proyectsImgApp = require.context('../../img', true);

function Project() {
    const [estadoModal18, cambiarEstadoModal18] = useState(false);
    const [estadoModal17, cambiarEstadoModal17] = useState(false);
    const [estadoModal16, cambiarEstadoModal16] = useState(false);
    const [estadoModal15, cambiarEstadoModal15] = useState(false);
    const [estadoModal14, cambiarEstadoModal14] = useState(false);
    const [estadoModal13, cambiarEstadoModal13] = useState(false);
    const [estadoModal12, cambiarEstadoModal12] = useState(false);
    const [estadoModal11, cambiarEstadoModal11] = useState(false);
    const [estadoModal10, cambiarEstadoModal10] = useState(false);
    const [estadoModal9, cambiarEstadoModal9] = useState(false);

    return (
        <div>

            <HeaderPage />

            <ParticleBackground />

            <main>
                <section className="proyectos mas-proyect" id="proyectos">
                    <h1 className="heading">
                        <FormattedMessage
                            id='projects'
                            defaultMessage='Projects'
                        />
                    </h1>
                    <nav className="navbar nav-proj">
                        <NavLink to="/project/" offset={-150} duration={500}>
                            apps
                        </NavLink>
                        <NavLink to="/project/web" offset={-150} duration={500}>
                            websites
                        </NavLink>
                        <NavLink to="/project/design" offset={-150} duration={500}>
                            design
                        </NavLink>
                        {/* <NavLink to="/project/game" offset={-150} duration={500}>
                            <FormattedMessage
                                id='games'
                                defaultMessage='games'
                            />
                        </NavLink> */}
                    </nav>
                </section>
                <section className="projects__grid">
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal18(!estadoModal18)}>
                            <img src={proyectsImgApp(`./proyecto-app-18.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal17(!estadoModal17)}>
                            <img src={proyectsImgApp(`./proyecto-app-17.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal16(!estadoModal16)}>
                            <img src={proyectsImgApp(`./pro_app/a_1.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal15(!estadoModal15)}>
                            <img src={proyectsImgApp(`./pro_app/a_2.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal14(!estadoModal14)}>
                            <img src={proyectsImgApp(`./pro_app/a_3.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal13(!estadoModal13)}>
                            <img src={proyectsImgApp(`./pro_app/a_4.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal12(!estadoModal12)}>
                            <img src={proyectsImgApp(`./pro_app/a_5.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal11(!estadoModal11)}>
                            <img src={proyectsImgApp(`./pro_app/a_6.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal10(!estadoModal10)}>
                            <img src={proyectsImgApp(`./pro_app/a_7.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                    <div className="projects__item">
                        <a onClick={() => cambiarEstadoModal9(!estadoModal9)}>
                            <img src={proyectsImgApp(`./pro_app/a_8.png`)} alt="" className="projects__img" />
                        </a>
                    </div>
                </section>
            </main>

            <Modal
                estado={estadoModal18}
                cambiarEstado={cambiarEstadoModal18}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-18-com.png`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <h1>Acorns: Save & Invest</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-18-p1'
                                    defaultMessage="Acorns helps you invest and save for your future. With over 20 million downloads and $15+ billion invested for our customers since launch, we are an ultimate investing and money-saving app. Get started in minutes, and give your money a chance to grow.

                                    “Investing is now made for everyone.” - Forbes (1)
                                    
                                    Invest, save, learn and grow with Acorns. Receive the tools to help your money grow.
                                    
                                    + INVEST FOR YOUR FUTURE - Your money is automatically invested into one of our diversified, ETF portfolios, built by experts and recommended for you. Plus, easily personalize your investments with a Bitcoin-linked ETF and a Custom Portfolio option which allows you to invest in stocks from a list of 100+ public U.S. companies. At Acorns, we keep diversification in mind with the belief it can help you make the most of your money.
                                    
                                    +INVEST THE CHANGE® - Invest spare change with automatic Round-Ups®, and invest money in the background of life with recurring investments.
                                    
                                    + INVEST FOR YOUR KIDS - With Acorns Early, you can start investing for the future of your loved ones. Our UTMA / UGMA investment account for kids features custom Earn rewards and education for families. Invest automatically into a diversified, ETF portfolio, built by experts.
                                    
                                    + TEACH YOUR KIDS MONEY SKILLS - GoHenry is a debit card and learning app for kids that helps them grow their money skills. Kids get their own debit card and can earn money with automatic allowance and chore payments. Parents can set spending limits, get real-time notifications when your kids use their card, and instantly send money to your kid’s account. Valued at up to $9.98/mo, GoHenry comes included with an Acorns Premium subscription.
                                    
                                    + INVEST FOR RETIREMENT - Save money for retirement with our easy IRA investing options, featuring SEP, Traditional, and Roth plans.
                                    
                                    + BANK SMARTER - Get an Acorns Checking account and a heavy metal debit card that invests your spare change when you spend and automatically invests a portion of every paycheck. Get paid up to 2 days early when you set up direct deposit with Acorns Checking. Set an Emergency Fund goal and automatically start saving a piece of each paycheck.
                                    
                                    + EARN REWARDS - Shop 15,000+ brands and receive bonus investments and exclusive deals from your favorite brands. Earn limited-time referral bonuses of up to $1,200. The more you earn, the more you can save and invest! Plus, try our Acorns Earn Safari Extension to automatically earn rewards while you shop.
                                    
                                    + GROW YOUR KNOWLEDGE - Custom financial literacy content right in your app. Learn how to grow your money, investment and savings strategies, and more.
                                    
                                    SAVE AND INVEST RESPONSIBLY WITH A MISSION-LED PARTNER
                                    
                                    MISSION: With benevolence and courage, we look after the financial best interests of the up-and-coming, beginning with the empowering, proud step of micro-investing.
                                    
                                    INVESTING PHILOSOPHY: The time-tested power of compounding, diversification, and sticking with it gives your money a chance to grow long-term.
                                    
                                    BACKED BY: Investors like Blackrock, PayPal, Dwayne Johnson, and Ashton Kutcher.
                                    
                                    SECURITY: Acorns Securities, LLC is a member of SIPC. Securities in your account are protected up to $500,000. For details, please see www.sipc.org. SIPC does not protect against market risk, which is the risk inherent in a fluctuating market. Acorns checking accounts are FDIC-insured up to $250,000 through Lincoln Savings Bank or nbkc bank, Members FDIC, plus fraud protection, 256-bit data encryption, and all-digital card lock. Learn more about how FDIC protection works at www.fdic.gov.
                                    
                                    NO HIDDEN FEES
                                    
                                    Starts at $3 a month.
                                    
                                    We bundle our products, tools, and education into straightforward subscription tiers so you can stay focused on investing for the long term.
                                    
                                    From acorns, mighty oaks do grow. Download Acorns now and grow your oak!
                                    
                                    —————————————
                                    Disclosures are available in the images above and at www.acorns.com/disclosures
                                    
                                    Sources:
                                    1. https://bit.ly/3iSAjhs
                                    
                                    5300 California Ave Irvine CA 92617"
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-18-p2'
                                    defaultMessage='The application has an authentication system, so that the user can access their account and carry out the operations they want, it also has a section where you can see the evolution of the different cryptocurrencies.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>WebSite Link:</span> <a href="https://www.acorns.com/" target="_blank">https://www.acorns.com/</a><br/>
                                <span>App Link:</span> <a href="https://play.google.com/store/apps/details?id=com.acorns.android&hl=en&gl=US&pli=1" target="_blank">https://play.google.com/store/apps/details?id=com.acorns.android&hl=en&gl=US&pli=1</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec-2">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal17}
                cambiarEstado={cambiarEstadoModal17}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview"><img src={proyectsImgApp(`./proyecto-app-17-com.png`)} alt="" /></div>
                        <div className="eins-modal-text">
                            <h1>MyFitnessPal: Calorie Counter</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage="Track progress toward your nutrition, fitness, and weight loss goals with MyFitnessPal. This all-in-one food tracker, calorie counter, macro tracker, and fitness tracker is like having a nutrition coach, meal planner, fitness tracker & food diary with you every day.

                                    MyFitnessPal is a health and nutrition app that helps you learn about your food habits, monitor your diet, make smarter diet choices, and conquer your fitness goals.
                                    
                                    Download our health and nutrition app and start your free 30-day Premium trial to gain access to exclusive food tracker and fitness logging tools, expert guidance, and the calorie counter. You’ll soon discover why MyFitnessPal is the #1 nutrition and food tracker in the U.S and has been featured in the New York Times, Wall Street Journal, the Today Show, and U.S. News & World Report.
                                    
                                    
                                    SO MUCH MORE THAN A CALORIE
                                    COUNTER & DIET JOURNAL
                                    
                                    The leading health and nutrition app is like having a fitness tracker, macros counter, diet planner, and nutrition coach at your fingertips."
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Website Link:</span> <a href="https://www.myfitnesspal.com/" target="_blank">https://www.myfitnesspal.com/</a><br/>
                                <span>App Link:</span> <a href="https://play.google.com/store/apps/details?id=com.myfitnesspal.android&hl=en_US&gl=US" target="_blank">https://play.google.com/store/apps/details?id=com.myfitnesspal.android&hl=en_US&gl=US</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="" />
                                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" alt="" />
                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal16}
                cambiarEstado={cambiarEstadoModal16}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_1.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_1_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>Playnxt</h1>
                            <h1>Role</h1>
                            <p>Flutter Project Development and Maintenance for Ever.fm</p>
                            <h1>Project Goal</h1>
                            <p>The premium video game backlog management app. “What should I play next?”</p>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage='Ever finish a video game and have a hard time deciding what to play next? Well, Playnxt is the premium backlog management app that helps to answer that question. Along with a continuously updated database of games to search from to help maintain your gaming library digitally, other features include:

                                    - Unlimited number of created backlogs
                                    
                                    - Unlimited number of wishlists
                                    
                                    - Ability to follow, chat, and share games with friends
                                    
                                    - Dynamic stats to keep track of the games in your backlogs and wishlists
                                    
                                    - A fun Playnxt Tool'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://apps.apple.com/in/app/playnxt/id6444549960" target="_blank">https://apps.apple.com/in/app/playnxt/id6444549960</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    React Native, Fire CMS, Firebase, bitrise, fastlane, App Center, AppsFlyer, Google cloud
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal15}
                cambiarEstado={cambiarEstadoModal15}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_2.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_2_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>HairGo - Beauty At Home</h1>
                            <h1>Role</h1>
                            <p>Flutter Project Development and Maintenance for Ever.</p>
                            <h1>Project Goal</h1>
                            <p>HairGo is the app dedicated to those who want to book a professional in their home.</p>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage='HairGo is the first beauty app based of the health of the people.


                                    The application par excellence of beauty at home, you can choose
                                    
                                    among the workers registered in your area according to your
                                    
                                    preferences: price ranges, distance, reviews and photos!
                                    
                                    There are many categories and services that you can request
                                    
                                    from the comfort of your home to your home, such as hair, nails,
                                    
                                    massage, makeup.
                                    
                                    The possibility of chatting with the worker makes everything
                                    
                                    easier and faster, the payment is safe and if the requested work
                                    
                                    is not carried out there will be a refund.
                                    
                                    It has never been so easy, safe and fast to have the beauty at
                                    
                                    home.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://apps.apple.com/in/app/hairgo/id1641454016" target="_blank">https://apps.apple.com/in/app/hairgo/id1641454016</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    Kotlin, Swift, NodeJS, Firebase, codemagic, fastlane, branch, Google cloud
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal14}
                cambiarEstado={cambiarEstadoModal14}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_3.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_3_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>Playback Hitz</h1>
                            <h1>Role</h1>
                            <p>Flutter Project Development and Maintenance for a Seamless Mobile App Experience</p>
                            <h1>Project Goal</h1>
                            <p>The Playback Hitz app is a voice activated app which will connect you with many songs from different genres and eras based on your desire and command.</p>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage='The Playback Hitz app is a voice activated app which will connect you with many songs from different genres and eras based on your desire and command. Playback Hitz invites you to listen and experience a great variety of the music of the past, present and future. Playback Hitz is your multi-generational premiere music source giving you access to top hits from the Baby Boomers, Generation X, Millennials, to todays Generation Alpha era.


                                    Have you ever heard a song on the radio, motion picture soundtracks, video game playlists or elsewhere and it brought you an immense feeling of nostalgia? Even goosebumps? Perhaps it took you back to a childhood memory, a first date or first dance? You’ve probably wondered while experiencing those private sentiments how you may be able to access those songs at anytime and continue to relive those special and touching moments in your life. Today there is an app that will take you back not only on that journey but will also connect you with all the recorded history of those artists who perform your favorite songs. Introducing, the Playback Hitz app.
                                    
                                    
                                    You choose what you are interested in from many different categories including, Rock, Pop Rock, R&B, Country, Jazz, Alternative, Classical, Gospel, Rap and more. The specially designed search engine will also upon your instruction share with you all of the recorded history of the artists including concerts, interviews, bios, photos, upcoming tours and more. You can also select any of your favorite artist’s musical collaborations and be able to link to those artists history of recordings as well.
                                    
                                    
                                    In the words of Playback Hitz creator and music enthusiast, Laverne Cook, “I created this app because there is not enough quality information on artist that can be easily accessed. With Playback Hitz at your fingertips that entire world and more will open up to you.” For a small subscription fee you will relive the music and hits you grew up on while also enjoying the music of today. Download Playback Hitz today on iPhone and the music you love will be in the palm of your hands.
                                    
                                    '
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://apps.apple.com/in/app/playback-hitz/id1626672546" target="_blank">https://apps.apple.com/in/app/playback-hitz/id1626672546</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    Flutter, Python, Firebase, bitrise, fastlane, Codecov, Appsflyer, branch, Google cloud, Amplitude
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal13}
                cambiarEstado={cambiarEstadoModal13}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_4.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_4_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>Just Findem</h1>
                            <h1>Role</h1>
                            <p>Flutter Mobile App Development, Delivery, and Maintenance</p>
                            <h1>Project Goal</h1>
                            <p>Have a particular job that needs to be done?</p>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage="Have a particular job that needs to be done?

                                    Looking to sell your trade?
                                    
                                    Findem is a virtual marketplace for both users and service providers. Users can acquire a wide range of services from professionals, and professionals can market their trade. By broadcasting a job, looking through the Findem directory, or using the Findem's search engine, users can locate a specialized person/s to complete a particular job. With Findem's chat system, users can have an open line of communication with service providers to communicate their demand easily and swiftly. Once an agreement has been made, Findem's workflow and payment system will automatically document the agreement between both parties to ensure a safe transaction. Users and Service Providers can access these services from any device from anywhere at anytime to retrieve data or acquire new services. Download the app today to skim through the best talent money can buy! If you believe you have value you can offer to the market, apply to become a service provider today by just a few clicks!"
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://apps.apple.com/ee/app/just-findem/id1607507644" target="_blank">https://apps.apple.com/ee/app/just-findem/id1607507644</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    Flutter, Flamelink, Firebase, codemagic, fastlane, Codecov, App Center, mixpanel, Google cloud, Amplitude
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal12}
                cambiarEstado={cambiarEstadoModal12}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_5.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_5_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>Forza Football - Live Scores</h1>
                            <h1>Introduction</h1>
                            <p>The complete soccer app! Live scores, the fastest push notifications and video highlights during the game.</p>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage="LIVE UPDATES FROM 1450+ COMPETITIONS

                                    • Event feed with goals, cards, substitutions, VAR events and more
                                    
                                    • World’s best coverage of women’s soccer
                                    
                                    • Live updates of league tables and playoff trees
                                    
                                    
                                    BLAZING FAST PUSH NOTIFICATIONS
                                    
                                    • With our own push notification system, we send score pushes faster than any other live score app
                                    
                                    • Customizable push notifications for your favorite matches, teams, tournaments and players
                                    
                                    
                                    VIDEO HIGHLIGHTS
                                    
                                    • Watch goals from all the top leagues just minutes after they happened
                                    
                                    
                                    STARTING LINEUPS
                                    
                                    • Fast and accurate starting lineups with formations and player photos
                                    
                                    • Starting lineups predicted by team experts one day before kick-off
                                    
                                    • Player ratings by team expert after game is finished
                                    
                                    
                                    TV GUIDE
                                    
                                    • TV schedules covering all games broadcasted in your country
                                    
                                    
                                    PLAYER STATISTICS
                                    
                                    • Extensive statistics from current season
                                    
                                    • Detailed injuries and suspensions
                                    
                                    
                                    iOS FEATURES
                                    
                                    • Wide selection of home screen widgets
                                    
                                    • Complete Apple Watch app
                                    
                                    • Dark mode support
                                    
                                    • All settings are saved to iCloud
                                    
                                    "
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://apps.apple.com/us/app/forza-football-live-scores/id500138120" target="_blank">https://apps.apple.com/us/app/forza-football-live-scores/id500138120</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    Flutter, NodeJS, Firebase, bitrise, fastlane, Codecov, mixpanel, Google cloud
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal11}
                cambiarEstado={cambiarEstadoModal11}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_6.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_6_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>Online Anytime</h1>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage="The Online-Anytime is digital forms solution to build and distribute digital forms for inspections, checklist, or any other data collections. It is fully customizable, offline data store.
                                    The Online-Anytime App is designed to include validation rules and data formatting options, which ensures that all data is entered correctly and accurately. The App is integrated with databases and other software applications, making it easier for organizations to manage and analyse the data they collect from employees, contractors and stakeholders."
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://play.google.com/store/apps/details?id=com.expodevelopment.onlineanytime" target="_blank">https://play.google.com/store/apps/details?id=com.expodevelopment.onlineanytime</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    React Native, NodeJS, Firebase, bitrise, Codecov, PHP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal10}
                cambiarEstado={cambiarEstadoModal10}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_7.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_7_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>TwinSpires Horse Race Betting</h1>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage="TLive Horse racing with the TwinSpires Horse Racing Betting app, is the premier destination for legal US horse racing bets on race day. TwinSpires is the Official horse racing partner of the Kentucky Derby! Bet online now this Spring on the Kentucky Derby, Preakness Stakes and Belmont Horse Racing events!


                                    You can legally wager and bet online on the finest daily horse racing on the planet – including the Kentucky Derby, Preakness Stakes, Belmont Stakes, Breeders’ Cup, Jeff Ruby Steaks, Dubai World Cup – every racetrack worldwide (Santa Anita, Keeneland, Del Mar, Kentucky Downs).
                                    
                                    
                                    • FAST Wager Pad – construct multi-leg wagers on a single screen
                                    
                                    • Live programs with up to the minute racing info, results, and race day news
                                    
                                    • LIVE STREAMING of today’s race day action & video replays
                                    
                                    • Safe & secure funding and withdrawals
                                    
                                    • FREE HANDICAPPING information
                                    
                                    • Weekly bonuses, promotions & giveaways
                                    
                                    • Race day free picks and expert analysis"
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://apps.apple.com/us/app/twinspires-horse-race-betting/id948757156" target="_blank">https://apps.apple.com/us/app/twinspires-horse-race-betting/id948757156</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    React Native, NodeJS, Firebase, bitrise, Codecov, PHP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <Modal
                estado={estadoModal9}
                cambiarEstado={cambiarEstadoModal9}
            >
                <div className="content-modal">
                    <div className="pw-content">
                        <div className="eins-modal-preview">
                            <img src={proyectsImgApp(`./pro_app/a_8.png`)} alt="" />
                            <img src={proyectsImgApp(`./pro_app/a_8_1.png`)} alt="" />
                        </div>
                        <div className="eins-modal-text">
                            <h1>Wish: Shop and Save</h1>
                            <h1>Solutions</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-17-p2'
                                    defaultMessage="Wish is home to deals on millions of items from around the world. The destination for home and life - discover everything from everyday basics, hobbies & DIY, fashion for all, the latest in tech, to the wonderfully unexpected - and everything in-between, at prices likely to make you smile! The Wish app is the internet’s best-kept secret for affordable online shopping.


                                    DESTINATION FOR HOME AND LIFE
                                    
                                    Fuel your free time with a little bit of everything from electronics, fashion, automotive gear, wellness, home essentials, unique decor, the intentionally surprising, and much, much more.
                                    
                                    
                                    DISCOVERY IS EASY
                                    
                                    - Scroll the infinite product feed that features items chosen just for you.
                                    
                                    - Explore by category to find just what you’re looking for.
                                    
                                    - Find authentic products from your favorite brands.
                                    
                                    
                                    SAVE ON SHIPPING
                                    
                                    - Spend less to ship the deals you’ll discover with flat rate shipping.
                                    
                                    - Get $2.99 flat rate shipping when you spend $10 on eligible items.
                                    
                                    - Save even more by snagging extra shipping promos and discounts.
                                    
                                    - Available only in select countries.
                                    
                                    
                                    SHOP AND SAVE
                                    
                                    - Shop daily deals and flash sales.
                                    
                                    - Earn a daily login stamp for every day you open the Wish app. 7 visits gets you up to 50% off!
                                    
                                    - Use your rewards points to save even more on your favorite items.
                                    
                                    
                                    WE’VE GOT YOUR BACK
                                    
                                    - Every order is backed by our Wish Buyer Protection promise.
                                    
                                    - Get notifications about your order status every step of the way.
                                    
                                    - Check out securely with credit/debit card, PayPal, Klarna, and more.
                                    
                                    - Need help with your order? Wish Assistant is at your service 24/7.
                                    
                                    
                                    SOMETHING FOR EVERYONE
                                    
                                    - We’ve got whatever you’re into: clothing, electronics, gardening tools, sports equipment, anime figurines, bags, decor, makeup, toys, drones, smartwatches, or designer perfume.
                                    
                                    - Find one-of-a-kind gifts for every occasion without going over budget."
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>Link:</span> <a href="https://apps.apple.com/us/app/wish-shop-and-save/id530621395" target="_blank">https://apps.apple.com/us/app/wish-shop-and-save/id530621395</a>
                            </div>
                            <div className="eins-modal-text-3">
                                <span>
                                    <FormattedMessage
                                        id='projects-tec'
                                        defaultMessage='Used technology:'
                                    />
                                </span>
                                <div className="eins-modal-tec">
                                    React Native, NodeJS, Firebase, bitrise, Codecov, PHP
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

            <ScrollToTop />

            <Footer />
        </div>
    )
}

export default Project
