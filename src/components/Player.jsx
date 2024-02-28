import { useState, useRef } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [displayedName, setDisplayedName] = useState("");

  const inputRef = useRef();

  function handleClick() {
    setDisplayedName(inputRef.current.value);
    setPlayerName(inputRef.current.value = "");
  }
  return (
    <section id="player">
      <h2>Welcome {displayedName}</h2>
      <p>
        <input ref={inputRef} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
