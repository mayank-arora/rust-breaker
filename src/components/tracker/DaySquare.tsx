import React from "react";

interface DaySquareProps {
  day: number;
  completed: boolean;
  onClick: () => void;
}

const DaySquare: React.FC<DaySquareProps> = ({ day, completed, onClick }) => {
  const statusClass = completed ? "completed" : "incomplete";
  return (
    <div className={`day-square ${statusClass}`} onClick={onClick}>
      <span>{day}</span>
    </div>
  );
};

export default DaySquare;
