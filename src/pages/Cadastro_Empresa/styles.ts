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
    flex-direction: column;
    overflow: hidden; /* Removendo a barra de rolagem */
  }

  #fundoB {
    justify-content: flex-start;
    align-items: start;
    padding-left: 5rem;
  }

  .align {
    display: flex;
    align-items: center;
    width: 75rem;
    margin-bottom: 2rem; /* Espaço abaixo da seção align */
  }

  #link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    color: white;
    width: 100%;
    font-family: 'Raleway';
    margin-bottom: 2rem; /* Espaço abaixo do link */
  }

  #layout {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap; /* Permite quebra em novas linhas se necessário */
  }

  #formulario {
    background-color: ${colors.blackOpac};
    border-radius: 20px;
    width: 75rem;
    height: auto; /* Permitindo altura flexível */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    border: 0.2rem solid ${colors.roxoPrincipal};
    padding: 4rem; /* Aumentar espaço interno */
    margin: 2rem 0; /* Espaço acima e abaixo do formulário */
  }

  /* Textos */
  h1 {
    color: ${colors.roxoPrincipal};
    font-weight: bold;
    font-size: 4rem;
    font-family: 'Reem Kufi';
    margin-bottom: 2rem; /* Espaço abaixo do cabeçalho */
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
    width: 30rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem; 
  }

  #input {
    background-color: ${colors.blackFundo};
    padding: 1rem 1rem 1rem 3rem; /* Espaço interno para ícone */
    border: 1px solid ${colors.roxoPrincipal};
    font-size: medium;
    border-radius: 10px;
    color: ${colors.whiteOpac};
    width: 100%; /* Para garantir que o input ocupe toda a largura */
    min-height: 3.5rem; /* Altura mínima do input */
    transition: border-color 200ms; /* Transição suave na borda */
  }

  #inputContainer {
    position: relative; /* Para permitir posicionamento absoluto do ícone */
  }

  /* Botões */
  #buttonDiv {
    display: flex;
    gap: 3rem;
    justify-content: center; /* Centraliza os botões */
    margin-top: 1rem; /* Espaço acima dos botões */
    margin-bottom: 2rem; /* Espaço abaixo dos botões */
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
    cursor: pointer; /* Mão ao passar o mouse */
  }

  li a {
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: large;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    width: 100%; /* Link ocupa toda a área do botão */
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
    width: 4rem;
    margin-bottom: 1rem; /* Espaço abaixo da imagem */
  }

  #icon {
    position: absolute; /* Coloca o ícone dentro do campo de input */
    left: 1rem; /* Ajuste a posição do ícone */
    top: 50%;
    transform: translateY(-50%); /* Centraliza verticalmente */
    color: white; /* Muda a cor do ícone para branco */
    font-size: 1.2rem; /* Tamanho do ícone */
  }

  /* Media Queries for Responsiveness */
  @media (max-width: 1225px) {
    #background {
      height: auto; /* Permitir altura flexível */
    }

    .align {
      width: 90%;
    }

    #link {
      width: 90%;
    }

    #formulario {
      width: 90%;
      padding: 2rem; /* Ajustar padding */
    }

    #campo {
      width: 100%; /* Campos ocupam toda a largura */
    }

    h1 {
      font-size: 3rem; /* Diminuir tamanho da fonte */
    }

    #buttonDiv {
      gap: 1rem; /* Reduzir espaço entre botões */
      flex-direction: row; /* Manter botões lado a lado */
    }

    li {
      width: 10rem; /* Ajustar a largura dos botões em telas menores */
    }

    #link {
      padding: 0.5rem; /* Aumentar padding */
      width: 65rem;
      margin-bottom: 1rem; /* Espaço abaixo do link */
    }
  }

  @media (max-width: 800px) {
    #layout {
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 630px) {
    h1 {
      font-size: 40px;
    }
  }

  @media (max-width: 580px) {
    h1 {
      font-size: 30px; /* Diminuir tamanho da fonte */
    }
  }

  @media (max-width: 550px) {
    #layout {
      display: flex;
      flex-direction: column; /* Muda a direção do layout para coluna */
      width: 100%; /* Garantir que ocupe a largura total */
      overflow: hidden; /* Prevent overflow */
    }

    #background {
      height: auto; /* Allows background to grow with content */
      overflow: hidden; /* Remove a barra de rolagem acima de 550px */
    }

    #campo {
      width: 100%; /* Garantir que os campos ocupem toda a largura */
    }

    h1 {
      font-size: 30px; /* Diminuir tamanho da fonte */
    }
  }

  @media (max-width: 420px) {
    h1 {
      font-size: 25px; /* Diminuir tamanho da fonte */
    }

    #campo {
      width: 15rem;
    }

    #buttonDiv {
      width: 80%;
    }

    li a{
      font-size: small;
    }
  }

  @media (max-width: 380px) {
    h1 {
      font-size: 19px; /* Diminuir tamanho da fonte */
    }

    #campo {
      width: 12rem;
    }

    #buttonDiv {
      width: 100%;
    }

    li a{
      font-size: 11px;
    }
  }
`;
