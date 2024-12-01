import React from "react";
import LandingPage from "./landingpage"; // Import your LandingPage component
import MainPage from "./mainpage";
import logo from "./assets/logo.png";  // Import logo.png
import dawg from "./assets/dawg.png";  // Import dawg.png

const App = () => {
  return (
    <div>
      <LandingPage />
      <MainPage /> {/* Render the LandingPage component */}
    </div>
  );
};

export default App;
