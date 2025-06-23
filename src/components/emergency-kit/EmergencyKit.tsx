import React, { useState, useMemo } from "react";
import { emergencyTechniques } from "../../data/emergencyKit";
import TechniqueCard from "./TechniqueCard";
import "./EmergencyKit.css";

const EmergencyKit: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = useMemo(() => {
    const allCategories = emergencyTechniques.map((t) => t.category);
    return ["all", ...Array.from(new Set(allCategories))];
  }, []);

  const filteredTechniques = useMemo(() => {
    return emergencyTechniques
      .filter(
        (technique) =>
          selectedCategory === "all" || technique.category === selectedCategory
      )
      .filter((technique) =>
        technique.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [searchTerm, selectedCategory]);

  return (
    <div className="emergency-kit-container">
      <h2>Emergency Kit</h2>
      <div className="filters">
        <input
          type="text"
          placeholder="Search techniques..."
          className="search-bar"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="category-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? "active" : ""}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <div className="techniques-grid">
        {filteredTechniques.map((technique) => (
          <TechniqueCard key={technique.id} technique={technique} />
        ))}
      </div>
    </div>
  );
};

export default EmergencyKit;
