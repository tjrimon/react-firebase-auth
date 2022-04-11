import React, { useState } from 'react';
import app from '../firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from 'firebase/auth'

const Login = () => {
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const signUpFromSubmit = (e) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(users => console.log(users.user))
            .catch(err => {
                console.log(err.message)
            })
        e.preventDefault()
    }
    const handleEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value)
    }
    return (
        <main className=''>
            <div className='h-[90vh] flex justify-center items-center'>
                <form className='w-96 bg-pink-100 py-10 px-10 rounded-lg'>
                    <div className="">
                        <label htmlFor="email" className='text-sm font-semibold'>Email</label>
                        <input onBlur={handleEmailBlur} className='block border-gray-300 rounded-lg mt-1 mb-3 w-full focus:border-indigo-500 focus:ring-indigo-500' type="email" id='email' placeholder='Enter your email' />
                    </div>
                    <div className="">
                        <label htmlFor="password" className='text-sm font-semibold'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" className='block border-gray-300 rounded-lg mt-1 mb-3 w-full' id='password' placeholder='Enter your password' />
                    </div>
                    <button className='w-full rounded-lg bg-indigo-600 text-white py-3 mt-5 text-sm font-semibold' type='submit' onClick={signUpFromSubmit}>Sign in</button>
                </form>
            </div>
        </main>

    );
};

export default Login;