import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { HelmetProvider } from 'react-helmet-async';
import Main from '../layouts/Main';
import media_query_values from '../data/MediaQuery';
import contact_info from '../data/ContactInfo';
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

        return <Main title={"Contact Us"} description={"A bank of you"} >
                <HelmetProvider>
                    <div className="row container-fluid">
                        <div className="layer-wrapper">
                            <NavigationLight />

                            <div className="contact-layer-1">
                                  <div className="contact-layer-1-group">
                                      <div className="contact-layer-1-section-1">
                                          <label>Feel Free to reach out</label>
                                          {/*<label>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</label>*/}

                                          <div className="contact-ng-address">
                                              <ImgWithFallback
                                                  className="contact-ng-address-img"
                                                  src={"/images/icons/ng.webp"}
                                                  fallback={"/images/fallback/icons/ng.png"}
                                                  alt="ng"
                                              />
                                              <label>33A, Abba Johnson Crescent, Akora Estate, Off Adeniyi Jones, Ikeja, Lagos State - Nigeria. 100005</label>
                                          </div>

                                          <div className="contact-uk-address">
                                              <ImgWithFallback
                                                  className="contact-uk-address-img"
                                                  src={"/images/icons/uk.webp"}
                                                  fallback={"/images/fallback/icons/uk.png"}
                                                  alt="uk"
                                              />
                                              <label>Level 39, One Canada Square, Canary Wharf. London, E14 5Ab, UK</label>
                                          </div>

                                      </div>
                                      <div className="contact-layer-1-section-2">

                                          <div className="contact-email-box">
                                              <ImgWithFallback
                                                  className="contact-uk-address-img"
                                                  src={"/images/icons/email.webp"}
                                                  fallback={"/images/fallback/icons/email.png"}
                                                  alt="email"
                                              />
                                            <a href={"mailto:"+contact_info.email}>{contact_info.email}</a>
                                          </div>

                                          <div className="contact-callcenter-box">
                                              <ImgWithFallback
                                                  src={"/images/icons/customer-care.webp"}
                                                  fallback={"/images/fallback/icons/customer-care.png"}
                                                  alt="customer-care"
                                              />
                                              <label>{contact_info.phone}</label>
                                          </div>

                                          <div className="contact-social-box">
                                              <a href={contact_info.instagram}>
                                                  <ImgWithFallback
                                                      src={"/images/icons/instagram.webp"}
                                                      fallback={"/images/fallback/icons/instagram.png"}
                                                      alt="instagram"
                                                  />
                                              </a>

                                              <a href={contact_info.linkedin}>
                                                  <ImgWithFallback
                                                      src={"/images/icons/linkedin.webp"}
                                                      fallback={"/images/fallback/icons/linkedin.png"}
                                                      alt="linkedin"
                                                  />
                                              </a>

                                              <a href={contact_info.twitter}>
                                                  <ImgWithFallback
                                                      src={"/images/icons/twitter.webp"}
                                                      fallback={"/images/fallback/icons/twitter.png"}
                                                      alt="instagram"
                                                  />
                                              </a>

                                              <a href={contact_info.facebook}>
                                                  <ImgWithFallback
                                                      src={"/images/icons/facebook.webp"}
                                                      fallback={"/images/fallback/icons/facebook.png"}
                                                      alt="facebook"
                                                  />
                                              </a>
                                              <label>@vpdmoney</label>
                                          </div>

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
