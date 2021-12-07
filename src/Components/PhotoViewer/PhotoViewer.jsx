import React from "react";  // import React (to provide access to JSX)

export function PhotoViewer(props) {    // declare and export new function called 'PhotoViewer'
    return (
        <div>
            <img src={props.displayUrl} />
        </div>
    );
}

