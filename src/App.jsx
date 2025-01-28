import { Route, Routes } from "react-router-dom"
import Cover from "./pages/Cover"
import Home from "./pages/Home"


function App() {
  return (
    <>
      <Routes>
        <Route path="/LaTarta" element={<Cover />} />
        <Route path="/LaTarta/inicio" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
