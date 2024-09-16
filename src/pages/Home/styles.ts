import styled from 'styled-components'
import { colors, gradientes } from '../../styles/GlobalStyle'

export const Section = styled.section`
    align-items: center;
    justify-content: center;

    #linear{
        background: linear-gradient(to left, ${gradientes.purpleO}, ${gradientes.purpleT});
        height: 30rem;
    }

    #funcionalidades {
        display: flex;
        align-items: center;
        justify-content: space-around;
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
        width: 6.5rem;
        border-bottom: solid 2px ${colors.roxoPrincipal};
    }

    #funcao {
        display: grid;
        grid-template-columns: auto auto;
        margin: 2rem;
    }

    #centerO {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background: linear-gradient(${colors.black}, ${gradientes.blackO}, ${gradientes.blackT});
        width: 12rem;
        height: 12rem;
        margin: 3rem;
    }

    #centerT {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        background: linear-gradient(${colors.black}, ${gradientes.greyO}, ${gradientes.greyT});
        width: 12rem;
        height: 12rem;
        margin: 3rem;
    }

    h4 {
        color: ${colors.roxoPrincipal};
        font-family: 'Reem Kufi';
    }

    #img {
        width: 70px;
        height: 70px;
    }

    #text {
        display: flex;
        font-family: 'Raleway';
        color: ${colors.white};
        font-size: smaller;
        width: 10rem;
        text-align: center;
    }

    #sobre {
        background: linear-gradient(${gradientes.purpleO}, ${gradientes.purpleT});
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        padding: 3rem;
    }

    #width {
        flex-direction: column;
        width: 40rem;
    }

    #mulher {
        width: 500px;
        height: 350px;
    }

    #texto {
        color: ${colors.white};
        font-family: 'Raleway';
        font-size: large;
        padding: 1.5rem 0;
    }

    #center{
        display: flex;
        align-items: center;
        justify-content: start;
        margin: 1rem 0 0 15rem;
    }

    button {
        background: linear-gradient(${gradientes.purpleButtonO}, ${gradientes.purpleButtonT});
        border-radius: 12px;
    }

    button p {
        color: ${colors.white};
        font-family: 'Raleway';
        font-size: large;
        margin: -1rem 2.5rem;
    }

    #span {
        height: 30rem;
    }
`