import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Homepage/Homepage";
import Login from "./pages/Masuk/Login/Login";
import Register from "./pages/Masuk/Register/Register";
import ManageAkunDokter from "./pages/DashboardAdmin/ManageAkunDokter";
import TambahAkunDokter from "./pages/DashboardAdmin/TambahAkunDokter";
import EditAkunDokter from "./pages/DashboardAdmin/EditAkunDokter";
import DasboardPasien from "./pages/Dashboard-pasien/DasboardPasien";
import ListDokter from "./pages/ListDokter";
import DetailDokter from "./pages/DetailDokter";
import AdminLayout from "./pages/DashboardAdmin/AdminLayout";
import PrivateRoute from "./pages/PrivateRoutes";
import DokterSidebar from "./components/DashboardDokter/SidebarDokter";
import DaftarAntrian from "./pages/Dashboard-dokter/DaftarAntrian";
import ReviewDokter from "./pages/Dashboard-dokter/ReviewDokter";
import ProfilDokter from "./pages/Dashboard-dokter/ProfilDokter";
import "./App.css";
import ProfilePasien from "./pages/Dashboard-pasien/ProfilePasien";
import DaftarReservasi from "./pages/Dashboard-pasien/DaftarReservasi";
import DaftarReviewPasien from "./pages/Dashboard-pasien/DaftarReviewPasien";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/list-dokter" element={<ListDokter />} />
          <Route path="/detail-dokter/:userId" element={<DetailDokter />} />
        </Route>
        <Route path="/Login" element={<Login />} />
        <Route path="/Registrasi" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute element={<DasboardPasien />} requiredRole="patient" />
          }
        >
          <Route index element={<DaftarReservasi />} />
          <Route path="review" element={<DaftarReviewPasien />} />
          <Route path="profile-pasien" element={<ProfilePasien />} />
        </Route>

        <Route
          path="/admin"
          element={
            <PrivateRoute element={<AdminLayout />} requiredRole="admin" />
          }
        >
          <Route index element={<ManageAkunDokter />} />
          <Route path="add" element={<TambahAkunDokter />} />
          <Route path="edit/:user_id" element={<EditAkunDokter />} />
        </Route>

        <Route
          path="/dashboard-dokter"
          element={
            <PrivateRoute element={<DokterSidebar />} requiredRole="doctor" />
          }
        >
          <Route index element={<DaftarAntrian />} />
          <Route path="review-dokter" element={<ReviewDokter />} />
          <Route path="profil-dokter" element={<ProfilDokter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
