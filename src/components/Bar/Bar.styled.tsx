import styled, { css } from "styled-components";

import { BAR_VARIANTS } from "./Bar";

interface IWrapper {
  type: BAR_VARIANTS;
}

export const Wrapper = styled.div<IWrapper>`
  background-color: ${({ theme, type }) =>
    theme.colors[type === BAR_VARIANTS.TOP ? "red" : "green"]};
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme, type }) =>
    type === BAR_VARIANTS.SIDEBAR &&
    css`
      height: 100%;
      width: 150px;
      background: ${`linear-gradient(
        90deg,
        ${theme.colors.black} 0%,
        ${theme.colors.white} 100%`} 
      );
    `}
`;
