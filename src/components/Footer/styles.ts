import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Footer = styled.aside`
    display: flex;
    width: 100%;
    height: 10rem;
    align-items: center;
    justify-content: space-around;
    background-color: ${colors.roxoSecundario};

    section {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;
        margin: 0 20rem 0 20rem;
    }

    #logo {
        font-family: 'Luckiest Guy';
        font-size: 5rem;
        color: ${colors.white};
    }

    #sessao {
        display: flex;
        flex-direction: column;
        align-content: space-around;
    }

    #title {
        font-family: 'Raleway';
        color: ${colors.laranja};
    }

    #icons {
        display: flex;
        justify-content: start;
        align-items: center;
        padding: 0.5rem 0;
    }

    #img {
        width: 30px;
        height: 30px;
        margin-right: 0.5rem;
    }

    a {
        text-decoration: none;
    }

    #text {
        color: ${colors.white};
        font-family: 'Raleway';
    }
`