import * as S from './styles'
import React from 'react'

export function Perfil() {
  return (
    <S.Section>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
      </style>

      {/* div da parte que volta */}
      <div id='fundoB'> 
          
      </div>

      <section id='foto'>
        <div id="pessoa">
            <img src="src/assets/usuariog.png" alt="foto" id="usuariog"/>
        </div>
      </section>

      {/* div do body */}
      <div id='allbody'>
        <h3>Dados Pessoais</h3>
        <div id='body'>
          <div id='coluna'>
            <div id='campo'>
              <img src="src/assets/usuarioIcone.png" alt="usuario" id="icones"/>
              <p>Joãozinho Carneiro</p>
            </div>
            <div id='campo'>
              <img src="src/assets/usuarioIcone.png" alt="usuario" id="icones"/>
              <p>000.000.000-00</p>
            </div>
            <div id='campo'>
              <img src="src/assets/senhaIcone.png" alt="senha" id="icones"/>
              <p>..........</p>
            </div>
          </div>

          <div id='coluna'>
            <div id='campo'>
              <img src="src/assets/emailIcone.png" alt="email" id="icones"/>
              <p>joaozin@gmail.com</p>
            </div>
            <div id='campo'>
            <img src="src/assets/localizacaoIcone.png" alt="localizacao" id="icones"/>
              <p>Alameda Rodrigues, 40</p>
            </div>
          </div>
        </div>
      </div>

    {/* div dos botoes */}
    <div id="buttonDiv">
      <Button link="/Cadastre-se_Empresa" text="EXCLUIR" />
      <Button link="/Cadastre-se" text="EDITAR" />
    </div>
  </S.Section>
  )
}

interface ButtonProps {
  link: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ link, text }) => (
  <li>
    <a href={link} id="center">
      {text}
    </a>
  </li>
);