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
            <Link to="/" className={location.pathname === "/" ? "active" : ""}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/Lojas" className={location.pathname === "/Lojas" ? "active" : ""}>
              <p>Lojas</p>
            </Link>
          </li>
          <li>
            <Link to="/Perfil" className={location.pathname === "/Perfil" ? "active" : ""}>
              <p>Perfil</p>
            </Link>
          </li>
          <li>
            <Link to="/Contacte-nos" className={location.pathname === "/Contacte-nos" ? "active" : ""}>
              <p>Contacte-nos</p>
            </Link>
          </li>
        </ul>
      </nav>
    </S.NavBar>
  );
}
