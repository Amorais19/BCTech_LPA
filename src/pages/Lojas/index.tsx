import * as S from './styles';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Link } from 'react-router-dom'; // Importa o Link

export function Lojas() {
  const items = [
    <img src="src/assets/anuncio.png" alt="Anúncio 1" id='img' />,
    <img src="src/assets/anuncio2.webp" alt="Anúncio 2" id='img' />,
    <img src="src/assets/anuncio3.png" alt="Anúncio 3" id='img' />,
    <img src="src/assets/anuncio4.png" alt="Anúncio 4" id='img' />,
    <img src="src/assets/anuncio5.png" alt="Anúncio 5" id='img' />,
  ];

  const lojasArray = Array.from({ length: 12 }, (_, index) => ({
    id: index,
    nome: `Loja ${index + 1}`,
    descricao: 'Texto referente à empresa. Texto bem minimalista feito pela empresa.',
    imgSrc: 'src/assets/empresas.png',
    estrelas: 5,
  }));

  return (
    <S.Section>
      {/* Carrossel de anúncios */}
      <section id='carrossel'>
        <AliceCarousel
          mouseTracking
          items={items}
          autoPlay
          autoPlayInterval={3000}
          disableButtonsControls
          infinite
        />
      </section>

      {/* Título "Explore nossas LOJAS" */}
      <section id='lojas'>
        <div id='title'>
          <p id='topico'>Explore nossas</p>
          <h1>LOJAS <span id='line'></span></h1>
          <span id='line'></span>
        </div>

        {/* Grid de lojas */}
        <div id='lojasGrid'>
          {lojasArray.map((loja) => (
            <div key={loja.id} className='loja'>
              <Link to="/Loja_perfil">
                <img src={loja.imgSrc} alt={`Imagem da ${loja.nome}`} className='lojaImg' />
              </Link>
              <h2>{loja.nome}</h2>
              <p>{loja.descricao}</p>
              <div className='stars'>
                {Array.from({ length: loja.estrelas }, (_, i) => (
                  <span key={i} className='star'>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </S.Section>
  );
}
