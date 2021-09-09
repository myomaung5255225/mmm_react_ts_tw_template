import React from "react";
import logoImg from '../../assets/logo.png'
interface logoProps {
    className?: string;
    alt: string;
}
export const Logo: React.FC<logoProps> = ({ className, alt }) => {
    return (
        <img src={logoImg} alt={alt} className={`${className} w-12 h-12`} />
    )
}