import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checklist from "./components/checklist/Checklist";
import Navigation from "./components/common/Navigation";
import EmergencyKit from "./components/emergency-kit/EmergencyKit";
import Journal from "./components/journal/Journal";
import LearningTrapDetector from "./components/learning-trap/LearningTrapDetector";
import Tracker from "./components/tracker/Tracker";

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Tracker />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/emergency-kit" element={<EmergencyKit />} />
          <Route path="/learning-trap" element={<LearningTrapDetector />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
