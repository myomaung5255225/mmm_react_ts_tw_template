import React from "react";
import { Header } from '../'

export const Layout: React.FC = ({ children }) => {
    return (
        <div className='font-primary m-0 p-0'>
            <Header color='primary' />
            <div className='min-h-screen'>
                {children}
            </div>
        </div>
    )
}