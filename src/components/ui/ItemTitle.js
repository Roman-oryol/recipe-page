import styled, { css } from 'styled-components';

const ItemTitle = styled.span`
  display: inline-block;
  
  ${({ theme }) => css`
    font-weight: ${theme.fontWeight.bold};
  `}

  &:first-letter {
    text-transform: uppercase;
  }
`;

export default ItemTitle;
