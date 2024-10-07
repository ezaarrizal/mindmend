import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginDokter from "./view/LoginDokter";
import RegisDokter from './view/RegisterDokter';
import NavbarLanding from './view/NavbarLanding';
import LandingPage from './view/LandingPage';
import RegisPasien from './view/RegisterPasien';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/LoginDokter" element={<LoginDokter />}>
        </Route>
        <Route path="/regisdokter" element={<RegisDokter />}>
        </Route>
        <Route path='/Navbar1' element={<NavbarLanding />}></Route>
        <Route path='/' element={<LandingPage />}></Route>
        <Route path='/regispasien' element={<RegisPasien />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
