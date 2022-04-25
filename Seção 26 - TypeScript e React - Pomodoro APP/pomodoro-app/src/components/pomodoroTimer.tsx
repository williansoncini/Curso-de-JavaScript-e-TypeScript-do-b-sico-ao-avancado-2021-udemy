import React, { useCallback, useEffect, useState } from 'react';
import { useInterval } from '../hooks/use-interval';
import { Timer } from './timer';
import { Button } from './button';
import { secondsToMinute } from '../utils/secondsToMinute';
import { secondsToTime } from '../utils/secondsToTime';

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
  const fillArrayCycle = () => new Array(props.cycles - 1).fill(true);

  const [mainTime, setMainTime] = useState(props.pomodoroTimer);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);

  const [cyclesQtdManager, setCyclesQtdManager] = useState(fillArrayCycle());

  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [completedCycles, setCompletedCycles] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
      if (working) setFullWorkingTime(fullWorkingTime + 1);
    },
    timeCounting ? 1000 : null,
  );

  const configWork = useCallback(() => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTimer);
    audioStartWorking.play();
  }, [
    setTimeCounting,
    setWorking,
    setResting,
    setMainTime,
    props.pomodoroTimer,
  ]);

  const configRest = useCallback(
    (long: boolean) => {
      setTimeCounting(true);
      setWorking(false);
      setResting(true);
      audioStopWorking.play();

      if (long) setMainTime(props.longRestTime);
      else setMainTime(props.shortRestTime);
    },
    [
      setTimeCounting,
      setWorking,
      setResting,
      setMainTime,
      props.longRestTime,
      props.shortRestTime,
    ],
  );

  useEffect(() => {
    if (working) document.body.classList.add('working');
    if (resting) document.body.classList.remove('working');

    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      cyclesQtdManager.pop();
      configRest(false);
    } else if (working && cyclesQtdManager.length <= 0) {
      configRest(true);
      setCyclesQtdManager(fillArrayCycle());
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configWork();
  }, [
    working,
    resting,
    mainTime,
    cyclesQtdManager,
    numberOfPomodoros,
    completedCycles,
    configRest,
    configWork,
    props.cycles,
  ]);

  return (
    <>
      <div className="pomodoro">
        <h2>You are: {working ? 'working' : 'resting'}</h2>
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
          <p>Completed cycles: {completedCycles} </p>
          <p>Working time: {secondsToTime(fullWorkingTime)} </p>
          <p>Number of pomodoros: {numberOfPomodoros} </p>
        </div>
      </div>
    </>
  );
}
