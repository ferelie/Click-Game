import React, { forwardRef } from "react";

const ResultsModal = forwardRef(function ResultsModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <p>
        You {result}!
        <br />
        The target time was <strong>{targetTime}</strong> seconds.
        <br />
        You stopped the timer with <strong>X seconds left</strong>
      </p>
      <form>
        <button type="submit">Play again</button>
      </form>
    </dialog>
  );
});

export default ResultsModal;
