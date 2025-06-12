import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      <div>
        <div>
        <img
          src="src\assets\img\resource\Printer.png" // ganti dengan path gambar latar belakang kamu
          alt="Background"
          className="absolute mt-3 top-100 left-20 w-1/6   object-cover -z-10" // posisi paling belakang
        /></div>

        <div>
        <img
          src="src\assets\img\resource\muid_bg.png" // ganti dengan path gambar latar belakang kamu
          alt="Background"
          className="absolute mt-3 top-0 ml-100 w-250   object-cover -z-10" // posisi paling belakang
        /></div>
        <div className="items-end mt-0  ">
          <img
            src="src\assets\img\icon\ASET MUED Design System\Decor of Homepage.png"
            alt="Logo"
            className="ml-220 h-150 w-240 cursor-pointer drop-shadow-2xl"
          />
        </div>
        <div>
          <div className="absolute left-30 top-30 rounded-lg">
            <div>
              <div>
                <h2 className="text-3xl font-bold text-[#0692FF] text-left space-y-4 font-[Poppins] ">
                  Welcome To
                </h2>
                <h2
                  className="text-5xl mt-1 font-bold  text-left space-y-4 font-[Poppins] pb-2"
                  style={{
                    background:
                      "linear-gradient(to right, #4C64FC, #60D4FF, #1485FF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    filter:
                      "drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2)) drop-shadow(0px 0.8px 0.8px rgba(0, 0, 0, 1))",
                  }}
                >
                  MUED Design System
                  <br />
                </h2>
                <p className="text-black  text-left mt-10 text-lg max-w-md font-[Poppins]">
                  The enterprise design system produced by Huada Intelligent
                  Manufacturing MGI Tech Co., Ltd.
                </p>
              </div>
            </div>
            <div className="flex justify-items-start mt-10 ">
              <Link to="/introduction">
                <button
                  className="font-['Lora']"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "#1485FF", // Biru
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "4px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Get Started !
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>

        </div>
        
      </div>
   {/* Tambahkan bagian ini PERSIS sebelum penutup </div> paling akhir */}
    <div
      className="flex justify-center items-center p-2 font-bold text-xl font-[lora]"
      style={{
        background: "#0692FF",
      }}
    >
      <p className="mt-0 text-white text-sm text-center">
        Want To Know Which Product the Design System Used in?{" "}
        <a
          href="https://www.example.com"
          style={{
            color: "#0900FF",
            textDecoration: "underline",
            fontWeight: "bold",
          }}
        >
          Go To The Company Website
        </a>
      </p>
    </div>
  </div>
  );
};

export default HomePage;
