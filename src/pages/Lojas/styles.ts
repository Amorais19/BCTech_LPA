import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

export const Section = styled.section`
  /* Estilização Geral */
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinhado à esquerda */
  justify-content: center;
  background-color: ${colors.black}; /* Fundo preto */
  color: ${colors.white}; /* Texto branco */
  font-family: 'Raleway', sans-serif;
  margin: 0; /* Remove margens ao redor da seção */

  /* Carrossel */
  #carrossel {
    width: 100%;
    margin-top: 2rem;
  }

  #img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }

  /* Seção de Lojas */
  #lojas {
    width: 100%;
    padding: 2rem 0; /* Remover padding lateral */
    margin-top: 2rem;
  }

  #topico {
    color: #5836BB; /* roxoPrincipal */
    font-family: 'Raleway';
    font-style: italic;
    font-size: xx-large;
  }

  /* Textos */
  h1 {
    display: flex;
    flex-direction: column;
    color: ${colors.white};
    font-size: xx-large;
  }

  #line {
    width: 6.5rem;
    border-bottom: 1px solid ${colors.roxoPrincipal};
  }

  #title {
    display: flex;
    flex-direction: column;
    margin: 0 0 3rem 3rem;
  }

  h2 {
    font-size: 1.2rem;
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.9rem;
    margin: 0.5rem 0 1rem 0;
    color: ${colors.navBarTitle};
  }

  /* Loja */
  .loja {
    background: ${colors.black};
    border-radius: 8px;
    padding: 1rem;
    text-align: start;
    transition: transform 0.2s; /* Transição suave */
    
    &:hover {
      transform: scale(1.05); /* Aumenta um pouco ao passar o mouse */
    }
  }

  #lojasGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Definindo 4 colunas */
    gap: 2rem; /* Espaçamento entre os itens */
    width: 100%; /* Garantir que ocupe toda a largura */
    margin: 0; /* Remove margens para garantir que as lojas comecem na esquerda */
    padding: 0 1rem; /* Padding lateral para espaçamento */
  }

  .lojaImg {
    width: 100%; /* Largura total do contêiner */
    height: auto; /* Permite que a altura seja automática para manter a proporção */
    max-height: 200px; /* Define uma altura máxima para as imagens */
    object-fit: cover; /* Ajusta a imagem para preencher o espaço */
    margin-bottom: 1rem;
    border-radius: 8px;
  }

  .stars {
    display: flex;
    justify-content: start;
    gap: 0.2rem;
  }

  .star {
    font-size: 1rem;
    color: yellow;
  }
`;
