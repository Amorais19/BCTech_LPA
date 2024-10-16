import React from 'react';
import * as S from './styles';
import { FaUserCircle } from 'react-icons/fa';

export function Loja_Perfil() {
  return (
    <S.Section>
      <section id="quadro">
        <img src="src/assets/fundoperfil.jpg" alt="teclado" id="img" />
        <div id="grid">
          <div id="square">
            <div id="align1">
              <h3 id="title">Título</h3>
              <p id="text">
                Com relação às diferenças entre poema e poesia, o poema se refere a uma estrutura textual, enquanto a poesia está relacionada ao.
              </p>
            </div>
            <img src="src/assets/empresas.png" alt="foto" />
          </div>
          {/* Repita as demais caixas conforme necessário */}
        </div>
      </section>

      <section id="conteudo">
        <div>
          <h2 id="name">Nome da Empresa</h2>
          <h5 id="subtitle">Subtítulo descritivo da empresa</h5>
          <p id="subtext">
            De uma forma geral, os tioalcoóis são utilizados em reservatórios de combustíveis gasosos, como o gás de cozinha, para que, se houver algum vazamento, nós consigamos perceber.
          </p>
        </div>
      </section>

      {/* Balão de chat */}
      <S.ChatContainer>
        <S.ChatAvatar src="src/assets/mascote.webp" alt="Chat Mascote" />
        <S.ChatMessage>Olá! Precisa de ajuda com algo?</S.ChatMessage>
        <S.CloseButton>X</S.CloseButton>
      </S.ChatContainer>
    </S.Section>
  );
}
