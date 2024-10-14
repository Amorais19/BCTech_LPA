import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

export const Section = styled.section`
  align-items: center;
  justify-content: center;

  /* Estilo do Header */
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

  /*Textos*/
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

  #titulo {
    font-family: 'Raleway';
    font-size: large;
    color: ${colors.white};
    padding-bottom: 0.5rem;
  }

  /* Estilo do Conteúdo */
  #conteudo {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-evenly;
  }

  #contatos {
    padding: 2rem 0;
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


  #mapa {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
  }

  iframe {
    border-radius: 10px;
    width: 92%;
    height: 20rem;
  }

  /* Estilo do Suporte */
  #suporte {
    background-color: ${colors.blackFundo};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 120%;
    height: 90%;
    border-radius: 20px;
  }

  h3 {
    font-family: 'Reem Kufi';
    font-size: 60px;
    color: ${colors.white};
  }

  #campo {
    width: 80%;
    display: flex;
    flex-direction: column;
  }

  #dados {
    background-color: ${colors.blackOpac};
    border: 1px solid ${colors.roxoPrincipal};
    border-radius: 10px;
    padding: 1rem;
    font-size: medium;
    color: ${colors.whiteOpac};
  }

  /* Estilo do Botão */
  #buttonDiv {
    display: flex;
    gap: 3rem;
  }

  li {
    list-style: none;
    background-color: ${colors.roxoPrincipal};
    border-radius: 40px;
    transition: background-color 300ms, transform 300ms;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 25rem;
    height: 4rem;
    text-align: center;
  }

  li a {
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: large;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
  }
`;
