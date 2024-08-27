import styled, { css } from 'styled-components';
import ListItemUl from '../ListItemUl';

const Section = styled.section`
  padding: ${({ theme }) => theme.spacing.average};
  background-color: ${({ theme }) => theme.color.snow};
  border-radius: 12px;

  @media (min-width: 657px) {
    padding: 28px;
  }
`;

const Title = styled.h2`
  margin: 0;
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.small};
    font-size: ${theme.fontSize.headingS};
    line-height: ${theme.lineHeight.heading};
    font-weight: ${theme.fontWeight.semiBold};
    color: ${theme.color.darkRaspberry};
  `}
`;

const PreparationList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export { Section, Title, PreparationList };
