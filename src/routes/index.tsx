import { Routes, Route } from "react-router-dom"
import { Home, Lojas, Perfil, Contacte, CadastroE, Layout, CadastroU, Login,Loja_perfil } from "../pages"

export function Rotas() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />} />
            <Route path="/Lojas" element={<Lojas />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Contacte-nos" element={<Contacte />} />
            <Route path="/Cadastre-se_Empresa" element={<CadastroE /> } />
            <Route path="/Cadastre-se_Usuario" element={<CadastroU /> } />
            <Route path="/Login" element={<Login /> } />
            <Route path="/Loja_perfil" element={<Loja_perfil /> } />
        </Route>
      </Routes>
    )
}