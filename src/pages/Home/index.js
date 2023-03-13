import React from 'react';

import { Container } from '../../style/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Home() {
  return (
    <Container>
      <Title>
        Home
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
    </Container>
  );
}
