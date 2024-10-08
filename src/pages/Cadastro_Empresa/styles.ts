import styled from 'styled-components'
import { colors, gradientes } from '../../styles/GlobalStyle'

export const Section = styled.section`
    #background {
        width: 99vw;
        height: calc(100vh - 12.90rem);
        background: linear-gradient(${colors.black}, ${colors.roxoSecundario});
        justify-content: center;
        align-items: center;
        display: flex;
    }

    #fundoB {
        justify-content: flex-start;
        align-items: start;
        padding-left: 5rem;
    }
    #layout {
        display: flex;
        gap: 3rem;
    }

    h1 {
        color: ${colors.roxoPrincipal};
        font-weight: bold;
        font-size: 4rem;
        font-family: 'Reem Kufi';
    }



    #formulario {
        background-color: ${colors.blackOpac};
        border-radius: 20px;
        width: 75rem;
        height: 35rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        border: 0.2rem solid ${colors.roxoPrincipal};
    }
    #campo {
        width: 31rem;
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
    }
    #titulo {
        font-family: 'Raleway';
        font-size: large;
        font-weight: bold;
        color: ${colors.white};
        padding-bottom: 0.5rem;
    }
    #input {
        background-color: ${colors.blackFundo};
        padding: 1rem;
        border: 1px solid ${colors.roxoPrincipal};
        font-size: medium;
        border-radius: 10px;
        color: ${colors.whiteOpac};
    }
    #botao {
        background-color: ${colors.roxoPrincipal};
        width: 80%;
        padding: 1rem;
        border-radius: 30px;
        font-family: 'Raleway';
        font-size: large;
        color: ${colors.white};
        font-weight: 600;
    }


    #buttonDiv {
        display: flex;
        gap: 3rem;
    }
    li {
        list-style: none;
        background-color: ${colors.blackFundo};
        border-radius: 12px;
        transition: background-color 300ms, transform 300ms;
        display: inline-flex; /* Troque para inline-flex para usar flexbox */
        align-items: center; /* Centraliza verticalmente */
        justify-content: center; /* Centraliza horizontalmente */
        width: 12rem;
        height: 3rem;
        text-align: center; /* Text align opcional para maior segurança */
    }

    li a {
        color: ${colors.white};
        font-family: 'Raleway';
        font-size: large;
        font-weight: bold;
        text-decoration: none; /* Remove sublinhado */
        display: inline-block; /* Mantém como inline-block */
    }

    li:hover {
        background-color: ${colors.roxoOpac};
        transform: scale(1.05); /* Aumenta ligeiramente ao passar o mouse */
    }
    li a:hover {
        color: white;
        transform: scale(1.05); /* Aumenta ligeiramente ao passar o mouse */

    }

    #icones {
        width: 20px;
        height: 20px;
        margin-right: 1rem;
    }
`