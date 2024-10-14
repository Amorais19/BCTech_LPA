import styled from 'styled-components';
import { colors, gradientes } from '../../styles/GlobalStyle';

// Estilo para a seção principal
export const Section = styled.section`
  align-items: center;
  justify-content: center;

  // Estilo da seção linear com gradiente animado
  .linear {
    background: linear-gradient(300deg, 
      rgba(36, 24, 155, 0.3) 0%, 
      rgba(52, 42, 144, 0.4) 20%, 
      rgba(36, 34, 188, 0.4) 40%, 
      rgba(71, 65, 226, 0.4) 60%, 
      rgba(52, 42, 144, 0.4) 80%, 
      rgba(36, 24, 155, 0.3) 100%);
    height: 30rem;
    position: relative;
    overflow: hidden;
    animation: gradient 20s ease-in-out infinite;
    background-size: 400% 400%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  // Animação do gradiente
  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  // Estilo para a seção de funcionalidades
  #funcionalidades {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  // Estilo do tópico
  #topico {
    color: #5836BB; /* roxoPrincipal */
    font-family: 'Raleway';
    font-style: italic;
    font-size: xx-large;
    padding: 0.5rem 0;
  }

  // Estilo do título
  h1 {
    display: flex;
    flex-direction: column;
    color: ${colors.white};
    font-family: 'Reem Kufi';
    font-size: xx-large;
  }

  // Linha sob o título
  #line {
    width: 6.5rem;
    border-bottom: solid 2px #5836BB; /* roxoPrincipal */
  }

  // Estilo da grade de funcionalidades
  #funcao {
    display: grid;
    grid-template-columns: auto auto;
    margin: 2rem;
  }

  // Estilos para os cards de funcionalidades
  #centerO,
  #centerT {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 12rem;
    height: 12rem;
    margin: 3rem;
    transition: box-shadow 300ms ease-in-out, background 300ms ease-in-out;
  }

  #centerO {
    background: linear-gradient(${colors.black}, ${gradientes.blackO}, ${gradientes.blackT});
  }

  #centerT {
    background: linear-gradient(${colors.black}, ${gradientes.greyO}, ${gradientes.greyT});
  }

  // Efeitos de hover nos cards
  #centerO:hover,
  #centerT:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    background: linear-gradient(${colors.black}, ${gradientes.blackT}, ${gradientes.blackO});
  }

  // Estilo para os subtítulos
  h4 {
    color: #5836BB; /* roxoPrincipal */
    font-family: 'Reem Kufi';
  }

  // Estilo da imagem nos cards
  #img {
    width: 70px;
    height: 70px;
  }

  // Estilo do texto nos cards
  #text {
    display: flex;
    font-family: 'Raleway';
    color: ${colors.white};
    font-size: smaller;
    width: 10rem;
    text-align: center;
  }

  // Estilo da seção sobre
  #sobre {
    background: linear-gradient(${gradientes.purpleO}, ${gradientes.purpleT});
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 3rem;
  }

  // Largura da div interna da seção sobre
  #width {
    flex-direction: column;
    width: 40rem;
  }

  // Estilo da imagem da mulher
  #mulher {
    width: 500px;
    height: 350px;
  }

  // Estilo do texto na seção sobre
  #texto {
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: large;
    padding: 1.5rem 0;
  }

  // Estilo do contêiner dos botões
  #botao {
    display: flex;
    justify-content: space-evenly;
    margin-left: -4rem;
  }

  // Estilo dos itens da lista de botões
  li {
    list-style: none;
    background: linear-gradient(${gradientes.purpleButtonO}, ${gradientes.purpleButtonT});
    border-radius: 12px;
    transition: background-color 300ms, transform 300ms;
    display: inline-block; 
    padding: 0.5rem 1rem; 
  }

  // Estilo do link dentro dos botões
  li a {
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: large;
    text-decoration: none; 
    display: block; 
    text-align: center; 
  }

  // Efeitos de hover nos botões
  li:hover {
    background-color: ${colors.roxoOpac};
    transform: scale(1.05); 
  }

  // Estilo da seção de depoimentos
  #depoimentos {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background: ${gradientes.greyO};
    color: ${colors.black};
  }

  // Contêiner para os depoimentos
  #depoimentoContainer {
    display: flex;
    justify-content: center; /* Centraliza os depoimentos */
    flex-wrap: wrap; /* Permite que os depoimentos quebrem para uma nova linha se necessário */
    gap: 1rem; /* Espaçamento entre os depoimentos */
    width: 100%;
    max-width: 800px;
  }

  // Estilo para cada depoimento
  .testimonial {
    background: ${colors.white};
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 250px;
    transition: transform 0.3s;
    flex: 1 1 200px; /* Permite que os depoimentos se ajustem ao espaço disponível */
  }

  // Estilo da imagem do perfil
  .profileImage {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-bottom: 0.5rem; /* Adiciona um espaço entre a imagem e o texto */
  }

  #span {
    height: 30rem;
  }
`;
