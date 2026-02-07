import React from 'react'
import logo from '../assets/logo.svg'
import { LogIn } from 'lucide-react';

const NavBar = () => {
    return (
        <div className=" w-full flex items-center justify-between  sm:px-10 py-4 sm:py-7.5 px-8 ">
            <div><img src={logo} alt="logo" className=" h-7  sm:h-8" /></div>
            <button className="flex items-center gap-2 font-bold bg-white text-sm sm:text-base text-[#626368] border border-[#626368] sm:px-4 sm:py-2 px-2 py-1 rounded-lg">Sign up <LogIn className="w-4 h-4" color='#626368' /></button>
        </div>
    )
}

export default NavBar
