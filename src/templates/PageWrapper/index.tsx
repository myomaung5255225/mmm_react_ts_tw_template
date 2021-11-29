import React from "react";
import "./index.css"

interface pageWrapperProps{
  className?:string
}

export const PageWrapper:React.FC<pageWrapperProps> =({className,children})=>{
  return(
    <div className={`${className} font-primary m-0 p-0`}>
        {children}
    </div>
  )
}