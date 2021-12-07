import React from "react";  // import React (to provide access to JSX)

export function ThumbNailViewer({images, setDisplayUrl}) {
    return (
        <div>
            {images.map(image => <img
                src={`https://picsum.photos/id/${image.id}/200.jpg`}
                onClick={() => setDisplayUrl(`https://picsum.photos/id/${image.id}/1600/800.jpg`)}
            />)}
        </div>
    );
}

