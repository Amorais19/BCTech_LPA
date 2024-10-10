import * as S from './styles'
import React, { useState } from 'react'

export function Perfil() {
  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <S.Section>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
      </style>

      {/* div da parte que volta */}
      <div id='fundoB' />

      <section id='foto'>
        <div id="pessoa">
          <img src="src/assets/usuariog.png" alt="foto" id="usuariog" />
        </div>
      </section>

      {/* div do body */}
      <div id='allbody'>
        <h3>Dados Pessoais</h3>
        <div id='body'>
          <div id='coluna'>
            <div id='campo'>
              <img src="src/assets/usuarioIcone.png" alt="usuario" id="icones" />
              <p>Joãozinho Carneiro</p>
            </div>
            <div id='campo'>
              <img src="src/assets/usuarioIcone.png" alt="usuario" id="icones" />
              <p>000.000.000-00</p>
            </div>
            <div id='campo'>
              <img src="src/assets/senhaIcone.png" alt="senha" id="icones" />
              <p>..........</p>
            </div>
          </div>

          <div id='coluna'>
            <div id='campo'>
              <img src="src/assets/emailIcone.png" alt="email" id="icones" />
              <p>joaozin@gmail.com</p>
            </div>
            <div id='campo'>
              <img src="src/assets/localizacaoIcone.png" alt="localizacao" id="icones" />
              <p>Alameda Rodrigues, 40</p>
            </div>
          </div>
        </div>
      </div>

      {/* div dos botoes */}
      <div id="buttonDiv">
        <button onClick={handleDeleteClick}> EXCLUIR </button>
        <button> EDITAR </button>
      </div>

      {/* Pop-up */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Tem certeza que deseja excluir?</h3>
            
            <div id="layout">
              <div>
                <div id="linhas">
                  <div id='campo'>
                    <label htmlFor="mensagem" id="titulo" >Senha</label>
                    <input type="mensagem" name="mensagem" placeholder="Insira sua senha" id="input" className="mensagem"/>
                  </div>
                  <div id='campo'>
                    <label htmlFor="mensagem" id="titulo" >Confirmar Senha</label>
                    <input type="mensagem" name="mensagem" placeholder="Insira sua senha novamente" id="input" className="mensagem"/>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={handleClosePopup}>Cancelar</button>
            <button onClick={() => {
              // Adicione aqui a lógica para excluir
              handleClosePopup();
            }}>Confirmar</button>
          </div>
        </div>
      )}
    </S.Section>
  )
}
