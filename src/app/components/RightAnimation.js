import { BubbleV2 } from './BubbleV2';

export const RigthAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-8 w-full lg:w-1/2">
      <BubbleV2
        text="How can i set up my local environment? I do not remember where the docs are"
        className="fade-animation"
        position="right"
      />
      <BubbleV2
        text="You can spin up the local env with just two steps:"
        // className="fade-animation delay-500ms"
        // childClassName='delay-child-500ms'
        position="left"
      />
      <BubbleV2
        text="1. Clone the git repositories and set the environment variables"
        // className="fade-animation delay-500ms"
        // childClassName='delay-child-500ms'
        position="left"
      />
      <BubbleV2
        text="2. Run the Docker container with Docker Compose"
        // className="fade-animation delay-500ms"
        // childClassName='delay-child-500ms'
        position="left"
      />
      <BubbleV2
        text="Get more details byfollowing the referenced docs below"
        // className="fade-animation delay-500ms"
        // childClassName='delay-child-500ms'
        position="left"
      />
      <BubbleV2
        text="Got you, thanks my friend!"
        // className="fade-animation delay-1000ms"
        // childClassName='delay-child-1000ms'
        position="right"
      />
    </div>
  );
};
