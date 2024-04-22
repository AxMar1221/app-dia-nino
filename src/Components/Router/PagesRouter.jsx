import { Route, Routes } from "react-router-dom"
import {  AuthApp, GrafIndiApp, GraficaApp, HomeApp, LoginApp } from "../Pages"


export const PagesRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomeApp />} />
        <Route path="/infoG" element={<GraficaApp />} />
        <Route path="/infoI" element={<GrafIndiApp />} />
        <Route path="/login" element={<LoginApp />} />
        <Route path="/auth" element={<AuthApp />} />

        <Route path="/*" element={<HomeApp />} />
      </Routes>
    </>
  )
}
