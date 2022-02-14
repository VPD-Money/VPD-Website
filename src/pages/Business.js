import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import { HelmetProvider } from 'react-helmet-async';
import $ from 'jquery';
import Main from '../layouts/Main';
import media_query_values from '../data/MediaQuery';
import NavigationDeep from '../components/Template/NavigationDeep';
import Footer from '../components/Template/Footer';

class Business extends Component {

    constructor(props) {
        super(props);
        this.screenImageLetter = '';
    }


    render() {
        const {isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isSmallMobile,isPortrait,isRetina} = JSON.parse(this.props.deviceType);

        if (isSmallMobile) this.screenImageLetter = '_m';
        else if (isSmallMobile && !isPortrait) this.screenImageLetter = '_d';

        else if (isMobile && isPortrait) this.screenImageLetter = '_m';
        else if (isMobile && !isPortrait) this.screenImageLetter = '_d';

        else if (isTablet && isPortrait) this.screenImageLetter = '_t';
        else if (isTablet && !isPortrait) this.screenImageLetter = '_d';

        else if (isDesktopOrLaptop) this.screenImageLetter = '_d';
        else this.screenImageLetter = '_b';

        return <Main title={"Business"} description={"A bank of you"}>
            <HelmetProvider>
                <div className="row container-fluid">
                    <div className="layer-wrapper">
                        <NavigationDeep/>

                        <div className="business-layer-1">
                            <img className="bg_image" src={"/images/business_personal_main_bg" + (this.screenImageLetter) + ".webp"} />

                            <div className="business-layer-1-component">
                                <div className="business-layer-1-component-sub-1">
                                    <label className="business-layer-1-component-category">BUSINESS</label>
                                    <label className="business-layer-1-component-heading">All your business tools in one place</label>
                                    <label className="business-layer-1-component-heading-mobile">Let's get down to business</label>
                                    <label className="business-layer-1-component-heading-alt">Business provides the borderless solution you need to make and take payments in one place.</label>

                                    <div className="business-layer-1-component-sub-1-mini-1">
                                        <label id="component-label-1">Payroll</label>
                                        <label id="component-label-2">Account Statement</label>
                                        <label id="component-label-3">Invoice</label>
                                        <label id="component-label-4">Customers</label>
                                        <label id="component-label-5">Sub Accounts</label>
                                        <label id="component-label-6">PaySlip</label>
                                        <label id="component-label-7">Product & Services </label>
                                    </div>
                                   <div className="business-layer-1-component-sub-1-mini-2">
                                       <button className={"open-download-overlay"}>
                                           Get the App &nbsp;&nbsp;&nbsp;<img src="/images/icons/arrow-right-white.svg"/>
                                       </button>
                                       <div className="component-icon-group">
                                           <img label="1" className="component-icon" src="/images/icons/payroll.webp"/>
                                       </div>
                                       <div className="component-icon-group">
                                           <img label="2" className="component-icon" src="/images/icons/account-report.webp"/>
                                       </div>
                                       <div className="component-icon-group">
                                           <img label="3" className="component-icon" src="/images/icons/invoice.webp"/>
                                       </div>
                                       <div className="component-icon-group">
                                           <img label="4" className="component-icon" src="/images/icons/customers.webp"/>
                                       </div>
                                       <div className="component-icon-group">
                                           <img label="5" className="component-icon" src="/images/icons/sub-accounts.webp"/>
                                       </div>
                                       <div className="component-icon-group">
                                           <img label="6" className="component-icon" src="/images/icons/payslip.webp"/>
                                       </div>
                                       <div className="component-icon-group">
                                           <img label="7" className="component-icon" src="/images/icons/product-services.webp"/>
                                       </div>
                                </div>
                                   </div>

                                <div className="business-layer-1-component-sub-2">
                                    <img src={"/images/business_main_phone"+ (this.screenImageLetter) + ".webp"}/>
                                </div>
                            </div>

                        </div>

                        <div id="features" className="business-layer-2">
                            <div className="business-layer-2-group">
                                <div className="business-layer-2-group-1">
                                    <img src="/images/business_frame_payroll.webp"/>
                                </div>
                                <div className="business-layer-2-group-2">
                                    <div className="business-layer-2-group-2-slider">
                                        <img id="business-layer-2-slide-left" src="/images/icons/arrow-left-black-faded.svg"/>
                                            <div className="business-layer-2-slide-icon-group">
                                                <img src="/images/icons/payroll.webp"/>
                                                <label>Payroll</label>
                                            </div>
                                            <div className="business-layer-2-slide-icon-group-preview icon-preview-1">
                                                <img src="/images/icons/account-report.webp"/>
                                                <label>Account Statement</label>
                                            </div>
                                            <div className="business-layer-2-slide-icon-group-preview icon-preview-2">
                                                <img src="/images/icons/invoice.webp"/>
                                                <label>Invoice</label>
                                            </div>
                                            <div className="business-layer-2-slide-icon-group-preview icon-preview-3">
                                                <img src="/images/icons/customers.webp"/>
                                                <label>Customers</label>
                                            </div>
                                            <div className="business-layer-2-slide-icon-group-preview icon-preview-4">
                                                <img src="/images/icons/sub-accounts.webp"/>
                                                <label>Sub Accounts</label>
                                            </div>
                                        <img id="business-layer-2-slide-right" src="/images/icons/arrow-right-black.svg"/>

                                    </div>
                                    <div className="business-layer-2-group-2-header">Payroll</div>
                                    <div className="business-layer-2-group-2-text-1">Ensure your employees and contractors are paid on time with our
                                        simple, practical payroll payment service, ensuring fast payment
                                        month on month. </div>
                                    <div className="business-layer-2-group-2-text-2"> </div>
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
                title:"Payroll",
                url:"/images/icons/sub-accounts.webp",
                image:"/images/business_frame_payroll.webp",
                heading:"Payroll",
                content1:"Ensure your employees and contractors are paid on time with our\n" +
                    "simple, practical payroll payment service, ensuring fast payment\n" +
                    "month on month. ",
                content2:""
            },
            {
                title:"Account Statement",
                url:"/images/icons/account-report.webp",
                image:"/images/business_frame_account_report.webp",
                heading:"Account Statement",
                content1:"Keep an eye on account activity, check out your latest transactions\n" +
                    "and more. Everything is right here for you to view.",
                content2:""
            },
            {
                title:"Invoices",
                url:"/images/icons/invoice.webp",
                image:"/images/business_frame_details.webp",
                heading:"Invoices",
                content1:"",
                content2:""
            },
            {
                title:"Customers",
                url:"/images/icons/customers.webp",
                image:"/images/business_frame_customers.webp",
                heading:"Customers",
                content1:"",
                content2:""
            },

            {
                title:"Sub Accounts",
                url:"/images/icons/sub-accounts.webp",
                image:"/images/business_frame_subaccount.webp",
                heading:"Sub Accounts",
                content1:"",
                content2:""
            },

            {
                title:"Pay Slip",
                url:"/images/icons/payslip.webp",
                image:"/images/business_frame_details.webp",
                heading:"Pay Slip",
                content1:"",
                content2:""
            },
            {
                title:"Product & Services",
                url:"/images/icons/product-services.webp",
                image:"/images/business_frame_product_services.webp",
                heading:"Product & Services",
                content1:"",
                content2:""
            }
        ];

        let totalSlideIndex = slider_values.length>0? slider_values.length-1 : 0;

        //Jump to
        $(document).on("click",".business-layer-2-slide-icon-group-preview",function () {
            var jumpIndex = 0;
            if( $(this).hasClass("icon-preview-2") ) jumpIndex=1;
            if( $(this).hasClass("icon-preview-3") ) jumpIndex=2;
            if( $(this).hasClass("icon-preview-4") ) jumpIndex=3;
            currentSlideNumber+=jumpIndex;
            $("#business-layer-2-slide-right").click();
        });

        $(document).on("click","#business-layer-2-slide-left",function () {

            if(currentSlideNumber > 0 && currentSlideNumber <= totalSlideIndex)
            {
                currentSlideNumber--;
                $(".business-layer-2-slide-icon-group img").attr("src",slider_values[currentSlideNumber].url);
                $(".business-layer-2-slide-icon-group label").text(slider_values[currentSlideNumber].title);
                $(".business-layer-2-group-1 img").attr("src",slider_values[currentSlideNumber].image);
                $(".business-layer-2-group-2-header").text(slider_values[currentSlideNumber].heading);
                $(".business-layer-2-group-2-text-1").text(slider_values[currentSlideNumber].content1);
                $(".business-layer-2-group-2-text-2").text(slider_values[currentSlideNumber].content2);
                $("#business-layer-2-slide-right").css("cursor","pointer");

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
                    $("#business-layer-2-slide-left").css("cursor","default");
                }
            }

        });

        $(document).on("click","#business-layer-2-slide-right",function () {

            if(currentSlideNumber < totalSlideIndex)
            {
                currentSlideNumber++;
                $(".business-layer-2-slide-icon-group img").attr("src",slider_values[currentSlideNumber].url);
                $(".business-layer-2-slide-icon-group label").text(slider_values[currentSlideNumber].title);
                $(".business-layer-2-group-1 img").attr("src",slider_values[currentSlideNumber].image);
                $(".business-layer-2-group-2-header").text(slider_values[currentSlideNumber].heading);
                $(".business-layer-2-group-2-text-1").text(slider_values[currentSlideNumber].content1);
                $(".business-layer-2-group-2-text-2").text(slider_values[currentSlideNumber].content2);
                $("#business-layer-2-slide-left").css("cursor","pointer");

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
                    $("#business-layer-2-slide-right").css("cursor","default");
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

export default attachDeviceTypeHook(Business);
