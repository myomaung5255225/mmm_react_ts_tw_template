import React from "react";
import { useSelector } from "react-redux";
import { Bloader } from "../../components/B2BLoader";
import { RootState } from "../../store";
import "./index.css"

interface authWrapperProps {
    className?: string,
    title?: string
}

export const AuthWrapper: React.FC<authWrapperProps> = ({ title = "b2badmin", className, children }) => {
    document.title = title
    const {loading} = useSelector((state:RootState) => state.auth)
    return (
        <div className={`${className} flex w-full justify-center min-h-screen items-center content-center bg-gray-200`} >
            <div className='w-full max-w-md px-2 py-2'>
                {children}
            </div>
            {
                loading && <Bloader />
            }
        </div>
    )
}