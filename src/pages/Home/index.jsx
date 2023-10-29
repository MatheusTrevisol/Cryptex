import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Trend } from "../../components/Trend";
import { Instruction } from "../../components/Instruction";
import { About } from "../../components/About";
import { AboutTwo } from "../../components/AboutTwo";
import { Contact } from "../../components/Contact";

export function Home() {
  return (
    <Container className="container">
      <Header />
      <Hero />
      <Trend />
      <Instruction />
      <About />
      <AboutTwo />
      <Contact />
    </Container>
  );
};