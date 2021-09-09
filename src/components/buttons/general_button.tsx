import React from "react";
import './index.css'
interface generalButtonProps {
    disabled?: boolean;
    label: string;
    onNextFunction: () => any | void;
    color: 'primary' | 'secondary',
    size?: 'sm' | 'md' | 'lg',
    className?: string;
}

export const GeneralButton: React.FC<generalButtonProps> = ({ disabled, label, onNextFunction, color, size, className }) => {
    return (
        <button disabled={disabled} type='button' onClick={onNextFunction} className={`${className} flex justify-center items-center px-2 py-2 content-center  text-white rounded-md text-sm cursor-pointer focus:outline-none  ${color === 'primary' ? 'bg-primary' : color === 'secondary' ? 'bg-secondary' : 'bg-primary'}`}>
            {label}
        </button>
    )
}