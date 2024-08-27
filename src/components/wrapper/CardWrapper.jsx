import styled, { css } from 'styled-components';

const CardWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${theme.color.eggshell};
  `}
`;

export default CardWrapper;
