import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Homepage/Homepage";
import Login from "./pages/Masuk/Login/Login";
import DasboardPasien from "./pages/DasboardPasien";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/dasboard" element={<DasboardPasien />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
