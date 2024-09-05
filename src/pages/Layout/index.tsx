import { Outlet } from "react-router-dom"
import { Nav, Foot } from "../../components"
import * as S from "./styles"

export function Layout() {
  return (
    <>
      
      <S.Main>
        <Nav />
        <Outlet />
      </S.Main>
      <Foot />
    </>
  )
}