import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

export const Section = styled.section`
  display: flex;
  width: 100%;

  #quadro {
    display: flex;
    width: 100%;
    height: 40rem;
    align-items: center;
  }

  #img {
    position: absolute;
    width: 100%;
    height: 40rem;
    border-bottom: 1rem solid ${colors.roxoSecundario};
    filter: blur(3px);
  }

  #grid {
    position: absolute;
    display: flex;
    justify-content: center;
    margin: 5rem;
  }

  #square {
    display: flex;
    flex-direction: column;
    margin: 5rem;
  }

  #align1, #align2, #align3 {
    display: flex;
    flex-direction: column;
    background-color: #5e8092;
    height: 100%;
    padding: 1rem;
  }

  #align2 {
    background-color: #2c596e;
  }

  #align3 {
    background-color: #304049;
  }

  #title {
    font-family: "Raleway";
    font-size: x-large;
    text-transform: uppercase;
  }

  #text {
    font-family: "Raleway";
    padding: 1rem;
  }

  #name {
    font-family: 'Raleway';
    font-size: xx-large;
    text-transform: uppercase;
    color: ${colors.white};
  }

  #subtitle {
    font-family: 'Raleway';
    font-size: medium;
  }

  #chat-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    display: flex;
    flex-direction: column;
  }

  #chat-toggle {
    display: none; /* Esconde o checkbox */
  }

  #chat-button {
    cursor: pointer;
    background: none;
    border: none;
  }

  #chat-box {
    display: none; /* Inicialmente escondido */
    flex-direction: column;
    background-color: #4a4a4a;
    border-radius: 8px;
    padding: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 300px;
    margin-top: 5px;
  }

  #chat-toggle:checked + #chat-button + #chat-box {
    display: flex; /* Exibe o chat quando checkbox é clicado */
  }

  #chat-header {
    display: flex;
    align-items: center;
    color: white;
    font-size: 20px;
    margin-bottom: 10px;
  }

  #chat-content {
    display: flex;
    align-items: center; /* Alinha verticalmente o ícone e o texto */
    padding: 10px;
    color: white;
    font-size: 16px; /* Aumenta o tamanho da fonte */
  }

  #chat-content img {
    margin-right: 10px; /* Espaço entre a imagem e o texto */
    width: 50px;
    height: 50px;
    border-radius: 50%; /* Deixa a imagem arredondada */
  }

  #chat-input {
    margin-top: 10px;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100%;
  }
`;
