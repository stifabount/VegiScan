import React from "react";
import { Link } from "react-router-dom"; // Tambahkan ini

const Footer = () => {
    return (
        <footer className="bg-secondary mt-20">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link
                        to="/"
                        className="inline-block px-4 py-2 text-white bg-primary-500 rounded-lg shadow-md hover:bg-primary-600 focus:outline-none transition-all duration-200"
                    >
                        Logo
                    </Link>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-white sm:mb-0">
                        <li>
                            <Link to="/" className="block py-2 px-3 md:p-2">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/vegetables" className="block py-2 px-3 md:p-2">
                                Vegetables
                            </Link>
                        </li>
                        <li>
                            <Link to="/scanpage" className="block py-2 px-3 md:p-2">
                                Scan Now
                            </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-white-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-white sm:text-center">
                    ©2024 VegiScan All rights reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;
