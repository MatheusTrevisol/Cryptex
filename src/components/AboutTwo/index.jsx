import { Container, Content, LeftDiv, RightDiv, ItemsSection } from "./styles";

import appBanner from "../../assets/app-banner.png";
import googleplay from "../../assets/googleplay.png";
import appstore from "../../assets/appstore.png";

import { AiFillCheckCircle } from 'react-icons/ai';

export function AboutTwo() {
  return (
    <Container>
      <Content>
        <LeftDiv>
          <h2>Free Your Money & Invest With Confident</h2>
          <p>
            With Cryptor Trade, you can be sure your trading skills are matched
          </p>
          <ItemsSection>
            <li>
              <div>
                <AiFillCheckCircle size={24} />
                <h3>Buy, Sell, And Trade On The Go</h3>
              </div>
              <p>Manage Your Holdings From Your Mobile Decive.</p>
            </li>
            <li>
              <div>
                <AiFillCheckCircle size={24} />
                <h3>Take Control Of Your Wealth</h3>
              </div>
              <p>Rest Assured You (And Only You) Have Access To Your Funds.</p>
            </li>
          </ItemsSection>

          <div id="links">
            <a href="#">
              <img src={googleplay} alt="" />
            </a>
            <a href="#">
              <img src={appstore} alt="" />
            </a>
          </div>
        </LeftDiv>

        <RightDiv>
          <img src={appBanner} alt="" />
        </RightDiv>
      </Content>
    </Container>
  );
}