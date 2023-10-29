import { Container, Content, Navbar } from "./styles";

import { useState } from 'react';

import { Logo } from "../Logo";
import { Button } from "../Button";
import { MenuButton } from "../MenuButton";

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  function menuHamburguerAnimated() {
    const navbar = document.getElementById("navbar");

    navbar.classList.toggle("active")

    setMenuIsVisible(!menuIsVisible);
  };

  return (
    <Container>
      <Content>
        <Logo />

        <MenuButton onClick={menuHamburguerAnimated} menuIsVisible={menuIsVisible} />

        <Navbar id="navbar">
          <ul>
            <li><a href="#">Homepage</a></li>
            <li><a href="#">Buy Crypto</a></li>
            <li><a href="#">Markets</a></li>
            <li><a href="#">Sell Crypto</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">BITUSDT</a></li>
          </ul>
        </Navbar>

        <Button id="wallet" title="Wallet" />
      </Content>
    </Container>
  );
};