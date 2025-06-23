import React from "react";
import { JournalEntry as JournalEntryType } from "../../types";
import "./JournalEntry.css";

interface JournalEntryProps {
  entry: JournalEntryType;
}

const JournalEntry: React.FC<JournalEntryProps> = ({ entry }) => {
  const moodEmojis = ["😔", "😕", "😐", "🙂", "😁"];

  return (
    <div className="journal-entry">
      <div className="entry-header">
        <strong>{new Date(entry.date).toLocaleDateString()}</strong>
        <span className="mood-emoji">{moodEmojis[entry.mood - 1]}</span>
      </div>
      <div className="entry-content">
        <h4>What I Learned:</h4>
        <p>{entry.learned}</p>
        <h4>What I Implemented:</h4>
        <p>{entry.implemented}</p>
        {entry.avoided && (
          <>
            <h4>What I Avoided:</h4>
            <p>{entry.avoided}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default JournalEntry;
