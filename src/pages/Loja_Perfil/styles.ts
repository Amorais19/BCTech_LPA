import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

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
 }

 #img {
   position: absolute;
   width: 100%;
   height: 40rem;
   opacity: 40%;
   filter: blur(2px);
 }

 #grid {
   position: absolute;
   display: flex;
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
   height: 100%;
   padding: 1rem;
 }

 .align1 {
   background-color: #540d90;
 }

 .align2 {
   background-color: #2c909d;
 }

 .align3 {
   background-color: #167e8b;
 }

 .title {
   font-family: 'Raleway';
   font-size: x-large;
   text-transform: uppercase;
   color: #fff;
 }

 .text {
   font-family: 'Raleway';
   padding: 1rem;
   color: #fff;
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
   color: #ffffff;
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
   border-top: 2rem solid #5c4b8a;
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
  width: 370px; /* Largura fixa */
  max-width: 90%; /* Para telas menores */
  height: 400px; /* Altura fixa */
  max-height: 80vh; /* Altura máxima proporcional */
  display: flex;
  flex-direction: column;
  z-index: 1001;
  animation: fade-in 0.3s ease;
  border-radius: 20px;
  overflow: hidden;
}

/* Mantém o restante do CSS inalterado */


/* Mantém o restante do CSS inalterado */


.chat-body {
  padding: 10px;
  flex-grow: 1;
  overflow-y: auto;
  background: linear-gradient(to bottom, #838c86, #454545);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.header-question {
  display: flex;
  align-items: center;
  margin: 1rem 0.5rem;
  background-color: #333; /* Cor válida */
  border-radius: 30px;
  padding: 0.5rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
}


.header-question p {
  font-family: 'Raleway';
  padding-left: 0.5rem;
}

.mascot-image {
  width: 10%; /* Proporcional */
  max-width: 40px; /* Largura máxima */
  height: auto;
  background-color: #808080;
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
  color: #ffffff;
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
   border: 2px solid #ffffff;
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
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); /* Colunas responsivas */
  gap: 20px;
  margin: 20px 0;
  justify-items: center;
}
.bot-button {
  width: 90%; /* Largura proporcional */
  background-color: #339999;
  color: #fff;
  border: none;
  border-radius: 15px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  text-align: center;
}

.bot-button:hover {
  background-color: #167e8b;
  transform: scale(1.05);
}
`;