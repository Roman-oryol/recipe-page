import styled, { css } from 'styled-components';

const Info = styled.p`
  margin: 0;
  margin-bottom: ${({ theme }) => theme.spacing.average};
`;

const CharacteristicsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 1fr 1fr;
  ${({ theme }) => css`
    column-gap: ${theme.spacing.small};
    padding-right: ${theme.spacing.large};
    padding-left: ${theme.spacing.large};

    &:not(:last-child) {
      padding-bottom: 11px;
      border-bottom: 1px solid ${theme.color.whiteCoffee};
    }
  `}
  text-align: left;

  && + * {
    padding-top: 12px;
  }
`;

const Characteristic = styled.th`
  display: inline-block;
  padding: 0;
  font-weight: inherit;
  &::first-letter {
    text-transform: uppercase;
  }
`;

const Value = styled.td`
  padding: 0;
  ${({ theme }) => css`
    font-weight: ${theme.fontWeight.bold};
    color: ${theme.color.brandyRed};
  `}
`;

export { Info, CharacteristicsTable, TableRow, Characteristic, Value };
