import React from 'react';

import { Register } from './components/pages/Register';
import { StoreProvider } from './store/store';

function App() {
  return (
    <StoreProvider>
      <Register />
    </StoreProvider>
  );
}

export default App;
