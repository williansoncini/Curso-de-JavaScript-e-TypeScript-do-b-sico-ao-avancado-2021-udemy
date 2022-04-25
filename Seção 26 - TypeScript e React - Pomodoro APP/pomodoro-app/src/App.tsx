import React from 'react';
import { PomodoroTimer } from './components/pomodoroTimer';

function App() {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTimer={3}
        shortRestTime={2}
        longRestTime={3}
        cycles={4}
      />
    </div>
  );
}

export default App;
