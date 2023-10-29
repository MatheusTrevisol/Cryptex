import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10rem 1.5rem;

  background: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};

  font-family: "DM Sans", sans-serif;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 80rem;

  gap: 3rem;
  
  @media (min-width: 770px) {
    flex-direction: row;
  }

  @media (min-width: 990px) {
    max-width: 90rem;
    gap: 5rem;
  }

  @media (min-width: 1330px) {
    max-width: 128rem;
  }
`;

export const ContactDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 1.2rem;

  a {
    color: ${({ theme }) => theme.COLORS.PARAGRAPH_COLOR};

    h1 {
      font-size: 3rem;
    }

    img {
      width: 5rem;
      height: 5rem;
    }
  }

  h2 {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin: 1rem 0;
  }

  address {
    color: ${({ theme }) => theme.COLORS.PARAGRAPH_COLOR};
    font-style: normal;
  }
`;

export const Links = styled.ul`
  width: 50%;

  li:first-child {
    margin-bottom: 2rem;
  }

  h6 {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    letter-spacing: 1px;
  }

  li {
    margin-bottom: 1rem;
    
    a {
    color: ${({ theme }) => theme.COLORS.LINKS_COLOR};
   }
  }
`;