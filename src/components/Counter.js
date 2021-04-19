import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../actions'; 
import '../App.css';

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();
    return (
        <div className="App">
        <h2>Counter: {counter}</h2>
        <button onClick={() => dispatch(increment(5))}>increment</button>
        <button onClick={() => dispatch(decrement(5))}>decrement</button>
        </div>
    );
}

export default Counter;