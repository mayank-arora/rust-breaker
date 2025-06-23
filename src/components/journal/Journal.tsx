import React from "react";
import { useJournal } from "../../hooks/useJournal";
import JournalEntry from "./JournalEntry";
import NewEntryForm from "./NewEntryForm";
import "./Journal.css";

const Journal: React.FC = () => {
  const { entries, addEntry } = useJournal();

  return (
    <div className="journal-container">
      <h2>Progress Journal</h2>
      <NewEntryForm onAddEntry={addEntry} />
      <div className="journal-list">
        <h3>Past Entries</h3>
        {entries.length > 0 ? (
          entries.map((entry) => <JournalEntry key={entry.id} entry={entry} />)
        ) : (
          <p>No entries yet. Add one above!</p>
        )}
      </div>
    </div>
  );
};

export default Journal;
