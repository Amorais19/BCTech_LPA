import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const NavBar = styled.aside`
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: space-evenly;

    nav {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
    }

    ul {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-evenly;
        padding: 0; // Remove padding padrão da lista
        margin: 0; // Remove margin padrão da lista
    }

    a {
        text-decoration: none;

        p {
            color: ${colors.navBarTitle};
            font-family: 'Signika';
            font-size: x-large;
            transition: color 0.3s; // Transição suave

            &:hover {
                color: ${colors.laranja}; // Hover aplicado ao p dentro do a
            }
        }
    }

    a.active p {
        color: ${colors.white}; // Define a cor do texto para o link ativo
    }
`;
