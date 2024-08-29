import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Header = styled.aside`
    background-color: ${colors.black};
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    nav {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        width: 200%;
    }
    nav ul {
        display: flex;
        padding: 1.5rem;
        justify-content: space-around;
    }
    nav ul li {
        display: flex;
        justify-content: space-around;
    }
    nav ul li a {
        display: flex;
        justify-content: space-around;
    }
`