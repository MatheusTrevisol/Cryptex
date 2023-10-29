import { Container } from './styles';

import logo from '../../assets/logo.svg';

export function Logo() {
  return (
    <Container>
      <img src={logo} alt="Logo Cryptex - Um cubo geométrico" />

      <h1>Cryptex</h1>
    </Container>
  );
};