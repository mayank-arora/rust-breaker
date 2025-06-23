import React, { useState } from "react";
import { JournalEntry } from "../../types";
import "./Journal.css";

interface NewEntryFormProps {
  onAddEntry: (entry: Omit<JournalEntry, "id" | "date">) => void;
}

const NewEntryForm: React.FC<NewEntryFormProps> = ({ onAddEntry }) => {
  const [learned, setLearned] = useState("");
  const [implemented, setImplemented] = useState("");
  const [avoided, setAvoided] = useState("");
  const [mood, setMood] = useState<1 | 2 | 3 | 4 | 5>(3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!learned || !implemented) {
      alert("Please fill out what you learned and implemented.");
      return;
    }
    onAddEntry({ learned, implemented, avoided, mood });
    setLearned("");
    setImplemented("");
    setAvoided("");
    setMood(3);
  };

  return (
    <form onSubmit={handleSubmit} className="new-entry-form">
      <h3>New Journal Entry</h3>
      <textarea
        placeholder="What did you learn today?"
        value={learned}
        onChange={(e) => setLearned(e.target.value)}
        required
      />
      <textarea
        placeholder="What did you build/implement today?"
        value={implemented}
        onChange={(e) => setImplemented(e.target.value)}
        required
      />
      <textarea
        placeholder="What did you avoid or procrastinate on?"
        value={avoided}
        onChange={(e) => setAvoided(e.target.value)}
      />
      <div className="mood-selector">
        <label>Mood:</label>
        <div>
          {[1, 2, 3, 4, 5].map((m) => (
            <button
              type="button"
              key={m}
              className={mood === m ? "active" : ""}
              onClick={() => setMood(m as any)}
            >
              {["😔", "😕", "😐", "🙂", "😁"][m - 1]}
            </button>
          ))}
        </div>
      </div>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default NewEntryForm;
