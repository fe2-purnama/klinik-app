import axios from 'axios';
import React, { useEffect, useState } from 'react';
import swal from 'sweetalert2';
import Modal from '../../components/Modal/Modal';

const DoctorProfile = ({ profile }) => (
    <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-2xl font-medium text-gray-700 mb-4">Profil Dokter</h3>
        {Object.entries(profile).map(([key, value], index) => (
            key !== 'password' && (
                <div key={index} className="py-2">
                    <p className="text-xl font-semibold text-gray-600">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                    <p className="text-lg text-gray-600">{key === 'gender' ? (value === 'Laki-laki' ? 'Laki-laki' : 'Perempuan') : value}</p>
                </div>
            )
        ))}
    </div>
);

const getToken = () => localStorage.getItem('token');

const ProfilDokter = () => {
    const [profile, setProfile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        phone_number: '',
        email: '',
        specialization: '',
        experience: '',
        password: '',
        confirm_password: '',
    });

    const [userId, setUserId] = useState(null);
    const [email, setEmail] = useState('');
    const [doctorId, setDoctorId] = useState(null);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            const token = getToken();
            const response = await axios.get('http://localhost:5000/api/v1/doctor/profile', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const { email, doctor, user_id } = response.data;

            const doctorData = doctor[0];

            if (!doctorData) {
                console.error('Failed to fetch profile data:', response.data);
                return;
            }

            setFormData({
                name: doctorData.name,
                gender: doctorData.gender,
                phone_number: doctorData.phone_number,
                email,
                specialization: doctorData.specialization,
                experience: doctorData.experience,
                password: '',
                confirm_password: '',
            });

            const formattedProfile = {
                name: doctorData.name,
                email,
                gender: doctorData.gender,
                phone_number: doctorData.phone_number,
                specialization: doctorData.specialization,
                experience: doctorData.experience,
            };

            setProfile(formattedProfile);
            setUserId(user_id);
            setEmail(email);
            setDoctorId(doctorData.doctor_id);
        } catch (error) {
            console.error('Failed to fetch profile:', error);
        }
    };

    const handleSave = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleConfirmModal = async () => {
        setIsModalOpen(false);
        try {
            const token = getToken();

            const updatedData = {
                user_id: userId,
                doctor_id: doctorId,
                name: formData.name,
                gender: formData.gender,
                phone_number: formData.phone_number,
                specialization: formData.specialization,
                experience: parseInt(formData.experience),
                email: formData.email,
                password: formData.password,
                confirm_password: formData.confirm_password
            };
            console.log('Data yang diperbarui:', updatedData);

            const response = await axios.patch('http://localhost:5000/api/v1/doctor/update', updatedData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            console.log('Data respons:', response.data);
            
            swal.fire({
                title: 'Tersimpan!',
                text: 'Berhasil ubah profil!',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false,
            });

            fetchProfile();
        } catch (error) {
            swal.fire({
                title: 'Gagal!',
                text: 'Terjadi kesalahan saat ubah profil!',
                icon: 'error',
                timer: 2000,
                showConfirmButton: false,
            });
            console.error('Gagal memperbarui profil:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container px-6 py-8 mx-auto">
                <h2 className='text-3xl font-medium text-gray-700'>Profil</h2>
                <div className="flex flex-col md:flex-row md:space-x-6 bg-gray-200 py-8">
                    <div className="flex-1">
                        <DoctorProfile profile={profile} />
                    </div>
                    <div className="flex-1 bg-white shadow-md rounded-lg p-6 mt-6 md:mt-0">
                        <h3 className="text-2xl font-medium text-gray-700 mb-4">Ubah Profil</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                <div className="col-span-1">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Nama Dokter
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Masukkan nama lengkap"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                                        Jenis Kelamin
                                    </label>
                                    <select
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="Laki-laki">Laki-laki</option>
                                        <option value="Perempuan">Perempuan</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Ubah password disini"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                        Konfirmasi Password
                                    </label>
                                    <input
                                        type="password"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        placeholder="Masukkan ulang password"
                                        value={formData.confirm_password}
                                        onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value })}
                                        className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                                            formData.confirm_password !== '' && formData.confirm_password !== formData.password ? 'border-red-500' : ''
                                        }`}
                                    />
                                    {formData.confirm_password !== '' && formData.confirm_password !== formData.password && (
                                        <p className="mt-2 text-sm text-red-600">Password tidak cocok.</p>
                                    )}
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Nomor Handphone
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="Masukkan nomor handphone"
                                        value={formData.phone_number}
                                        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Masukkan email anda"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="specialist" className="block text-sm font-medium text-gray-700">
                                        Spesialis
                                    </label>
                                    <select
                                        id="specialist"
                                        name="specialist"
                                        value={formData.specialization}
                                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Pilih Spesialis</option>
                                        <option value="Umum">Umum</option>
                                        <option value="Gigi">Gigi</option>
                                        <option value="Jantung">Jantung</option>
                                        <option value="THT">THT</option>
                                        <option value="Paru-Paru">Paru-Paru</option>
                                        <option value="Mata">Mata</option>
                                        <option value="Kesehatan Anak">Kesehatan Anak</option>
                                    </select>
                                </div>
                                <div className="col-span-1">
                                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                                        Pengalaman
                                    </label>
                                    <div className="relative rounded-md shadow-sm">
                                        <input
                                            type="number"
                                            name="experience"
                                            id="experience"
                                            placeholder="Masukkan pengalaman"
                                            value={formData.experience}
                                            onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <span className="text-gray-500 sm:text-sm">tahun</span>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            <div className="mt-6">
                                <button
                                    type="submit"
                                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[color:var(--primary)] hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={handleSave}
                                >
                                    Simpan
                                </button>
                            </div>
                        </form>
                    </div>
                    <Modal
                        isOpen={isModalOpen}
                        handleClose={handleCloseModal}
                        handleConfirm={handleConfirmModal}
                        title="Konfirmasi Simpan Profil"
                        message="Apakah Anda yakin menyimpan perubahan Profil?"
                        confirmButton="bg-green-600 hover:bg-green-800 focus:ring-green-500"
                        cancelButton="hover:bg-gray-300 focus:ring-red-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProfilDokter;
