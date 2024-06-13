import "./Footer.css";
import Logo from "../../assets/logo.png";

const Footer = () => {
    const menuItems = [
        'Home',
        'Layanan',
        'Dokter',
        'Tentang',
        'FAQs',
        'Hubungi Kami',
    ];

    return (
        <footer className="pt-8 pb-2">
            <div className="mx-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <div className="logo flex items-center">
                            <img src={Logo} alt="Klinik Prima" className="h-12" />
                            <h1 className="sm:text:sm md:text-lg lg:text-xl xl:text-2xl font-bold ml-2">
                                <span className="text-[color:var(--primary)]">Klinik </span>
                                <span className="text-[color:var(--other)]">Prima</span>
                            </h1>
                        </div>
                        <p className="sm:text:sm md:text-lg lg:text-xl xl:text-2xl font-bold ml-2">
                            Layanan <span className="text-[color:var(--primary)]">Prima</span> untuk kesehatan anda</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="akses-cepat">
                            <h3 className="text-lg font-bold mb-2">Akses Cepat</h3>
                            <ul className="list-none pl-0">
                            {menuItems.map((item, index) => (
                                <li key={index} className="mb-2">
                                <a href="#" className="text-gray-600 hover:text-gray-800">
                                    {item}
                                </a>
                                </li>
                            ))}
                            </ul>
                        </div>

                        <div className="kontak">
                            <h3 className="text-lg font-bold mb-2">Kontak</h3>
                            <p className="text-gray-600 mb-2">klinikprima@gmail.com</p>
                            <p className="text-gray-600 mb-2">(+62) 824-1114-0002</p>
                            <p className="text-gray-600">Jln. in aja dulu No. 1 Malang</p>
                        </div>
                    </div>
                    
                </div>

                <div className="mt-8 border-t border-gray-300 pt-4">
                    <p className="text-gray-600 text-sm font-medium">
                        Klinik Prima 2024. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;