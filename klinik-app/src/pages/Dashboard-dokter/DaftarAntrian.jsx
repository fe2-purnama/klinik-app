import React, { useState } from 'react';
import Table from '../../components/DashboardDokter/TableDokter';

const TableRow = ({ item, index, isEditing, onEditClick, onStatusChange }) => {
    const statusColors = {
        "Menunggu": "text-yellow-800 bg-yellow-100",
        "Progress": "text-blue-800 bg-blue-100",
        "Selesai": "text-green-800 bg-green-100",
        "Batal": "text-red-800 bg-red-100",
    };

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
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <span className={`inline-flex px-4 py-1 text-xs font-semibold leading-5 rounded-full ${statusColors[item.status]}`}>{item.status}</span>
            </td>
            <td className="px-6 py-4 text-sm leading-5 text-gray-900 whitespace-no-wrap border-b border-gray-200">
                {item.complaint}
            </td>
            <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200 relative">
                <button onClick={onEditClick} className="text-indigo-600 hover:text-indigo-900">Edit</button>
                {isEditing && (
                    <div className="aksi fixed right-8 z-50 w-48 py-2 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
                        <button onClick={() => onStatusChange(index - 1, 'Progress')} className="block w-full px-4 py-2 text-left text-blue-700 hover:bg-gray-100">Progress</button>
                        <button onClick={() => onStatusChange(index - 1, 'Selesai')} className="block w-full px-4 py-2 text-left text-green-700 hover:bg-gray-100">Selesai</button>
                        <button onClick={() => onStatusChange(index - 1, 'Batal')} className="block w-full px-4 py-2 text-left text-red-700 hover:bg-gray-100">Batal</button>
                    </div>
                )}
            </td>
        </tr>
    );
};

const DaftarAntrian = () => {
    const [data, setData] = useState([
        {
            reservationNumber: 'R123456789',
            date: '2024-05-20',
            patientName: 'Budi Santoso',
            doctorName: 'Dr. Andi Wijaya',
            specialist: 'Umum',
            status: 'Menunggu',
            complaint: 'Nyeri Perut',
        },
        {
            reservationNumber: 'R123456790',
            date: '2024-05-21',
            patientName: 'Siti Aminah',
            doctorName: 'Dr. Siti Nurhaliza',
            specialist: 'Gigi',
            status: 'Progress',
            complaint: 'Sakit Gigi',
        },
        {
            reservationNumber: 'R123456795',
            date: '2024-05-22',
            patientName: 'Khidir Karawita',
            doctorName: 'Dr. Arif Hermawan',
            specialist: 'Jantung',
            status: 'Selesai',
            complaint: 'Sesak Napas',
        },
        {
            reservationNumber: 'R123456801',
            date: '2024-05-22',
            patientName: 'Muhammad Sumbul',
            doctorName: 'Dr. Vitis',
            specialist: 'Umum',
            status: 'Batal',
            complaint: 'Sesak Napas',
        },
    ]);

    const [editingIndex, setEditingIndex] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleStatusChange = (index, newStatus) => {
        if (index >= 0 && index < data.length) {
            const updatedData = [...data];
            updatedData[index].status = newStatus;
            setData(updatedData);
            setEditingIndex(null);
        } else {
            console.error(`Invalid index: ${index}`);
        }
    };

    const handleEditClick = (index) => {
        setEditingIndex(index);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const headers = [
        "No.",
        "No. Reservasi",
        "Tanggal",
        "Nama Pasien",
        "Dokter",
        "Spesialist",
        "Status",
        "Keluhan",
        "Aksi",
    ];

    return (
        <div className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
            <div className="container px-6 py-8 mx-auto">
                <h2 className='text-3xl font-medium text-gray-700'>Daftar Antrian</h2>
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
                            isEditing={editingIndex === index}
                            onEditClick={() => handleEditClick(index)}
                            onStatusChange={handleStatusChange}
                        />
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default DaftarAntrian;
