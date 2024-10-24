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
    width: 100%;
    height: 90%;
    border-radius: 20px;
  }

  #titlesuporte {
    font-family: 'Reem Kufi';
    font-size: 60px;
    color: ${colors.white};
    padding: 0 10rem;
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
    padding: 1rem 13.5rem;
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

@media (max-width: 1240px) {
  #conteudo {
  display: flex; /* Usar flexbox para melhor controle */
  flex-direction: column; /* Empilha os elementos verticalmente em telas menores */
  align-items: center; /* Centraliza os itens */
  padding: 2rem; /* Adiciona espaçamento */
}

#contatos {
  display: flex; /* Mantém o layout flexível */
  flex-direction: column; /* Empilha os elementos em coluna em telas menores */
  align-items: center; /* Centraliza os itens */
  width: 100%; /* Garante que ocupe toda a largura disponível */
}

#grid {
  display: grid; /* Continua usando grid */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Ajusta para múltiplas colunas com um mínimo de 200px */
  gap: 1rem; /* Espaçamento entre os itens */
  width: 100%; /* Garante que o grid ocupe toda a largura disponível */
  padding: 1rem; /* Adiciona espaçamento */
}

#mapa {
  width: 95%; /* Garante que o mapa ocupe a largura total */
  margin: 2rem 0; /* Margem vertical para espaçamento */
}

iframe {
  border-radius: 10px;
  width: 100%; /* Ajusta a largura do iframe para 100% */
  height: 20rem; /* Mantém a altura do mapa */
}

#suporte {
  background-color: ${colors.blackFundo};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; /* Centraliza verticalmente */
  width: 100%; /* Garante que ocupe toda a largura disponível */
  max-width: 1000px; /* Define uma largura máxima, ajuste conforme necessário */
  border-radius: 20px;
  padding: 2rem; /* Adiciona um pouco de espaçamento interno */
  margin: 0 auto; /* Centraliza horizontalmente */
}

#titlesuporte {
  font-family: 'Reem Kufi';
  font-size: 40px; /* Ajusta o tamanho do título */
  color: ${colors.white};
  padding-bottom: 1rem; /* Espaço abaixo do título */
}

#campo {
  width: 90%; /* Garante que o campo ocupe uma parte da largura disponível */
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

#buttonDiv {
  display: flex;
  justify-content: center; /* Centraliza o botão */
  width: 100%; /* Garante que o div do botão ocupe toda a largura */
}

#button {
  font-family: 'Raleway';
  font-weight: bold;
  text-decoration: none;
  color: ${colors.white};
  background-color: ${colors.roxoPrincipal};
  padding: 1rem 2rem; /* Ajusta o padding do botão */
  border-radius: 30px;
}


}


`;
