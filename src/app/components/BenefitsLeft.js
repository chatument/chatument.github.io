import Image from 'next/image';
import React from 'react';

export const BenefitsLeft = () => {
  return (
    <>
      <section className="mx-auto container flex flex-col mt-8 pl-8 pr-8 pt-8 lg:flex-row lg:mt-20">
        <div className={'flex items-center justify-center w-full lg:w-1/2 order-last lg:order-first mt-8 lg:mt-0'}>
            {/* <Image
              src={'/chatument_dark.svg'}
              width={521}
              height={521}
              alt="Benefits"
              className={'object-cover'}
            /> */}
        </div>

        <div className={'flex flex-wrap items-center w-full lg:w-1/2'}>
          <div className="flex flex-col w-full mt-4 justify-center items-center">
            <h1 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl text-center">
              The time of your colleagues matters
            </h1>

            <p className="font-sans py-2 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl text-center">
              How many times have you asked a coworker about a decision or outcome just because it was faster than wandering around the docs looking for the answer?
            </p>

            <p className="font-sans py-2  text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl text-center">
              Next time, ask Chatument! 
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
