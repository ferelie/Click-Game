import React, { forwardRef } from "react";

const ResultsModal = forwardRef(function ResultsModal(
  { timeRemaining, targetTime, onReset },
  ref
) {
  const userLost = timeRemaining <= 0;
  const formattedTime = (timeRemaining / 1000).toFixed(2);
  const score = Math.round((1 - timeRemaining / (targetTime * 1000)) * 100);

  return (
    <dialog ref={ref} className="result-modal" onClose={onReset}>
      <p>
        {userLost && <h2>You Lost</h2>}
        {!userLost && (
          <h2>
            You Won! <br /> Your score was <strong>{score}</strong>.
          </h2>
        )}
        The target time was <strong>{targetTime}</strong> seconds.
        <br />
        You stopped the timer with <strong>{formattedTime} seconds left</strong>
      </p>
      <form>
        <button type="submit" onSubmit={onReset}>
          Play again
        </button>
      </form>
    </dialog>
  );
});

export default ResultsModal;
