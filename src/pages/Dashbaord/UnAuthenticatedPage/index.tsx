import React from "react";
import "./index.css"

interface unAuthenticatedProps{
    className?:string;
}

export const UnAuthenticatedPage:React.FC <unAuthenticatedProps> =()=>{
    return(
        <div>
            <h4>Unauthenticated</h4>
        </div>
    )
}