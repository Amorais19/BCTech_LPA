import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

export const Section = styled.section`
  /* Estilização do Background */
  #background {
    width: 100vw;
    height: calc(100vh - 12.90rem);
    background: linear-gradient(${colors.black}, ${colors.roxoSecundario});
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem; /* Adiciona espaço nas bordas */
  }

  #fundoB {
    padding-left: 2rem; /* Ajusta o padding */
    display: flex;
    justify-content: flex-start;
  }

  /* Estilização do Formulário */
  #formulario {
    background-color: ${colors.blackOpac};
    border-radius: 20px;
    width: 45%; /* Ocupa toda a largura do layout */
    padding: 2rem; /* Adiciona padding interno */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid ${colors.roxoPrincipal};
  }

  /* Texto */
  h1 {
    color: ${colors.roxoPrincipal};
    font-weight: bold;
    font-size: 3.5rem; /* Tamanho da fonte ajustado */
    font-family: 'Reem Kufi';
    text-align: center; /* Centraliza o título */
    margin-bottom: 2rem; /* Espaço abaixo do título */
  }

  #titulo {
    font-family: 'Raleway';
    font-size: large;
    font-weight: bold;
    color: ${colors.white};
    padding-bottom: 0.5rem;
  }

  /* Layout do Formulário */
  #layout {
    display: flex;
    flex-direction: column; /* Coloca os campos em coluna */
    gap: 2rem; /* Ajuste no espaçamento */
    width: 100%; /* Para ocupar toda a largura do contêiner */
    max-width: 600px; /* Limita a largura máxima do layout */
  }

  #campo {
    width: 100%; /* Ajusta para ocupar toda a largura disponível */
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem; /* Espaço abaixo de cada campo */
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

  /* Estilização do Ícone */
  #icon {
    position: absolute; /* Coloca o ícone dentro do campo de input */
    left: 1rem; /* Ajuste a posição do ícone */
    top: 50%;
    transform: translateY(-50%); /* Centraliza verticalmente */
    color: white; /* Muda a cor do ícone para branco */
    font-size: 1.5rem; /* Tamanho do ícone */
  }

  img {
    width: 5rem;
  }

  /* Botões */
  #buttonDiv {
    display: flex;
    justify-content: center; /* Centraliza os botões */
    gap: 2rem; /* Ajuste no espaçamento dos botões */
    margin-top: 2rem; /* Espaçamento acima dos botões */
  }

  li {
    list-style: none;
    background-color: ${colors.blackFundo};
    border-radius: 12px;
    transition: background-color 300ms, transform 300ms;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 10rem; /* Largura dos botões */
    height: 3.5rem; /* Altura do botão */
    text-align: center; /* Text align opcional para maior segurança */
  }

  li a {
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: large;
    font-weight: bold;
    text-decoration: none; /* Remove sublinhado */
  }

  li:hover {
    background-color: ${colors.roxoOpac};
    transform: scale(1.05);
  }
`;
