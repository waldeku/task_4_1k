import styled from "styled-components";

export const TextInput = styled.input`
  margin: 10px 15px 10px 0;
  width: 180px;
  padding: 5px;
  color: ${({ theme }) => theme.colors.grays[3]};
  border: ${({ theme }) => `1px solid ${theme.colors.grays[4]}`};

  &::placeholder {
    color: ${({ theme }) => theme.colors.grays[2]};
  }
`;
