import * as S from './styles';
import 'react-alice-carousel/lib/alice-carousel.css';

export function Loja_Perfil() {
  return (
    <S.Section>
      <section id='quadro'>
      <img src="src/assets/teclado.png" alt="teclado" id='img' />
        <div id='grid'>
          <div id='square'>
            <div id='align'>
              <h3 id='title'>Título</h3>
              <p id='text'>"Com relação às diferenças entre poema e poesia, o poema se refere a uma estrutura textual, enquanto a poesia está relacionada ao </p>
            </div>
            <img src="src/assets/empresas.png" alt="foto" />
          </div>
          <div id='square'>
            <div id='align'>
              <h3 id='title'>Título</h3>
              <p id='text'>"Com relação às diferenças entre poema e poesia, o poema se refere a uma estrutura textual, enquanto a poesia está relacionada ao </p>
            </div>
            <img src="src/assets/empresas.png" alt="foto" />
          </div>
          <div id='square'>
            <div id='align'>
              <h3 id='title'>Título</h3>
              <p id='text'>"Com relação às diferenças entre poema e poesia, o poema se refere a uma estrutura textual, enquanto a poesia está relacionada ao </p>
            </div>
            <img src="src/assets/empresas.png" alt="foto" />
          </div>
        </div>
      </section>
    </S.Section>
  );
}
