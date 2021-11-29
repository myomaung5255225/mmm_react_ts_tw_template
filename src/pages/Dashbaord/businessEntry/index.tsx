import React from "react";
import "./index.css"
interface businessEntryProps{
    className?:string;
}

export const BusinessEntryPage:React.FC <businessEntryProps> = ()=>{
    return(
        <div>
            <h3>Business Entry Page</h3>
        </div>
    )
}
