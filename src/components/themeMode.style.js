import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  width: 100px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-around;
  cursor: pointer;
  letter-spacing: 2px;
  font-size: 14px;
  font-weight: 600;
  border: none;

  &:hover {
    color: gray;
  }
`;
export const ErrorMessage = styled.span`
  .inputErrorMsg {
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: #f74646 !important;
    font-family: monospace;
  }
`;
export const GlobalStyle = createGlobalStyle`
.App {
  background-color: ${(props) => props.theme.body};
}
.searchParent {
  background-color: ${(props) => props.theme.cardColor};
}
span, .oqtoDiv h2, .darkLightMode span, p, .joinDate, .userBio span,
.searchInput::placeholder {
  color: ${(props) => props.theme.fontColor};
}
.mainParent {
  background-color: ${(props) => props.theme.cardColor};
}
.flexContainer {
  background-color: ${(props) => props.theme.followersDiv};
}
`;
