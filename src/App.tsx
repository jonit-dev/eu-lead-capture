import React from 'react';

import { GenericHelper } from './helpers/GenericHelper';
import { Register } from './pages/Register';
import { UrlRedirector } from './pages/UrlRedirector';

function App() {
  // check for some params

  const isRedirectOnly = GenericHelper.getUrlQueryParamByName("ro");

  return isRedirectOnly ? <UrlRedirector /> : <Register />;
}

export default App;
