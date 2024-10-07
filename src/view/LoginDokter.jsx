import React from 'react';

const LoginDokter = () => {

    return (
        <section class="bg-gray-50 dark:bg-gray-900">
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-2 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
                            Masuk
                        </h1>
                        <p class="text-sm text-gray-400 dark:text-white text-center">
                            Masuk dengan detail Anda untuk melanjutkan
                        </p>


                        <form class="max-w-sm mx-auto">
                            <div class="mb-5">
                                <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama Pengguna</label>
                                <input type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nama Pengguna" required />
                            </div>
                            <div class="mb-5">
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kata Sandi</label>
                                <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Kata Sandi" required />
                            </div>
                            <button type="submit" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-8 py-3 text-center dark:bg-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center">Masuk</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400 text-center">
                                Belum Punya Akun? <a href="RegisDokter" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Daftar</a>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginDokter;