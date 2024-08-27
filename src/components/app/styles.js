import { createGlobalStyle, css } from 'styled-components';
import outfitRegular from '../../assets/fonts/outfit/Outfit-Regular.ttf';
import outfitSemiBold from '../../assets/fonts/outfit/Outfit-SemiBold.ttf';
import outfitBold from '../../assets/fonts/outfit/Outfit-Bold.ttf';
import youngSerifRegular from '../../assets/fonts/young-serif/YoungSerif-Regular.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Outfit";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("Outfit Regular"), local("Outfit-Regular"), url(${outfitRegular}) format("truetype");
}

@font-face {
  font-family: "Outfit";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: local("Outfit SemiBold"), local("Outfit-SemiBold"), url(${outfitSemiBold}) format("truetype");
}

@font-face {
  font-family: "Outfit";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: local("Outfit Bold"), local("Outfit-Bold"), url(${outfitBold}) format("truetype");
}

@font-face {
  font-family: "YoungSerif";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local("YoungSerif Regular"), local("YoungSerif-Regular"), url(${youngSerifRegular}) format("truetype");
}


*,
*::after,
*::before {
    box-sizing: border-box;
}

body,
html {
  margin: 0;
}

body {
  min-width: 320px;

  ${({ theme }) => css`
    font-family: ${theme.fontPrimary};
    font-size: ${theme.fontSize.body};
    font-weight: ${theme.regular};
    line-height: ${theme.lineHeight.body};
    color: ${theme.color.wengeBrown};
  `}
  
  font-optical-sizing: auto;
  font-style: normal;
}

`;

export default GlobalStyle;
