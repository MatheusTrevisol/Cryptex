import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  padding: 10rem 1.5rem;
  background: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 80rem;
  display: flex;
  flex-direction: column;

  gap: 2.5rem;

  @media (min-width: 990px) {
    max-width: 90rem;
  }

  @media (min-width: 1330px) {
    max-width: 128rem;
  }

  h3 {
    font-size: 3rem;
    font-weight: 700;
    font-family: "DM Sans", sans-serif;
    color: ${({ theme }) => theme.COLORS.WHITE};

    line-height: 3.3rem;

    @media (min-width: 650px) {
      font-size: 4rem;
    }

    @media (min-width: 1330px) {
      font-size: 4.8rem;
    }
  }

  #scrollContainer {
    overflow-x: auto;
    
    /* scroll */
    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-track {
      background: black;
    }

    &::-webkit-scrollbar-thumb {
      cursor: pointer;
      background: ${({ theme }) => theme.COLORS.FIRST_BACKGROUND};
      border-radius: 9999px;
      border: 4px solid transparent;
    }
  }
`;