import React, { useState, useRef } from "react";
import ResultsModal from "./ResultModal";
export default function TimerChallenge({ title, targetTime }) {
  // const [timerExpired, setTimerExpired] = useState(false);
  // const [timeRunning, setTimeRunning] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  const time = useRef();
  const dialog = useRef();

  if (timeRemaining <=0) {
    clearInterval(time.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.showModal();
    
  }

  function handleStart() {
    // setTimeRunning(true);
    time.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
      // setTimerExpired(true);
      // dialog.current.showModal();
    }, 10);
  }

  function handleStop() {
    clearInterval(time.current);
    dialog.current.showModal();
  }
  return (
    <>
      <ResultsModal ref={dialog} targetTime={targetTime} result={"Lost"} />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : ""}>
          {timerIsActive ? "Time Running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
