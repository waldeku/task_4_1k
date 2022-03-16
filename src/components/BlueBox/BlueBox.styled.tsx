import styled, { css, keyframes } from "styled-components";

const move = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: calc(100% - 100px);      
  }
`;

export const Box = styled.div`
  height: 300px;
  background-color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 45px;
  position: relative;
`;

export const YellowBox = styled.div<{ isMoved: boolean }>`
  height: 100px;
  width: 100px;
  background-color: ${({ theme }) => theme.colors.yellow};
  position: absolute;
  top: 30%;

  ${({ isMoved }) =>
    isMoved &&
    css`
      animation: ${move} 3s;
      animation-fill-mode: forwards;
      animation-iteration-count: 1;
    `}

  &:hover {
    cursor: pointer;
  }
`;
