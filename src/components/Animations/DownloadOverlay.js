import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {useMediaQuery} from "react-responsive";
import $ from 'jquery';
import media_query_values from "../../data/MediaQuery";
import store_info from "../../data/Stores";


const DownloadOverlay = () => {

        return <div className="download-overlay">

            <div className="download-overlay-section">
                <a href={store_info.appstore}><img src="/images/icons/appstore.svg"/></a>
                <a href={store_info.playstore}><img src="/images/icons/playstore.svg"/></a>
            </div>

        </div>

}

export default DownloadOverlay;
