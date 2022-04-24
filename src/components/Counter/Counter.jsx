import React from "react";

const Counter = ({
  count,
  handleChange,
  handleDecCount,
  handleIncCount,
}) => {
  return (
      <div className="mainBox">
        <div className="part dec">
          <p className="decIcon" onClick={handleDecCount}>
            -
          </p>
        </div>
        <input
          type="number"
          value={count}
          onChange={handleChange}
          className="part display"
        />
        <div className="part add">
          <p className="addCount" onClick={handleIncCount}>
            +
          </p>
        </div>
      </div>
  );
};

export default Counter;
