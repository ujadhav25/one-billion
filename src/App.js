import React, { useState, useEffect } from 'react';
import moment from 'moment';
import './App.scss';

import Result from './Result';



function App() {
  const [ctrDate, updateCtrDate] = useState(moment().subtract(1000000000, 'seconds'))
  useEffect(() => {
    setInterval(
      () => updateCtrDate(moment().subtract(1000000000, 'seconds')),
      1000
    );
  });

  return (
    <div>
      <div className="clock-container">
        <div className="clock-col">
          <p className="clock-day clock-timer">{ctrDate.format("YYYY")}</p>
          <p className="clock-label">Year</p>
        </div>
        <div className="clock-col">
          <p className="clock-day clock-timer">{ctrDate.format("M")}</p>
          <p className="clock-label">Month</p>
        </div>
        <div className="clock-col">
          <p className="clock-day clock-timer">{ctrDate.format("D")}</p>
          <p className="clock-label">Day</p>
        </div>
        <div className="clock-col">
          <p className="clock-hours clock-timer">{ctrDate.format("k")}</p>
          <p className="clock-label">Hours</p>
        </div>
        <div className="clock-col">
          <p className="clock-minutes clock-timer">{ctrDate.format("mm")}</p>
          <p className="clock-label">Minutes</p>
        </div>
        <div className="clock-col">
          <p className="clock-seconds clock-timer">{ctrDate.format("ss")}</p>
          <p className="clock-label">Seconds</p>
        </div>
      </div>
      <div>
        <div className="billion">
          1 Billion
        </div>
      </div>
      <Result />
    </div>
  );
}

export default App;

// https://codepen.io/eehayman/pen/jVPKpN
