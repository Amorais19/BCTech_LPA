import React, { useState } from 'react';
import * as S from './styles';
import logo from "../../assets/logo.png"
import perfil1 from "../../assets/homemperfil1.png"
import perfil2 from "../../assets/mulherperfil.png"
import perfil3 from "../../assets/homemperfil2.png"
import parcerias from "../../assets/parcerias.png"
import ranking from "../../assets/ranking.png"
import manutencao from "../../assets/manutencoes.png"
import chat from "../../assets/chat.png"
import mulher from "../../assets/mulher.png"

export function Home() {
  // Estado para gerenciar os depoimentos
  const [testimonials, setTestimonials] = useState([
    {
      userName: "João Silva",
      feedback: "O BCTech facilitou muito a minha vida! Encontrei a assistência que precisava rapidamente.",
      profileImage: perfil1
    },
    {
      userName: "Maria Oliveira",
      feedback: "A plataforma é intuitiva e tem várias opções. Recomendo a todos!",
      profileImage: perfil2
    },
    {
      userName: "Carlos Mendes",
      feedback: "Excelente ideia! Meus negócios cresceram com as parcerias que encontrei aqui.",
      profileImage: perfil3
    }
  ]);

  // Função para adicionar mais depoimentos ao clicar no botão
  const addMoreTestimonials = () => {
    const newTestimonials = [
      {
        userName: "Fernanda Lima",
        feedback: "Achei incrível como posso encontrar serviços de forma rápida e segura!",
        profileImage:perfil2
        
      },
      {
        userName: "Ricardo Gomes",
        feedback: "A plataforma realmente ajudou a conectar o meu negócio com novos clientes!",
        profileImage:perfil1
      }
    ];

    setTestimonials((prevTestimonials) => [...prevTestimonials, ...newTestimonials]);
  };

  return (
    <S.Section>
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');`}
      </style>

      {/* Seção de Cabeçalho */}
      <section className='linear'>
        <picture>
          <img src={logo} alt="logo" id='logo' />
        </picture>
      </section>

      {/* Seção de Funcionalidades */}
      <section id='funcionalidades'>
        <div id="textinho">
          <p id='topico'>Explore nossas</p>
          <h1>FUNCIONALIDADES <span id='line'></span></h1>
        </div>

        <div id='funcao'>
          <div>
            <FeatureCard
              imageSrc= {parcerias}
              altText="Imagem representando parcerias"
              title="PARCERIAS"
              description="EMPRESAS PARCEIRAS DISPONIBILIZANDO SEUS SERVIÇOS"
              isOdd
            />
            <FeatureCard
              imageSrc={ranking}
              altText="Imagem representando ranking por estrelas"
              title="RANKING"
              description="RANKING DE EMPRESAS BASEADO EM AVALIAÇÕES DOS USUÁRIOS"
            />
          </div>
          <div>
            <FeatureCard
              imageSrc={manutencao}
              altText="Imagem representando manutenções"
              title="MANUTENÇÕES"
              description="OFERTAS DE SERVIÇOS DE MANUTENÇÃO E AUXÍLIO AOS USUÁRIOS"
            />
            <FeatureCard
              imageSrc={chat}
              altText="Imagem representando chats"
              title="CHAT"
              description="ATENDIMENTO VIRTUAL PARA SERVIÇOS SIMPLES"
              isOdd
            />
          </div>
        </div>
      </section>

      {/* Seção Sobre */}
      <section id='sobre'>
        <img src={mulher} alt="Mulher mexendo em um notebook" id='mulher' />
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
          <div id='botao'>
            <Button link="/Login" text="Já faz parte? Login" />
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section id='depoimentos'>
        <h1>O que nossos usuários dizem</h1>
        <div id='depoimentoContainer'>
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              userName={testimonial.userName}
              feedback={testimonial.feedback}
              profileImage={testimonial.profileImage}
            />
          ))}
        </div>

        {/* Botão para adicionar mais depoimentos */}
        <div id="moreTestimonialsBtn">
          <Button onClick={addMoreTestimonials} text="Adicionar mais comentário" />
        </div>
      </section>
    </S.Section>
  );
}

// Componente FeatureCard
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

// Componente Button
interface ButtonProps {
  link?: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ link, text, onClick }) => (
  <li>
    {link ? (
      <a href={link} id="center">
        {text}
      </a>
    ) : (
      <button onClick={onClick} id="center">
        {text}
      </button>
    )}
  </li>
);

// Componente Testimonial
interface TestimonialProps {
  userName: string;
  feedback: string;
  profileImage: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ userName, feedback, profileImage }) => (
  <div className='testimonial'>
    <img src={profileImage} alt={`${userName}'s profile`} className='profileImage' />
    <p className='name'>"{feedback}"</p>
    <h4>- {userName}</h4>
  </div>
);
