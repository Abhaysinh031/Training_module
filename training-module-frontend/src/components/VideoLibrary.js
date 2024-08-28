import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import './VideoLibrary.css';

const VideoLibrary = () => {
  const [videos, setVideos] = useState([]);
  const [currentModule, setCurrentModule] = useState(0);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true); 
  const loadingBarRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    loadingBarRef.current.continuousStart();

    // Adding a 2-second delay before fetching and rendering data
    setTimeout(() => {
      axios.get('http://localhost:5000/videos')
        .then(response => {
          setVideos(response.data);
          const savedModule = localStorage.getItem('currentModule');
          if (savedModule) {
            setCurrentModule(Number(savedModule));
          }
          setLoading(false); // Set loading to false when data is ready
          loadingBarRef.current.complete(); // Complete the loading bar after data is set
        })
        .catch(error => {
          console.error(error);
          setLoading(false); // Stop loading in case of an error
          loadingBarRef.current.complete();
        });
    }, 2000); 
  }, []);

  useEffect(() => {
    const moduleProgress = (currentModule / (videos.length - 1)) * 100;
    setProgress(moduleProgress);
  }, [currentModule, videos]);

  const handleNextModule = () => {
    loadingBarRef.current.continuousStart();
    const nextModule = currentModule + 1;

    if (nextModule < videos.length) {
      setCurrentModule(nextModule);
      localStorage.setItem('currentModule', nextModule);
      navigate(`/video/${videos[nextModule].id}`);
    }
    loadingBarRef.current.complete();
  };

  const handleHome = () => {
    loadingBarRef.current.continuousStart();
    setCurrentModule(0);
    localStorage.setItem('currentModule', 0);
    navigate(`/video/${videos[0].id}`);
    loadingBarRef.current.complete();
  };

  return (
    <div>
      <LoadingBar color="#f11946" ref={loadingBarRef} />

      {loading ? (
        <div>
          <div className='navbar'>
            <div className='skeleton-navbar-item'></div>
            <div className='skeleton-navbar-item'></div>
            <div className='skeleton-navbar-item'></div>
          </div>
          <div className='skeleton-container'>
            <div className='skeleton-title'></div>
            <div className='skeleton-video'></div>
            <div className='skeleton-description'></div>
            <div className='skeleton-button'></div>
          </div>
        </div>
      ) : (
        <div>
          <div className='navbar'>
            <button onClick={handleHome}>Home</button>
            <div className='navbar-2'>
              <input type='search' placeholder='Search Anything'></input>
              <a href='#' className='about'>About Us</a>
              <a href='#' className='contact'>Contact us</a>
            </div>
          </div>
          <div className='container'>
            <h1>Module {currentModule + 1}</h1>
            <div className='progress'>
                <p>Progress: {Math.round(progress)}%</p>
            </div>
            {videos.length > 0 && (
              <>
                <div className='module'>
                  <h2>{videos[currentModule].title}:</h2>
                  <div className='description-video'>
                    <div className='description'>
                    <p>{videos[currentModule].description}</p>
                    </div>
                    <div data-vjs-player className='video'>
                      <video controls className="video-js" src={videos[currentModule].file_url}></video>
                    </div>
                  </div>
                  {currentModule < videos.length - 1 ? (
                    <div className='next-module'>
                    <button onClick={handleNextModule}>Next Module →</button>
                    </div>
                  ) : (
                    <p>Completed</p>
                  )} 
                  
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoLibrary;
