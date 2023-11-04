import { BubbleV2 } from './BubbleV2';

export const RigthAnimation = () => {
 
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 w-full lg:w-1/2 ml-0 lg:ml-6 animation-paused" >
      <BubbleV2
        text="How can i set up my local environment? I do not remember where the docs are"
        className="fade-animation"
        position="right"
      />
      <BubbleV2
        text={`You can spin up the local env with just two steps:`}
        className="fade-animation delay-500ms"
        childClassName='delay-child-500ms'
        position="left"
      />
      <BubbleV2
        text={`1. Clone the git repositories and set the environment variable \n 2. Run the Docker container with Docker Compose`}
        className="fade-animation delay-1000ms"
        childClassName='delay-child-1000ms'
        position="left"
      />
      <BubbleV2
        text={`Get more details byfollowing the referenced docs below`}
        className="fade-animation delay-1750ms"
        childClassName='delay-child-1750ms'
        position="left"
      />
      <BubbleV2
        text={`Got you, thanks my friend!`}
        className="fade-animation delay-2250ms"
        childClassName='delay-child-2250ms'
        position="right"
      />
    </div>
  );
};
