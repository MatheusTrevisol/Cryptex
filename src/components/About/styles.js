import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 1.5rem;

  background: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 6rem;
  text-align: center;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: "DM Sans", sans-serif;

  @media (min-width: 650px) {
    max-width: 80rem;
  }

  @media (min-width: 990px) {
    max-width: 90rem;
    flex-direction: row;
  }

  @media (min-width: 1330px) {
    max-width: 128rem;
  }
`;

export const LeftDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;

export const RightDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  text-align: start;
  color: ${({ theme }) => theme.COLORS.WHITE};

  h2 {
    font-size: 3.4rem;

    @media (min-width: 990px) {
      font-size: 4.4rem;
    }

    @media (min-width: 1330px) {
      font-size: 4.8rem;
    }
  }

  p {
    color: ${({ theme }) => theme.COLORS.PARAGRAPH_COLOR};
    font-size: 1.8rem;
  }

  button {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_HOVER};
    padding: 1.3rem 3rem;
    margin-top: 2rem;
  }
`;

export const ItemsSection = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  gap: 3rem;

  li {
    display: flex;
    flex-direction: column;

    gap: 1rem;

    div {
      display: flex;
      align-items: center;
      gap: 1rem;

      h3 {
        font-size: 2rem;

        @media (min-width: 990px) {
          font-size: 2.4rem;
        }

        @media (min-width: 1330px) {
          font-size: 2.8rem;
        }
      }
    }
  }

  svg {
    fill: ${({ theme }) => theme.COLORS.ICONS};
  }

  p {
    color: ${({ theme }) => theme.COLORS.PARAGRAPH_COLOR};
    font-size: 1.6rem;
  }
`;