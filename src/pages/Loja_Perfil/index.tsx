import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import 'react-alice-carousel/lib/alice-carousel.css';

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
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
        `}
      </style>
      <section id='quadro'>
        <img src="src/assets/fundoperfil.png" alt="teclado" id='img' />
        <div id='grid'>
          {[1, 2, 3].map((_, index) => (
            <div id='square' key={index}>
              <div id={`align${index + 1}`}>
                <h3 id='title'>Título</h3>
                <p id='text'>
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
          <h2 id='name'>Nome da Empresa</h2>
          <p id='subtitle'>Subtítulo descritivo da empresa</p>
          <p id='subtext'>
            De uma forma geral, os tioalcoóis são utilizados em reservatórios de combustíveis gasosos, como o gás de cozinha, para que, se houver algum vazamento, nós consigamos perceber. Isso é feito porque esses compostos apresentam um cheiro repugnante. Aquele cheiro característico que
          </p>
        </div>
      </section>
      <section id='concertos'>
          <div id='linetitle'>
              <span id='line'><p>Concertos</p></span>
          </div>
      </section>

      {/* Balão de chat */}
      {!isChatOpen && (
        <S.StylishChatContainer onClick={toggleChat}>
          <S.ChatContent>
            <S.ChatAvatar src="src/assets/mascote.webp" alt="Chat Mascote" />
            <S.ChatMessage>Confira nossas ofertas especiais!</S.ChatMessage>
          </S.ChatContent>
        </S.StylishChatContainer>
      )}

      {isChatOpen && (
        <S.ChatModal ref={modalRef}>
          <S.ChatBody>

            <S.HeaderQuestion>
              <S.MascotImage src="src/assets/mascote.webp" alt="Mascote" />
              <p>Como posso te ajudar?</p>
            </S.HeaderQuestion>

            <S.ChatInputContainer>
              <S.ChatInput value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Digite sua mensagem..." />
              <S.SendButton onClick={handleSendMessage}>Enviar</S.SendButton>
            </S.ChatInputContainer>
          </S.ChatBody>

        </S.ChatModal>
      )}
    </S.Section>
  );
}
