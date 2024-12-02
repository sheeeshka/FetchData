import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./landingpage"; 
import DataPreparationPage from "./datapreparation";
import VisualizationPage from "./visualization";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/datapreparation" element={<DataPreparationPage />} />
        <Route path="/visualization" element={<VisualizationPage />} />
      </Routes>
    </Router>
  );
};

export default App;
