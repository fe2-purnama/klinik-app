import React from 'react';

const Table = ({ headers, children }) => {
    return (
        <div className="mt-8">
            <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-4 lg:-mx-8 lg:px-8">
                <div className="inline-block w-full overflow-x-auto align-middle border-b border-gray-200 shadow sm:rounded-lg">
                    <table className="w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                {headers.map((header, index) => (
                                    <th key={index} className="px-2 md:px-4 py-3 text-[10px] md:text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200">
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {children}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Table;