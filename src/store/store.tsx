import { useLocalStore } from 'mobx-react';
import React, { createContext } from 'react';

import { IStore } from '../types/store.types';

// @ts-ignore
export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const store: IStore = useLocalStore(() => ({
    bugs: ["Centipede"],
    addBug: (bug) => {
      store.bugs.push(bug);
    },
    get bugsCount() {
      return store.bugs.length;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
