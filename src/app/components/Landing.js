'use client';
import handleViewport from 'react-in-viewport';
import { LandingAnimation } from './LandingAnimation';
import { EmailInput } from './EmailInput';

export const Landing = () => {
  return (
    <div className="flex container flex-wrap pl-8 pt-8 pr-8 mx-auto sm:pt-24 ">
      <div className="flex items-center w-full lg:w-1/2 md:pr-4">
        <div className="max-w-2xl mb-8">
          <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-5xl xl:leading-tight">
            Stop wasting time: Consume and explore your org docs efficiently
          </h1>
          <p className="py-5 font-sans text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl ">
            Connect Chatument to the documentation of your organization and make
            it available to all your collaborators as an organization aware
            assistant.
          </p>

          <div>
            <div className="w-full md:flex md:items-center">
              <EmailInput />
            </div>
          </div>
          <div className="text-sm font-medium text-gray-500 mt-6">
            {`By joining the waitlist, you agree with Chatument's`}{' '}
            <a
              rel="nofollow"
              className="text-indigo-500 hover:underline"
              href="/privacy-policy"
            >
              Privacy Policy
            </a>
            .
          </div>
        </div>
      </div>
      <ViewportBlock />
    </div>
  );
};

const Block = (props) => {
  const { inViewport, forwardedRef } = props;

  return <LandingAnimation inViewport={inViewport} reference={forwardedRef} />;
};

const ViewportBlock = handleViewport(
  Block /*{config: { disconnectOnLeave: false } }*/,
);
