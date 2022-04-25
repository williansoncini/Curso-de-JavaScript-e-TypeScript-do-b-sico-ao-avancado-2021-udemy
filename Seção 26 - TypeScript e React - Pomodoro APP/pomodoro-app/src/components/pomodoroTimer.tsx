import React, { useState } from 'react';
import { useInterval } from '../hooks/use-interval';

interface Props {
  defaultPomodoroTimer: number;
}

export function PomodoroTimer(props: Props) {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTimer);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return <h1>Ola mundo! {mainTime}</h1>;
}
