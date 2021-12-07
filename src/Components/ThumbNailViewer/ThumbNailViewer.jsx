import React from "react";  // import React (to provide access to JSX)

export function ThumbNailViewer(props) {
    const root = document.getElementById("root");
    //console.log("test")
    for (let i = 0; i < props.imageIds.length; i++)
    {
        const img = document.createElement("img");
        img.src = `https://picsum.photos/id/6${props.imageIds[i]}/200.jpg`;
        img.onclick = function ()
        {
            props.setDisplayUrl(`https://picsum.photos/id/6${props.imageIds[i]}/1600/800.jpg`);
        };
        root.appendChild(img);
    }
    return (
        <div id="root">
        </div>
    );
}

