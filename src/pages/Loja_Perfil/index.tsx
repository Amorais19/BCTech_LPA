import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles'; // Certifique-se de que o caminho está correto

export function Loja_Perfil() {
  const [isChatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const modalRef = useRef<HTMLDivElement | null>(null);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setChatOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Mensagem enviada:', message);
      setMessage('');
    }
  };

  return (
    <S.Section>
      <section id='quadro'>
        <img src="src/assets/fundoperfil.png" alt="teclado" id='img' />
        <div id='grid'>
          {[1, 2, 3].map((_, index) => (
            <div className='square' key={index}>
              <div className={`align${index + 1}`}>
                <h3 className='title'>Título</h3>
                <p className='text'>
                  "Com relação às diferenças entre poema e poesia, o poema se refere a uma estrutura textual, enquanto a poesia está relacionada ao."
                </p>
              </div>
              <img src="src/assets/empresas.png" alt="foto" />
            </div>
          ))}
        </div>
      </section>
      <section id='conteudo'>
        <div id='sinopse'>
          <h1 className='name'>Nome da Empresa</h1>
          <p className='subtitle'>Subtítulo descritivo da empresa</p>
          <p className='subtext'>
            Nossa empresa busca fornecer o melhor atendimento ao nosso cliente, fornecendo manutenções seguras feitas por profissionais qualificados, além de uma garantia duradoura, e o melhor preço da região. Compre conosco, saía ganhando!
          </p>
        </div>
        <div className="linha">
          <hr/>
          <span className="titulo"><p>Concertos</p></span>
          <hr/>
        </div>
      </section>

          {/* Balão de chat */}
          {!isChatOpen && (
            <div className="stylish-chat-container" onClick={toggleChat}>
              <div className="chat-content">
                <img className="chat-avatar" src="src/assets/mascote.webp" alt="Chat Mascote" />
                <div className="chat-message">Confira nossas ofertas especiais!</div>
              </div>
            </div>
          )}

          {/* Tela do chat */}
          {isChatOpen && (
            <div className="chat-modal" ref={modalRef}>
              <div className="chat-body">
                <div className="header-question">
                  <img className="mascot-image" src="src/assets/mascote.webp" alt="Mascote" />
                  <p>Como posso te ajudar?</p>
                </div>

                {/* Espaço para os botões centralizados */}
                <div className='bot'>
                  <button className='bot-button'>📫 Menu Principal</button>
                  <button className='bot-button'>⏰ Horário de Funcionamento</button>
                  <button className='bot-button'>📌 Localização</button>
                  <button className='bot-button'>👨🏻‍💼 Falar com o Técnico</button>
                </div>

                {/* Container do chat e do botão de enviar na parte inferior */}
                <div className="chat-input-container">
                  <input
                    className="chat-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Digite sua mensagem..."
                  />
                  <button className="send-button" onClick={handleSendMessage}>Enviar</button>
                </div>
              </div>
            </div>
          )}
        </S.Section>
        );
}
