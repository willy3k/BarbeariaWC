import React from 'react';

import { Container } from '../../../style/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Localizacao() {
  return (
    <Container>
      <Title>
        Localização
        <small>Oie</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
    </Container>
  );
}
