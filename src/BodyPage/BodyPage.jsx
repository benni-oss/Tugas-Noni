import React from "react";

const BodyPage = () => {
    return (

        <div className="min-h-screen w-full">
            <div
                className="flex justify-center items-center h-40 "
                style={{
                background: 'linear-gradient(to right, #FFF5F5, #ABE2E4,  #05787D, #144A4C)'
            }}>
                <p className="mt-0 text-black text-lg text-center  ">
                    These are some of the previously created Design System
                    <br></br>
                    {" "}
                    <a
                        href="https://www.example.com"
                        className="text-blue-700 underline hover:text-blue-900">
                        MGI User Experience Design System
                    </a>
                </p>
            </div>
            {/* Section 1 */}
            <div className="bg-white flex justify-center items-center p-10 ">
                <img
                    src="src\assets\img\icon\ASET MUED Design System\MUED V1.png"
                    alt="MUED V.1"
                    className="w-1/7 scroll-ml-10 drop-shadow-lg"/>
                <div className="ml-8">
                    <h2 className="text-3xl font-bold text-left">MUED
                        <span className="text-3xl"> V.1</span>
                    </h2>
                    <p className="mt-2 text-gray-700 text-justify text-x max-w-2xl ">
                    "Step into the future of UI design with MUED V.1, the foundation of intelligent design. Crafted to uphold the consistency and integrity of the Intelligent Family Sequencing UI, this version offers a seamless, visually cohesive experience. Whether you're developing for modern applications or pushing the boundaries of innovation, MUED V.1 ensures that your designs are always on point, from start to finish."                    </p>
                </div>
            </div>

            {/* Section 2 */}
            <div
                className="bg-gradient-to-r from-teal-300 to-teal-800 text-white flex  items-center justify-center p-10">
                <div className="mr-8 text-left">
                    <h2 className="text-3xl font-bold ">MUED
                        <span className="text-3xl"> V.2</span>
                    </h2>
                    <p className="mt-2 text-justify max-w-2xl" >
                    "Elevate your designs with MUED V.2, where sophistication meets functionality. This version refines the Intelligent Family Sequencing UI, offering a sharper, more intuitive interface. With its refined visual language and enhanced usability, MUED V.2 is designed to make your creative process effortless, while maintaining the precision and elegance your projects demand. Experience design as it should be – simple, yet powerful."
                    </p>
                </div>
                <img
                    src="src\assets\img\icon\ASET MUED Design System\MUED V2.png"
                    alt="MUED V.2"
                    className="w-1/6 drop-shadow-lg"/>
            </div>

            {/* Section 3 */}
            <div className="bg-white flex justify-center items-center p-10  ">
                <img
                    src="src\assets\img\icon\ASET MUED Design System\MUED V3.png"
                    alt="MUED V.3"
                    className="w-1/6 drop-shadow-lg"/>
                <div className="ml-8">
                    <h2 className="text-3xl font-bold">MUED
                        <span className="text-xl">V.3</span>
                    </h2>
                    <p className="mt-2 text-gray-700 max-w-2xl text-justify">
                    "Unleash the next level of UI excellence with MUED V.3. This version goes beyond basic design systems, incorporating cutting-edge features to make your Intelligent Family Sequencing UI more dynamic and user-friendly than ever before. With MUED V.3, you're not just designing – you're creating a seamless, intuitive experience that speaks to users, enhances interactions, and elevates every project."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BodyPage;
