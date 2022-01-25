import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { Helmet, HelmetProvider } from 'react-helmet-async';
// import { createStore } from 'redux';
import Main from '../layouts/Main';
import media_query_values from '../data/MediaQuery';
import MainSplashScreen from '../components/Animations/MainSplashScreen';
import Navigation from '../components/Template/Navigation';
import ScrollToTop from '../components/Template/ScrollToTop';


class Index extends Component {

    constructor() {
        super();
        this.state = {
            slideCompleted: false
        };
    }

   render(){
       const {slideCompleted} = this.state;
       const {isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina} = JSON.parse(this.props.deviceType);

       return <Main description={"A bank of you"}>
           {!slideCompleted && <MainSplashScreen  onSlideCompleted={ () => { this.setState({slideCompleted: true })} } /> }
           {
               slideCompleted &&
               <HelmetProvider>
                  <ScrollToTop />
                       <div className="row container-fluid">

                           <div className="layer-wrapper">
                               <Navigation />
                               <div className="layer-1">
                                   <div className="bannerFrame">
                                       <div class="layer-1-overlay"></div>

                                   </div>
                               </div>

                               <div className="layer-2">
                                   Hello!
                               </div>

                          </div>
                       </div>
              </HelmetProvider>

           }


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

export default attachDeviceTypeHook(Index);
