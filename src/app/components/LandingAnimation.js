import { BubbleV2 } from './BubbleV2';

export const LandingAnimation = (props) => {  
  const { inViewport , reference } = props

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 w-full lg:w-1/2" ref={reference}>
      <BubbleV2
        text="Hey Chatument, what is the planning meeting outcome of the product roadmap?"
        className={`fade-animation ${
          inViewport ? 'fade-animation-running' : ''
        }`}
        childClassName={`${inViewport ? 'animation-running' : ''}`}
        position="right"
      />
      <BubbleV2
        text="In the next quarter, the product team will focus on the 2.0 update UX proposed two weeks ago."
        className={`fade-animation ${
          inViewport ? 'fade-animation-running delay-750ms' : ''
        }`}
        childClassName={`${inViewport ? 'animation-running delay-child-750ms' : ''}`}
        position="left"
      />
      <BubbleV2
        text="I got it, thanks for your help!"
        className={`fade-animation ${
          inViewport ? 'fade-animation-running delay-1250ms' : ''
        }`}
        childClassName={`${inViewport ? 'animation-running delay-child-1250ms' : ''}`}
        position="right"
      />
    </div>
  );
};