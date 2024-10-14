import { Link, useLocation } from "react-router-dom";
import { colors } from "../../styles/GlobalStyle";
import * as S from "./styles";

export function NavBar() {
  const location = useLocation(); // Obtém a localização atual

  return (
    <S.NavBar>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Signika:wght@500&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');
      </style>
      <nav>
        <ul>
          <li>
            <Link to="/Home">
              <p style={{ color: location.pathname === "/Home" ? colors.white : colors.navBarTitle }}>
                Home
              </p>
            </Link>
          </li>
          <li>
            <Link to="/Lojas">
              <p style={{ color: location.pathname === "/Lojas" ? colors.white : colors.navBarTitle }}>
                Lojas
              </p>
            </Link>
          </li>
          <li>
            <Link to="/Perfil">
              <p style={{ color: location.pathname === "/Perfil" ? colors.white : colors.navBarTitle }}>
                Perfil
              </p>
            </Link>
          </li>
          <li>
            <Link to="/Contacte-nos">
              <p style={{ color: location.pathname === "/Contacte-nos" ? colors.white : colors.navBarTitle }}>
                Contacte-nos
              </p>
            </Link>
          </li>
        </ul>
      </nav>
    </S.NavBar>
  );
}
