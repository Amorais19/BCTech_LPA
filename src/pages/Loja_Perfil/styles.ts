import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

export const Section = styled.section`
  display: flex;
  width: 100%;

  #quadro {
    display: flex;
    width: 100%;
    height: 40rem;
    align-items: center;
  }

  #img {
    position: absolute;
    width: 100%;
    height: 40rem;
  }

  #grid {
    display: grid;
    grid-template-columns: auto auto auto;
    position: absolute;
  }

  #square {
    display: flex;
    flex-direction: column;
    width: 60%;
  }

  #align {
    display: flex;
    flex-direction: column;
    background-color: ${colors.white};
    height: 10rem;
    padding: 1rem;
  }
`;
