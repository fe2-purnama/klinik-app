import { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import './Style.css';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const [isHome, setIsHome] = useState(location.pathname === '/');
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        setIsHome(location.pathname === '/');
    }, [location]);

    useEffect(() => {
        const handleScroll = () => {
        const sections = ['home', 'layanan', 'dokter', 'tentang', 'faqs', 'hubungi'];
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

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

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
                <li className={activeSection === 'home' ? 'active' : ''}>
                {isHome ? (
                    <AnchorLink className="anchor-link" offset={80} href="#home">
                    Home
                    </AnchorLink>
                ) : (
                    <Link to="/">Home</Link>
                )}
                </li>
                <li className={activeSection === 'layanan' ? 'active' : ''}>
                <AnchorLink className="anchor-link" offset={120} href="#layanan">
                    Layanan
                </AnchorLink>
                </li>
                <li className={activeSection === 'dokter' ? 'active' : ''}>
                <AnchorLink className="anchor-link" offset={120} href="#dokter">
                    Dokter
                </AnchorLink>
                </li>
                <li className={activeSection === 'tentang' ? 'active' : ''}>
                <AnchorLink className="anchor-link" offset={120} href="#tentang">
                    Tentang
                </AnchorLink>
                </li>
                <li className={activeSection === 'faqs' ? 'active' : ''}>
                <AnchorLink className="anchor-link" offset={120} href="#faqs">
                    FAQs
                </AnchorLink>
                </li>
                <li className={activeSection === 'hubungi' ? 'active' : ''}>
                <AnchorLink className="anchor-link" offset={120} href="#hubungi">
                    Hubungi
                </AnchorLink>
                </li>
                <li>
                <Link className="btn-login" to="/Login">
                    Masuk
                </Link>
                </li>
            </ul>

            <button className="lg:hidden flex items-center" onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            </div>
        </nav>

        {/* Sidebar */}
        <div className={`sidebar fixed top-0 right-0 w-64 h-full bg-[color:var(--secondary)] shadow-lg transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-20`}>
            <button className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition-colors duration-200" onClick={() => setIsOpen(false)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
            <ul className="flex flex-col items-start mt-20 space-y-3">
                <li className={`w-56 py-2 px-6 mx-3 rounded-xl ${activeSection === 'home' ? 'bg-[color:var(--primary)] text-white' : 'hover:bg-[color:var(--tertiary)] transition-colors duration-200'}`}>
                {isHome ? (
                    <AnchorLink className="anchor-link block w-full h-full" offset={80} href="#home">
                    Home
                    </AnchorLink>
                ) : (
                    <Link className="block w-full h-full" to="/">Home</Link>
                )}
                </li>
                <li className={`w-56 py-2 px-6 mx-3 rounded-xl ${activeSection === 'layanan' ? 'bg-[color:var(--primary)] text-white' : 'hover:bg-[color:var(--tertiary)] transition-colors duration-200'}`}>
                    <AnchorLink className="anchor-link block w-full h-full" offset={120} href="#layanan">
                        Layanan
                    </AnchorLink>
                </li>
                <li className={`w-56 py-2 px-6 mx-3 rounded-xl ${activeSection === 'dokter' ? 'bg-[color:var(--primary)] text-white' : 'hover:bg-[color:var(--tertiary)] transition-colors duration-200'}`}>
                    <AnchorLink className="anchor-link block w-full h-full" offset={120} href="#dokter">
                        Dokter
                    </AnchorLink>
                </li>
                <li className={`w-56 py-2 px-6 mx-3 rounded-xl ${activeSection === 'tentang' ? 'bg-[color:var(--primary)] text-white' : 'hover:bg-[color:var(--tertiary)] transition-colors duration-200'}`}>
                    <AnchorLink className="anchor-link block w-full h-full" offset={120} href="#tentang">
                        Tentang
                    </AnchorLink>
                </li>
                <li className={`w-56 py-2 px-6 mx-3 rounded-xl ${activeSection === 'faqs' ? 'bg-[color:var(--primary)] text-white' : 'hover:bg-[color:var(--tertiary)] transition-colors duration-200'}`}>
                    <AnchorLink className="anchor-link block w-full h-full" offset={120} href="#faqs">
                        FAQs
                    </AnchorLink>
                </li>
                <li className={`w-56 py-2 px-6 mx-3 rounded-xl ${activeSection === 'hubungi' ? 'bg-[color:var(--primary)] text-white' : 'hover:bg-[color:var(--tertiary)] transition-colors duration-200'}`}>
                    <AnchorLink className="anchor-link block w-full h-full" offset={120} href="#hubungi">
                        Hubungi
                    </AnchorLink>
                </li>
                <li className="w-56 pt-16 mx-3">
                    <Link className="btn-login bg-[color:var(--secondary)] text-[color:var(--primary)] block w-full h-full hover:bg-[color:var(--primary)] hover:text-white" to="/Login" onClick={() => setIsOpen(false)}>
                        Masuk
                    </Link>
                </li>
            </ul>
        </div>

        <Outlet />
        </>
    );
};

export default Header;
