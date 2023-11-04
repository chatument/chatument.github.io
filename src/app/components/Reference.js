const POSITIONS = {
  LEFT: 'left',
  RIGH: 'right',
};

export const Reference = (props) => {
  return (
    <>
      {props.position === POSITIONS.LEFT && (
        <div
          className={`${
            props.className || ''
          } max-width-custom bg-indigo-500 px-2 py-0 border border-gray-200 rounded-md shadow`}
        >
          <div className="text-sm truncate tracking-tight text-white leading-8">
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
          } max-width-custom bg-white px-2 py-0 border border-gray-200 rounded-md shadow`}
        >
          <div className="text-sm truncate tracking-tigh leading-8">
            <span className={`${props.childClassName || ''} type-right`}>
              {props.text}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
