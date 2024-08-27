import styled, { css } from 'styled-components';

const List = styled.ol`
  margin: 0;
  padding: 0;
  padding-left: 8px;
  list-style-type: none;
  counter-reset: my-counter;
`;

const ListItem = styled.li`
  display: grid;
  grid-template-columns: 16px 1fr;
  column-gap: ${({ theme }) => theme.spacing.small};

  &::before {
    content: counter(my-counter) '.';
    counter-increment: my-counter;
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.brandyRed};
  }

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.extraSmall};
  }
`;

export { List, ListItem };
