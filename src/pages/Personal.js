import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { HelmetProvider } from 'react-helmet-async';
import $ from 'jquery';
import Main from '../layouts/Main';
import media_query_values from '../data/MediaQuery';
import NavigationDeep from '../components/Template/NavigationDeep';
import Footer from '../components/Template/Footer';

class Personal extends Component {

    constructor(props) {
        super(props);
        this.screenImageLetter = '';
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

        if (isMobile && isPortrait) this.screenImageLetter = '_m';
        else if (isMobile && !isPortrait) this.screenImageLetter = '_d';

        else if (isTablet && isPortrait) this.screenImageLetter = '_t';
        else if (isTablet && !isPortrait) this.screenImageLetter = '_d';

        else if (isDesktopOrLaptop) this.screenImageLetter = '_d';
        else this.screenImageLetter = '_b';

        return <Main title={"Personal"} description={"A bank of you"}>
            <HelmetProvider>
                <div className="row container-fluid">
                    <div className="layer-wrapper">
                        <NavigationDeep/>

                        <div className="personal-layer-1">
                            <img className="bg_image" src={"/images/business_personal_main_bg" + (this.screenImageLetter) + ".png"} />

                            <div className="personal-layer-1-component">
                                <div className="personal-layer-1-component-sub-1">
                                    <label className="personal-layer-1-component-category">PERSONAL</label>
                                    <label className="personal-layer-1-component-heading">Create your own Banking Experience</label>
                                    <label className="personal-layer-1-component-heading-alt">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</label>

                                    <div className="personal-layer-1-component-sub-1-mini-1">
                                        <label id="component-label-1">Recurring Transactions</label>
                                        <label id="component-label-2">Utility Payments</label>
                                        <label id="component-label-3">Cashback</label>
                                        <label id="component-label-4">Card Transactions</label>
                                        <label id="component-label-5">Sub Accounts</label>
                                        <label id="component-label-6">Analytics</label>
                                        <label id="component-label-7">Borderless Transfers</label>
                                    </div>
                                    <div className="personal-layer-1-component-sub-1-mini-2">
                                        <button>
                                            Get the App &nbsp;&nbsp;&nbsp;<img src="/images/icons/arrow-right-white.svg"/>
                                        </button>
                                        <div className="component-icon-group">
                                            <img label="1" className="component-icon" src="/images/icons/recurring-transaction.png"/>
                                        </div>
                                        <div className="component-icon-group">
                                            <img label="2" className="component-icon" src="/images/icons/utility-payment.png"/>
                                        </div>
                                        <div className="component-icon-group">
                                            <img label="3" className="component-icon" src="/images/icons/cashback.png"/>
                                        </div>
                                        <div className="component-icon-group">
                                            <img label="4" className="component-icon" src="/images/icons/card-transactions.png"/>
                                        </div>
                                        <div className="component-icon-group">
                                            <img label="5" className="component-icon" src="/images/icons/subaccount.png"/>
                                        </div>
                                        <div className="component-icon-group">
                                            <img label="6" className="component-icon" src="/images/icons/analytics.png"/>
                                        </div>
                                        <div className="component-icon-group">
                                            <img label="7" className="component-icon" src="/images/icons/borderless-transfer.png"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="personal-layer-1-component-sub-2">
                                    <img src={"/images/personal_main_phone"+ (this.screenImageLetter) + ".png"}/>
                                </div>
                            </div>

                        </div>

                        <div className="personal-layer-2">
                            <div className="personal-layer-2-group">
                                <div className="personal-layer-2-group-1">
                                    <img src="/images/personal_frame_details.png"/>
                                </div>
                                <div className="personal-layer-2-group-2">
                                    <div className="personal-layer-2-group-2-slider">
                                        <img id="personal-layer-2-slide-left" src="/images/icons/arrow-left-black-faded.svg"/>
                                        <div className="personal-layer-2-slide-icon-group">
                                            <img src="/images/icons/recurring-transaction.png"/>
                                            <label>Recurring Transactions</label>
                                        </div>
                                        <div className="personal-layer-2-slide-icon-group-preview icon-preview-1">
                                            <img src="/images/icons/utility-payment.png"/>
                                            <label>Utility Payment</label>
                                        </div>
                                        <div className="personal-layer-2-slide-icon-group-preview icon-preview-2">
                                            <img src="/images/icons/cashback.png"/>
                                            <label>Cashback</label>
                                        </div>
                                        <div className="personal-layer-2-slide-icon-group-preview icon-preview-3">
                                            <img src="/images/icons/card-transactions.png"/>
                                            <label>Card Transactions</label>
                                        </div>
                                        <div className="personal-layer-2-slide-icon-group-preview icon-preview-4">
                                            <img src="/images/icons/subaccount.png"/>
                                            <label>Sub Accounts</label>
                                        </div>

                                        <img id="personal-layer-2-slide-right" src="/images/icons/arrow-right-black.svg"/>

                                    </div>
                                    <div className="personal-layer-2-group-2-header">Sign up in minutes</div>
                                    <div className="personal-layer-2-group-2-text-1">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div>
                                    <div className="personal-layer-2-group-2-text-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna</div>
                                </div>
                            </div>
                        </div>

                        <Footer/>
                    </div>
                </div>
            </HelmetProvider>
        </Main>
    }

    componentDidMount()
    {
        $(document).on("mouseenter",".component-icon-group img",function(){
            $(this).animate({'margin-top':'-1vh','zoom' : '120%'},10);
            $("#component-label-"+$(this).attr("label")).css("color","white");
            $("#component-label-"+$(this).attr("label")).animate({'margin-top':'-2.5vh'},10);
        });

        $(document).on("mouseleave",".component-icon-group img",function(){
            $(this).animate({'margin-top':'1vh','zoom' : '100%'},10);
            $("#component-label-"+$(this).attr("label")).css("color","transparent");
            $("#component-label-"+$(this).attr("label")).animate({'margin-top':'-2vh'},10);
        });

        var currentSlideNumber=0;

        let slider_values=[
            {
                title:"Recurring Transactions",
                url:"/images/icons/recurring-transaction.png",
                image:"/images/personal_frame_details.png",
                heading:"Sign up in minutes",
                content1:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
                content2:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
            },
            {
                title:"Utility Payment",
                url:"/images/icons/utility-payment.png",
                image:"/images/business_frame_details.png",
                heading:"Create and send Invoices",
                content1:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
                content2:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
            },
            {
                title:"Cashback",
                url:"/images/icons/cashback.png",
                image:"/images/personal_frame_details.png",
                heading:"Create multiple Sub accounts",
                content1:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
                content2:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
            },
            {
                title:"Card Transactions",
                url:"/images/icons/card-transactions.png",
                image:"/images/business_frame_details.png",
                heading:"Sign up in minutes 2",
                content1:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
                content2:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
            },
            {
                title:"Sub Accounts",
                url:"/images/icons/subaccount.png",
                image:"/images/personal_frame_details.png",
                heading:"Sign up in minutes 3",
                content1:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
                content2:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
            },
            {
                title:"Analytics",
                url:"/images/icons/analytics.png",
                image:"/images/business_frame_details.png",
                heading:"Sign up in minutes 4",
                content1:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
                content2:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
            },
            {
                title:"Borderless Transfer",
                url:"/images/icons/borderless-transfer.png",
                image:"/images/personal_frame_details.png",
                heading:"Sign up in minutes 5",
                content1:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna",
                content2:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna"
            }
        ];

        let totalSlideIndex = slider_values.length>0? slider_values.length-1 : 0;

        $(document).on("click","#personal-layer-2-slide-left",function () {

            if(currentSlideNumber > 0 && currentSlideNumber <= totalSlideIndex)
            {
                currentSlideNumber--;
                $(".personal-layer-2-slide-icon-group img").attr("src",slider_values[currentSlideNumber].url);
                $(".personal-layer-2-slide-icon-group label").text(slider_values[currentSlideNumber].title);
                $(".personal-layer-2-group-1 img").attr("src",slider_values[currentSlideNumber].image);
                $(".personal-layer-2-group-2-header").text(slider_values[currentSlideNumber].heading);
                $(".personal-layer-2-group-2-text-1").text(slider_values[currentSlideNumber].content1);
                $(".personal-layer-2-group-2-text-2").text(slider_values[currentSlideNumber].content2);
                $("#personal-layer-2-slide-right").css("cursor","pointer");

                //Preview list icons
                if(totalSlideIndex - currentSlideNumber > 0)
                {
                    $(".icon-preview-1").css("opacity",0.5);
                    $(".icon-preview-1 img").attr("src",slider_values[currentSlideNumber + 1].url);
                    $(".icon-preview-1 label").text(slider_values[currentSlideNumber + 1].title);
                }
                else $(".icon-preview-1").css("opacity",0);

                if(totalSlideIndex - currentSlideNumber > 1)
                {
                    $(".icon-preview-2").css("opacity",0.5);
                    $(".icon-preview-2 img").attr("src",slider_values[currentSlideNumber + 2].url);
                    $(".icon-preview-2 label").text(slider_values[currentSlideNumber + 2].title);
                }
                else $(".icon-preview-2").css("opacity",0);

                if(totalSlideIndex - currentSlideNumber > 2)
                {
                    $(".icon-preview-3").css("opacity",0.5);
                    $(".icon-preview-3 img").attr("src",slider_values[currentSlideNumber + 3].url);
                    $(".icon-preview-3 label").text(slider_values[currentSlideNumber + 3].title);
                }
                else $(".icon-preview-3").css("opacity",0);

                if(totalSlideIndex - currentSlideNumber > 3)
                {
                    $(".icon-preview-4").css("opacity",0.5);
                    $(".icon-preview-4 img").attr("src",slider_values[currentSlideNumber + 4].url);
                    $(".icon-preview-4 label").text(slider_values[currentSlideNumber + 4].title);
                }
                else $(".icon-preview-4").css("opacity",0);

                if(currentSlideNumber === 0) {
                    $("#personal-layer-2-slide-left").css("cursor","default");
                }
            }

        });

        $(document).on("click","#personal-layer-2-slide-right",function () {

            if(currentSlideNumber < totalSlideIndex)
            {
                currentSlideNumber++;
                $(".personal-layer-2-slide-icon-group img").attr("src",slider_values[currentSlideNumber].url);
                $(".personal-layer-2-slide-icon-group label").text(slider_values[currentSlideNumber].title);
                $(".personal-layer-2-group-1 img").attr("src",slider_values[currentSlideNumber].image);
                $(".personal-layer-2-group-2-header").text(slider_values[currentSlideNumber].heading);
                $(".personal-layer-2-group-2-text-1").text(slider_values[currentSlideNumber].content1);
                $(".personal-layer-2-group-2-text-2").text(slider_values[currentSlideNumber].content2);
                $("#personal-layer-2-slide-left").css("cursor","pointer");

                //Preview list icons
                if(totalSlideIndex - currentSlideNumber >0)
                {
                    $(".icon-preview-1").css("opacity",0.5);
                    $(".icon-preview-1 img").attr("src",slider_values[currentSlideNumber + 1].url);
                    $(".icon-preview-1 label").text(slider_values[currentSlideNumber + 1].title);
                }
                else $(".icon-preview-1").css("opacity",0);

                if(totalSlideIndex - currentSlideNumber > 1)
                {
                    $(".icon-preview-2").css("opacity",0.5);
                    $(".icon-preview-2 img").attr("src",slider_values[currentSlideNumber + 2].url);
                    $(".icon-preview-2 label").text(slider_values[currentSlideNumber + 2].title);
                }
                else $(".icon-preview-2").css("opacity",0);

                if(totalSlideIndex - currentSlideNumber > 2)
                {
                    $(".icon-preview-3").css("opacity",0.5);
                    $(".icon-preview-3 img").attr("src",slider_values[currentSlideNumber + 3].url);
                    $(".icon-preview-3 label").text(slider_values[currentSlideNumber + 3].title);
                }
                else $(".icon-preview-3").css("opacity",0);

                if(totalSlideIndex - currentSlideNumber > 3)
                {
                    $(".icon-preview-4").css("opacity",0.5);
                    $(".icon-preview-4 img").attr("src",slider_values[currentSlideNumber + 4].url);
                    $(".icon-preview-4 label").text(slider_values[currentSlideNumber + 4].title);
                }
                else $(".icon-preview-4").css("opacity",0);

                if(currentSlideNumber === totalSlideIndex) {
                    $("#personal-layer-2-slide-right").css("cursor","default");
                }

            }


        });

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
        let objVals = JSON.stringify({isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina});

        return <Component {...props} deviceType={objVals} />;
    }
}

export default attachDeviceTypeHook(Personal);
