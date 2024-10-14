import * as S from './styles';

export function Cadastro_Empresa() {
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
          <h1>Cadastro de Empresa</h1>
          
          {/* Layout do Formulário */}
          <div id="layout">
            <div id='colunas'>
              {/* Primeira Coluna */}
              <div id='campo'>
                <label htmlFor="nome" id="titulo">Nome</label>
                <input type="name" name="nome" placeholder="Insira seu nome" id="input"/>
              </div>
              <div id='campo'>
                <label htmlFor="email" id="titulo">CPF/CNPJ</label>
                <input type="email" name="e-mail" placeholder="Insira seu CPF/CNPJ" id="input"/>
              </div>
              <div id='campo'>
                <label htmlFor="mensagem" id="titulo">Senha</label>
                <input type="mensagem" name="mensagem" placeholder="Insira sua senha" id="input" className="mensagem"/>
              </div>
            </div>

            {/* Segunda Coluna */}
            <div>
              <div id='campo'>
                <label htmlFor="nome" id="titulo">E-mail</label>
                <input type="name" name="nome" placeholder="Insira seu e-mail" id="input"/>
              </div>
              <div id='campo'>
                <label htmlFor="email" id="titulo">Endereço</label>
                <input type="email" name="e-mail" placeholder="Insira seu endereço" id="input"/>
              </div>
              <div id='campo'>
                <label htmlFor="mensagem" id="titulo">Confirmar Senha</label>
                <input type="mensagem" name="mensagem" placeholder="Insira sua senha novamente" id="input" className="mensagem"/>
              </div>
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
