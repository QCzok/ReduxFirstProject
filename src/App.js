import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, login, logout } from './actions';
import './App.css';

function App() {
  const counter = useSelector(state => state.counter);
  const loggedInFlag = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Redux First Project</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment(5))}>increment</button>
      <button onClick={() => dispatch(decrement(5))}>decrement</button>
      <button onClick={() => dispatch(login())}>Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      {loggedInFlag ? <p>Valuable information I shoud not see without beeing logged in</p> : <p>please log in</p>}
    </div>
  );
}

export default App;
