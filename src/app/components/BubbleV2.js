const POSITIONS = {
  LEFT: 'left',
  RIGH: 'right',
};

export const BubbleV2 = (props) => {
  return (
    <>
      {props.position === POSITIONS.LEFT && (
        <div
          className={`${
            props.className || ''
          } self-auto max-w-full bg-indigo-500 p-6 border border-gray-200 rounded-lg shadow sm:self-start sm:max-w-lg`}
        >
          <div className="text-xl tracking-tight text-white leading-8">
            <span className={`${props.childClassName || ''} type-left`}>
              {props.text}
            </span>
          </div>
        </div>
      )}
      {props.position === POSITIONS.RIGH && (
        <div
          className={`${
            props.className || ''
          } self-auto max-w-full bg-white p-6 border border-gray-200 rounded-lg shadow sm:self-end sm:max-w-lg`}
        >
          <div className="text-xl tracking-tigh leading-8">
            <span className={`${props.childClassName || ''} type-right`}>
              {props.text}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
