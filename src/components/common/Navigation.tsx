import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Tracker
      </NavLink>
      <NavLink
        to="/checklist"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Checklist
      </NavLink>
      <NavLink
        to="/emergency-kit"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Emergency Kit
      </NavLink>
      <NavLink
        to="/learning-trap"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Trap Detector
      </NavLink>
      <NavLink
        to="/journal"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Journal
      </NavLink>
    </nav>
  );
};

export default Navigation;
