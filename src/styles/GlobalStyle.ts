import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
  }
`
export const colors = {
  black: "#000",
  white: "#fff",
  Principal: "#1A2B3A",
  Inicial: "linear-gradient(#1A2B3A,#41586D)",
  Fundo: "#DFD6C5",
  Secundaria: "#D0973A"
}