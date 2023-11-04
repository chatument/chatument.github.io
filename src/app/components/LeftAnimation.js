import { BubbleV2 } from './BubbleV2';

export const LeftAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4 w-full lg:w-1/2 mr-0 lg:mr-6">
      <BubbleV2
        text="I would like to know more about the engineering RFC regarding the next iteration of the platform"
        className="fade-animation"
        position="right"
      />
      <BubbleV2
        text="The engineering team is proposing major changes that will help reduce development times, opening the doors for faster product iterations"
        className="fade-animation delay-750ms"
        childClassName='delay-child-750ms'
        position="left"
      />
      <BubbleV2
        text="Mmm, interesting, thanks"
        className="fade-animation delay-1500ms"
        childClassName='delay-child-1500ms'
        position="right"
      />
    </div>
  );
};