import * as S from './styles';
import React, { useState } from 'react';

export function PerfilEditar() {
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupPassword, setShowPopupPassword] = useState(false);

  const handleEditClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const handleEditPassword = () => setShowPopupPassword(true);
  const handleClosePopupPassword = () => setShowPopupPassword(false);

  return (
    <S.Section>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');`}
      </style>

      {/* Fundo */}
      <div id='fundoB' />

      {/* Foto */}
      <section id='foto'>
        <div id="pessoa">
          <img src="src/assets/usuariog.png" alt="foto" id="usuariog" />
        </div>
      </section>

      {/* Corpo */}
      <div id='allbody' className={showPopup || showPopupPassword ? 'blur' : ''}>
        <h3>Atualizar</h3>
        <div id='body'>
          <div id='coluna'>
            <div id="layout">
              <label htmlFor="nome" id="titulo">Nome (editável)</label>
              <input type="text" name="nome" placeholder="Insira seu nome" id="input" />
            </div>
            <div id='campo'>
              <img src="src/assets/usuarioIcone.png" alt="usuario" id="icones" />
              <p>000.000.000-00</p>
            </div>
            <div id='campo'>
              <img src="src/assets/senhaIcone.png" alt="senha" id="icones" />
              <p>..........</p>
            </div>
            <div id="MudarSenha">
              <a onClick={handleEditPassword}>Mudar senha?</a>
            </div>
          </div>

          <div id='coluna'>
            <div id='campo'>
              <img src="src/assets/emailIcone.png" alt="email" id="icones" />
              <p>joaozin@gmail.com</p>
            </div>
            <div id="layout">
              <label htmlFor="endereco" id="titulo">Endereço (editável)</label>
              <input type="text" name="endereco" placeholder="Insira seu endereço" id="input" />
            </div>
          </div>
        </div>
      </div>

      {/* Botões */}
      <div id="buttonDiv">
        <button onClick={() => window.location.href = '/Perfil'}>CANCELAR</button>
        <button onClick={handleEditClick}>ATUALIZAR</button>
      </div>

      {/* Pop-up CONFIRMAR */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div id="title">
              <h2>VOCÊ TEM <br /> CERTEZA DISSO?</h2>
            </div>
            <div id='campoPop'>
              <label htmlFor="senha" id="titulo">Senha</label>
              <input type="password" name="senha" placeholder="Insira sua senha" className='input-icon' />
            </div>
            <div id='campoPop'>
              <label htmlFor="confirmar-senha" id="titulo">Confirmar Senha</label>
              <input type="password" name="confirmar-senha" placeholder="Insira sua senha novamente" className='input-icon' />
            </div>
            <div id="buttonDiv">
              <button onClick={handleClosePopup} id='botaoCancel'>CANCELAR</button>
              <button onClick={() => window.location.href = '/Perfil'}>AVANÇAR</button>
            </div>
          </div>
        </div>
      )}

      {/* Pop-up MUDAR SENHA */}
      {showPopupPassword && (
        <div className="popup">
          <div className="popup-content">
            {/* Conteúdo do pop-up de mudar senha */}
            <h2>Mudar Senha</h2>
            <div id='campoPop'>
              <label htmlFor="novaSenha" id="titulo">Nova Senha</label>
              <input type="password" name="novaSenha" placeholder="Insira a nova senha" className='input-icon' />
            </div>
            <div id='campoPop'>
              <label htmlFor="confirmarNovaSenha" id="titulo">Confirmar Nova Senha</label>
              <input type="password" name="confirmarNovaSenha" placeholder="Confirme a nova senha" className='input-icon' />
            </div>
            <div id="buttonDiv">
              <button onClick={handleClosePopupPassword} id='botaoCancel'>CANCELAR</button>
              <button onClick={() => window.location.href = '/Perfil'}>ATUALIZAR</button>
            </div>
          </div>
        </div>
      )}
    </S.Section>
  );
}
