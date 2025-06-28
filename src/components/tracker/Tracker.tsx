import React from "react";
import { useTracker } from "../../hooks/useTracker";
import DaySquare from "./DaySquare";
import "./Tracker.css";
import WeekRequirements from "./WeekRequirements";

const getDayDifference = (startDate: string) => {
  const start = new Date(startDate);
  const today = new Date();
  start.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);
  const diffTime = Math.abs(today.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays + 1; // Day 1 is the start date
};

const Tracker: React.FC = () => {
  const { days, startDate, markDayAsComplete } = useTracker();
  const currentDay = getDayDifference(startDate);

  return (
    <div>
      <h2>30-Day Procrastination Tracker</h2>
      <WeekRequirements currentDay={currentDay} />
      <div className="tracker-grid">
        {days.map((day) => (
          <DaySquare
            key={day.day}
            day={day.day}
            completed={day.completed}
            onClick={() => markDayAsComplete(day.day)}
          />
        ))}
      </div>
    </div>
  );
};

export default Tracker;
