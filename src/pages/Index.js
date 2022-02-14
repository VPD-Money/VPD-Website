import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import $ from 'jquery';
import Main from '../layouts/Main';
import media_query_values from '../data/MediaQuery';
import MainSplashScreen from '../components/Animations/MainSplashScreen';
import Navigation from '../components/Template/Navigation';
import Footer from '../components/Template/Footer';


class Index extends Component {

    constructor(props) {
        super(props);
        this.screenImageLetter = '';
        this.handleScroll = this.handleScroll.bind(this);

        this.state = {
            slideCompleted: false
        };

    }


   render(){
       let sliderCompletedState = localStorage.getItem("slider-completed");
       if(sliderCompletedState === "true") this.state.slideCompleted = true;
       localStorage.setItem("slider-completed","false");

       const {slideCompleted} = this.state;

       const {isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina} = JSON.parse(this.props.deviceType);

       if (isMobile && isPortrait) this.screenImageLetter = '_m';
       else if (isMobile && !isPortrait) this.screenImageLetter = '_d';

       else if (isTablet && isPortrait) this.screenImageLetter = '_t';
       else if (isTablet && !isPortrait) this.screenImageLetter = '_d';

       else if (isDesktopOrLaptop) this.screenImageLetter = '_d';
       else this.screenImageLetter = '_b';

       return <Main title={"Discover the bank of you"} description={"VPD Money delivers high-quality personal \n" +
       "banking services and business bank apps for the unbanked in \n" +
       "Africa and beyond. Discover the bank of you today."}>
           {!slideCompleted && <MainSplashScreen  onSlideCompleted={ () => { this.setState({slideCompleted: true }); localStorage.setItem("slider-completed", "true"); } } /> }
           {
               slideCompleted &&
               <HelmetProvider>
                           <div className="layer-wrapper">
                               <div id="screenImageLetter">{this.screenImageLetter}</div>
                               <Navigation />

                               {/*layer 1 begin*/}
                               <div className="layer-1">
                                   <div className="bannerFrame">
                                       <div class="layer-1-overlay"></div>
                                       <div className="layer-1-sub-text">
                                           VPD Money delivers high-quality personal banking services and business bank apps for the unbanked in Africa and beyond. Discover the bank of you today
                                       </div>

                                       <div className="main_banner_text_group">
                                           <div className="main_banner_text">
                                               The bank of <span>You</span>
                                           </div>
                                           <div className="row main_banner_text_action_section">
                                               <div className="col-10">
                                                   <div className="main_banner_text_action_section_white_bar">&nbsp;</div>
                                               </div>
                                               <div className="col-2">
                                                  <button className={"open-download-overlay"}>Get Started</button>
                                               </div>
                                           </div>`
                                       </div>

                                       <div className="mainBanner">
                                           <img  src={"/images/main_banner" + (this.screenImageLetter) + ".webp"}/>

                                       </div>
                                   </div>
                               </div>
                               {/*layer 1 end*/}

                               {/*layer 2 begin*/}
                               <div className="layer-2">

                                   <div className="layer-2-main-text-group">
                                       <div className="layer-2-main-text"> Create <span>your</span> own</div>
                                       <div className="layer-2-main-text"> banking experience </div>
                                       <div className="layer-2-main-text-2"> Customize your banking experience by choosing from an array of banking features</div>
                                   </div>

                                   <div className="row layer-2-main-iphone-group">
                                           <div className="col-4">
                                              <div preview={"/images/iphone_screens/iphone_dashboard_cashback"}  className="iphone-feature-pod">
                                                 <img src={"/images/icons/cashback.svg"}/>
                                                 <label>Cashback</label>
                                               </div>

                                               <div preview={"/images/iphone_screens/iphone_dashboard"}  className="iphone-feature-pod">
                                                   <img src={"/images/icons/transfer.svg"}/>
                                                   <label>Borderless Transfer</label>
                                               </div>

                                               <div preview={"/images/iphone_screens/iphone_dashboard"}  className="iphone-feature-pod">
                                                   <img src={"/images/icons/ai_savings.svg"}/>
                                                   <label>AI Savings</label>
                                               </div>

                                               <div preview={"/images/iphone_screens/iphone_dashboard_recurring"}  className="iphone-feature-pod">
                                                   <img src={"/images/icons/recurring.svg"}/>
                                                   <label>Recurring Transactions</label>
                                               </div>

                                               <div preview={"/images/iphone_screens/iphone_dashboard_payment_request"}  className="iphone-feature-pod">
                                                   <img src={"/images/icons/payment-request.svg"}/>
                                                   <label>Payment Request</label>
                                               </div>

                                           </div>
                                           <div className="col-4">
                                               <div preview={"/images/iphone_screens/iphone_dashboard_utility_payment"}  className="iphone-feature-pod" id="iphone-feature-pod-1">
                                                   <img src={"/images/icons/utility-payment.svg"}/>
                                                   <label>Utility Payment</label>
                                               </div>
                                               <label className="iphone_frame_pretext">Hover on any box to change phone screen</label>
                                               <img preview={this.screenImageLetter} className="iphone_frame" src={"/images/iphone_screens/iphone_dashboard.webp"} />
                                               <button className={"open-download-overlay"}>{(this.screenImageLetter === "_m")? "Get Started" : "Start Creating your Banking Experience"}&nbsp; &nbsp;&nbsp;<span><img src="/images/icons/arrow-right-white.svg"/><img src="/images/icons/arrow-right-white.svg"/></span></button>

                                               <div className="iphone_frame_mobile_cards">
                                                   <div preview={"/images/iphone_screens/iphone_dashboard_multicurrency"}  className="iphone-feature-pod-mobile">
                                                       <img src={"/images/icons/utility-payment.svg"}/>
                                                       <label>Multi Currency</label>
                                                   </div>

                                                   <div preview={"/images/iphone_screens/iphone_dashboard_multicurrency"}  className="iphone-feature-pod-mobile">
                                                       <img src={"/images/icons/utility-payment.svg"}/>
                                                       <label>Multi Currency</label>
                                                   </div>

                                                   <div preview={"/images/iphone_screens/iphone_dashboard_multicurrency"}  className="iphone-feature-pod-mobile">
                                                       <img src={"/images/icons/utility-payment.svg"}/>
                                                       <label>Multi Currency</label>
                                                   </div>

                                               </div>

                                           </div>
                                           <div className="col-4">
                                              <div preview={"/images/iphone_screens/iphone_dashboard_analytics"} className="iphone-feature-pod">
                                                   <img  src={"/images/icons/analytics.svg"}/>
                                                   <label>Analytics</label>
                                               </div>

                                               <div preview={"/images/iphone_screens/iphone_dashboard"}  className="iphone-feature-pod">
                                                   <img src={"/images/icons/utility-payment.svg"}/>
                                                   <label>Multi Currency</label>
                                               </div>

                                               <div preview={"/images/iphone_screens/iphone_dashboard_card_transaction"} className="iphone-feature-pod">
                                                   <img src={"/images/icons/credit-card-transactions.svg"}/>
                                                   <label>Card Transactions</label>
                                               </div>

                                               <div preview={"/images/iphone_screens/iphone_dashboard"}  className="iphone-feature-pod">
                                                   <img src={"/images/icons/transfer.svg"}/>
                                                   <label>Investment</label>
                                               </div>
                                           </div>

                                   </div>

                               </div>
                              {/*layer 2 end*/}

                               {/*layer 3 begin*/}
                               <div className="layer-3">
                                   <div className="layer-3-ribbon">

                                       <div className="col-12">
                                           <label className="layer-3-ribbon-title">ACCOUNT FEATURES</label>

                                           <div className="layer-3-ribbon-groups">
                                                   <div className="layer-3-ribbon-groups-title">
                                                     <div className="layer-3-ribbon-groups-title-flex">
                                                       <div className="layer-3-ribbon-groups-title-image">
                                                          <img src={"/images/icons/features_borderless"+ (this.screenImageLetter) + ".webp"}/>
                                                       </div>
                                                      <label>Free Borderless<br/>account opening</label>
                                                     </div>
                                                       <div className="layer-3-ribbon-groups-content">
                                                           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                       </div>
                                                   </div>

                                                   <div className="layer-3-ribbon-groups-title">
                                                       <div className="layer-3-ribbon-groups-title-flex">
                                                       <div className="layer-3-ribbon-groups-title-image">
                                                          <img src={"/images/icons/features_transfer"+ (this.screenImageLetter) + ".webp"}/>
                                                       </div>
                                                       <label>Borderless Funds<br/>Transfer</label>
                                                       </div>
                                                       <div className="layer-3-ribbon-groups-content">
                                                           Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                       </div>
                                                   </div>

                                                    <div className="layer-3-ribbon-groups-title">
                                                        <div className="layer-3-ribbon-groups-title-flex">
                                                        <div className="layer-3-ribbon-groups-title-image">
                                                           <img src={"/images/icons/features_card"+ (this.screenImageLetter) + ".webp"}/>
                                                        </div>
                                                        <label>Link multiple accounts<br/>to a single card</label>`
                                                        </div>
                                                        <div className="layer-3-ribbon-groups-content">
                                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                                        </div>
                                                   </div>

                                           </div>
                                       </div>

                                   </div>
                               </div>
                               {/*layer 3 end*/}

                               {/*layer 4 begin*/}
                               <div className="layer-4">

                                   <div className="layer-4-group">
                                       <div className="layer-4-section">
                                            <label className="layer-4-section-title">ABOUT VPD MONEY</label>
                                            <label className="layer-4-section-body">VPD Money delivers financial freedom, access and opportunity to the unbanked, offering the borderless flexibility you need to make the most of your money. Welcome to VPD, the bank of you.</label>
                                            <label className="layer-4-section-body">1.7 billion people worldwide are unbanked. We help individuals from all over the world harness the power of banking and build their own bank with high security, world-class features, and frictionless design that is as flexible as you are. One application is all it takes.</label>
                                            <label className="layer-4-section-button">
                                                <Link to="/aboutus"><button>Learn More &nbsp;&nbsp;&nbsp; ></button></Link>
                                            </label>
                                       </div>
                                       <div className="layer-4-section">
                                           <img src={"/images/about_vpd_stack"+ (this.screenImageLetter) + ".webp"}/>
                                       </div>
                                   </div>

                               </div>
                               {/*layer 4 end*/}

                               {/*layer 5 begin*/}
                               <div className="layer-5">
                                   <div className="layer-5-group">
                                       <div className="layer-5-section-1">
                                         <label className="headingLabel">Personal</label>
                                         <label className="headingLabelAlt">Personal</label>
                                         <img src={"/images/iphone_screens/index_personal_phone"+ (this.screenImageLetter) + ".webp"}/>
                                         <div>
                                             Personal is purpose-built for individuals, delivering flexibility with better user experience.
                                             <Link to="/personal"><button>Learn More&nbsp;&nbsp;&nbsp;&nbsp;></button></Link>
                                         </div>
                                       </div>
                                       <div className="layer-5-section-2">
                                           <label className="headingLabel">Business</label>
                                           <label className="headingLabelAlt">Business</label>
                                           <img src={"/images/iphone_screens/index_business_phone"+ (this.screenImageLetter) + ".webp"}/>
                                           <div>
                                               Business provides the borderless solution you need to make and take payments in one place.
                                               <Link to="/business"><button>Learn More&nbsp;&nbsp;&nbsp;&nbsp;></button></Link>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               {/*layer 5 end*/}

                               <Footer />
                          </div>
              </HelmetProvider>

           }


       </Main>;
   }


    componentDidMount() {

        if(this.screenImageLetter !== "_m")
        {
            $(document).on("mouseenter", ".layer-5-section-1 img", function () {

                let screenImageLetter = $("#screenImageLetter").text();

                $(".layer-5-section-1 img").animate({'margin-left': '6vw'});
                $(".layer-5-section-1 .headingLabelAlt").show();
                $(".layer-5-section-1 .headingLabelAlt").animate({
                    'margin-left': '25vw',
                    'margin-top': '8.5vw'
                });
                $(".layer-5-section-1 .headingLabel").css('color', '#012E45');
                $(".layer-5-section-1 div").fadeIn(800);
                $(".layer-5-section-1 .headingLabelAlt").fadeIn(10);

            });

            $(document).on("mouseleave", ".layer-5-section-1", function () {
                $(".layer-5-section-1 img").animate({'margin-left': '15vw'});
                $(".layer-5-section-1 .headingLabelAlt").animate({'margin-left': '20vw', 'margin-top': '-3.7vh'});
                $(".layer-5-section-1 .headingLabelAlt").fadeOut(500);
                setTimeout(function () {
                    $(".layer-5-section-1 .headingLabel").css('color', '#33B8FF');
                }, 500);
                $(".layer-5-section-1 div").fadeOut(100);
            });

            $(document).on("mouseenter", ".layer-5-section-2 img", function () {

                let screenImageLetter = $("#screenImageLetter").text();

                $(".layer-5-section-2 img").animate({'margin-left': '6vw'});
                $(".layer-5-section-2 .headingLabelAlt").show();
                $(".layer-5-section-2 .headingLabelAlt").animate({
                    'margin-left': '25vw',
                    'margin-top': '8.5vw'
                });
                $(".layer-5-section-2 .headingLabel").css('color', '#011B29');
                $(".layer-5-section-2 div").fadeIn(800);
                $(".layer-5-section-2 .headingLabelAlt").fadeIn(10);
            });

            $(document).on("mouseleave", ".layer-5-section-2", function () {
                $(".layer-5-section-2 img").animate({'margin-left': '15vw'});
                $(".layer-5-section-2 .headingLabelAlt").animate({'margin-left': '20vw', 'margin-top': '-3.7vh'});
                $(".layer-5-section-2 .headingLabelAlt").fadeOut(500);
                setTimeout(function () {
                    $(".layer-5-section-2 .headingLabel").css('color', '#33B8FF');
                }, 500);
                $(".layer-5-section-2 div").fadeOut(100);
            });

            // var distance = $('.layer-2').offset().top;
            //
            // $(window).scroll(function() {
            //     if ( $(this).scrollTop() >= distance ) {
            //         console.log('is in top');
            //     } else {
            //         console.log('is not in top');
            //     }
            // });

        }

            $(document).on("mouseenter",".iphone-feature-pod",function ()
            {
                    // let screenImageLetter = $(".iphone_frame").attr("preview");
                    var path = $(this).attr("preview") + ".webp";
                    $(".iphone_frame").attr("src", path);

            });

    }

    // scroll event handler
    handleScroll() {

        var menuColor="white";

        // Get the bounding client rectangle position in the viewport
        let layer2_bounding = document.getElementsByClassName("layer-2")[0].getBoundingClientRect();
        if( layer2_bounding.top < 20 ) menuColor="white"

        let layer3_bounding = document.getElementsByClassName("layer-3")[0].getBoundingClientRect();
        if( layer3_bounding.top < 50 ) menuColor="black"

        let layer4_bounding = document.getElementsByClassName("layer-4")[0].getBoundingClientRect();
        if( layer4_bounding.top < 50 ) menuColor="black"

        let layer5_bounding = document.getElementsByClassName("layer-5")[0].getBoundingClientRect();
        if( layer5_bounding.top < 20 ) menuColor="white"

        // console.log(layer3_bounding);
        console.log(menuColor);

        let layer5x_bounding = document.getElementsByClassName("Navlinks")[0].getBoundingClientRect();
        console.log(layer5x_bounding);
        //
        // Checking part. Here the code checks if it's *fully* visible
        // Checking part. Here the code checks if it's *fully* visible
        // Edit this part if you just want a partial visibility
        // if (
        //     bounding.top >= 0 &&
        //     bounding.left >= 0 &&
        //     bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        //     bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        // ) {
        //     console.log('In the viewport! :)');
        //     return true;
        // } else {
        //     console.log('Not in the viewport. :(');
        //     return false;
        // }


    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    };

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    };

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

export default attachDeviceTypeHook(Index);
