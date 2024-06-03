import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'
import {useNavigate} from 'react-router-dom';

export default function Header() {
    const { user, signOut } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleSignOut = () => {
        signOut();
        navigate('/');
    }

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://ci3.googleusercontent.com/meips/ADKq_NbMW1LSoSwG-FBx5i5IeHYeRIjk-xu9OJMG8FY46wlTDTB60x3JhBBSUQ2_crIZHR2VGPzUTqWmkFRCYo7uMiFQHffISX04qoAwqpIZ_3bZgr6cGK940Y94DQOuqX1LuFToo62hwOCiVU9scTBuMZWF=s0-d-e1-ft#https://img.mysignature.io/p/d/3/0/d30d9df2-ebf0-59d7-ab4f-6649c7c90846.png?time=1589696993"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            {!user ? (
                                <>
                                    <li>
                                        <NavLink
                                            to="/login"
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            Login
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/signup"
                                            className={({ isActive }) =>
                                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                            }
                                        >
                                            SignUp
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <li>
                                    <button
                                        onClick={handleSignOut}
                                        className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                                    >
                                        Logout
                                    </button>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
