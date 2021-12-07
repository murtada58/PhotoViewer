import React from "react";  // import React (to provide access to JSX)

export function PhotoViewer({displayUrl}) {    // declare and export new function called 'PhotoViewer'
    return (
        <div>
            <img src={displayUrl} alt="Random"/>
        </div>
    );
}

