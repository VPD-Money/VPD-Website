import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {useMediaQuery} from "react-responsive";
import $ from 'jquery';
import media_query_values from "../../data/MediaQuery";
import store_info from "../../data/Stores";
import contact_info from "../../data/ContactInfo";
import ImgWithFallback from "../Animations/ImgWithFallback";


class Footer extends Component {

    render() {
        return <div className="footer">

            <div className="footer-header">
                <label>Start creating your own bank</label>
             </div>

            <div className="footer-section-2">
                <a href={store_info.appstore}><img src="/images/icons/appstore.svg"/></a>
                <a href={store_info.playstore}><img src="/images/icons/playstore.svg"/></a>
            </div>

            <div className="footer-section-3">
                <div className="footer-section-3-group">
                    <label className="footer-section-3-group-category">Company</label>
                    <Link to="/aboutus" ><label>About us</label></Link>
                    <Link to="/contactus" ><label>Contact us</label></Link>
                    <Link to="/careers" ><label>Careers</label></Link>
                    {/*<label>FAQ</label>*/}
                </div>
                <div className="footer-section-3-group">
                    <label className="footer-section-3-group-category">Personal Features</label>
                    <Link to="/personal" ><label>Cashbox</label></Link>
                    <Link to="/personal" ><label>Recurring Transfer</label></Link>
                    <Link to="/personal" ><label>Sub Accounts</label></Link>
                    <Link to="/personal" ><label>Funding Link</label></Link>
                    <Link to="/personal" ><label>Analytics</label></Link>
                </div>
                <div className="footer-section-3-group">
                    <label className="footer-section-3-group-category">Business Features</label>
                    <Link to="/business" ><label>Invoicing</label></Link>
                    <Link to="/business" ><label>Payroll</label></Link>
                    <Link to="/business" ><label>Sub Accounts</label></Link>
                    <Link to="/business" ><label>Account Report</label></Link>
                    <Link to="/business" ><label>Analytics</label></Link>
                    <Link to="/business" ><label>Bulk Transfer</label></Link>
                </div>
                <div className="footer-section-3-group">
                    <label className="footer-section-3-group-category">Legal</label>
                    <Link to="/privacy" ><label>Privacy Policy</label></Link>
                    <Link to="/terms" ><label>Terms & Conditions</label></Link>
                </div>
                <div className="footer-section-3-group">
                    <label className="footer-section-3-group-category">Follow us</label>
                    <div className="footer-section-3-group-socials">
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

                    </div>

                    <div className="footer-section-3-group-sub">
                        <label className="footer-section-3-group-category">Contact</label>
                        <label><img src="/images/icons/customer-care-email-white.svg"/> <a href="mailto:support@vpd.money">Support@vpd.money</a></label>
                        <label><img src="/images/icons/customer-care-white.svg"/> +234 903 1929 055</label>
                    </div>

                </div>

            </div>

            <div className="footer-section-4">
                <div className="footer-section-3-group-last">
                    <Link to="/" ><img src="/images/main_logo.png"/></Link>
                    <div></div>
                    <label>© 2022 VPD Money Technologies. All rights reserved.</label>
                </div>
            </div>

        </div>
    }

    componentDidMount() {

        window.intercomSettings = {
            api_base: "https://api-iam.intercom.io",
            app_id: contact_info["intercom-key"]
        };

        (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/qvsr6vbj';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(document.readyState==='complete'){l();}else if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

    }

}
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

export default attachDeviceTypeHook(Footer);
