import { Outlet } from "react-router-dom"
import { Header } from "../../components"
import * as S from "./styles"

export function Layout() {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
    </>
  )
}