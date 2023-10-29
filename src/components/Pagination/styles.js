import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 1.5rem;
  gap: 8px;

  > button {
    padding: .5rem 1.2rem;
    background: black;

    &.active {
      background: ${({ theme }) => theme.COLORS.BACKGROUND_HOVER};
    }
  }

  li {
    list-style: none;
    cursor: pointer;
  }
`;