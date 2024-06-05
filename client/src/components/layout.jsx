import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <header className="w-full border-2 border-red mb-2 flex justify-end items-center h-8 p-2 ">
                <nav className="w-1/4">
                    <ul className="flex items-center justify-between  w-full">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer className="border-t-2 border-blue mt-2 py-4 text-center">
                <p className="text-gray-600">© 2024 Movie App</p>
                <nav className="mt-2">
                    <a href="#" className="text-gray-600 hover:text-blue-500 mx-2">About</a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 mx-2">Contact</a>
                    <a href="#" className="text-gray-600 hover:text-blue-500 mx-2">Privacy Policy</a>
                </nav>
            </footer>
        </div>
    );
}

export default Layout;
