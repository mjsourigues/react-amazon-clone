import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";


function App() {
  return (
    //BEM
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
