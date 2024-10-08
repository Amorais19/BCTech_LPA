import styled from 'styled-components'
import { colors, gradientes } from '../../styles/GlobalStyle'

export const Section = styled.section`
    align-items: center;
    justify-content: center;

    #header {
        display: inline-block;
        position: relative;
        width: 100%;
        height: 30rem;
        justify-content: center;
        align-items: center;
    }

    #img {
        position: absolute;
        width: 100%;
        height: 30rem;
    }

    #textos {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #title {
        font-family: 'Reem Kufi';
        font-size: 4em;
        color: ${colors.white};
    }

    #text {
        width: 30%;
        font-family: 'Raleway';
        font-size: large;
        color: ${colors.white};
        text-align: center;
        padding-top: 4rem;
    }
    
    #conteudo {
        display: grid;
        grid-template-columns: auto auto;
        align-items: center;
        justify-content: space-evenly;
    }

    #contatos {
        padding: 2rem;
    }

    #grid {
        display: grid;
        grid-template-columns: auto auto;
    }

    #square {
        margin: 1rem;
        width: 10rem;
        height: 10rem;
        background-color: ${colors.roxoOpac};
        border-radius: 10%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #subtitle {
        font-family: 'Raleway';
        color: ${colors.white};
    }

    #subtext {
        font-family: 'Raleway';
        font-size: smaller;
        color: ${colors.white};
        padding-top: 0.5rem;
    }

    #mapa {
        width: 25rem;
        height: 15rem;
        border: 1px solid ${colors.roxoOpac};
        margin-top: 2rem;
    }

    #suporte {
        background-color: ${colors.blackFundo};
        border-radius: 1.5%;
        width: 100%;
        height: 90%;
        margin: 8rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    h3 {
        font-family: 'Reem Kufi';
        font-size: xx-large;
        color: ${colors.white};
    }
`