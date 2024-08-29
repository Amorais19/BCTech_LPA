import { Routes, Route } from "react-router-dom"
import { Home, Lojas, Perfil, Contacte, Layout } from "../pages"

export function Rotas() {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/Lojas" element={<Lojas />} />
            <Route path="/Perfil" element={<Perfil />} />
            <Route path="/Contacte-nos" element={<Contacte />} />
        </Route>
      </Routes>
    )
}