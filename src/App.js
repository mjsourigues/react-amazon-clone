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
