import React from 'react';
import { hydrate, render } from 'react-dom';
import App from './App';
import reportWebVitals from './test/reportWebVitals';

// See https://reactjs.org/docs/strict-mode.html
const StrictApp = () => (
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

const rootElement = document.getElementById('root');

//Clear slider state storage
localStorage.removeItem("slider-completed");

// hydrate is required by react-snap.
if (rootElement.hasChildNodes()) {
    hydrate(<StrictApp />, rootElement);
} else {
    render(<StrictApp />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
