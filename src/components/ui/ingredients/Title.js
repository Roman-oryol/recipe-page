import styled, { css } from 'styled-components';

const Title = styled.h2`
  margin: 0;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.average};
    font-family: ${theme.fontSecondary};
    font-size: ${theme.fontSize.headingM};
    font-weight: ${theme.fontWeight.regular};
    line-height: ${theme.lineHeight.heading};
    color: ${theme.color.brandyRed};
  `}
`;

export default Title;
