import * as S from './styles';

export function Home() {
  return (
    <S.Section>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');`}
      </style>

      <section id='linear'></section>

      <section id='funcionalidades'>
        <div>
          <p id='topico'>Explore nossas</p>
          <h1>FUNCIONALIDADES <span id='line'></span></h1>
        </div>

        <div id='funcao'>
          <div>
            <FeatureCard
              imageSrc="src/assets/parcerias.png"
              altText="Imagem representando parcerias"
              title="PARCERIAS"
              description="EMPRESAS PARCEIRAS DISPONIBILIZANDO SEUS SERVIÇOS"
              isOdd
            />
            <FeatureCard
              imageSrc="src/assets/ranking.png"
              altText="Imagem representando ranking por estrelas"
              title="RANKING"
              description="RANKING DE EMPRESAS BASEADO EM AVALIAÇÕES DOS USUÁRIOS"
            />
          </div>
          <div>
            <FeatureCard
              imageSrc="src/assets/manutencoes.png"
              altText="Imagem representando manutenções"
              title="MANUTENÇÕES"
              description="OFERTAS DE SERVIÇOS DE MANUTENÇÃO E AUXÍLIO AOS USUÁRIOS"
            />
            <FeatureCard
              imageSrc="src/assets/chat.png"
              altText="Imagem representando chats"
              title="CHAT"
              description="ATENDIMENTO VIRTUAL PARA SERVIÇOS SIMPLES"
              isOdd
            />
          </div>
        </div>
      </section>

      <section id='sobre'>
        <img src="src/assets/mulher.png" alt="Mulher mexendo em um notebook" id='mulher' />
        <div id='width'>
          <h1>Sobre o BCTech</h1>
          <p id="topico">Objetivo da plataforma</p>
          <p id='texto'>
            O site BCTech busca integrar lojas locais e pessoas autônomas em um único software,
            com o objetivo de facilitar a busca por assistência/suporte, e também garantir a segurança de usuários.
          </p>
          <div id='botao'>
            <Button link="/Cadastre-se_Empresa" text="Seja nossa empresa" />
            <Button link="/Cadastre-se_Usuario" text="Seja nosso usuário" />
          </div>
        </div>
      </section>

      <section id='depoimentos'>
        <h1>O que nossos usuários dizem</h1>
        <div id='depoimentoContainer'>
          <Testimonial
            userName="João Silva"
            feedback="O BCTech facilitou muito a minha vida! Encontrei a assistência que precisava rapidamente."
            profileImage="https://via.placeholder.com/60"
          />
          <Testimonial
            userName="Maria Oliveira"
            feedback="A plataforma é intuitiva e tem várias opções. Recomendo a todos!"
            profileImage="https://via.placeholder.com/60"
          />
          <Testimonial
            userName="Carlos Mendes"
            feedback="Excelente ideia! Meus negócios cresceram com as parcerias que encontrei aqui."
            profileImage="https://via.placeholder.com/60"
          />
        </div>
      </section>
    </S.Section>
  );
}

interface FeatureCardProps {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  isOdd?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, altText, title, description, isOdd }) => (
  <div id={isOdd ? 'centerO' : 'centerT'}>
    <img src={imageSrc} alt={altText} id='img' />
    <h4>{title}</h4>
    <p id='text'>{description}</p>
  </div>
);

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

interface TestimonialProps {
  userName: string;
  feedback: string;
  profileImage: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ userName, feedback, profileImage }) => (
  <div className='testimonial'>
    <img src={profileImage} alt={`${userName}'s profile`} className='profileImage' />
    <p>"{feedback}"</p>
    <h4>- {userName}</h4>
  </div>
);
