import React from 'react';

import { Register } from './components/pages/Register';
import { AppProvider } from './store/app.context';

function App() {
  return (
    <AppProvider>
      <Register />
    </AppProvider>
  );
}

export default App;
