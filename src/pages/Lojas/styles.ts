import styled from 'styled-components'; // Importa o styled-components para criar componentes estilizados
import { colors } from '../../styles/GlobalStyle'; // Importa as cores definidas globalmente

export const Section = styled.section` /* Definindo a seção principal com styled-components */
  display: flex; /* Exibe os itens em linha ou coluna */
  flex-direction: column; /* Organiza os itens da seção em uma coluna */
  align-items: flex-start; /* Alinha os itens à esquerda */
  justify-content: center; /* Centraliza os itens no eixo vertical */
  background-color: ${colors.black}; /* Cor de fundo definida como preta */
  color: ${colors.white}; /* Cor do texto definida como branca */
  font-family: 'Raleway', sans-serif; /* Define a fonte usada no texto */
  margin: 0; /* Remove a margem padrão da seção */

  /* Carrossel */
  .carrossel {
    width: 100%; /* O carrossel ocupa toda a largura disponível */
  }

  /* Estilo das imagens do carrossel */
  .carrosselImg {
    width: 100%; /* As imagens ocupam toda a largura do carrossel */
    max-height: 400px; /* Altura máxima de 400px para as imagens */
    object-fit: cover; /* Garante que a imagem cubra a área sem distorção */
  }

  /* Seção das lojas */
  .lojas {
    width: 100%; /* A seção de lojas ocupa toda a largura */
    padding: 2rem 0; /* Adiciona espaçamento de 2rem no topo e no fundo */
  }

  /* Estilo do título das lojas */
  .title {
    display: flex; /* Organiza os itens dentro da div em linha */
    flex-direction: column; /* Organiza os itens em uma coluna */
    align-items: center; /* Centraliza os itens na horizontal */
    margin: 0 0 3rem; /* Remove a margem lateral e adiciona 3rem de margem abaixo */
  }

  /* Estilo do texto "Explore nossas" */
  .topico {
    color: ${colors.laranjaEscuro}; /* Cor do texto definida como laranja escuro */
    font-family: 'Raleway'; /* Fonte definida para o texto */
    font-style: italic; /* Estilo itálico */
    font-size: xx-large; /* Tamanho de fonte extra grande */
    text-align: center; /* Centraliza o texto */
  }

  /* Estilo do título "LOJAS" */
  h1 {
    display: flex; /* Organiza o título "LOJAS" em uma linha */
    flex-direction: column; /* Coloca o texto "LOJAS" e a linha decorativa abaixo */
    color: ${colors.white}; /* Cor do título definida como branca */
    font-size: xx-large; /* Tamanho de fonte extra grande */
    text-align: center; /* Centraliza o texto */
  }

  /* Linha decorativa abaixo do título "LOJAS" */
  .line {
    width: 6.5rem; /* Largura da linha */
    border-bottom: 1px solid ${colors.laranjaEscuro}; /* Linha fina com cor laranja escuro */
    margin: 0 auto; /* Centraliza a linha */
  }

  /* Estilo do nome da loja (h2) */
  h2 {
    font-family: 'Raleway'; /* Fonte do nome da loja */
    font-weight: 600; /* Peso da fonte mais forte */
    font-style: italic; /* Estilo itálico */
    text-align: center; /* Centraliza o texto */
  }

  /* Estilo da descrição da loja (p) */
  p {
    font-family: 'Raleway'; /* Fonte da descrição */
    font-size: medium; /* Tamanho da fonte médio */
    color: ${colors.navBarTitle}; /* Cor da descrição definida */
    padding: 1rem 0; /* Adiciona espaçamento de 1rem acima e abaixo */
    text-align: center; /* Centraliza o texto */
  }

  /* Estilo do item de loja */
  .loja {
    background: ${colors.black}; /* Cor de fundo preta */
    border-radius: 8px; /* Bordas arredondadas */
    padding: 1rem; /* Espaçamento interno de 1rem */
    text-align: start; /* Alinha o texto à esquerda */
    transition: transform 0.2s; /* Animação de transformação suave ao passar o mouse */
    
    &:hover { /* Efeito ao passar o mouse sobre o item da loja */
      transform: scale(1.05); /* Aumenta o tamanho do item levemente */
    }
  }

  /* Estilo do grid de lojas */
  .lojasGrid {
    display: grid; /* Exibe as lojas em um grid */
    grid-template-columns: repeat(4, 1fr); /* Cria 4 colunas igualmente distribuídas */
    gap: 2rem; /* Espaçamento entre as lojas */
    width: 100%; /* O grid ocupa toda a largura disponível */
    margin: 0; /* Remove a margem */
    padding: 0 1rem; /* Adiciona um espaçamento lateral de 1rem */
  }

  /* Estilo da imagem da loja */
  .lojaImg {
    width: 100%; /* Imagem ocupa toda a largura do item */
    height: auto; /* Altura ajustada automaticamente */
    max-height: 200px; /* Altura máxima de 200px */
    object-fit: cover; /* Garante que a imagem cubra a área sem distorção */
    margin-bottom: 1rem; /* Espaçamento abaixo da imagem */
  }

  /* Estilo para as estrelas de avaliação */
  .stars {
    display: flex; /* Organiza as estrelas em linha */
    justify-content: center; /* Centraliza as estrelas */
    gap: 0.2rem; /* Espaçamento entre as estrelas */
  }

  .star {
    font-size: 1rem; /* Tamanho das estrelas */
  }

  /* Media Queries para Responsividade */

  @media (max-width: 1200px) {
    .lojasGrid {
      grid-template-columns: repeat(3, 1fr); /* Exibe 3 lojas por linha em telas menores */
    }
  }

  @media (max-width: 900px) {
    .lojasGrid {
      grid-template-columns: repeat(2, 1fr); /* Exibe 2 lojas por linha em telas menores */
    }
  }

  @media (max-width: 600px) {
    .lojasGrid {
      grid-template-columns: 1fr; /* Exibe 1 loja por linha em telas muito pequenas */
    }

    /* Ajusta o tamanho do texto e elementos para telas menores */
    .topico {
      font-size: large;
    }

    h1 {
      font-size: large;
    }

    .line {
      width: 5rem;
    }
  }

  @media (max-width: 320px) {
    .lojas {
      padding: 1rem 0; /* Menos padding em telas pequenas */
    }

    /* Ajusta ainda mais o tamanho de texto e outros elementos */
    .topico {
      font-size: medium;
    }

    h1 {
      font-size: medium;
    }

    .line {
      width: 4rem;
    }

    h2 {
      font-size: small;
    }

    p {
      font-size: small;
    }

    .lojaImg {
      max-height: 150px;
    }

    .star {
      font-size: 0.8rem;
    }
  }
`;
