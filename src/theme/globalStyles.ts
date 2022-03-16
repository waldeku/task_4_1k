import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  html, #root {
    height: 100%;
  };
  body {
    height: 100%;
    font-size: 20px;
    font-family: ${({ theme }) => theme.fontFamilies.main};
    color: ${({ theme }) => theme.colors.black};
    transition: all 0.3s ease-in-out;
  };
  #root {
    height: 100%;
    display: flex;
    flex-direction: column; 
  }
`;

export default GlobalStyles;
