import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Checkout from "./Checkout";


function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Header />
        <Switch>
          {/*Carrito Checkout*/}
          <Route path="/checkout">
            <Checkout />
          </Route>
          {/*Ruta por defecto*/}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
