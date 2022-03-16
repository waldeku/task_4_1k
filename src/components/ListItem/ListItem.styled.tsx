import styled from "styled-components";

type TextProps = {
  isSelected: boolean;
};

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Text = styled.span<TextProps>`
  color: ${({ theme, isSelected }) => isSelected && theme.colors.red};
  text-align: center;
`;

export const ButtonWrapper = styled.div``;
