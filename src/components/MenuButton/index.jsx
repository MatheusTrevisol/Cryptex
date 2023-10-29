import { Container } from "./styles";

export function MenuButton({ onClick, menuIsVisible }) {
  return (
    <Container
      id="menuHamburguer"
      className={`menu-button ${menuIsVisible ? 'active' : ''}`}
      onClick={onClick}
    >
      <span className='row'></span>
      <span className='row'></span>
      <span className='row'></span>
    </Container>
  )
}