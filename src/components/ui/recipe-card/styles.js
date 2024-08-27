import styled, { css } from 'styled-components';

const Article = styled.article`
  width: 100%;
  min-width: 320px;
  max-width: 736px;

  ${({ theme }) => css`
    background-color: ${theme.color.white};
  `}

  @media ((min-width: 657px) and (max-width: 736px)) {
    padding: calc((100% - 656px) / 2);
    padding-bottom: 0;
  }

  @media (min-width: 737px) {
    border-radius: 24px;
    padding: ${({ theme }) => theme.spacing.extraLarge};
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  ${({ theme }) => css`
    row-gap: ${theme.spacing.large};
    padding: ${theme.spacing.extraLarge} ${theme.spacing.large};

    @media ((min-width: 657px) and (max-width: 736px)) {
      padding-right: calc(32px - ((100vw - 656px) / 2));
      padding-left: calc(32px - ((100vw - 656px) / 2));
    }

    @media (min-width: 737px) {
      padding: 0;
      padding-top: ${theme.spacing.extraLarge};
    }
  `}
`;

export { Article, TextContent };
