import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {useMediaQuery} from "react-responsive";
import media_query_values from "../../data/MediaQuery";
import store_info from "../../data/Stores";
import contact_info from "../../data/ContactInfo";

class Footer extends Component {

    render() {
        return <div className="footer">

            <div className="footer-header">
                <label>Start creating your own bank</label>
             </div>

            <div className="footer-section-2">
                <a href={store_info.playstore}><img src="/images/icons/playstore.svg"/></a>
                <a href={store_info.appstore}><img src="/images/icons/playstore.svg"/></a>
            </div>

            <div className="footer-section-3">
                <div className="footer-section-3-group">
                    <label className="footer-section-3-group-category">Company</label>
                    <Link to="/aboutus" ><label>About us</label></Link>
                    <label>Partners</label>
                    <Link to="/careers" ><label>Careers</label></Link>
                    <label>FAQ</label>
                </div>
                <div className="footer-section-3-group">
                    <label className="footer-section-3-group-category">Personal Features</label>
                    <label>Cashbox</label>
                    <label>Recurring Transfer</label>
                    <label>Sub Accounts</label>
                    <label>Funding Link</label>
                    <label>Analytics</label>
                </div>
                <div className="footer-section-3-group">
                    <label className="footer-section-3-group-category">Business Features</label>
                    <label>Invoicing</label>
                    <label>Payroll</label>
                    <label>Sub Accounts</label>
                    <label>Account Report</label>
                    <label>Analytics</label>
                    <label>Bulk Transfer</label>
                </div>
                <div className="footer-section-3-group">
                    <label className="footer-section-3-group-category">Legal</label>
                    <Link to="/privacy" ><label>Privacy Policy</label></Link>
                    <Link to="/terms" ><label>Terms & Conditions</label></Link>
                </div>
                <div className="footer-section-3-group">
                    <label className="footer-section-3-group-category">Follow us</label>
                    <div className="footer-section-3-group-socials">
                        <a href={contact_info.instagram}><img src="/images/icons/instagram.png"/></a>
                        <a href={contact_info.linkedin}><img src="/images/icons/linkedin.png"/></a>
                        <a href={contact_info.twitter}><img src="/images/icons/twitter.png"/></a>
                        <a href={contact_info.facebook}><img src="/images/icons/facebook.png"/></a>
                    </div>

                    <div className="footer-section-3-group-sub">
                        <label className="footer-section-3-group-category">Contact</label>
                        <label><img src="/images/icons/customer-care-white.svg"/> <a href="mailto:support@vpd.money">Support@vpd.money</a></label>
                        <label><img src="/images/icons/customer-care-white.svg"/> +234 903 1929 055</label>
                        <label><img src="/images/icons/customer-care-white.svg"/> +234 903 1929 055</label>
                    </div>

                </div>

            </div>

            <div className="footer-section-4">
                <div className="footer-section-3-group-last">
                    <Link to="/" ><img src="/images/main_logo.svg"/></Link>
                    <div></div>
                    <label>© 2022 VPD Money Technologies. All rights reserved.</label>
                </div>
            </div>

        </div>
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
        let objVals = JSON.stringify({isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina});

        return <Component {...props} deviceType={objVals} />;
    }
}

export default attachDeviceTypeHook(Footer);
