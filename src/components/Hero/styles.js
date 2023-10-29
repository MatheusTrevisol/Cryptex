import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.COLORS.FIRST_BACKGROUND};

  padding: 9rem 1.5rem 12rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 80rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 8rem;

  @media (min-width: 990px) {
    max-width: 90rem;
    flex-direction: row;
    gap: 3rem;
  }

  @media (min-width: 1330px) {
    max-width: 128rem;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  
  gap: 2.5rem;
  
  h2 {
    font-size: 3.2rem;
    line-height: 110%;
    font-family: "DM Sans", sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE};

    @media (min-width: 650px) {
     font-size: 4rem;
    }

    @media (min-width: 990px) {
     font-size: 5rem;
    }

    @media (min-width: 1330px) {
     font-size: 6.4rem;
    }
  }

  p {
    max-width: 55rem;

    font-size: 1.8rem;
    font-family: "DM Sans", sans-serif;
    color: ${({ theme }) => theme.COLORS.PARAGRAPH_COLOR};

    @media (min-width: 990px) {
     font-size: 2rem;
    }
  }

  button {    
    padding: 1.3rem 3rem;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HOVER};
    cursor: pointer;
  }
`;

export const RightDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    width: 100%;

    @media (min-width: 550px) {
      max-width: 57rem;
    }
  }
`;