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
    #text {
      width: 70%;
    }

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
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    width: 90%; /* Garante que o grid ocupe 90% da largura */
    max-width: 1200px; /* Define um máximo para a largura */
    margin: 0 auto; /* Centraliza o grid */
    padding: 0; /* Remove padding */
  }

    #mapa {
      width: 90%; /* Garante que o mapa ocupe 90% da largura */
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
      width: 90%; /* Garante que ocupe 90% da largura */
      max-width: 95%; /* Define uma largura máxima */
      border-radius: 20px;
      padding: 2rem; /* Adiciona um pouco de espaçamento interno */
      margin-bottom: 3rem;
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
    #square {
      margin: 0; /* Remove margem externa */
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
  }
  
  @media (max-width: 1180px) {
  #conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
  }

  #grid {
    width: 90%; /* Garante que o grid ocupe 90% da largura */
    max-width: 100%;
    margin: 0 auto; /* Centraliza o grid */
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Ajusta para múltiplas colunas */
    gap: 1rem; /* Espaçamento entre os itens */
    justify-items: center; /* Centraliza os itens dentro do grid */
    margin-bottom: 1rem; /* Margem inferior para espaçamento com o mapa */
  }

  #mapa {
    width: 90%; /* Garante que o mapa ocupe 90% da largura, igual ao grid */
    max-width: 100%; /* Garante que não exceda a largura do grid */
    margin: 3rem 0; /* Adiciona um espaçamento vertical */
  }

  #suporte {
    width: 100%;
    width: 90%; /* Garante que o suporte ocupe 90% da largura, igual ao grid */
    max-width: 100%;
    margin-bottom: 3rem; /* Adiciona um espaçamento */
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  #titlesuporte {
    font-size: 40px;
    padding-bottom: 1rem;
    text-align: center; 
  }

  #campo {
    width: 90%; 
  }

  /* Ajustes no botão */
  #button {
    padding: 1rem 4rem; 
    margin: 0 auto; 
  }

  /* Ajuste no tamanho do square */
  #square {
    width: 100%; /* Faz com que o square ocupe 100% da largura disponível */
    max-width: 200px; /* Define uma largura máxima para evitar sobreposição */
    height: auto; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
  }
}

@media (max-width: 790px) {
  #text {
    width: 70%;
  }

  #conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem; /* Mantendo o padding em telas menores */
  }

  #grid {
    width: 90%; /* Garante que o grid ocupe 90% da largura */
    max-width: 100%; /* Garante que não exceda a largura do container */
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Dividindo em 2 colunas */
    gap: 5rem; /* Espaçamento entre os itens */
    justify-items: center; /* Centraliza os itens dentro do grid */
    margin-bottom: 1rem; /* Margem inferior para espaçamento com o mapa */
  }

  #mapa {
    width: 90%; /* Garante que o mapa ocupe 90% da largura */
    max-width: 100%; /* Garante que não exceda a largura do grid */
    margin: 3rem 0; /* Adiciona um espaçamento vertical */
  }

  #suporte {
    width: 90%; /* Garante que o suporte ocupe 90% da largura */
    max-width: 100%;
    margin-bottom: 3rem; /* Adiciona um espaçamento vertical */
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  #titlesuporte {
    font-size: 32px; /* Ajustando o tamanho do título para telas menores */
    padding-bottom: 1rem;
    text-align: center; 
  }

  #campo {
    width: 90%; 
  }

  #button {
    padding: 1rem 3rem; /* Ajustando o padding do botão */
    margin: 0 auto; 
  }

  #square {
    width: 100%; /* Faz com que o square ocupe 100% da largura disponível */
    max-width: 250px; /* Aumentando a largura máxima para evitar que fique muito pequeno */
    height: 200px; /* Definindo uma altura mínima */
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
  }
}

@media (max-width: 680px) {
  #header {
    height: 25rem; /* Altura do header ajustada */
    padding-bottom: 1rem; /* Adicionando padding inferior para espaço */
  }

  #img {
    height: 25rem; /* Ajustando a altura da imagem para combinar com o header */
  }

  #conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem; /* Mantendo o padding */
  }

  #grid {
    width: 90%; /* Garante que o grid ocupe 90% da largura */
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Mantém 2 colunas */
    gap: 1rem; /* Espaçamento entre os itens */
    justify-items: center; /* Centraliza os itens dentro do grid */
    margin-bottom: 1rem; /* Margem inferior para espaçamento com o mapa */
  }

  #mapa {
    width: 90%; /* Garante que o mapa ocupe 90% da largura */
    max-width: 100%;
    margin: 2rem 0; /* Adiciona um espaçamento vertical */
  }

  #suporte {
    width: 90%; /* Garante que o suporte ocupe 90% da largura */
    max-width: 100%;
    margin-bottom: 3rem; /* Adiciona um espaçamento vertical */
    display: flex;
    flex-direction: column;
    align-items: center; 
  }

  #titlesuporte {
    font-size: 28px; /* Ajustando o tamanho do título para telas menores */
    padding-bottom: 1rem;
    text-align: center; 
  }

  #campo {
    width: 90%; 
  }

  #button {
    padding: 1rem 2rem; /* Ajustando o padding do botão */
    margin: 0 auto; 
  }

  #square {
    width: 100%; /* Faz com que o square ocupe 100% da largura disponível */
    max-width: 220px; /* Aumentando a largura máxima para evitar que fique muito pequeno */
    height: 180px; /* Definindo uma altura mínima */
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
  }

  #title {
    font-size: 3em; /* Reduzindo o tamanho do título */
    text-align: center; /* Centraliza o texto do título */
  }

  #text {
    width: 80%; /* Ajustando a largura do texto */
    font-size: medium; /* Reduzindo o tamanho do texto */
    text-align: center; /* Centraliza o texto */
    padding-top: 2rem; /* Ajustando o padding superior */
  }
}

@media (max-width: 450px) {
  #header {
    height: 20rem; /* Altura do header ajustada */
    padding-bottom: 1rem; /* Adicionando padding inferior para espaço */
  }

  #img {
    height: 20rem; /* Ajustando a altura da imagem para combinar com o header */
    width: 100%;
  }

  #conteudo {
    padding: 0.5rem; /* Reduzindo o padding */
  }

  #mapa {
    width: 90%; /* Garante que o mapa ocupe toda a largura */
    margin: 2rem 0; /* Margem vertical */
  }

  #suporte {
    width: 90%; /* Garante que o suporte ocupe toda a largura */
    margin-bottom: 3rem; /* Margem vertical */
  }

  #titlesuporte {
    padding: 0; /* Remover padding horizontal */
    text-align: center; /* Centraliza o texto, se necessário */
    font-size: 1.5em; /* Tamanho do título */
    margin-bottom: 1rem;
  }

  #campo {
    width: 100%; /* Campo ocupa 100% da largura */
  }

  #button {
    padding: 0.8rem 1.5rem; /* Ajustando o padding do botão */
    margin: 0 auto; /* Centraliza o botão */
  }

  #grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Duas colunas */
    gap: 1rem; /* Espaçamento entre os itens */
    width: 100%;
    max-width: 400px; /* Largura máxima do grid */
    margin-bottom: 1rem; /* Centralizar */
    padding: 0 1rem; /* Padding horizontal */
  }

  /* Ajustes do Square */
  #square {
    width: 100%; /* Para ocupar a largura total */
    min-height: 10rem; /* Altura mínima */
    max-height: 12rem; /* Altura máxima */
  }

  #square img {
    width: 60%; /* Ajustar o tamanho das imagens dentro do square */
    height: auto; /* Manter proporção */
  }

  iframe {
    height: 15rem;
  }

  #title {
    font-size: 2.5em; /* Reduzindo o tamanho do título */
    text-align: center; 
  }

  #text {
    width: 80%; /* Ajustando a largura do texto */
    font-size: small; /* Reduzindo o tamanho do texto */
    text-align: center; 
    padding-top: 0.5rem; /* Ajustando o padding superior */
  }
}

@media (max-width: 350px) {
  #header {
    height: 15rem; /* Altura do header ajustada */
    padding-bottom: 1rem; /* Adicionando padding inferior para espaço */
  }

  #img {
    height: 15rem; /* Ajustando a altura da imagem para combinar com o header */
    width: 100%;
  }

  /* Ajustes do Grid */
  #grid {
    display: grid;
    grid-template-columns: 1fr; /* Uma coluna */
    grid-template-rows: auto; /* Altura ajustada ao conteúdo */
    width: 100%; /* Largura do grid */
    margin: 0 auto; /* Centraliza o grid na tela */
    gap: 0.5rem; /* Espaçamento entre as linhas */
  }

  /* Estilo de cada linha */
  #square {
    background-color: ${colors.roxoOpac}; /* Cor de fundo do item */
    padding: 0.25rem; /* Reduz o espaçamento interno */
    border-radius: 10px; /* Bordas arredondadas */
    color: ${colors.white}; /* Cor do texto */
    text-align: center; /* Centraliza o texto */
    font-size: small; /* Tamanho da fonte */
    height: auto; /* Altura ajustada ao conteúdo */
    min-height: 1.5rem; /* Altura mínima reduzida */
  }

  /* Remover imagem do square */
  #square img {
    display: none; /* Esconder a imagem */
  }

  iframe {
    height: 50%;
  }

  #mapa {
    width: 90%; /* Garante que o mapa ocupe 90% da largura */
    max-width: 100%;
    margin: 2rem 0 1rem 0;
  }

  /* Estilo do suporte */
  #suporte {
    width: 90%; /* Para manter alinhado com os itens do grid */
    margin-bottom: 2rem; /* Adiciona um espaçamento vertical */
    padding: 1rem 0; /* Espaçamento vertical */
  }

  #campo {
    width: 90%;
  }

  #titulo {
    font-size: medium;
  }

  #dados {
    min-height: auto; /* Altura ajustada ao conteúdo */
    font-size: small; 
  }

  input {
    min-height: auto; /* Altura ajustada ao conteúdo */
    font-size: small; 
  }

  /* Ajustes do botão */
  #button {
    padding: 0.5rem 1rem; 
    font-size: x-small; 
  }
}

`;
