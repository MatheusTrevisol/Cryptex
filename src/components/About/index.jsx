import { Container, Content, LeftDiv, RightDiv, ItemsSection } from "./styles";

import { Button } from "../Button"

import about_banner from "../../assets/about-banner.png";

import { AiFillCheckCircle } from 'react-icons/ai';

export function About() {
  return (
    <Container>
      <Content>
        <LeftDiv>
          <img src={about_banner} alt="" />
        </LeftDiv>

        <RightDiv>
          <h2>What Is Cryptex</h2>
          <p>
            Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.
          </p>
          <ItemsSection>
            <li>
              <div>
                <AiFillCheckCircle size={24} />
                <h3>View real-time cryptocurrency prices</h3>
              </div>
              <p>Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.</p>
            </li>
            <li>
              <div>
                <AiFillCheckCircle size={24} />
                <h3>Buy and sell BTC, ETH, XRP, OKB, Etc...</h3>
              </div>
              <p>Experience a variety of trading on Bitcost. You can use various types of coin transactions such as Spot Trade, Futures Trade, P2P, Staking, Mining, and margin.</p>
            </li>
          </ItemsSection>

          <Button title="Explore more" />
        </RightDiv>
      </Content>
    </Container>
  );
}