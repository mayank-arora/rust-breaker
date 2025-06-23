import React, { useState, useMemo } from "react";
import { useChecklist } from "../../hooks/useChecklist";
import ChecklistItem from "./ChecklistItem";
import "./Checklist.css";

const Checklist: React.FC = () => {
  const { items, toggleItem } = useChecklist();
  const [selectedWeek, setSelectedWeek] = useState(1);

  const filteredItems = useMemo(() => {
    return items.filter((item) => item.week === selectedWeek);
  }, [items, selectedWeek]);

  const completionPercentage = useMemo(() => {
    if (filteredItems.length === 0) return 0;
    const completedCount = filteredItems.filter(
      (item) => item.completed
    ).length;
    return Math.round((completedCount / filteredItems.length) * 100);
  }, [filteredItems]);

  return (
    <div className="checklist-container">
      <h2>Week {selectedWeek} Checklist</h2>
      <div className="week-selector">
        <span>Select Week:</span>
        {[1, 2, 3, 4].map((week) => (
          <button
            key={week}
            className={selectedWeek === week ? "active" : ""}
            onClick={() => setSelectedWeek(week)}
          >
            {week}
          </button>
        ))}
      </div>
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${completionPercentage}%` }}
        />
      </div>
      <div className="checklist">
        {filteredItems.map((item) => (
          <ChecklistItem key={item.id} item={item} onToggle={toggleItem} />
        ))}
      </div>
    </div>
  );
};

export default Checklist;
