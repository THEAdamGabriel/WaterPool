import React, { useEffect, useState } from 'react';
import WaterPool from '../../components/WaterPool';
import * as styles from './style.module.scss';

export default function WaterControl() {
  const [waterLevel, setWaterLevel] = useState(0);
  let timer;
  const startControlWater = (type, level) => {
    document.getElementById('btnInc').disabled = true;
    document.getElementById('btnDec').disabled = true;
    setWaterLevel(level);
    if (level < 5 && type == 'increase') {
      document.getElementById('title').innerText = 'Increasing...';
      timer = setTimeout(() => {
        startControlWater('increase', level + 1);
      }, 1000);
    } else if (level > 0 && type == 'decrease') {
      document.getElementById('title').innerText = 'Decreasing...';
      timer = setTimeout(() => {
        startControlWater('decrease', level - 1);
      }, 1000);
    } else {
      document.getElementById('btnInc').disabled = false;
      document.getElementById('btnDec').disabled = false;
      if (level == 5) {
        document.getElementById('title').innerText = 'Full';
      } else {
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
