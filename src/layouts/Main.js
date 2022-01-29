import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Analytics from '../components/Template/Analytics';

const Main = (props) => (
    <HelmetProvider>
        <Analytics />
        <Helmet titleTemplate="%s | VPD Money" defaultTitle="VPD Money" defer={false}>
            {props.title && <title>{props.title}</title>}
            <meta name="description" content={props.description} />
        </Helmet>
                {props.children}
     </HelmetProvider>
);

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

Main.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "A bank of you",
};

export default Main;
