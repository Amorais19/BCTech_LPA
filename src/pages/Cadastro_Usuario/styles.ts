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
        margin-bottom: 2rem; /* Espaço abaixo da seção align */
    }

    #link {
        display: flex;
        align-items: center;
        justify-content: end;
        padding: 1rem;
        width: 75rem;
        color: white;
        font-family: 'Raleway';
        margin-bottom: 2rem; /* Espaço abaixo do link */
    }

    /* Estilo do Cabeçalho */
    h1 {
        color: ${colors.roxoPrincipal};
        font-weight: bold;
        font-size: 4rem;
        font-family: 'Reem Kufi';
        margin-bottom: 2rem; /* Espaço abaixo do cabeçalho */
    }

    /* Estilo da Imagem */
    img {
        width: 4rem;
        margin-bottom: 1rem; /* Espaço abaixo da imagem */
    }

    #icon {
        position: absolute;
        left: 1rem;
        top: 50%;
        transform: translateY(-50%);
        color: white;
        font-size: 1.2rem;
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
        margin-bottom: 2rem; /* Espaço abaixo do formulário */
        padding: 2rem; /* Aumentar espaço interno */
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
        padding: 1rem 1rem 1rem 3rem;
        border: 1px solid ${colors.roxoPrincipal};
        font-size: medium;
        border-radius: 10px;
        color: ${colors.whiteOpac};
        width: 100%;
        min-height: 3.5rem;
        transition: border-color 200ms;
    }

    #inputContainer {
        position: relative;
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
        gap: 2rem; /* Espaçamento entre botões */
        justify-content: center; /* Centraliza os botões */
        flex-wrap: wrap; /* Permite quebra em novas linhas se necessário */
        margin-top: 1rem; /* Espaço acima dos botões */
        margin-bottom: 2rem; /* Espaço abaixo dos botões */
    }

    li {
        list-style: none;
        background-color: ${colors.blackFundo};
        border-radius: 12px;
        transition: background-color 300ms, transform 300ms;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12rem; /* Largura dos botões */
        height: 3rem; /* Altura dos botões */
        text-align: center;
        cursor: pointer; /* Mão ao passar o mouse */
    }

    li a {
        color: ${colors.white};
        font-family: 'Raleway';
        font-size: large;
        font-weight: bold;
        text-decoration: none;
        display: inline-block;
        width: 100%; /* Link ocupa toda a área do botão */
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

    /* Media Queries for Responsiveness */
    @media (max-width: 1225px) {
        #background {
            height: calc(100vh - 10rem);
        }

        .align {
            width: 90%;
        }

        #link {
            width: 90%;
        }

        #formulario {
            width: 90%;
            height: auto; /* Permitir altura flexível */
            padding: 2rem; /* Ajustar padding */
        }

        #campo,
        #campoE {
            width: 100%; /* Campos ocupam toda a largura */
        }

        h1 {
            font-size: 3rem; /* Diminuir tamanho da fonte */
        }

        #buttonDiv {
            gap: 1rem; /* Reduzir espaço entre botões */
            flex-direction: row; /* Manter botões lado a lado */
        }

        li {
            width: 10rem; /* Ajustar a largura dos botões em telas menores */
            height: 3rem; /* Altura do botão */
        }

        #link {
            display: flex;
            align-items: center;
            justify-content: end;
            padding: 0.5rem; /* Aumentar padding */
            width: 65rem;
            margin-bottom: 1rem; /* Espaço abaixo do link */
        }
    }

    @media (max-width: 1211px) {
        #link {
            width: 55rem;
        }
    }

    @media (max-width: 931px) {
        #link {
            width: 40rem;
        }
    }

    @media (max-width: 571px) {
        #formulario {
            background-color: ${colors.blackOpac};
            border-radius: 20px;
            width: 90%; /* Ajustar largura para se adaptar à tela */
            height: auto; /* Permitir altura flexível */
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center; /* Centraliza o conteúdo */
            border: 0.2rem solid ${colors.roxoPrincipal};
            margin-bottom: 1rem; /* Reduzir espaço abaixo do formulário */
            padding: 1rem; /* Ajustar espaço interno */
        }

        h1 {
            font-size: 2rem; /* Diminuir o tamanho da fonte do cabeçalho */
            margin-bottom: 1rem; /* Ajustar espaço abaixo do cabeçalho */
        }

        img {
            width: 2rem; /* Reduzir a largura da imagem */
            margin-bottom: 0.5rem; /* Ajustar espaço abaixo da imagem */
        }

        #link {
            width: 100%; /* Ajustar largura do link */
            margin-bottom: 1rem; /* Ajustar espaço abaixo do link */
            padding: 0.5rem; /* Ajustar padding do link */
        }

        #buttonDiv {
            margin-top: 0.5rem; /* Ajustar espaço acima dos botões */
            margin-bottom: 1rem; /* Ajustar espaço abaixo dos botões */
        }

        #input {
            width: 100%; /* Garantir que o input ocupe toda a largura */
            padding: 1rem; /* Ajustar padding do input */
        }

        #campo,
        #campoE {
            width: 100%; /* Campos ocupam toda a largura */
        }

        li {
            width: 90%; /* Largura dos botões em telas menores */
            height: 2.5rem; /* Altura do botão reduzida */
            font-size: small; /* Diminuir o tamanho da fonte do botão */
        }
    }
`;
