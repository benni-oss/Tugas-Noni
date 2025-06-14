import React from "react";

function Color() {
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
             Color
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
            2. Color
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The MGI UI design system follows inclusive, diverse, evolving, and
            natural values in its color usage, providing designers with a
            comprehensive color specification.
            <br></br>Color is used to convey brand identity, express structural
            hierarchy and element states, and plays an important role in text
            readability. The use of color on pages should adhere to principles
            of consistency and rationality.{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Color Definition{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Different saturation levels of color relate to different personality
            traits and user groups. This differentiation reflects people’s
            experience of color in life—combining aesthetics, social context,
            and function, and must be integrated with form. <br></br>Color
            serves as a visual anchor for the brand. From any point in the
            interface, a specific color impression can be recognized.<br></br>
            Color definition will be optimized and adapted based on Huada
            Intelligent Manufacturing’s brand traits, generating four different
            directional schemes.{" "}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-disc  pl-5 space-y-2">
            <li>
              Corporate: Focuses on the corporate identity system, establishing
              main colors and usage guidelines to ensure visual consistency.
            </li>
            <li>
              Keywords:Colors act as guidance. By extracting brand-related
              keywords, corresponding emotional colors can be assigned.
            </li>
            <li>
              Competitor Companies: Analyze domestic and international
              competitors’ color trends to avoid overlap.
            </li>
          </ul>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Primary Colors{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Primary colors are one of the most critical visual elements that
            express the characteristics and conceptual values of a product. They
            are the most frequently used colors in products and are often used
            to reinforce identity, indicate actions, or highlight important
            scenarios. <br></br> <br></br>
            In the MGI UI design system, primary colors are chosen based on
            their wide applicability across products and must comply with WCAG
            2.0 standards. Designers can select the appropriate color plan based
            on product needs and positioning without rigid restrictions{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-5 w-1/2 ">
          <img
            src="src\assets\img\resource\primary_color1.png"
            alt="MUED V.1"
            className="w-190  scroll-ml-10"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Primary Color Palettes{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            According to different usage scenarios, each color scheme is
            extended into 10 levels of shades. These palettes are applied in
            states like hover, focus, active, and more.{" "}
          </p>
        </div>
      </div>
      <div className=" flex  justify-center items-center  mt-5  ">
        <div className="flex flex-row  mr-30">
          <img
            src="src\assets\img\resource\Velvet_Color Palette.png"
            alt="MUED V.1"
            className=" w-50  scroll-ml-10 m-4"
          />
          <img
            src="src\assets\img\resource\SlateBlue_Colour Pallete.png"
            alt="MUED V.1"
            className=" w-50  scroll-ml-10 m-4"
          />
        </div>
      </div>
      <div className=" flex  justify-center items-center  mt-5  ">
        <div className="flex flex-row  mr-30">
          <img
            src="src\assets\img\resource\LakeBlue_Color.png"
            alt="MUED V.1"
            className=" w-50  scroll-ml-10 m-4"
          />
          <img
            src="src\assets\img\resource\dodgeblue_colour_pallete.png"
            alt="MUED V.1"
            className=" w-50  scroll-ml-10 m-4"
          />
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Functional Colors{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Functional colors are generally used to represent status scenarios
            such as notifications, errors, warnings, or success messages. In
            terms of functional colors, we define two major aspects:{" "}
          </p>
          <ul className="mt-0 text-black text-start text-l max-w-200 list-disc  pl-5 space-y-0">
            <li>The function itself</li>
            <li>
              The emotions the colors should evoke in a unified and recognizable
              tone across all product modules.
            </li>
          </ul>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Because enterprise-level products cover a wide range of use cases,
            functional colors must be applicable to various interfaces and
            states. Each functional color includes 10 gradient levels, enough to
            support a wide range of user interface display needs.{" "}
          </p>
        </div>
      </div>
      <div className=" flex  justify-center items-center  mt-5  ">
        <div className="flex flex-row  mr-30">
          <img
            src="src\assets\img\resource\red_colour_pallete.png"
            alt="MUED V.1"
            className=" w-50  scroll-ml-10 m-4"
          />
          <img
            src="src\assets\img\resource\yellow_colour_pallete.png"
            alt="MUED V.1"
            className=" w-50  scroll-ml-10 m-4"
          />
        </div>
      </div>
      <div className=" flex  justify-center items-center  mt-5  ">
        <div className="flex flex-row  mr-30">
          <img
            src="src\assets\img\resource\green_colour_pallete.png"
            alt="MUED V.1"
            className=" w-50  scroll-ml-10 m-4"
          />
          <img
            src="src\assets\img\resource\blue_colour_pallete.png"
            alt="MUED V.1"
            className=" w-50  scroll-ml-10 m-4"
          />
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Neutral Colors{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Neutral colors are widely used in interface design. When used
            reasonably, they help emphasize content structure and enhance the
            user experience. They are commonly used for text, backgrounds,
            dividers, etc., and should comply with WCAG2.0 accessibility
            standards to ensure readability and accessibility.<br></br>The MGI
            UI provides two types of neutral tones:{" "}
          </p>
          <ul className="mt-0 text-black text-start text-l max-w-200 list-decimal  pl-5 space-y-0">
            <li>Achromatic neutral colors (pure greys)</li>
            <li>Hue-shifted neutral colors (tinted by the primary color).</li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-0 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Each type includes 13 shades to match different functional
            scenarios.{" "}
          </p>
        </div>
      </div>
         <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Achromatic Greys{" "}
          </p>
        </div>
      </div>
               <div className=" flex justify-center items-center  mt-0 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-5 text-black text-start text-l max-w-200 ">
            These greys are neutral and do not lean toward any hue, making them suitable for structural elements and pairing with any color theme.{" "}
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="flex justify-center items-center w-1/2 ">
          <img
            src="src\assets\img\resource\grey_color.png"
            alt="MUED V.1"
            className="w-50  scroll-ml-10"
          />
        </div>
      </div>
              <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Primary Color-Tinted Neutrals{" "}
          </p>
        </div>
      </div>
               <div className=" flex justify-center items-center  mt-0 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-5 text-black text-start text-l max-w-200 ">
           These are greys slightly tinted with the brand’s primary color tone to better reflect brand personality and emotional depth.<br></br>
Using Scheme 3 (velvet) as an example, we derive a set of neutrals by decreasing lightness in 10% increments. Typically, these correspond to values of 100%, 95%, 90%, 85%, 80%, etc. The first five are generally used as base backgrounds, while the rest are suitable for text and shadows.{" "}
          </p>
        </div>
      </div>

      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="flex justify-center items-center w-1/2 ">
          <img
            src="src\assets\img\resource\grey_color2.png"
            alt="MUED V.1"
            className="w-50  scroll-ml-10"
          />
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

export default Color;
