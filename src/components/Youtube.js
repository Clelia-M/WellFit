import React, { useEffect, useState } from "react";

function Youtube() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // GET request to the Youtube API to search for videos with "gluten free vegetarian receipes" keyword (max 6)
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCpis3RcTw6t47XO0R_KY4WQ&maxResults=3&q=women%20workout&key=AIzaSyBtVcpEBC7OOCsQxa7h_5TCjeUuaynHiWo"
    )
      // Take the response from the API and converts it to JSON format
      .then((result) => {
        return result.json();
      })
      // Stores the "items" array in the "videos" state variable
      .then((data) => {
        console.log(data);
        let videos = data.items;
        setVideos(videos);
      });
  }, []);

  return (
    <div>
    <h2 id="yt-title"> Workout Inspiration</h2>
    <div id="youtube">
      {/* Loops over the "videos" array and creates HTML content for each video */}
      {videos.map((video) => (
        <div className="video-container" key={video.id.videoId}>
          <h3 className="video-title">{video.snippet.title}</h3>
          <br />
          <img
            className="video-img" alt="video-thumbnail"
            src={video.snippet.thumbnails.medium.url}
          />
          <br />
          <a
            href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
            target="_blank" rel="noopener noreferrer" className="video-link"
          >
            <button className="btn video-btn">Watch on YouTube</button>
          </a>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Youtube;