/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Dokterfaqs from '../../assets/dokter-faqs.png';
import Dokter from '../../assets/dokter-hero.png';
import Dokterhubungi from '../../assets/dokter-hubungi.png';
import Doktertentang from '../../assets/dokter-tentang.png';
import Accordion from '../../components/Accordion/Accordion';
import Footer from '../../components/Footer/Footer';
import ClinicServices from '../../components/ServiceList';
import DocterType from '../../components/DocterList';
import './Style.css';

const Homepage = () => {
  const boxes = document.querySelectorAll('.box');
  boxes.forEach((box) => {
    box.addEventListener('click', () => {
      boxes.forEach((b) => b.classList.remove('active'));
      box.classList.add('active');
    });
  });

  const [openAccordionId, setOpenAccordionId] = useState(null);
  return (
    <main>
      <section id="home" className="hero flex justify-center">
        <div className="mx-4 sm:mx-8 md:mx-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="hero-image col-span-1 flex items-end justify-center md:order-1">
            <img src={Dokter} alt="Dokter" />
          </div>

          <div className="hero-content col-span-1 flex flex-col justify-center">
            <h1 className="font-bold">
              <span className="text-black">Layanan </span>
              <span className="text-[color:var(--primary)]">Prima </span>
              <span className="text-black">untuk kesehatan anda</span>
            </h1>
            <p>Kami selalu berkomitmen untuk memberikan pelayanan kesehatan yang terbaik dan berkualitas demi kesehatan yang bisa anda dapatkan.</p>
            <button className="px-4 py-2 bg-[color:var(--primary)] text-white rounded-md mt-4">Temui Dokter Anda</button>
          </div>
        </div>
      </section>

      <section id="layanan" className="layanan mt-20">
        <div className="sm:mx-8 md:mx-16">
          <div className="mb-5">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Layanan</h1>
            <p className="text-center">Kami selalu memberikan layanan yang terbaik untuk anda</p>
          </div>

          <div className="box-container overflow-x-auto">
            <ClinicServices />
          </div>
        </div>
      </section>

      <section id="dokter" className="dokter mt-20">
        <div className="sm:mx-8 md:mx-16">
          <div className="mb-10">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Dokter</h1>
            <p className="text-center">Kami memiliki banyak dokter yang sudah berpengalaman di bidangnya</p>
          </div>

          <div className="box-container overflow-x-auto">
            <DocterType />
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
              <img src={Doktertentang} alt="Dokter" />
            </div>

            <div className="tentang-content col-span-1 flex flex-col justify-center">
              <div className="tentang-text mb-8">
                <p>
                  <b>
                    Klinik <span className="text-[color:var(--primary)]">Prima </span>
                  </b>
                  didirikan pada tahun 2020 yang bertempat di <b>Namex</b> dan hingga kini masih eksis dengan konsep klinik <b>modern</b>.
                </p>
                <br />
                <p>
                  Kami sudah dipercayai oleh lebih dari <b>5.000</b> pasien dengan menyediakan lebih dari <b>20</b> Dokter yang berkualitas dan tempat yang luas, nyaman, dan modern.
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

          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="hero-image col-span-1 flex items-end justify-center">
              <img src={Dokterfaqs} alt="Dokter" />
            </div>

            <div className="col-span-1 flex flex-col justify-center">
              <div className="faqs-text space-y-4">
                <Accordion
                  id={1}
                  title="Bagaimana cara melakukan reservasi secara online?"
                  content="Anda dapat melakukan reservasi dokter melalui website kami dengan mengakses halaman reservasi, memilih dokter yang diinginkan, dan mengisi formulir reservasi sesuai dengan jadwal yang tersedia."
                  openAccordionId={openAccordionId}
                  setOpenAccordionId={setOpenAccordionId}
                />
                <Accordion
                  id={2}
                  title="Apakah ada biaya tambahan untuk melakukan reservasi?"
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
                  title="Bagaimana jika ingin berkomunikasi dengan dokter?"
                  content="Anda bisa menghubungi dokter lewat WhatsApp dengan menekan tombol Hubungi Dokter pada data reservasi anda"
                  openAccordionId={openAccordionId}
                  setOpenAccordionId={setOpenAccordionId}
                />
                <Accordion
                  id={5}
                  title="Apakah reservasi ini tersedia untuk semua jenis layanan medis?"
                  content="Ya, Anda dapat melakukan reservasi untuk berbagai jenis layanan medis melalui website kami, termasuk konsultasi dokter umum, spesialis, pemeriksaan kesehatan, dan lain sebagainya."
                  openAccordionId={openAccordionId}
                  setOpenAccordionId={setOpenAccordionId}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="hubungi" className="hubungi mt-20 flex items-center">
        <div className="container mx-auto px-4 md:px-0">
          <div className="mb-10">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold">Hubungi Kami</h1>
            <p className="text-center">Kami selalu menerima pesan, saran, dan kritik yang anda berikan</p>
          </div>

          <div className="hubungi-konten rounded-lg">
            <div className="konten flex flex-col md:flex-row ">
              <div className="md:w-1/2 mb-8 md:mb-0 p-8">
                <div className="bg-white p-8 rounded-lg shadow-lg -mt-20 -mb-20 relative z-10">
                  <form>
                    <div className="mb-2">
                      <label htmlFor="name" className="block font-bold mb-2">
                        Nama Lengkap
                      </label>
                      <input type="text" id="name" className="w-full px-4 py-2 rounded-lg border border-gray-300" placeholder="Masukkan nama lengkap" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="phone" className="block font-bold mb-2">
                        Nomor Telepon
                      </label>
                      <input type="tel" id="phone" className="w-full px-4 py-2 rounded-lg border border-gray-300" placeholder="Masukkan nomor telepon" />
                    </div>
                    <div className="mb-2">
                      <label htmlFor="type" className="block font-bold mb-2">
                        Jenis Pesan
                      </label>
                      <select id="type" className="w-full px-4 py-2 rounded-lg border border-gray-300">
                        <option value="">Pilih jenis pesan</option>
                        <option value="pesan">Pesan</option>
                        <option value="saran">Saran</option>
                        <option value="kritik">Kritik</option>
                        <option value="permintaan">Permintaan</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="message" className="block font-bold mb-2">
                        Pesan
                      </label>
                      <textarea id="message" className="w-full px-4 py-2 rounded-lg border border-gray-300" rows="4" placeholder="Ketikkan pesan"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>

              <div className="flex items-end mx-auto">
                <img src={Dokterhubungi} alt="Dokter" />
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
