import React from 'react';
import NavbarLanding from './NavbarLanding';

const LandingPage = () => {
    return (
        <div className=''>
            <NavbarLanding />
            <h1 className='font-semibold text-center text-3xl pt-32 tracking-wider font-poppins'>
                <span className='text-blue-600'>Minimalkan </span>Ketidaknyamanan & Waktu Tunggu
            </h1>
            <p className='text-black text-center px-64 font-poppins text-sm pt-12'>
                Merasa tidak enak badan hari ini? Tidak perlu khawatir! Manfaatkan layanan janji temu instan kami untuk psikolog dan psikiater di MindMend. Baik Anda sedang mencari terapis atau spesialis kesehatan mental, pesan sesi Anda secara online dengan nyaman. Yang terbaik dari semuanya, layanan kami tidak dipungut biaya. Jadwalkan janji temu Anda sekarang.
            </p>
            <div className="w-full flex justify-center mt-8">
                <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-64 px-8 py-3 text-center dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-5">
                    Buat Janji
                </button>
            </div>

        </div>
    );
}

export default LandingPage;
