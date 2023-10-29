import { Button } from "../Button";
import { Container } from "./styles";

export function TabsNav() {
  return (
    <Container>
      <li><Button className="active" title="View all" /></li>
      <li><Button title="Metaverse" /></li>
      {/* <li><Button title="Entertainment" /></li>
      <li><Button title="Energy" /></li>
      <li><Button title="NFT" /></li>
      <li><Button title="Gaming" /></li>
      <li><Button title="Music" /></li> */}
    </Container>
  );
};