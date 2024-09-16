import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';
import { increment } from './actions/actions';

const walletUI = {
    App: App,  // Export the App component directly
    increment,
    COMPANY: "ESCSP",
};

if (typeof window !== 'undefined') {
    window.walletUI = walletUI;
    console.log(window.walletUI)
}

export default walletUI;