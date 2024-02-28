import Player from "./components/Player.jsx";
import TimerChallenge from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />

      <div id="challenges">
        <TimerChallenge title="easy" targetTime={1} />
        <TimerChallenge title="medium" targetTime={5} />
        <TimerChallenge title="hard" targetTime={10} />
        <TimerChallenge title="very hard" targetTime={15} />
        <TimerChallenge title="extreme" targetTime={20} />
      </div>
    </>
  );
}

export default App;
