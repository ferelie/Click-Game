import React, { useState, useRef } from "react";
import ResultsModal from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
  const [timerExpired, setTimerExpired] = useState(false);
  const [timeRunning, setTimeRunning] = useState(false);

  const time = useRef();
  const dialog = useRef();

  function handleStart() {
    setTimeRunning(true);
    time.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
  }

  function handleStop() {
    clearTimeout(time.current);
    setTimeRunning(false);
  }
  return (
    <>
      <ResultsModal ref={dialog} targetTime={targetTime} result={'Lost'}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeRunning ? handleStop : handleStart}>
            {timeRunning ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timeRunning ? "active" : ""}>
          {timeRunning ? "Time Running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
