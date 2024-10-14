// styles.ts (ou LayoutStyles.ts)
import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

export const Section = styled.section`
  /* Layout */
  #background {
    width: 99vw;
    height: calc(100vh - 12.90rem);
    background: linear-gradient(${colors.black}, ${colors.roxoSecundario});
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #fundoB {
    justify-content: flex-start;
    align-items: start;
    padding-left: 5rem;
  }

  #layout {
    display: flex;
    gap: 3rem;
  }

  #formulario {
    background-color: ${colors.blackOpac};
    border-radius: 20px;
    width: 75rem;
    height: 35rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 0.2rem solid ${colors.roxoPrincipal};
  }

  /* Textos */
  h1 {
    color: ${colors.roxoPrincipal};
    font-weight: bold;
    font-size: 4rem;
    font-family: 'Reem Kufi';
  }

  #titulo {
    font-family: 'Raleway';
    font-size: large;
    font-weight: bold;
    color: ${colors.white};
    padding-bottom: 0.5rem;
  }

  /* Campos */
  #campo {
    width: 31rem;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
  }

  #input {
    background-color: ${colors.blackFundo};
    padding: 1rem;
    border: 1px solid ${colors.roxoPrincipal};
    font-size: medium;
    border-radius: 10px;
    color: ${colors.whiteOpac};
  }

  /* Botões */
  #buttonDiv {
    display: flex;
    gap: 3rem;
  }

  li {
    list-style: none;
    background-color: ${colors.blackFundo};
    border-radius: 12px;
    transition: background-color 300ms, transform 300ms;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 12rem;
    height: 3rem;
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

  /* Interações */
  li:hover {
    background-color: ${colors.roxoOpac};
    transform: scale(1.05);
  }

  li a:hover {
    color: white;
    transform: scale(1.05);
  }

  /* Imagens */
  img {
    width: 5rem;
  }
`;
