import React from 'react'

function Text() {
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
          <div className="">Global Style</div>
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
             Text
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
          3. {" "}  Text
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           Text is one of the most important elements for conveying information. Its visual characteristics and quality significantly impact the effectiveness of communication and the efficiency of product interaction. Modular Design provides standardized recommendations for fonts, font scales, line heights, font weights, and paragraphs.{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           Recommended Default Fonts{" "}
          </p>
        </div>
      </div>
         {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           Users rely on text to understand content and accomplish tasks. A well-designed font system should prioritize readability. Sans-serif fonts are more approachable, modern, and clear, making them 
a common choice in design.{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\font_a.png"
            alt="MUED V.1"
            className="w-130  scroll-ml-10"
          />
        </div>
      </div>
              {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           The recommended default fonts are preferred during development, and a set of alternative font libraries are provided. <br></br>Font-family:<br></br>
system-ui, -apple-system, BlinkMacSystemFont, 'Microsoft YaHei UI', 'Microsoft YaHei',
Roboto, 'Hiragino Sans GB', 'Source Han Sans CN',<br></br>
Fira Sans, 'Droid Sans', 'Helvetica Neue', arial, sans-serif{" "}
          </p>
        </div>
      </div>
                {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           A reasonable typographic scale helps create information hierarchy on the page, making the interface structure clear and key content stand out. Considering the frequency of use of both Chinese and English in the product's visual design, the body text size is set to 20px (under standard pixel density of 160ppi and 1dpr screen). For the same font size, English text visually appears smaller than Chinese, but remains visually balanced.{" "}
          </p>
        </div>
      </div>
            {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\font_b.png"
            alt="MUED V.1"
            className="w-130  scroll-ml-10"
          />
        </div>
      </div>
                    {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           The screen pixel density of ordinary devices is often lower than the standard value. Adjustments should be made based on different pixel densities. The following provides a reference calculation method. Results may not always be ideal and should be verified and adjusted based on testing and visual effects.{" "}
          </p>
        </div>
      </div>
                  {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\font_size.png"
            alt="MUED V.1"
            className="w-130  scroll-ml-10"
          />
        </div>
      </div>
                  {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
          Line Height{" "}
          </p>
        </div>
      </div>
                    {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
          The line height for headings and subtitles is approximately 1.25 times the font size, rounded upwards. The line height for body text and subtext is 1.5 times the font size, rounded upwards.{" "}
          </p>
        </div>
      </div>
          {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\chinese_line.png"
            alt="MUED V.1"
            className="w-150  scroll-ml-10"
          />
        </div>
      </div>
                              {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\english_line.png"
            alt="MUED V.1"
            className="w-150  scroll-ml-10"
          />
        </div>
      </div>
                      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
          Font Weight{" "}
          </p>
        </div>
      </div>
                    {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
          To ensure cross-platform display effect and readability, two font weights are selected: Regular and Bold, corresponding to CSS code values 400 and 600.{" "}
          </p>
        </div>
      </div>
                                   {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\font_weight.png"
            alt="MUED V.1"
            className="w-150  scroll-ml-10"
          />
        </div>
      </div>
    </div>
  )
}

export default Text
