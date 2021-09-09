import React from "react";
import { Link } from "react-router-dom";
import './index.css'

interface navLinkProps {
    label: string;
    src: string;
    className?: string;
}
export const NavLink: React.FC<navLinkProps> = ({ label, src, className }) => {
    return (
        <Link to={src} className={`${className} nav_link_button`} >
            <span className='nav_link_text'>{label} </span>
        </Link>
    )
}