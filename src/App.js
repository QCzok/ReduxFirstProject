import React from "react";

import './App.css';
import Counter from './components/Counter';
import ProtectedInformation from './components/ProtectedInformation';

function App() {
  return (
    <div className="App">
      <h1>Redux First Project</h1>
      <Counter />
      <ProtectedInformation />
    </div>
  );
}

export default App;
