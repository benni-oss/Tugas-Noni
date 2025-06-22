import React from "react";

function Innoinher() {
  return (
    <div className="min-h-screen w-full mt-20">
      <div className="flex justify-center  items-center mt-20">
        <img
          src="\assets\img\resource\hide_1.png" // ganti dengan path gambar latar belakang kamu
          alt="Background"
          className="absolute mt-10  w-200 h-9  object-cover -z-10" // posisi paling belakang
        />
      </div>

      <div
        className="flex justify-center items-center   font-bold font-[lora] "
        style={{}}
      >
        <p className="mt-0   text-black text-2xl text-start w-1/2  ">
          <div className="">MUED Design Guide</div>
          <div className="flex justify-center  items-center ">
            <img
              src="\assets\img\resource\hide_2.png" // ganti dengan path gambar latar belakang kamu
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
              Design Values
            </a>
          </div>
        </p>
        <div className="flex justify-center  items-center mt-20">
          <img
            src="\assets\img\resource\sequencer_decorate.png" // ganti dengan path gambar latar belakang kamu
            alt="Background"
            className="absolute mt-50 w-50 ml-50  -z-20" // posisi paling belakang
          />
        </div>
      </div>
      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            Generic Content
          </p>
        </div>
      </div>
      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            1. Home Page Layout
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The MGI Producy home page is divided into three main product lines.{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Sequencer product line: The home page is divided into two sides of
            sequencing (A and B sides have two functional entrances for cleaning
            and sequencing respectively), taking “G800 and G99” as an example.
            A, B, C, D side sequencing (A, B, C, D side respectively have two
            functional entraces for cleaning and sequencing), take “T7” “as an
            example. Single side sequencing (one click to start sequencing),
            take “E25” as an example.{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0  ">
          <img
            src="\assets\img\resource\homepage_layout_2d_1.png"
            alt="MUED V.1"
            className=" w-125  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            2. Header Area
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Mainly composed of time (required), function button icon (required),
            etc.{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className="flex justify-center items-center mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ol className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>
              <strong>Time (Mandatory):</strong> In the 24-hour system and
              12-hour system can be displayed in Chinese format: year/month/day
              hour:minute:second AM/PM; in English format: month/day/year
              hour:minute:second AM/PM. 24-hour system can be displayed in
              Chinese format: year/month/day hour:minute:second; English format:
              Month/day/year hour:minute:second.
            </li>
            <li>
              <strong>Function button ICONS (Required):</strong> Keep the icon
              style consistent.
            </li>
          </ol>
        </div>
      </div>

      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0  ">
          <img
            src="\assets\img\resource\Header_Area.png"
            alt="MUED V.1"
            className=" w-125  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            3. Drop-down menu
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The drop-down menu intergrates log , settings, maintenance, about,
            shutdown and other functions.{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0  ">
          <img
            src="\assets\img\resource\Drop-down_menu.png"
            alt="MUED V.1"
            className=" w-50  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            4. Button
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className="flex justify-center items-center mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ol className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>
              Keep the button postion on the right for the affirmative action
              and on the left for the negative action. (Take pop-ups as an
              example)
            </li>
            <li>
              The status is the main button can be clicked status style,
              subsequent products can continue to use.
            </li>
            <li>
              Secondary Button (Secondary Button)Used for additional actions
              that are not the main priority. Usually light in style
              (outline/text), not striking but still clickable.
            </li>
            <li>
              Inactive Button (Non-Active Button)The main button is in a state
              where it cannot be clicked. Displayed with a dim style (gray/low
              opacity) to indicate that the action is not yet available.
            </li>
          </ol>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0  ">
          <img
            src="\assets\img\resource\button_text.png"
            alt="MUED V.1"
            className=" w-110  scroll-ml-10"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            5. Dialog box (pop-up)
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            MGI products inherit three dialog boxtypes, respectively,
            confirmation dialog box, message dialog box, function dialog box.{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0  ">
          <img
            src="\assets\img\resource\dialog_txt.png"
            alt="MUED V.1"
            className=" w-100  scroll-ml-10"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            6. Integrated Switchbar
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The interactive function points with high operation frequency in the
            sequencing page are integrated into the top switchbar and different
            function pages are switched by clicking{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0  ">
          <img
            src="\assets\img\resource\switchbar.png"
            alt="MUED V.1"
            className=" w-120  scroll-ml-10"
          />
        </div>
      </div>

      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            7. Prompt Message
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Provide normal, alarm, error, success, and other prompt messages.{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0  ">
          <img
            src="\assets\img\resource\prompt.png"
            alt="MUED V.1"
            className=" w-120  scroll-ml-10"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            8. Sensor information integration
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Sensor information mainly integrates negative pressure, chip
            temperature, fluid pressure, ATCG and other functions.{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0  ">
          <img
            src="\assets\img\resource\sensor.png"
            alt="MUED V.1"
            className=" w-120  scroll-ml-10"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            9. Icon
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Continue to improve and integrate the same type of ICONS to ensure
            adaptability and unified cognition under multipleproducts and make
            ether directions more convenient to download and use{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0  ">
          <img
            src="\assets\img\resource\icon.png"
            alt="MUED V.1"
            className=" w-120  scroll-ml-10"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            10. Color
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Color adopts the latest MUED design system - color specification,
            composed of light color scheme and dark color scheme{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0  ">
          <img
            src="\assets\img\resource\color _light.png"
            alt="MUED V.1"
            className=" w-120  scroll-ml-10"
          />
        </div>
      </div>
      <div className=" flex  justify-center items-center  mt-5  ">
        <div className="flex flex-row  ml-0  justify-between items-center">
          <img
            src="\assets\img\resource\colorgrey_color_palette.png"
            alt="MUED V.1"
            className=" w-50  scroll-ml-10 m-4"
          />
          <img
            src="\assets\img\resource\grey_color_palette.png"
            alt="MUED V.1"
            className=" w-50  scroll-ml-10 m-4"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            11. Global gesture operation
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            In any state, you can freely switch the window shape by swiping or
            clicking left and right and right with two fingers. Take G800 as an
            example.{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0  ">
          <img
            src="\assets\img\resource\global_gesture_operation.png"
            alt="MUED V.1"
            className=" w-120  scroll-ml-10"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify font-bold">
            12. Brand graphics
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The brand is continung to expand and improve the basic graphics,
            products can be based on the basic graphics for innovate ideas and
            graphics expansion.{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0  ">
          <img
            src="\assets\img\resource\brand_graphics.png"
            alt="MUED V.1"
            className=" w-120  scroll-ml-10"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The operating system locks the screen{" "}
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Interactive: Screen Saver lock screen is divided into two ways (if
            the software monopolizes the screen, use the software lock screen,
            if the software is not exclusive, use the system lock screen).{" "}
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Software lock screen: (G800, T20 as an example){" "}
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex justify-center items-center mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-disc pl-5 space-y-2">
            <li>
              The control software is full screen exclusive and cannot be
              minimized.
            </li>
            <li>Users cannot directly access the operating system.</li>
            <li>
              Users only need to log in to the operation control software once
              to meet the usability of the product
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Software lock screen: (Taking FTAT as an example, Dolphin){" "}
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex justify-center items-center mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-disc pl-5 space-y-2">
            <li>
              Control software is not full screen exclusive and can be
              minimized.
            </li>
            <li>Users have direct access to the operating system.</li>
            <li>
              Users need to log in to the operation control sofware, which meets
              the safety of the product, but reduces the ease of use of the
              product.
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            UI: The screen saver is mainly composed of static graphic design
            (optional), security lock (requiered), time (optional), and slogan
            (optional).{" "}
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex justify-center items-center mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>
              Static graphic design based on product model name (optional): In
              order to consider the continued unity of the product, the lock
              screen of the operating system is redesigned with the name of the
              sequencer + graphics, landscape maps, etc.
            </li>
            <li>
              Security lock (required): The operating system and the control
              software security lock combined into one, which can be used with
              guide text. Click to enter the control software.
            </li>
            <li>
              Company logo (optional): Displays the logo of BDA Intelligence.
            </li>
            <li>
              Product name (required): Display the product name of Huada
              Intellctual heritage, can change the UI Style.
            </li>
            <li>
              Time (optional): Display the current time, display effect can be
              added.
            </li>
            <li>
              Tagline (optional): According to the MGI product display
              corresponding tagline, enchance the user’s cognition and emotional
              to the product. According to the
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Instrument Startup{" "}
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The startup process of the instrument needs to carry out startup
            self-test and login two steps.{" "}
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Power-on self-test{" "}
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The normal running status of the startup self-test page consistes of
            progress bar (required), progress description text (required) and
            background elements (optional). The device error status consists of
            the icon (required), progress bar (required), description text
            (required).{" "}
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className="flex justify-center items-center mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>
              Progress bar (required): used to display the progress of the
              self-test process and give the user feedback on the current
              status. It is mainly composed of gray background color and
              gradient dynamic progress bar with gene graph.
            </li>
            <li>
              Progress description text (required): show the percentage text
              field to describe the progress bar. The font style is montserrat
              light.
            </li>
            <li>
              Background elements (optional): used as background to enhance
              visual effect.
            </li>
            <li>
              Icon (required): use according to the text information to quickly
              let the user identify the instrument has an error.
            </li>
            <li>
              Description (required): displays detailed error information.
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Log in{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>
              Username: the user drop-down selection or input field
              automatically brings out the associated username.
            </li>
            <li>Password: the detailed password can be displayed.</li>
          </ul>
        </div>
      </div>
            <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Instrument Startup
          </p>
        </div>
      </div>
                  <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The sequencing process mainly consists of home page, self test, loading consumables, setting sequencing information, information review, sequencing run-make DNB, Load DNB, sequencing, cleaning, sequencing completed, unloading materials.
          </p>
        </div>
      </div>
                      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           Interaction
          </p>
        </div>
      </div>
            <div className="flex justify-center items-center mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>
              When the home page contains only one copy, click on cleaning and sequencing to display specific information respectively. Take “T20” as an example.
            </li>
            <li>When the home page contains multiple slides and there is and untested process, click the two buttons to display new sequencing and restore sequencing and there is no untested example.</li>
              <li>
              Single slide just click the sequencing button for sequencing. Take “E25” as an example.
            </li>
            <li>
              Layout mode can be divided into A, B, side evenly divided, A side expansion mode. (Unperfected)
            </li>
          </ul>
        </div>
      </div>
         <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
          UI
          </p>
        </div>
      </div>
                  <div className="flex justify-center items-center mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>
              Graphics: the circle and gene graphics are the basis of the map line, and the follow-up is extended on this basis.
            </li>
            <li>Color: design according to the latest MUED color design specification.</li>
              <li>
              Icons: Follow the uniform cleaning and sequencing icon style, the subsequent products be unified.
            </li>
            <li>
              Progress: display the total sequencing/cleaning progress with a progress bar or percentage text description.
            </li>
          </ul>
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
  );
}

export default Innoinher;
