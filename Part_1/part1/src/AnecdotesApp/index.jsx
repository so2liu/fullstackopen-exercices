import React, { useState } from "react";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

export default function AnecdotesApp() {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  function handleVote(e) {
    e.preventDefault();
    setVotes((prev) => {
      const newState = [...prev];
      newState[selected] += 1;
      console.log(newState);
      return newState;
    });
  }

  function handleNext(e) {
    e.preventDefault();
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNext}>Next Anecdote</button>
      <h2>Anecdote with most votes</h2>
      {anecdotes[votes.findIndex((v) => v === Math.max(...votes))]}
    </div>
  );
}
