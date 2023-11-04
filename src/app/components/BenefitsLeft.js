'use client'
import handleViewport from 'react-in-viewport';
import { LeftAnimation } from './LeftAnimation';

export const BenefitsLeft = () => {
  return (
    <>
      <section className="mx-auto container flex flex-col mt-8 pl-8 pr-8 pt-8 lg:flex-row lg:mt-20">
        <ViewportBlock />

        <div className={'flex flex-wrap items-center w-full lg:w-1/2 order-first mb-6 lg:order-none'}>
          <div className="flex flex-col w-full mt-4 justify-center items-center">
            <h1 className="max-w-md text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl text-center">
              The time of your colleagues matters
            </h1>

            <p className="max-w-md font-sans py-2 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl text-center">
              How many times have you asked a coworker about a decision or
              outcome just because it was faster than wandering around the docs
              looking for the answer?
            </p>

            <p className="max-w-md font-sans py-2  text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl text-center">
              Next time, ask Chatument!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

const Block = (props) => {
  const { inViewport, forwardedRef } = props;
  
  return (
    <LeftAnimation inViewport={inViewport} reference={forwardedRef} />
  );
};

const ViewportBlock = handleViewport(Block, /*{config: { disconnectOnLeave: false } }*/);