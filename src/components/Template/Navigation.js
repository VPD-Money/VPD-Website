import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/Routes';
import {useMediaQuery} from "react-responsive";
import media_query_values from "../../data/MediaQuery";

class Navigation extends Component {

    constructor(props) {
        super(props);
        this.showBurger=false;
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

        if (isMobile && isPortrait || isTablet && isPortrait) this.showBurger = true;

        return <header className="NavHeader">
            <div className="MainLogo"><a href="/"><img src="/images/main_logo.svg"/></a></div>
            {!this.showBurger &&
            <div className="Navlinks">
                    {routes.filter((l) => !l.index).map((l) => (
                       <Link to={l.path}>{l.label}</Link>
                    ))}
                <button>
                    Get the App &nbsp;&nbsp; &rsaquo;
                </button>
            </div>
            }
            {this.showBurger && <Hamburger/>}
        </header>
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

export default attachDeviceTypeHook(Navigation);
