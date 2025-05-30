import React from "react";

const EndPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-teal-300 to-teal-800 p-8 ">
            {/* Judul Halaman */}
            <div className="text-center mb-8 mt-20">
                <h2 className="text-3xl font-bold text-white">
                    Get Started Quickly
                </h2>
                <p className="text-xl text-white mt-2">
                    Sound design and development resources
                </p>
            </div>

            {/* Konten 2 Kolom */}
            <div className="flex flex-col md:flex-row gap-8 justify-center items-start">

                {/* Kolom 2: Develop Resources */}
                <div className="bg-gray-900 w-full md:w-1/2 rounded-lg shadow-md p-6">
                    <h3 className="text-2xl font-semibold text-white mb-4 text-left">
                        Develop Resources
                    </h3>
                    <p className="text-white mb-4 font-bold text-left">
                        MUED offers a wide range of design resources to help teams speed up
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {/* Replace ul with div grid container */}
                        <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="flex items-center text-white">
                                <img src="/icons/icon6.png" alt="Icon 6" className="w-6 h-6 mr-2"/>
                                <span>Design Guide Building Specifications</span>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="flex items-center text-white">
                                <img src="/icons/icon7.png" alt="Icon 7" className="w-6 h-6 mr-2"/>
                                <span>Design Guide Building a Library</span>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="flex items-center text-white">
                                <img src="/icons/icon8.png" alt="Icon 8" className="w-6 h-6 mr-2"/>
                                <span>Design Guide Global Style</span>
                            </div>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="flex items-center text-white">
                                <img src="/icons/icon9.png" alt="Icon 9" className="w-6 h-6 mr-2"/>
                                <span>Design Guide Icon Library</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EndPage;
