import React from "react";  // import React (to provide access to JSX)

export function ThumbNailViewer(props) {
    const images = [];
    for (let i = 0; i < props.imageIds.length; i++)
    {
        images.push(<img
                        src={`https://picsum.photos/id/6${props.imageIds[i]}/200.jpg`}
                        onClick={() => props.setDisplayUrl(`https://picsum.photos/id/6${props.imageIds[i]}/1600/800.jpg`)}
                    />);
    }
    return (
        <div>
            {images}
        </div>
    );
}

