import React, { useState } from "react";
import "./TechniqueCard.css";

interface Technique {
  id: string;
  title: string;
  description: string;
  category: string;
  steps: string[];
}

interface TechniqueCardProps {
  technique: Technique;
}

const TechniqueCard: React.FC<TechniqueCardProps> = ({ technique }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`technique-card ${isExpanded ? "expanded" : ""}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="card-header">
        <h3>{technique.title}</h3>
        <span className="category-badge">{technique.category}</span>
      </div>
      <p>{technique.description}</p>
      {isExpanded && (
        <div className="card-content">
          <h4>Steps:</h4>
          <ol>
            {technique.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};

export default TechniqueCard;
