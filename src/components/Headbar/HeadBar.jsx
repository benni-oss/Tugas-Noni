import React from "react";
import { Navbar, Typography } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { SidebarWithBurgerMenu } from "../Sidebar/Sidebar";

export function StickyNavbar() {
    return (
        <div className="w-full">
            <Navbar className="fixed top-0 left-0 right-0 z-50 h-max max-w-full rounded-none px-2 py-1 lg:px-8 lg:py-1 shadow-md bg-white/80 backdrop-blur-sm border-b border-gray-100">
                <div className="flex items-center justify-between text-black">
                    <div className="flex items-center">
                        <SidebarWithBurgerMenu />
                        <img 
                            src="src\assets\img\icon\LOGO MUED Design System.jpg" 
                            alt="Logo" 
                            className=" cursor-pointer" 
                        />
                        <Typography className="ml-11 cursor-pointer text-xl font-[DM-Serif-Display] font-bold text-black whitespace-nowrap">
                            MUED Design System
                        </Typography>
                    </div>

                    <form className="w-[740px] ml-90">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <MagnifyingGlassIcon className="w-4 h-4 text-gray-500"/>
                            </div>
                            <input
                                type="search"
                                className=" p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Search the MUED Design System"
                                required
                            />
                        </div>
                    </form>
                </div>
            </Navbar>
        </div>
    );
}

export default StickyNavbar;
