import React, { createContext, useContext, useReducer } from 'react';

import { AllActions } from './actions/index.actions';
import { appReducer } from './reducers/app.reducer';

export const initialState = {
  form: {
    location: {
      city: "Vila Velha",
      province: "ES",
    },
  },
};

export type State = typeof initialState;

export const StateContext = createContext(initialState);
export const DispatchContext = createContext(
  (() => 0) as React.Dispatch<AllActions>
);

export const AppProvider: React.ComponentType = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useDispatch = () => {
  return useContext(DispatchContext);
};

export const useGlobalState = <K extends keyof State>(property: K) => {
  const state = useContext(StateContext);
  return state[property]; // only one depth selector for comparison
};
