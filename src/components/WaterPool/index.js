import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function WaterPool({ level, startControlWater }) {
  return (
    <div>
      <div className="waterPool">
        <div>
          <span>Status:&nbsp;</span>
          <span id="title">Ready</span>
        </div>
        <div>{`Level: ${level}`}</div>
        <div id="water" />
      </div>
      <div className="buttonWrapper">
        <button id="btnInc" onClick={() => startControlWater('increase', 0)}>
          increaseWaterLevel
        </button>
        <button id="btnDec" onClick={() => startControlWater('decrease', 5)}>
          decreaseWaterLevel
        </button>
      </div>
    </div>
  );
}

WaterPool.propTypes = {
  level: PropTypes.number,
  startControlWater: PropTypes.func,
};
