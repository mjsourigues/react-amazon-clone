import React, { createContext, useContext, useReducer } from "react";

//PREPARAR CAPA DE DATOS
export const StateContext = createContext();

//ENCAPSULAR APP Y ENVIAR DATOS
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// ENVIO DATOS A LA CAPA DE DATOS
export const useStateValue = () => useContext(StateContext);