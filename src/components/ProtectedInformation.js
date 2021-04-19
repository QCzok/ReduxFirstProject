import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../actions';
import '../App.css';

const ProtectedInformation = () => {
    const loggedInFlag = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <section className="App">
            <button onClick={() => dispatch(login())}>Log In</button>
            <button onClick={() => dispatch(logout())}>Log Out</button>
            {loggedInFlag ? <p>Valuable information I shoud not see without beeing logged in</p> : <p>please log in</p>}
        </section>
    );
}

export default ProtectedInformation;