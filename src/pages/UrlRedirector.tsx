import { NicheGroupType } from "@emprego-urgente/shared";
import React, { useEffect } from "react";
import styled from "styled-components";

import { GenericHelper } from "../helpers/GenericHelper";
import { GroupHelper } from "../helpers/GroupHelper";
import { PlatformType } from "../types/account.types";

export const UrlRedirector = () => {
  useEffect(() => {
    const stateCodeParam = GenericHelper.getUrlQueryParamByName("stateCode");
    const payerId = GenericHelper.getUrlQueryParamByName("payerId");
    const platformParam =
      GenericHelper.getUrlQueryParamByName("platform") || PlatformType.WhatsApp;
    const groupLink = GroupHelper.getGroupLink(
      Number(payerId),
      platformParam,
      stateCodeParam!,
      NicheGroupType.OUTR
    );

    if (groupLink) {
      window.location.href = groupLink;
      return;
    } else {
      // if failed to fetch group link, lets get users full data.

      if (stateCodeParam) {
        window.location.href = `https://rebrand.ly/emprego-urgente/?stateCode=${stateCodeParam}`;
      } else {
        window.location.href = `https://rebrand.ly/emprego-urgente/`;
      }
    }
  }, []);

  return (
    <Container>
      <p>Aguarde enquanto te redirecionamos ao melhor grupo...</p>
    </Container>
  );
};

const Container = styled.div``;
