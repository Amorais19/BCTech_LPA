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
  roxoPrincipal: '#5836BB',
  roxoOpac: '#5836BB40',
  roxoSecundario: '#1A0F3A',
  navBarTitle: '#929292',
  blackFundo: '#202020',
  footerTitle: '#D8B782',
}

export const gradientes = {
  purpleO: '#1B006940',
  purpleT: '#372D5325',
  blackO: '#11101050',
  blackT: '#0E0E0E',
  greyO: '#0C0C0E',
  greyT: '#5C575750',
  purpleButtonO: '#5C4B8C',
  purpleButtonT: '#322065',

}