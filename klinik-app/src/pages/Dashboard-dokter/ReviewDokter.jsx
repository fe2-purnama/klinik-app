import React, { useState } from 'react';
import Table from '../../components/DashboardDokter/TableDokter';

const TableRow = ({ item, index }) => {
    return (
        <tr className="relative">
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200">
                {index}
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200">
                {item.reservationNumber}
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200">
                {item.date}
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200">
                {item.patientName}
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200">
                {item.doctorName}
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200">
                {item.specialist}
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-nowrap border-b border-gray-200">
                {item.complaint}
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900  border-b border-gray-200">
                {item.reviews}
            </td>
        </tr>
    );
};

const ReviewDokter = () => {
    const data = [
        {
            reservationNumber: 'R123456789',
            date: '2024-05-20',
            patientName: 'Budi Santoso',
            doctorName: 'Dr. Andi Wijaya',
            specialist: 'Umum',
            complaint: 'Nyeri Perut',
            reviews: 'Pelayanan dokter sangat baik dan profesional. Saya merasa lebih baik setelah konsultasi.',
        },
        {
            reservationNumber: 'R123456790',
            date: '2024-05-21',
            patientName: 'Siti Aminah',
            doctorName: 'Dr. Siti Nurhaliza',
            specialist: 'Gigi',
            complaint: 'Sakit Gigi',
            reviews: 'Dokter gigi sangat teliti dan memastikan perawatan dilakukan dengan benar. Saya merasa lebih nyaman setelah perawatan.',
        },
        {
            reservationNumber: 'R123456795',
            date: '2024-05-22',
            patientName: 'Khidir Karawita',
            doctorName: 'Dr. Arif Hermawan',
            specialist: 'Jantung',
            complaint: 'Sesak Napas',
            reviews: 'Dokter memberikan penjelasan yang rinci tentang kondisi saya dan langkah-langkah perawatan yang harus dilakukan. Saya merasa lebih tenang setelah konsultasi.',
        },
        {
            reservationNumber: 'R123456801',
            date: '2024-05-22',
            patientName: 'Muhammad Sumbul',
            doctorName: 'Dr. Vitis',
            specialist: 'Umum',
            complaint: 'Sesak Napas',
            reviews: 'Meskipun harus menunggu cukup lama, pelayanan dokter sangat memuaskan. Saya mendapatkan perawatan yang tepat untuk mengatasi keluhan saya.',
        },
    ];

    const headers = [
        "No.",
        "No. Reservasi",
        "Tanggal",
        "Nama Pasien",
        "Dokter",
        "Spesialist",
        "Keluhan",
        "Review",
    ];
    
    const [searchTerm, setSearchTerm] = useState('');
    
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container px-6 py-8 mx-auto">
                <h2 className='text-3xl font-medium text-gray-700'>Review Dokter</h2>
                <div className="mt-6">
                    <span>Cari </span>
                    <input type="text" placeholder="Cari Nama Pasien" value={searchTerm} onChange={handleSearch} className="px-3 py-1 border border-gray-300 rounded-md  focus:ring-[color:var(--primary)]"/>
                </div>
                <Table headers={headers}>
                    {data.map((item, index) => (
                        <TableRow
                            key={index}
                            item={item}
                            index={index + 1}
                        />
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default ReviewDokter;
