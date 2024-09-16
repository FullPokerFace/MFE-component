import React from 'react';
import { connect } from 'react-redux';
import styles from './App.module.scss';
import { increment } from '../actions/actions';
import logo from './logo.webp'

const IncrementButton = ({ onClick }) => (
    <button className={styles.incrementButton} onClick={onClick}>
        Increment count
    </button>
);


export const App = ({ count, incrementCount }) => {

    return (
        <div>
            <img src={logo} alt="logo" />
            <br />
            <IncrementButton onClick={incrementCount} />
        </div>
    );
};

// const mapStateToProps = (state) => ({
//     count: state.count
// });

// const mapDispatchToProps = {
//     incrementCount: increment
// };

export default App;

// export default connect(mapStateToProps, mapDispatchToProps)(App);