import * as S from "./styles"

export function Header() {
  return (
    <S.Header>
      <nav>
        <ul>
          <li><a href="/Home"><p>Home</p></a></li>
          <li><a href="/Lojas"><p>Lojas</p></a></li>
          <li><a href="/Perfil"><p>Perfil</p></a></li>
          <li><a href="/Contacte-nos"><p>Contacte-nos</p></a></li>
        </ul>
        
      </nav>
    </S.Header>
  )
}