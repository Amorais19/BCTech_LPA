import * as S from './styles'

export function Home() {
  return (
    <S.Section>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
      </style>
      <section id='linear'>
        
      </section>
      <section id='funcionalidades'>
        <div>
          <p id='topico'>Explore nossas</p>
          <h1>FUNCIONALIDADES <span id='line'></span></h1>
        </div>
        <div id='funcao'>
          <div>
            <div id='centerO'>
              <img src="src/assets/parcerias.png" alt="Imagem representando parcerias" id='img'/>
              <h4>PARCERIAS</h4>
              <p id='text'>EMPRESAS PARCEIRAS DISPONIBILIZANDO SEUS SERVIÇOS</p>
            </div>
            <div id='centerT'>
              <img src="src/assets/ranking.png" alt="Imagem representando rankin por estrelas" id='img'/>
              <h4>RANKING</h4>
              <p id='text'>RANKING DE EMPRESAS BASEADO EM AVALIAÇÕES DOS USUÁRIOS</p>
            </div>
          </div>
          <div>
            <div id='centerT'>
              <img src="src/assets/manutencoes.png" alt="Imagem representando manutenções" id='img'/>
              <h4>MANUTENÇÕES</h4>
              <p id='text'>OFERTAS DE SERVIÇOS DE MANUTENÇÃO E AUXÍLIO AOS USUÁRIOS</p>
            </div>
            <div id='centerO'>
              <img src="src/assets/chat.png" alt="Imagem representando chats"  id='img'/>
              <h4>CHAT</h4>
              <p id='text'>ATENDIMENTO VIRTUAL PARA SERVISOS SIMPLES</p>
            </div>
          </div>
        </div>
      </section>
      <section id='sobre'>
        <img src="src/assets/mulher.png" alt="Mulher mexendo em um notebook" id='mulher'/>
        <div id='width'>
          <h1>Sobre o BCTech</h1>
          <p id="topico">Objetivo da plataforma</p>
          <p id='texto'>O site BCTech busca integrar lojas locais e pessoas autônomas em um único software,
          com o objetivo de facilitar a busca por assistência/suporte, e também garantir a segurança de usuários. </p>
          <div id='center'><button><p id='texto'>Faça Parte</p></button></div>
        </div>
      </section>
      <section id='span'></section>
    </S.Section>
  )
}