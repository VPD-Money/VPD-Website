import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { HelmetProvider } from 'react-helmet-async';
import Main from '../layouts/Main';
import media_query_values from '../data/MediaQuery';

import NavigationLight from '../components/Template/NavigationLight';
import Footer from '../components/Template/Footer';


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

        else if (isTablet && isPortrait) this.screenImageLetter = '_t';
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
                                        <img src={"/images/careers_main_image"+ (this.screenImageLetter) + ".png"}/>
                                    </div>

                                    <div className="careers-layer-1-group-section-2">
                                        <label className="careers-layer-1-group-section-2-label">CAREERS</label>
                                        <label className="careers-layer-1-group-section-2-label-2">Interested in working with us</label>
                                        <label className="careers-layer-1-group-section-2-desc">VPD.Money is a financial services App brought to you by part of the team that delivered VoguePay (A leading payment solutions provider that was founded in 2012 and now operating across 5 continents).</label>
                                        <button>View Openings</button>
                                    </div>
                                </div>
                            </div>

                        <div className="careers-layer-2">
                            <img src="/images/icons/multiple-arrows-down.png"/>
                        </div>

                        <div className="careers-layer-3">
                            <div className="careers-layer-3-group">
                                <div className="careers-layer-3-group-section-1">
                                    <label>Our Openings</label>
                                    <label>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur</label>
                                </div>
                                <div className="careers-layer-3-group-section-2">
                                    <img src={"/images/about_group" + (this.screenImageLetter) + ".png"}/>
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
                                    <img src="/images/icons/career-values-teamwork.svg"/>
                                    <label className="careers-layer-4-group-box-title">Integrity</label>
                                    <label className="careers-layer-4-group-box-text">Lorem ipsum dolor sit amet, conur sadipscing elitr, sed diam nonumy eirmod tempor invnt ut labore et</label>
                                </div>

                                <div className="careers-layer-4-group-box">
                                    <img src="/images/icons/career-values-teamwork.svg"/>
                                    <label className="careers-layer-4-group-box-title">Honesty</label>
                                    <label className="careers-layer-4-group-box-text">Lorem ipsum dolor sit amet, conur sadipscing elitr, sed diam nonumy eirmod tempor invnt ut labore et</label>
                                </div>

                                <div className="careers-layer-4-group-box">
                                    <img src="/images/icons/career-values-teamwork.svg"/>
                                    <label className="careers-layer-4-group-box-title">Teamwork</label>
                                    <label className="careers-layer-4-group-box-text">Lorem ipsum dolor sit amet, conur sadipscing elitr, sed diam nonumy eirmod tempor invnt ut labore et</label>
                                </div>


                            </div>

                            <div className="careers-layer-4-group">
                                <div className="careers-layer-4-group-box">
                                    <img src="/images/icons/career-values-teamwork.svg"/>
                                    <label className="careers-layer-4-group-box-title">Customer Satisfaction</label>
                                    <label className="careers-layer-4-group-box-text">Lorem ipsum dolor sit amet, conur sadipscing elitr, sed diam nonumy eirmod tempor invnt ut labore et</label>
                                </div>

                                <div className="careers-layer-4-group-box">
                                    <img src="/images/icons/career-values-teamwork.svg"/>
                                    <label className="careers-layer-4-group-box-title">Trustworthiness</label>
                                    <label className="careers-layer-4-group-box-text">Lorem ipsum dolor sit amet, conur sadipscing elitr, sed diam nonumy eirmod tempor invnt ut labore et</label>
                                </div>

                                <div className="careers-layer-4-group-box">
                                    <img src="/images/icons/career-values-teamwork.svg"/>
                                    <label className="careers-layer-4-group-box-title">Accountability</label>
                                    <label className="careers-layer-4-group-box-text">Lorem ipsum dolor sit amet, conur sadipscing elitr, sed diam nonumy eirmod tempor invnt ut labore et</label>
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
        let objVals = JSON.stringify({isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina});

        return <Component {...props} deviceType={objVals} />;
    }
}

export default attachDeviceTypeHook(Contact);
