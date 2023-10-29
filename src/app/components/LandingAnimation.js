import { Bubble } from './Bubble';

const BUBBLE_ONE = [
  {
    message: 'Hey Chatument, what is the',
    animationClass: '',
  },
  {
    message: ' planning meeting outcome of ',
    animationClass: 'delay-250ms',
  },
  {
    message: 'the product roadmap?',
    animationClass: 'delay-500ms',
  },
];

const BUBBLE_TWO = [
  {
    message: 'In the next quarter, the ',
    animationClass: 'delay-750ms',
  },
  {
    message: 'product team will focus on the ',
    animationClass: 'delay-1000ms',
  },
  {
    message: '2.0 update UX proposed ',
    animationClass: 'delay-1250ms',
  },
  {
    message: 'two weeks ago.',
    animationClass: 'delay-1500ms',
  },
];

const BUBBLE_THREE = [
  {
    message: 'I got it, thanks for your help!',
    animationClass: 'delay-1750ms',
  },
];

export const LandingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full lg:w-1/2">
      <Bubble text={BUBBLE_ONE} className={'fade-animation'} position="right" />
      <br />
      <Bubble
        text={BUBBLE_TWO}
        className={'fade-animation delay-500ms'}
        position="left"
      />
      <br />
      <Bubble
        text={BUBBLE_THREE}
        className={'fade-animation delay-1000ms'}
        position="right"
      />
    </div>
  );
};
