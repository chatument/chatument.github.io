import { BubbleV2 } from './BubbleV2';

export const LandingAnimation = (props) => {  
  const { inViewport , reference } = props

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 w-full lg:w-1/2" ref={reference}>
      <BubbleV2
        text="Hey Chatument, What are the proposals from the product team for the next quarter?"
        className={`fade-animation ${
          inViewport ? 'fade-animation-running' : ''
        }`}
        childClassName={`${inViewport ? 'animation-running' : ''}`}
        position="right"
      />
      <BubbleV2
        text="The product team proposed to focus on the user experience for the next big update of the platform."
        className={`fade-animation ${
          inViewport ? 'fade-animation-running delay-750ms' : ''
        }`}
        childClassName={`${inViewport ? 'animation-running delay-child-750ms' : ''}`}
        position="left"
      />
      <BubbleV2
        text="I got it. Thanks for your help!"
        className={`fade-animation ${
          inViewport ? 'fade-animation-running delay-1250ms' : ''
        }`}
        childClassName={`${inViewport ? 'animation-running delay-child-1250ms' : ''}`}
        position="right"
      />
    </div>
  );
};