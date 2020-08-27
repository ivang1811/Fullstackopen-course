import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const ArrayCreator = (number) =>
  Array.apply(null, new Array(number)).map(Number.prototype.valueOf, 0);

const MostVotes = ({ votes, anecdotes }) => {
  let i = votes.indexOf(Math.max(...votes));
  return <p>{anecdotes[i]}</p>;
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(ArrayCreator(anecdotes.length));

  const handleAnecdoteClick = () => setSelected(Math.floor(Math.random() * 6));
  const handleVoteClick = () => {
    const copyOfVotes = [...votes];
    copyOfVotes[selected] += 1;
    setVotes(copyOfVotes);
  };

  return (
    <div>
      {props.anecdotes[selected]}
      <br></br>
      <p>Has {votes[selected]}</p>
      <Button onClick={handleAnecdoteClick} text="Next anecdote"></Button>
      <Button onClick={handleVoteClick} text="Voet"></Button>
      <MostVotes votes={votes} anecdotes={props.anecdotes}></MostVotes>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
