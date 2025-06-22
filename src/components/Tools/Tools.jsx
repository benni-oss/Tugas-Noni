import React from 'react'

function Tools() {
  return (
           <div className="min-h-screen w-full mt-20">
      <div className="flex justify-center  items-center mt-20">
        <img
          src="\assets\img\resource\hide_1.png" // ganti dengan path gambar latar belakang kamu
          alt="Background"
          className="absolute mt-10 mr-10 w-1/2 h-9  object-cover -z-10" // posisi paling belakang
        />
      </div>

      <div
        className="flex justify-center items-center   font-bold font-[lora] "
        style={{}}
      >
        <p className="mt-0   text-black text-2xl text-start w-1/2  ">
          <div className="">Tools</div>
          <div className="flex justify-center  items-center  ">
            <img
              src="\assets\img\resource\hide_2.png" // ganti dengan path gambar latar belakang kamu
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
             The essential tooling for MUED Design System
            </a>
          </div>
        </p>
        <div className="flex justify-center  items-center mt-20">
          <img
            src="\assets\img\IconRes\hammer_ico.png" // ganti dengan path gambar latar belakang kamu
            alt="Background"
            className="absolute mt-50 w-50 ml-50  -z-20" // posisi paling belakang
          />
        </div>
      </div>

      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-10  ">
        <div className="ml-5 w-1/2 flex gap-5 ">
          <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
  <img
    src="/assets/img/IconRes/figma_ico.png"
    alt="MUED V.1"
    className="w-90 h-65 scroll-ml-10"
  />
</a>
          <img
            src="\assets\img\IconRes\sha_figma.png"
            alt="MUED V.1"
            className="w-100  scroll-ml-10"
          />
        </div>
      </div>



 
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-10 ">
        <div className=" ml-5 w-1/2 flex gap-20 ">
          <a href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer">
   <img
            src="\assets\img\IconRes\sketch_ico.png"
            alt="MUED V.1"
            className="w-90 h-65 scroll-ml-10"
          />
</a>
           <img
            src="\assets\img\IconRes\sha_sketch.png"
            alt="MUED V.1"
            className="w-100  scroll-ml-10"
          />
        </div>
      </div>

       {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-10  ">
        <div className="ml-5 w-1/2 flex gap-20 ">
          <a href="https://lanhuapp.com/" target="_blank" rel="noopener noreferrer">
   <img
            src="\assets\img\IconRes\lanlu_ico.png"
            alt="MUED V.1"
            className="w-90 h-65 scroll-ml-10"
          />
</a>
          <img
            src="\assets\img\IconRes\sha_lanlu.png"
            alt="MUED V.1"
            className="w-100  scroll-ml-10"
          />
        </div>
      </div>

  
{/* Section 6 */}
      <div className="flex justify-center items-center mt-20  ">
        <img
          src="\assets\img\resource\End_Body.png"
          alt="Develop Resources"
          className="w-[1000px] h-auto  "
        />
      </div>

    
  
    </div>
  )
}

export default Tools
