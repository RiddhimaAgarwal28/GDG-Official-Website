import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage from "./pages/EventsPage";
import TeamPage from "./pages/TeamPage";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/team" element={<TeamPage />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
