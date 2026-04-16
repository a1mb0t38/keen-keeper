import React from 'react';
import img from '../../assets/KeenKeeper.png';
import { PiInstagramLogoFill } from 'react-icons/pi';
import { AiFillFacebook } from 'react-icons/ai';
import { RiTwitterXFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='max-w-[1110px] mx-auto text-center pt-20 pb-7'>
                <div className='flex items-center justify-center mb-4'>
                    <img src={img} alt="logo" />
                </div>
                <p className='text-base text-white mb-6'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='font-medium text-[20px] text-white mb-4'>Social Links</p>
                <div className='flex items-center justify-center gap-3'>
                    <button className='w-10 h-10 bg-white flex items-center justify-center rounded-full'><PiInstagramLogoFill /></button>
                    <button className='w-10 h-10 bg-white flex items-center justify-center rounded-full'><AiFillFacebook /></button>
                    <button className='w-10 h-10 bg-white flex items-center justify-center rounded-full'><RiTwitterXFill /></button>
                </div>
            </div>
            <div className='max-w-[1110px] mx-auto flex flex-col md:flex-row items-center justify-between text-white'>
                <p>© 2026 KeenKeeper. All rights reserved.</p>
                <ul className='flex items-center justify-evenly gap-7'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li>Cookies</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;