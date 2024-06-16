import { useEffect, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Style.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === "/");
  const [activeSection, setActiveSection] = useState("home");
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "layanan",
        "dokter",
        "tentang",
        "faqs",
        "hubungi",
        "tim",
      ];
      const halfWindowHeight = window.innerHeight / 2;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < halfWindowHeight && rect.bottom > halfWindowHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/Login");
  };

  const handleLogoutClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleConfirmLogout = () => {
    handleLogout();
    handleModalClose();
  };

  return (
    <>
      <nav className="sticky top-0 w-full">
        <div className="mx-4 md:mx-16 flex justify-between items-center py-0">
          {/* Logo */}
          <div className="logo flex items-center">
            <img src={Logo} alt="Klinik Prima" className="h-12" />
            <h1 className="sm:text:sm md:text-lg lg:text-xl xl:text-2xl font-bold ml-2">
              <span className="text-[color:var(--primary)]">Klinik </span>
              <span className="text-[color:var(--other)]">Prima</span>
            </h1>
          </div>

          {/* Menu */}
          <ul className="nav-links hidden lg:flex space-x-8">
            <li className={activeSection === "home" ? "active" : ""}>
              {isHome ? (
                <AnchorLink className="anchor-link" offset={80} href="#home">
                  Beranda
                </AnchorLink>
              ) : (
                <Link to="/">Beranda</Link>
              )}
            </li>
            <li className={activeSection === "layanan" ? "active" : ""}>
              <AnchorLink className="anchor-link" offset={120} href="#layanan">
                Layanan
              </AnchorLink>
            </li>
            <li className={activeSection === "dokter" ? "active" : ""}>
              <AnchorLink className="anchor-link" offset={120} href="#dokter">
                Dokter
              </AnchorLink>
            </li>
            <li className={activeSection === "tentang" ? "active" : ""}>
              <AnchorLink className="anchor-link" offset={120} href="#tentang">
                Tentang
              </AnchorLink>
            </li>
            <li className={activeSection === "faqs" ? "active" : ""}>
              <AnchorLink className="anchor-link" offset={120} href="#faqs">
                FAQs
              </AnchorLink>
            </li>
            <li className={activeSection === "tim" ? "active" : ""}>
              <AnchorLink className="anchor-link" offset={120} href="#tim">
                Tim
              </AnchorLink>
            </li>
            <li className={activeSection === "hubungi" ? "active" : ""}>
              <AnchorLink className="anchor-link" offset={120} href="#hubungi">
                Hubungi
              </AnchorLink>
            </li>
            <li>
              {isLoggedIn ? (
                <Link className="btn-logout" to="/dashboard">
                  Dashboard
                </Link>
              ) : (
                <Link className="btn-login" to="/Login">
                  Masuk
                </Link>
              )}
            </li>
          </ul>

          <button
            className="lg:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`sidebar fixed top-0 right-0 w-64 h-full bg-[color:var(--secondary)] shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-20`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-colors duration-200"
          onClick={() => setIsOpen(false)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <ul className="flex flex-col items-start mt-20 space-y-3">
          <li
            className={`w-56 py-2 px-6 mx-3 rounded-xl ${
              activeSection === "home"
                ? "bg-[color:var(--primary)] text-white"
                : "hover:bg-[color:var(--tertiary)] transition-colors duration-200"
            }`}
          >
            {isHome ? (
              <AnchorLink
                className="anchor-link block w-full h-full"
                offset={80}
                href="#home"
              >
                Beranda
              </AnchorLink>
            ) : (
              <Link className="block w-full h-full" to="/">
                Beranda
              </Link>
            )}
          </li>
          <li
            className={`w-56 py-2 px-6 mx-3 rounded-xl ${
              activeSection === "layanan"
                ? "bg-[color:var(--primary)] text-white"
                : "hover:bg-[color:var(--tertiary)] transition-colors duration-200"
            }`}
          >
            <AnchorLink
              className="anchor-link block w-full h-full"
              offset={100}
              href="#layanan"
            >
              Layanan
            </AnchorLink>
          </li>
          <li
            className={`w-56 py-2 px-6 mx-3 rounded-xl ${
              activeSection === "dokter"
                ? "bg-[color:var(--primary)] text-white"
                : "hover:bg-[color:var(--tertiary)] transition-colors duration-200"
            }`}
          >
            <AnchorLink
              className="anchor-link block w-full h-full"
              offset={100}
              href="#dokter"
            >
              Dokter
            </AnchorLink>
          </li>
          <li
            className={`w-56 py-2 px-6 mx-3 rounded-xl ${
              activeSection === "tentang"
                ? "bg-[color:var(--primary)] text-white"
                : "hover:bg-[color:var(--tertiary)] transition-colors duration-200"
            }`}
          >
            <AnchorLink
              className="anchor-link block w-full h-full"
              offset={100}
              href="#tentang"
            >
              Tentang
            </AnchorLink>
          </li>
          <li
            className={`w-56 py-2 px-6 mx-3 rounded-xl ${
              activeSection === "faqs"
                ? "bg-[color:var(--primary)] text-white"
                : "hover:bg-[color:var(--tertiary)] transition-colors duration-200"
            }`}
          >
            <AnchorLink
              className="anchor-link block w-full h-full"
              offset={100}
              href="#faqs"
            >
              FAQs
            </AnchorLink>
          </li>
          <li
            className={`w-56 py-2 px-6 mx-3 rounded-xl ${
              activeSection === "tim"
                ? "bg-[color:var(--primary)] text-white"
                : "hover:bg-[color:var(--tertiary)] transition-colors duration-200"
            }`}
          >
            <AnchorLink
              className="anchor-link block w-full h-full"
              offset={100}
              href="#tim"
            >
              Tim
            </AnchorLink>
          </li>
          <li
            className={`w-56 py-2 px-6 mx-3 rounded-xl ${
              activeSection === "hubungi"
                ? "bg-[color:var(--primary)] text-white"
                : "hover:bg-[color:var(--tertiary)] transition-colors duration-200"
            }`}
          >
            <AnchorLink
              className="anchor-link block w-full h-full"
              offset={100}
              href="#hubungi"
            >
              Hubungi
            </AnchorLink>
          </li>

          {isLoggedIn && (
            <ul>
              <hr />
              <li className="w-56 py-3 px-6 mx-3 rounded-xl">
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          )}
          <li className="w-56 pt-16 mx-3">
            {isLoggedIn ? (
              <button
                className="btn-logout bg-[color:var(--secondary)] text-[color:var(--primary)] block w-full h-full hover:bg-[color:var(--primary)] hover:text-white"
                onClick={handleLogoutClick}
              >
                Keluar
              </button>
            ) : (
              <Link
                className="btn-login bg-[color:var(--secondary)] text-[color:var(--primary)] block w-full h-full hover:bg-[color:var(--primary)] hover:text-white"
                to="/Login"
                onClick={() => setIsOpen(false)}
              >
                Masuk
              </Link>
            )}
          </li>
        </ul>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30">
          <div className="bg-white rounded-lg p-6 w-80">
            <h2 className="text-lg font-bold mb-4">Konfirmasi Logout</h2>
            <p className="mb-4">Apakah Anda yakin ingin keluar?</p>
            <div className="flex justify-end space-x-2">
              <button
                className="px-4 py-2 bg-gray-300 rounded"
                onClick={handleModalClose}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded"
                onClick={handleConfirmLogout}
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      <Outlet />
    </>
  );
};

export default Header;
