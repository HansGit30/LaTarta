import { Route, Routes } from "react-router-dom"
import Cover from "./pages/Cover"
import Home from "./pages/Home"


function App() {
  return (
    <>
      <Routes>
        <Route path="/La_Tarta" element={<Cover />} />
        <Route path="/La_Tarta/inicio" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
