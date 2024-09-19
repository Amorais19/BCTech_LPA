import * as S from './styles'
import React from 'react'

export function Lojas() {
  return (
    <S.Section>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
      </style>
      <script src='script.js' defer></script>
      <section id='carrossel'>
        <div id='anuncios'>
          <img src="src/assets/gif1.gif" alt="gif" id='img' />
          <img src="src/assets/gif2.gif" alt="gif" id='img' />
          <img src="src/assets/gif3.gif" alt="gif" id='img' />
        </div>
        <div id="butoes">
          <label id='radio'><input type="radio" name="btn-radio" id="radio1" /></label>
          <label id='radio'><input type="radio" name="btn-radio" id="radio2" /></label>
          <label id='radio'><input type="radio" name="btn-radio" id="radio3" /></label>
        </div>
      </section>
      <section id='lojas'>
        <div id=''>
          <div id='title'>
            <p id='topico'>Explore nossas</p>
            <h1>LOJAS <span id='line'></span></h1>
          </div>
        </div>
      </section>
    </S.Section>
  )
}