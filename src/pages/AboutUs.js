import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const AboutUs = () => (
    <Main
        title="Contact"
        description="Contact Michael D'Angelo via email @ michael.l.dangelo@gmail.com"
    >
        <article className="post" id="contact">
            <header>
                <div className="title">
                    <h2 data-testid="heading">Hey</h2>
                </div>
            </header>
            <div className="email-at">
                <p>Feel free to get in touch. You can email me at: </p>
            </div>

        </article>
    </Main>
);

export default AboutUs;
