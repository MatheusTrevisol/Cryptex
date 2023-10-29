import { Container, Content, LeftDiv, RightDiv } from "./styles";

import hero_banner from '../../assets/hero-banner.png'
import { Button } from "../Button";

export function Hero() {
  return (
    <Container>
      <Content>
        <LeftDiv>
          <h2>Buy & Sell Digital Assets In The Cryptex</h2>
          <p>
            Coin Cryptex is the easiest, safest, and fastest way to buy &amp; sell crypto asset exchange.
          </p>

          <Button title="Get started now" />
        </LeftDiv>

        <RightDiv>
          <img src={hero_banner} alt="" />
        </RightDiv>
      </Content>
    </Container>
  );
}