import styled from "styled-components";

export const Form = styled.form``;

export const ErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
