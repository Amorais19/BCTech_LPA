import * as S from './styles';

export function Contacte() {
  return (
    <S.Section>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
        `}
      </style>

      {/* Seção de Header */}
      <section id='header'>
        <img src="src/assets/teclado.png" alt="teclado" id='img' />
        <div id="textos">
          <h2 id='title'>Contacte-nos</h2>
          <p id='text'>
            Não deixe de nos contactar caso haja problemas. 
            Procuramos estar cientes de erros para fornecermos 
            segurança e estabilidade em nossa plataforma.
          </p>
        </div>
      </section>

      {/* Seção de Conteúdo */}
      <section id='conteudo'>
        {/* Contatos */}
        <div id='contatos'>
          <div id='grid'>
            <ContactSquare label="Phone" info="0800-0800" />
            <ContactSquare label="Whatsapp" info="(35) 99999-0000" />
            <ContactSquare label="E-mail" info="slasla@gmail.com" />
            <ContactSquare label="Localização" info="Varginha-MG" />
          </div>
          <MapSection />
        </div>

        {/* Suporte */}
        <SupportSection />
      </section>
    </S.Section>
  );
}

// Componente para cada quadrado de contato
const ContactSquare = ({ label, info }) => (
  <div id="square">
    <img src="" alt="" id='image' />
    <p id='subtitle'>{label}</p>
    <p id='subtext'>{info}</p>
  </div>
);

// Seção do Mapa
const MapSection = () => (
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
);

// Seção de Suporte
const SupportSection = () => (
  <div id='suporte'>
    <h3>SUPORTE</h3>
    <SupportField label="Nome" placeholder="Insira aqui seu nome" />
    <SupportField label="E-mail" placeholder="Insira aqui seu e-mail" type="email" />
    <SupportField label="Mensagem" placeholder="Mensagem..." type="mensagem" />
    <div id="buttonDiv">
      <Button link="/Cadastre-se_Empresa" text="ENVIAR" />
    </div>
  </div>
);

// Campo de Suporte
const SupportField = ({ label, placeholder, type = "text" }) => (
  <div id="campo">
    <label htmlFor={label.toLowerCase()} id="titulo">{label}</label>
    <input type={type} name={label.toLowerCase()} id="dados" placeholder={placeholder} />
  </div>
);

// Componente do Botão
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
