import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import Loading from './Loading';
import { toast } from 'react-toastify';

const Header = () => {
    const { user, logout, loadingUser } = useContext(AuthContext);

    if (loadingUser) {
        return <Loading></Loading>
    }

    // console.log(status)

    const handleLogout = () => {
        logout()
            .then(toast.warning('User logged out!', { autoClose: 1000 }))
            .catch(error => console.log(error));

        localStorage.removeItem('accessToken');
    }

    const menuItems = <>
         
        <li className='font-bold'><NavLink to="/home" className={({ isActive }) => isActive ? "bg-white text-amber-500 rounded-lg " : undefined}>Home</NavLink></li>
        <li className='font-bold'><NavLink to="/menu" className={({ isActive }) => isActive ? "bg-white text-amber-500 rounded-lg" : undefined}>Menu</NavLink></li>
        {
            user ?
                <li className='font-bold'> <NavLink className={({ isActive }) => isActive ? undefined : undefined} onClick={handleLogout} >Sign Out</NavLink></li>
                :
                <li className='font-bold'><NavLink to="/login" className={({ isActive }) => isActive ? "bg-white text-amber-500 rounded-lg" : undefined}>Login</NavLink></li>
        }

    </>

    return (
        <div className="navbar bg-primary py-6">
            <div className="xl:navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/home" className=" flex justify-center items-center normal-case text-2xl  xl:text-4xl font-bold pl-2"><svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current hidden xl:block"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg><span className='pl-2'>COZMO COFFEE</span></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>

        </div>
    );
};

export default Header;

