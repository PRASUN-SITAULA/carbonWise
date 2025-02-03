import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import FormPage from './pages/FormPage'
import DashboardPage from "./pages/DashboardPage";
import { DashboardPageProvider } from "./utils/DashboardDataProvider";

function App() {
  return (
    <>
      {/* <LandingPage/>
    <HomePage/>
    <AuthPage/> */}
      {/* <FormPage/> */}
      <DashboardPageProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/home" element={<FormPage />} />
            <Route exact path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </Router>
      </DashboardPageProvider>
    </>

  )
}

export default App
