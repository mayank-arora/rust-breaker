import React from "react";
import { useTracker } from "../../hooks/useTracker";
import DaySquare from "./DaySquare";
import "./Tracker.css";

const Tracker: React.FC = () => {
  const { days, markDayAsComplete } = useTracker();

  return (
    <div>
      <h2>30-Day Procrastination Tracker</h2>
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
