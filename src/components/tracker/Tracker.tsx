import React from "react";
import { useTracker } from "../../hooks/useTracker";
import DaySquare from "./DaySquare";
import "./Tracker.css";
import WeekRequirements from "./WeekRequirements";

// This function will eventually get the real current day.
// For now, we can change it to test different weeks.
const getCurrentDay = () => 1;

const Tracker: React.FC = () => {
  const { days, markDayAsComplete } = useTracker();
  const currentDay = getCurrentDay();

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
