import * as S from './styles';
import { useState } from 'react';
import fotousuario from "../../assets/usuariog.png" 
import usuarioIcone from "../../assets/usuarioIcone.png"
import senhaIcone from "../../assets/senhaIcone.png"
import emailIcone from "../../assets/emailIcone.png" 
import localizacaoIcone from "../../assets/localizacaoIcone.png"

export function Perfil() {
  const [showPopup, setShowPopup] = useState(false);

  const handleDeleteClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <S.Section id="perfilSection">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
      </style>

      {/* Div do Fundo */}
      <div id='fundoB' />

      {/* Seção da Foto */}
      <section id='foto'>
        <div id="pessoa">
          <img src={fotousuario} alt="foto" id="usuariog" />
        </div>
      </section>

      {/* Div do Corpo */}
      <div id='allbody' className={showPopup ? 'blur' : ''}>
        <h3>Dados Pessoais</h3>
        <div id='body'>
          <div id='coluna'>
            <div id='campo'>
              <img src={usuarioIcone} alt="usuario" id="icones" />
              <p>Joãozinho Carneiro</p>
            </div>
            <div id='campo'>
              <img src={usuarioIcone}alt="usuario" id="icones" />
              <p>000.000.000-00</p>
            </div>
            <div id='campo'>
              <img src={senhaIcone} alt="senha" id="icones" />
              <p>**********</p>
            </div>
          </div>

          <div id='coluna'>
            <div id='campo'>
              <img src={emailIcone} alt="email" id="icones" />
              <p>joaozin@gmail.com</p>
            </div>
            <div id='campo'>
              <img src={localizacaoIcone} alt="localizacao" id="icones" />
              <p>Alameda Rodrigues, 40</p>
            </div>
          </div>
        </div>
      </div>

      {/* Div dos Botões */}
      <div id="buttonDiv">
        <button onClick={handleDeleteClick}> EXCLUIR </button>
        <button onClick={() => window.location.href = '/PerfilEditar'}> EDITAR </button>
      </div>

      {/* Pop-up */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <div id="title">
              <h2>VOCÊ TEM <br /> CERTEZA DISSO?</h2>
            </div>

            <div id='campoPop'>
              <label htmlFor="mensagem" id="titulo">Senha</label>
              <label id="icone">
                <input type="mensagem" name="mensagem" placeholder="Insira sua senha" className='input-icon' />
              </label>
            </div>
            <div id='campoPop'>
              <label htmlFor="mensagem" id="titulo">Confirmar Senha</label>
              <input type="mensagem" name="mensagem" placeholder="Insira sua senha novamente" className='input-icon' />
            </div>

            <div id="buttonDiv">
              <button onClick={handleClosePopup} id='botaoCancel'>CANCELAR</button>
              <button onClick={() => window.location.href = "/"}>EXCLUIR</button>
            </div>
          </div>
        </div>
      )}
    </S.Section>
  );
}
