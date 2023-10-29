import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 8.1rem;

  padding: 1.5rem;

  background: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};

  #wallet {
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    padding: 5px 10px;
    cursor: pointer;
  }

  #wallet:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HOVER}; 
    border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_HOVER};
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 80rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  @media (min-width: 990px) {
    max-width: 90rem;
    gap: 5rem;
  }

  @media (min-width: 1330px) {
    max-width: 128rem;
  }
`;

export const Navbar = styled.nav`
  position: absolute;

  width: 100%;
  max-height: 0;

  top: 100%;
  left: 0;

  visibility: hidden;
  overflow: hidden;

  &.active {
    max-height: calc(100vh - 8.1rem);
    background: ${({ theme }) => theme.COLORS.SECOND_BACKGROUND};
    visibility: visible;
    height: 100vh;
  }
  
  @media (min-width: 990px) {
    top: 0 !important;
    display: flex !important;
    justify-content: flex-start;
    align-items: center;
    position: relative !important;

    height: auto !important;
    max-height: 100vh !important;

    visibility: visible;

  };

  ul {

    @media (min-width: 990px) {
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }

    li {
      cursor: pointer;
      border-bottom: 1px solid ${({ theme }) => theme.COLORS.BORDER_LI};

      @media (min-width: 990px) {
        border: none;
      }
      a {
        display: block;
        padding: 1.5rem 1.2rem;

        font-size: 1.6rem;
        font-weight: 700;
        font-family: "DM Sans", sans-serif;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    li:hover {
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_HOVER};
    }
  }
`; 