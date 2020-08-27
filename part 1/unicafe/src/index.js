import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const Statistic = ({ text, value }) => (
  <tr>
    <td>
      {text} {value}
    </td>
  </tr>
);

const Statistics = ({ good, neutral, bad, total, average, positiveScore }) => {
  if (total === 0) {
    return <p>No Statistics Yet</p>;
  }
  return (
    <div>
      <table>
        <tbody>
          <Statistic text="Good" value={good}></Statistic>
          <Statistic text="neutral" value={neutral}></Statistic>
          <Statistic text="bad" value={bad}></Statistic>
          <Statistic text="Average" value={average}></Statistic>
          <Statistic text="Total" value={total}></Statistic>
          <Statistic text="positive Score" value={positiveScore}></Statistic>
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  const total = good + bad + neutral;
  const average = (good - bad) / total;
  const positiveScore = total > 0 ? `${(good / total) * 100} %` : "0 %";
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleBadClick} text="Bad"></Button>
      <Button onClick={handleNeutralClick} text="Neutral"></Button>
      <Button onClick={handleGoodClick} text="Good"></Button>
      <h1>Statistics</h1>
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        total={total}
        positiveScore={positiveScore}
      ></Statistics>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
