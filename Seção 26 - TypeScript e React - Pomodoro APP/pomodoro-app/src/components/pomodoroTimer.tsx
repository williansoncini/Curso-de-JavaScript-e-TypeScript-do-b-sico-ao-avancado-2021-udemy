import React, { useEffect, useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Timer } from './timer';
import { Button } from './button';

const bellStart = require('../sounds/bell-start.mp3');
const bellFinish = require('../sounds/bell-finish.mp3');

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

interface Props {
  pomodoroTimer: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = useState(props.pomodoroTimer);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');
  }, [working]);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null,
  );

  const configWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTimer);
    audioStartWorking.play();
  };

  const configRest = (long: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);
    audioStopWorking.play();

    if (long) setMainTime(props.longRestTime);
    else setMainTime(props.shortRestTime);
  };

  return (
    <>
      <div className="pomodoro">
        <h2>You are: {working ? 'working' : 'rest'}</h2>
        <Timer mainTime={mainTime} />
        <div className="controls">
          <Button text="work" onClick={configWork} />
          <Button text="Rest" onClick={() => configRest(false)} />
          <Button
            className={!working && !resting ? 'hidden' : ''}
            text={timeCounting ? 'Pause' : 'Play'}
            onClick={() => setTimeCounting(!timeCounting)}
          />
        </div>
        <div className="details">
          <p>Lorem ipsum dolor sit harum, corporis amet earum </p>
          <p>Lorem ipsum dolor sit harum, corporis amet earum </p>
          <p>Lorem ipsum dolor sit harum, corporis amet earum </p>
          <p>Lorem ipsum dolor sit harum, corporis amet earum </p>
        </div>
      </div>
    </>
  );
}
