import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VideoLibrary from './components/VideoLibrary';
import ProgressDashboard from './components/ProgressDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VideoLibrary />} />
        <Route path="/video/:id" element={<VideoLibrary />} />
        <Route path="/progress" element={<ProgressDashboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
