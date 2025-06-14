import React from 'react'

function Contact() {
  return (
       <div className="min-h-screen w-full mt-20">
      <div className="flex justify-center  items-center mt-20">
        <img
          src="src\assets\img\resource\hide_1.png" // ganti dengan path gambar latar belakang kamu
          alt="Background"
          className="absolute mt-10  w-200 h-9  object-cover -z-10" // posisi paling belakang
        />
      </div>

      <div
        className="flex justify-center items-center   font-bold font-[lora] "
        style={{}}
      >
        <p className="mt-0   text-black text-2xl text-start w-1/2  ">
          <div className="">Contact Us</div>
          <div className="flex justify-center  items-center ">
            <img
              src="src\assets\img\resource\hide_2.png" // ganti dengan path gambar latar belakang kamu
              alt="Background"
              className="absolute mt-10  w-200 h-6   object-cover -z-10" // posisi paling belakang
            />
          </div>

          <div className="mt-0">
            <a
              className="justify-center items-center text-lg "
              style={{
                color: "black",
              }}
            >
              How To get help from the MUED Design System team and contribute to the system.
            </a>
          </div>
        </p>
        <div className="flex justify-center  items-center mt-20">
          <img
            src="src\assets\img\IconRes\msg.png" // ganti dengan path gambar latar belakang kamu
            alt="Background"
            className="absolute mt-50 w-50 ml-50  -z-20" // posisi paling belakang
          />
        </div>
      </div>
      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
            Contribute a Small Fix or Enhancement to the MUED Design System (Internal Contributors Only)
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           A design system for a sequencer product is always evolving, and it thrives on the collaboration and contributions from our team. We’re excited to invite you to help improve it!{" "}
          </p>
        </div>
      </div>
        {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
          If you’re part of our team, you can contribute by posting in our internal channel:
{" "}
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
            #help-MUED-design-system
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           For external contributors who would like to share feedback, we welcome your thoughts through the feedback form available on each page of the product site.
           <br></br> <br></br>Currently, we are accepting contributions in the following areas:
          </p>
        </div>
      </div>

      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
            1.{" "}Fixes
          </p>
        </div>
      </div>
            {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-disc list-inside pl-5 space-y-2">
            <p>Currently, we are accepting contributions in the following areas:</p>
            <li>
              Bug fixes in the codebase that affect existing functionality in the sequencer UI or interactions.
            </li>
            <li>
              Corrections in our Figma components library (such as fixing inconsistent button styles or misaligned components).
            </li>
            <li>Clarifications or edits to our documentation, especially around confusing UI behaviors or user flows.</li>
          </ul>
        </div>
      </div>
       {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
            2.{" "}Small Enhancements
          </p>
        </div>
      </div>
           {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-inside list-disc pl-5 space-y-2">
            <p>Currently, we are accepting contributions in the following areas:</p>
            <li>
              Minor improvements, such as adding new icons, buttons, or UI elements that enhance the sequencer’s user experience without altering its core behavior.
            </li>
            <li>
              Adjustments to the color palette or typography that align with our product’s branding but don’t disrupt existing design patterns.
            </li>
           <p>These contributions will not break or disrupt the current flow of the sequencer and can be isolated to limit their impact across the entire design system.</p>
          </ul>
        </div>
      </div>
      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
           We’re Not Accepting Large Contributions at This Time
          </p>
        </div>
      </div>
    {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-inside list-disc pl-5 space-y-2">
            <p>Creating new features for a sequencer product is a meticulous process. Every design decision must take into account the product’s complex interaction patterns, various use cases, and the consistency required across different workflows. As such, we’re not able to accept the following types of contributions for now:</p>
            <li>
              Major enhancements, such as adding a new functionality to the sequencer interface (e.g., a new automation feature or playback control).
            </li>
            <li>
              New components or interaction patterns, such as visualizations for complex data (e.g., waveform editing or time-stretching controls).
            </li>
           <p>These types of changes need extensive coordination across multiple teams and have a broad impact on both the codebase and design documentation.</p>
          </ul>
        </div>
      </div>
 
{/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
           External Feedback
          </p>
        </div>
      </div>
      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify ">
           If you're not part of our team but have valuable feedback on the sequencer design system, please feel free to share your thoughts using the feedback collector link provided on our website. Your input is important to us!
          </p>
        </div>
      </div>
    {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
          Let's continue improving together and make the sequencer product the best it can be!
          </p>
        </div>
      </div>
      
    {/* Section 6 */}
      <div className="flex justify-center items-center mt-20  ">
        <img
          src="src\assets\img\resource\End_Body.png"
          alt="Develop Resources"
          className="w-[1000px] h-auto  "
        />
      </div>
    </div>
  )
}

export default Contact
