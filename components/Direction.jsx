import React from "react";

const Direction = (props) => {
  const { onDirection, id } = props;
  return (
    <>
      <div>
        <label className="directionToggle">
          <p>Switch Character Direction</p>

          <input
            type="checkbox"
            onClick={() => {
              onDirection(id);
            }}
          />
          <span className="slider round"></span>
        </label>

        {/* {onDirection ? setDirectionToggle : } */}
      </div>
    </>
  );
};

export default Direction;
