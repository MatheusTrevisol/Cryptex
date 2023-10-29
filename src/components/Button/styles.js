import styled from "styled-components";

export const Container = styled.button`
  width: max-content;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({theme}) => theme.COLORS.WHITE};
  font-family: "DM Sans", sans-serif;
  font-weight: 700;
  font-size: 1.6rem;

  background: none;
  border: none;
  border-radius: 5rem;
`;