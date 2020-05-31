import 'mobx-react-lite/batchingForReactDom';

import { useLocalStore } from 'mobx-react';
import React, { createContext } from 'react';

import { formStore } from './form.store';

// Implementation: https://medium.com/@suraj.kc/mobx-strategies-with-react-hooks-3de23932cb8c

const createStore = () => {
  return {
    ...formStore,
  };
};
type TStore = ReturnType<typeof createStore>;

export const StoreContext = createContext<TStore | null>(null);

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(createStore);

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
