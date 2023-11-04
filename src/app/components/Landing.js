'use client'
import handleViewport from 'react-in-viewport';
import { LandingAnimation } from './LandingAnimation';

export const Landing = () => {
  return (
    <div className="flex container flex-wrap pl-8 pt-8 pr-8 mx-auto sm:pt-24 ">
      <div className="flex items-center w-full lg:w-1/2 md:pr-4">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
            Stop wasting time: Consume and explore your org docs efficiently
          </h1>
          <p className="py-5 font-sans text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl ">
            Connect Chatument to the documentation of your organization and make
            it available to all your collaborators as an organization aware
            assistant.
          </p>

          <div>
            <div className="w-full md:flex md:items-center">
              <div className="relative mr-0 md:mr-3">
                <label className="hidden block mb-2 text-sm font-medium">
                  Email address
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                  <svg
                    className="w-3.5 h-3.5 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>
                  </svg>
                </div>
                <input
                  className="border text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5"
                  name="email_address"
                  aria-label="Email Address"
                  placeholder="Your email address..."
                  required=""
                  type="email"
                />
              </div>
              <button
                type="button"
                className="text-white w-full mt-8 md:w-fit md:mt-0 bg-indigo-700 hover:bg-indigo-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Join waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
      <ViewportBlock />
    </div>
  );
};


const Block = (props) => {
  const { inViewport, forwardedRef } = props;
  
  return (
    <LandingAnimation inViewport={inViewport} reference={forwardedRef} />
  );
};

const ViewportBlock = handleViewport(Block, /*{config: { disconnectOnLeave: false } }*/);
