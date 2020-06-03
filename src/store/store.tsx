import 'mobx-react-lite/batchingForReactDom';

import { createContext, useContext } from 'react';

import { FormStore } from './form.store';

// Implementation: https://medium.com/@suraj.kc/mobx-strategies-with-react-hooks-3de23932cb8c

export const StoresContext = createContext({
  formStore: new FormStore(),
});

export const useStores = () => useContext(StoresContext);
