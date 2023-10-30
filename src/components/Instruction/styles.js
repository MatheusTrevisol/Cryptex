import styled from "styled-components";
import connect_line from "../../assets/connect-line.png"

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 1.5rem;

  background: ${({ theme }) => theme.COLORS.FIRST_BACKGROUND};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: "DM Sans", sans-serif;

  @media (min-width: 780px) {
    max-width: 90rem;
  }

  @media (min-width: 1330px) {
    min-width: 140rem;
    max-width: 140rem;
  }
  
  h2 {
    font-size: 3rem;
    font-weight: 700;

    @media (min-width: 780px) {
      font-size: 4rem;
    }

    @media (min-width: 1330px) {
      font-size: 4.8rem;
    }
  }
  
  > p {
    max-width: 42rem;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.PARAGRAPH_COLOR};

    margin-bottom: 4.5rem;
  }

  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;

  }
`;

export const Card = styled.div`
  max-width: 30rem;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  gap: 1rem;

  color: ${({ theme }) => theme.COLORS.PARAGRAPH_COLOR};

  @media (min-width: 677px) {
    &.instruction-card::after {
      content: "";
      width: 160px;
      height: 12px;
      background-image: url(${connect_line});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      position: absolute;
      top: 50px;
      right: -95px;
      max-width: 29rem;
    }
  }

  @media (max-width: 1330px) {
    &.instruction-card:nth-child(2)::after {
      content: none;
    }
  }

  h5 {
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`;