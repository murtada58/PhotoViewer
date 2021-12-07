import './App.css';
import React, { useState, useEffect } from 'react';
import {PhotoViewer} from "./Components/PhotoViewer/PhotoViewer";
import {ThumbNailViewer} from "./Components/ThumbNailViewer/ThumbNailViewer";

function App() {
    const [displayUrl, setDisplayUrl] = useState("https://picsum.photos/id/600/1600/800.jpg")
    const [images, setImages] = useState([]);
    const [imagesUrl] = useState("https://picsum.photos/v2/list?page=1&limit=200");

    useEffect(() => {
        fetch(imagesUrl)
            .then(response => response.json())
            .then(data => setImages(data))
    }, [imagesUrl])

  return (
      <div id="app">
          <h1>React Photo Viewer</h1>
          <PhotoViewer id="PhotoViewer" displayUrl = {displayUrl} />
          <h1>Select display image below</h1>
          <ThumbNailViewer images={images} setDisplayUrl = {setDisplayUrl} />
      </div>
  );
}

export default App;
