import React from 'react';

const Login = () => {
    return (
        <main className=''>
            <div className='h-[90vh] flex justify-center items-center'>
                <form className='w-96 bg-pink-100 py-10 px-10 rounded-lg'>
                    <div className="">
                        <label for="email" className='text-sm font-semibold'>Email</label>
                        <input className='block border-gray-300 rounded-lg mt-1 mb-3 w-full focus:border-indigo-500 focus:ring-indigo-500' type="email" id='email' placeholder='Enter your email' />
                    </div>
                    <div className="">
                        <label for="password" className='text-sm font-semibold'>Password</label>
                        <input type="password" className='block border-gray-300 rounded-lg mt-1 mb-3 w-full' id='password' placeholder='Enter your password' />
                    </div>
                    <button className='w-full rounded-lg bg-indigo-600 text-white py-3 mt-5 text-sm font-semibold' type='submit'>Sign in</button>
                </form>
            </div>
        </main>

    );
};

export default Login;