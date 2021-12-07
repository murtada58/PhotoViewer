import logo from './logo.svg';
import React, { useState } from 'react';
import {PhotoViewer} from "./Components/PhotoViewer/PhotoViewer";
import './App.css';
import {ThumbNailViewer} from "./Components/ThumbNailViewer/ThumbNailViewer";

function App() {
    const [displayUrl, setDisplayUrl] = useState("https://picsum.photos/id/600/1600/800.jpg")
    const brokenImages = [1, 24, 32, 36, 44, 47];
    const imageIds = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            imageIds.push(imageNumberString)
        }
    }
  return (
      <div>
        <h1>React Photo Viewer</h1>
        <PhotoViewer className={"PhotoViewer"} displayUrl = {displayUrl} />
        <ThumbNailViewer imageIds={imageIds} setDisplayUrl = {setDisplayUrl} />
      </div>
  );
}

export default App;
