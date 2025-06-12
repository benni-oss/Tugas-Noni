import React from "react";

function Values() {
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
              Design Values
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
            Consistency
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            The consistency of system design language and specification helps to
            improve the user’s identification and readability of information,
            create a fast and efficient, reduce the user’s learning cost, and
            enhance the sense of brand and dependence..{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2 ">
          <img
            src="src\assets\img\resource\CONSISTENCY.png"
            alt="MUED V.1"
            className="w-100 h-18 scroll-ml-10"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
            Empathy
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Understand the business logic, understand the business scenario, on
            this basis, design based on the needs of the target role, and fully
            reflect the inclusiveness of multi-business scenarios and humanistic
            care for multi-target groups in the design.
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2 ">
          <img
            src="src\assets\img\resource\EMPATHY.png"
            alt="MUED V.1"
            className="w-100 h-18 scroll-ml-10"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
            Nature
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Design comes from nature and is loyal to nature. We hope that this
            design system’s pursuit of nature will not only stop at the visual
            level of deisgn elements, but also exist in creating a more natural
            product experience and realizing a more natural human-computer
            interaction.
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2 ">
          <img
            src="src\assets\img\resource\NATURE.png"
            alt="MUED V.1"
            className="w-100 h-18 scroll-ml-10"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black max-w-200 text-l text-justify font-bold">
            Life Force
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            User demand and data feedback give the product innovation and
            stability, so that it has better self-adaption and self-growth
            ability. Products to give users quality, personalized service. User
            needs and products are mutually driven and symbiosis. We hope that
            the future human-computer interaction design will be more efficient
            and more life force.
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2 ">
          <img
            src="src\assets\img\resource\LIFE_FORCE.png"
            alt="MUED V.1"
            className="w-100 h-18 scroll-ml-10"
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

export default Values;
