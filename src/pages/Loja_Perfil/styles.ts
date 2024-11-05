import styled from 'styled-components';
import { colors, gradientes } from '../../styles/GlobalStyle';

export const Section = styled.section`
 display: flex;
 flex-direction: column;
 background: url('url-do-fundo.jpg') no-repeat center center fixed;
 background-size: cover;
 min-height: 100vh;

 #quadro {
   display: flex;
   width: 100%;
   height: 40rem;
   align-items: center;
   justify-content: center;
 }

 #img {
   position: absolute;
   width: 100%;
   height: 40rem;
   opacity: 40%;
   filter: blur(3px);
 }

 #grid {
   position: absolute;
   display: grid;
   grid-template-columns: auto auto auto;
   justify-content: center;
   margin: 5rem;
 }

 .square {
   display: flex;
   flex-direction: column;
   margin: 5rem;
 }

 .align1,
 .align2,
 .align3 {
   display: flex;
   flex-direction: column;
   height: 10rem;
   padding: 1rem;
   background: linear-gradient(${colors.roxoSecundario}, ${colors.roxoOpac});
 }

 .title {
   font-family: 'Raleway';
   font-size: x-large;
   text-transform: uppercase;
   color: ${colors.white};;
 }

 .text {
   font-family: 'Raleway';
   padding: 1rem;
   color: ${colors.white};;
 }

 #sinopse {
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 55%;
   height: 25rem;
   justify-content: center;
 }

 .name {
   font-family: 'Raleway';
   font-size: 3rem;
   text-transform: uppercase;
   color:${colors.white};
 }

 .subtitle {
   font-family: 'Raleway';
   font-size: x-large;
   font-style: italic;
   color: white;
   padding: 2rem;
 }

 .subtext {
   font-family: 'Raleway';
   font-size: large;
   color: white;
   text-align: center;
 }

 #conteudo {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   border-top: 1.5rem solid ${colors.laranjaEscuro};
 }

 .linha {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1700px;
    color: white;
}

hr {
    border: none;
    border-top: 0.5px solid white;
    width: 100%;
}

.titulo {
    margin: 0 3rem;
    white-space: nowrap;

    p {
      font-family: 'Raleway';
      font-size: x-large;
    }
}

//serviços
#grid2 {
  display: flex;
  flex-wrap: wrap; /* Permite que os itens se ajustem em várias linhas */
  justify-content: center; /* Centraliza os itens horizontalmente */
}

.servico {
  display: flex;
  align-items: center; /* Alinha verticalmente o conteúdo */
  margin: 1rem; /* Espaçamento entre os itens */
  width: 100%; /* Largura adaptável */
  background: rgba(255, 255, 255, 0.8); /* Fundo leve para destaque */
  border-radius: 10px; /* Bordas arredondadas */
  padding: 1rem; /* Espaçamento interno */
}

.servico img {
  margin-right: 1.5rem; /* Espaço entre a imagem e o texto */
  width: 60px; /* Ajuste a largura da imagem conforme necessário */
  height: auto; /* Mantém a proporção da imagem */
}

.text1 {
  font-family: 'Raleway';
  margin-right: 1.5rem; /* Espaço entre o texto e o botão */
  color: ${colors.white}; /* Cor do texto */
  flex-grow: 1; /* Permite que o texto ocupe o espaço restante */
  text-align: left; /* Alinha o texto à esquerda */
}

#buttonDiv {
  padding-top: 0.5rem;
  margin-left: auto; /* Empurra o botão para a direita */
}
.bb {
  background-color: ${colors.roxoPrincipal};
  border-radius: 10px;
  transition: background-color 300ms, transform 300ms;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 6rem; /* Largura do botão */
  height: 2rem; /* Altura do botão */
  color: ${colors.white};
  font-family: 'Raleway';
  font-size: large;
  font-weight: bold;
  cursor: pointer;
  border: 0;
}

.bb:hover {
  background-color: ${colors.roxoSecundario};
  transform: scale(1.05);
}

//contato
.contact-background {
  background: linear-gradient(${colors.laranjaEscuro}, ${colors.laranjaEscuro}, ${colors.laranja}); /* Fundo claro */
  border-radius: 10px; /* Bordas arredondadas */
  padding: 1rem; /* Aumenta o espaçamento ao redor do conteúdo */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
  display: flex; /* Alinha os itens */
  flex-direction: column; /* Empilha os itens verticalmente */
  align-items: center; /* Centraliza os itens */
  width: 300px; /* Largura fixa */
  height: 200px; /* Altura fixa */
  text-align: center;
  animation: float 2s ease-in-out infinite; /* Adiciona a animação */

}
.contact-background:hover {
    box-shadow: 0 0 15px ${colors.grayInput};
  }

.contact-background p {
  font-family: 'Raleway';
  font-weight: 500;
  color: white; /* Garante que o texto dentro seja branco */
}

.contact-background img {
  margin: 1rem;
}

#grid3 {
  display: grid;
  grid-template-columns: auto auto; /* Duas colunas */
  gap: 20rem;
  padding: 2rem; /* Espaçamento ao redor da grade */
}

  /* Estilo do Conteúdo */
  #conteudo2 {
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    justify-content: space-evenly;
  }

  #contatos {
    padding: 2rem 0;
  }

/* Estilização do pop-up */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6); /* Fundo escurecido */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  animation: fadeIn 0.3s ease;
}

.popup-content {
  background-color: ${colors.navBarTitle}; /* Fundo branco */
  border-radius: 12px;
  padding: 40px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
  animation: scaleUp 0.3s ease;
  text-align: center;
}

.popup-buttons {
  display: flex;
  justify-content: space-between; /* Distribui os botões */
  margin-top: 20px;
}

#botaoCancel {
  background: ${colors.laranja}; /* Cor laranja */
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  transition: background 0.3s, transform 0.2s;
  margin-top: 20px;
  width: 48%; /* Largura ajustada para dividir espaço */
}

#botaoCancel:hover {
  background: ${colors.laranjaEscuro}; /* Laranja escuro */
  transform: scale(1.05);
}

.solicitar-servico-button {
  background: ${colors.roxoPrincipal}; /* Cor roxo principal */
  color: white;
  border: none;
  padding: 15px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  transition: background 0.3s, transform 0.2s;
  margin-top: 20px;
  width: 48%; /* Largura ajustada para dividir espaço */
}

.solicitar-servico-button:hover {
  background: ${colors.roxoSecundario}; /* Altera para o roxo secundário ao passar o mouse */
  transform: scale(1.05);
}

/* Animação de exibição */
@keyframes scaleUp {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}


/* Estilização dos detalhes do concerto */
.concert-details {
  margin-bottom: 20px;
  color: #333;
}

.concert-details h2 {
  font-family: 'Raleway';
  font-size: 1.8em;
  margin-bottom: 15px;
  color: ${colors.roxoPrincipal}; /* Azul */
  border-bottom: 2px solid ${colors.roxoOpac}; /* Linha abaixo do título */
  padding-bottom: 10px;
}

.details-container {
  text-align: left; /* Alinhamento à esquerda para melhor legibilidade */
  line-height: 1.5; /* Espaçamento entre linhas */
}

.concert-details p {
  margin: 8px 0;
  font-family: 'Raleway';
  font-size: 1em;
  color: ${colors.roxoSecundario};
}

.concert-details span {
  display: block; /* Para deixar as informações mais destacadas */
  margin-top: 5px; /* Espaçamento entre as linhas */
  color: ${colors.blackFundo}; /* Cinza escuro */
  font-weight: 500; /* Aumentar o peso da fonte para destaque */
}

/* Adicione ícones aos detalhes, se possível */
.concert-details i {
  color: #007bff; /* Cor do ícone */
  margin-right: 10px;
}




//chat bot
 .stylish-chat-container {
   display: flex;
   align-items: center;
   background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
   border-radius: 30px;
   padding: 15px;
   box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
   max-width: 350px;
   position: fixed;
   bottom: 30px;
   right: 30px;
   z-index: 1000;
   cursor: pointer;
   animation: slide-up 0.5s ease-out;
 }

 @keyframes slide-up {
   from {
     transform: translateY(100px);
     opacity: 0;
   }
   to {
     transform: translateY(0);
     opacity: 1;
   }
 }

 .chat-modal {
  position: fixed;
  bottom: 5%; /* Distância do fundo */
  right: 5%; /* Distância da direita */
  width: 350px; /* Largura fixa */
  max-width: 90%; /* Para telas menores */
  height: 400px; /* Altura fixa */
  max-height: 80vh; /* Altura máxima proporcional */
  display: flex;
  flex-direction: column;
  z-index: 1001;
  animation: fade-in 0.3s ease;
  border-radius: 35px;
  overflow: hidden;
}

/* Mantém o restante do CSS inalterado */


/* Mantém o restante do CSS inalterado */


.chat-body {
  padding: 10px;
  flex-grow: 1;
  overflow-y: auto;
  background: linear-gradient(to bottom, #555555 , #757575);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header-question {
  display: flex;
  align-items: center;
  margin: 1rem 0.5rem;
  background-color: gray; /* Cor válida */
  border-radius: 30px;
  padding: 0.5rem;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.6);
}


.header-question p {
  font-family: 'Raleway';
  font-weight: 500;
  padding-left: 0.5rem;
  color: ${colors.white};
}

.mascot-image {
  width: 10%; /* Proporcional */
  max-width: 40px; /* Largura máxima */
  height: auto;
  background-color: #606060;
  border-radius: 20px;
}


.chat-input-container {
  display: flex;
  align-items: center;
  padding: 10px;
  margin-top: auto;
}

.chat-input {
  flex: 1;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  margin-right: 10px;
  font-family: 'Raleway', sans-serif;
  background: rgba(255, 255, 255, 0.8);
  transition: border 0.3s;
}
.chat-input:focus {
  border-color: #6a11cb;
  outline: none;
}


.send-button {
  background: linear-gradient(135deg, #6a11cb, #2575fc);
  color: ${colors.white};
  border: none;
  border-radius: 20px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
}


.send-button:hover {
  background: linear-gradient(135deg, #5a0eb4, #1e6db0);
  transform: scale(1.05);
}

 .chat-content {
   display: flex;
   align-items: center;
 }

 .chat-avatar {
   width: 60px;
   height: 60px;
   border-radius: 50%;
   margin-right: 15px;
   border: 2px solid ${colors.white};
 }

 .chat-message {
   color: white;
   font-family: 'Reem Kufi', sans-serif;
   font-size: 16px;
   line-height: 1.5;
   padding: 10px 15px;
   border-radius: 15px;
   margin-bottom: 10px;
   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
 }
 .bot {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); /* Colunas responsivas */
  column-gap: 2px; /* Espaçamento entre as colunas */
  row-gap: 10px; /* Espaçamento entre as linhas */
  margin: 20px 0;
  justify-items: center;
}


.bot-button {
  width: 90%; /* Largura proporcional */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
  color: ${colors.black};;
  border: none;
  border-radius: 25px;
  padding: 8px 8px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  font-family: 'Raleway', sans-serif;
  font-size: smaller;
  font-weight: 500;
  text-align: start;
}

.bot-button:hover {
  background: linear-gradient(to right, ${colors.laranja}, #FE5625);
  transform: scale(1.05);
}

@media (max-width: 2000px) {
  .linha {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 1600px;
    color: white;
  }
}

@media (max-width: 1810px) {
  .linha {
    display: flex;
    align-items: center;
    width: 90%;
    max-width: 1600px;
    color: white;
  }
}

@media (max-width: 1780px) {
  #grid {
    display: flex; 
    flex-wrap: wrap; 
    margin: 2rem; 
  }

  .square {
    margin: 1rem; /* Espaçamento aumentado entre os quadrados */
    flex: 1 1 30%; 
    min-width: 250px; 
    padding: 1rem; 
  }

  #grid2 {
    display: flex; 
    flex-wrap: wrap; 
    align-items: center; 
    margin: 2rem 0; 
  }

  .servico {
    flex: 1 1 30%; 
    min-width: 200px; 
    margin: 1rem; /* Espaçamento aumentado entre os serviços */
    padding: 1rem; 
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  #grid3 {
    display: flex; 
    flex-direction: row; /* Muda para coluna */
    align-items: center; /* Centraliza os itens horizontalmente */
  }

}

@media (max-width: 1390px) {
  #square {
    width: 90%;
  }

  #grid2 {
    display: grid;
    grid-template-columns: auto auto;
    justify-self: center;
  }

  #grid3 {
    gap: 15rem;
  }
}

@media (max-width: 1030px) {
  .square {
    width: 80%;
  }

  .square > .align3 + img {
    display: none;
  }

  .square > .align3 {
    display: none;
  }
}

@media (max-width: 1000px) {
  #grid2 {
    grid-template-columns: auto;
    justify-items: center;
  }

  #grid3 {
    gap: 10rem;
  }

  #buttonDiv {
    display: flex;
    margin: 5px 0 0 0;
  }

  .text1 {
    padding-top: 5px;
    width: 100%;
    margin: 0;
    text-align: center;
  }

  .servico1, .servico2, .servico3{
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center; 
  }
}

@media (max-width: 900px) {
  #grid3 {
    gap: 5rem;
  }

  #sinopse {
    width: 80%;
  }
}

@media (max-width: 750px) {
  #grid3 {
    gap: 5rem;
  }

  .contact-background {
    width: 200px; /* Largura fixa */
    height: 150px; /* Altura fixa */
  }
  .contact-background p {
    font-family: 'Raleway';
    font-weight: 500;
    font-size: medium;
    color: white; /* Garante que o texto dentro seja branco */
  }
  .contact-background img {
    margin: 0rem;
    width: 80%;
  }

  .square > .align2 + img {
    display: none;
  }
  .square > .align2 {
    display: none;
  }

  .square {
    margin: 0;
  }

  #grid {
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
  }

}

@media (max-width: 600px) {
  #grid3 {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .contact-background {
    width: 200px; /* Largura fixa */
    height: 150px; /* Altura fixa */
  }
  .contact-background p {
    font-family: 'Raleway';
    font-weight: 500;
    font-size: medium;
    color: white; /* Garante que o texto dentro seja branco */
  }
  .contact-background img {
    margin: 0rem;
    width: 80%;
  }

  #sinopse {
    width: 90%;
  }

  .name{
    font-size: x-large;
  }
  .subtitle{
    font-size: larger;
  }
  .subtext {
    width: 90%;
    font-size: medium;
  } 
}

@media (max-width: 480px) {
  .square {
    width: 80%;
    display: flex;
    justify-content: center;
  }

  #grid2 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #buttonDiv {
    display: flex;
    margin: 5px 0 0 0;
  }

  .text1 {
    padding-top: 5px;
  }

  .servico1 > img, .servico2 > img, .servico3 > img{
    width: 80%;
  }
}

`;
