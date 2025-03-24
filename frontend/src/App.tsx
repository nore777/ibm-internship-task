import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/Home"
import Forecast from "./pages/Forecast"
import { Theme } from '@radix-ui/themes'
import { useAppState } from "./context/StateContext"


function App() {
  const { theme } = useAppState()

  return (
    <Theme appearance={theme}>
      <div className="app-container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/forecast" element={<Forecast />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Theme>
  )
}

export default App
