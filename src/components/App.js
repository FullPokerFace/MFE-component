import React, { useState } from 'react';
import styles from './App.module.scss';

const IncrementButton = ({ onClick }) => (
    <button className={styles.incrementButton} onClick={onClick}>
        Increment
    </button>
);

const App = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <IncrementButton onClick={incrementCount} />
        </div>
    );
};

export default App;