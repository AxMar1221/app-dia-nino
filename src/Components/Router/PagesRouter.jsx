import { Route, Routes } from "react-router-dom"
import { AuthApp, GrafIndiApp, GraficaApp, HomeApp } from "../Pages"


export const PagesRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomeApp />} />
        <Route path="/infoG" element={<GraficaApp />} />
        <Route path="/infoI" element={<GrafIndiApp />} />
        <Route path="/login" element={<AuthApp />} />

        <Route path="/*" element={<HomeApp />} />
      </Routes>
    </>
  )
}
