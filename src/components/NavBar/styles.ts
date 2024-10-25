import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const NavBar = styled.aside`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;

  .hamburger {
    display: none;
    font-size: 30px;
    cursor: pointer;
    color: ${colors.navBarTitle};
    text-decoration: none;
  }

  nav {
    display: flex;
    width: 100%;
    flex-direction: column; /* Mudei para coluna para o layout responsivo */
    align-items: flex-start; /* Alinha à esquerda */
  }

  ul {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    padding: 0;
    margin: 0;
    list-style: none; /* Remove as bolinhas */
    transition: max-height 0.3s ease-in-out, background-color 0.3s; /* Adicionada transição para a cor de fundo */
    max-height: 0; /* Inicialmente oculto */
    overflow: hidden;
    border-radius: 4px; /* Cantos arredondados */
    z-index: 1; /* Garante que o menu fique acima de outros elementos */
    background-color: aliceblue; /* Fundo padrão quando aberto */
  }

  ul.open {
    max-height: 300px; /* Altura máxima para expandir */
  }

  a {
    text-decoration: none;
    display: flex; /* Permite centralizar conteúdo */
    justify-content: center; /* Centraliza horizontalmente */
    width: 100%; /* Largura total do link */
    padding: 0.5rem; /* Adiciona espaço ao redor do texto */
    transition: background-color 0.3s; /* Transição suave para o fundo */


    p {
      color: ${colors.navBarTitle};
      font-family: 'Raleway';
      font-size: x-large;
      font-weight: 600;
      transition: color 0.3s;
      text-align: center; /* Alinha o texto ao centro */

      &:hover {
        color: ${colors.laranjaEscuro}; /* Altera a cor do texto ao passar o mouse */
      }
    }
  }

  a.active p {
    color: ${colors.laranjaEscuro};
    text-decoration: none;
  }

  @media (max-width: 924px) {
    .hamburger {
      display: block; /* Exibe o botão em telas menores */
    }

    ul {
      flex-direction: column; /* Alinha os itens verticalmente */
      width: auto; /* Define a largura como automática */
      max-height: 0; /* Inicialmente oculto */
    }

    ul.open {
      max-height: 300px; /* Altura máxima para expandir */
    }
  }

  @media (min-width: 925px) {
    .hamburger {
      display: none; /* Esconde o botão em telas maiores */
    }

    ul {
      display: flex; /* Exibe a lista em linha novamente */
      max-height: none; /* Remove a limitação de altura */
      background-color: transparent; /* Fundo transparente em telas maiores */
    }
  }
`;
