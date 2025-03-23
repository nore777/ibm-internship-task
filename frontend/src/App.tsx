import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/Home"

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/search" Component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
