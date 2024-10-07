import React from 'react'

const NavbarLanding = () => {
    return (
        <nav className="bg-blue-100 p-4 flex justify-between items-center mx-20 my-5 rounded-lg">
            <div className="text-xl font-bold text-blue-700 px-5 font-poppins">
                MindMend
            </div>
            <div className="space-x-4">
                <button className="text-black font-semibold font-poppins">Masuk</button>
                <button className="border border-blue-500 text-blue-500 rounded px-4 py-2 hover:bg-blue-500 hover:text-white transition duration-200 font-semibold font-poppins">
                    Daftar
                </button>
            </div>
        </nav>

    )
}

export default NavbarLanding