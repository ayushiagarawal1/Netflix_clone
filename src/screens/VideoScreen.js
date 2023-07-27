import React, { useState, useEffect } from 'react';
import Youtube from 'react-youtube';
import "../screens/VideoScreen.css";

function VideoScreen() {
  const [videoKey, setVideoKey] = useState('');
  const opts = {
    height: '670',
    width: '1300',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
};
  useEffect(() => {
    let options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer YOUR_ACCESS_TOKEN',
      },
    };
    fetch("https://api.themoviedb.org/3/movie/872585/videos", options)
      .then((response) => response.json())
      .then((response) => {
        // Check if the response contains results and extract the video key
        const videoKeyFromResponse = response.results[0]?.key;
        if (videoKeyFromResponse) {
          setVideoKey(videoKeyFromResponse); // Here is the correct function to set the videoKey state
        }
      })
      .catch((err) => console.error(err));
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div className='video'>
      {videoKey && <Youtube videoId={videoKey}  opts={opts} />}
    </div>
  );

}

export default VideoScreen;
