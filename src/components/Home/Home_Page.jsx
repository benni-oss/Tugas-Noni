import React from "react";
import Button from "../Button/Button";
import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div className="min-h-screen w-full">
            <div>
                <div className="items-end mt-0  ">

                    <img
                        src="src\assets\img\icon\ASET MUED Design System\Decor of Homepage.png"
                        alt="Logo"
                        className="ml-220 h-150 w-240 cursor-pointer drop-shadow-2xl"/></div>
                <div>
                    <div className="absolute left-35 top-40 rounded-lg">
                        <div>
                            <div>
                                <h2
                                    className="text-4xl font-bold text-gray-900 text-left space-y-4 font-[Poppins]">Welcome To MUED
                                    <br/>
                                    Design System</h2>
                                <p className="text-gray-700 text-left mt-10 text-lg max-w-md font-[Lora]">The
                                    enterprise design system produced by Huada Intelligent Manufacturing MGI Tech
                                    Co., Ltd.</p>
                            </div>
                            <div
                                className="flex justify-between items-start  py-4 w-[470px] mt-15 font-[Poppins] text-3xl">
                                <span className="font-bold text-gray-900 text-left ">Allow</span>
                                <span className="font-bold text-gray-900 mr-10">To Flow</span>
                            </div>

                        </div>
                        <div className="mt-5 mr-17">
                            <Link to="/documentation">
                                <Button/>
                            </Link>
                        </div>

                    </div>

                </div>
                <div>
                    <div
                        className="flex justify-center mt-6 items-center p-2 "
                        style={{
                        background: 'linear-gradient(to right, #0E95A9, #01EDF766)',
                        backdropFilter: 'blur-sm'
                    }}>
                        <p className="mt-0 text-black text-sm text-center ">
                            Want To Know Which Product the Design System Used in? {" "}
                            <a
                                href="https://www.example.com"
                                className="text-blue-700 underline hover:text-blue-900">
                                Go To The Company Website
                            </a>
                        </p>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default HomePage;
