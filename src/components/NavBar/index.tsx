import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { colors } from "../../styles/GlobalStyle";
import * as S from "./styles";

export function NavBar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Fecha o menu ao clicar em um link
  };

  return (
    <S.NavBar>
       <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400..700&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');
        `}
      </style>
      <nav>
        <div className="hamburger" onClick={toggleMenu} role="button" aria-label="Toggle menu">
          <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={isMenuOpen ? "open" : ""}>
          <li>
            <Link to="/" className={location.pathname === "/" ? "active" : ""} onClick={handleLinkClick}>
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link to="/Lojas" className={location.pathname === "/Lojas" ? "active" : ""} onClick={handleLinkClick}>
              <p>Lojas</p>
            </Link>
          </li>
          <li>
            <Link to="/Perfil" className={location.pathname === "/Perfil" ? "active" : ""} onClick={handleLinkClick}>
              <p>Perfil</p>
            </Link>
          </li>
          <li>
            <Link to="/Contacte-nos" className={location.pathname === "/Contacte-nos" ? "active" : ""} onClick={handleLinkClick}>
              <p>Contacte-nos</p>
            </Link>
          </li>
        </ul>
      </nav>
    </S.NavBar>
  );
}
