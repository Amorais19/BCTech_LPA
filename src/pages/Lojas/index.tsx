import * as S from './styles'; // Importa os estilos (styled-components)
import React from 'react'; // Importa o React, necessário para criar componentes
import AliceCarousel from 'react-alice-carousel'; // Importa o componente de carrossel (biblioteca AliceCarousel)
import 'react-alice-carousel/lib/alice-carousel.css'; // Importa o estilo CSS do AliceCarousel
import { Link } from 'react-router-dom'; // Importa o Link para navegação entre páginas

export function Lojas() { // Define o componente funcional Lojas
  // Array de itens para o carrossel (cada item é uma imagem de anúncio)
  const items = [
    <img src="src/assets/anuncio.png" alt="Anúncio 1" className='carrosselImg' />,
    <img src="src/assets/anuncio2.webp" alt="Anúncio 2" className='carrosselImg' />,
    <img src="src/assets/anuncio3.png" alt="Anúncio 3" className='carrosselImg' />,
    <img src="src/assets/anuncio4.png" alt="Anúncio 4" className='carrosselImg' />,
    <img src="src/assets/anuncio5.png" alt="Anúncio 5" className='carrosselImg' />,
  ];

  // Cria um array de objetos para as lojas, com propriedades como nome, descrição, imagem e avaliação
  const lojasArray = Array.from({ length: 12 }, (_, index) => ({
    id: index, // Define o ID da loja como o índice no array
    nome: `Nome da Empresa ${index + 1}`, // Nome da loja, com base no índice
    descricao: 'Texto referente à empresa. Texto bem minimalista feito pela empresa.', // Descrição da loja
    imgSrc: 'src/assets/empresas.png', // Imagem padrão para as lojas
    estrelas: 5, // Número de estrelas de avaliação
  }));

  return (
    <S.Section> {/* Seção principal estilizada pelo styled-components */}
      {/* Seção de Carrossel de Anúncios */}
      <section className='carrossel'>
        <AliceCarousel
          mouseTracking // Permite o controle do carrossel com o mouse
          items={items} // Itens a serem exibidos no carrossel (as imagens)
          autoPlay // Habilita o autoplay do carrossel
          autoPlayInterval={3000} // Intervalo de tempo entre as trocas de imagem (3000ms = 3 segundos)
          disableButtonsControls // Desativa os botões de controle (anterior/próximo)
          infinite // Faz o carrossel voltar ao início automaticamente após chegar ao final
        />
      </section>

      {/* Seção de Lojas */}
      <section className='lojas'>
        <div className='title'>
          {/* Texto de introdução */}
          <p className='topico'>Explore nossas</p>
          <h1>LOJAS <span className='line'></span></h1> {/* Título principal "LOJAS" com uma linha decorativa */}
        </div>

        {/* Grid das lojas */}
        <div className='lojasGrid'>
          {/* Mapeia o array de lojas e renderiza um item para cada loja */}
          {lojasArray.map((loja) => (
            <div key={loja.id} className='loja'> {/* Cada loja é um item do grid */}
              <Link to="/Loja_perfil"> {/* Link para a página do perfil da loja */}
                <img src={loja.imgSrc} alt={`Imagem da ${loja.nome}`} className='lojaImg' /> {/* Imagem da loja */}
              </Link>
              <h2>{loja.nome}</h2> {/* Nome da loja */}
              <p>{loja.descricao}</p> {/* Descrição da loja */}
              <div className='stars'>
                {/* Exibe as estrelas de avaliação, uma estrela para cada valor em "estrelas" */}
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
