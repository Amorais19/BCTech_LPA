import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

export const Section = styled.section`
  align-items: center;
  justify-content: center;

  /* Estilo do Header */
  #header {
    display: inline-block;
    position: relative;
    width: 100%;
    height: 30rem;
    justify-content: center;
    align-items: center;
  }

  #img {
    position: absolute;
    width: 100%;
    height: 30rem;
  }

  /*Textos*/
  #textos {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #title {
    font-family: 'Reem Kufi';
    font-size: 4em;
    color: ${colors.laranjaEscuro};
  }

  #text {
    width: 30%;
    font-family: 'Raleway';
    font-size: large;
    color: ${colors.white};
    text-align: center;
    padding-top: 4rem;
  }

  #subtitle {
    font-family: 'Raleway';
    color: ${colors.white};
    font-weight: bold; 
  }

  #subtext {
    font-family: 'Raleway';
    font-size: smaller;
    color: ${colors.white};
    padding-top: 0.5rem;
  }

  #titulo {
    font-family: 'Raleway';
    font-size: large;
    color: ${colors.white};
    padding-bottom: 0.5rem;
  }

  /* Estilo do Conteúdo */
  #conteudo {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-evenly;
  }

  #contatos {
    padding: 2rem 0;
  }

  #grid {
    display: grid;
    grid-template-columns: auto auto;
  }

  #mapa {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
  }

  iframe {
    border-radius: 10px;
    width: 92%;
    height: 20rem;
  }

  /* Estilo do Suporte */
  #suporte {
    background-color: ${colors.blackFundo};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 120%;
    height: 90%;
    border-radius: 20px;
  }

  h3 {
    font-family: 'Reem Kufi';
    font-size: 60px;
    color: ${colors.white};
  }

  #campo {
    width: 80%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem; 
  }

  #dados {
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

  /* Estilo do Input Container */
  #inputContainer {
    position: relative;
  }

  input {
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
  

  /* Estilo do Ícone */
  #icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 1.2rem;
  }

  /* Estilo do Botão */
  #buttonDiv {
    display: flex;
    gap: 3rem;
  }

  #button {
    font-family: 'Raleway';
    font-weight: bold;
    text-decoration: none;
    color: ${colors.white};
    background-color: ${colors.roxoPrincipal};
    padding: 1rem 15rem;
    border-radius: 30px;
  }

/* Estilo do Componente ContactSquare */
#square {
  margin: 1rem;
  width: 15rem;
  height: 15rem;
  background-color: ${colors.roxoOpac};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem; /* Adiciona um pouco de espaçamento interno */
}

#square img {
  width: 40%; /* Ajusta a largura da imagem */
  height: auto; /* Mantém a proporção da imagem */
  margin-bottom: 1.5rem; /* Espaçamento abaixo da imagem */
}

#subtitle {
  font-family: 'Raleway';
  color: ${colors.white};
  font-weight: bold; 
}

#subtext {
  font-family: 'Raleway';
  font-size: smaller;
  color: ${colors.white};
  padding-top: 0.5rem;
  text-align: center;
}
`;
