import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Homepage/Homepage';
import Login from './pages/Masuk/Login/Login';
import Register from './pages/Masuk/Register/Register';
import ManageAkunDokter from './pages/DashboardAdmin/ManageAkunDokter';
import TambahAkunDokter from './pages/DashboardAdmin/TambahAkunDokter';
import EditAkunDokter from './pages/DashboardAdmin/EditAkunDokter';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrasi" element={<Register />} />
        <Route path="/manage-akun-dokter" element={<ManageAkunDokter />} />
        <Route path="/tambah-akun-dokter" element={<TambahAkunDokter />} />
        <Route path="/edit-akun-dokter" element={<EditAkunDokter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
