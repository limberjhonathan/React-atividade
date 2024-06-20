import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

export default function Login() {
  return (
    <Container>
      <Title>
        Login
        <small>Oie</small>
      </Title>
      <Paragrafo>lorem lore lorem6</Paragrafo>
      <a href="#">Oie</a>
      <button type="button">Enviar</button>
    </Container>
  );
}
