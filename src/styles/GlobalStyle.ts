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
  // Cores sólidas
  black: "#000",                // Preto
  blackOpac: "#00000040",      // Preto com opacidade
  white: "#fff",                // Branco
  whiteOpac: "#ffffff90",       // Branco com opacidade
  laranja:"#ff8300",            //laranja
  laranjaEscuro: "#ff630a",      //laranja Escuro
  laranjaOpac: "#ff630a60",

  // Tons de roxo
  roxoPrincipal: '#5836BB',     // Roxo Principal
  roxoOpac: '#5836BB40',        // Roxo com opacidade
  roxoSecundario: '#1A0F3A',    // Roxo Secundário

  // Outras cores
  navBarTitle: '#929292',       // Título da Navbar
  blackFundo: '#202020',        // Fundo Preto
  footerTitle: '#D8B782',       // Título do Rodapé
  grayInput: '#65646A',         // Cinza para Inputs
  grayFundo: '#524E4E',    // Fundo Cinza
}

export const gradientes = {
  // Gradientes com opacidade
  purpleO: '#1B006940',        // Gradiente Roxo Opaco
  purpleT: '#372D5325',        // Gradiente Roxo Translúcido
  blackO: '#11101050',         // Gradiente Preto Opaco
  blackT: '#0E0E0E',           // Gradiente Preto Translúcido
  greyO: '#0C0C0E',            // Gradiente Cinza Opaco
  greyT: '#5C575750',          // Gradiente Cinza Translúcido

  // Gradientes de botão
  purpleButtonO: '#5C4B8C',    // Gradiente Roxo Botão Opaco
  purpleButtonT: '#322065',     // Gradiente Roxo Botão Translúcido
}

