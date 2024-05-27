import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Homepage/Homepage';
import Login from './pages/Masuk/Login/Login';
import Register from './pages/Masuk/Register/Register';
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
