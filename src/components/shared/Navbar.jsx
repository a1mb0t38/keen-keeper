import React, { useState } from 'react';
import img from '../../assets/logo.png';
import { Link, NavLink, } from 'react-router';
import { PiHouseLineThin } from "react-icons/pi";
import { CiClock2 } from 'react-icons/ci';
import { TfiStatsUp } from 'react-icons/tfi';

const Navbar = () => {

    const [active, setActive] = useState("home");

    

    return (
        <nav>
            <div className="flex items-center justify-between bg-base-100 shadow-sm p-3">
                <div className="flex-1">
                    <Link to={"/"}><img src={img} alt="logo image" /></Link>
                </div>
                <div >
                    <ul className="flex items-center">
                        {/* <NavLink className='flex items-center rounded-sm font-semibold text-base text-white bg-green-800 py-3 px-4 ' to={"/"}> <PiHouseLineThin className='mr-0.5' />home</NavLink> */}
                        <li>
                             <NavLink to={'/'} onClick={()=> setActive("home")} className={`${active === "home" ? "flex items-center rounded-sm font-semibold text-base text-white bg-green-800 py-3 px-4 " : "flex items-center rounded-sm font-semibold text-base text-[#64748B] py-3 px-4"}`} ><PiHouseLineThin className='mr-0.5' />home</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={()=> setActive("timeline")} className={`${active === "timeline" ? "flex items-center rounded-sm font-semibold text-base text-white bg-green-800 py-3 px-4" : "flex items-center rounded-sm font-semibold text-base text-[#64748B] py-3 px-4"}`}  to={"/timeline"}><CiClock2 className='mr-0.5' />timeline</NavLink>
                        </li>
                        <li>
                            <NavLink onClick={()=> setActive("stats")} className={`${active === "stats" ? "flex items-center rounded-sm font-semibold text-base text-white bg-green-800 py-3 px-4" : "flex items-center rounded-sm font-semibold text-base text-[#64748B] py-3 px-4"}`} to={"/stats"}><TfiStatsUp className='mr-0.5' />stats</NavLink>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;