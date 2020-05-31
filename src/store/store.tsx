import { useLocalStore } from 'mobx-react';
import React, { createContext } from 'react';

import { IStore } from '../types/store.types';
import { testStore } from './test.store';

const createStore = () => {
  return {
    ...testStore,
  };
};
type TStore = ReturnType<typeof createStore>;

export const StoreContext = createContext<TStore | null>(null);

export const StoreProvider = ({ children }) => {
  const store: IStore = useLocalStore(createStore);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export const useDataStore = () => {
  const store = React.useContext(StoreContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
