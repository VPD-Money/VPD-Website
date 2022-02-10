import React, {Component} from 'react';
import { Link,useLocation } from 'react-router-dom';

import Hamburger from './Hamburger';
import routes from '../../data/Routes';
import {useMediaQuery} from "react-responsive";
import media_query_values from "../../data/MediaQuery";
import $ from "jquery";

class NavigationLight extends Component {

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

        return <header className="NavHeader-nosticky">
            <div className="MainLogo-light"><Link to='/'> <img src="/images/main_logo_plain.svg"/></Link></div>
            {!this.showBurger &&
            <div className="Navlinks-light">
                {routes.filter((l) => !l.index).map((l) => (
                    <Link class={(currentPath==l.path? "Navlinks-light-active":"" )} to={l.path}>{l.label}</Link>
                ))}
                <button>
                    Get the App <img src="/images/icons/arrow-right-white.svg"/>
                </button>
            </div>
            }
            {this.showBurger && <Hamburger/>}
        </header>
    }

    componentDidMount() {
        $(document).on("click", ".MainLogo-light a", function () {
            localStorage.setItem("slider-completed","true");
        });

        $(document).on("click","#menu-checkbox",function () {
            if( $( "#menu-checkbox" ).prop( "checked"))
            {
                $("body").css("position","fixed");
                $("#menuToggle span").hide();
            }
        });

        $(document).on("click",".close-burger-menu",function () {
            $( "#menu-checkbox" ).prop( "checked", false );
            $("body").css("position","relative");
            $("#menuToggle span").fadeIn(50);
        });

        $(document).on("click","#menu a",function () {
            $( "#menu-checkbox" ).prop( "checked", false );
            $("body").css("position","relative");
            $("#menuToggle span").fadeIn(50);
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
        let objVals = JSON.stringify({isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina});

        return <Component {...props} deviceType={objVals} location={location} />;
    }
}

export default attachDeviceTypeHook(NavigationLight);
