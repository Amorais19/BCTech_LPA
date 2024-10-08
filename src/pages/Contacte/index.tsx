import * as S from './styles'

export function Contacte() {
  return (
    <S.Section>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
        `}
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
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.233133370951!2d-45.440320184862246!3d-21.558763785020776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b58094c4dff87b%3A0x78a90e8b75c9f6b!2sVarginha%20-%20MG!5e0!3m2!1spt-BR!2sbr!4v1695718775603!5m2!1spt-BR!2sbr" 
              width="600" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            ></iframe>
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
          <div id="buttonDiv">
            <Button link="/Cadastre-se_Empresa" text="ENVIAR" />
          </div>
        </div>
      </section>
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