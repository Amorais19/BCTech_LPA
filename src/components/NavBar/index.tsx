import { colors } from "../../styles/GlobalStyle"
import * as S from "./styles"

export function NavBar() {
  return (
    <S.NavBar>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Signika:wght@500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
      </style>
      <nav>
        <ul>
          <ol><a href="/Home"><p>Home</p></a></ol>
          <ol><a href="/Lojas"><p>Lojas</p></a></ol>
          <ol><a href="/Perfil"><p>Perfil</p></a></ol>
          <ol><a href="/Contacte-nos"><p>Contacte-nos</p></a></ol>
        </ul>
      </nav>
    </S.NavBar>
  )
}