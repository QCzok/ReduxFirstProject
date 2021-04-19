import React, {useState} from "react";
import './App.css';

function App() {
  let [counter, setCounter] = useState(0);
  let [loggedInFlag, setLoggedInFlag] = useState(false);

  const increment = () => {
    setCounter(counter + 1);
  }

  const decrement = () => {
    setCounter(counter - 1);
  }

  const login = () => {
    setLoggedInFlag(true);
  }

  const logout = () => {
    setLoggedInFlag(false);
  }
  console.log(loggedInFlag);
  return (
    <div className="App">
      <h1>Redux First Project</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={login}>Login</button>
      <button onClick={logout}>Logout</button>
      {loggedInFlag ? <p>Valuable information I shoud not see without beeing logged in</p> : <p>please log in</p>}
    </div>
  );
}

export default App;
