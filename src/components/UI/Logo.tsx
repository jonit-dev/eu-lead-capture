import React from 'react';
import styled from 'styled-components';

interface IProps {}

export const Logo = (props: IProps) => {
  return (
    <Container>
      <img src="/images/logo.svg" alt="Emprego Urgente Logo" />
    </Container>
  );
};

const Container = styled.div`
  img {
    height: 90px;
    margin-bottom: 2rem;
  }
`;
