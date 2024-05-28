import React from 'react';
import Paywith from '../../assets/images/payment.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-200 w-full mt-10 ">
            <div className="container w-11/12 mx-auto py-6 px-4">
                <div className="md:flex md:justify-between">
                    <div className="flex flex-col gap-y-4 md:w-1/3 mx-auto md:mx-0">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Legals</h2>
                        <Link to="/about" className="text-sm text-gray-600 hover:underline">About Us</Link>
                        <Link to="/refundPolicy" className="text-sm text-gray-600 hover:underline">Refund Policy</Link>
                        <Link to="/terms" className="text-sm text-gray-600 hover:underline">Terms</Link>
                    </div>
                    <div className="flex flex-col gap-y-4 md:w-1/3 mx-auto md:mx-0">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Information</h2>
                        <Link to="/" className="text-sm text-gray-600 hover:underline">How to Buy</Link>
                        <Link to="/" className="text-sm text-gray-600 hover:underline">Contact Us</Link>
                        <Link to="/" className="text-sm text-gray-600 hover:underline">Complaints</Link>
                    </div>
                    <div className="text-center md:text-left mx-auto md:mx-0">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">About</h2>
                        <p className="text-sm text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <img src={Paywith} alt="Payment Link" className="inline h-16 w-auto mb-4" />
                    </div>
                </div>
            </div>
            <div className="bg-gray-900 text-white py-3 text-center">
                <p className="text-xs">All Rights Reserved By: Linkon</p>
            </div>
        </footer>
    );
};

export default Footer;
