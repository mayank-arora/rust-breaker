import React from "react";
import { ChecklistItem as ChecklistItemType } from "../../types";
import "./ChecklistItem.css";

interface ChecklistItemProps {
  item: ChecklistItemType;
  onToggle: (id: string) => void;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ item, onToggle }) => {
  return (
    <div className={`checklist-item ${item.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        id={item.id}
        checked={item.completed}
        onChange={() => onToggle(item.id)}
      />
      <label htmlFor={item.id}>{item.text}</label>
    </div>
  );
};

export default ChecklistItem;
