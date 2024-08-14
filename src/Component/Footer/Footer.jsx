import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

function Footer() {
    return (
        <section className="relative overflow-hidden py-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap justify-between">
                    <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div className="mb-4 inline-flex items-center">
                                <Logo width="100px" />
                            </div>
                            <div>
                                <p className="text-sm opacity-80">
                                    &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-wide mb-6 text-sm font-bold uppercase">
                                Company
                            </h3>
                            <ul>
                                {['Features', 'Pricing', 'Affiliate Program', 'Press Kit'].map((item) => (
                                    <li key={item} className="mb-4">
                                        <Link
                                            className="text-base font-medium hover:text-yellow-300 transition-colors duration-200"
                                            to="/"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                        <div className="h-full">
                            <h3 className="tracking-wide mb-6 text-sm font-bold uppercase">
                                Support
                            </h3>
                            <ul>
                                {['Account', 'Help', 'Contact Us', 'Customer Support'].map((item) => (
                                    <li key={item} className="mb-4">
                                        <Link
                                            className="text-base font-medium hover:text-yellow-300 transition-colors duration-200"
                                            to="/"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <h3 className="tracking-wide mb-6 text-sm font-bold uppercase">
                                Legals
                            </h3>
                            <ul>
                                {['Terms & Conditions', 'Privacy Policy', 'Licensing'].map((item) => (
                                    <li key={item} className="mb-4">
                                        <Link
                                            className="text-base font-medium hover:text-yellow-300 transition-colors duration-200"
                                            to="/"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
