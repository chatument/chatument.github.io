import { RigthAnimation } from "./RightAnimation";

export const BenefitsRight = () => {
  return (
    <>
      <section className="mx-auto container flex flex-col mt-8 pl-8 pr-8 pt-8 lg:flex-row lg:mt-20">
        <div className={'flex flex-wrap items-center w-full lg:w-1/2 mb-6'}>
          <div className="flex flex-col w-full mt-4 justify-center items-center">
            <h1 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl text-center">
              Interactively explore your docs
            </h1>

            <p className="py-2 font-sans text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl text-center">
              Colleagues struggle to find the information they need from docs maintained by other teams.  
            </p>

            <p className="py-2 font-sans text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl text-center">
              It is time expensive for new hires to go over the documentation the first few days. 
            </p>

            <p className="py-2 font-sans text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl text-center">
              Chatument makes the process of documentation discovery and exploration easier!
            </p>
          </div>
        </div>
        <RigthAnimation />
      </section>
    </>
  );
};