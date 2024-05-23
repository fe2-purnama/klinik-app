import "./Style.css";
import Dokter from "../../assets/dokter-hero.png";
import Doktertentang from "../../assets/dokter-tentang.png";
import Box from '../../components/Box/Box';
import Footer from "../../components/Footer/Footer";


const Homepage = () => {
    const boxLayanan = [
        { icon: 'user-md', text: 'Konsultasi Dokter', isActive: true },
        { icon: 'stethoscope', text: 'Pemeriksaan Kesehatan', isActive: false },
        { icon: 'pills', text: 'Pembelian Obat', isActive: false },
        { icon: 'ambulance', text: 'Ambulance', isActive: false },
        { icon: 'heartbeat', text: 'Pemeriksaan Jantung', isActive: false },
        { icon: 'circle-chevron-right', text: 'Layanan Lainnya', isActive: false },
    ];

    const boxDokter = [
        { icon: 'child', text: 'Kesehatan Anak', isActive: true },
        { icon: 'lungs', text: 'Paru-paru', isActive: false },
        { icon: 'stomach', text: 'Lambung', isActive: false },
        { icon: 'eye', text: 'Mata', isActive: false },
        { icon: 'heartbeat', text: 'Jantung', isActive: false },
        { icon: 'circle-chevron-right', text: 'Spesialisasi Lainnya', isActive: false },
    ];
    
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('click', () => {
        boxes.forEach(b => b.classList.remove('active'));
        box.classList.add('active');
        });
    });
    return (
        <main>
            <section id="home" className="hero flex justify-center">
                <div className="mx-4 sm:mx-8 md:mx-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="hero-image col-span-1 flex items-end justify-center md:order-1">
                        <img src={Dokter} alt="Dokter"/>
                    </div>

                    <div className="hero-content col-span-1 flex flex-col justify-center">
                        <h1 className="font-bold">
                            <span className="text-black">Layanan </span>
                            <span className="text-[color:var(--primary)]">Prima </span>
                            <span className="text-black">untuk kesehatan anda</span>
                        </h1>
                        <p>
                            Kami selalu berkomitmen untuk memberikan pelayanan kesehatan yang
                            terbaik dan berkualitas demi kesehatan yang bisa anda dapatkan.
                        </p>
                        <button className="px-4 py-2 bg-[color:var(--primary)] text-white rounded-md mt-4">
                            Temui Dokter Anda
                        </button>
                    </div>
                </div>
            </section>

            <section id="layanan" className="layanan mt-20">
                <div className="sm:mx-8 md:mx-16">
                    <div className="mb-10">
                        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Layanan</h1>
                        <p className="text-center">Kami selalu memberikan layanan yang terbaik untuk anda</p>
                    </div>
                    
                    <div className="box-container flex justify-center items-center mt-8">
                        {boxLayanan.map((data, index) => (
                            <Box key={index} icon={data.icon} text={data.text} isActive={data.isActive} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="dokter" className="dokter mt-20">
                <div className="sm:mx-8 md:mx-16">
                    <div className="mb-10">
                        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Dokter</h1>
                        <p className="text-center">Kami memiliki banyak dokter yang sudah berpengalaman di bidangnya</p>
                    </div>
                    
                    <div className="box-container flex justify-center items-center mt-8">
                        {boxDokter.map((data, index) => (
                            <Box key={index} icon={data.icon} text={data.text} isActive={data.isActive} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="tentang" className="tentang mt-20">
                <div className="sm:mx-8 md:mx-16">
                    <div className="mb-16">
                        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Tentang Kami</h1>
                        <p className="text-center">Kami selalu berkomitmen untuk menjadi klinik yang terbaik</p>
                    </div>
                    
                    {/* <h2 className="text-md sm:text-xl md:text-2xl font-bold mb-5">Klinik <span className="text-[color:var(--primary)]">Prima</span> selalu berusaha menjadi yang terbaik</h2> */}

                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="hero-image col-span-1 flex items-end justify-center md:order-1">
                            <img src={Doktertentang} alt="Dokter"/>
                        </div>

                        <div className="tentang-content col-span-1 flex flex-col justify-center">
                            <div className="tentang-text mb-8">
                                <p>
                                    <b>Klinik <span className="text-[color:var(--primary)]">Prima </span></b>
                                    didirikan pada tahun 2020 yang bertempat di <b>Namex</b> dan
                                    hingga kini masih eksis dengan konsep klinik <b>modern</b>.
                                </p>
                                <br />
                                <p>
                                    Kami sudah dipercayai oleh lebih dari <b>5.000</b> pasien dengan menyediakan
                                    lebih dari <b>20</b> Dokter yang berkualitas dan tempat yang luas, nyaman, dan modern.
                                </p>
                            </div>
                            
                            <div className="flex justify-center gap-10">
                                <div className="box box-tentang flex flex-col items-center justify-center">
                                    <span className="font-bold text-3xl">20+</span>
                                    <span className="text-center">Dokter berkualitas</span>
                                </div>
                                <div className="box box-tentang flex flex-col items-center justify-center">
                                    <span className="font-bold text-3xl">100+</span>
                                    <span className="text-center">Staff Medis</span>
                                </div>
                                <div className="box box-tentang flex flex-col items-center justify-center">
                                    <span className="font-bold text-3xl">150+</span>
                                    <span className="text-center">Kapasitas Pasien</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="faqs" className="faqs mt-20">
                <div className="sm:mx-8 md:mx-16">
                    <div className="mb-10">
                        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">FAQs</h1>
                        <p className="text-center">Kami selalu menjawab pertanyaan-pertanyaan yang sering muncul</p>
                    </div>
                    
                </div>

            </section>

            <section id="hubungi" className="hubungi mt-20">
                <div className="sm:mx-8 md:mx-16">
                    <div className="mb-10">
                        <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Hubungi Kami</h1>
                        <p className="text-center">Kami selalu menerima pesan, saran, dan kritik yang anda berikan</p>
                    </div>

                </div>

            </section>

            <Footer />
        </main>
    );
};

export default Homepage;