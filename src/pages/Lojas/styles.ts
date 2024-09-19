import styled from 'styled-components'
import { colors, gradientes } from '../../styles/GlobalStyle'

export const Section = styled.section`
    display: flex;
    flex-direction: column;

    #carrossel {
        align-items: center;
        justify-content: center;
        height: 37rem;
    }

    #anuncios {
        display: flex;
        height: 35rem;
        overflow: hidden;
    }

    #img {
        display: flex;
        padding-inline: 1rem;
    }

    #butoes {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
    }

    #radio1, #radio2, #radio3 {
        margin-right: 8px;
        width: 16px;
        height: 16px;
        background: cadetblue;
    }


    #topico {
        color: ${colors.roxoPrincipal};
        font-family: 'Raleway';
        font-style: italic;
        font-size: xx-large;
        padding: 0.5rem 0;
    }

    h1 {
        display: flex;
        flex-direction: column;
        color: ${colors.white};
        font-family: 'Reem Kufi';
        font-size: xx-large;
    }

    #line {
        width: 6.4rem;
        border-bottom: solid 2px ${colors.roxoPrincipal};
    }

`