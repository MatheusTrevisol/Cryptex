import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 1rem;

  padding-bottom: 4rem;
  li {

    button {
      display: block;
      padding: 7px 24px;
      cursor: pointer;

      &.active {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_HOVER};
      }
    }
  }
`;