import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Example action
export const incrementCounter = () => ({
    type: 'INCREMENT_COUNTER'
});

// Example reducer
export const counterReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT_COUNTER':
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
};

// Export components
export { App };

// Render the App component if there's a root element
const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.render(<App />, rootElement);
}