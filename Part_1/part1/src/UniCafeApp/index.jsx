import React, { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

export default function UniCafeApp() {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [statisticsVisible, setStatisticsVisible] = useState(false);

  const average = (good - bad) / (good + bad + neutral);
  const positive = good / (good + bad + neutral);
  return (
    <div>
      <h2>Give Feedback</h2>
      <Button
        text="Good"
        onClick={() => {
          setGood((prev) => prev + 1);
          setStatisticsVisible(true);
        }}
      />
      <Button
        text="Neutral"
        onClick={() => {
          setNeutral((prev) => prev + 1);
          setStatisticsVisible(true);
        }}
      />
      <Button
        text="Bad"
        onClick={() => {
          setBad((prev) => prev + 1);
          setStatisticsVisible(true);
        }}
      />

      <h2>Statistics</h2>
      {statisticsVisible ? (
        <table>
          <tbody>
            <Statistics text="good" value={good.toFixed(0)} />
            <Statistics text="neutral" value={neutral.toFixed(0)} />
            <Statistics text="bad" value={bad.toFixed(0)} />
            <Statistics text="average" value={average.toFixed(1)} />
            <Statistics
              text="positive"
              value={(positive * 100).toFixed(1) + "%"}
            />
          </tbody>
        </table>
      ) : (
        "No Feedback Given"
      )}
    </div>
  );
}
