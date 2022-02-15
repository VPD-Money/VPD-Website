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
        const {isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina} = JSON.parse(this.props.deviceType);

        if (isMobile && isPortrait) this.screenImageLetter = '_m';
        else if (isMobile && !isPortrait) this.screenImageLetter = '_d';

        else if (isTablet && isPortrait) this.screenImageLetter = '_m';
        else if (isTablet && !isPortrait) this.screenImageLetter = '_d';

        else if (isDesktopOrLaptop) this.screenImageLetter = '_d';
        else this.screenImageLetter = '_b';

        return <Main title={"Meet the team"} description={"Meet the team behind the top business bank app \n" +
        "and personal banking app for the unbanked in Africa and beyond. \n" +
        "Get to know us better today."}>
            <HelmetProvider>
                <div className="row container-fluid">
                    <div className="layer-wrapper">
                        <NavigationDeep/>

                        <div className="about-layer-1">
                            <img className="about-layer-1-bg" src={"/images/aboutus_main_bg" + (this.screenImageLetter) + ".webp"} />
                            <div className="about-layer-1-component">
                                <img src={"/images/about_person_1" + (this.screenImageLetter) + ".webp"}/>
                                <img src={"/images/about_person_2" + (this.screenImageLetter) + ".webp"}/>
                                <div>
                                    <label>We are building a bank for the <span>unbanked</span></label>
                                    <label>VPD Money provides banking for businesses and digital banking for individuals in Africa and beyond. Discover what the bank of you is all about.</label>
                                </div>
                                <img src={"/images/about_person_3" + (this.screenImageLetter) + ".webp"}/>
                                <img src={"/images/about_person_4" + (this.screenImageLetter) + ".webp"}/>
                                <img src={"/images/about_person_5" + (this.screenImageLetter) + ".webp"}/>
                            </div>

                        </div>

                        <div className="about-layer-2">

                            <div className="about-layer-2-section">
                                <img src={"/images/about_group" + (this.screenImageLetter) + ".webp"}/>
                            </div>
                            <div className="about-layer-2-section">
                                <div className="about-layer-2-section-group">
                                    <label>
                                        The Hub of Banking
                                    </label>
                                </div>

                                <div className="about-layer-2-section-group">
                                    <img src="/images/icons/about-hub-1.svg"/>
                                    <div className="about-layer-2-section-group-content">
                                      <span>Lower Costs</span>
                                      <label>
                                          VPD provides the versatility you need to build a business or personal bank account without the need for additional tools and processes to make the most of your money.
                                          With reduced costs and excellent usability, it's as easy as opening your app to move money, make payments or convert your cash as you cross borders. Simply select the services or applications you require to make your personal bank work best for you.
                                      </label>
                                    </div>
                                </div>


                                <div className="about-layer-2-section-group">
                                    <img src="/images/icons/about-hub-2.svg"/>
                                    <div className="about-layer-2-section-group-content">
                                        <span>Better User Experience</span>
                                        <label>
                                            What makes VPD the best banking experience for you? We allow you to build your own banking experience that's anything but ordinary. With an intuitive design, increased functionality and no limits with a single application, there's a reason we're the bank of you. Simply select the product and services you need to enjoy a customised banking experience.
                                        </label>
                                    </div>
                                </div>

                                <div className="about-layer-2-section-group">
                                    <img src="/images/icons/about-hub-3.svg"/>
                                    <div className="about-layer-2-section-group-content">
                                        <span>Borderless Reach</span>
                                        <label>
                                            With VPD, there are no limits. With completely borderless and frictionless digital banking, you don't need to worry about multiple accounts and currencies. Our sub-account system makes VPD as flexible as you need to be, giving you the ability to convert money freely for full cross-border functionality. We provide financial freedom in a way that benefits you the most, allowing you to build your own personal bank.
                                        </label>
                                    </div>
                                </div>


                            </div>
                        </div>

                        <div className="about-layer-3">

                            <div className="about-layer-3-section">
                                <img src="/images/icons/users.webp"/>
                                <label>45,000+</label>
                                <label>Users</label>
                            </div>

                            <div className="about-layer-3-section">
                                <img src="/images/icons/dollar.webp"/>
                                <label>$48 Million+</label>
                                <label>Processed Transactions</label>
                            </div>

                            <div className="about-layer-3-section">
                                <img src="/images/icons/visa.webp"/>
                                <label>Exclusive Partnership</label>
                                <label>with Visa</label>
                            </div>

                            <div className="about-layer-3-section">
                                <img src="/images/icons/finalist.webp"/>
                                <label>Finalist</label>
                                <label>at the CEMEA Visa Everywhere Initiative</label>
                            </div>

                            <div className="about-layer-3-section">
                                <img src="/images/icons/inclusive_fintech.webp"/>
                                <label>Winner</label>
                                <label>Inclusive Fintech 50 (IF50) competition’s 2021 cohort.</label>
                            </div>

                        </div>

                        <div className="about-layer-4">
                            <label className="about-layer-4-maintext">Our Team</label>
                            <label className="about-layer-4-subtext">Founded by fintech experts and staffed by passionate, financeforward specialists, our team at VPD works together to create the
                                bank of you. Our digital banking experience is built upon our own
                                histories and experiences, providing financial freedom to individuals
                                and businesses in Africa and beyond.</label>

                            <div className="about-layer-4-section">
                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Michael Simeon.webp"/>
                                    <label className="about-layer-4-section-element-name">Michael Simeon</label>
                                    <label className="about-layer-4-section-element-title">Co-Founder & CEO</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Adeleke Mohammed.webp"/>
                                    <label className="about-layer-4-section-element-name">Adeleke Mohammed</label>
                                    <label className="about-layer-4-section-element-title">Co-Founder and Project Manager</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Channel Edwards.webp"/>
                                    <label className="about-layer-4-section-element-name">Channel Edwards</label>
                                    <label className="about-layer-4-section-element-title">Business Developer</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Ayokunle Falade.webp"/>
                                    <label className="about-layer-4-section-element-name">Ayokunle Falade</label>
                                    <label className="about-layer-4-section-element-title">Tech Team Lead</label>
                                </div>

                            </div>

                            <div className="about-layer-4-section">
                                {/*<div className="about-layer-4-section-element">*/}
                                {/*    <img src="/images/team/Michael Simeon.webp"/>*/}
                                {/*    <label className="about-layer-4-section-element-name">Bimpe Ayeni</label>*/}
                                {/*    <label className="about-layer-4-section-element-title">Accounting Lead</label>*/}
                                {/*</div>*/}

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Damilola Ilesanmi.webp"/>
                                    <label className="about-layer-4-section-element-name">Damilola Ilesanmi</label>
                                    <label className="about-layer-4-section-element-title">Compliance Officer</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Muyiwa Akinwusi.webp"/>
                                    <label className="about-layer-4-section-element-name">Muyiwa Akinwusi</label>
                                    <label className="about-layer-4-section-element-title">Customer Support Lead</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Taiwo Bakare.webp"/>
                                    <label className="about-layer-4-section-element-name">Taiwo Bakare</label>
                                    <label className="about-layer-4-section-element-title">Customer Support Officer</label>
                                </div>

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Osadome Ebie.webp"/>
                                    <label className="about-layer-4-section-element-name">Osadome Ebie</label>
                                    <label className="about-layer-4-section-element-title">Product Designer</label>
                                </div>

                            </div>

                            <div className="about-layer-4-section">


                                {/*<div className="about-layer-4-section-element">*/}
                                {/*    <img src="/images/team/Osadome Ebie.webp"/>*/}
                                {/*    <label className="about-layer-4-section-element-name">Khalid Oshogwemoh</label>*/}
                                {/*    <label className="about-layer-4-section-element-title">Human Resource Officer</label>*/}
                                {/*</div>*/}

                                <div className="about-layer-4-section-element">
                                    <img src="/images/team/Saheed Oladele.webp"/>
                                    <label className="about-layer-4-section-element-name">Saheed Oladele</label>
                                    <label className="about-layer-4-section-element-title">Software Developer</label>
                                </div>

                                {/*<div className="about-layer-4-section-element">*/}
                                {/*    <img src="/images/team/Damilola Ilesanmi.webp"/>*/}
                                {/*    <label className="about-layer-4-section-element-name">Samuel Oyelekan</label>*/}
                                {/*    <label className="about-layer-4-section-element-title">Mobile App Developer</label>*/}
                                {/*</div>*/}

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
        let objVals = JSON.stringify({isBigScreen, isDesktopOrLaptop, isTablet, isMobile, isPortrait, isRetina});

        return <Component {...props} deviceType={objVals} />;
    }
}

export default attachDeviceTypeHook(AboutUs);
