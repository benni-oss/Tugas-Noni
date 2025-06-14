import React from 'react'

function Stepbar() {
  return (
          <div className="min-h-screen w-full mt-20">
      <div className="flex justify-center  items-center mt-20">
        <img
          src="src\assets\img\resource\hide_1.png" // ganti dengan path gambar latar belakang kamu
          alt="Background"
          className="absolute mt-20 mr-10 w-1/2 h-9  object-cover -z-10" // posisi paling belakang
        />
      </div>

      <div
        className="flex justify-center items-center   font-bold font-[lora] "
        style={{}}
      >
        <p className="mt-0   text-black text-2xl text-start w-1/2  ">
          <div className="">Components</div>
          
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
          1. {" "}  Step Bar
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
            Displays the current progress of all steps in a task, guiding users through each phase and giving them a sense of anticipation.{" "}
          </p>
        </div>
      </div>
      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-0 text-black text-start text-l max-w-200 ">
           Instruction{" "}
          </p>
        </div>
      </div>
         {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <ul className="mt-0 text-black text-start text-l max-w-200 list-decimal pl-5 space-y-2">
            <li>
            The font size and spacing within the component are fixed, with a spacing of 20px between the text and the line. Specific spacing may be adjusted visually as needed.
            </li>
            <li>
            Step types are available in small, medium, and large sizes. For touch screens, medium and large size recommended. For keyboard and mouse interactions, all sizes can be used.
            </li>
          </ul>
        </div>
      </div>
        {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-0 object-cover -z-20">
        <div className="ml-0 w-1/2">
          <p className="mt-7 text-black text-start text-l max-w-200 ">
           Basic Step Bar{" "}
          </p>
        </div>
      </div>
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="">
          <img
            src="src\assets\img\IconRes\Stepbar.png"
            alt="MUED V.1"
            className="w-150 scroll-ml-10"
          />
        </div>
      </div>


      {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 ">
          <p className="mt-10 text-black text-start text-sm max-w-150 ">
           <pre>
            <code>
              {`import React from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';

type StepStatus = 'process 1' | 'process 2' | 'process 3';
type StepSize = 'sm' | 'md' | 'lg';

interface Step {
  label: string;
  status: StepStatus;
}

interface BasicStepBarProps {
  steps: Step[];
  size?: StepSize;
}

const sizeClasses = {
  sm: {
    circle: 'w-5 h-5 text-[10px]',
    icon: 'w-3 h-3',
    label: 'text-xs',
    gap: 'space-x-1.5',
  },
  md: {
    circle: 'w-6 h-6 text-xs',
    icon: 'w-4 h-4',
    label: 'text-sm',
    gap: 'space-x-2',
  },
  lg: {
    circle: 'w-8 h-8 text-sm',
    icon: 'w-5 h-5',
    label: 'text-base',
    gap: 'space-x-3',
  },
};

export const BasicStepBar: React.FC<BasicStepBarProps> = ({ steps, size = 'md' }) => {
  const style = sizeClasses[size];

  return (
    <div className={clsx('flex items-center', style.gap)}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <div key={index} className="flex items-center">
            {/* Step icon */}
            <div
              className={clsx(
                'flex items-center justify-center rounded-full font-bold',
                style.circle,
                {
                  'bg-blue-600 text-white': step.status === 'Process 1',
                  'bg-blue-100 text-blue-600': step.status === 'Process 2 ',
                  'bg-gray-100 text-gray-400': step.status === 'Process 3,
                }
              )}
            >
              {step.status === 'Process 2' ? <Check className={style.icon} /> : index + 1}
            </div>

            {/* Step label */}
            <span
              className={clsx(style.label, 'ml-2', {
                'text-black font-medium': step.status === 'Process 1',
                'text-gray-700': step.status === 'Process 2',
                'text-gray-400': step.status === 'Process 3',
              })}
            >
              {step.label}
            </span>

            {/* Connector */}
            {!isLast && (
              <div className="w-10 h-px bg-gray-300 mx-2" />
            )}
          </div>
        );
      })}
    </div>
  );
};
`}
            </code>
           </pre>
          </p>
        </div>
      </div>
 
 
        {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black  max-w-200 text-l text-justify font-bold">
         Navigation Step Bar{" "}  
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-10  ">
        <div className=" ">
          <img
            src="src\assets\img\IconRes\NavStep.png"
            alt="MUED V.1"
            className="w-150  scroll-ml-10"
          />
        </div>
      </div>
    
      {/* Section 4 */}
      <div className=" flex justify-center items-center  mt-10  ">
        <div className=" ">
          <img
            src="src\assets\img\IconRes\nav_stepbar_2.png"
            alt="MUED V.1"
            className="w-150  scroll-ml-10"
          />
        </div>
      </div>
        {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 ">
          <p className="mt-10 text-black text-start text-sm max-w-150 ">
           <pre>
            <code>
              {`import React from 'react';
import clsx from 'clsx';

interface NavigationStep {
  label: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface NavigationStepBarProps {
  steps: NavigationStep[];
  size?: 'sm' | 'md' | 'lg';
  shadow?: boolean;
}

const navStepSizes = {
  sm: 'text-xs px-2 py-1',
  md: 'text-sm px-3 py-1.5',
  lg: 'text-base px-4 py-2',
};

export const NavigationStepBar: React.FC<NavigationStepBarProps> = ({ steps, size = 'md', shadow = false }) => {
  return (
    <div className="flex items-center space-x-4">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <div key={index} className="flex items-center">
            <button
              className={clsx(
                'rounded transition duration-200 font-medium',
                navStepSizes[size],
                {
                  'text-blue-600 border-b-2 border-blue-600': step.status === 'current' && !shadow,
                  'bg-blue-600 text-white': step.status === 'current' && shadow,
                  'text-gray-900': step.status === 'completed',
                  'text-gray-400': step.status === 'upcoming',
                  'shadow-md': shadow && step.status === 'current',
                }
              )}
            >
              {index + 1}.{step.label}
            </button>

            {!isLast && (
              <span className="mx-2 text-gray-300">&gt;</span>
            )}
          </div>
        );
      })}
    </div>
  );
};
`}
            </code>
           </pre>
          </p>
        </div>
      </div>
     

            {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black  max-w-200 text-l text-justify font-bold">
         Dot Step Bar{" "}  
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-10  ">
        <div className=" ">
          <img
            src="src\assets\img\IconRes\dot_step_bar.png"
            alt="MUED V.1"
            className="w-150  scroll-ml-10"
          />
        </div>
      </div>
    
        {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 ">
          <p className="mt-10 text-black text-start text-sm max-w-150 ">
           <pre>
            <code>
              {`import React from 'react';
import clsx from 'clsx';

interface DotStep {
  label: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface DotStepBarProps {
  steps: DotStep[];
  size?: 'sm' | 'md' | 'lg';
}

const dotSizes = {
  sm: {
    dot: 'w-2.5 h-2.5',
    label: 'text-xs',
    spacing: 'space-x-2',
  },
  md: {
    dot: 'w-3.5 h-3.5',
    label: 'text-sm',
    spacing: 'space-x-3',
  },
  lg: {
    dot: 'w-4 h-4',
    label: 'text-base font-medium',
    spacing: 'space-x-4',
  },
};

export const DotStepBar: React.FC<DotStepBarProps> = ({ steps, size = 'md' }) => {
  const style = dotSizes[size];

  return (
    <div className={clsx('flex items-center', style.spacing)}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <div key={index} className="flex flex-col items-center">
            <div className="flex items-center">
              <div
                className={clsx(
                  'rounded-full',
                  style.dot,
                  {
                    'bg-blue-600': step.status === 'current',
                    'bg-blue-400': step.status === 'completed',
                    'bg-gray-300': step.status === 'upcoming',
                  }
                )}
              ></div>
              {!isLast && <div className="w-8 h-px bg-gray-300 mx-2" />}
            </div>
            <div
              className={clsx(
                'mt-1',
                style.label,
                {
                  'text-blue-700': step.status === 'current',
                  'text-gray-800': step.status === 'completed',
                  'text-gray-400': step.status === 'upcoming',
                }
              )}
            >
              {step.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

`}
            </code>
           </pre>
          </p>
        </div>
      </div>
                 {/* Section 3 */}
      <div className=" flex justify-center items-center  mt-5  ">
        <div className="ml-0 w-1/2">
          <p className="mt-2 text-black  max-w-200 text-l text-justify font-bold">
         Description Step Bar{" "}  
          </p>
        </div>
      </div>
      <div className=" flex justify-center items-center  mt-10  ">
        <div className=" ">
          <img
            src="src\assets\img\IconRes\des_step_bar.png"
            alt="MUED V.1"
            className="w-150  scroll-ml-10"
          />
        </div>
      </div>
    
        {/* Section 1 */}
      <div className=" flex justify-center items-center  mt-5 object-cover -z-20">
        <div className="ml-0 ">
          <p className="mt-10 text-black text-start text-sm max-w-150 ">
           <pre>
            <code>
              {`import React from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';

interface DescriptionStep {
  label: string;
  description: string;
  status: 'completed' | 'current' | 'upcoming';
}

interface DescriptionStepBarProps {
  steps: DescriptionStep[];
  size?: 'sm' | 'md' | 'lg';
}

const descSizes = {
  sm: {
    circle: 'w-5 h-5 text-[10px]',
    icon: 'w-3 h-3',
    label: 'text-xs',
    desc: 'text-[10px]',
    gap: 'space-x-2',
  },
  md: {
    circle: 'w-6 h-6 text-xs',
    icon: 'w-4 h-4',
    label: 'text-sm',
    desc: 'text-xs',
    gap: 'space-x-3',
  },
  lg: {
    circle: 'w-8 h-8 text-sm',
    icon: 'w-5 h-5',
    label: 'text-base font-medium',
    desc: 'text-sm',
    gap: 'space-x-4',
  },
};

export const DescriptionStepBar: React.FC<DescriptionStepBarProps> = ({ steps, size = 'md' }) => {
  const style = descSizes[size];

  return (
    <div className={clsx('flex items-center', style.gap)}>
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="flex items-center">
              <div
                className={clsx(
                  'flex items-center justify-center rounded-full font-bold',
                  style.circle,
                  {
                    'bg-blue-600 text-white': step.status === 'current',
                    'bg-blue-100 text-blue-600': step.status === 'completed',
                    'bg-gray-100 text-gray-400': step.status === 'upcoming',
                  }
                )}
              >
                {step.status === 'completed' ? <Check className={style.icon} /> : index + 1}
              </div>
              {!isLast && <div className="w-10 h-px bg-gray-300 mx-2" />}
            </div>
            <div className={clsx('mt-1', style.label, {
              'text-black': step.status === 'current',
              'text-gray-800': step.status === 'completed',
              'text-gray-400': step.status === 'upcoming',
            })}>
              {step.label}
            </div>
            <div className={clsx('mt-0.5', style.desc, 'text-gray-400')}>{step.description}</div>
          </div>
        );
      })}
    </div>
  );
};


`}
            </code>
           </pre>
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

export default Stepbar
