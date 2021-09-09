import React from "react";
import { Logo } from "../../components";
import { NavLink } from "../../components";

import './index.css'

interface headerProps {
    color?: 'primary' | 'secondary';
    className?: string;
    authenticated?: boolean;

}

export const Header: React.FC<headerProps> = ({ color, className, authenticated }) => {
    return (
        <div className='header_container'>
            <nav className={`${className} navbar ${color === 'primary' ? 'bg-primary' : color === 'secondary' ? 'bg-secondary' : 'bg-primary'}`}>
                <div className='nav_logo_container'>
                    <Logo alt='logo' className='rounded-md' />
                </div>
                {
                    authenticated ?
                        <div className='nav_container'>
                            <NavLink src='/logout' label='Logout' />

                        </div> :
                        <div className='nav_container'>
                            <NavLink src='/login' label='Login' />
                            <NavLink src='/singup' label='Singup' />
                        </div>
                }
            </nav>
        </div>
    )
}