import React, { useEffect } from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import {BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import {auth} from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51JnmBDCRgIFNDnmK6AZSAihNH2aK34ZViXiEnST9tM58y7Amb8RAHZlp0t0fOKUloEpJk0BEPvpuqF5QLMELV1nA00iR1yBe6P"
);

function App() {
  const [{},dispatch]=useStateValue();

  //Se carga al iniciar la app, como un IF de una declaracion en REACT
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("El usuario es: ", authUser);
      if (authUser){
        dispatch({
          type: "SET_USER",
          user: authUser,
        })
      }else{
        dispatch({
          type: "SET_USER",
          user: null,  
        })
      }
    })
  },[])

  return (
    //BEM
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          {/*Login*/}
            <Route path="/login">
            <Login />
          </Route>
          {/*Carrito Checkout*/}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/*Pago*/}
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
                <Payment />
            </Elements>
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
