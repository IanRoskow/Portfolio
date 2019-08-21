import React from 'react';

const Header = () => {
    return (
        <div className="menu">
            <div className="logo">
                Logo
            </div>
            <a href="/" className="active item">
                Contact
            </a>
            <a href="/" className="item">
                Projects
            </a>
            <a href="/" className="item">
                About
            </a>
            
        </div>
    )
}

export default Header;