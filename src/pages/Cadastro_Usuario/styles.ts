import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

export const Section = styled.section`
    /* Layout */
    #background {
        width: 99vw;
        height: calc(100vh - 12.90rem);
        background: linear-gradient(${colors.black}, ${colors.roxoSecundario});
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    #fundoB {
        justify-content: flex-start;
        align-items: start;
        padding-left: 5rem;
    }

    .align {
        display: flex;
        align-items: center;
        width: 75rem;
    }

    #link {
        display: flex;
        align-items: center;
        justify-content: end;
        padding: 1rem;
        width: 75rem;
        color: white;
        font-family: 'Raleway';
    }

    /* Estilo do Cabeçalho */
    h1 {
        color: ${colors.roxoPrincipal};
        font-weight: bold;
        font-size: 4rem;
        font-family: 'Reem Kufi';
    }

    /* Estilo da Imagem */
    img {
        width: 4rem;
    }

    #icon {
        position: absolute; /* Coloca o ícone dentro do campo de input */
        left: 1rem; /* Ajuste a posição do ícone */
        top: 50%;
        transform: translateY(-50%); /* Centraliza verticalmente */
        color: white; /* Muda a cor do ícone para branco */
        font-size: 1.2rem; /* Tamanho do ícone */
    }

    /* Estilo do Formulário */
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

    /* Estilo dos Campos */
    #campo,
    #campoE {
        display: flex;
        flex-direction: column;
        padding-top: 1rem;
    }

    #campo {
        width: 31rem;
    }

    #campoE {
        width: 65rem;
    }
    #input {
        background-color: ${colors.blackFundo};
        padding: 1rem 1rem 1rem 3rem; /* Espaço interno para ícone */
        border: 1px solid ${colors.roxoPrincipal};
        font-size: medium;
        border-radius: 10px;
        color: ${colors.whiteOpac};
        width: 100%; /* Para garantir que o input ocupe toda a largura */
        min-height: 3.5rem; /* Altura mínima do input */
        transition: border-color 200ms; /* Transição suave na borda */
    }

    #inputContainer {
        position: relative; /* Para permitir posicionamento absoluto do ícone */
    }

    /* Estilo do Título do Campo */
    #titulo {
        font-family: 'Raleway';
        font-size: large;
        font-weight: bold;
        color: ${colors.white};
        padding-bottom: 0.5rem;
    }

    /* Botões */
    #buttonDiv {
        display: flex;
        gap: 3rem;
    }

    li {
        list-style: none;
        background-color: ${colors.blackFundo};
        border-radius: 12px;
        transition: background-color 300ms, transform 300ms;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 12rem;
        height: 3rem;
        text-align: center;
    }

    li a {
        color: ${colors.white};
        font-family: 'Raleway';
        font-size: large;
        font-weight: bold;
        text-decoration: none;
        display: inline-block;
    }

    li:hover {
        background-color: ${colors.roxoOpac};
        transform: scale(1.05);
    }

    li a:hover {
        color: white;
        transform: scale(1.05);
    }

    /* Estilo das Linhas */
    #linhas {
        display: flex;
        gap: 3rem;
    }
`;
