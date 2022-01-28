import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { HelmetProvider } from 'react-helmet-async';
import Main from '../layouts/Main';
import media_query_values from '../data/MediaQuery';
import NavigationDeep from '../components/Template/NavigationDeep';
import Footer from '../components/Template/Footer';

class AboutUs extends Component {

    constructor(props) {
        super(props);
        this.screenImageLetter = '';
    }


    render() {
        const {
            isBigScreen,
            isDesktopOrLaptop,
            isTablet,
            isMobile,
            isPortrait,
            isRetina
        } = JSON.parse(this.props.deviceType);

        if (isMobile && isPortrait) this.screenImageLetter = '_m';
        else if (isMobile && !isPortrait) this.screenImageLetter = '_d';

        else if (isTablet && isPortrait) this.screenImageLetter = '_t';
        else if (isTablet && !isPortrait) this.screenImageLetter = '_d';

        else if (isDesktopOrLaptop) this.screenImageLetter = '_d';
        else this.screenImageLetter = '_b';

        return <Main title={"About Us"} description={"A bank of you"}>
            <HelmetProvider>
                <div className="row container-fluid">
                    <div className="layer-wrapper">
                        <NavigationDeep/>

                        <div className="about-layer-1">
                            <img src={"/images/aboutus_main_bg" + (this.screenImageLetter) + ".png"} />
                            <div className="about-layer-1-component">
                                <img src={"/images/about_person_1" + (this.screenImageLetter) + ".png"}/>
                                <img src={"/images/about_person_2" + (this.screenImageLetter) + ".png"}/>
                                <div>
                                    <label>We are building a bank for the <span>unbanked</span></label>
                                    <label>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</label>
                                </div>
                                <img src={"/images/about_person_3" + (this.screenImageLetter) + ".png"}/>
                                <img src={"/images/about_person_4" + (this.screenImageLetter) + ".png"}/>
                                <img src={"/images/about_person_5" + (this.screenImageLetter) + ".png"}/>
                            </div>

                        </div>

                        <div className="about-layer-2">

                            <div className="about-layer-2-section">
                                <img src={"/images/about_group" + (this.screenImageLetter) + ".png"}/>
                            </div>
                            <div className="about-layer-2-section">
                                <label>
                                    The Hub of Banking
                                </label>
                                <label>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                </label>
                                <label>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                </label>
                                <label>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                                </label>
                            </div>

                        </div>

                        <div className="about-layer-3">

                            <div className="about-layer-3-section">
                                <img src="/images/icons/users.png"/>
                                <label>43,269</label>
                                <label>Users</label>
                            </div>

                            <div className="about-layer-3-section">
                                <img src="/images/icons/dollar.png"/>
                                <label>$25 Million+</label>
                                <label>Processed Transactions</label>
                            </div>

                            <div className="about-layer-3-section">
                                <img src="/images/icons/cards.png"/>
                                <label>35k Users</label>
                                <label>Virtual Card</label>
                            </div>

                            <div className="about-layer-3-section">
                                <img src="/images/icons/visa.png"/>
                                <label>Exclusive Partnership</label>
                                <label>with Visa</label>
                            </div>

                            <div className="about-layer-3-section">
                                <img src="/images/icons/finalist.png"/>
                                <label>Finalist</label>
                                <label>at the CEMEA Visa Everywhere Initiative</label>
                            </div>

                        </div>

                        <div className="about-layer-4">
                            <label className="about-layer-4-maintext">Our Team</label>
                            <label className="about-layer-4-subtext">We are a group of fintech professionals united by one goal: To build and introduce a first class digital banking experience that provides an alternative to traditional banking for individuals, businesses in Africa as well as the African diasporas community.</label>

                            <div className="about-layer-4-section">
                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Michael Simeon.png"/>
                                    <label className="about-layer-4-section-element-name">Michael Simeon</label>
                                    <label className="about-layer-4-section-element-title">Co-Founder & CEO</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Adeleke Mohammed.png"/>
                                    <label className="about-layer-4-section-element-name">Adeleke Mohammed</label>
                                    <label className="about-layer-4-section-element-title">Project Manager</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Channel Edwards.png"/>
                                    <label className="about-layer-4-section-element-name">Channel Edwards</label>
                                    <label className="about-layer-4-section-element-title">Business Developer</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Ayokunle Falade.png"/>
                                    <label className="about-layer-4-section-element-name">Ayokunle Falade</label>
                                    <label className="about-layer-4-section-element-title">Tech Team Lead</label>
                                </div>

                            </div>

                            <div className="about-layer-4-section">
                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Michael Simeon.png"/>
                                    <label className="about-layer-4-section-element-name">Bimpe Ayeni</label>
                                    <label className="about-layer-4-section-element-title">Accounting Lead</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Damilola Ilesanmi.png"/>
                                    <label className="about-layer-4-section-element-name">Damilola Ilesanmi</label>
                                    <label className="about-layer-4-section-element-title">Compliance Officer</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Muyiwa Akinwusi.png"/>
                                    <label className="about-layer-4-section-element-name">Muyiwa Akinwusi</label>
                                    <label className="about-layer-4-section-element-title">Customer Support Lead</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Taiwo Bakare.png"/>
                                    <label className="about-layer-4-section-element-name">Taiwo Bakare</label>
                                    <label className="about-layer-4-section-element-title">Customer Support Officer</label>
                                </div>

                            </div>

                            <div className="about-layer-4-section">
                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Osadome Ebie.png"/>
                                    <label className="about-layer-4-section-element-name">Osadome Ebie</label>
                                    <label className="about-layer-4-section-element-title">Product Designer</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Osadome Ebie.png"/>
                                    <label className="about-layer-4-section-element-name">Khalid Oshogwemoh</label>
                                    <label className="about-layer-4-section-element-title">Human Resource Officer</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Saheed Oladele.png"/>
                                    <label className="about-layer-4-section-element-name">Saheed Oladele</label>
                                    <label className="about-layer-4-section-element-title">Software Developer</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Uchechi Ezenyirioha.png"/>
                                    <label className="about-layer-4-section-element-name">Uchechi Ezenyirioha</label>
                                    <label className="about-layer-4-section-element-title">Legal Officer</label>
                                </div>

                            </div>

                            <div className="about-layer-4-section">
                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Osadome Ebie.png"/>
                                    <label className="about-layer-4-section-element-name">Khalid Lasisi</label>
                                    <label className="about-layer-4-section-element-title">Product Designer</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Damilola Ilesanmi.png"/>
                                    <label className="about-layer-4-section-element-name">Samuel Oyelekan</label>
                                    <label className="about-layer-4-section-element-title">Mobile App Developer</label>
                                </div>

                            </div>



                        </div>

                        <Footer/>
                    </div>
                </div>
            </HelmetProvider>
        </Main>
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

export default attachDeviceTypeHook(AboutUs);
