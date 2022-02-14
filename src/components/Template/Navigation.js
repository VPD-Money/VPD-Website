import React, {Component} from 'react';
import {Link, useLocation} from 'react-router-dom';

import Hamburger from './Hamburger';
import DownloadOverlay from './../Animations/DownloadOverlay';
import routes from '../../data/Routes';
import {useMediaQuery} from "react-responsive";
import media_query_values from "../../data/MediaQuery";
import $ from "jquery";

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

        let currentPath=this.props.location.pathname;

        if (isMobile && isPortrait || isTablet && isPortrait) this.showBurger = true;

        return <header className="NavHeader">
            <DownloadOverlay/>
            <div className="MainLogo"><Link to="/" ><img src="/images/main_logo.svg"/></Link></div>
            {!this.showBurger &&
            <div className="Navlinks">
                    {routes.filter((l) => !l.index).map((l) => (
                       <Link class={(currentPath==l.path? "nav-active":"" )} to={l.path}>{l.label}</Link>
                    ))}
                <button className={"open-download-overlay"}>
                    Get the App <img src="/images/icons/arrow-right-white.svg"/>
                </button>
            </div>
            }

            {this.showBurger && <Hamburger/>}
        </header>
    }

    componentDidMount() {
        $(document).on("click", ".MainLogo a", function () {
            localStorage.setItem("slider-completed","true");
        });

        $(document).on("click", ".menu-logo", function () {
            localStorage.setItem("slider-completed","true");
        });

        $(document).on("click","#menu-checkbox",function () {
            if( $( "#menu-checkbox" ).prop( "checked"))
            {
                $("#menuToggle span").hide();
                $( "#menu-checkbox" ).hide();
                $( ".intercom-lightweight-app" ).hide();
            }
        });

        $(document).on("click",".close-burger-menu",function () {
            $( "#menu-checkbox" ).show();
            $( "#menu-checkbox" ).prop( "checked", false );
            $( ".intercom-lightweight-app" ).fadeIn(100);
            $("#menuToggle span").fadeIn(50);
        });

        $(document).on("click","#menu a",function () {
            $( "#menu-checkbox" ).prop( "checked", false );
            $( "#menu-checkbox" ).show();
            $( ".intercom-lightweight-app" ).fadeIn(100);
            $("#menuToggle span").fadeIn(50);
        });

        $(document).on("click",".open-download-overlay",function () {
            $( ".download-overlay" ).show();
            $( ".intercom-lightweight-app" ).hide();
        });

        $(document).on("click",".download-overlay",function () {
            $( ".download-overlay" ).hide();
            $( ".intercom-lightweight-app" ).fadeIn(100);
        });

    }

};
function attachDeviceTypeHook(Component) {
    return function WrappedComponent(props) {
        const location = useLocation();
        const isBigScreen = useMediaQuery(media_query_values.bigscreen)
        const isDesktopOrLaptop = useMediaQuery(media_query_values.desktop)
        const isTablet = useMediaQuery(media_query_values.tablet)
        const isMobile = useMediaQuery(media_query_values.mobile)
        const isPortrait = useMediaQuery(media_query_values.portrait)
        const isRetina = useMediaQuery(media_query_values.retina)
        let objVals = JSON.stringify({isBigScreen, isDesktopOrLaptop, isTablet, isMobile, isPortrait, isRetina});

        return <Component {...props} deviceType={objVals} location={location} />;
    }
}

export default attachDeviceTypeHook(Navigation);
