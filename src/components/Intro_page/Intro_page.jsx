import React from "react";

const BodyPage = () => {
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
          <div className="">MUED Design Guide</div>
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
            Basic Introduction
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
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black text-start text-l max-w-200 ">
            MUED Design system is short for MGI intelligent Design
            Specification, which is a complete design specification developed in
            order to ensure the consistency and integrity of intelligent
            manufacturing family sequencing UI.{" "}
          </p>
        </div>
      </div>

      {/* Section 2 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify ">
            The goal of MUED Design system is to provide a more flexible and
            customizable design resources to address the experience of a product
            ad provide guidelines for product design to respond quickly to
            business needs, while serving as a shared platform and a language of
            communication between designers, developers and other stakeholders.
          </p>
        </div>
      </div>
      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
            Sequencer Product
          </p>
        </div>
        
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <img
          src="src\assets\img\resource\Printer_shadow.png"
          alt="MUED V.1"
          className="w-1/4 scroll-ml-10"
        />
        </div>
      </div>
      {/* Section 5 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify ">
            The advanced sequencing technology ensures accurate, high-performance results, making it ideal for industries that demand exceptional precision, such as biotechnology and genetics. The product embodies flexibility, adaptability, and user-centered design principles, ensuring it meets the demands of modern manufacturing and research.
          </p>
        </div>
      </div>
       {/* Section 6 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify ">
            These sequencers are not just machines—they represent a leap forward in technology, designed to adapt to evolving business needs and keep pace with scientific progress. With customizable design resources and intuitive user interfaces, the MUED Design System aims to address both aesthetic and functional requirements, ensuring seamless user experiences. The emphasis on technology, innovation, and professionalism comes through in every aspect of the product, from its design to its performance.
          </p>
        </div>
      </div>
      {/* Section 7 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
            Logo Design and Philosophy
          </p>
        </div>
      </div>
      {/* Section 8 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <img
          src="src\assets\img\resource\MUID_LOGO_2.png"
          alt="MUED V.1"
          className="w-1/4 scroll-ml-10"
        />
        </div>
      </div>
       {/* Section 9 */}
      <div className=" flex justify-center items-center mt-5">
  <div className="ml-0 w-1/2">
    <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
      Color Philosophy:
    </p>
    <ul className="list-disc  text-black mt-2 text-justify ml-5">
      <li>The deep blue color in the MUED logo represents professionalism, trust, and stability, conveying a sense of reliability that aligns with the brand’s goal of demonstrating competence and expertise. It also reflects an innovative and forward-thinking approach, suitable for a modern product or service. Primary colors, like the blue used here, are intuitive visual elements that represent a product’s characteristics and communication concepts. These colors are often used to highlight key information, guide operations, and indicate important action points. MGI UI employs four primary color schemes that can be broadly applied across products while adhering to WCAG2.0 standards. Designers can choose the most appropriate scheme based on the product's positioning and tone, ensuring both accessibility and an optimal user experience.</li>
    </ul>
  </div>
</div>
 {/* Section 10 */}
      <div className=" flex justify-center items-center mt-5">
  <div className="ml-0 w-1/2">
    <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
      Typography – “MUED” Letters:
    </p>
    <ul className="list-disc  text-black mt-2 text-justify ml-5">
      <li>Simplicity and Modernity: The bold, clean uppercase letters reflect clarity, strength, and a forward-thinking design, ensuring the product is both practical and user-friendly.</li>
    </ul>
  </div>
</div>
{/* Section 11 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-8 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify ">
            The logo and overall design philosophy combine to convey a sense of innovation, professionalism, and reliability, which is essential for a product that operates in the tech and manufacturing sectors.
          </p>
        </div>
      </div>
      {/* Section 11 */}
      <div className=" flex justify-center items-center  mt-2  ">
        <div className="ml-8 w-1/2">
          <p className="mt-0 text-black max-w-200 text-l text-justify ">
            This design system and logo embody a commitment to providing cutting-edge, user-friendly solutions that cater to the growing needs of various industries, reflecting both the functionality and aesthetic of the sequencer product.
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
};

export default BodyPage;
