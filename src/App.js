import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";


function App() {
  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          {/*Login*/}
            <Route path="/login">
            <Login />
          </Route>
          {/*Carrito Checkout*/}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/*Ruta por defecto*/}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
