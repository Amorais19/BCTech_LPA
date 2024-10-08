import * as S from './styles'

export function Contacte() {
  return (
    <S.Section>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
      </style>
      <section id='header'>
        <img src="src/assets/teclado.png" alt="teclado" id='img' />
        <div id="textos">
          <h2 id='title'>Contacte-nos</h2>
          <p id='text'>Não deixe de nos contactar caso haja problemas.
            Procuramos estar cientes de erros para fornecermos segurança
            e estabilidade em nossa plataforma.</p>
        </div>
      </section>
      <section id='conteudo'>
        <div id='contatos'>
          <div id='grid'>
            <div id="square">
              <img src="" alt="" id='image' />
              <p id='subtitle'>Phone</p>
              <p id='subtext'>0800-0800</p>
            </div>
            <div id="square">
              <img src="" alt="" id='image' />
              <p id='subtitle'>Whatsapp</p>
              <p id='subtext'>(35) 99999-0000</p>
            </div>
            <div id="square">
              <img src="" alt="" id='image' />
              <p id='subtitle'>E-mail</p>
              <p id='subtext'>slasla@gmail.com</p>
            </div>
            <div id="square">
              <img src="" alt="" id='image' />
              <p id='subtitle'>Localização</p>
              <p id='subtext'>Varginha-MG</p>
            </div>
          </div>
          <div id="mapa">

          </div>
        </div>
        <div id='suporte'>
          <h3>SUPORTE</h3>
          <div>
            <p>Nome</p>
            <input type="text" />
            <label htmlFor=""></label>
          </div>
          <div>
            <p>E-mail</p>
            <input type="text" />
            <label htmlFor=""></label>
          </div>
          <div>
            <p>Mensagem</p>
            <input type="text" />
            <label htmlFor=""></label>
          </div>
          <button>Enviar</button>
        </div>
      </section>
    </S.Section>
  )
}