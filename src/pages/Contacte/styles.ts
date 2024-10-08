import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

export const Section = styled.section`
  align-items: center;
  justify-content: center;

  #header {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 30rem;
    justify-content: center;
    align-items: center;
  }

  #img {
    position: absolute;
    width: 100%;
    height: 30rem;
  }

  #textos {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #title {
    font-family: 'Reem Kufi';
    font-size: 4em;
    color: ${colors.white};
  }

  #text {
    width: 30%;
    font-family: 'Raleway';
    font-size: large;
    color: ${colors.white};
    text-align: center;
    padding-top: 4rem;
  }

  #conteudo {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-evenly;
  }

  #contatos {
    padding: 2rem;
  }

  #grid {
    display: grid;
    grid-template-columns: auto auto;
  }

  #square {
    margin: 1rem;
    width: 15rem;
    height: 15rem;
    background-color: ${colors.roxoOpac};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #subtitle {
    font-family: 'Raleway';
    color: ${colors.white};
    font-weight: bold; 
  }
 
  

  #subtext {
    font-family: 'Raleway';
    font-size: smaller;
    color: ${colors.white};
    padding-top: 0.5rem;
  }

  .mapa {
    width: 25rem;
    height: 15rem;
    border: 2px solid ${colors.roxoOpac};
    margin-top: 2rem;
    border-radius: 15px; /* Adicione bordas arredondadas, se desejar */
  }

  #suporte {
    background-color: ${colors.blackFundo};
    border-radius: 20px;
    width: 100%;
    height: 90%;
    margin: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }

  h3 {
    font-family: 'Reem Kufi';
    font-size: xx-large;
    color: ${colors.white};
    font-size: 60px;
    
  }

  #campo {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  #titulo {
    font-family: 'Raleway';
    font-size: large;
    color: ${colors.white};
    padding-bottom: 0.5rem;
  }

  input {
    background-color: ${colors.blackOpac};
    padding: 0%.5;
    border: 1px solid ${colors.roxoPrincipal};
    font-size: medium;
    border-radius: 10px;
    color: ${colors.whiteOpac};
    width: 35rem;
  }
  input, text {
    background: ${colors.blackOpac};
    border: 1px solid ${colors.roxoPrincipal};
    border-radius: 5px;
    padding: 0.8rem;
    color: ${colors.white};
    width: 100%;
  }
  label {
    font-family: 'Raleway', sans-serif;
    color: ${colors.white};
  }

  #botao {
    background-color: ${colors.roxoPrincipal};
    width: 80%;
    padding: 1rem;
    border-radius: 30px;
    font-family: 'Raleway';
    font-size: large;
    color: ${colors.white};
    font-weight: 600;
  }

  #mapa {
    width: 80%; /* Preencher o contêiner */
    max-width: 600px; /* Largura máxima do mapa */
    height: 300px; /* Altura fixa do mapa */
    margin-top: 2rem;
    border-radius: 10px; /* Bordas arredondadas */
    overflow: hidden; /* Para garantir que o conteúdo não transborde */
    position: relative; /* Para o iframe */
  }

  .mapa iframe {
    width: 60%; /* Preencher a largura do contêiner */
    height: 60%; /* Preencher a altura do contêiner */
    border: 0; /* Remover bordas do iframe */
  }

  #buttonDiv {
        display: flex;
        gap: 3rem;
    }
    li {
        list-style: none;
        background-color: ${colors.roxoPrincipal};
        border-radius: 40px;
        transition: background-color 300ms, transform 300ms;
        display: inline-flex; /* Troque para inline-flex para usar flexbox */
        align-items: center; /* Centraliza verticalmente */
        justify-content: center; /* Centraliza horizontalmente */
        width: 25rem;
        height: 4rem;
        text-align: center; /* Text align opcional para maior segurança */
    }

    li a {
        color: ${colors.white};
        font-family: 'Raleway';
        font-size: large;
        font-weight: bold;
        text-decoration: none; /* Remove sublinhado */
        display: inline-block; /* Mantém como inline-block */
    }
`;
