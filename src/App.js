import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'
import Main from './layouts/Main'; // fallback for lazy pages
import media_query_values from "./data/MediaQuery";
import ('./static/css/general.css');


const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const Personal = lazy(() => import('./pages/Personal'));
const Business = lazy(() => import('./pages/Business'));
const Careers = lazy(() => import('./pages/Careers'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));
// const Projects = lazy(() => import('./pages/Projects'));
// const Resume = lazy(() => import('./pages/Resume'));
// const Stats = lazy(() => import('./pages/Stats'));

const App = () => {

    // const isBigScreen = useMediaQuery(media_query_values.bigscreen)
    const isDesktopOrLaptop = useMediaQuery(media_query_values.desktop)
    const isTablet = useMediaQuery(media_query_values.tablet)
    const isMobile = useMediaQuery(media_query_values.mobile)
    // const isPortrait = useMediaQuery(media_query_values.portrait)
    // const isRetina = useMediaQuery(media_query_values.retina)

    if(isMobile) import ('./static/css/main-mobile.css');
    // else if(isTablet) import ('./static/css/main-tablet.css');
    // else if(isDesktopOrLaptop) import ('./static/css/main-desktop.css');
    // else import ('./static/css/main-big.css');
    else import ('./static/css/main-desktop.css');


    return <BrowserRouter basename={PUBLIC_URL}>
        <Suspense fallback={<Main/>}>
            <Routes>
                <Route exact path="/" element={<Index/>}/>
                <Route path="/aboutus" element={<AboutUs/>}/>
                <Route path="/contactus" element={<Contact/>}/>
                <Route path="/personal" element={<Personal/>}/>
                <Route path="/business" element={<Business/>}/>
                <Route path="/careers" element={<Careers/>}/>
                <Route path="/terms" element={<Terms/>}/>
                <Route path="/privacy" element={<Privacy/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Suspense>
    </BrowserRouter>;
};


export default App;
