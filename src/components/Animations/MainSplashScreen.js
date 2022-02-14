import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs';
import {useMediaQuery} from "react-responsive";
import media_query_values from "../../data/MediaQuery";
import PropTypes from 'prop-types';

class MainSplashScreen extends Component {

    constructor(props) {
        super(props);
        this.slideComplete=false;
        this.tooglesGroupId = 'Toggles';
        this.valuesGroupId = 'Values';
        this.screenImageLetter = '';
        this.slideCompleted = false;

    }

    getConfigurableProps = () => ({
        showArrows: boolean('showArrows', false, this.tooglesGroupId),
        showStatus: boolean('showStatus', false, this.tooglesGroupId),
        showIndicators: boolean('showIndicators', false, this.tooglesGroupId),
        infiniteLoop: boolean('infiniteLoop', false, this.tooglesGroupId),
        showThumbs: boolean('showThumbs', false, this.tooglesGroupId),
        useKeyboardArrows: boolean('useKeyboardArrows', false, this.tooglesGroupId),
        autoPlay: boolean('autoPlay', true, this.tooglesGroupId),
        stopOnHover: boolean('stopOnHover', false, this.tooglesGroupId),
        swipeable: boolean('swipeable', false, this.tooglesGroupId),
        dynamicHeight: boolean('dynamicHeight', false, this.tooglesGroupId),
        emulateTouch: boolean('emulateTouch', false, this.tooglesGroupId),
        autoFocus: boolean('autoFocus', true, this.tooglesGroupId),
        thumbWidth: number('thumbWidth', 100, {}, this.valuesGroupId),
        selectedItem: number('selectedItem', 0, {}, this.valuesGroupId),
        interval: number('interval', 1000, {}, this.valuesGroupId),
        transitionTime: number('transitionTime', 500, {}, this.valuesGroupId),
        swipeScrollTolerance: number('swipeScrollTolerance', 5, {}, this.valuesGroupId),
        ariaLabel: text('ariaLabel', undefined),
    });

    render(){

        const {isBigScreen,isDesktopOrLaptop,isTablet,isMobile,isPortrait,isRetina} = JSON.parse(this.props.deviceType);

        if (isMobile && isPortrait) this.screenImageLetter = '_m';
        else if (isMobile && !isPortrait) this.screenImageLetter = '_d';

        else if (isTablet && isPortrait) this.screenImageLetter = '_t';
        else if (isTablet && !isPortrait) this.screenImageLetter = '_d';

        else if (isDesktopOrLaptop) this.screenImageLetter = '_d';
        else this.screenImageLetter = '_b';

        const onChangeEvent = (e) => {
            const { onSlideCompleted } = this.props

            if (4 === e && !this.slideCompleted) {
                this.slideCompleted = true;

                let timeout = setTimeout(function () {
                  onSlideCompleted();
                    clearTimeout(timeout);
                }, 2000);

            }
        }


        return <div className="carouselFrame">

            <Carousel {...this.getConfigurableProps()} animationHandler="fade" onChange={onChangeEvent} swipeable={false}
                      className="presentation-mode">
                <div key="splash_person_box_1" alt="Bank of Sarah">
                    <img src={"/images/splash_person_1" + (this.screenImageLetter) + ".webp"}/>
                    <div className="carouselFrameCaption">
                        <span className="carouselFrameCaptionItem1">Bank of</span>
                        <span className="carouselFrameCaptionItem2">Sarah</span>
                    </div>
                </div>
                <div key="splash_person_box_2" alt="Bank of Biodun">
                    <img src={"/images/splash_person_2" + (this.screenImageLetter) + ".webp"}/>
                    <div className="carouselFrameCaption">
                        <span className="carouselFrameCaptionItem1">Bank of</span>
                        <span className="carouselFrameCaptionItem2">Biodun</span>
                    </div>
                </div>
                <div key="splash_person_box_3" alt="Bank of Ashia">
                    <img src={"/images/splash_person_3" + (this.screenImageLetter) + ".webp"}/>
                    <div className="carouselFrameCaption">
                        <span className="carouselFrameCaptionItem1">Bank of</span>
                        <span className="carouselFrameCaptionItem2">Ashia</span>
                    </div>
                </div>
                <div key="splash_person_box_4" alt="Bank of Chidi">
                    <img src={"/images/splash_person_4" + (this.screenImageLetter) + ".webp"}/>
                    <div className="carouselFrameCaption">
                        <span className="carouselFrameCaptionItem1">Bank of</span>
                        <span className="carouselFrameCaptionItem2">Chidi</span>
                    </div>
                </div>

                <div key="splash_ending" alt="Bank of you">
                    <img/>
                    <div className="row carouselFrameCaption carouselLastItem">
                        <div className=" col-6 carouselLastItemGroup">
                            <div className="margin-left">
                                <div className="align-left">
                                  <span className="carouselEndingPreText">We are building the</span>
                                  <span className="carouselFrameCaptionItem1">Bank of</span>
                                  <span className="carouselFrameCaptionItem1-mobile">Bank</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-5 carouselLastItemGroup2">
                           <span className="carouselFrameCaptionItem2">You</span>
                            <span className="carouselFrameCaptionItem2-pre">of</span>
                           <span className="carouselFrameCaptionItem2-mobile">You</span>
                        </div>
                    </div>
                </div>

            </Carousel>
        </div>
    };
}

MainSplashScreen.propTypes = {
    onSlideCompleted: PropTypes.func.isRequired,
}

function attachDeviceTypeHook(Component) {
    return function WrappedComponent(props) {
        const isBigScreen = useMediaQuery(media_query_values.bigscreen)
        const isDesktopOrLaptop = useMediaQuery(media_query_values.desktop)
        const isTablet = useMediaQuery(media_query_values.tablet)
        const isMobile = useMediaQuery(media_query_values.mobile)
        const isPortrait = useMediaQuery(media_query_values.portrait)
        const isRetina = useMediaQuery(media_query_values.retina)
        let objVals = JSON.stringify({isBigScreen, isDesktopOrLaptop, isTablet, isMobile, isPortrait, isRetina});

        return <Component {...props} deviceType={objVals}/>;
    }
}

export default attachDeviceTypeHook(MainSplashScreen);
