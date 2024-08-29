import { GlobalStyle } from "./styles/GlobalStyle";
import { Rotas } from "./routes"
import { BrowserRouter } from "react-router-dom"

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  )
}