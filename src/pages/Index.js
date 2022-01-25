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
        this.screenImageLetter = '';
        this.state = {
            slideCompleted: false
        };
    }

   render(){
       const {slideCompleted} = this.state;
       const {isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina} = JSON.parse(this.props.deviceType);

       if (isMobile && isPortrait) this.screenImageLetter = '_m';
       else if (isMobile && !isPortrait) this.screenImageLetter = '_d';

       else if (isTablet && isPortrait) this.screenImageLetter = '_t';
       else if (isTablet && !isPortrait) this.screenImageLetter = '_d';

       else if (isDesktopOrLaptop) this.screenImageLetter = '_d';
       else this.screenImageLetter = '_b';

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
                                       <div className="layer-1-sub-text">
                                           Create the banking experience that suits your needs. Break through
                                       </div>

                                       <div className="main_banner_text_group">
                                           <div className="main_banner_text">
                                               The bank of <span>You</span>
                                           </div>
                                           <div className="row main_banner_text_action_section">
                                               <div className="col-lg-9">
                                                   <div className="main_banner_text_action_section_white_bar">&nbsp;</div>
                                               </div>
                                               <div className="col-lg-3">
                                                  <button>Get Started</button>
                                               </div>
                                           </div>`
                                       </div>

                                       <div className="mainBanner">
                                           <img  src={"/images/main_banner" + (this.screenImageLetter) + ".png"}/>

                                       </div>
                                   </div>
                               </div>

                               <div className="layer-2">

                                   <div className="layer-2-main-text-group">
                                       <div className="layer-2-main-text"> Create <span>your</span> own</div>
                                       <div className="layer-2-main-text"> banking experience </div>
                                       <div className="layer-2-main-text-2"> Customize your banking experience by choosing from an array of banking features</div>
                                   </div>

                                   <div className="row layer-2-main-iphone-group">
                                           <div className="col-md-4">
                                              <div className="iphone-feature-pod">
                                                 <img src={"/images/icons/cashback.svg"}/>
                                                 <label>Cashback</label>
                                               </div>

                                               <div className="iphone-feature-pod">
                                                   <img src={"/images/icons/transfer.svg"}/>
                                                   <label>Borderless Transfer</label>
                                               </div>

                                               <div className="iphone-feature-pod">
                                                   <img src={"/images/icons/ai_savings.svg"}/>
                                                   <label>AI Savings</label>
                                               </div>

                                               <div className="iphone-feature-pod">
                                                   <img src={"/images/icons/pension.svg"}/>
                                                   <label>Pension Balance</label>
                                               </div>

                                               <div className="iphone-feature-pod">
                                                   <img src={"/images/icons/ai_savings.svg"}/>
                                                   <label>Open Banking</label>
                                               </div>

                                           </div>
                                           <div className="col-md-4">
                                               <div className="iphone-feature-pod">
                                                   <img src={"/images/icons/ai_savings.svg"}/>
                                                   <label>Utility Payment</label>
                                               </div>
                                              <img src={"/images/iphone_screens/iphone_dashboard"+ (this.screenImageLetter) + ".png"} />
                                               <button>Start Creating your Banking Experience&nbsp; &nbsp;&nbsp;<span>&rsaquo;&rsaquo;</span></button>
                                           </div>
                                           <div className="col-md-4">
                                              <div className="iphone-feature-pod">
                                                   <img src={"/images/icons/transfer.svg"}/>
                                                   <label>Overdraft</label>
                                               </div>

                                               <div className="iphone-feature-pod">
                                                   <img src={"/images/icons/ai_savings.svg"}/>
                                                   <label>Multi Currency</label>
                                               </div>

                                               <div className="iphone-feature-pod">
                                                   <img src={"/images/icons/pension.svg"}/>
                                                   <label>Card Transaction</label>
                                               </div>

                                               <div className="iphone-feature-pod">
                                                   <img src={"/images/icons/ai_savings.svg"}/>
                                                   <label>Investment</label>
                                               </div>
                                           </div>

                                   </div>

                               </div>
                              {/*layer 2 end*/}

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
