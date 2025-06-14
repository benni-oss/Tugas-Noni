import React from "react";

function Icon() {
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
              Icon
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
            4. Icon
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Icons are an important element in user interfaces. They provide
            quick recognition, convey information, and serve as visual
            decoration. Consistent style and high-quality icons enhance the
            overall product experience.{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Icon Design Principles{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\IconRes\icon_2.png"
            alt="MUED V.1"
            className="w-130  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Pixel Alignment{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Icons should be aligned precisely to the pixel grid to ensure
            clarity, especially when displayed at small sizes. Try to keep
            dimensions and positions as whole numbers.{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Simplicity{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Remove unnecessary details and focus on conveying the core content
            of the icon clearly and efficiently.{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Consistency and Comfort{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Icons should be visually harmonious with other interface elements
            and provide a pleasant and unified visual experience.{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Accurate Expression{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Icons should accurately reflect their meaning. Use clear and
            standardized naming conventions and styles.{" "}
          </p>
        </div>
      </div>

      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Note: <br></br>
          </p>
          <ul className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>
              Design elements must be precisely pixel-aligned for clear display.
              In tools like Sketch, use the pixel preview feature or a 5x zoom
              to check alignment.
            </li>
            <li>
              Optimize outlines to reduce excess anchor points and file size.
              Exporting as SVG also benefits performance and code output.
            </li>
            <li>
              Design should strictly follow icon design principles to maintain
              consistency in visual language shape, line thickness, and spacing
              should all align with the system's style.
            </li>
            <li>
              Reusable development components and third-party customization
              should follow these icon guidelines to maintain a consistent
              visual identity.
            </li>
          </ul>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Icon Canvas{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Canvas Size and Layout{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Icon design canvas typically uses two sizes: 16×16 and 24×24.
            <br></br>
            The safe zone margins are respectively 14×14 for the 16×16 canvas
            and 20×20 for the 24×24 canvas. The canvas grid has a unit of 1px.{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\IconRes\canvas_size.png"
            alt="MUED V.1"
            className="w-130  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Icon Reference Lines{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The visual size of icons is closely related to their actual visual
            impact. The design follows a standard set of guiding reference
            lines.{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\IconRes\icon_ref_lines.png"
            alt="MUED V.1"
            className="w-130  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Depending on the shape and characteristics of the icon, different
            sets of auxiliary reference lines can be used during design. While
            maintaining a consistent visual weight, elements should generally
            stay within the safe zone, but slight overlaps are allowed if
            necessary. Simple-shaped icons can be directly aligned using the
            safe zone as a design constraint.{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\IconRes\1.1.png"
            alt="MUED V.1"
            className="w-130  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\IconRes\1.2.png"
            alt="MUED V.1"
            className="w-130  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\IconRes\1.3.png"
            alt="MUED V.1"
            className="w-130  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Note: <br></br>
          </p>
          <ul className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>The choice of 16 and 24 sizes is based on:</li>
            <ul className="list-disc">
              <li>Commonly used UI system grid standards.</li>
              <lis>
                These two sizes are most commonly used and widely supported,
                covering the vast majority of icon display scenarios.
              </lis>
            </ul>
            <li>Regarding the reference lines:</li>
            <ul className="list-disc">
              <li>
                They are generally aligned to the edges of the safe zone. These
                auxiliary guides help keep the icon’s position and size visually
                consistent.
              </li>
            </ul>
            <li>Reminder:</li>
            <ul className="list-disc">
              <li>
                Reference lines are not mandatory rules. After designing the
                icon, you can place it alongside others and adjust to unify the
                visual size.
              </li>
            </ul>
          </ul>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Icon Attributes{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Strokes{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-disc pl-5 space-y-2">
            <li>For 16×16 size icons, use 1px strokes.</li>
            <li>For 24×24 size icons, use 2px strokes.</li>
            <li>
              No stroke end caps should be added, and nodes should be kept
              minimal for simplicity and precision.
            </li>
          </ul>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\IconRes\strokes.png"
            alt="MUED V.1"
            className="w-150  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Rounded Corners{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-disc pl-5 space-y-2">
            <li>
              For 16×16 icons, outer corners should have a radius of 1px, and
              inner corners should have no radius.
            </li>
            <li>
              For 24×24 icons, outer corners should have a radius of 2px, and
              inner corners should have no radius.
            </li>
          </ul>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\IconRes\rounded_corners.png"
            alt="MUED V.1"
            className="w-150  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Angles{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-disc pl-5 space-y-2">
            <li>Preferred angles are 0°, 45°, 90°, and 15°.</li>
            <li>
              15° angles can be used selectively to create more distinctive
              shapes or unique styling effects.
            </li>
          </ul>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\IconRes\angles.png"
            alt="MUED V.1"
            className="w-150  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">Note: </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-disc pl-5 space-y-2">
            <li>
              Avoiding stroke end caps ensures more consistent and visually
              appealing strokes.
            </li>
            {/* Section 1 */}
            <div className=" flex  mt-5  ">
              <div className="ml-5 w-100 ">
                <img
                  src="src\assets\img\IconRes\stroke_caps.png"
                  alt="MUED V.1"
                  className="w-150  scroll-ml-10"
                />
              </div>
            </div>
            <li>
              Minimizing nodes simplifies editing and scaling of the icon.
            </li>
            {/* Section 1 */}
            <div className=" flex  mt-5  ">
              <div className="ml-5 w-100 ">
                <img
                  src="src\assets\img\IconRes\scaling-icon.png"
                  alt="MUED V.1"
                  className="w-150  scroll-ml-10"
                />
              </div>
            </div>
            <li>Rounded outer corners improve alignment and visual balance.</li>
            <li>
              Using 15° angles selectively can make certain elements stand out
              or give a unique appearance.
            </li>
          </ul>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Icon Documentation{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Naming Rules{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Use The Format:<br></br>
            Function (verb) – State (optional) – Module (optional) – Business
            (optional) – Size (required) – Style (optional){" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Separate each segment with underscores for clear naming conventions.
            This format helps with development handoff and documentation.
            <br></br>Example:{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\IconRes\download_nor.png"
            alt="MUED V.1"
            className="w-150  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            All text should be lowercase English letters. Use camelCase only in
            special situations (e.g., statusBar).{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Export Workflow{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Method 1 – Sketch:{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>
              Name icons in Sketch according to the naming rules above. Avoid
              adding extra layers or groups.
            </li>
            <li>
              Place the icon on a white (#FFFFFF) background, and set opacity
              for unused areas to 0% for transparency distinction.
            </li>
            <li>Export icon graphics as SVGs.</li>
            <li>Use Illustrator to optimize and fine-tune the SVG.</li>
            <li>
              Use a Python + Selenium script to automatically upload the SVG to
              the icon font platform.
            </li>
          </ul>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Method 2 – Figma:{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>Name icons in Figma using the same naming rules.</li>
            <li>
              Place icons on a white background, with 0% opacity for transparent
              regions.
            </li>
            <li>
              Use the plugin svg-icon-automation or automation tools (e.g.,
              GitHub token, Figma token, npm token) to export SVGs.
            </li>
            <li>
              Optionally, export manually from Figma and then optimize them in
              Illustrator or a similar tool.
            </li>
          </ul>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">Note: </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>
              Icons can be previewed with simple names for easy recognition.
              Full names are for development documentation.
            </li>
            <li>
              Set a combined naming system in Illustrator. (In Sketch, the
              component names are automatically used during SVG export.)
            </li>
            <li>The exported files must be SVG for further optimization.</li>
            <span>
              Additional Tip: When using Method 2, make sure to install the Node
              environment.
            </span>
          </ul>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Icon Usage{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The Icon usage sizez range from 16px to 18px. <br></br>
            Use 8px as the increment scale, but avoid using non-multiples of 8
            (except for 2 and 3) as icon sizes. <br></br>
            <br></br>Use 16px and 24px as base sizes, and scale other sizes
            proportionally from the base size.{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Size Chart (based on 8px increments):{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\IconRes\size_char.png"
            alt="MUED V.1"
            className="w-125  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Here are also some recommended optional sizes, scaled down from the
            24px base:{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\IconRes\size_base.png"
            alt="MUED V.1"
            className="w-125  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Note (Right Panel):{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The 16px and 24px icon sizes are more commonly recommended, as they
            provide two distinct stroke weight styles.{" "}
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
  );
}

export default Icon;
