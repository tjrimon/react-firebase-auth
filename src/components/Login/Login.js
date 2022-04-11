import React, { useState } from 'react';
import app from '../firebase.init';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const [email, setEmail] = useState([]);
    const [registered, setRegistered] = useState(false);
    const [password, setPassword] = useState([]);
    const [name, setName] = useState('');
    const [error, setError] = useState('')
    const auth = getAuth(app);
    //    const provider = new GoogleAuthProvider();

    const signUpFromSubmit = (e) => {
        if (registered) {
            signInWithEmailAndPassword(auth, email, password)
                .then(users => console.log(users.user))
                .catch(err => {
                    setError(err.message)
                })
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(users => console.log(users.user))
                .catch(err => {
                    setError(err.message)
                })
        }
        e.preventDefault()
        setError('')
    }
    const handleNameBlur = (e) => {
        setName(e.target.value)
    }
    const handleEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const onSelectRegister = (e) => {
        setRegistered(e.target.checked)
    }
    const handlePasswordBlur = (e) => {
        setPassword(e.target.value)
    }
    return (
        <main className=''>
            <div className='h-[90vh] flex justify-center items-center'>
                <form className='w-96 bg-pink-100 py-10 px-10 rounded-lg'>
                    <h1 className='pb-3 font-semibold text-xl '>{registered ? 'Login ' : 'Register '}Here</h1>
                    {!registered && <div className="">
                        <label htmlFor="name" className='text-sm font-semibold'>Name</label>
                        <input onBlur={handleNameBlur} className='block border-gray-300 rounded-lg mt-1 mb-3 w-full focus:border-indigo-500 focus:ring-indigo-500' type="text" id='name' placeholder='Enter your Name' />
                    </div>}
                    <div className="">
                        <label htmlFor="email" className='text-sm font-semibold'>Email</label>
                        <input onBlur={handleEmailBlur} className='block border-gray-300 rounded-lg mt-1 mb-3 w-full focus:border-indigo-500 focus:ring-indigo-500' type="email" id='email' placeholder='Enter your email' />
                    </div>
                    <div className="">
                        <label htmlFor="password" className='text-sm font-semibold'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" className='block border-gray-300 rounded-lg mt-1 mb-3 w-full' id='password' placeholder='Enter your password' />
                    </div>
                    <div className='flex items-center'>
                        <input onChange={onSelectRegister} className='focus:border-indigo-500focus:ring-indigo-500' type="checkbox" name="checkbox" id="checkbox" /><p className='pl-3 text-indigo-600'>Already Register?</p>
                    </div>
                    <p className='text-red-500'>{error}</p>
                    <button className='w-full rounded-lg bg-indigo-600 text-white py-3 mt-5 text-sm font-semibold' type='submit' onClick={signUpFromSubmit}>Sign {registered ? 'in ' : 'up '}</button>
                </form>
            </div>
        </main>

    );
};

export default Login;