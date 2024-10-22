import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles'; // Certifique-se de que o caminho está correto

import phoneImg from '../../assets/phone.png';
import locationImg from '../../assets/loc.png'; // Substitua pelo caminho correto

export function Loja_Perfil() {
  const [isChatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setChatOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log('Mensagem enviada:', message);
      setMessage('');
    }
  };

  const handleDeleteClick = (service: Service) => {
    setSelectedService(service);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setSelectedService(null);
  };

  // Array de objetos com títulos, textos e imagens
  const squaresData = [
    { title: 'Título 1', text: 'Texto descritivo para o primeiro item.', imgSrc: 'src/assets/empresas.png' },
    { title: 'Título 2', text: 'Texto descritivo para o segundo item.', imgSrc: 'src/assets/empresas.png' },
    { title: 'Título 3', text: 'Texto descritivo para o terceiro item.', imgSrc: 'src/assets/empresas.png' },
  ];

  const squaresservico: Service[] = [
    { imgSrc: 'src/assets/empresas.png', text: 'Serviço 1: Manutenção de Equipamento', technician: 'Silvio Carmaro', estimatedTime: '1 hora', description: 'Verificação e manutenção de equipamentos eletrônicos, garantindo que tudo funcione perfeitamente.', price: 'R$ 100,00' },
    { imgSrc: 'src/assets/empresas.png', text: 'Serviço 2: Limpeza de Equipamentos', technician: 'Lúcia Mavieira', estimatedTime: '30 minutos', description: 'Limpeza interna e externa de aparelhos, removendo poeira e sujeira acumulada.', price: 'R$ 50,00' },
    { imgSrc: 'src/assets/empresas.png', text: 'Serviço 3: Instalação de Equipamentos', technician: 'José Leando', estimatedTime: '2 horas', description: 'Instalação de novos aparelhos com testes completos, garantindo que tudo esteja em perfeito estado.', price: 'R$ 200,00' },
  ];

  return (
    <S.Section>
      <section id='quadro'>
        <img src="src/assets/fundoperfil.png" alt="teclado" id='img' />
        <div id='grid'>
          {squaresData.map((item, index) => (
            <div className='square' key={index}>
              <div className={`align${index + 1}`}>
                <h3 className='title'>{item.title}</h3>
                <p className='text'>{item.text}</p>
              </div>
              <img src={item.imgSrc} alt={`Imagem de ${item.title}`} />
            </div>
          ))}
        </div>
      </section>

      <section id='conteudo'>
        <div id='sinopse'>
          <h1 className='name'>Nome da Empresa</h1>
          <p className='subtitle'>Subtítulo descritivo da empresa</p>
          <p className='subtext'>
            Nossa empresa busca fornecer o melhor atendimento ao nosso cliente, fornecendo manutenções seguras feitas por profissionais qualificados, além de uma garantia duradoura, e o melhor preço da região. Compre conosco, saía ganhando!
          </p>
        </div>
        <div className="linha">
          <hr />
          <span className="titulo"><p>Concertos</p></span>
          <hr />
        </div>
        <div id='grid2'>
          {squaresservico.map((service, index) => (
            <div className='square' key={index}>
              <div className={`servico${index + 1}`}>
                <img src={service.imgSrc} alt={`Imagem de ${service.text}`} />
                <p className='text1'>{service.text}</p>
                <div id="buttonDiv">
                  <button className='bb' onClick={() => handleDeleteClick(service)}>Ver</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="linha">
          <hr />
          <span className="titulo"><p>Contato</p></span>
          <hr />
        </div>

        <section id='conteudo2'>
          <div id='contatos'>
            <div id='grid3'>
              <div className="contact-background">
                <ContactSquare label="Localização" info="Varginha-MG" imgSrc={locationImg} />
              </div>
              <div className="contact-background">
                <ContactSquare label="Telefone" info="0800-0800" imgSrc={phoneImg} />
              </div>
            </div>
          </div>
        </section>

        {/* Pop-up */}
{showPopup && selectedService && (
  <div className="popup">
    <div className="popup-content">
      <ConcertDetails 
        technician={selectedService.technician}
        estimatedTime={selectedService.estimatedTime}
        description={selectedService.description}
        price={selectedService.price}
      />
      <div className="popup-buttons">
        <button onClick={handleClosePopup} id='botaoCancel'>VOLTAR</button>
        <button className="solicitar-servico-button">SOLICITAR SERVIÇO</button>
      </div>
    </div>
  </div>
)}

      </section>

      {/* Balão de chat */}
      {!isChatOpen && (
        <div className="stylish-chat-container" onClick={toggleChat}>
          <div className="chat-content">
            <img className="chat-avatar" src="src/assets/mascote.webp" alt="Chat Mascote" />
            <div className="chat-message">Entre em contato e descubra como podemos ajudar!</div>
          </div>
        </div>
      )}

      {/* Tela do chat */}
      {isChatOpen && (
        <div className="chat-modal" ref={modalRef}>
          <div className="chat-body">
            <div className="header-question">
              <img className="mascot-image" src="src/assets/mascote.webp" alt="Mascote" />
              <p>Como posso te ajudar?</p>
            </div>
            <div className='bot'>
              <button className='bot-button'>📫 Menu Principal</button>
              <button className='bot-button'>⏰ Funcionamento</button>
              <button className='bot-button'>📌 Localização</button>
              <button className='bot-button'>👨🏻‍💼 Técnico</button>
            </div>
            <div className="chat-input-container">
              <input
                className="chat-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
              />
              <button className="send-button" onClick={handleSendMessage}>Enviar</button>
            </div>
          </div>
        </div>
      )}
    </S.Section>
  );
}

// Interface para os props do ContactSquare
interface ContactSquareProps {
  label: string;
  info: string;
  imgSrc: string;
}

// Componente para cada quadrado de contato
const ContactSquare: React.FC<ContactSquareProps> = ({ label, info, imgSrc }) => (
  <div id="square">
    <img src={imgSrc} alt={label} id='image' />
    <p id='subtitle'>{label}</p>
    <p id='subtext'>{info}</p>
  </div>
);

// Interface para os serviços
interface Service {
  imgSrc: string;
  text: string;
  technician: string;
  estimatedTime: string;
  description: string;
  price: string;
}

// Componente para exibir os detalhes do concerto
interface ConcertDetailsProps {
  technician: string;
  estimatedTime: string;
  description: string;
  price: string;
}

const ConcertDetails: React.FC<ConcertDetailsProps> = ({ technician, estimatedTime, description, price }) => {
  return (
    <div className="concert-details">
      <h2><i className="fas fa-tools"></i> Detalhes do Serviço de Concerto</h2>
      <div className="details-container">
        <p><strong>Técnico:</strong> <span>{technician}</span></p>
        <p><strong>Tempo Estimado:</strong> <span>{estimatedTime}</span></p>
        <p><strong>Descrição:</strong> 
          <span> {description}</span>
        </p>
        <p><strong>Preço:</strong> <span>{price}</span></p>
      </div>
    </div>
  );
};
