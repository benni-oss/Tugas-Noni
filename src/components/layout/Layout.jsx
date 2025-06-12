import React from 'react'

function Layout() {
  return (
        <div className="min-h-screen w-full mt-20">
      <div className="flex justify-center  items-center mt-20">
        <img
          src="src\assets\img\resource\hide_1.png" // ganti dengan path gambar latar belakang kamu
          alt="Background"
          className="absolute mt-10 mr-10 w-1/2 h-9  object-cover -z-10" // posisi paling belakang
        />
      </div>

      <div
        className="flex justify-center items-center   font-bold font-[lora] "
        style={{}}
      >
        <p className="mt-0   text-black text-2xl text-start w-1/2  ">
          <div className="">MUED Design Guide</div>
          <div className="flex justify-center  items-center  ">
            <img
              src="src\assets\img\resource\hide_2.png" // ganti dengan path gambar latar belakang kamu
              alt="Background"
              className="absolute mt-10  w-1/2 h-6 mr-10   object-cover -z-10" // posisi paling belakang
            />
          </div>

          <div className="mt-0">
            <a
              className="justify-center items-center text-lg "
              style={{
                color: "black",
              }}
            >
             Layout
            </a>
          </div>
        </p>
        <div className="flex justify-center  items-center mt-20">
          <img
            src="src\assets\img\resource\sequencer_decorate.png" // ganti dengan path gambar latar belakang kamu
            alt="Background"
            className="absolute mt-50 w-50 ml-50  -z-20" // posisi paling belakang
          />
        </div>
      </div>
      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
          1. {" "}  Layout
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The overall design specification considers both design application and development implementation. It standardizes basic layouts, device screen selection, design language, grid systems, spacing schemes, and color schemes.{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           Basic Layout{" "}
          </p>
        </div>
      </div>
         {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           VisualFlow{" "}
          </p>
        </div>
      </div>
        {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-0 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           When users browse content, it typically follows a top-to-bottom and left-to-right reading order to ensure the information is presented clearly and consistently.{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\basic_layout.png"
            alt="MUED V.1"
            className="w-190  scroll-ml-10"
          />
        </div>
      </div>

     {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
         {" "}  Multi-level Layout
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           Navigation, titles, and key functions are placed at the top, while the lower part serves as the content area. A left-right layout is used to structure the full page. This layout is minimally affected by monitor or touchscreen resolution and aligns with typical visual reading habits. The upper and lower sections can be flexibly defined based on project needs. The top section may contain one or two rows. Research based on G99 and G800 displays found a dual-panel logic layout. There are seven types such as 9 A, B, C, D, etc. Multi-level layouts help users quickly locate entry points for modules, lowering learning cost and improving user experience..{" "}
          </p>
        </div>
      </div>
 
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\multi-level_layout2.png"
            alt="MUED V.1"
            className="w-190  scroll-ml-10"
          />
        </div>
      </div>
       {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\layout.png"
            alt="MUED V.1"
            className="w-190  scroll-ml-10"
          />
        </div>
      </div>
        {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-blue-500 underline max-w-200 text-l text-justify font-bold">
         {" "}  Example: Home Page - T7 Interface & Home Page - G800 Interface
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\Example_home.png"
            alt="MUED V.1"
            className="w-190  scroll-ml-10"
          />
        </div>
      </div>
            {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           Single Modul Layout{" "}
          </p>
        </div>
      </div>
       {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           A single click allows the user to start the program. This layout is designed to deliver a fast and efficient user experience, enhancing user satisfaction while effectively saving time and effort.{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\single_modul_layout.png"
            alt="MUED V.1"
            className="w-190  scroll-ml-10"
          />
        </div>
      </div>
           {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
          Example: Home Page – E25 Interface          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\Example_interface.png"
            alt="MUED V.1"
            className="w-190  scroll-ml-10"
          />
        </div>
      </div>
    </div>
  )
}

export default Layout
