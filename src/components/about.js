import React from "react";

function About({src, pageText}){
    return(
        <div>
            <img src={src} alt ="blog logo"/>
            <p>
                {pageText}
            </p>
        </div>
    )
}

export default About 