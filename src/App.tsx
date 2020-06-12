import React, { useEffect } from 'react';

import { APIHelper } from './helpers/APIHelper';
import { GenericHelper } from './helpers/GenericHelper';
import { Register } from './pages/Register';
import { UrlRedirector } from './pages/UrlRedirector';

function App() {
  // check for some params

  useEffect(() => {
    const computeUserClick = GenericHelper.getUrlQueryParamByName("pid");

    if (computeUserClick) {
      console.log("Computando click para promoter id ");

      APIHelper.request("POST", "/users/validate-post-click", {
        promoterId: computeUserClick,
      });
    }
  }, []);

  const isRedirectOnly = GenericHelper.getUrlQueryParamByName("ro");

  return isRedirectOnly ? <UrlRedirector /> : <Register />;
}

export default App;
