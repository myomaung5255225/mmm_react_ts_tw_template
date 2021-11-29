import React from "react";
import "./index.css"

interface pageNotFoundProps{
    className?:string;
}

export const PageNotFound:React.FC<pageNotFoundProps> =({className})=>{
    return(
        <div>
            <h4>Page Not Found</h4>
        </div>
    )
}