import * as S from './styles';
import 'react-alice-carousel/lib/alice-carousel.css';
import { FaUserCircle } from 'react-icons/fa';

export function Loja_Perfil() {
  return (
    <S.Section>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
        `}
      </style>
      <section id='quadro'>
        <img src="src/assets/fundoperfil.jpg" alt="teclado" id='img' />
        <div id='grid'>
          <div id='square'>
            <div id='align1'>
              <h3 id='title'>Título</h3>
              <p id='text'>"Com relação às diferenças entre poema e poesia, o poema se refere a uma estrutura textual, enquanto a poesia está relacionada ao </p>
            </div>
            <img src="src/assets/empresas.png" alt="foto" />
          </div>
          <div id='square'>
            <div id='align2'>
              <h3 id='title'>Título</h3>
              <p id='text'>"Com relação às diferenças entre poema e poesia, o poema se refere a uma estrutura textual, enquanto a poesia está relacionada ao </p>
            </div>
            <img src="src/assets/empresas.png" alt="foto" />
          </div>
          <div id='square'>
            <div id='align3'>
              <h3 id='title'>Título</h3>
              <p id='text'>"Com relação às diferenças entre poema e poesia, o poema se refere a uma estrutura textual, enquanto a poesia está relacionada ao </p>
            </div>
            <img src="src/assets/empresas.png" alt="foto" />
          </div>
        </div>
      </section>
      <section id='conteudo'>
        <div>
          <h2 id='name'>Nome da Empresa</h2>
          <h5 id='subtitle'>Subtítulo descritivo da empresa</h5>
          <p id='subtext'>De uma forma geral, os tioalcoóis são utilizados em reservatórios de combustíveis gasosos, como o gás de cozinha, 
            para que, se houver algum vazamento, nós consigamos perceber. Isso é feito porque esses compostos apresentam um cheiro repugnante. 
            Aquele cheiro característico que </p>
        </div>
      </section>

      {/* Balão de chat */}
      <div id="chat-container">
        <input type="checkbox" id="chat-toggle" />
        <label htmlFor="chat-toggle" id="chat-button">
          <img src="src/assets/mascote.webp" alt="Chat" style={{ width: '40px', height: '40px' }} />
        </label>
        <div id="chat-box">
          <div id="chat-header">
            <FaUserCircle size={30} /> Chat
          </div>
          <div id="chat-content">
            <img src="src/assets/mascote.webp" alt="Mascote" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
            <p>Olá! Como posso ajudar você?</p>
          </div>
          <input type="text" id="chat-input" placeholder="Digite sua mensagem..." />
        </div>
      </div>
    </S.Section>
  );
}
