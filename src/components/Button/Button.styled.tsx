import styled, { css } from "styled-components";
import { ButtonVariant } from "types/button";

interface IActionButton {
  variant: ButtonVariant;
}

export const ActionButton = styled.button<IActionButton>`
  border-radius: 0;
  border: ${({ theme }) => `1px solid ${theme.colors.grays[5]}`};
  padding: 5px;

  ${({ variant }) =>
    variant === "secondary" &&
    css`
      border: 0;
      background: none;
    `};

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
