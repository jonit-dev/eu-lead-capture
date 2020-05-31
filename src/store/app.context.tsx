// @ts-nocheck
import React, { createContext, useReducer } from 'react';

import { appReducer } from './app.reducer';


export const initialState = {
  form: {
    location: {
      province: "ES",
      city: "Vila Velha",
    },
  },
};

export const AppContext = createContext(initialState);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
