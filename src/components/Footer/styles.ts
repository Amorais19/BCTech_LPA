import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Footer = styled.aside`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    background-color: ${colors.Principal};

    section {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-around;
    }
    #logo {
        font-family: 'Luckiest Guy';
        font-size: 5rem;
        color: ${colors.white};
    }
    #title {
        font-family: 'Raleway';
        font-weight: bold;
        font-size: x-large;
        color: ${colors.Secundaria};
    }
    #icons {
        display: flex;
        padding: 0.5rem;
        align-items: center;
    }
    a {
        text-decoration: none;
    }
    #text {
        padding-left: 0.5rem;
        font-family: 'Raleway';
        color: ${colors.white};
    }
`