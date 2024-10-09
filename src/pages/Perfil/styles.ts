import styled from 'styled-components'
import { colors, gradientes } from '../../styles/GlobalStyle'

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Reem Kufi', sans-serif;

    #fundoB {
        display: flex;
        width: 100%;
        height: 8rem;
        justify-content: flex-start;
        align-items: center;
        background: linear-gradient( ${colors.black}, ${gradientes.purpleO});
    }

    #voltarIcone {
        margin-left: 3rem;
        width: 35px;
        height: 35px;
    }

    #foto {
        position: relative;
        margin-top: -6rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    #pessoa {
        width: 12rem;
        height: 12rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6rem;
        background-color: white;
    }

    #usuariog {
        width: 7rem;
        height: 7rem;
    }

    #allbody {
        text-align: center;
        margin-top: 1rem;
        padding: 2rem;
    }

    h3 {
        color: ${colors.white};
        font-weight: bolder;
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }

    #body {
        display: flex;
        justify-content: space-around;
        gap: 5rem;
    }

    #coluna {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    #campo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 18rem;
        padding: 1rem;
        border-bottom: 0.1rem solid ${colors.white};
    }

    p {
        color: ${colors.white};
        margin-left: 1rem;
        font-family: 'Raleway';
        font-weight: bold;
    }

    #icones {
        width: 20px;
        height: 20px;
        margin-right: 1rem;
    }

    #buttonDiv {
        display: flex;
        gap: 1rem;
        margin: 2rem 0 3rem 0;
    }
    li {
        list-style: none;
        background: white;
        border-radius: 12px;
        transition: background-color 300ms, transform 300ms;
        display: inline-block; /* Aparência de botão */
        padding: 0.5rem 1rem; /* Adiciona preenchimento */
        width: 10rem;
        height: 2.3rem;
    }

    li a {
        color: ${colors.roxoPrincipal};
        font-family: 'Raleway';
        font-size: large;
        font-weight: bold;
        text-decoration: none; /* Remove sublinhado */
        display: block; /* Faz o link preencher o item da lista */
        text-align: center; /* Centraliza o texto */
    } 

    li:hover {
        background-color: ${colors.roxoOpac};
        transform: scale(1.05); /* Aumenta ligeiramente ao passar o mouse */
    }
    li a:hover {
        color: white;
        transform: scale(1.05); /* Aumenta ligeiramente ao passar o mouse */

    }
`;