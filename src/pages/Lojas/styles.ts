import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: ${colors.black};
  color: ${colors.white};
  font-family: 'Raleway', sans-serif;
  margin: 0;

  #carrossel {
    width: 100%;
  }

  #img {
    width: 100%;
    max-height: 400px;
    object-fit: cover;
  }

  #lojas {
    width: 100%;
    padding: 2rem 0;
  }

  #title {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o conteúdo */
    margin: 0 0 3rem; /* Remove a margem lateral */
  }

  #topico {
    color: ${colors.laranjaEscuro};
    font-family: 'Raleway';
    font-style: italic;
    font-size: xx-large;
    text-align: center; /* Centraliza o texto */
  }

  h1 {
    display: flex;
    flex-direction: column;
    color: ${colors.white};
    font-size: xx-large;
    text-align: center; /* Centraliza o texto */
  }

  #line {
    width: 6.5rem;
    border-bottom: 1px solid ${colors.laranjaEscuro};
    margin: 0 auto; /* Centraliza a linha */
  }

  h2 {
    font-family: 'Raleway';
    font-weight: 600;
    font-style: italic;
    text-align: center; /* Centraliza o texto */
  }

  p {
    font-family: 'Raleway';
    font-size: medium;
    color: ${colors.navBarTitle};
    padding: 1rem 0;
    text-align: center; /* Centraliza o texto */
  }

  .loja {
    background: ${colors.black};
    border-radius: 8px;
    padding: 1rem;
    text-align: start;
    transition: transform 0.2s;
    
    &:hover {
      transform: scale(1.05);
    }
  }

  #lojasGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    width: 100%;
    margin: 0;
    padding: 0 1rem;
  }

  .lojaImg {
    width: 100%;
    height: auto;
    max-height: 200px;
    object-fit: cover;
    margin-bottom: 1rem;
  }

  .stars {
    display: flex;
    justify-content: start;
    gap: 0.2rem;
  }

  .star {
    font-size: 1rem;
  }

  /* Media Queries para Responsividade */
  @media (max-width: 1200px) {
    #lojasGrid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 900px) {
    #lojasGrid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    #lojasGrid {
      grid-template-columns: 1fr;
    }

    #topico {
      font-size: large; /* Ajusta o tamanho em telas menores */
    }

    h1 {
      font-size: large; /* Ajusta o tamanho em telas menores */
    }

    #line {
      width: 5rem; /* Reduz a largura da linha */
    }
  }

  @media (max-width: 320px) {
    #lojas {
      padding: 1rem 0; /* Menos padding em telas pequenas */
    }

    #topico {
      font-size: medium; /* Ajusta ainda mais o tamanho */
    }

    h1 {
      font-size: medium; /* Ajusta ainda mais o tamanho */
    }

    #line {
      width: 4rem; /* Reduz ainda mais a largura da linha */
    }

    h2 {
      font-size: small; /* Tamanho de fonte reduzido para títulos */
    }

    p {
      font-size: small; /* Tamanho de fonte reduzido para parágrafos */
    }

    .lojaImg {
      max-height: 150px; /* Altura máxima das imagens reduzida */
    }

    .star {
      font-size: 0.8rem; /* Tamanho das estrelas reduzido */
    }
  }
`;
