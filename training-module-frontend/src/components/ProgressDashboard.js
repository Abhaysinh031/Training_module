import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProgressDashboard = () => {
  const [progress, setProgress] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/progress/1')
      .then(response => {
        setProgress(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const totalVideos = progress.length;
  const watchedVideos = progress.filter(p => p.progress > 0).length;
  const percentage = totalVideos ? (watchedVideos / totalVideos) * 100 : 0;

  return (
    <div>
      <h1>Progress Dashboard</h1>
      <p>Progress: {percentage.toFixed(2)}%</p>
    </div>
  );
};

export default ProgressDashboard;
