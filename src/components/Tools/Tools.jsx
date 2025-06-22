import React from 'react'

function Tools() {
  return (
    <div className="min-h-screen w-full mt-20">
      {/* Background Image */}
      <div className="flex justify-center items-center mt-20">
        <img
          src="/assets/img/resource/hide_1.png"
          alt="Background"
          className="absolute mt-10 mr-10 w-[500px] h-[36px] object-cover -z-10"
        />
      </div>

      {/* Title Section */}
      <div className="flex justify-center items-center font-bold font-[lora]">
        <div className="w-1/2 text-black text-2xl text-start">
          <div>Tools</div>
          
          <div className="flex justify-center items-center mt-5">
            <img
              src="/assets/img/resource/hide_2.png"
              alt="Background"
              className="absolute w-[500px] h-[24px] mr-10 object-cover -z-10"
            />
          </div>

          <div className="mt-5">
            <a
              className="text-lg"
              style={{ color: 'black' }}
            >
              The essential tooling for MUED Design System
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center mt-20">
          <img
            src="/assets/img/IconRes/hammer_ico.png"
            alt="Hammer Icon"
            className="absolute mt-50 w-[200px] h-auto ml-50 -z-20"
          />
        </div>
      </div>

      {/* Tool Section: Figma */}
      <div className="flex justify-center items-center mt-10">
        <div className="ml-5 w-1/2 flex gap-5 items-center">
          <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/img/IconRes/figma_ico.png"
              alt="Figma Icon"
              className="w-[90px] h-[65px]"
            />
          </a>
          <img
            src="/assets/img/IconRes/sha_figma.png"
            alt="Shadow Figma"
            className="w-[100px] h-auto"
          />
        </div>
      </div>

      {/* Tool Section: Sketch */}
      <div className="flex justify-center items-center mt-10">
        <div className="ml-5 w-1/2 flex gap-20 items-center">
          <a href="https://www.sketch.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/img/IconRes/sketch_ico.png"
              alt="Sketch Icon"
              className="w-[90px] h-[65px]"
            />
          </a>
          <img
            src="/assets/img/IconRes/sha_sketch.png"
            alt="Shadow Sketch"
            className="w-[100px] h-auto"
          />
        </div>
      </div>

      {/* Tool Section: Lanhu */}
      <div className="flex justify-center items-center mt-10">
        <div className="ml-5 w-1/2 flex gap-20 items-center">
          <a href="https://lanhuapp.com/" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/img/IconRes/lanlu_ico.png"
              alt="Lanhu Icon"
              className="w-[90px] h-[65px]"
            />
          </a>
          <img
            src="/assets/img/IconRes/sha_lanlu.png"
            alt="Shadow Lanlu"
            className="w-[100px] h-auto"
          />
        </div>
      </div>

      {/* End Section */}
      <div className="flex justify-center items-center mt-20">
        <img
          src="/assets/img/resource/End_Body.png"
          alt="Develop Resources"
          className="w-[1000px] h-auto"
        />
      </div>
    </div>
  )
}

export default Tools
