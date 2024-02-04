import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import FormPage from './pages/FormPage'
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      {/* <LandingPage/>
    <HomePage/>
    <AuthPage/> */}
      {/* <FormPage/> */}
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/home" element={<FormPage/>} />
          <Route exact path="/dashboard" element={<DashboardPage/>} />
        </Routes>
      </Router>
    </>

  )
}

export default App
