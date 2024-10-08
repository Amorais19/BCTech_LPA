import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

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
    }

    a {
        text-decoration: none;
    }

    p {
        color: ${colors.navBarTitle};
        font-family: 'Signika';
        font-size: x-large
    }
    nav ul ol:hover {
    text-decoration: underline;
    color: ${colors.white};
  }

`