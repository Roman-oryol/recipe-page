import styled, { css } from 'styled-components';

const Title = styled.h1`
  margin: 0;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.average};
    font-family: ${theme.fontSecondary};
    color: ${theme.color.darkCharcoal};
  `}
  font-size: 36px;

  line-height: 1;
  font-weight: 400;

  @media (min-width: 657px) {
    font-size: ${({ theme }) => theme.fontSize.headingL};
  }
`;

const Description = styled.p`
  margin: 0;
`;

export { Title, Description };
