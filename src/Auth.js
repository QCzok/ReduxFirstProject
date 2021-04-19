import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {  login, logout } from './actions';

function Auth() {
    const loggedInFlag = useSelector(state => state.isLogged)
    const dispatch = useDispatch();
  
    return (
      <div className="App">
        <button onClick={() => dispatch(login())}>Login</button>
        <button onClick={() => dispatch(logout())}>Logout</button>
        {loggedInFlag ? <p>Valuable information I shoud not see without beeing logged in</p> : <p>please log in</p>}
      </div>
    );
  }
  
  export default Auth;
  