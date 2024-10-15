import * as S from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';

export function Cadastro_Usuario() {
  return (
    <S.Section>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');`}
      </style>

      {/* Fundo e Botão de Voltar */}
      <div id='fundoB'> 
        <a href="/Home">
          <img src="src/assets/voltar.png" alt="voltar" id='img'/>
        </a>
      </div>
      
      {/* Background e Formulário */}
      <div id="background">
        <div id='formulario'>
          <h1>Cadastro de Usuário</h1>
          
          {/* Layout do Formulário */}
          <div id="layout">
            <div id='linhas'>
              <InputField label="Nome" name="nome" placeholder="Insira seu nome" icon={faUser} />
              <InputField label="CPF" name="cpf" placeholder="Insira seu CPF" icon={faUser} />
            </div>

            <InputFieldE label="E-mail" name="email" placeholder="Insira seu e-mail" icon={faEnvelope} />

            <div id="linhas">
              <InputField label="Senha" name="senha" type="password" placeholder="Insira sua senha" icon={faLock} />
              <InputField label="Confirmar Senha" name="confirmarSenha" type="password" placeholder="Insira sua senha novamente" icon={faLock} />
            </div>
          </div>

          {/* Botões */}
          <div id="buttonDiv">
            <Button link="/Cadastre-se_Empresa" text="CANCELAR" />
            <Button link="/Cadastre-se" text="CADASTRAR-SE" />
          </div>
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

const InputFieldE: React.FC<{ label: string; name: string; placeholder: string; type?: string; icon: any }> = ({ label, name, placeholder, type = "text", icon }) => (
  <div id='campoE'>
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
    <a href={link} id="center">
      {text}
    </a>
  </li>
);
