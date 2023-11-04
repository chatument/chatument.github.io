import { BubbleV2 } from './BubbleV2';

export const LeftAnimation = (props) => {
  const { inViewport, reference } = props;

  return (
    <div
      className="flex flex-col items-center justify-center gap-y-4 w-full lg:w-1/2 mr-0 lg:mr-6"
      ref={reference}
    >
      <BubbleV2
        text="I would like to know more about the engineering RFC regarding the next iteration of the platform"
        className={`fade-animation ${
          inViewport ? 'fade-animation-running' : ''
        }`}
        childClassName={`${inViewport ? 'animation-running' : ''}`}
        position="right"
      />
      <BubbleV2
        text="The engineering team is proposing major changes that will help reduce development times, opening the doors for faster product iterations"
        className={`fade-animation ${
          inViewport ? 'delay-750ms fade-animation-running' : ''
        }`}
        childClassName={`${
          inViewport ? 'delay-child-750ms animation-running' : ''
        }`}
        position="left"
      />
      <BubbleV2
        text="Mmm, interesting, thanks"
        className={`fade-animation ${
          inViewport ? 'delay-1500ms fade-animation-running' : ''
        }`}
        childClassName={`${
          inViewport ? 'delay-child-1500ms animation-running' : ''
        }`}
        position="right"
      />
    </div>
  );
};
