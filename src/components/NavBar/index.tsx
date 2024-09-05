import * as S from "./styles"

export function NavBar() {
  return (
    <S.NavBar>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Signika:wght@500&display=swap');
      </style>
      <nav>
        <ul>
          <ol><a href="#"><p>Home</p></a></ol>
          <ol><a href="#"><p>Lojas</p></a></ol>
          <ol><a href="#"><p>Perfil</p></a></ol>
          <ol><a href="#"><p>Contacte-nos</p></a></ol>
        </ul>
      </nav>
    </S.NavBar>
  )
}