import { Route, Routes } from "react-router-dom"
import Cover from "./pages/Cover"


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Cover />} />
      </Routes>
    </>
  )
}

export default App
