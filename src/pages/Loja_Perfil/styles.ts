import styled from 'styled-components';
import { colors, gradientes } from '../../styles/GlobalStyle';

export const Section = styled.section`
 display: flex;
 width: 100%;
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

 #square {
   display: flex;
   flex-direction: column;
   margin: 5rem;
 }

 #align1, #align2, #align3 {
   display: flex;
   flex-direction: column;
   background-color: #540d90;
   height: 100%;
   padding: 1rem;
 }

 #align2 {
   background-color: #2c909d;
 }

 #align3 {
   background-color: #167e8b;
 }

 #title {
   font-family: 'Raleway';
   font-size: x-large;
   text-transform: uppercase;
   color: #fff;
 }

 #text {
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

 #name {
   font-family: 'Raleway';
   font-size: xx-large;
   text-transform: uppercase;
   color: #ffffff;
 }

 #subtitle {
   font-family: 'Raleway';
   font-size: larger;
   font-style: italic;
   color: ${colors.white};
   padding: 2rem;
 }

 #subtext {
  font-family: 'Raleway';
  font-size: medium;
  color: ${colors.white};
  text-align: center;
 }

 #conteudo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-top: 2rem solid ${colors.roxoSecundario};
 }
`;

export const StylishChatContainer = styled.div`
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
`;

export const ChatModal = styled.div`
 position: fixed;
 bottom: 80px;
 right: 30px;
 width: 300px;
 height: 400px;
 display: flex;
 flex-direction: column;
 z-index: 1001;
 animation: fade-in 0.3s ease;
`;

export const ChatHeader = styled.div`
 display: flex;
 justify-content: center; /* Ajustado para centralizar */
 align-items: center;
 padding: 10px;
 border-top-left-radius: 10px;
 border-top-right-radius: 10px;
 box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra suave */
 position: relative; /* Adicionado */
`;

export const QuestionText = styled.p`
 position: absolute; /* Para ficar na frente da imagem */
 color: white; /* Ajuste a cor se necessário */
 font-size: 16px; /* Ajuste o tamanho conforme desejado */
 left: 10%; /* Ajuste conforme necessário */
 top: 50%; /* Centraliza verticalmente */
 transform: translateY(-50%); /* Ajusta o alinhamento vertical */
`;

export const ChatBody = styled.div`
  padding: 10px;
  flex-grow: 1;
  overflow-y: auto;
  background: linear-gradient(to bottom, #757575, #454545);
  border-radius: 40px;
`;

export const HeaderQuestion = styled.div`
  display: flex; 
  align-items: center;
  margin: 1rem 0.5rem;
  background-color: ${colors.navBarTitle};
  border-radius: 30px;
  padding: 0.5rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4); /* Exemplo de sombra */

  p {
    font-family: 'Raleway';
    padding-left: 0.5rem;
  }
`;

export const MascotImage = styled.img`
  width: 40px; /* Ajuste o tamanho do mascote conforme necessário */
  height: auto; /* Mantém a proporção da imagem */
  background-color: #808080;
  border-radius: 20px;
`;

export const ChatInputContainer = styled.div`
 display: flex;
 align-items: center;
 padding: 10px;
`;

export const ChatInput = styled.input`
 flex: 1;
 padding: 10px;
 border: 1px solid rgba(0, 0, 0, 0.2);
 border-radius: 20px;
 margin-right: 10px;
 font-family: 'Raleway', sans-serif;
 background: rgba(255, 255, 255, 0.8); /* Fundo suave para o input */
 transition: border 0.3s;

 &:focus {
   border-color: #6a11cb; /* Cor ao focar */
   outline: none; /* Remove a borda padrão */
 }
`;

export const SendButton = styled.button`
 background: linear-gradient(135deg, #6a11cb, #2575fc); /* Gradiente para o botão */
 color: #ffffff;
 border: none;
 border-radius: 20px;
 padding: 10px 15px;
 cursor: pointer;
 transition: background 0.3s, transform 0.2s;

 &:hover {
   background: linear-gradient(135deg, #5a0eb4, #1e6db0); /* Gradiente mais escuro ao passar o mouse */
   transform: scale(1.05); /* Leve aumento ao passar o mouse */
 }
`;

export const ChatContent = styled.div`
 display: flex;
 align-items: center;
`;

export const ChatAvatar = styled.img`
 width: 60px;
 height: 60px;
 border-radius: 50%;
 margin-right: 15px;
 border: 2px solid #ffffff;
`;

export const ChatMessage = styled.div`
 color: white; /* Cor do texto */
 font-family: 'Reem Kufi', sans-serif;
 font-size: 16px; /* Ajuste o tamanho da fonte */
 line-height: 1.5;
 padding: 10px 15px;
 border-radius: 15px;
 margin-bottom: 10px;
 box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Sombra suave nas mensagens */
`;

export const CloseButton = styled.button`
 background: #ff5252;
 color: #ffffff;
 border: none;
 border-radius: 50%;
 width: 30px;
 height: 30px;
 font-size: 14px;
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 margin-left: 10px;
 transition: background 0.3s;

 &:hover {
   background: #ff1744;
 }
`;
