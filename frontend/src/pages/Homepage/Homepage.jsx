/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import swal from 'sweetalert2';
import Dokterfaqs from '../../assets/dokter-faqs.png';
import Dokter from '../../assets/dokter-hero.png';
import Dokterhubungi from '../../assets/dokter-hubungi.png';
import Doktertentang from '../../assets/dokter-tentang.png';
import Anggota1 from '../../assets/tim/asfari.jpg';
import Anggota3 from '../../assets/tim/iqbal.jpg';
import Anggota6 from '../../assets/tim/jizdan.png';
import Anggota5 from '../../assets/tim/kemal.jpg';
import Anggota4 from '../../assets/tim/rian.png';
import Anggota2 from '../../assets/tim/rizqi.jpeg';
import Accordion from '../../components/Accordion/Accordion';
import ProfileCard from '../../components/Card/ProfileCard';
import DocterType from '../../components/DocterList';
import Footer from '../../components/Footer/Footer';
import ClinicServices from '../../components/ServiceList';
import './Style.css';

const Homepage = () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      boxes.forEach((b) => b.classList.remove('active'));
      box.classList.add('active');
    });
  });

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !phone || !type || !message) {
      swal.fire({
        icon: 'warning',
        title: 'Data Belum Lengkap',
        text: 'Harap isi semua kolom sebelum mengirim pesan!',
      });
      return;
    }

    swal.fire({
      icon: 'question',
      title: 'Konfirmasi Kirim Pesan',
      text: 'Apakah Anda yakin ingin mengirim pesan ini?',
      showCancelButton: true,
      confirmButtonText: 'Kirim',
      cancelButtonText: 'Batal',
    }).then((result) => {
      if (result.isConfirmed) {
        const whatsappMessage = `Nama: ${name}%0A%0A` +
                                `Nomor Telepon: ${phone}%0A%0A` +
                                `Kategori: ${type}%0A%0A` +
                                `Pesan: ${message}`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=+6282147083442&text=${whatsappMessage}`;
        window.open(whatsappURL, '_blank');

        setName('');
        setPhone('');
        setType('');
        setMessage('');

        swal.fire({
          title: 'Pesan Terkirim!',
          text: 'Berhasil mengirim pesan!',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
        });
      }
    });
  };

  const [openAccordionId, setOpenAccordionId] = useState(null);
  return (
    <main>
      <section id="home" className="hero flex justify-center">
        <div className="container mx-auto px-4 sm:px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-0">
          <div className="hero-image col-span-1 flex items-end justify-center md:order-1">
            <img src={Dokter} alt="Dokter" className="w-ful" />
          </div>
          <div className="hero-content col-span-1 flex flex-col justify-center">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl md:mb-4 mb-2">
              <span className="text-black">Layanan </span>
              <span className="text-[color:var(--primary)]">Prima </span>
              <span className="text-black">untuk kesehatan anda</span>
            </h1>
            <p className="text-sm sm:text-base md:text-xl">
              Kami selalu berkomitmen untuk memberikan pelayanan kesehatan yang terbaik dan berkualitas demi kesehatan yang bisa anda dapatkan.
            </p>
            <button className="px-4 py-2 bg-[color:var(--primary)]  text-white rounded-md mt-4 text-lg sm:text-xl md:text-2xl transform transition-all duration-300 hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)] hover:border-[color:var(--primary)] hover:border-2 hover:scale-105">
              <AnchorLink className="anchor-link block w-full h-full" offset={100} href="#dokter">
                Temui Dokter Anda
              </AnchorLink>
            </button>
          </div>
        </div>
      </section>

      <section id="layanan" className="layanan mt-10 md:mt-20">
        <div className="sm:mx-8 md:mx-16">
          <div className="container">
            <div className="mb-5">
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Layanan</h1>
              <p className="text-sm md:text-base text-center">Kami selalu memberikan layanan yang terbaik untuk anda</p>
            </div>

            <div className="box-container">
              <ClinicServices />
            </div>
          </div>
        </div>
      </section>

      <section id="dokter" className="dokter mt-10 md:mt-20">
        <div className="sm:mx-8 md:mx-16">
          <div className="mb-5">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Dokter</h1>
            <p className="text-sm md:text-base text-center">Kami memiliki banyak dokter yang sudah berpengalaman di bidangnya</p>
          </div>

          <div className="box-container">
            <DocterType />
          </div>
        </div>
      </section>

      <section id="tentang" className="tentang mt-10 md:mt-20">
        <div className="sm:mx-8 md:mx-16">
          <div className="container">
            <div className="md:mb-10">
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Tentang Kami</h1>
              <p className="text-sm md:text-base text-center">Kami selalu berkomitmen untuk menjadi klinik yang terbaik</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-0">
              <div className="hero-image col-span-1 flex items-end justify-center md:order-1 mb-8 md:mb-4">
                <img src={Doktertentang} alt="Dokter" />
              </div>
              <div className="tentang-content col-span-1 flex flex-col justify-center">
                <div className="tentang-text mb-10 md:mb-8 text-sm md:text-xl">
                  <p>
                    <b>
                      Klinik <span className="text-[color:var(--primary)]">Prima </span>
                    </b>
                    didirikan pada tahun 2020 yang bertempat di <b>Malang</b> dan hingga kini masih eksis dengan konsep klinik <b>modern</b>.
                  </p>
                  <br />
                  <p>
                    Kami sudah dipercayai oleh lebih dari <b>5.000</b> pasien dengan menyediakan lebih dari <b>20</b> Dokter yang berkualitas dan tempat yang luas, nyaman, dan modern.
                  </p>
                </div>

                <div className="mx-auto grid grid-cols-3 gap-4">
                  <div className="box-tentang flex flex-col items-center justify-center">
                    <span className="font-bold text-xl md:text-2xl xl:text-3xl">20+</span>
                    <span className="text-center text-xs md:text-base">Dokter berkualitas</span>
                  </div>
                  <div className="box-tentang flex flex-col items-center justify-center">
                    <span className="font-bold text-xl md:text-2xl xl:text-3xl">100+</span>
                    <span className="text-center text-xs md:text-base">Staff Medis</span>
                  </div>
                  <div className="box-tentang flex flex-col items-center justify-center">
                    <span className="font-bold text-xl md:text-2xl xl:text-3xl">150+</span>
                    <span className="text-center text-xs md:text-base">Kapasitas Pasien</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faqs" className="faqs mt-10 md:mt-20">
        <div className="sm:mx-8 md:mx-16">
          <div className="container">
            <div className="mb-10">
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">FAQs</h1>
              <p className="text-sm md:text-base text-center">Kami selalu menjawab pertanyaan-pertanyaan yang sering muncul</p>
            </div>

            <div className="flex flex-col md:flex-row xl:gap-12">
              <div className="flex-none hero-image flex items-end justify-center mb-4 md:mb-0">
                <img src={Dokterfaqs} alt="Dokter"/>
              </div>

              <div className="flex-1 flex flex-col justify-center">
                <div className="faqs-text space-y-4">
                  <Accordion
                    id={1}
                    title="Bagaimana cara melakukan reservasi?"
                    content="Anda dapat melakukan reservasi dokter melalui website kami dengan mengakses halaman reservasi, memilih dokter yang diinginkan, dan mengisi formulir reservasi sesuai dengan jadwal yang tersedia."
                    openAccordionId={openAccordionId}
                    setOpenAccordionId={setOpenAccordionId}
                  />
                  <Accordion
                    id={2}
                    title="Apakah ada biaya tambahan saat reservasi?"
                    content="Tidak, reservasi dokter melalui website kami tidak dikenakan biaya tambahan. Anda hanya perlu membayar biaya konsultasi atau perawatan medis sesuai dengan tarif yang berlaku."
                    openAccordionId={openAccordionId}
                    setOpenAccordionId={setOpenAccordionId}
                  />
                  <Accordion
                    id={3}
                    title="Bagaimana cara membatalkan reservasi dokter?"
                    content="Anda bisa masuk ke bagian menu reservasi dan klik Batal pada aksi di setiap reservasti anda"
                    openAccordionId={openAccordionId}
                    setOpenAccordionId={setOpenAccordionId}
                  />
                  <Accordion
                    id={4}
                    title="Bagaimana jika ingin komunikasi dengan dokter?"
                    content="Anda bisa menghubungi dokter lewat WhatsApp dengan menekan tombol Hubungi Dokter pada data reservasi anda"
                    openAccordionId={openAccordionId}
                    setOpenAccordionId={setOpenAccordionId}
                  />
                  <Accordion
                    id={5}
                    title="Apakah reservasi tersedia untuk semua layanan?"
                    content="Ya, Anda dapat melakukan reservasi untuk berbagai jenis layanan medis melalui website kami, termasuk konsultasi dokter umum, spesialis, pemeriksaan kesehatan, dan lain sebagainya."
                    openAccordionId={openAccordionId}
                    setOpenAccordionId={setOpenAccordionId}
                  />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      <section id="tim" className="tim mt-10 md:mt-20">
        <div className="sm:mx-8 md:mx-16">
          <div className="container">
            <div className="mb-10">
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Tim Kami</h1>
              <p className="text-sm md:text-base text-center">Kami selalu memberikan pemeliharaan untuk website Klinik Prima</p>
            </div>

            <div className="mr-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-2 gap-y-2 md:gap-x-10 lg:gap-x-32">
              <ProfileCard image={Anggota1}
                name="M. Asfari Alkaromi"
                position="Ketua / Frontend"
                email="asfarialkaromi7902@gmail.com"
                instagram="asfari.7"
                github="asfari7"
              />
              <ProfileCard
                image={Anggota2}
                name="Rizqi Zamzami J"
                position="Frontend"
                email="rizqizamzamij@gmail.com"
                instagram="rizam896"
                github="rizqizamzamijamil"
              />
              <ProfileCard
                image={Anggota3}
                name="Moh. Iqbal Fatoni"
                position="Frontend"
                email="mohiqbalfatoni10@gmail.com"
                instagram="iqbaal_ftn"
                github="iqbalfatoni10"
              />
              <ProfileCard
                image={Anggota4}
                name="Rian Purnomo"
                position="Backend"
                email="rianpurnomo1005@gmail.com"
                instagram="rian_amo"
                github="rianpur"
              />
              <ProfileCard
                image={Anggota5}
                name="Kemal Abdul Aziz"
                position="Backend"
                email="kemalabdulaziz0@gmail.com"
                instagram="kemalabdulaziz_"
                github="kemalabdulaziz"
              />
              <ProfileCard
                image={Anggota6}
                name="Anugrah Jizdan M."
                position="Backend"
                email="jidan20032@gmail.com"
                instagram="anugrahjiz_"
                github="Jizdan"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="hubungi" className="hubungi mt-10 md:mt-20">
        <div className="sm:mx-8 md:mx-16">
          <div className="container">
            <div className="mb-10">
              <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Hubungi Kami</h1>
              <p className="text-sm md:text-base text-center">Kami selalu menerima pesan, saran, dan kritik yang anda berikan</p>
            </div>

            <div className="hubungi-konten grid grid-cols-1 md:grid-cols-2 md:mt-20">
              <div className="col-span-1 flex items-end justify-center mt-5 md:mt-0 md:order-1">
                <img src={Dokterhubungi} alt="Dokter" />
              </div>

              <div className="md:w-full mb-8 md:mb-0">
                <div className="bg-white rounded-3xl border-solid border-2 border-gray-300 p-4 rounded-lg shadow-lg -mt-10 md:-mt-5 md:-mb-5 md:ms-10 relative z-2">
                  <form onSubmit={handleSubmit}>
                    <div className="mb-2 md:mb-4">
                      <label htmlFor="name" className="block text-sm font-bold mb-1">
                        Nama Lengkap
                      </label>
                      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-1 rounded-lg border border-gray-300 text-sm" placeholder="Masukkan nama lengkap" />
                    </div>
                    <div className="mb-2 md:mb-4">
                      <label htmlFor="phone" className="block text-sm font-bold mb-1">
                        Nomor Telepon
                      </label>
                      <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-1 rounded-lg border border-gray-300 text-sm" placeholder="Masukkan nomor telepon" />
                    </div>
                    <div className="mb-2 md:mb-4">
                      <label htmlFor="type" className="block text-sm font-bold mb-1">
                        Jenis Pesan
                      </label>
                      <select id="type" value={type} onChange={(e) => setType(e.target.value)} className="w-full px-3 py-1 rounded-lg border border-gray-300 text-sm">
                        <option value="">Pilih jenis pesan</option>
                        <option value="pesan">Pesan</option>
                        <option value="saran">Saran</option>
                        <option value="kritik">Kritik</option>
                        <option value="permintaan">Permintaan</option>
                      </select>
                    </div>
                    <div className="mb-2 md:mb-4">
                      <label htmlFor="message" className="block text-sm font-bold mb-1">
                        Pesan
                      </label>
                      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full px-3 py-1 rounded-lg border border-gray-300 text-sm" rows="3" placeholder="Ketikkan pesan"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm">
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
      <Footer />
    </main>
  );
};

export default Homepage;
