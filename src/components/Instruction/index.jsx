import { Container, Content, Card } from "./styles";

import instruction from "../../assets/instruction-1.png"
import instruction_two from "../../assets/instruction-2.png"
import instruction_three from "../../assets/instruction-3.png"
import instruction_four from "../../assets/instruction-4.png"

export function Instruction() {
  return (
    <Container>
      <Content>
        <h2>How It Work</h2>
        <p>
          Stacks is a production-ready library of stackable content blocks built in React Native.
        </p>

        <ul>
          <Card className="instruction-card">
            <img src={instruction} alt="Cloud with Binance symbol" />
            <h6>STEP 1</h6>
            <h5>Download</h5>
            <p>
              Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.   
            </p>
          </Card>

          <Card className="instruction-card">
            <img src={instruction_two} alt="Money in the wallet" />
            <h6>STEP 2</h6>
            <h5>Connect Wallet</h5>
            <p>
              Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.   
            </p>
          </Card>

          <Card className="instruction-card">
            <img src={instruction_three} alt="Pickaxe" />
            <h6>STEP 3</h6>
            <h5>Start Trading</h5>
            <p>
              Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.   
            </p>
          </Card>

          <Card>
            <img src={instruction_four} alt="Money coins" />
            <h6>STEP 1</h6>
            <h5>Earn Money</h5>
            <p>
              Stacks Is A Production-Ready Library Of Stackable Content Blocks Built In React Native.   
            </p>
          </Card>
        </ul>
      </Content>
    </Container>
  );
}