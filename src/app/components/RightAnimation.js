import { BubbleV2 } from './BubbleV2';

export const RigthAnimation = (props) => {
  const { inViewport, reference } = props;

  return (
    <div
      className="flex flex-col items-center justify-center gap-y-4 w-full lg:w-1/2 ml-0 lg:ml-6 animation-paused"
      ref={reference}
    >
      <BubbleV2
        text="How can i set up my local environment? I do not remember where the docs are"
        className={`fade-animation ${
          inViewport ? 'fade-animation-running' : ''
        }`}
        childClassName={`${inViewport ? 'animation-running' : ''}`}
        position="right"
      />
      <BubbleV2
        text={`You can spin up the local env with just two steps:`}
        className={`fade-animation ${
          inViewport ? ' delay-500ms fade-animation-running' : ''
        }`}
        childClassName={`${
          inViewport ? 'delay-child-500ms animation-running' : ''
        }`}
        position="left"
      />
      <BubbleV2
        text={`1. Clone the git repositories and set the environment variable \n 2. Run the Docker container with Docker Compose`}
        className={`fade-animation ${
          inViewport ? 'delay-1000ms fade-animation-running' : ''
        }`}
        childClassName={`${
          inViewport ? 'delay-child-1000ms animation-running' : ''
        }`}
        position="left"
      />
      <BubbleV2
        text={`Get more details byfollowing the referenced docs below`}
        className={`fade-animation ${
          inViewport ? 'delay-1750ms fade-animation-running' : ''
        }`}
        childClassName={`${
          inViewport ? 'delay-child-1750ms animation-running' : ''
        }`}
        position="left"
      />
      <BubbleV2
        text={`Got you, thanks my friend!`}
        className={`fade-animation ${
          inViewport ? 'delay-2250ms fade-animation-running' : ''
        }`}
        childClassName={`${
          inViewport ? 'delay-child-2250ms animation-running' : ''
        }`}
        position="right"
      />
    </div>
  );
};
