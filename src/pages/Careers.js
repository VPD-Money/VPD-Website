import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { HelmetProvider } from 'react-helmet-async';
import Main from '../layouts/Main';
import media_query_values from '../data/MediaQuery';

import NavigationLight from '../components/Template/NavigationLight';
import Footer from '../components/Template/Footer';
import ImgWithFallback from "../components/Animations/ImgWithFallback";


class Contact extends Component {

    constructor(props) {
        super(props);
        this.screenImageLetter = '';
    }


    render()
    {
        const {isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina} = JSON.parse(this.props.deviceType);

        if (isMobile && isPortrait) this.screenImageLetter = '_m';
        else if (isMobile && !isPortrait) this.screenImageLetter = '_d';

        else if (isTablet && isPortrait) this.screenImageLetter = '_m';
        else if (isTablet && !isPortrait) this.screenImageLetter = '_d';

        else if (isDesktopOrLaptop) this.screenImageLetter = '_d';
        else this.screenImageLetter = '_b';

        return <Main title={"Careers"} description={"A bank of you"} >
            <HelmetProvider>
                <div className="row container-fluid">
                    <div className="layer-wrapper">
                        <NavigationLight />

                            <div className="careers-layer-1">
                                <div className="careers-layer-1-group">
                                    <div className="careers-layer-1-group-section-1">
                                        <ImgWithFallback
                                            src={"/images/careers_main_image"+ (this.screenImageLetter) + ".webp"}
                                            fallback={"/images/fallback/careers_main_image"+ (this.screenImageLetter) + ".png"}
                                            alt="careers_main_image"
                                        />
                                    </div>

                                    <div className="careers-layer-1-group-section-2">
                                        <label className="careers-layer-1-group-section-2-label">CAREERS</label>
                                        <label className="careers-layer-1-group-section-2-label-2">Interested in working with us</label>
                                        <label className="careers-layer-1-group-section-2-desc">VPD.Money is a financial services App brought to you by part of the team that delivered VoguePay (A leading payment solutions provider that was founded in 2012 and now operating across 5 continents).</label>
                                        {/*<button className={"open-download-overlay"}>Get the App <img src="/images/icons/arrow-right-white.svg"/></button>*/}
                                    </div>
                                </div>
                            </div>

                        <div className="careers-layer-2">
                           <a href="#openings">
                               <ImgWithFallback
                                   src={"/images/icons/multiple-arrows-down.webp"}
                                   fallback={"/images/fallback/icons/multiple-arrows-down.png"}
                                   alt="arrows-down"
                               />
                           </a>
                        </div>

                        <div id="openings" className="careers-layer-3">
                            <div className="careers-layer-3-group">
                                <div className="careers-layer-3-group-section-1">
                                    <label>Want to join team VPD?</label>
                                    <label>Are you passionate about fintech or interested in supporting
                                        unbanked individuals and businesses? Then VPD might be the
                                        ideal team for you. Whether you're a skilled developer or an
                                        experienced customer service professional, get in touch with our
                                        team today to learn about the latest vacancies and positions
                                        available on our growing team.</label>
                                </div>
                                <div className="careers-layer-3-group-section-2">
                                    <ImgWithFallback
                                        src={"/images/career_group"+ (this.screenImageLetter) + ".webp"}
                                        fallback={"/images/fallback/career_group"+ (this.screenImageLetter) + ".png"}
                                        alt="career_group"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="careers-layer-4">
                            <div className="careers-layer-4-group">
                                <div className="careers-layer-4-group">
                                    <label className="careers-layer-4-group-heading">Our Values</label>
                                    <label className="careers-layer-4-group-text">We are a group of fintech professionals united by one goal: To build and introduce a first class digital banking experience that provides an alternative to traditional banking for individuals, businesses in Africa as well as the African diasporas community.</label>
                                </div>
                            </div>

                            <div className="careers-layer-4-group">
                                <div className="careers-layer-4-group-box">
                                    <img src="/images/icons/career-values-integrity.svg"/>
                                    <label className="careers-layer-4-group-box-title">Integrity</label>
                                    <label className="careers-layer-4-group-box-text">We are honest, open, and uphold the highest standards of integrity as well as personal excellence in all of our actions.</label>
                                </div>

                                <div className="careers-layer-4-group-box">
                                    <img src="/images/icons/career-values-security.svg"/>
                                    <label className="careers-layer-4-group-box-title">Security</label>
                                    <label className="careers-layer-4-group-box-text">As a fintech company, we understand the need to keep our
                                        customers as safe as possible. We utilise the best security and
                                        necessary safety measures to make our service the ideal choice for
                                        you.</label>
                                </div>

                                <div className="careers-layer-4-group-box">
                                    <img src="/images/icons/career-values-team.svg"/>
                                    <label className="careers-layer-4-group-box-title">Teamwork</label>
                                    <label className="careers-layer-4-group-box-text">Working together helps us achieve a better user experience,
                                        innovate new solutions, and provide the best care to our customers.
                                        Teamwork is integral to providing you with the best service.</label>
                                </div>

                            </div>

                            <div className="careers-layer-4-group">
                                <div className="careers-layer-4-group-box">
                                    <img src="/images/icons/career-values-satisfaction.svg"/>
                                    <label className="careers-layer-4-group-box-title">Customer Satisfaction</label>
                                    <label className="careers-layer-4-group-box-text">Every new feature, added benefit, or additional service we deliver is
                                        designed with user-friendliness and customer satisfaction in mind.
                                        We value our customers and provide value to them too.</label>
                                </div>

                                <div className="careers-layer-4-group-box">
                                    <img src="/images/icons/career-values-respect.svg"/>
                                    <label className="careers-layer-4-group-box-title">Respect</label>
                                    <label className="careers-layer-4-group-box-text">If you have been denied access and equal opportunities to achieve
                                        financial freedom, we are here to help you. Both within the company
                                        and in our relationships with our customers and partners, we go the
                                        extra mile to be respectful, professional and positive in the work we
                                        do.</label>
                                </div>

                                <div className="careers-layer-4-group-box">
                                    <img src="/images/icons/career-values-accountability.svg"/>
                                    <label className="careers-layer-4-group-box-title">Accountability</label>
                                    <label className="careers-layer-4-group-box-text">We are honest, transparent, and always take responsibility when
                                        something doesn't work out. Our commitment to you allows us to do
                                        everything in our power to deliver the service you need 24/7.</label>
                                </div>


                            </div>

                        </div>


                        <Footer />
                    </div>
                </div>
            </HelmetProvider>
        </Main>;
    }
};

function attachDeviceTypeHook(Component) {
    return function WrappedComponent(props) {
        const isBigScreen = useMediaQuery(media_query_values.bigscreen)
        const isDesktopOrLaptop = useMediaQuery(media_query_values.desktop)
        const isTablet = useMediaQuery(media_query_values.tablet)
        const isMobile = useMediaQuery(media_query_values.mobile)
        const isPortrait = useMediaQuery(media_query_values.portrait)
        const isRetina = useMediaQuery(media_query_values.retina)
        let objVals = JSON.stringify({isBigScreen, isDesktopOrLaptop, isTablet, isMobile, isPortrait, isRetina});

        return <Component {...props} deviceType={objVals} />;
    }
}

export default attachDeviceTypeHook(Contact);
