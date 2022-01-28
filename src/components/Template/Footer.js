import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {useMediaQuery} from "react-responsive";
import media_query_values from "../../data/MediaQuery";
import store_info from "../../data/Stores";

class Footer extends Component {

    render() {
        return <div className="footer">
            <div className="footer-ribbon">
                <label>Let’s make your money count.</label>
                <a href={store_info.playstore}><img src="/images/icons/playstore.svg"/></a>
                <a href={store_info.appstore}><img src="/images/icons/appstore.svg"/></a>
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
