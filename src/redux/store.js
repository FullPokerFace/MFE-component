import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    count: 250
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, count: state.count + 1 };
        default:
            return state;
    }
}

const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

export default store;