import AnchorLink from "react-anchor-link-smooth-scroll";
import Logo from "../../assets/logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="pt-8 pb-2">
            <div className="mx-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col justify-center">
                        <div className="logo mx-auto md:mx-0 flex items-center">
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
                            <h3 className="text-base md:text-lg font-bold mb-2">Akses Cepat</h3>
                            <ul className="list-none pl-0">
                                <li className="md:mb-1">
                                    <AnchorLink href="#home" offset="50" className="text-xs md:text-base text-gray-600 hover:text-gray-800">
                                        Home
                                    </AnchorLink>
                                </li>
                                <li className="md:mb-1">
                                    <AnchorLink href="#layanan" offset="120" className="text-xs md:text-base text-gray-600 hover:text-gray-800">
                                        Layanan
                                    </AnchorLink>
                                </li>
                                <li className="md:mb-1">
                                    <AnchorLink href="#dokter" offset="120" className="text-xs md:text-base text-gray-600 hover:text-gray-800">
                                        Dokter
                                    </AnchorLink>
                                </li>
                                <li className="md:mb-1">
                                    <AnchorLink href="#tentang" offset="120" className="text-xs md:text-base text-gray-600 hover:text-gray-800">
                                        Tentang
                                    </AnchorLink>
                                </li>
                                <li className="md:mb-1">
                                    <AnchorLink href="#faqs" offset="250" className="text-xs md:text-base text-gray-600 hover:text-gray-800">
                                        FAQs
                                    </AnchorLink>
                                </li>
                                <li className="md:mb-1">
                                    <AnchorLink href="#tim" offset="120" className="text-xs md:text-base text-gray-600 hover:text-gray-800">
                                        Tim Kami
                                    </AnchorLink>
                                </li>
                                <li className="md:mb-1">
                                    <AnchorLink href="#hubungi" offset="120" className="text-xs md:text-base text-gray-600 hover:text-gray-800">
                                        Hubungi Kami
                                    </AnchorLink>
                                </li>
                            </ul>
                        </div>

                        <div className="kontak">
                            <h3 className="text-base md:text-lg font-bold mb-2">Kontak</h3>
                            <p className="text-sm md:text-base text-gray-600 mb-2">klinikprima@gmail.com</p>
                            <p className="text-sm md:text-base text-gray-600 mb-2">(+62) 824-1114-0002</p>
                            <p className="text-sm md:text-base text-gray-600">Jln. in aja dulu No. 1 Malang</p>
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
