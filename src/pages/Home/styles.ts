import styled from 'styled-components';
import { colors, gradientes } from '../../styles/GlobalStyle';

export const Section = styled.section`
  align-items: center;
  justify-content: center;

  #linear {
    background: linear-gradient(to left, ${gradientes.purpleO}, ${gradientes.purpleT});
    height: 30rem;
  }

  #funcionalidades {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  #topico {
    color: ${colors.roxoPrincipal};
    font-family: 'Raleway';
    font-style: italic;
    font-size: xx-large;
    padding: 0.5rem 0;
  }

  h1 {
    display: flex;
    flex-direction: column;
    color: ${colors.white};
    font-family: 'Reem Kufi';
    font-size: xx-large;
  }

  #line {
    width: 6.5rem;
    border-bottom: solid 2px ${colors.roxoPrincipal};
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
    color: ${colors.roxoPrincipal};
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
  }

  li {
    list-style: none;
    background: linear-gradient(${gradientes.purpleButtonO}, ${gradientes.purpleButtonT});
    border-radius: 12px;
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

  #depoimentoContainer {
    display: flex;
    justify-content: center; /* Centraliza os depoimentos */
    flex-wrap: wrap; /* Permite que os depoimentos quebrem para uma nova linha se necessário */
    gap: 1rem; /* Espaçamento entre os depoimentos */
    width: 100%;
    max-width: 800px;
  }

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
