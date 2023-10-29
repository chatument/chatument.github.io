const POSITIONS = {
  LEFT: 'left',
  RIGH: 'right',
};

export const Bubble = (props) => {
  return (
    <>
      {props.position === POSITIONS.LEFT && (
        <div
          className={`${
            props.className || ''
          } self-auto  bg-indigo-500 p-6 border border-gray-200 rounded-lg shadow sm:self-start`}
        >
          <h5 className="text-xl tracking-tight text-white leading-8">
            {props?.text?.length > 0 &&
              props?.text?.map(({ message, animationClass }) => {
                return (
                  <div
                    className={`typed-out-left ${animationClass || ''}`}
                    key={message || ''}
                  >
                    {message || 'error'}
                  </div>
                );
              })}
          </h5>
        </div>
      )}
      {props.position === POSITIONS.RIGH && (
        <div
          className={`${
            props.className || ''
          } self-auto bg-white p-6 border border-gray-200 rounded-lg shadow sm:self-end`}
        >
          <h5 className="text-xl tracking-tigh leading-8">
            {props?.text?.length > 0 &&
              props?.text?.map(({ message, animationClass }) => {
                return (
                  <div
                    className={`typed-out-right ${animationClass || ''}`}
                    key={message || ''}
                  >
                    {message || 'error'}
                  </div>
                );
              })}
          </h5>
        </div>
      )}
    </>
  );
};
