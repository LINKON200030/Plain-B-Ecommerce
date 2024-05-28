import React from 'react';
import { CiMail } from "react-icons/ci";
import { FaPhone } from "react-icons/fa6";
import {Link} from "react-router-dom";
import {FaFacebook, FaPhoneAlt, FaWhatsapp} from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import {MdOutlineEmail, MdWhatsapp} from "react-icons/md";
import {AiOutlineYoutube} from "react-icons/ai";

const UpperNav = () => {
    return (
        <div className='flex justify-between items-center bg-green-600 py-1.5 text-white px-1 md:px-9 sticky top-0 z-50'>
            <div className='flex items-center justify-center pl-9'>
                <div className='mr-6'>
                    <MdOutlineEmail className="inline-block"/>
                    <span className='ml-2 text-xs'>Support@PlanB.com</span>
                </div>
                <div>
                    <FaPhoneAlt className="inline-block"/>
                    <span className='ml-2 text-xs'>01774688159</span>
                </div>
            </div>

            <div className='flex pr-9'>
                <FaWhatsapp className='mr-3 md:mr-6 ' onClick={() => window.open('https://wa.me/+8801638674044')}/>
                <AiOutlineYoutube className='mr-3 md:mr-6 '
                                  onClick={() => window.open('https://youtube.com/@linkon77921?si=L4rjQLJOhQXBNUOj')}/>
                <FaFacebook/>
            </div>
        </div>
    );
};

export default UpperNav;
