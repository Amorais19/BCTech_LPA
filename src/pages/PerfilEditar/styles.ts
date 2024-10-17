import styled from 'styled-components';
import { colors, gradientes } from '../../styles/GlobalStyle';

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Reem Kufi', sans-serif;

    /* Fundo */
    #fundoB {
        display: flex;
        width: 100%;
        height: 8rem;
        justify-content: flex-start;
        align-items: center;
        background: linear-gradient(${colors.black}, ${gradientes.purpleO});
    }

    /* Icones */
    #foto {
        position: relative;
        margin-top: -6rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    #icones {
        width: 20px;
        height: 20px;
        margin-right: 1rem;
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

    /* Corpo */
    #allbody {
        text-align: center;
        margin-top: 1rem;
        padding: 2rem;
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

    /* Texto */
    h3 {
        color: ${colors.white};
        font-weight: bolder;
        margin-bottom: 2rem;
        font-size: 1.5rem;
    }

    p {
        color: ${colors.white};
        margin-left: 1rem;
        font-family: 'Raleway';
        font-weight: bold;
    }

    h2 {
        color: ${colors.white};
        font-family: 'Reem Kufi';
        font-weight: bolder;
        font-size: 1.5rem;
        padding-bottom: 1.5rem;
    }

    #titulo {
        display: flex;
        justify-content: start;
        padding: 0 0 0.2rem 0.5rem;
    }

    /* Campos */
    #layout {
        display: flex;
        flex-direction: column;
        justify-content: start;
    }

    #campo {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 18rem;
        padding: 1rem;
        border-bottom: 0.1rem solid ${colors.white};
    }

    #input {
        background-color: ${colors.blackFundo};
        padding: 0.8rem;
        border: 1px solid ${colors.white};
        font-size: medium;
        border-radius: 5px;
        color: ${colors.whiteOpac};
        width: 100%;
    }

    /* Botões */
    #buttonDiv {
        display: flex;
        gap: 1rem;
        margin: 1rem 0 3rem 0;
        justify-content: center;
    }

    button {
        background-color: ${colors.roxoPrincipal};
        border-radius: 30px;
        transition: background-color 300ms, transform 300ms;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 9rem;
        height: 3rem;
        color: ${colors.white};
        font-family: 'Raleway';
        font-size: large;
        font-weight: bold;
        cursor: pointer;
        border: 0;
    }

    button:hover {
        background-color: ${colors.roxoSecundario};
        transform: scale(1.05);
    }

    #botaoCancel {
        background-color: ${colors.grayInput};
    }

    #botaoCancel:hover {
        background-color: ${colors.blackFundo};
        transform: scale(1.05);
    }

    /* Pop-up */
    .popup {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .popup-content {
        background: ${colors.grayFundo};
        border-radius: 2rem;
        width: 25rem;
        height: 30rem;
        padding: 30px;
        text-align: center;
    }

    #campoPop {
        width: 20rem;
        padding: 1rem;
    }

    input {
        background-color: ${colors.grayInput};
        padding: 0.7rem;
        font-size: medium;
        border-radius: 30px;
        width: 20rem;
        filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 25%));
    }

    .input-icon {
        background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0S160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"/></svg>');
        background-repeat: no-repeat;
        background-position: left center;
        background-position-x: 8px;
        background-size: 15px;
        padding-left: 30px;
    }

    label {
        color: ${colors.white};
    }

    /* Links */
    a {
        color: ${colors.roxoPrincipal};
        cursor: pointer;
        text-decoration-line: underline;
    }

    #MudarSenha {
        display: flex;
        justify-content: start;
    }

    .blur {
        filter: blur(5px);
    }

`;
