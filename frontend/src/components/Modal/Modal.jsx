import React from 'react';

function Modal({ isOpen, handleClose, title, message, confirmButton, cancelButton, handleConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">{message}</p>
                    </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                        onClick={handleConfirm}
                        type="button"
                        className={`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm ${confirmButton}`}
                    >
                        Ya
                    </button>
                    <button
                        onClick={handleClose}
                        type="button"
                        className={`mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm ${cancelButton}`}
                    >
                        Tidak
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;
