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
        const {isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina} = JSON.parse(this.props.deviceType);

        if (isMobile && isPortrait) this.screenImageLetter = '_m';
        else if (isMobile && !isPortrait) this.screenImageLetter = '_d';

        else if (isTablet && isPortrait) this.screenImageLetter = '_m';
        else if (isTablet && !isPortrait) this.screenImageLetter = '_d';

        else if (isDesktopOrLaptop) this.screenImageLetter = '_d';
        else this.screenImageLetter = '_b';

        return <Main title={"Personal"} description={"A bank of you"}>
            <HelmetProvider>
                <div className="row container-fluid">
                    <div className="layer-wrapper">
                        <NavigationDeep/>

                        <div className="personal-layer-1">
                            <img className="bg_image" src={"/images/business_personal_main_bg" + (this.screenImageLetter) + ".webp"} />

                            <div className="personal-layer-1-component">
                                <div className="personal-layer-1-component-sub-1">
                                    <label className="personal-layer-1-component-category">PERSONAL</label>
                                    <label className="personal-layer-1-component-heading">Create your own Banking Experience</label>
                                    <label className="personal-layer-1-component-heading-mobile">Let's get personal</label>
                                    <label className="personal-layer-1-component-heading-alt">Access all your financial information in one handy screen that keeps you on track.</label>

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
                                        <button className={"open-download-overlay"}>
                                            Get the App &nbsp;&nbsp;&nbsp;<img src="/images/icons/arrow-right-white.svg"/>
                                        </button>
                                        <div className="component-icon-group">
                                            <img label="1" className="component-icon" src="/images/icons/recurring-transaction.webp"/>
                                        </div>
                                        <div className="component-icon-group">
                                            <img label="2" className="component-icon" src="/images/icons/utility-payment.webp"/>
                                        </div>
                                        <div className="component-icon-group">
                                            <img label="3" className="component-icon" src="/images/icons/cashback.webp"/>
                                        </div>
                                        <div className="component-icon-group">
                                            <img label="4" className="component-icon" src="/images/icons/card-transactions.webp"/>
                                        </div>
                                        <div className="component-icon-group">
                                            <img label="5" className="component-icon" src="/images/icons/subaccount.webp"/>
                                        </div>
                                        <div className="component-icon-group">
                                            <img label="6" className="component-icon" src="/images/icons/analytics.webp"/>
                                        </div>
                                        <div className="component-icon-group">
                                            <img label="7" className="component-icon" src="/images/icons/borderless-transfer.webp"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="personal-layer-1-component-sub-2">
                                    <img src={"/images/personal_main_phone"+ (this.screenImageLetter) + ".webp"}/>
                                </div>
                            </div>

                        </div>

                        <div id="features" className="personal-layer-2">
                            <div className="personal-layer-2-group">
                                <div className="personal-layer-2-group-1">
                                    <img src="/images/personal_frame_recurring.webp"/>
                                </div>
                                <div className="personal-layer-2-group-2">
                                    <div className="personal-layer-2-group-2-slider">
                                        <img id="personal-layer-2-slide-left" src="/images/icons/arrow-left-black-faded.svg"/>
                                        <div className="personal-layer-2-slide-icon-group">
                                            <img src="/images/icons/recurring-transaction.webp"/>
                                            <label>Recurring Transactions</label>
                                        </div>
                                        {/*<div className="personal-layer-2-slide-icon-group-preview icon-preview-1">*/}
                                        {/*    <img src="/images/icons/utility-payment.webp"/>*/}
                                        {/*    <label>Utility Payment</label>*/}
                                        {/*</div>*/}
                                        <div className="personal-layer-2-slide-icon-group-preview icon-preview-1">
                                            <img src="/images/icons/cashback.webp"/>
                                            <label>Cashback</label>
                                        </div>
                                        <div className="personal-layer-2-slide-icon-group-preview icon-preview-2">
                                            <img src="/images/icons/card-transactions.webp"/>
                                            <label>Card Transactions</label>
                                        </div>
                                        <div className="personal-layer-2-slide-icon-group-preview icon-preview-3">
                                            <img src="/images/icons/subaccount.webp"/>
                                            <label>Sub Accounts</label>
                                        </div>
                                        {/*<div className="personal-layer-2-slide-icon-group-preview icon-preview-5">*/}
                                        {/*    <img src="/images/icons/subaccount.webp"/>*/}
                                        {/*    <label>Sub Accounts</label>*/}
                                        {/*</div>*/}

                                        <img id="personal-layer-2-slide-right" src="/images/icons/arrow-right-black.svg"/>

                                    </div>
                                    <div className="personal-layer-2-group-2-header">Recurring Transactions</div>
                                    <div className="personal-layer-2-group-2-text-1">Never miss a payment again with our recurring payment feature,
                                        with specified intervals to ensure everything is paid on time, every
                                        time. </div>
                                    <div className="personal-layer-2-group-2-text-2"> </div>
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
            $(this).animate({'margin-top':'-0.2vw','zoom' : '120%'},10);
            $("#component-label-"+$(this).attr("label")).css("color","white");
            $("#component-label-"+$(this).attr("label")).animate({'margin-top':'-2.5vh'},10);
        });

        $(document).on("mouseleave",".component-icon-group img",function(){
            $(this).animate({'margin-top':'0.8vw','zoom' : '100%'},10);
            $("#component-label-"+$(this).attr("label")).css("color","transparent");
            $("#component-label-"+$(this).attr("label")).animate({'margin-top':'-2vh'},10);
        });

        var currentSlideNumber=0;

        let slider_values=[
            {
                title:"Recurring Transactions",
                url:"/images/icons/recurring-transaction.webp",
                image:"/images/personal_frame_recurring.webp",
                heading:"Recurring Transactions",
                content1:"Never miss a payment again with our recurring payment feature,\n" +
                    "with specified intervals to ensure everything is paid on time, every\n" +
                    "time.",
                content2:""
            },
            // {
            //     title:"Utility Payment",
            //     url:"/images/icons/utility-payment.webp",
            //     image:"/images/personal_frame_utility_payment.webp",
            //     heading:"Utility Payment",
            //     content1:"Never miss a payment again with our recurring payment feature,\n" +
            //         "with specified intervals to ensure everything is paid on time, every\n" +
            //         "time.",
            //     content2:""
            // },
            {
                title:"Cashback",
                url:"/images/icons/cashback.webp",
                image:"/images/personal_frame_cashback.webp",
                heading:"Cashback",
                content1:"Want more for your money? Our instant cashback fills your cashbox\n" +
                    "when you pay bills, subscribe to services and purchase tickets for\n" +
                    "that upcoming event",
                content2:""
            },
            {
                title:"Card Transactions",
                url:"/images/icons/card-transactions.webp",
                image:"/images/personal_frame_card_transactions.webp",
                heading:"Card Transactions",
                content1:"All you need is one single card to carry out all your  transactions, at a reduced cost, making your life simple, better and frictionless.",
                content2:""
            },
            {
                title:"Sub Accounts",
                url:"/images/icons/subaccount.webp",
                image:"/images/personal_frame_subaccounts.webp",
                heading:"Sub Accounts",
                content1:"Why limit yourself when you can have borderless finance at your\n" +
                    "fingertips? Convert and store your money in individual sub-accounts\n" +
                    "for added financial flexibility, with easy sending to other users.",
                content2:""
            }
            // {
            //     title:"Analytics",
            //     url:"/images/icons/analytics.webp",
            //     image:"/images/personal_frame_analytics.webp",
            //     heading:"Analytics",
            //     content1:"",
            //     content2:""
            // },
            // {
            //     title:"Borderless Transfer",
            //     url:"/images/icons/borderless-transfer.webp",
            //     image:"/images/personal_frame_details.webp",
            //     heading:"Borderless Transfer",
            //     content1:"",
            //     content2:""
            // }
        ];


        let totalSlideIndex = slider_values.length>0? slider_values.length-1 : 0;

        //Jump to
        $(document).on("click",".personal-layer-2-slide-icon-group-preview",function () {
            var jumpIndex = 0;
            if( $(this).hasClass("icon-preview-2") ) jumpIndex=1;
            if( $(this).hasClass("icon-preview-3") ) jumpIndex=2;
            if( $(this).hasClass("icon-preview-4") ) jumpIndex=3;
            currentSlideNumber+=jumpIndex;
            $("#personal-layer-2-slide-right").click();
        });

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
                    $("#personal-layer-2-slide-left").fadeIn(500);
                    $("#personal-layer-2-slide-left").css("transform","rotate(0deg)");
                    $("#personal-layer-2-slide-left").attr("src","/images/icons/arrow-left-black-faded.svg")

                }
                else
                {
                    $("#personal-layer-2-slide-right").fadeIn(500);
                    $("#personal-layer-2-slide-right").css("transform","rotate(0deg)");
                    $("#personal-layer-2-slide-right").attr("src","/images/icons/arrow-right-black.svg")
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
                    $("#personal-layer-2-slide-right").fadeIn(500);
                    $("#personal-layer-2-slide-right").css("transform","rotate(180deg)");
                    $("#personal-layer-2-slide-right").attr("src","/images/icons/arrow-left-black-faded.svg");

                }
                else
                {
                    $("#personal-layer-2-slide-left").fadeIn(500);
                    $("#personal-layer-2-slide-left").css("transform","rotate(180deg)");
                    $("#personal-layer-2-slide-left").attr("src","/images/icons/arrow-right-black.svg");

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
        let objVals = JSON.stringify({isBigScreen, isDesktopOrLaptop, isTablet, isMobile, isPortrait, isRetina});

        return <Component {...props} deviceType={objVals} />;
    }
}

export default attachDeviceTypeHook(Personal);
