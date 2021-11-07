import React, { useEffect, useState } from 'react';
import WaterPool from '../../components/WaterPool';
import * as styles from './style.module.scss';

export default function WaterControl() {
  const [waterLevel, setWaterLevel] = useState(0);
  let timer;
  const startControlWater = (type, level) => {
    console.log(waterLevel);
    document.getElementById('btnInc').disabled = true;
    document.getElementById('btnDec').disabled = true;
    if (
      document.getElementById('title').innerText != 'Full' &&
      level <= 5 &&
      type == 'increase'
    ) {
      setWaterLevel(level);
      document.getElementById('title').innerText = 'Increasing...';
      timer = setTimeout(() => {
        startControlWater('increase', level + 1);
      }, 1000);
    } else if (
      document.getElementById('title').innerText != 'Empty' &&
      level >= 0 &&
      type == 'decrease'
    ) {
      setWaterLevel(level);
      document.getElementById('title').innerText = 'Decreasing...';
      timer = setTimeout(() => {
        startControlWater('decrease', level - 1);
      }, 1000);
    } else {
      document.getElementById('btnInc').disabled = false;
      document.getElementById('btnDec').disabled = false;
      if (level >= 5 && document.getElementById('title').innerText != 'Empty') {
        document.getElementById('title').innerText = 'Full';
      } else if (document.getElementById('title').innerText != 'Full') {
        document.getElementById('title').innerText = 'Empty';
      }
      clearTimeout(timer);
    }
  };

  useEffect(() => {
    document.getElementById('water').style.height = `${waterLevel * 20}px`;
  }, [waterLevel]);

  return (
    <div>
      <div className={styles.title}>Adam Gabriel</div>
      <WaterPool level={waterLevel} startControlWater={startControlWater} />
    </div>
  );
}
