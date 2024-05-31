import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Homepage/Homepage';
import Login from './pages/Masuk/Login/Login';
import Register from './pages/Masuk/Register/Register';
import DasboardPasien from './pages/DasboardPasien';
import ListDokter from './pages/ListDokter';
import DoctorSidebar from './pages/Dashboard-dokter/Sidebar/SidebarDokter';
import DokterDashboard from './pages/Dashboard-dokter/DashboardDokter';
import DaftarAntrian from './pages/Dashboard-dokter/DaftarAntrian';
import './App.css';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<DasboardPasien />} />
          <Route path="/list-dokter" element={<ListDokter />} />
        </Route>
        
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrasi" element={<Register />} />

        <Route path="/dashboard-dokter" element={<DoctorSidebar />}>
          <Route index element={<DokterDashboard />} />
          <Route path="daftar-antrian" element={<DaftarAntrian />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
