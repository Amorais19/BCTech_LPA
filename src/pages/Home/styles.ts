import styled from 'styled-components';
import { colors, gradientes } from '../../styles/GlobalStyle';

// Estilo para a seção principal
export const Section = styled.section`
  align-items: center;
  justify-content: center;

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

  #funcionalidades {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #topico {
    color: ${colors.laranjaEscuro}; /* roxoPrincipal */
    font-family: 'Raleway';
    font-style: italic;
    font-size: xx-large;
    padding: 0.5rem 0;
    width: 100%; /* Garante que ocupe toda a largura */
    text-align: center; /* Centraliza o texto */
  }

  h1 {
    display: flex;
    flex-direction: column;
    color: ${colors.white};
    font-family: 'Reem Kufi';
    font-size: xx-large;
    text-align: center; /* Centraliza o texto */
  }

  #line {
    width: 6.5rem;
    border-bottom: solid 2px ${colors.laranjaEscuro}; /* roxoPrincipal */
  }

  #funcao {
    display: grid;
    grid-template-columns: auto auto;
    margin: 2rem;
  }

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

  #centerO:hover,
  #centerT:hover {
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
    background: linear-gradient(${colors.black}, ${gradientes.blackT}, ${gradientes.blackO});
  }

  h4 {
    color: #5836BB; /* roxoPrincipal */
    font-family: 'Reem Kufi';
  }

  #img {
    width: 70px;
    height: 70px;
  }

  #text {
    display: flex;
    font-family: 'Raleway';
    color: ${colors.white};
    font-size: smaller;
    width: 10rem;
    text-align: center;
  }

  #sobre {
    background: linear-gradient(${gradientes.purpleO}, ${gradientes.purpleT});
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 3rem;
  }

  #width {
    flex-direction: column;
    width: 40rem;
  }

  #mulher {
    width: 500px;
    height: 350px;
  }

  #texto {
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: large;
    padding: 1.5rem 0;
  }

  #botao {
    display: flex;
    justify-content: space-evenly;
    margin-left: -4rem;
    margin-top: 2rem;
  }

  li {
    list-style: none;
    background: linear-gradient(${gradientes.purpleButtonO}, ${gradientes.purpleButtonT});
    border-radius: 12px;
    width: 16rem;
    transition: background-color 300ms, transform 300ms;
    display: inline-block; 
    padding: 0.5rem 1rem; 
  }

  li a {
    color: ${colors.white};
    font-family: 'Raleway';
    font-size: large;
    text-decoration: none; 
    display: block; 
    text-align: center; 
  }

  li:hover {
    background-color: ${colors.roxoOpac};
    transform: scale(1.05); 
  }

  #depoimentos {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background: ${gradientes.greyO};
    color: ${colors.black};
  }

  @keyframes float {
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
  }

  #depoimentoContainer {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 2rem;
      width: 60%;
      height: 100%;
  }

  .testimonial {
      display: flex;
      flex-direction: column;
      background-color: ${colors.white};
      width: 100%;
      height: 15rem;
      margin: 2rem;
      align-items: center;
      justify-content: space-around;
      text-align: center;
      font-family: 'Raleway';
      font-size: medium;
      border-radius: 10px;
      padding: 1rem;
      animation: float 3s ease-in-out infinite; /* Adiciona a animação */
  }

  .profileImage {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-bottom: 0.5rem; /* Adiciona um espaço entre a imagem e o texto */
  }

  #span {
    height: 30rem;
  }

  @media (max-width: 1350px) {
    #depoimentoContainer {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 2rem;
        width: 70%;
        height: 100%;
    }
  }

  @media (max-width: 1200px) {
    #depoimentoContainer {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 2rem;
        width: 90%;
        height: 100%;
    }
  }

  @media (max-width: 1080px) {
    #mulher {
      width: 400px;
      height: 250px;
    }

    #botao {
      display: grid;
      grid-template-columns: auto;
      margin: 1rem;
      gap: 1rem;
    }

    li {
      width: 16rem;
      display: inline-block; 
      padding: 0.5rem 1rem; 
    }

    li a {
      font-size: medium;
      text-align: center; 
    }

    #funcionalidades {
      grid-template-columns: auto auto;
      padding-left: 1rem;
    }

    #line {
      width: 10em;
      margin: 0 auto;
    }
  }

  @media (max-width: 920px) {
    #span {
      height: 30rem;
    }

    #funcionalidades {
      display: grid;
      grid-template-columns: auto;
      margin: 2rem;
      align-items: center;
      text-align: center;
      justify-content: space-around;
      padding-left: 0rem;
    }

    #botao {
      display: grid;
      grid-template-columns: auto;
      margin: 1rem;
      gap: 1rem;
    }

    .testimonial {
      display: flex;
      flex-direction: column;
      background-color: ${colors.white};
      width: 100%;
      height: 15rem;
      margin: 1rem;
      align-items: center;
      font-size: medium;
    }
  }

  @media (max-width: 860px) {
    #sobre {
      padding: 3rem 4rem 3rem 0rem;
    }
  }

  @media (max-width: 800px) {
    #texto {
      width: 80%;
    }

    #botao {
      width: 90%;
    }

    #mulher {
      width: 400px;
      height: 250px;
    }

    #sobre {
      padding: 3rem 0rem 3rem 0rem;
    }
    
    #depoimentoContainer {
        display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 2rem;
        width: 90%;
        height: 100%;
    }

    .testimonial {
        display: flex;
        flex-direction: column;
        background-color: ${colors.white};
        width: 100%;
        height: 15rem;
        margin: 0.5rem;
        align-items: center;
        font-size: small;
    }
  }

  @media (max-width: 700px) {
    #texto {
      font-size: medium;
      width: 80%;
    }

    #botao {
      width: 80%;
      gap: 1rem;
    }

    #depoimentoContainer {
      width: 90%; /* Ajusta a largura para dispositivos menores */
    }
  }

  @media (max-width: 660px) {
    #depoimentoContainer {
        display: grid;
        grid-template-columns: auto;
        margin: 2rem;
        padding: 2rem;
        width: 90%; /* Garante que não saia da tela */
        height: 100%;
    }

    #funcao {
      display: grid;
      grid-template-columns: auto;
    }

    .testimonial {
      display: flex;
      flex-direction: column;
      height: 12rem;
      margin: 1rem;
      font-size: medium;
    }

    #funcionalidades {
      display: grid;
      align-items: center;
      justify-content: center;
    }

    #mulher {
      display: none;
    }

    #textinho {
      width: 100%;
    }

    #width {
      display: flex;
      align-items: center;
    }

    #botao {
      gap: 2rem
    }
  }

  @media (max-width: 490px) {
    #textinho {
      width: 100%;
    }

    #width {
      display: flex;
      align-items: center;
    }

    h1 {
      display: flex;
      flex-direction: column;
      color: ${colors.white};
      font-family: 'Reem Kufi';
      font-size: x-large;
      text-align: center;
    }
    
    #depoimentoContainer {
        display: grid;
        grid-template-columns: auto;
        padding: 2rem;
        width: 90%;
    }

    .testimonial {
        display: flex;
        flex-direction: column;
        height: 14rem;
        margin: 0rem 0rem 1rem 0rem;
        font-size: small;
        animation: float 3s ease-in-out infinite;
      }
  }
`;

