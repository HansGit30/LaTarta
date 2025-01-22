import { Route, Routes } from "react-router-dom"
import Cover from "./pages/Cover"


function App() {
  return (
    <>
      <Routes>
        <Route path="/La_Tarta" element={<Cover />} />
      </Routes>
    </>
  )
}

export default App
