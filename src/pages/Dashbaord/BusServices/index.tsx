import React from 'react'
import "./index.css"

interface busServicesProps{
    className?:string
}

export const BusServicesPage:React.FC<busServicesProps> =({className})=>{
    return(
        <div>
            <h2>Bus Services</h2>
        </div>
    )
}