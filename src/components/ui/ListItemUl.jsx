import styled from 'styled-components';

const ListItemUl = styled.li`
  display: flex;

  &::before {
    content: '';
    align-self: center;
    width: 4px;
    height: 4px;
    margin-right: 28px;
    margin-left: ${({ theme }) => theme.spacing.extraSmall};
    background-color: ${({ theme }) => theme.color.darkRaspberry};
    border-radius: 50%;
  }

  &:not(:last-child) {
    margin-bottom: ${({ theme }) => theme.spacing.extraSmall};
  }
`;

export default ListItemUl;
