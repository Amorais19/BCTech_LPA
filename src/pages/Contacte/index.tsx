import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faComment } from '@fortawesome/free-solid-svg-icons';

// Importando as imagens
import phoneImg from '../../assets/phone.png'; 
import whatsappImg from '../../assets/wpp.png'; 
import emailImg from '../../assets/mail.png'; 
import locationImg from '../../assets/loc.png'; 
import teclado from "../../assets/teclado.png" 
// Tipos para as props dos componentes
import { IconDefinition } from '@fortawesome/fontawesome-common-types'; // Importando o tipo de ícone correto

// Definição das props para o ContactSquare
interface ContactSquareProps {
  label: string;
  info: string;
  imgSrc: string;
}

// Definindo as props para o SupportField
interface SupportFieldProps {
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'textarea';  // Tipagem do type com valores possíveis
  icon: IconDefinition;  // Tipando o ícone
}

interface ButtonProps {
  link: string;
  text: string;
}

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
        <img src={teclado} alt="Teclado" id='img' />
        <div id="textos">
          <h2 id='title'>Contacte-nos</h2>
          <p id='text'>
            Não deixe de nos contactar caso haja problemas. 
            Procuramos estar cientes de erros para fornecermos 
            segurança e estabilidade em nossa plataforma.
          </p>
        </div>
      </section>

      <section id='conteudo'>
        <div id='contatos'>
          <div id='grid'>
            <ContactSquare label="Phone" info="0800-0800" imgSrc={phoneImg} />
            <ContactSquare label="Whatsapp" info="(35) 99999-0000" imgSrc={whatsappImg} />
            <ContactSquare label="E-mail" info="slasla@gmail.com" imgSrc={emailImg} />
            <ContactSquare label="Localização" info="Varginha-MG" imgSrc={locationImg} />
          </div>
          <MapSection />
        </div>
        <SupportSection />
      </section>
    </S.Section>
  );
}

// Componente ContactSquare tipado
const ContactSquare: React.FC<ContactSquareProps> = ({ label, info, imgSrc }) => (
  <div id="square">
    <img src={imgSrc} alt={label} id='image' />
    <p id='subtitle'>{label}</p>
    <p id='subtext'>{info}</p>
  </div>
);

// Componente MapSection
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

// Componente SupportSection
const SupportSection = () => (
  <div id='suporte'>
    <h3 id='titlesuporte'>SUPORTE</h3>
    <SupportField label="Nome" placeholder="Insira aqui seu nome" icon={faUser} />
    <SupportField label="E-mail" placeholder="Insira aqui seu e-mail" type="email" icon={faEnvelope} />
    <SupportField label="Mensagem" placeholder="Mensagem..." type="textarea" icon={faComment} />
    <div id="buttonDiv">
      <Button link="/" text="ENVIAR" />
    </div>
  </div>
);

// Componente SupportField com as props tipadas
const SupportField: React.FC<SupportFieldProps> = ({ label, placeholder, type = 'text', icon }) => (
  <div id="campo">
    <label htmlFor={label.toLowerCase()} id="titulo">{label}</label>
    <div id="inputContainer">
      <FontAwesomeIcon icon={icon} id="icon" />
      {type === 'textarea' ? (
        <textarea name={label.toLowerCase()} id="dados" placeholder={placeholder}></textarea>
      ) : (
        <input type={type} name={label.toLowerCase()} id="dados" placeholder={placeholder} />
      )}
    </div>
  </div>
);

// Componente Button
const Button: React.FC<ButtonProps> = ({ link, text }) => (
  <a href={link} id="button">
    {text}
  </a>
);
