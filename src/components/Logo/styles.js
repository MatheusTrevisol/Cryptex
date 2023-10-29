import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  align-items: center;

  gap: 5px;

  img {
    width: 3.2rem;
    height: 3.2rem;
  }

  h1 {
    font-size: 2.5rem;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE}
  }
`;