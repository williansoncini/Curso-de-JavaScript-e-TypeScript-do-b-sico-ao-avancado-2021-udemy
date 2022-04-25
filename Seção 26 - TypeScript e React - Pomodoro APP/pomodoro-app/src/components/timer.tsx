import React from 'react';
import { secondsToMinute } from '../utils/secondsToMinute';

interface Props {
  mainTime: number;
}

export function Timer(props: Props) {
  return <div className="timer">{secondsToMinute(props.mainTime)}</div>;
}
