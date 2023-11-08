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
                            Apps
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
                <section className="projects__grid apps">
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
                            <h1>Copy Me That recipe manager</h1>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-18-p1'
                                    defaultMessage="Copy Me That combines a recipe manager, shopping list, and meal planner into one seamless flow. Easily add recipes from any website with a single click, or add your own recipes. Copy Me That syncs with all your devices so you'll have online access anywhere.


                                    Edit any part of a recipe to remember your recipe tweaks. Add your own masterpiece photos - or fun flop photos, as the case may be!
                                    
                                    
                                    Organize your collection with tags or just use search to find what you're looking for.
                                    
                                    
                                    Plan your meals ahead of time with the meal planner and then head off to the grocery store with your shopping list. Sort your shopping list by recipe or category (aisle) to easily find your items in the store.
                                    
                                    
                                    Looking for inspiration? Then see what others are sharing in the Copy Me That Community. You decide how much (or little) you want to share.
                                    
                                    
                                    We've made sure that your iPad or iPhone won't go to sleep while you're following a recipe. (We know how annoying it is when that happens!)
                                    
                                    
                                    Your recipes belong to you and you can download them at any time.
                                    
                                    
                                    The free version has a full set of features and may be all you'll ever need. No recipe limits. The Premium memberships gives you a rich set of extra features (and is the one in-app purchase).
                                    
                                    
                                    Note that the recipe detection, when adding recipes from other websites, is currently optimized for English."
                                />
                            </p>
                            <p>
                                <FormattedMessage
                                    id='projectsApp-info-18-p2'
                                    defaultMessage='The application has an authentication system, so that the user can access their account and carry out the operations they want, it also has a section where you can see the evolution of the different cryptocurrencies.'
                                />
                            </p>
                            <div className="eins-modal-text-2">
                                <span>WebSite Link:</span> <a href="https://www.copymethat.com/" target="_blank">https://www.copymethat.com/</a><br/>
                                <span>App Link:</span> <a href="https://apps.apple.com/us/app/copy-me-that-recipe-manager/id956800243/" target="_blank">https://apps.apple.com/us/app/copy-me-that-recipe-manager/id956800243/</a>
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

            <ScrollToTop />

            <Footer />
        </div>
    )
}

export default Project
