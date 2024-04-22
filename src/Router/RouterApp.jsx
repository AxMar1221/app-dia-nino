import { Route, Routes } from "react-router-dom"
import { FooterApp, NavBarApp } from "../Shared"
import { PagesRouter } from "../Components/Router"

export const RouterApp = () => {
  return (
    <>
      <NavBarApp />
      <Routes>
        <Route path="/*" element={<PagesRouter />} />
      </Routes>
      <FooterApp />
    </>
  )
}
