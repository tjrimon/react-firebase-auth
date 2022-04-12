import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import app from '../firebase.init';
import { BeakerIcon, UserIcon } from '@heroicons/react/solid';

const Header = () => {
    const auth = getAuth(app)
    return (
        <div>
            <nav className='flex justify-around'>
                <div>     <NavLink to='/'>Home</NavLink>
                    <NavLink to='/products'>Products</NavLink>
                    <NavLink to='/login'>Login</NavLink>
                    <NavLink to='/register'>Register</NavLink></div>
                <div className='flex items-center'>
                    <UserIcon className="h-5 w-5 text-white" />
                    <h3 className='text-white pl-2'>{auth ? auth.currentUser.displayName : ''}</h3>
                </div>
            </nav>

        </div>
    );
};

export default Header;