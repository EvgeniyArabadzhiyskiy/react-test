import styled from "styled-components";

export const StyledButton = styled.button`
  display: inline-block;
  width: 60px;
  height: 60px;
  margin: 15px;
  text-align: center;
  border: none;
  transition: transform 300ms linear;

  transform: ${(prop) => (prop.stateIndex ? "scale(1.2)" : "")};
`;
