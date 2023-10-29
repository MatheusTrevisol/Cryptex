import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  text-align: left;
  border-collapse: collapse;
  font-family: "DM Sans", sans-serif;

  .table-row-heading {
    border-bottom: 2px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  .table-heading {
    padding: 8px;
    font-size: 1.8rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
    white-space: nowrap;
  }

  .table-row-data {
    height: 9rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_800};
  }

  .table-data {
    padding: 8px;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    white-space: nowrap;
    font-weight: 700;
  }

  .icon {
    padding-top: 13px;
  }

  .table-data .name-wrapper {
    display: flex;
    align-items: center;

    gap: 8px;

    img {
      width: 20px;
    }

    span {
      color: ${({ theme }) => theme.COLORS.LIGHT_800};
      font-size: 1.4rem;
      font-weight: 700;
      margin-left: 1rem;
    }
  }

  .table-data > button {
    border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
    padding: 5px 10px;
    cursor: pointer;

  }
`;