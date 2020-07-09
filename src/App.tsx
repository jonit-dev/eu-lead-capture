import React, { useEffect, useState } from 'react';

import { APIHelper } from './helpers/APIHelper';
import { GenericHelper } from './helpers/GenericHelper';
import { Register } from './pages/Register';
import { UrlRedirector } from './pages/UrlRedirector';

function App() {
  // check for some params

  const [canRedirect, setCanRedirect] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const computeUserClick = GenericHelper.getUrlQueryParamByName(
        "promoterId"
      );
      const payerId = GenericHelper.getUrlQueryParamByName("payerId");

      if (computeUserClick) {
        console.log("Computando click para promoter id ");

        await APIHelper.request("POST", "/credit", {
          promoterId: computeUserClick,
          payerId,
        });
      }
      setCanRedirect(true);
    })();
  }, []);

  const isRedirectOnly = GenericHelper.getUrlQueryParamByName("ro");

  return isRedirectOnly && canRedirect ? <UrlRedirector /> : <Register />;
}

export default App;
