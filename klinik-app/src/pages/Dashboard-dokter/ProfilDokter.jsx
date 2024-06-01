import React, { useState } from 'react';
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

const ProfilDokter = () => {
    const initialProfile = {
        name: 'Dr. Eka Prasetyo, Sp.JP',
        gender: 'Laki-laki',
        password: 'dokter123',
        phone: '082111222333',
        specialist: 'Jantung',
        experience: 10,
    };

    const [profile, setProfile] = useState(initialProfile);
    const [tempProfile, setTempProfile] = useState(initialProfile);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSave = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = (confirm) => {
        setIsModalOpen(false);
        if (confirm) {
            setProfile(tempProfile);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

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
                                        value={tempProfile.name}
                                        onChange={(e) => setTempProfile({ ...tempProfile, name: e.target.value })}
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
                                        value={tempProfile.gender}
                                        onChange={(e) => setTempProfile({ ...tempProfile, gender: e.target.value })}
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
                                        value={tempProfile.password}
                                        onChange={(e) => setTempProfile({ ...tempProfile, password: e.target.value })}
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
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className={`mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${
                                            confirmPassword !== '' && confirmPassword !== tempProfile.password ? 'border-red-500' : ''
                                        }`}
                                    />
                                    {confirmPassword !== '' && confirmPassword !== tempProfile.password && (
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
                                        value={tempProfile.phone}
                                        onChange={(e) => setTempProfile({ ...tempProfile, phone: e.target.value })}
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
                                        value={tempProfile.specialist}
                                        onChange={(e) => setTempProfile({ ...tempProfile, specialist: e.target.value })}
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Pilih Spesialis</option>
                                        <option value="Umum">Umum</option>
                                        <option value="Gigi">Gigi</option>
                                        <option value="Jantung">Jantung</option>
                                        <option value="THT">THT</option>
                                        <option value="Paru-Paru">Paru-Paru</option>
                                        <option value="Tulang">Tulang</option>
                                        <option value="Mata">Mata</option>
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
                                            value={tempProfile.experience}
                                            onChange={(e) => setTempProfile({ ...tempProfile, experience: e.target.value })}
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 shadow-sm sm:text-sm border-gray-300 rounded-md"
                                            placeholder="Masukkan tahun"
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
                        handleClose={(confirm) => handleCloseModal(confirm)}
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
