import React from "react";
import { weekRequirements } from "../../data/weekRequirements";
import "./WeekRequirements.css";

interface WeekRequirementsProps {
  currentDay: number;
}

const getWeekFromDay = (day: number): number => {
  return Math.ceil(day / 7);
};

const WeekRequirements: React.FC<WeekRequirementsProps> = ({ currentDay }) => {
  const week = getWeekFromDay(currentDay);
  const requirements = weekRequirements[week as keyof typeof weekRequirements];

  if (!requirements) {
    return <div>No requirements for this week.</div>;
  }

  return (
    <div className="week-requirements">
      <h3>Week {week} Requirements</h3>
      <ul>
        <li>Code for at least {requirements.minMinutes} minutes daily.</li>
        {requirements.githubRequired && <li>Push to GitHub daily.</li>}
        {requirements.publicPostRequired && (
          <li>Post progress publicly daily.</li>
        )}
      </ul>
    </div>
  );
};

export default WeekRequirements;
