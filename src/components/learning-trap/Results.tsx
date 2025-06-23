import React from "react";

interface ResultsProps {
  score: number;
  onRetake: () => void;
}

const getRiskLevel = (score: number): { level: string; advice: string } => {
  if (score <= 2) {
    return {
      level: "Low Risk",
      advice: "Your habits are healthy. Keep up the great work!",
    };
  }
  if (score <= 5) {
    return {
      level: "Medium Risk",
      advice:
        "You might be falling into some learning traps. Focus more on building.",
    };
  }
  return {
    level: "High Risk",
    advice:
      "You are likely in a learning trap. It is crucial to shift your focus to implementation.",
  };
};

const Results: React.FC<ResultsProps> = ({ score, onRetake }) => {
  const { level, advice } = getRiskLevel(score);

  return (
    <div className="results-container">
      <h3>Assessment Complete</h3>
      <p>
        Your total score is: <strong>{score}</strong>
      </p>
      <div className={`risk-level ${level.toLowerCase().replace(" ", "-")}`}>
        <h4>{level}</h4>
        <p>{advice}</p>
      </div>
      <button onClick={onRetake}>Retake Assessment</button>
    </div>
  );
};

export default Results;
