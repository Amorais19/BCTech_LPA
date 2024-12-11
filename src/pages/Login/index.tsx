import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import voltar from "../../assets/voltar.png"
export function Login() {
  return (
    <S.Section>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');`}
      </style>

      {/* Seção de Navegação */}
      <div id='fundoB'> 
        <a href="/">
          <img src={voltar} alt="voltar" id='img'/>
        </a>
      </div>

      {/* Seção Principal */}
      <div id="background">
        <div id='formulario'>
          <h1>Login</h1>
          <div id="layout">
            <div id='linhas'>
              <InputField label="Nome" name="nome" placeholder="Insira seu nome" icon={faUser} />
              <InputField label="E-mail" name="email" placeholder="Insira seu e-mail" icon={faEnvelope} />
              <InputField label="Senha" name="senha" type="password" placeholder="Insira sua senha" icon={faLock} />
            </div>
          </div>
          <div id="buttonDiv">
            <Button link="/Cadastre-se_Empresa" text="CANCELAR" />
            <Button link="/Lojas" text="ENTRAR" />
          </div>
        </div>
        <div id='align'>
          <a href="/Cadastre-se_Empresa" id="link">Registrar-se</a>
        </div>
      </div>  
    </S.Section>
  );
}

// Componente de Campo de Entrada
const InputField: React.FC<{ label: string; name: string; placeholder: string; type?: string; icon: any }> = ({ label, name, placeholder, type = "text", icon }) => (
  <div id='campo'>
    <label htmlFor={name} id="titulo">{label}</label>
    <div id="inputContainer">
      <FontAwesomeIcon icon={icon} id="icon" />
      <input type={type} name={name} placeholder={placeholder} id="input" />
    </div>
  </div>
);

// Componente do Botão
interface ButtonProps {
  link: string;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ link, text }) => (
  <li>
    <a href={link} id="center">{text}</a>
  </li>
);
