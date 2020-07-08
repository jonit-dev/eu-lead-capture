import React, { useEffect } from 'react';

import { APIHelper } from './helpers/APIHelper';
import { GenericHelper } from './helpers/GenericHelper';
import { Register } from './pages/Register';
import { UrlRedirector } from './pages/UrlRedirector';

function App() {
  // check for some params

  useEffect(() => {
    (async () => {
      const computeUserClick = GenericHelper.getUrlQueryParamByName(
        "promoterId"
      );
      const payerId = GenericHelper.getUrlQueryParamByName("payerId");

      if (computeUserClick) {
        console.log("Computando click para promoter id ");

        const response = await APIHelper.request("POST", "/credit", {
          promoterId: computeUserClick,
          payerId,
        });

        console.log(response.data);
      }
    })();
  }, []);

  const isRedirectOnly = GenericHelper.getUrlQueryParamByName("ro");

  return isRedirectOnly ? <UrlRedirector /> : <Register />;
}

export default App;
