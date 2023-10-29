import { Container, Content, ContactDiv, Links } from "./styles";

import { Logo } from "../Logo";

import { HiOutlineHandThumbUp } from 'react-icons/hi2'

export function Contact() {
  return (
    <Container>
      <Content>
        <ContactDiv>
          <Logo />
          <h2>Let's talk <HiOutlineHandThumbUp size={24}/></h2>
          <a href="tel:+12345678915">+54 99728-1354</a>
          <a href="mailto:hello_bro@gmail.com">hello_cryptex@gmail.com</a>
          <address>            
            Cecilia Chapman 711-2880 Nulla St. Mankato Mississippi 96522          
          </address>
        </ContactDiv>

        <Links>
          <li>
            <h6>PRODUCTS</h6>
          </li>
          <li>
            <a href="#">Spot</a>
          </li>
          <li>
            <a href="#">Inverse Perpetual</a>
          </li>
          <li>
            <a href="#">USDT Perpetual</a>
          </li>
          <li>
            <a href="#">Exchange</a>
          </li>
          <li>
            <a href="#">Launchpad</a>
          </li>
          <li>
            <a href="#">BinancePay</a>
          </li>
        </Links>

        <Links>
          <li>
            <h6>SERVICES</h6>
          </li>
          <li>
            <a href="#">Buy Crypto</a>
          </li>
          <li>
            <a href="#">Markets</a>
          </li>
          <li>
            <a href="#">Tranding Free</a>
          </li>
          <li>
            <a href="#">Affiliate Program</a>
          </li>
          <li>
            <a href="#">Referral Program</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
        </Links>

        <Links>
          <li>
            <h6>SUPPORT</h6>
          </li>
          <li>
            <a href="#">Bybit Learn</a>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">User Feedback</a>
          </li>
          <li>
            <a href="#">Submit a request</a>
          </li>
          <li>
            <a href="#">API Documentation</a>
          </li>
          <li>
            <a href="#">Trading Rules</a>
          </li>
        </Links>

        <Links>
          <li>
            <h6>ABOUT US</h6>
          </li>
          <li>
            <a href="#">About Bybit</a>
          </li>
          <li>
            <a href="#">Authenticity Check</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
          <li>
            <a href="#">Business Contacts</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </Links>

      </Content>
    </Container>
  );
};