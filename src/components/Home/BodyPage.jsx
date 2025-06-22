import React from "react";

const BodyPage = () => {
  return (
    
    <div className="min-h-screen w-full">
      <div
        className="flex justify-center items-center  mt-5  h-10 font-bold font-[lora] "
        style={{}}
      >
        
        <p className="mt-0 text-black text-2xl text-center  ">
          These are some of the previously created Design System
          <br></br>{" "}
          <a
            href="https://www.mgi-tech.com/"
            className=""
            style={{
              color: "black",
            }}
          >
            MGI User Experience Design System
          </a>
        </p>
      </div>
      {/* Section 1 */}
      <div className="bg-white flex justify-center items-center p-10 mt-5 ">
        <img
          src="\assets\img\resource\MUED_V1.png"
          alt="MUED V.1"
          className="w-1/4 scroll-ml-10 drop-shadow-lg"
        />
        <div className="ml-8 w-1/3">
          <img
            src="\assets\img\resource\MUED_V.1_Font.png"
            alt="MUED V.3"
            className="w-1/4 scroll-ml-10 drop-shadow-lg"
          />
          <p className="mt-2 text-gray-700 text-justify text-x max-w-2xl ">
            "Step into the future of UI design with MUED V.1, the foundation of
            intelligent design. Crafted to uphold the consistency and integrity
            of the Intelligent Family Sequencing UI, this version offers a
            seamless, visually cohesive experience. Whether you're developing
            for modern applications or pushing the boundaries of innovation,
            MUED V.1 ensures that your designs are always on point, from start
            to finish."{" "}
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" text-black flex  items-center justify-center p-10">
        <div className="mr-8 text-left ml-8 w-1/3">
          <img
            src="\assets\img\resource\MUED_V.2_Font.png"
            alt="MUED V.3"
            className="w-1/4 scroll-ml-10 drop-shadow-lg"
          />
          <p className="mt-2 text-justify max-w-2xl">
            "Elevate your designs with MUED V.2, where sophistication meets
            functionality. This version refines the Intelligent Family
            Sequencing UI, offering a sharper, more intuitive interface. With
            its refined visual language and enhanced usability, MUED V.2 is
            designed to make your creative process effortless, while maintaining
            the precision and elegance your projects demand. Experience design
            as it should be – simple, yet powerful."
          </p>
        </div>
        <img
          src="\assets\img\resource\MUED_V2.png"
          alt="MUED V.2"
          className="w-1/4 scroll-ml-10 drop-shadow-lg"
        />
      </div>

      {/* Section 3 */}
      <div className="bg-white flex justify-center items-center p-10  ">
        <img
          src="\assets\img\resource\MUED_V3.png"
          alt="MUED V.3"
          className="w-1/4 scroll-ml-10 drop-shadow-lg"
        />
        <div className="ml-8 w-1/3">
          <img
            src="\assets\img\resource\MUED_V.3_Font.png"
            alt="MUED V.3"
            className="w-1/4 scroll-ml-10 drop-shadow-lg"
          />
          <p className="mt-2 text-gray-700 max-w-2xl text-justify">
            "Unleash the next level of UI excellence with MUED V.3. This version
            goes beyond basic design systems, incorporating cutting-edge
            features to make your Intelligent Family Sequencing UI more dynamic
            and user-friendly than ever before. With MUED V.3, you're not just
            designing – you're creating a seamless, intuitive experience that
            speaks to users, enhances interactions, and elevates every project."
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div
        className="flex justify-center items-center  mt-5  h-10 font-bold font-[lora] p-2 "
        style={{}}
      >
        <p className="mt-0 text-black text-2xl text-center  ">
          Get Started Quickly
          <br></br>{" "}
          <a
            href="/introduction"
            className=""
            style={{
              color: "black",
            }}
          >
            Sound design and development resources
          </a>
        </p>
      </div>
      {/* Section 5 */}
      <div className="flex justify-center items-center py-8">
        <img
          src="\assets\img\resource\body_bg.png"
          alt="Develop Resources"
          className="w-[800px] h-auto  "
        />
      </div>
      {/* Section 6 */}
      <div className="flex justify-center items-center py-2 ">
        <img
          src="\assets\img\resource\End_Body.png"
          alt="Develop Resources"
          className="w-[1080px] h-auto  "
        />
      </div>
    </div>
  );
};

export default BodyPage;
